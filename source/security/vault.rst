Vault Cryptography
==================

.. _security/vault/file-header-encryption:

File Header Encryption
----------------------

The file header stores certain metadata, which is needed for file content encryption.
It consists of 68 bytes.

* 12 bytes nonce used during header payload encryption.
* 40 bytes `AES-GCM <https://en.wikipedia.org/wiki/Galois/Counter_Mode>`_ encrypted payload consisting of:

    * 8 bytes filled with 1 for future use (formerly used for file size) and
    * 32 bytes file content key.

* 16 bytes tag of the encrypted payload.

.. code-block:: console

    headerNonce := createRandomBytes(12)
    contentKey := createRandomBytes(32)
    cleartextPayload := 0xFFFFFFFFFFFFFFFF . contentKey
    ciphertextPayload, tag := aesGcm(cleartextPayload, encryptionMasterKey, headerNonce)

.. figure:: ../img/security/file-header-encryption@2x.png
    :alt: File Header Encryption
    :width: 706px
    :align: center

    \*Random per file change


.. _security/vault/file-content-encryption:

File Content Encryption
-----------------------

This is where your actual file contents get encrypted.

The cleartext is broken down into multiple chunks, each up to 32 KiB + 28 bytes consisting of:

* 12 bytes nonce,
* up to 32 KiB encrypted payload using AES-GCM with the file content key, and
* 16 bytes tag computed by GCM with the following AAD:

    * chunk number as 64 bit big endian integer (to prevent undetected reordering),
    * file header nonce (to bind this chunk to the file header),

Afterwards, the encrypted chunks are joined preserving the order of the cleartext chunks.
The payload of the last chunk may be smaller than 32 KiB.

.. code-block:: js

    cleartextChunks[] := split(cleartext, 32KiB)
    for (int i = 0; i < length(cleartextChunks); i++) {
        chunkNonce := createRandomBytes(12)
        aad := [bigEndian(i), headerNonce]
        ciphertextPayload, tag := aesGcm(cleartextChunks[i], contentKey, chunkNonce, aad)
        ciphertextChunks[i] := chunkNonce . ciphertextPayload . tag
    }
    ciphertextFileContent := join(ciphertextChunks[])

.. figure:: ../img/security/file-content-encryption@2x.png
    :alt: File Content Encryption
    :width: 782px
    :align: center 

    \*Random per chunk change


.. _security/vault/directory-ids:

Directory IDs
-------------

Each directory has a unique ID that is required during filename encryption.
For historical reasons, the directory ID is a string, even though any byte sequence would do the job.

The directory ID for the root directory is the empty string.
For all other directories, it is a random sequence of at most 36 ASCII chars.
We recommend using random :abbr:`UUID (Universally unique identifier)`.

.. code-block:: console

    dirId := createUuid()

When traversing directories, the directory ID of a given subdirectory is processed in four steps to determine the storage path inside the vault:

#. Encrypting the directory ID using `AES-SIV <https://tools.ietf.org/html/rfc5297>`_ in order to encrypt directory hierarchies.
#. Creating a SHA1 hash of the encrypted directory ID in order to get a uniform length.
#. Encoding the hash with Base32 to get a string of printable chars.
#. Constructing the directory path out of the Base32-encoded hash.

.. code-block:: console

    dirIdHash := base32(sha1(aesSiv(dirId, null, encryptionMasterKey, macMasterKey)))
    dirPath := vaultRoot + '/d/' + substr(dirIdHash, 0, 2) + '/' + substr(dirIdHash, 2, 30)

Regardless of the hierarchy of cleartext paths, ciphertext directories are always stored in a flattened structure.
All directories will therefore effectively be siblings (or cousins, to be precise).


.. _security/vault/filename-encryption:

Filename Encryption
-------------------

The cleartext name of a file gets encoded using UTF-8 in `Normalization Form C <https://unicode.org/reports/tr15/#Norm*Forms>`_ to get a unique binary representation.

Cryptomator uses `AES-SIV <https://tools.ietf.org/html/rfc5297>`_ to encrypt names.
The directory ID of the parent folder is passed as associated data.
This prevents undetected movement of files between directories.

.. figure:: ../img/security/filename-encryption@2x.png
    :alt: Filename Encryption
    :width: 614px
    :align: center

    \*Unencrypted directory ID of the parent dir `as described above <#directory-ids>`_


.. code-block:: console

    ciphertextName := base64url(aesSiv(cleartextName, parentDirId, encryptionMasterKey, macMasterKey)) + '.c9r'

Depending on the kind of node, the encrypted name is then either used to create a file or a directory.

* Files are stored as files.
* Non-files are stored as directories. The type of the node then depends on the directory content.

    * Directories are denoted by a file called ``dir.c9r`` containing aforementioned directory ID.
    * Symlinks are denoted by a file called ``symlink.c9r`` containing the encrypted link target.
    * Further types may be appended in future releases.

Thus, a cleartext directory structure like this:

.. code-block:: console

    .
    ├─ File.txt
    ├─ SymlinkToFile.txt
    ├─ Subdirectory
    │  └─ ...
    └─ ...

Becomes a ciphertext directory structure like this:

