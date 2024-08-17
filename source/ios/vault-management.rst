Vault Management
================

.. _ios/vault-management/unlock-duration:

Unlock Duration
---------------

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

.. _ios/vault-management/security-considerations:

Security Considerations
--------------------------

iOS will store a copy of your Vault passwords in the iOS Keychain for vaults that use ``Face ID`` or have the ``Unlock duration`` set to anything except ``Let iOS Decide Automatically``.

Cryptomator stores vault passwords in the iOS Keychain with the `kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly <https://developer.apple.com/documentation/security/ksecattraccessibleafterfirstunlockthisdeviceonly>`_ attribute, which ensures:

1. After a reboot, the copy of your vault passwords stored in the iOS Keychain are only available to use by the Cryptomator app after the first unlock using your device's passcode.
2. Vault passwords are not migrated to a new device when restoring an iOS device from a backup of a different iOS device.
3. Vault passwords aren't synced to iCloud.

It should be obvious, but Cryptomator won't store a copy of your vault password in the iOS Keychain, for vaults that don't use ``Face ID`` and also have their ``Unlock duration`` set to ``Let iOS Decide Automatically``.