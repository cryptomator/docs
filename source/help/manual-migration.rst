Manual Migration
================

If a vault is located on a storage location that does not support long filenames or file paths, an automatic migration will fail. In that case, a manual migration will help you identify which files are unsupported.

1. Unlock vault with the previous version of Cryptomator that you have used. Downloads of older version can be found `here <https://github.com/cryptomator/cryptomator/releases/>`_.
2. Copy all files out of the vault into a different storage location. Be aware that these files are unencrypted so make sure that you consider this location secure.
3. Lock vault, quit Cryptomator, and install latest version of Cryptomator.
4. Create new vault with the latest version of Cryptomator and unlock it.
5. Copy all files from step 2 into the new vault.

If the new vault is located on the same storage location, you may encounter errors that indicate that a filename is too long. You can then shorten the filename and try to copy them again to the new vault.
