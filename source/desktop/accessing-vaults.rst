Accessing Vaults
================

You can only access decrypted files of a vault if you can unlock it. Unlocking a vault is just a two-step process as long as you know the password.

.. image:: ../img/desktop/vault-detail-locked.png
    :alt: Cryptomator window showing a locked vault


.. _desktop/accessing-vaults/unlocking-a-vault:

Unlocking a Vault
-----------------

1. Select the vault you wish to unlock.
2. Click on the large ``Unlock`` button located at the center of the Cryptomator window.
3. Enter your vault's password.

A confirmation will be displayed if your password is correct.
You can either close the confirmation window by clicking ``Done`` or click on ``Reveal Vault`` to show your unlocked vault in your file manager.

.. image:: ../img/desktop/unlock-prompt.png
    :alt: Vault unlock dialog

.. note::

    You can store the password in your operating system's keychain by checking the "Save Password" checkbox. There are also plug-ins available for Cryptomator, that allow you to store Cryptomator's vault passwords in third party password managers:

      - this `plug\-in <https://plugin.purejava.org>`_ stores Cryptomator’s vault passwords in a KeePassXC database
      - that `plug\-in <https://github.com/purejava/cryptomator-bitwarden/wiki>`_ stores the vault passwords in Bitwarden's Secrets Manager

    With a saved password, you can unlock your vaults without typing a password on every unlock. It's faster.

.. warning::

    Only store your password in the system's keychain on trusted devices. 
    Anyone with access to the computer with stored passwords will be able to unlock your vault, and in some cases, even find your password.

.. image:: ../img/desktop/unlock-success.png
    :alt: Vault unlock success dialog


.. _desktop/accessing-vaults/working-with-the-unlocked-vault:

Manage Files and Folders in your Vault
--------------------------------------

By default, a vault's content will be accessible via an attached virtual drive on your PC.
So, you can manage files and folders in your unlocked vault just like you do on any other hard drive or USB drive.

Alternatively, a vault's content can be accessed via a directory or a WebDAV server by changing its :ref:`volume type <desktop/volume-type/general-volume-type-selection>`. 
Click on ``Reveal Drive`` in the Cryptomator window to open the mount location using the default file manager (Windows Explorer, Finder, ...).

.. note::

     Even though your files are shown unencrypted in the virtual drive, they are not stored unencrypted on the hard drive but only in `volatile memory <https://en.wikipedia.org/wiki/Volatile_memory>`_

.. image:: ../img/desktop/vault-detail-unlocked.png
    :alt: Cryptomator window showing an unlocked vault

.. note::

    On Windows, you can choose the drive letter of the virtual drive for each vault using advanced vault options.


.. _desktop/accessing-vaults/locking-a-vault:

Locking a vault
---------------

To lock a vault, simply click ``Lock`` and the virtual drive will disappear or render empty. Your files remain encrypted at the vault's location.

.. image:: ../img/desktop/vault-detail-locked.png
    :alt: Cryptomator window showing an locked vault

Locate Encrypted File
---------------------

The Locate Encrypted File feature helps users find the encrypted version of a specific file. This feature is particularly useful as Cryptomator encrypts filenames and obfuscates directory structures. For example, users can utilize this function to restore an older version of a file by first locating its encrypted counterpart within the obfuscated directory and then applying the necessary decryption and restoration procedures.

1. Unlock the desired vault.
2. Click on the ``Locate Encrypted File`` button.
3. Select the file within the vault.

As an alternativ for clicking the button, you can directly drag & drop a file onto the button.

A file manager window opens showing the encrypted folder and marking the encrypted file.

.. raw:: html

    <video width="640" height="360" controls autoplay loop muted>
      <source src="../_static/vid/locate-encrypted-file.mov" type="video/mp4">
      Your browser does not support the video tag.
    </video>
