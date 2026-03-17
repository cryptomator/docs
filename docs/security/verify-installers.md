---
id: verify-installers
title: Verify Installer Signatures
sidebar_position: 6
---

# Verify Installer Signatures

If you are not sure whether an alleged Cryptomator installer is legitimate, you can verify its authenticity and integrity.

## GPG Signature {#gpg-signature}

All Cryptomator release artifacts include a `.asc` signature file that you can use to verify authenticity and integrity using GPG. This method works on Windows, Linux, and macOS (with GPG installed). Download both the installer and the corresponding `.asc` signature file, then verify in the following steps:

<Image src="/img/security/verify-gpg-signature.png" alt="How to verify GPG signatures" width="1272" height="379" />

1. Use `gpg --list-keys --fingerprint 58117AFA1F85B3EEC154677D615D449FE6E6A235` to make sure you have loaded the GPG key. If it is not available, download it from a keyserver e.g.: `gpg --keyserver keys.gnupg.net --recv-keys 58117AFA1F85B3EEC154677D615D449FE6E6A235` or another trusted source like from Cryptobot using Github `curl -sSL https://github.com/cryptobot.gpg | gpg --import -`.
2. Use `gpg --verify <installer-file>.asc <installer-file>` to execute the verification process (replace `<installer-file>` with the actual filename of your downloaded installer).

The message should say:

3. `gpg: Good signature from "Cryptobot <releases@cryptomator.org>"`
4. `Primary key fingerprint: 5811 7AFA 1F85 B3EE C154  677D 615D 449F E6E6 A235`

If shown, you can ignore the following warning:

`gpg: WARNING: This key is not certified with a trusted signature!`

## Windows (exe, msi) {#windows}

Our Windows installers are signed using a code signing certificate. You can verify the signature in five simple steps:

<Image src="/img/security/verify-win-installer.png" srcset=" /img/security/verify-win-installer 1x, /img/security/verify-win-installer@2x.png 2x" alt="How to check the code signing certificate on Windows" width="1316" height="767" />

1. Right-click on the file and click on Properties.
2. Select the Digital Signatures tab: It should show one or more signatures by `Skymatic GmbH` under Embedded Signatures.
   - For releases since 1.18.0, the `exe` release artifact will have two signatures, and the `msi` release artifact will have one signature.
3. Click on the first signature, and then click Details.
4. Click on View Certificates.
5. Click the Details tab. Different Cryptomator versions are signed with different certificates. The following list shows for each version the certificate serial number:
   - Version 1.19.1: `33000852bd6c3a151ff92180ee0000000852bd`
   - Version 1.19.0: `3300083c47651e1daeb99b00eb000000083c47`
   - Version 1.18.1: `330007d28ad57305892a81cac600000007d28a`
   - Version 1.18.0: `3300052c3561155e2baf361702000000052c35`
   - Versions 1.6.11 to 1.17.1: `00d77e4f8b938f56ae265cd08e9193490c`
   - Versions 1.4.12 to 1.6.10: `63c45bff1a148d60ed2994d3a2639034`
   - Versions up to 1.4.11: `1a360f3933964c71f14e8754d94615d4`

## macOS (app) {#macos}

On macOS, you can verify the code signature of the Cryptomator app using the built-in `codesign` utility. This verification confirms the app's authenticity and integrity:

1. Open Terminal (found in Applications > Utilities).
2. Run either of the following commands to check the signature of the corresponding file:
   ```
   codesign -dv ~/Downloads/Cryptomator-*.dmg
   codesign -dv /Applications/Cryptomator.app
   ```
3. Verify that the output includes:
   - `TeamIdentifier=YZQJQUHA3L`
   - The signature should be valid with no errors

If the app is properly signed, you should see output similar to:
```
Executable=/Applications/Cryptomator.app/Contents/MacOS/Cryptomator
Identifier=org.cryptomator
...
TeamIdentifier=YZQJQUHA3L
```
