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
Conversely, if you need to find the encrypted counterpart of a file inside the vault, use the `Locate Encrypted File` feature.

## Locate Encrypted File {#locate-encrypted-file}

The Locate Encrypted File feature helps users find the encrypted version of a specific file. This feature is particularly useful when vault files are versioned and the user wants to restore an older version of a file. As Cryptomator encrypts filenames and obfuscates directory structures, users first locate the encrypted file and then restore an older version of the encrypted file with the third-party app.

1. Unlock the desired vault.
2. Click on the `Locate Encrypted File` button.
3. Select the file within the vault.

As an alternative for clicking the button, you can directly drag & drop a file onto the button.

A file manager window opens showing the encrypted folder and marking the encrypted file.

## Decrypt File Names {#decrypting-file-names}

:::note
Due to technical reasons, given only an encrypted file Cryptomator can only decrypt its name.
It cannot compute its cleartext path.
:::

The Decrypt File Name feature helps users resolve encrypted file names back to their original cleartext names. This feature is particularly useful when vault files are versioned and the user wants to identify a specific encrypted file. As Cryptomator encrypts filenames, users provide the encrypted file to map it back to its original name.

1. Unlock the desired vault.
2. Click on the `Decrypt File Name` zone at the bottom of the unlocked view.
3. Select the encrypted file.

As an alternative for clicking the zone, you can directly drag & drop files onto it.

<Image src="/img/desktop/vault-detail-unlocked.png" alt="Vault detail view in the unlocked state" width="495" height="381" />

A modal window opens showing a two-column table with the encrypted names on the right and their decrypted, original names on the left.

<Image src="/img/desktop/decrypt-file-names.png" alt="Decrypt file names window" width="311" height="385" />

The action bar at the top of the table provides two buttons:
* Clipboard button to copy the whole table as CSV into the system clipboard
* Trash button to clear the table

Select single cells and copy their content with the OS-specific keyboard shortcut.

## Video Walkthrough

The following video demonstrates both features in action: first, **Locate Encrypted File** to find the encrypted counterpart of a file, and then **Decrypt File Name** to resolve an encrypted file name back to its original name.

<video controls autoplay loop muted style={{width: '100%', maxWidth: '1280px', height: 'auto'}}>
  <source src="/vid/file-names.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
