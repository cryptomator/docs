---
id: access-vault
title: Working with Vaults
sidebar_position: 6
---

# Working with Vaults

To encrypt your data securely with Cryptomator Hub vaults, you need the Cryptomator app for your OS.
Cryptomator runs on Windows, macOS, Linux, Android and iOS.
You can download the version for your OS from [cryptomator.org](https://cryptomator.org/downloads/).

This section describes exemplarily how to unlock a vault in the Desktop app.
Android and iOS work analogously.

As described in [open an existing vault](/docs/desktop/adding-vaults.md#open-an-existing-vault), you should have already added the vault to the vault list, e.g., by selecting the `vault.cryptomator` file.

## Unlocking a Vault {#unlocking-a-vault}

### 1. Click Unlock {#click-unlock}

To unlock the vault, click on the large `Unlock` button in the center of Cryptomator's main window.

<Image src="/img/hub/unlock-click-unlock.png" alt="Click 'Unlock' to unlock a Hub vault with the Desktop app" width="715" height="541" />

### 2. Authenticate {#authenticate}

Cryptomator should open your default browser for authentication. If you're not already logged in, you need to provide your user credentials, e.g., by entering your username and password or by inserting your key when WebAuthn is enabled.

<Image src="/img/hub/unlock-authenticate.png" alt="After your browser asks for credentials, enter your username and password" width="1280" height="567" />

### 3. Account Setup {#account-setup}

If this is the first time you log into Hub, Cryptomator and Cryptomator Hub requests you to [set up your account](your-account.md#account-setup).

Desktop

<Image src="/img/hub/unlock-setup-required-desktop.png" alt="Cryptomator requests to setup your user account" width="715" height="541" />

Hub

<Image src="/img/hub/unlock-setup-required-hub.png" alt="Hub requests to setup your user account" width="1280" height="382" />

When you finished the account setup in Hub, unlock the vault again.

### 4. Register Device {#register-device}

If you just did setup your account, a vault owner needs to grant you access for the requested vault as described [here](vault-management.md#update-permissions). Retry unlocking the vault after the vault owner granted you access.

<Image src="/img/hub/unlock-access-denied.png" alt="Access is denied since it has not been granted by a vault owner yet" width="715" height="541" />

If you connect to Hub with this device for the first time, you need to register it.

Desktop

<Image src="/img/hub/unlock-register-device-desktop.png" alt="Register your device by entering the setup code and a name for it" width="715" height="541" />

Hub

<Image src="/img/hub/unlock-register-device-hub.png" alt="Hub requests device registration" width="1280" height="374" />

Enter a name for the device to identify it later on and the [Account Key](your-account.md#account-key) which was generated during the account setup. You can also find it in the [account settings](your-account.md#profile-page).

After that, you will see a confirmation dialog, unlock the vault again.

### 5. Vault Unlocked {#vault-unlocked}

You are all set up and an unlock should be successful from now on. You can then reveal the vault's contents as usual.

Desktop

<Image src="/img/hub/unlock-successfull-desktop.png" alt="Desktop shows unlock successful" width="715" height="541" />

Hub

<Image src="/img/hub/unlock-successfull-hub.png" alt="Hub shows unlock successful" width="1280" height="374" />
