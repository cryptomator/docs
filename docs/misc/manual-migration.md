---
id: manual-migration
title: Manual Migration
sidebar_position: 4
---

# Manual Migration

Under some circumstances, Cryptomator refuses to automatically migrate a vault to a newer format. In this case, your vault will remain untouched, so you can continue using it with the previous version.

To upgrade to the latest version, you can perform a migration manually:

1. Unlock the vault with the previous version of Cryptomator that you have used. You can find downloads of older versions [on our GitHub site](https://github.com/cryptomator/cryptomator/releases/).
1. Copy all files from this vault onto a temporary storage location on your computer. Be aware that these files are decrypted.
1. Once finished, lock your vault and quit Cryptomator. Now install the latest version of Cryptomator.
1. Create new vault with the latest version of Cryptomator and unlock it.
1. Copy all files from step 2 into the new vault.

:::note
One reason why automatic migration is impossible might be the fact that your vault is stored in a location that limits filename or path lengths, such as:

- Network drives on Windows, such as WebDAV mounts
- eCryptfs-encrypted volumes on Linux

In this case, during step 5, you may encounter warnings indicating that you can not encrypt files due to such length limitations. Feel free to simply change the name of any affected files.
:::
