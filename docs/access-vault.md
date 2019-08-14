# Unlock a Vault
If you want to access the data inside a vault, you have to unlock it. Currently locked vaults are marked with a red dot in Cryptomator’s vault list. Unlocked vaults are marked with a green dot.

If you select a locked vault, you can unlock it by entering your password. After entering the correct password Cryptomator displays a diagram showing the currently en- and decrypted amount of data. In addition, the virtual drive containing the decrypted data is opened.

You can now use this drive with the open and save dialogs of other programs to access the data in the vault and work with the files as usual.

## Advanced Unlock Options
When unlocking a vault, you can display further options. Here you are able to choose what happens after unlocking the vault. By default it will also get mounted as a virtual drive. These options allow you to:

* Disable mounting
* Change mount name and drive letter (only on Windows)
* Save the password in your system keychain (only Windows and macOS)
* Automatically unlock the vault when starting Cryptomator (only if the password has been saved)

# Reveal an Already Unlocked Vault
If a vault is already unlocked, you can search the virtual drive using your file browser. You can also display it using Cryptomator. Choose the unlocked vault, click on the small arrow next to `Lock vault` and choose `Reveal drive`.

Experts may also copy the WebDAV-URL. You can use it with the WebDAV client of your choice to access the vault.
