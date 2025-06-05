---
id: vault-format-history
title: Vault Format History
sidebar_position: 3
---

# Vault Format History

Cryptomator vaults need to adhere to a structure and format (as described in [Security Architecture](/docs/security/architecture.md)) that may change over time.
In order to identify the correct format, the masterkey file contains a version number, which represents the vault format.

## Format 8 {#format-8}

Introduced in Cryptomator 1.6.0 on 2021-10-19.
The following changes are:

* Decoupled vault configuration from key derivation by introducing new vault configuration file named `vault.cryptomator`. It is a JWT containing basic information about the vault and specification what key to use.
* `version` inside `masterkey.cryptomator` is now deprecated.

## Format 7 {#format-7}

Introduced in Cryptomator 1.5.0 on 2020-04-16.
The following changes are:

* Added file extension (`*.c9r` and `*.c9s`) to all encrypted files and directories. Certain cloud storage services have issues with files without an extension.
* Encrypted directories are now actually directories. Directory file is now inside of that with the fixed name `dir.c9r`.
* Encrypted symlinks are now directories. Symlink file is now inside of that with the fixed name `symlink.c9r`.
* Files and directories with shortened filenames are now directories (identifiable by the `.c9s` suffix). Mapping file with the long filename is now inside of that with the fixed name `name.c9s`. If it's a regular file, the content file has the fixed name `contents.c9r`.
* Removed directory `m` because mapping files for shortened filenames are now in `d` as well.
* Filenames are encoded with base64url so that name shortenings are less likely.
* Increased ciphertext filename threshold to 220 characters.

This is an example of the vault structure:

```
.
├─ d
│  ├─ BZ
│  │  └─ R4VZSS5PEF7TU3PMFIMON5GJRNBDWA
│  │     ├─ 5TyvCyF255sRtfrIv__83ucADQ==.c9r  # regular file
│  │     ├─ FHTa55bH_sUfVDbEb0gTL9hZ8nho.c9r  # irregular file...
│  │     │  └─ dir.c9r  # ...which is a directory
│  │     ├─ gLeOGMCN358_UBf2Qk9cWCQl.c9r  # irregular file...
│  │     │  └─ symlink.c9r  # ...which is a symlink
│  │     ├─ IjTsXtReTy6bAAuxzLPV9T0k2vg=.c9s  # shortened name...
│  │     │  ├─ contents.c9r  # ...which is a regular file
│  │     │  └─ name.c9s  # ...mapping to this full name
│  │     ├─ q2nx5XeNCenHyQvkFD4mxYNrWpQ=.c9s  # shortened name...
│  │     │  ├─ dir.c9r  # ...which is a directory
│  │     │  └─ name.c9s  # ...mapping to this full name
│  │     ├─ u_JJCJE-T4IH-EBYASUp1u3p7mA=.c9s  # shortened name...
│  │     │  ├─ name.c9s  # ...mapping to this full name
│  │     │  └─ symlink.c9r  # ...which is a symlink
│  │     └─ ...
│  └─ FC
│     └─ ZKZRLZUODUUYTYA4457CSBPZXB5A77
│        └─ ...
├─ masterkey.cryptomator
└─ masterkey.cryptomator.DFD9B248.bkup
```

## Format 6 {#format-6}

Introduced in Cryptomator 1.3.0 on 2017-07-01.
The following changes are:

* Password is normalized in NFC.

## Format 5 {#format-5}

Introduced in Cryptomator 1.2.0 on 2016-09-19.
The following changes are:

* Dropped file size obfuscation support.

File sizes can be determined in `O(1)` instead of having to read and decrypt the file header.
This allows showing file sizes in the directory listing without having to download each file first.
The file size in the header is now unused and filled with `0xFFFFFFFFFFFFFFFF`.

## Format 4 {#format-4}

Introduced in Cryptomator 1.1.1 on 2016-07-08.
The following changes are:

* Directories now have `0` (zero) prefix instead of a `_` (underscore) suffix.

Directories are now stored with different names to avoid conflicts with the naming scheme of certain cloud storage services in case of synchronization conflicts.

This is an example of the vault structure:

```
.
├─ d
│  ├─ BZ
│  │  └─ R4VZSS5PEF7TU3PMFIMON5GJRNBDWA
│  │     ├─ 0USJ7VD36K7YU2RARYJMEFTABZOGN6LUH63VRH5MADVOZ433VZ7EPSM2PLJPHTBL6
│  │     ├─ 0YWVRCCROEC3ZECD2UTJR7BGYERU3LG6R7QODBGMZ7EQ3BXGY24======
│  │     ├─ ...
│  │     ├─ YWBBP7RC6FFX6ZN4YBLN4WXD6IIBTMKXHFFDQEZNYTQLNZWOGDT22EY=
│  │     └─ ZTNHMICOWU6ZSNIR72ESLQSGDMLQYQ42XEKGOWSYYX5II===
│  └─ FC
│     └─ ZKZRLZUODUUYTYA4457CSBPZXB5A77
│        └─ ...
├─ m
│  └─ ...
├─ masterkey.cryptomator
└─ masterkey.cryptomator.bkup
```

## Format 3 {#format-3}

Introduced in Cryptomator 1.0.0 on 2016-03-09.

Vault format 3 is basically the official "first" version.
To be exact, it was actually introduced in Cryptomator Beta 0.11 on 2016-03-03.
Vault formats 1 and 2 were only used in beta versions of Cryptomator.

This is an example of the vault structure:

```
.
├─ d
│  ├─ BZ
│  │  └─ R4VZSS5PEF7TU3PMFIMON5GJRNBDWA
│  │     ├─ USJ7VD36K7YU2RARYJMEFTABZOGN6LUH63VRH5MADVOZ433VZ7EPSM2PLJPHTBL6_
│  │     ├─ YWBBP7RC6FFX6ZN4YBLN4WXD6IIBTMKXHFFDQEZNYTQLNZWOGDT22EY=
│  │     ├─ ...
│  │     ├─ YWVRCCROEC3ZECD2UTJR7BGYERU3LG6R7QODBGMZ7EQ3BXGY24======_
│  │     └─ ZTNHMICOWU6ZSNIR72ESLQSGDMLQYQ42XEKGOWSYYX5II===
│  └─ FC
│     └─ ZKZRLZUODUUYTYA4457CSBPZXB5A77
│        └─ ...
├─ m
│  └─ ...
├─ masterkey.cryptomator
└─ masterkey.cryptomator.bkup
```
