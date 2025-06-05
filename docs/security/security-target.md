---
id: security-target
title: Security Target
sidebar_position: 1
---

# Security Target

Cryptomator was designed to solve privacy issues when saving files to cloud storages.

The risk that the cloud provider or third parties access the data stored in the cloud without permission is mitigated.
Only people who know the vault password are able to read the files in the vault or change the file contents undetected.
This is true for file contents as well as for filenames.

## What Cryptomator Encrypts {#what-cryptomator-encrypts}

To allow a working synchronization with the cloud, there are some meta information that Cryptomator does not encrypt.
These are:

* access, modification, and creation timestamp of files and folders,
* number of files and folders in a vault and in the folders, and
* size of the stored files.

## What Cryptomator Is Not {#what-cryptomator-is-not}

In addition, you have to keep in mind what Cryptomator is not.
Protection of the files on the local computer is not the focus of Cryptomator.
Cryptomator is not a complete replacement for other encryption tools based on container files if the aforementioned meta information should be encrypted.
Cryptomator does not provide protection if programs create backup copies of the encrypted files when working with them.
Such files are not detected by Cryptomator and may remain on the computer even after unlocking a vault.
Cryptomator cannot provide protection if the local computer is infected with malware which reads entered passwords and file contents (e.g., files in an unlocked vault).

To protect against such risks, other methods, like complete disk encryption, immediate installation of system and software updates, and the use of applicable antivirus software, is required.
