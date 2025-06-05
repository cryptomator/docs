---
id: encrypted-file-names
title: Encrypted File Names
sidebar_position: 7
---

# Encrypted File Names

:::info
Neither file name nor directory structure encryption can be disabled.
:::

Cryptomator protects your files by not only encrypting their content, but also their names and the overall directory structure of the vault.
For example, if you have a directory structure inside your vault like this:

```
.
├─ myProject.pptx
├─ Images for Project
│  └─ ImageOfBees.jpg
└─ ...
```

The actual directory structure of the vault on your hard drive/cloud will look like this:

```
.
├─ d
│  ├─ BZ
│  │  └─ R4VZSS5PEF7TU3PMFIMON5GJRNBDWA
│  │     ├─ dirId.c9r  # internal vault file
│  │     ├─ 5TyvCyF255sRtfrIv**83ucADQ==.c9r  # myProject.pptx
│  │     └─ FHTa55bH*sUfVDbEb0gTL9hZ8nho.c9r  # Linking entry for directory "Images for Project"
│  │        └─ dir.c9r  # contains information for the link
│  └─ FC
│     └─ ZKZRLZUODUUYTYA4457CSBPZXB5A77  # content of the directory "Images for Project"
│        └─ 4lmrQYfE_5ETusEkVJlTJrcFzjwxNBymig==.c9r # ImageOfBees.jpg
├─ masterkey.cryptomator
├─ masterkey.cryptomator.DFD9B248.bkup
└─ vault.cryptomator
```

While this increases security, it also makes it impossible to see the original file names and directory structure without decrypting them first.
When you need to know the original name of a file (e.g. to restore an older version), you can use the `Decrypt File Name` feature to decrypt the file name.

## Decrypting File Names {#decrypting-file-names}

:::note
Due to technical reasons, given only an encrypted file Cryptomator can only decrypt its name.
It cannot compute its cleartext path.
:::

You can access this feature from the unlocked view of a vault in the Cryptomator main window.
On the bottom of the unlocked view, drop files on the `Decrypt File Name` zone or click on it.
A modal window with the encrypted-decrypted-mapping opens.

<Image src="/img/desktop/vault-detail-unlocked.png" alt="Vault detail view in the unlocked state" width="495" height="381" />

The encrypted-decrypted-table has an action bar at the top with two buttons:
* Clipboard button to copy the whole table as a CSV into the system clipboard
* Trash button to clear the table

<Image src="/img/desktop/decrypt-file-names.png" alt="Decrypt file names window" width="311" height="385" />

Encrypted file names and their corresponding decrypted, original name are shown inside a two column table, with the encrypted names on the right.
If you have not dropped any files, the table is empty.
You can click inside the empty table to select files with a file picker dialog.

Once the table has content, you can select single cells and copy their content with the OS specific keyboard copy shortcut.
