[//]: # (Mounting a vault)

After a vault is unlocked, it must be integrated into the system to be accessible for you.
Cryptomator uses three different technologies (called _adapters_) for this integration:

1. [WebDAV](./#webdav) - a standardized protocol to manage directories and resources
1. [Dokany](./#dokany) - a windows specific driver for a deeper system integration
1. [FUSE](./#fuse) - a linux specific kernel module for a deeper system integration, also available for macOS

Each combination of operating system and adapter has its own set of settings and its benefits & drawbacks.

# General Adapter Selection

Cryptomator only uses one adapter type to serve all your unlocked vaults.
If you want to change it or only want to know which one is currently used, open the `Preferences` by clicking the gears symbol in the upper right corner of the main window and change to the `Virtual Drive` tab.

[//]: # (TODO image of virtual drive picture)

You can choose between WebDAV and, depending on your system, Dokany (Windows) or FUSE (linux, macOS).

!!! note
    Dokany/FUSE may not be visible for selection.
    This means that Cryptomator is unable to detect a valid installation of them.

WebDAV has additional options for configuration:
1. `WebDAV Port` - Always present, it shows the port over which the WebDAV adapter communicates with itself.
2. `WebDAV scheme` - TODO

# Options applicable to all Systems and Adapters

In this section mount options are described which are present on all operating systems and with all adapter types.

Currently there is only on option, namely opening a vault in `Read-Only` mode.
If the checkbox is set, you can unlock the vault, browse through its content and read or copy its files, but you cannot change or modify anything inside the vault.

# Options applicable to specific Setups

## WebDAV
WebDAV is a [communication protocol](https://en.wikipedia.org/wiki/WebDAV) to perform operations between a client (you) and a server (your computer) on directories and resources.
Even thou this protocol was designed for remote access, Cryptomator uses it _only locally_ to display your files and allows you to work with them.

## Windows

[//]: # (TODO image of mount options webdav+windows)

## MacOS

[//]: # (TODO image of mount options webdav+macOS)

## Linux

[//]: # (TODO image of mount options webdav+ubuntu)

# Dokany (Windows only)

# FUSE

## MacOS

## Linux

