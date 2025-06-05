---
id: your-account
title: Your Account
sidebar_position: 4
---

# Your Account

To open vaults secured by a Cryptomator Hub instance, you need an account on the regarding Hub instance.
The account is used to authenticate your identity and to manage your trusted devices.

If you don't have an account, contact your local administrator to create one for you.

## Account Key {#account-key}

Every account has a private *Account Key*.
The Account Key is used for authorizing browsers or apps which try to connect to Hub.
It is not used for encrypting vault data.
Keep your account key secret and only store it in a secure place (e.g. password manager).
You can view your account key in your [profile](#profile-page) on trusted browsers.

:::note
If you lose your account key, you have two options: If you have access to an authorized browser, you can view it on the [profile page](#profile-page) or otherwise, you can [reset your account](#reset-account).
:::

## Account Setup {#account-setup}

The very first time you log in to Cryptomator Hub, you're asked to set up your account.
This is a one-time process that takes just a minute.

<Image src="/img/hub/account-setup.png" alt="Account setup on first login" width="508" height="575" />

In the setup your [Account Key](#account-key) is generated and displayed.
We recommend to copy your Account Key to a secure place (e.g. password manager), but you can always view it later in your profile from any trusted browser.

The browser used for the setup is automatically trusted.
You can revoke the trust at any time in your profile.

After storing your account key securely, tick the checkbox and finish the setup.
You are now logged in to Hub and can start using it.

## Profile Page {#profile-page}

On the profile page, you can manage your account.
It shows your account key and fingerprint, lists your trusted devices and more.

You can open it by clicking on your profile icon in the top right corner and select *Your Profile*.

<Image src="/img/hub/profile-view.png" alt="Your account in Cryptomator Hub" width="1878" height="1066" />

### Change Language {#change-language}

You can change the language of Cryptomator Hub to match your preference.
The language selection is available in the profile settings.

Is your preferred language not available yet?
We are continuously working on adding more languages.
If you're interested, you can contribute translations via Crowdin:
[Cryptomator Hub on Crowdin](https://crowdin.com/project/cryptomator).

### Regenerate Account Key {#regenerate-account-key}

If you suspect that your old Account Key has been compromised, you can regenerate it.
You will then only be able to add new devices with the new Account Key.
Your existing devices will remain trusted.

### Authorized Devices {#authorized-devices}

A device is authorized if it has been authenticated with your Account Key.
Only on authorized devices you can log in to Hub and open vaults.

For each authorized device, you can view its name, type (e.g., browser), the date it was added, the last time it accessed a vault, and its IP address.
If the last access values are not present this can have multiple reasons:

1. The device has not accessed any vaults yet
2. The device is not up to date and does not send the required information

The device marked with `This Device` is the one you are currently using. This allows you to easily verify your active session and detect any unauthorized access.

By managing your authorized devices, you ensure that only trusted ones remain active, giving you greater security and control over your account.

If you don't trust a device anymore, you can remove it from the list of authorized devices.
This will log out the device and revoke access to all shared vaults.

### Legacy Devices {#legacy-devices}

This section lists devices that have been authorized with an older version of Cryptomator Hub. It is only visible if you have any legacy devices.
Legacy devices where created before the introduction of the current user key system and will be removed from your account within one of the next major updates of Hub.

<Image src="/img/hub/legacy-devices.png" alt="Your legacy devices" width="1399" height="492" />

If you have any legacy device

1. check if you still use them, if so, update the client version on this device which migrates it to the new format
2. if you don't use them anymore, remove them to revoke access of this device to your accessible vaults

### User Key Fingerprint {#user-key-fingerprint}

The fingerprint can be used to verify the identity of the user, for example when [updating the permissions](vault-management.md#update-permissions) of a vault.
It will only change if you [reset your account](#reset-account).

## Reset Account {#reset-account}
If you lose your account key and can't access any trusted browser, you can reset your account when logging in from a new device.
All already authorized devices will be removed and access to shared vaults will be revoked.
After the reset, you can log in to Hub from a new browser and set up your account again.

<Image src="/img/hub/trust-device.png" alt="Reset account on login" width="499" height="547" />
