---
id: vault-recovery
title: Vault Recovery
sidebar_position: 20
---

# Vault Recovery

If a vault can’t be opened because important files are missing, Cryptomator can help you recover it.
This feature is designed to restore access to your encrypted files safely and easily — even if your vault configuration or masterkey files were lost or damaged.

:::note
Vault Recovery does not restore your encrypted files.
It recreates missing configuration files such as `vault.cryptomator` and `masterkey.cryptomator` so that Cryptomator can recognize and unlock your vault again.
:::

1. [`Recover Masterkey file…`](#recover-masterkey-file) - If your masterkey file went missing…
2. [`Recover Vault config file…`](#recover-vault-config) - If your vault config file went missing…
3. [`Recover Masterkey and Vault config files…`](#recover-full) - If your vault config and masterkey file went missing…
4. [`Add a vault with missing config files and restore them…`](#add-recover-vault) - If you want to add a vault where your config and/or masterkey file went missing…

## Recover Masterkey file {#recover-masterkey-file}

If the file `masterkey.cryptomator` is missing from your vault folder, Cryptomator will still recognize the folder as a normal vault.

When you try to unlock the vault, a dialog appears saying “Masterkey file not found.”

In this dialog, you can:
- `Choose` a masterkey file manually, if it was stored outside the vault folder.
- Or check the option “Restore the masterkey file instead” and click `Restore`.

To complete the restore process, you’ll need to enter your recovery key.
Cryptomator will then recreate the missing `masterkey.cryptomator` file in the vault folder, allowing you to unlock it again as usual.

## Recover Vault config file {#recover-vault-config}

If the file `vault.cryptomator` is missing, Cryptomator can recreate it using either your vault password or your recovery key.

In the vault list, the vault is marked with an exclamation mark.
In Vault Details, you’ll see `Vault config is missing.`.
Here you can click `Restore vault config` to start the recovery.

Choose one of the options:
- Use Recovery Key
- Use Password

You’ll be guided through the recovery.
During the process, you must enter the Expert Settings.
After confirming, Cryptomator restores the `vault.cryptomator` file and you can open the vault as usual.

## Recover Masterkey and Vault config files {#recover-full}
:::note
If this is a Cryptomator Hub Vault, you can’t restore the missing files yourself.
Please contact the vault owner, who can recreate the configuration file for you.
:::

If both – the `masterkey.cryptomator` and `vault.cryptomator` files – are missing, Cryptomator can restore them using your recovery key.

In the vault list, the vault is marked with an exclamation mark.
In Vault Details, you’ll see `Vault config is missing.`.
Here you can click “Restore vault config” to start the recovery.

You’ll be asked to enter your Recovery Key to continue.
During the process, you must enter the Expert Settings.

After confirming, Cryptomator recreates both missing files in the vault folder.
Once the process completes, the vault can be opened again as usual.

## Add a vault with missing config files and restore them {#add-recover-vault}

If a vault has no configuration files and does not yet appear in the vault list, you can start the recovery manually.

Open the main window and click the plus `+` button.
In the context menu, choose `Recover Existing Vault…`.

Then select the vault directory you want to restore.
Depending on which configuration files are missing, Cryptomator will guide you through the same recovery options described in Recover Masterkey file, Recover Vault config file, or Recover Masterkey and Vault config files.

After the process completes, the restored vault will be added to your vault list automatically.