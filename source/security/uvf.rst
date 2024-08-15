Vault Cryptography with Universal Vault Format
==============================================

In the mid-term, we want to support Key Rotation.
After Key Rotation, new data will be encrypted with new keys.
This will allow to retract access from vault members,
cryptographically ensuring they can never decrypt new data.

`Unified Vault Format (uvf) <https://github.com/encryption-alliance/unified-vault-format>`_
defines a common vendor-independent standard. It is close to `Vault Format 8 <https://docs.cryptomator.org/en/latest/misc/vault-format-history/>`_,
and will allow to support key rotation in the future.
Key rotation is not implemented yet, though.
Users will need to decide at vault creation time whether to use the new format.

.. warning::
    New vaults will be created in the new uvf format.
    There is no automatic migration plan for Vault Format 8 and below as data needs to be re-encrypted.
    Users will need to create a new vault (in the new uvf format) and to upload the data again.
    Clients and hub will be backwards-compatible.


.. _security/uvf/key-rotation:

Key Rotation
------------
If a member (assume it's Bob) is removed from a vault, we need to replace the existing keys.
Theoretically, we could re-encrypt the whole data. However, this is time- and resource-consuming (I/O). And Bob may have made a backup copy of the data anyway.
Therefore, key rotation aims at enrypting new data - Bob must not be able to decrypt the new data with his old key, even if he still has access to the new ciphertext.

The uvf metadata file replaces the masterkey file (or the user-specific JWE containing the masterkey introduced in Cryptomator hub `1.3.0 <https://github.com/cryptomator/hub/releases/tag/1.3.0>`_).
It can contain many key generations - only the latest generation is used for data encryption.
The older generations are used to read the older data encrypted with previous generation keys.

Here's an example of the uvf metadata payload with different key generations in the ``seeds`` field and the ``latestFileKey`` pointing to the current key:

.. code-block:: json

    {
        "fileFormat": "AES-256-GCM-32k",
        "nameFormat": "AES-256-SIV",
        "seeds": {
            "HDm38i": "ypeBEsobvcr6wjGzmiPcTaeG7/gUfE5yuYB3ha/uSLs=",
            "gBryKw": "PiPoFgA5WUoziU9lZOGxNIu9egCI1CxKy3PurtWcAJ0=",
            "QBsJFo": "Ln0sA6lQeuJl7PW1NWiFpTOTogKdJBOUmXJloaJa78Y="
        },
        "latestFileKey": "QBsJFo",
        "nameKey": "HDm38i",
        "kdf": "HKDF-SHA512",
        "kdfSalt": "NIlr89R7FhochyP4yuXZmDqCnQ0dBB3UZ2D+6oiIjr8=",
        "org.example.customfield": 42
    }


When a new generation of keys is added to the metadata file, it must be re-encrypted as well - Bob, with his old key, must not have be able to decrypt data encrypted later.

Furthermore, for technical reasons (which will become clear below), the above payload needs to be shared with several ``recipients``.
More precisely, we use different Key Encapsulation methods to encrypt the payload for multiple recipients (a ``recipient`` being identified by their key ID ``kid``).
This is done in two steps:

- The payload is encrypted only once with the same (shared) Content Encryption Key (CEK). The encrypted payload is stored in the ``ciphertext`` field of the encrypted metadata file.
- The CEK is then encrypted specifically for each recipient with their key and method, and the resulting encrypted stored in the ``encrypted_key`` field of the encrypted metadata file.

Here's an example of an (encrypted) metadata file (JWE in JSON serialization, see `RFC 7516 <https://www.rfc-editor.org/rfc/rfc7516.html>`_)  with two recipients (``org.cryptomator.hub.memberkey`` and ``org.cryptomator.hub.recoverykey``):

.. code-block:: json

    {
      "protected": "eyJlbmMiOiJBMjU2R0NNIiwiamt1IjogImZvby9iYXIva2V5cy5qd2tzIn0",
      "recipients": [
        {
          "header": {
            "alg": "A256KW",
            "kid": "org.cryptomator.hub.memberkey"
          },
          "encrypted_key": "6KB707dM9YTIgHtLvtgWQ8mKwboJW3of9locizkDTHzBC2IlrT1oOQ"
        },
        {
          "header": {
            "alg": "ECDH-ES+A256KW",
            "kid": "org.cryptomator.hub.recoverykey.{keyhash}",
            "epk": {
              "kty": "EC",
              "crv": "P-384",
              "x": "z7S-cEoCC0J0H42jocPnEgMr8pr0wyIZgaMvzu4We8B_nQkF1zpYSGZRcD9wI3hA",
              "y": "PlaiCkoGadNfVFi2ju-Dr19CewL-kjvXI8ibFOWaKizPh5gWjm9BFvx9Ox41Ka8x"
            }
          },
          "encrypted_key": "6KB707dM9YTIgHtLvtgWQ8mKwboJW3of9locizkDTHzBC2IlrT1oOQ"
        }
      ],
      "iv": "48V1_ALb6US04U3b",
      "ciphertext": "5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_A",
      "tag": "XFBoMYUZodetZdvTiFvSkQ"
    }

The `tag` field contains the `MAC <https://en.wikipedia.org/wiki/Message_authentication_code>`_ which allows to verify message authentication and integrigy checking, i.e.
verify that the message can only come from someone having access to the CEK and not being tampered with.
Note that he recipient headers are authenticated as well.

.. image:: ../img/security/uvf_key_rotation.drawio.png
    :alt: uvf Key Rotation
    :width: 700px
    :align: center



Vault Members
-------------
All vault members share the same vault member key to access the vault metadata.

The shared vault member key is a 256 bit AES Key. It is used for AES Key Wrap (``"alg": "A256KW"``) to enrypt/decrypt the metadata CEK.
The wrapped CEK is stored as ``encrypted_key`` for the ``org.cryptomator.hub.memberkey`` recipient.

The vault member key in turn is stored for each user separately in the hub in the form of a JWE encrypted with user's public user key.
Upon key rotation, the JWE for each user needs to be updated by using the public user key of each vault member.




Recovery Key
------------
Recovery keys are supposed to be long-living (print out human-readable and store offline) and should not be known by every vault member (only members with access to the private recovery key).

In the key rotation setting, symmetric keys cannot be used for recovery key encryption.
Not only vault members with access to the recovery key, but any vault member must be able  to carry out key rotation.
However, in symmetric cryptography, the same key is used for encryption and decryption.
Key rotation mast be carried out by a vault member as only vault members must know the metadata containing the CEK generations so far.

Vault members may also be notified by an external event (e.g. person leaving an organisation), share the new metadata after key rotation with a restricted member set only.


Therefore, we use an ECDH key pair for each ``org.cryptomator.hub.recoverykey.{keyhash}`` recipient. Here's an example of such a key pair:

.. code-block:: json

    {
      "kty": "EC",
      "crv": "P-384",
      "d": "cMyQpw7YIGjop48z1fh9fekbjwVvCThhC0Owumzv_hTHkljBAG8bnMUSbts55Vy6",
      "x": "BzMNrgLiKSi9-gJ944_u7YgdXk5UfzGzSFlbDmuQS49LgVc8JpMAm1rAYhrLV9zi",
      "y": "X9rATILnkQNx33tIjVwkgVZj1E7r69ZN1K4QHvhjO3tgoBGiIbvf2D14CaFPnvM9"
    }

The private key is the part that can be printed out at vault creation time.
That's the ``d`` parameter above, which is a short bit of information that can be easily encoded in a human-readable way.
All the other parts form the public key.
During key rotation, only the public key needs to be known.
The public key is used to encrypt the new CEK, and the recipient in the metadata is updated with the new ``encrypted_key``.
The public key can be retrieved from the hub for key rotation with the vault's ID.

The API returns a JWK Set, containing the public key for the vault recovery key ``org.cryptomator.hub.recoverykey.{keyhash}``
(currently, the JWK set will only contain the vault recovery key, but could be used for further keys in the future):

.. code-block:: json

    {
        "keys": [
            {
                "kid": "org.cryptomator.hub.recoverykey.{keyhash}",
                "kty": "EC",
                "crv": "P-384",
                "x": "BzMNrgLiKSi9-gJ944_u7YgdXk5UfzGzSFlbDmuQS49LgVc8JpMAm1rAYhrLV9zi",
                "y": "X9rATILnkQNx33tIjVwkgVZj1E7r69ZN1K4QHvhjO3tgoBGiIbvf2D14CaFPnvM9",
                "use": "enc",
                "key_ops": ["deriveKey"]
            }
        ]
    }

The following rules need to be respected upon encrypting the CEK for vault recovery key:

.. csv-table:: Recovery Key JWE verification
    :header: "verify",  "protection against"


    "relative URL",  "implantation of untrusted URLs "
    "JWE signature", "JWE manipulation"
    "public key hash",  "implantation of new public key at server side"

Only URLs relative to the trusted hub must be followed, absolute URLs must not be followed in order for not retrieve the public recovery key from an untrusted source.
JWE signature verification makes sure the JWE comes from someone having access to the CEK, i.e. from a vault member (having access to CEK via memberkey or recoverykey).
A technical admin of the managed server cannot implant public keys at the server side unnoticed without being a vault member, as the keyhash is authenticated by the `tag` as well.


.. warning::
    Vault owners must be careful not to share vaults with technical hub admins.
    Only a technical hub admin who is also a Vault Member, could sneak in a new recovery key pair (and thereby gain access to future data).
    A technical hub admin of the managed server who is not Vault Member cannot perform this forgery.
    This ensures Zero Knowledge for Managed Servers.

.. warning::
    A malicious technical hub admin could still do some sort of "phishing" attack by "emptying" the vault, i.e. uploading a new memberkey (or also recoverykey).
    Vault members not paying attention could upload files and  the malicious technical hub admin would then have access to the new data.
    This kind of attack would be noticed only if there is data in the storage for which the seeds have been removed from the metadata file or
    if a vault owner cannot use their locally stored recovery key any more.


Look Ahead: Key Rotation
------------------------
Although actual rotation of keys is not implemented yet, we give a sketch of the future implementation.
To ensure Zero Knowledge, key rotation is not performed in the server, but on a vault member's machine in the client code.
Only the encrypted data is then uploaded to the hub.
Even a technical admin with access to the DB cannot gain access to the key material and, therefore, not decrypt the data even with access to the cloud storage.

Key rotation will comprise the following steps:

- get mutex for vault key rotation from hub (avoid concurrent key rotation for the same vault, lock at server)
- generate new memberkey
- encrypt new memberkey for all members with their public user key and update their vault access token
- generate new CEK
- generate new seed for data encryption and add to `seeds` of new metadata payload
- encrypt payload with CEK for `ciphertext` of new metadata JWE
- encrypt CEK with new memberkey and public recovery key into corresponding `encrypted_key` new metadata JWE
- upload new metadata JWE
- return mutex for vault key rotation to hub


File Header Encryption
----------------------
.. warning::
    TODO: Differences to Vault8?

File Content Encryption
-----------------------
.. warning::
    TODO: Differences to Vault8?

Directory Ids
-------------
.. warning::
    TODO: Differences to Vault8?

Filename Encryption
-------------------
.. warning::
    TODO: Differences to Vault8?

Name Shortening
---------------
.. warning::
    TODO: Differences to Vault8?

Backup Directory Ids
--------------------
.. warning::
    TODO: Differences to Vault8?