---
id: password-and-recovery-key
title: Password and Recovery Key
sidebar_position: 5
---

# Password and Recovery Key

This section explains how to change a password for a vault, show its recovery key, and reset a password.
But, before that, let's understand how Cryptomator encrypts a vault using a password and what a recovery key is.
The security of your vault is only as good as its password because Cryptomator encrypts your vault using a key derived from your password.
So, [choosing a strong password](/docs/security/best-practices.md#good-passwords) is very important.

Additionally, a unique *recovery key* can be derived for each vault while creating its password or later.
A *recovery key* allows you to create a new password if you forget the original one.
Do note that the *recovery key* feature does not break encryption in any way.
It is a human readable form of your decrypted [masterkey](/docs/security/architecture.md#masterkey) and therefore independent of the current vault password and highly confidential.
Keep it as safe as your password.

All actions can be carried out using the `Password` tab under vault options.
You can access it by selecting a vault, lock it if necessary, and click on `Vault Options`.

<Image src="/img/desktop/vault-options-password.png" alt="Vault options allowing you to enter a recovery key" width="512" height="448" />

## Change Password {#change-password}

To change the password of an existing vault, you need to know its current one or have a recovery key (see reset password section).

Navigate to the `Vault Options` → `Password` tab, and click on `Change Password`.

In the opened window, you will be asked for:

1. The vault's current password.
2. A new password. We suggest following our guide on choosing a [strong password](/docs/security/best-practices.md#good-passwords).
3. Enter the new password again.

:::info
Be mindful of your keyboard layout when changing passwords. Special characters and dead keys can behave differently across keyboard layouts (e.g., Dutch vs. English). This may cause password entry issues if you switch keyboard layouts later. For more information, see [Keyboard Layouts and Special Characters](/docs/security/best-practices.md#keyboard-layouts-and-special-characters).
:::

In order to proceed, you must confirm that you understand your action by selecting a checkbox.

Finally, click on the `Change` button to change the password.

:::note
The `Change` button is activated only if the new password fields match and the checkbox is selected.
:::

<Image src="/img/desktop/change-password-prompt.png" alt="After entering your current password, enter your new one and confirm it" width="512" height="528" />

:::info
The password is used to derive a [KEK](https://en.wikipedia.org/wiki/Glossary_of_cryptographic_keys), which is then used to encrypt further keys. The KEK changes, but the keys encrypted with the KEK will stay the same. The actual files will not get re-encrypted, meaning you can not upgrade a weak passphrase to a stronger one once the data has been synced to a service that allows recovery of older versions of the masterkey file.

If you like to encrypt your vault files with a new, stronger password, you need to create a new vault and drag the data from the old to the new one. Make sure to wipe all backups of the old vault afterwards.
:::

## Storing Passwords {#storing-passwords}

:::info
Storing passwords in a keychain can be convenient, but it also poses a security risk if your device is compromised.
Ensure that your device is secure and that you trust the used keychain.
:::

By default, Cryptomator does not store your vault's password on your hard drive.
It is only used to unlock the vault and is destroyed afterward.
However, you can enable the option to store the password in the system keychain.
This is useful if you want to avoid entering the password every time you unlock the vault.

To enable this option:
1. Navigate to the `General` tab in the preferences.
1. Check the box `Store passwords with …` and select your preferred keychain (e.g., macOS Keychain, Windows Hello, or GNOME Keyring).

:::note
Not all keychains are supported on all platforms. For example, macOS Keychain is only available on macOS, and Windows Hello is only available on Windows.
:::

To store a password for a vault:
1. Start the unlocking process by selecting the vault and clicking on `Unlock` in the main window.
1. Tick the box `Remember password` in the unlock dialog.
1. Enter the vault's password and click on `Unlock`.

The password will be stored in the selected keychain, allowing you to unlock the vault without entering the password again.
Some keychains may require you to authenticate (e.g., using your system password or biometric authentication) before storing/accessing the password.

The stored password can be removed at any time by opening the `Vault Options` → `Password` tab and clicking on `Remove saved password`.

Available keychains are:

<details>
  <summary>macOS Keychain (macOS)</summary>

  Uses the built-in macOS keychain to store your password.
  The password is only stored locally on your Mac and is encrypted using the system's security features.
</details>
<details>
  <summary>Touch ID (macOS)</summary>

  Uses the built-in macOS keychain, but requires authentication with Touch ID before you can access the password.
  The password is only stored locally on your Mac and is encrypted using the system's security features.

  Requires a compatible Mac with Touch ID enabled.
</details>
<details>
  <summary>Windows Hello (Windows)</summary>

  Uses the Windows Hello feature to encrypt your password.
  The password is only stored locally on your Windows device and is encrypted using a key derived from your Windows user account.

  Requires a compatible Windows device with Windows Hello enabled.
</details>
<details>
  <summary>Windows Data Protection API (Windows)</summary>

  Uses the Windows Data Protection API to encrypt your password.
  The password is only stored locally on your Windows device and is encrypted using a key derived from your Windows user account.
</details>
<details>
  <summary>GNOME Keyring (Linux)</summary>

  Uses the GNOME keyring to store your password.
  The password is only stored locally in the default GNOME keyring.

  Requires GNOME keyring to be installed and running on your Linux system, with the default keyring present.
</details>
<details>
  <summary>KDE Wallet (Linux)</summary>

  Uses the KDE Wallet to store your password.
  The password is only stored locally in the default KDE Wallet.

  Requires KDE Wallet to be installed and running on your Linux system, with the default wallet present.
</details>

 There are also third-party plug-ins for Cryptomator that allow you to store vault passwords in external password managers:

- [KeePassXC plug-in](https://plugin.purejava.org) stores Cryptomator's vault passwords in a KeePassXC database.
- [Bitwarden plug-in](https://github.com/purejava/cryptomator-bitwarden/wiki) stores the vault passwords in Bitwarden's Secrets Manager.


## Show Recovery Key {#show-recovery-key}

You can derive a recovery key during vault creation or even later as long as you know your vault's password.
To increase security, Cryptomator does not store the recovery key on your hard drive and always derives it on the fly.

:::warning
A recovery key can reset a vault's current password. 
So, treat it like a password and ensure only trusted people have access to it.
:::

To derive a recovery key:

1. Navigate to the `Password` tab under `Vault Options`.
2. Click on `Display Recovery Key`.
3. Enter the vault's password.

A new window will open displaying a sequence of words (i.e., the recovery key).

<Image src="/img/desktop/recoverykey.png" alt="This shows your recoverykey" width="512" height="494" />

You can copy it to your clipboard and store it in a secure password manager, or print it on paper.

## Reset Password {#reset-password}

We cannot reset the password of a vault for you in any way. Only you can reset a vault's password, assuming you have its recovery key. Keep it ready before you proceed.

1. Navigate to the `Password` tab under `Vault Options`.
2. Click on `Recover Password`.

Type or paste your recovery key in the new window.

:::note
Cryptomator offers an auto completion feature to make things easier when typing a recovery key. It's helpful if your recovery key is printed on paper or stored it somewhere where you cannot copy it. The feature will kick in automatically once you start typing the first few letters of a word.
:::

<Image src="/img/desktop/recoverykey-recover-enter.png" alt="Autocompletion during recovery key entry" width="512" height="384" />

If the recovery key is valid, a small message will be displayed below the entered recovery key and the `Next` button will be activated.

<Image src="/img/desktop/recoverykey-recover-valid.png" alt="A valid recovery key has been entered" width="512" height="384" />

:::info
By design, *only* the correct recovery key is accepted. **A valid but incorrect key won't be accepted to prevent your old data from becoming inaccessible.**
:::

Finally, assign a new password to your vault.
It is the same process as the [vault creation](adding-vaults.md#choose-a-password), except that no new recovery key is generated.
Again, please choose a [strong password](/docs/security/best-practices.md#good-passwords).

Once changed, you can unlock your vault with the new password.

:::note
Don't discard the recovery key after resetting the password as it will still remain valid.
:::
