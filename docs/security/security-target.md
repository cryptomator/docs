---
id: security-target
title: Security Target
sidebar_position: 1
---

# Security Target

Cryptomator was designed to solve privacy issues when saving files to cloud storages.

## What Cryptomator Is {#what-cryptomator-is}

Cryptomator is a client-side encryption tool for cloud storage services.

The risk that the cloud provider or third parties access the data stored in the cloud without permission is mitigated.
Only people who know the vault password are able to read the files in the vault or change the file contents undetected.
This is true for file contents as well as for filenames.

## What Cryptomator Encrypts {#what-cryptomator-encrypts}

Cryptomator encrypts:

* file contents,
* file and folder names, and
* the directory structure is obfuscated.

For technical details on how these elements are encrypted, see [Vault Cryptography](vault.md).

## What Cryptomator Is Not {#what-cryptomator-is-not}

In addition, you have to keep in mind what Cryptomator is not.

Protection of the files on the local computer is not the focus of Cryptomator.
Cryptomator cannot provide protection if the local computer is infected with malware which reads entered passwords and file contents (e.g., files in an unlocked vault).

Cryptomator does not provide protection if programs create backup copies of the encrypted files when working with them.
Such files are not detected by Cryptomator and may remain on the computer even after unlocking a vault.

Cryptomator is not a complete replacement for other encryption tools based on container files if metadata (like file sizes and timestamps) should be encrypted.

Cryptomator is not a [steganography tool](https://en.wikipedia.org/wiki/Steganography). It uses recognizable file extensions (`.c9r`, `.c9s`) and stores configuration files (`vault.cryptomator`, `masterkey.cryptomator`) that make it evident that data is encrypted using Cryptomator. The security of your data relies on strong encryption and a secure password, not on hiding the fact that encryption is being used.

To protect against such risks, other methods, like complete disk encryption, immediate installation of system and software updates, and the use of applicable antivirus software, is required.

## What Cryptomator Does Not Encrypt {#what-cryptomator-does-not-encrypt}

To allow a working synchronization with the cloud, there are some metadata that Cryptomator does not encrypt.
These are:

* access, modification, and creation timestamps of files and folders,
* number of files and folders in a vault and in the folders, and
* size of the stored files.

## Accepted Risks {#accepted-risks}

### Filename Swapping Within Same Directory {#filename-swapping-within-same-directory}

An attacker with write access to your cloud storage could swap encrypted filenames within the same directory. While the contents of the files remain secure and any tampering with file contents would be detected, the swapped filenames would not be detected.

This is considered a **low risk** vulnerability because:
- It requires an attacker to already have write access to your vault
- File contents remain encrypted and tamper-proof
- The attack only affects filename-to-content mapping within a single directory

This is an accepted risk because implementing cryptographic binding between filenames and contents would significantly impact performance, especially on mobile devices and remote storage systems. For more information, see the security advisory documented in [GHSA-qwfw-w5qf-7wcj](https://github.com/cryptomator/cryptomator/security/advisories/GHSA-qwfw-w5qf-7wcj).