.. code-block:: console

    .
    ├─ d
    │  ├─ BZ
    │  │  └─ R4VZSS5PEF7TU3PMFIMON5GJRNBDWA
    │  │     ├─ 5TyvCyF255sRtfrIv**83ucADQ==.c9r  # File.txt
    │  │     ├─ FHTa55bH*sUfVDbEb0gTL9hZ8nho.c9r  # Subdirectory
    │  │     │  └─ dir.c9r  # contains dirId
    │  │     └─ gLeOGMCN358*UBf2Qk9cWCQl.c9r  # SymlinkToFile.txt
    │  │        └─ symlink.c9r  # contains link target
    │  └─ FC
    │     └─ ZKZRLZUODUUYTYA4457CSBPZXB5A77  # contains contents of Subdirectory
    │        └─ ...
    ├─ masterkey.cryptomator
    ├─ masterkey.cryptomator.DFD9B248.bkup
    └─ vault.cryptomator


.. _security/vault/name-shortening:

Name Shortening
---------------

.. note::

    This layer doesn't provide any additional security.
    Its sole purpose is to maximize compatibility.

To maximize compatibility, we need to make sure the ciphertext names don't exceed a length of 255 chars.
As some cloud sync services might want to add a suffix to a file in case of conflicts, we decided to use at most 220 chars.

If an encrypted name (including its ``.c9r`` extension) exceeds these 220 chars, we will instead create a directory named after its much shorter SHA-1 hash and the ``.c9s`` extension.
Additionally we will create a reverse-mapping file named ``name.c9s`` containing the original file inside of this directory.

.. code-block:: js

    if (length(ciphertextName) > 220) {
        deflatedName := base64url(sha1(ciphertextName)) + '.c9s'
        inflatedNameFilePath := deflatedName + '/name.c9s'
        fileContentsPath := deflatedName + '/contents.c9r'
        symlinkFilePath := deflatedName + '/symlink.c9r'
        dirIdFilePath := deflatedName + '/dir.c9r'
    }

Again, we have to distinguish the kind of a node.

* Non-files (such as symlinks or directories) are stored as a directory anyway. Nothing changes for them.
* Files, on the other hand, need a different place to store their contents. Therefore, we introduce the ``contents.c9r`` file inside the ``.c9s`` directory.

A vault containing several nodes with very long names might result in a ciphertext structure like this:

.. code-block:: console

    .
    ├─ d
    │  ├─ BZ
    │  │  └─ R4VZSS5PEF7TU3PMFIMON5GJRNBDWA
    │  │     ├─ 5TyvCyF255sRtfrIv**83ucADQ==.c9r
    │  │     ├─ FHTa55bH*sUfVDbEb0gTL9hZ8nho.c9r
    │  │     │  └─ dir.c9r
    │  │     ├─ gLeOGMCN358*UBf2Qk9cWCQl.c9r
    │  │     │  └─ symlink.c9r
    │  │     ├─ IjTsXtReTy6bAAuxzLPV9T0k2vg=.c9s  # shortened name...
    │  │     │  ├─ contents.c9r  # ...node is a regular file
    │  │     │  └─ name.c9s  # ...mapping to this full name
    │  │     ├─ q2nx5XeNCenHyQvkFD4mxYNrWpQ=.c9s  # shortened name...
    │  │     │  ├─ dir.c9r  # ...node is a directory
    │  │     │  └─ name.c9s  # ...mapping to this full name
    │  │     └─ u*JJCJE-T4IH-EBYASUp1u3p7mA=.c9s  # shortened name...
    │  │        ├─ name.c9s  # ...mapping to this full name
    │  │        └─ symlink.c9r  # ...node is a symlink
    │  └─ FC
    │     └─ ZKZRLZUODUUYTYA4457CSBPZXB5A77
    │        └─ ...
    ├─ masterkey.cryptomator
    ├─ masterkey.cryptomator.DFD9B248.bkup
    └─ vault.cryptomator


.. _security/vault/backup-directory-ids:

Backup Directory IDs
--------------------

.. note::

    This layer is optional and not required for a complete implementation of the Cryptomator Encryption Scheme.
    It doesn't provide any additional security.
    Its sole purpose is to increase data recoverability in case of missing or damaged directory files.

By obfuscating the hierarchy of cleartext paths using ``dir.c9r`` files, which contain :ref:`directory IDs <security/vault/directory-ids>`, the directory structure is more vulnerable to problems like incomplete synchronization or bit rotting.

When a directory file is missing or damaged, the ``dirPath`` cannot be computed, which effectively makes the directory content inaccessible in the :ref:`virtual filesystem <security/architecture/virtual-filesystem>`.
In theory, the contents of the encrypted content of these files can be recovered.
But since the :ref:`filename encryption <security/vault/filename-encryption>` is dependent on the directory ID of the parent folder, which is only stored in the directory file, names of all items (files, directories, or symlinks) are lost.

To alleviate this issue, a backup directory file will be stored during the creation of a directory.
Inside the ciphertext directory, a file named ``dirid.c9r`` will be created, which contains the directory ID of its parent folder.
It is :ref:`encrypted <security/vault/file-content-encryption>` like a regular ciphertext file.
