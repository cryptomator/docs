---
id: vault-management
title: Vault Management
sidebar_position: 3
---

# Vault Management

## Unlock Duration {#unlock-duration}

With the vault setting "Unlock Duration", you can specify for how long you want your vault to stay unlocked when idle. The following options are:

* Let iOS Decide Automatically
* 5 Minutes
* 10 Minutes
* 30 Minutes
* 1 Hour
* Indefinite

The default option is "Let iOS Decide Automatically". Accessing Cryptomator via the Files app is possible via a so-called File Provider Extension. This extension has limited capabilities, e.g., it has a lower memory limit than regular apps. To free up memory, iOS may terminate Cryptomator at any time, which is basically the same as locking the vault since the key is held in memory.

This option has two consequences:

* There is no guarantee for how long your vault stays unlocked. Of course, while you're accessing your vault, it's highly unlikely that Cryptomator gets terminated.
* You're responsible for locking your vault manually. Or if that's not a concern of yours, you can just let iOS decide when Cryptomator is getting terminated.

In order to have a guarantee that your vault stays unlocked for a certain amount of time, the other options are available. By using one of these options, a copy of your key needs to be stored in the iOS keychain, as long as your vault is unlocked.

E.g., if you choose "1 Hour" and Cryptomator gets terminated by iOS within that time frame, your vault can automatically be unlocked again using the key from the iOS keychain. If the selected time frame has passed, the key will be removed from the iOS keychain and your vault will get automatically locked.

If you choose the "Indefinite" option, your vault will be kept unlocked until you have manually locked it.

## Security Considerations {#security-considerations}

Cryptomator balances security and usability by storing certain credentials in the iOS Keychain to enable convenient features like biometric authentication and reduced password prompts. Here's how it works:

* Vault Passwords: Cryptomator stores a copy of your vault password in the iOS Keychain when Touch ID or Face ID is enabled.
* Masterkeys: Cryptomator stores a copy of the masterkey in the iOS Keychain for vaults with a specified "Unlock Duration" (anything except "Let iOS Decide Automatically").

These credentials are stored with the [kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly](https://developer.apple.com/documentation/security/ksecattraccessibleafterfirstunlockthisdeviceonly) attribute, ensuring:

1. Keychain entries are only accessible after the first unlock using your device's passcode following a reboot.
2. Keychain entries are not transferred to a new device when restoring from a backup.
3. Keychain entries are not synchronized to iCloud.

These measures are designed to provide a secure yet convenient experience on your trusted devices. If you prefer not to store these credentials in the Keychain due to security concerns, you can opt out of using these features. However, for most users, this balance between security and usability is appropriate and safe.
