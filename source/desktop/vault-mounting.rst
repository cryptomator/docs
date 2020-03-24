Vault Mounting
==============

After a vault is unlocked, it must be integrated into the system to be accessible for you.
Cryptomator uses three different technologies (called *adapters*) for this integration:

#. :ref:`WebDAV <desktop/vault-mounting/webdav>` - a standardized protocol to manage directories and resources
#. :ref:`Dokany <desktop/vault-mounting/dokany>` - a windows specific driver for a deeper system integration
#. :ref:`FUSE <desktop/vault-mounting/fuse>` - a linux specific kernel module for a deeper system integration, also available for macOS

Each combination of operating system and adapter has its own set of settings and its benefits & drawbacks.


.. _desktop/vault-mounting/general-adapter-selection:

General Adapter Selection
-------------------------

Cryptomator only uses one adapter type to serve all your unlocked vaults.
If you want to change it or only want to know which one is currently used, open the ``Preferences`` by clicking the gears symbol in the upper right corner of the main window and change to the ``Virtual Drive`` tab.

..
    (TODO image of virtual drive picture)

You can choose between WebDAV and, depending on your system, Dokany (Windows) or FUSE (linux, macOS).

.. note::

    Dokany/FUSE may not be visible for selection.
    This means that Cryptomator is unable to detect a valid installation of them.

WebDAV has additional options for configuration:

#. ``WebDAV Port`` - Always present, it shows the port over which the WebDAV adapter communicates with itself.
#. ``WebDAV scheme`` - TODO


.. _desktop/vault-mounting/options-applicable-to-all-systems-and-adapters:

Options applicable to all Systems and Adapters
----------------------------------------------

In this section mount options are described which are present on all operating systems and with all adapter types.

Currently there is only on option, namely opening a vault in ``Read-Only`` mode.
If the checkbox is set, you can unlock the vault, browse through its content and read or copy its files, but you cannot change or modify anything inside the vault.


.. _desktop/vault-mounting/webdav:

WebDAV-specific options
-----------------------

WebDAV is a `communication protocol <https://en.wikipedia.org/wiki/WebDAV>`_ to perform operations between a client (you) and a server (your computer) on directories and resources.
Even thou this protocol was designed for remote access, Cryptomator uses it *only locally* to display your files and allows you to work with them.

.. _desktop/vault-mounting/webdav/windows:

Windows
^^^^^^^

..
    (TODO image of mount options webdav+windows)

.. _desktop/vault-mounting/webdav/macos:

MacOS
^^^^^

..
    (TODO image of mount options webdav+macOS)

.. _desktop/vault-mounting/webdav/linux:

Linux
^^^^^

..
    TODO image of mount options webdav+ubuntu

.. _desktop/vault-mounting/dokany:

Dokany-specific options
-----------------------

.. _desktop/vault-mounting/fuse:

FUSE-specific options
---------------------

.. _desktop/vault-mounting/fuse/macos:

MacOS
^^^^^

.. _desktop/vault-mounting/fuse/linux:

Linux
^^^^^
