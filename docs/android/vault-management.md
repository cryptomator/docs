---
id: vault-management
title: Vault Management
sidebar_position: 3
---

# Vault Management

A *vault* is where your files are stored encrypted on your Android device or cloud storage.
When you create or access a vault through Cryptomator for Android, your files are automatically encrypted and decrypted in real-time.
Only Cryptomator can decrypt the vault's contents when you unlock it using your password.

Cryptomator for Android supports various storage locations including local device storage, Dropbox, Google Drive, OneDrive, and any cloud service that offers WebDAV access.
This allows you to securely access your encrypted files from anywhere while maintaining full control over your data.

## Create a New Vault {#create-a-new-vault}

To create a new vault, click on the plus sign ① and choose *Create new vault* ② in the next screen.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/create-new-vault-0-start.png" alt="How to create a new vault with Android" width="810" height="1665" />
  <Image src="/img/android/create-new-vault-1-select-new-existing.png" alt="How to create a new vault with Android" width="810" height="1665" />
</Grid>

:::note
If you already have a vault created with the desktop app and just want to add this vault to your mobile app, please go to chapter [Add Existing Vaults](#add-existing-vaults).
:::

You will now be prompted to select the Cloud Service where you want to store your vault.

Choose between *Dropbox*, *Google Drive*, *OneDrive* (works also with *OneDrive for Business*) or *Local storage* (which means your local device with all attached devices).

If your desired provider is not listed and offers WebDAV access, please select *WebDAV* as the storage location of your vault.

Please see [Cloud Services With WebDAV Support](/docs/misc/supported-cloud-services.md#cloud-services-with-webdav-support) for a non-exhaustive list of Cloud Services and information about accessing them with WebDAV.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/create-new-vault-2-select-provider.png" alt="How to create a new vault with Android" width="1080" height="2220" />
</Grid>

If not already done, you have to create the connection between the Cryptomator app and your storage provider account. Please follow the instructions in the [Cloud Management](cloud-management.md) chapter and continue later here.

Now that you've established a connection, you'll add the existing vault.

In the first step, please enter a name for your new vault.
This name will also be the folder name of your vault files in your online storage.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/create-new-vault-5-name-vault.png" alt="How to create a new vault with Android" width="1080" height="2220" />
</Grid>

Then choose the location on your Cloud Service where you want to have your encrypted vault files stored.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/create-new-vault-6-select-path.png" alt="How to create a new vault with Android" width="1080" height="2220" />
</Grid>

And last but not least, create a **secure** password for your vault.
Basically, you have the whole Unicode for choosing a password including non-printable characters.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/create-new-vault-7-set-password.png" alt="How to create a new vault with Android" width="1080" height="2220" />
</Grid>

:::warning
You have to remember this password at all times because there is **no way to access your data if you forget your password**.
Choose a [good password](/docs/security/best-practices.md#good-passwords) to make your data secure.
:::

After you have confirmed your password, the vault is created.
You will find it now on the start page of your Cryptomator app, where you can open your vault and optionally change settings.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/create-new-vault-8-creating-vault.png" alt="How to create a new vault with Android" width="1080" height="2220" />
  <Image src="/img/android/create-new-vault-9-finish.png" alt="How to create a new vault with Android" width="1080" height="2220" />
</Grid>

## Add Existing Vaults {#add-existing-vaults}

To add an existing vault, click on the plus sign ① and choose *Add existing vault* ② in the next screen.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/add-existing-vault-0-start.png" alt="How to add a vault with Android" width="810" height="1665" />
  <Image src="/img/android/add-existing-vault-1-select-add-existing-vault.png" alt="How to add a vault with Android" width="810" height="1665" />
</Grid>

You will now be prompted to select the Cloud Service where the vault is located.

Choose between *Dropbox*, *Google Drive*, *OneDrive* (works also with *OneDrive for Business*) or *Local storage* (which means your local device with all attached devices).

If your desired provider is not listed and offers WebDAV access, please select *WebDAV* as the storage location of your vault.

Please see [Cloud Services With WebDAV Support](/docs/misc/supported-cloud-services.md#cloud-services-with-webdav-support) for a non-exhaustive list of Cloud Services and information about accessing them with WebDAV.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/add-existing-vault-2-select-provider.png" alt="How to add a vault with Android" width="1080" height="2220" />
</Grid>

If not already done, you have to create the connection between the Cryptomator app and your storage provider account. Please follow the instructions in the [Cloud Management](cloud-management.md) chapter and continue later here.

Now that you've established a connection, you'll add the existing vault.

In the first step, please choose the folder in which the vault is located.
This folder name is the same as the vault name (in this example, our vault name is *test vault* so we select this folder).

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/add-existing-vault-5-choose-folder.png" alt="How to add a vault with Android" width="1080" height="2220" />
</Grid>

Then choose the `masterkey.cryptomator` file.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/add-existing-vault-6-choose-file.png" alt="How to add a vault with Android" width="810" height="1665" />
</Grid>

Now the vault is added to the list of vaults.
You will find it now on the start page of your Cryptomator app, where you can open your vault and optionally change settings.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/add-existing-vault-8-finish.png" alt="How to add a vault with Android" width="1080" height="2220" />
</Grid>

## Remove Vaults {#remove-vaults}

If you want a specific vault to stop being displayed in Cryptomator, you select the `V` next to the vault ① and choose *Remove* ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/remove-vault-0-start.png" alt="How remove a vault with Android" width="810" height="1665" />
  <Image src="/img/android/remove-vault-1-select-remove-vault.png" alt="How remove a vault with Android" width="810" height="1665" />
</Grid>

Confirm the deletion process using the `Delete` button.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/remove-vault-2-confirmation.png" alt="How remove a vault with Android" width="1080" height="2220" />
  <Image src="/img/android/remove-vault-3-finish.png" alt="How remove a vault with Android" width="1080" height="2220" />
</Grid>

:::note
By removing a vault, it is only removed from the list but not deleted in the cloud.
You can re-add the vault afterwards.
:::

## Change Vault Password {#change-vault-password}

If you want change the password of a specific vault in Cryptomator, you select the `V` next to the vault ① and choose *Change password* ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/change-password-vault-0-start.png" alt="How to change a vault password with Android" width="810" height="1665" />
  <Image src="/img/android/change-password-vault-1-select-change-pw.png" alt="How to change a vault password with Android" width="810" height="1665" />
</Grid>

Enter the old password and choose a **secure** new one.
Basically, you have the whole Unicode for choosing a password including non-printable characters.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/change-password-vault-2-change-password.png" alt="How to change a vault password with Android" width="1080" height="2220" />
</Grid>

:::warning
You have to remember this password at all times because there is **no way to access your data if you forget your password**.
Choose a [good password](/docs/security/best-practices.md#good-passwords) to make your data secure.
:::

Start the process using the `CHANGE PASSWORD` button.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/change-password-vault-3-changing-pw.png" alt="How to change a vault password with Android" width="1080" height="2220" />
  <Image src="/img/android/change-password-vault-4-finish.png" alt="How to change a vault password with Android" width="1080" height="2220" />
</Grid>

:::info
The password is used to derive a [KEK](https://en.wikipedia.org/wiki/Glossary_of_cryptographic_keys), which is then used to encrypt futher keys.
The KEK changes, but the keys encrypted with the KEK will stay the same.
The actual files will not get re-encrypted, meaning you can not upgrade a weak passphrase to a stronger one once the data has been synced to a service that allows recovery of older versions of the masterkey file.
:::

If you like to encrypt your vault files with a new, stronger password, you need to create a new vault and copy the data from the old to the new one. Make sure to wipe all backups of the old vault afterwards.

## Rename Vault {#rename-vault}

If you want to change the name of a specific vault in Cryptomator, you select the `V` next to the vault ① and choose *Rename* ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/rename-vault-0-start.png" alt="How to rename a vault with Android" width="810" height="1665" />
  <Image src="/img/android/rename-vault-1-select-rename.png" alt="How to rename a vault with Android" width="810" height="1665" />
</Grid>

Choose a new name and confirm using the `RENAME` button.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/rename-vault-3-renaming.png" alt="How to rename a vault with Android" width="1080" height="2220" />
  <Image src="/img/android/rename-vault-4-finish.png" alt="How to rename a vault with Android" width="1080" height="2220" />
</Grid>

## Change Vault Position {#change-vault-position}

If you want to change the position of a specific vault in the vault list in Cryptomator, long-press on the vault and drag it to the desired position in the pressed state:

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/change-vault-position.gif" alt="How to change position of a vault with Android" width="600" height="1200" />
</Grid>
