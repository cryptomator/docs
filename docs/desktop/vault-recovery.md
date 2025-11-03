---
id: vault-recovery
title: Vault Recovery
sidebar_position: 20
---

# Vault Recovery

If a vault cannot be added to Cryptomator or opened from inside the app anymore, you can use the Vault Recovery feature to unlock it again.

:::note
Vault Recovery does not restore your encrypted files.
It only recreates missing configuration files such as `vault.cryptomator` in order for Cryptomator to recognize and unlock your vault again.
:::

It helps with the following scenarios:

1. The masterkey file is missing or damaged - [`Recover Masterkey file`](#recover-masterkey-file)
1. The vault config file is missing or damaged - [`Recover Vault config file`](#recover-vault-config)
1. The masterkey and the vault config files are missing or damaged - [`Recover Masterkey and Vault config files`](#recover-full)

If the damaged vault is not yet added to Cryptomator, you start the recovery during the import process, see [`Add a vault with missing config files and restore them`](#add-recover-vault).

:::warning
Recovery of missing files is only supported starting with Vault Format 8 (introduced in Cryptomator 1.6.0).
Vaults created with older formats (e.g., Vault Format 7 or earlier) are not compatible with these recovery options.
For details, see the [Vault Format History](/docs/misc/vault-format-history.md).
:::

## Recover Masterkey file {#recover-masterkey-file}

If the file `masterkey.cryptomator` is missing from your vault folder, Cryptomator will still recognize the folder as a normal vault.

When you try to unlock the vault, a dialog appears saying “Masterkey file not found.”

In this dialog, you can:
- `Choose` a masterkey file manually, if it was stored outside the vault folder.
- Or check the option “Restore the masterkey file instead” and click `Restore`.

For the latter case, you need the vault recovery key to restore the masterkey file.
You’ll be guided through the recovery process and on success, you can unlock the vault as usual.

## Recover Vault config file {#recover-vault-config}

If the file `vault.cryptomator` is missing, Cryptomator can recreate it using either your vault password or your recovery key.

In the vault list, the vault is marked with an exclamation mark.
In Vault Details, you’ll see `Vault config is missing.`.
Here you can click `Restore vault config` to start the recovery process.

You either need the Recovery Key or the vault password to restore the vault config file.
You’ll be guided through the process and on success, you can open the vault as usual.

## Recover Masterkey and Vault config files {#recover-full}
:::note
If the vault is created with Cryptomator Hub, you can’t restore the missing config files yourself.
Please contact the vault owner, who can recreate the configuration file for you.
:::

If both config files – `masterkey.cryptomator` and `vault.cryptomator` – are missing, Cryptomator can restore them using your recovery key.

In the vault list, the vault is marked with an exclamation mark.
In Vault Details, you’ll see `Vault config is missing.`.
Here you can click “Restore vault config” to start the recovery process.

You need the Recovery Key to restore the vault config file.
You’ll be guided through the process and on success, you can open the vault as usual.

## Add a vault with missing config files and restore them {#add-recover-vault}

If a vault has no configuration files and is yet not added to Cryptomator, you recover it during the import process.

Open the main window and click the plus `+` button.
In the context menu, choose `Recover Existing Vault…`.

Then select the vault directory you want to recover.
Depending on which configuration files are missing, Cryptomator picks the right recovery options and will guide you through the same steps as described above.

After the process completes, the restored vault will be added to your vault list automatically.