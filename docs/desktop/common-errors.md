---
id: common-errors
title: Common Errors
sidebar_position: 15
---

# Common Errors

This page collects errors users frequently run into and their known solutions.
For general diagnostic steps such as collecting log files or enabling debug mode, see [Troubleshooting](troubleshooting.mdx).

## Vault Appears Read-Only on Windows {/* #read-only-vault-windows */}

**Symptoms:** On Windows with a [WinFsp](volume-type.mdx#winfsp) volume type, an unlocked vault behaves as if it were read-only. Copying or pasting files fails with "Permission denied", and new files or folders cannot be created or modified inside the vault.

**Cause:** This occurs on Windows systems where multiple Active Directory or Microsoft Entra accounts are signed in simultaneously. WinFsp cannot map the current Windows user to the owner of the mounted vault, so the operating system rejects all write operations. See [winfsp/winfsp#387](https://github.com/winfsp/winfsp/issues/387#issuecomment-1130260210) for technical background.

**Solution:**

1. Update Cryptomator to the [latest version](https://cryptomator.org/downloads/)
2. In `Preferences` → `Virtual Drive`, make sure `WinFsp (Local Drive)` is selected. In the affected vault's `Vault Options` → `Mounting`, set the volume type to `default`.
3. If the problem persists, apply custom mount options:
   1. Run the following in Windows PowerShell to determine your domain and user name:

      ```powershell
      "$env:USERDOMAIN+$env:USERNAME".ToUpper()
      ```

      The output has the form `DOMAIN+USERNAME` (e.g., `MYCOMPANY+JDOE`).
   2. Lock the vault, open `Vault Options` → `Mounting`, enable custom mount options, and enter the following, replacing `DOMAIN+USERNAME` with the value from the previous step:

      ```
      -ouid=1005 -ogid=1005 -ouidmap=1005:DOMAIN+USERNAME
      ```
   3. Unlock the vault. It should now be writable.

   The mount options must be configured per vault, so repeat this step for every affected vault.
