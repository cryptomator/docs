---
id: accessing-vaults
title: Accessing Vaults
sidebar_position: 4
---

# Accessing Vaults

You can only access decrypted files of a vault if you can unlock it. Unlocking a vault is just a two-step process as long as you know the password.

<Image src="/img/desktop/vault-detail-locked.png" alt="Cryptomator window showing a locked vault" width="762" height="610" />

## Unlocking a Vault {#unlocking-a-vault}

1. Select the vault you wish to unlock.
2. Click on the large `Unlock` button located at the center of the Cryptomator window.
3. Enter your vault's password.

A confirmation will be displayed if your password is correct.
You can either close the confirmation window by clicking `Done` or click on `Reveal Vault` to show your unlocked vault in your file manager.

<Image src="/img/desktop/unlock-prompt.png" alt="Vault unlock dialog" width="512" height="285" />

:::note
You can store the password in your operating system's keychain by checking the "Save Password" checkbox. There are also plug-ins available for Cryptomator, that allow you to store Cryptomator's vault passwords in third party password managers:

- [KeePassXC plug-in](https://plugin.purejava.org) stores Cryptomator's vault passwords in a KeePassXC database
- [Bitwarden plug-in](https://github.com/purejava/cryptomator-bitwarden/wiki) stores the vault passwords in Bitwarden's Secrets Manager

With a saved password, you can unlock your vaults without typing a password on every unlock. It's faster.
:::

:::warning
Only store your password in the system's keychain on trusted devices. 
Anyone with access to the computer with stored passwords will be able to unlock your vault, and in some cases, even find your password.
:::

<Image src="/img/desktop/unlock-success.png" alt="Vault unlock success dialog" width="512" height="314" />

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

## Locking a Vault {#locking-a-vault}

To lock a vault, simply click `Lock` and the virtual drive will disappear or render empty. Your files remain encrypted at the vault's location.

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
