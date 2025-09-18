---
id: volume-type
title: Volume Types
sidebar_position: 8
---

# Volume Types

Volume types play an important role when handling your files.

When you unlock a vault, Cryptomator makes decrypted files available in your file manager by mounting a virtual drive on your operating system.
This mounting of a virtual drive is handled differently depending on the volume type chosen in Cryptomator's preferences.

In general, all volume types Cryptomator offers can be categorized into two categories:

1. [WebDAV](#what-is-a-webdav-volume-type)
2. [FUSE](#what-is-a-fuse-volume-type)

## What Is a WebDAV Volume Type? {#what-is-a-webdav-volume-type}

WebDAV is a standardized [communication protocol](https://en.wikipedia.org/wiki/WebDAV) used to perform operations on resources (files, directories/folders) between a client (you) and a server (your local computer).
WebDAV was intended for remote access, but Cryptomator uses it to start a local-only server, which you can use to browse your decrypted files.

You can tweak WebDAV's settings for each vault by navigating to Cryptomator's `Preferences` → `Virtual Drive`.

WebDAV has widespread support and adequate performance, but its implementation differs between operating systems.

## What Is a FUSE Volume Type? {#what-is-a-fuse-volume-type}

Filesystem in Userspace ([FUSE](https://en.wikipedia.org/wiki/Filesystem_in_Userspace)) is a filesystem interface originally developed for Unix operating systems that let non-privileged users create their own file systems without editing kernel code.
Which means, FUSE does not require admin privileges and has good support across all major desktop operating systems.
FUSE volume type also delivers good performance when working on files.

All FUSE related volume types support custom mount options, but every option must be prefixed with `-o`.
For example, you must enter `-oallow_other` if you want to specify `allow_other` option.

## Choosing a Volume Type {#choosing-a-volume-type}

Cryptomator uses the same volume type for all vaults.
You can select which volume type to use in the preferences.
Every volume type offers fixed set of features for mounting a vault.
The feature set is shown when selecting the volume type.

In Cryptomator's window, navigate to `Preferences` (gear icon at top right), then `Virtual Drive` to set the volume type.
The availability of volume types depends on your operating system and installed drivers.
You might have to restart Cryptomator when changing volume types.
A notification will be displayed if a restart is needed.

<Image src="/img/desktop/preferences-virtual-drive.png" alt="Virtual Drive Tab in Preferences" width="762" height="516" />

## Windows {#windows}

### WinFsp / WinFsp (Local Drive) {#winfsp}

**Requirements:** Windows, WinFsp installed

The [WinFsp project](https://winfsp.dev/) provides FUSE bindings for Windows.
WinFsp is automatically installed along Cryptomator when you are using the EXE installer, but there's also a WinFsp standalone installer [here](https://winfsp.dev/rel/) if you ever need it.

By default, unlocked vaults are mounted to a random drive letter, either as a network or a local drive.
Info on custom mount options is available at [WinFsp repository](https://github.com/winfsp/winfsp/blob/c61679a35d041d843173fa3b2eba106b5ab7b01f/src/dll/fuse/fuse.c#L628-L654).

:::note
Vaults mounted to a drive letter are only accessible to the current user. If you want to access the vault as a different/elevated user, you have to use WinFsp (Local Drive) and [mount to a directory](vault-management.md#vault-options).
:::

### WebDAV (Windows Explorer) {#webdav-windows-explorer}

**Requirements:** Windows

WebDAV on Windows uses the [`net use`](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/gg651155(v=ws.11)) command to mount/unmount the virtual drive.
By default, unlocked vaults are mounted as a network drive and assigned a random drive letter.
Using WebDAV on Windows has the following drawbacks:

* The size of transferred files is restricted to a maximum of 4 GB.
* The total space and free space of the network drive are shown to be the same as the total space and free space of the C: drive, which is technically incorrect.

## macOS {#macos}

### macFUSE {#macfuse}

**Requirements:** macOS, macFUSE installed

macFUSE is the most mature FUSE implementation for macOS.
If you're comfortable with booting into recovery mode once to enable loading of kernel extensions, this is the recommended option for best compatibility and stability.
macFUSE volume type depends on a library provided by the [macFUSE project](https://macfuse.github.io/).
It is not included with Cryptomator due to license restrictions.
You can install the latest version from [macFUSE's release page](https://github.com/macfuse/macfuse/releases), following the [installation guide](https://github.com/macfuse/macfuse/wiki/Getting-Started).

By default, unlocked vaults are mounted to `/Volumes`.
Info on custom mount options is available at [macFUSE wiki](https://github.com/macfuse/macfuse/wiki/Mount-options).

:::note
Apple has deprecated the OS APIs used by macFUSE since macOS 12.3, which requires additional steps during installation.
Despite this, macFUSE remains the most stable option due to its maturity.
:::

### FUSE-T (Experimental) {#fuse-t}

**Requirements:** macOS, FUSE-T installed

FUSE-T is a newer alternative that runs entirely in user space, avoiding the need for kernel extensions.
This volume type depends on a library provided by the [FUSE-T project](https://www.fuse-t.org/).
You can install it using brew:

```shell
brew tap macos-fuse-t/homebrew-cask
brew install fuse-t
```

By default, unlocked vaults are mounted to `~/Cryptomator/`.
Info on custom mount options is available at [wiki of the FUSE-T project](https://github.com/macos-fuse-t/fuse-t/wiki#supported-mount-options).

:::warning
FUSE-T is less mature than macFUSE and some users have reported occasional malfunctions.
Consider using macFUSE if you experience issues.
:::

### WebDAV (AppleScript) {#webdav-applescript}

**Requirements:** macOS

WebDAV requires no additional software installation and utilizes the scripting language [AppleScript](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) to mount/unmount the virtual drive.
By default, unlocked vaults are mounted to `/Volumes`.
While sufficient for most file operations, the experience may feel less polished due to security warnings about the localhost connection not being secure.
These warnings are expected since no certificate authority will issue TLS certificates for localhost.

## Linux-Based OS {#linux-based-os}

### FUSE {#fuse}

**Requirements:** Linux, `fuse3` installed

FUSE on Linux works only if the `fuse3` package is installed.
Luckily, `fuse3` comes pre-installed on many Linux distributions.

By default, unlocked vaults are mounted to `~/.local/share/Cryptomator/mnt`, but you can use custom mount options to change the path.
Info on custom mount options is available at [man page for mount.fuse](https://man7.org/linux/man-pages/man8/mount.fuse3.8.html).

:::note
`allow_root` and `allow_other` cannot be used as [custom mount flags](vault-management.md#vault-options) without enabling (uncommenting) `user_allow_other` option in **/etc/fuse.conf** configuration file.
:::

### WebDAV (gio) {#webdav-gio}

**Requirements:** Linux, `gio` installed

Due to the wide variety of Linux distributions, Cryptomator only supports system integrated WebDAV volume type if [gio](https://manpage.me/?gio) is installed.
You can unlock your vault without `gio` using [WebDAV (HTTP Address)](#webdav-http-address), but support across distributions is not guaranteed.
Also, it's up to yourself to figure out how to integrate WebDAV share with your distro.

## OS-Independent {#os-independent}

### WebDAV (HTTP Address) {#webdav-http-address}

**Requirements:** None - Works on all OS.

This volume type is always present and comes in handy when all other volume types fail to mount.
It starts a local-only WebDAV server, which can be manually integrated into the system or accessed using a third-party application, like [Cyberduck](https://cyberduck.io/).
Check out the regarding manuals for your OS on how to connect to a WebDAV server.
The address of Cryptomator's local-only WebDAV server can be copied from the vault detail screen by clicking the green "Copy" button.
