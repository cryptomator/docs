---
id: accessing-vaults
title: Accessing Vaults
sidebar_position: 4
---

# Accessing Vaults

You can only access decrypted files of a vault if you can unlock it. Unlocking a vault is just a two-step process as long as you know the password.

<Image src="/img/desktop/vault-detail-locked.png" alt="Cryptomator window showing a locked vault" width="762" height="610" />

## Unlocking a Vault {#unlocking-a-vault}

1. Select the vault you wish to unlock in the vault list.
2. Click on the large `Unlock` button in the vault detail view of the Cryptomator window.
3. Enter your vault's password.
4. Click the `Unlock` button.

<Image src="/img/desktop/unlock-prompt.png" alt="Vault unlock dialog" width="512" height="285" />

:::note
You can store the password in your operating system's keychain by checking the "Remember password" checkbox.
With a saved password, you can unlock your vaults without typing a password on every unlock.
For more information, see the [Storing Passwords](/docs/desktop/password-and-recovery-key.md#storing-passwords) section.

:::warning
Only store your password in the system's keychain on trusted devices.
Anyone with access to these devices will be able to unlock your vault, and in some cases, even read your stored password.
:::

If your password is correct, a success message will be displayed, and the vault will be unlocked.
You can close the success window by clicking `Done`, or click `Reveal Vault` to show the unlocked vault in your file manager.

<Image src="/img/desktop/unlock-success.png" alt="Vault unlock success dialog" width="512" height="314" />

## Locking a Vault {#locking-a-vault}

To lock a vault, simply click `Lock` and the virtual drive will disappear or render empty. Your files remain encrypted at the vault's location.

## Manage Files and Folders in Your Vault {#manage-files-and-folders-in-your-vault}

By default, a vault's content will be accessible via an attached virtual drive on your PC.
So, you can manage files and folders in your unlocked vault just like you do on any other hard drive or USB drive.

Alternatively, a vault's content can be accessed via a directory or a WebDAV server by changing its [volume type](volume-type.md).
Click on `Reveal Drive` in the Cryptomator window to open the mount location using the default file manager (Windows Explorer, Finder, …).

:::note
Even though your files are shown unencrypted in the virtual drive, they are not stored unencrypted on the hard drive but only in [volatile memory](https://en.wikipedia.org/wiki/Volatile_memory).
:::

<Image src="/img/desktop/vault-detail-unlocked-simple.png" alt="Cryptomator window showing an unlocked vault" width="762" height="610" />

:::note
On Windows, you can choose the drive letter of the virtual drive for each vault using advanced vault options.
:::

## Locate Encrypted File {#locate-encrypted-file}

The Locate Encrypted File feature helps users find the encrypted version of a specific file. This feature is particularly useful when vault files are versioned and the user wants to restore an older version of a file. As Cryptomator encrypts filenames and obfuscates directory structures, users first locate the encrypted file and then restore an older version of the encrypted file with the third party app.

1. Unlock the desired vault.
2. Click on the `Locate Encrypted File` button.
3. Select the file within the vault.

As an alternative for clicking the button, you can directly drag & drop a file onto the button.

A file manager window opens showing the encrypted folder and marking the encrypted file.

<video controls autoplay loop muted style={{width: '100%', maxWidth: '1280px', height: 'auto'}}>
  <source src="/vid/locate-encrypted-file.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## File System Case Sensitivity {#file-system-case-sensitivity}

:::warning
Cryptomator virtual drives are always case-sensitive. This means `Document.txt` and `document.txt` are treated as two different files, regardless of your operating system.
:::

This behavior is required for Cryptomator's deterministic [filename encryption](/docs/security/vault.md#filename-encryption) to work correctly across all platforms. While Linux users are accustomed to case-sensitive file systems, this can cause unexpected behavior on Windows and macOS where the default file systems are case-insensitive.

On Windows and macOS, this difference means:

1. Attempting to open `Test.dat` when the file is named `test.dat` will result in a "file not found" error
2. You can create both `README.md` and `readme.md` in the same directory, which would normally conflict
3. Some applications may fail when they expect case-insensitive file access

Our recommendation is to avoid creating files with names that differ only in case. Make sure to test applications like backup tools or any other software that will access files in your vault to ensure they handle case-sensitive file systems correctly.
