Volume Type
===========

After a vault is unlocked, it is integrated (also called mounted) into the operating system to be conveniently accessible for you as a virtual drive.
Cryptomator offers different ways of mounting, called *volume types*, which can be differentiated in three categories:

#. :ref:`WebDAV <desktop/vault-mounting/webdav>` related volume types
#. :ref:`FUSE <desktop/vault-mounting/fuse>` related volume types and
#. :ref:`Dokany <desktop/vault-mounting/dokany>` volume type

Each volume type has its own requirements, settings, benefits & drawbacks.


.. _desktop/vault-mounting/general-volume-type-selection:

General Volume Type Selection
-----------------------------

The volume type is set app wide in the general ``preferences`` of Cryptomator.
You view the selected volume type by clicking the gears symbol in the upper right corner of the main window and change to the ``Virtual Drive`` tab.
The selected volume type will be used to integrate unlocked vaults into the system.
If you change it, you need to restart the app in order to use the new volume type.

.. image:: ../img/desktop/preferences-virtual-drive.png
    :alt: Virtual Drive Tab in Preferences

The choices in the drop down menu depend on your OS and if certain libraries (e.g., macFUSE) are installed.
Some volume types allow specifying custom mount options.
If supported, these options are specifed for each vault individually in the |VaultOptions|_ , mounting tab.


.. _desktop/vault-mounting/webdav:

WebDAV Related Volume Types
---------------------------

WebDAV is a standardized `communication protocol <https://en.wikipedia.org/wiki/WebDAV>`_ to perform operations between a client (you) and a server (your local computer) on directories and resources.
Even though this protocol was designed for remote access, Cryptomator uses it *only locally* to display your files and allows you to work with them.
It has wide spread support and sufficient performance, but its implementation varies over the OSses.

Since WebDAV starts a local server, it needs a port to communicate with the local filesystem.
If the port of the local server is already in use, you can change it in the general preferences, virtual volume tab.


.. _desktop/vault-mounting/webdav/explorer:

WebDAV (Windows Explorer)
^^^^^^^^^^^^^^^^^^^^^^^^^

**Requirements:** Windows

This volume uses the Windows command `net use <https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/gg651155(v=ws.11)>`_.
By default unlocked vaults are mounted as a network drive to a drive letter.
Using WebDAV on Windows has the following drawbacks:

    * the size of transferred files is restricted to a maximum of 4GB
    * the total and free space of the network drive shown in the explorer equals the C: drive, albeit not true

.. Additionally, sometimes mounting fails with ``System error 67 has occurred. The network name cannot be found.`` (or its translations).
.. If it happens, follow you can follow the guide TODO to get access again.

.. _desktop/vault-mounting/webdav/applescript:

WebDAV (AppleScript)
^^^^^^^^^^^^^^^^^^^^

**Requirements:** macOS

This volume uses the scripting language `AppleScript`.
By default unlocked vaults are mounted to `/Volumes`.
.. In certain environments, mounting fails with the message ``osascript: can't open default scripting component``.
.. The cause is unclear, but there are suggestions, that third party applications/drivers block the execution.

.. _desktop/vault-mounting/webdav/gio:

WebDAV (gio)
^^^^^^^^^^^^

**Requirements:** Linux, ``gio`` installed

Due to the wide variety of  Linux distributions, Cryptomator does only support a direct system integration with the GNOME tool `gio <https://manpage.me/?gio>`_.
If ``gio`` is not installed, unlock your vault with the :ref:`desktop/vault-mounting/webdav/http-address` and read for your Linux distro how to integrate WebDAV shares.


.. _desktop/vault-mounting/webdav/http-address:

WebDAV (HTTP Address)
^^^^^^^^^^^^^^^^^^^^^

**Requirements:** None

This volume type is always present and can be used, if any other volume type fails to mount.
It simply starts the above mentioned local-only WebDAV server, which can be manually integrated into the system or accessed by a third party application (e.g., `CyberDuck <https://cyberduck.io/>`_).


.. _desktop/vault-mounting/fuse:

FUSE Related Volume Types
-------------------------

Filesystem in USErspace (`FUSE <https://en.wikipedia.org/wiki/Filesystem_in_Userspace>`_) is a filesystem interface originally developed for Unix operating systems that lets non-privileged users create their own file systems without editing kernel code.
It is now supported on all major desktop OS'ses.
In general FUSE volume types have a very good performance.

All FUSE related volume types support additional, custom mount options.
Every option must be prefixed with ``-o`` when specified, i.e. if you want to specify ``allow_other``, you enter ``-oallow_other``.


.. _desktop/vault-mounting/fuse/fuse:

FUSE
^^^^

**Requirements:** Linux, ``libfuse3`` installed

This volume type binds to the library `libfuse3`.
The library is present on all major linux distributions.
By default unlocked vaults are mounted to `~/.local/share/Cryptomator/mnt`.
Infos about the FUSE custom mount options on Linux can be found in the `man page for mount\.fuse <https://man7.org/linux/man-pages/man8/mount.fuse3.8.html>`_.

.. note::

    The options ``allow_root`` and ``allow_other`` cannot be applied to the |VaultOptions|_ without a change to the **/etc/fuse.conf** configuration file for FUSE on your machine. Witin this file, the ``user_allow_other`` option needs to be enabled / uncommented.

.. |VaultOptions| replace:: ``VaultOptions``
.. _VaultOptions: ./vault-management.html#vault-options


.. _desktop/vault-mounting/fuse/fuse-t:

FUSE-T
^^^^^^

**Requirements:** MacOS, FUSE-T installed

This volume type binds to a library provided by the new `FUSE-T project <https://www.fuse-t.org/>`_.
You can install it via brew:

.. code-block:: shell

    brew tap macos-fuse-t/homebrew-cask
    brew install fuse-t

By default unlocked vaults are mounted to `/Volumes`.
Infos about supported custom options can be found in the `wiki of the osxfuse project <https://github.com/osxfuse/osxfuse/wiki/Mount-options>`_.

.. note::

    Support for FUSE-T is currently experimental, due to the young age of the project.

.. _desktop/vault-mounting/fuse/winfsp:

WinFsp / WinFsp (Local Drive)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Requirements:** Windows, WinFsp installed

This volume type binds to a library provided by the `WinFsp project <https://winfsp.dev/>`_.
It is installed along Cryptomator when you are using the EXE installer, otherwise you can download the WinFsp standalone installer `here <https://winfsp.dev/rel/>`_.
By default unlocked vaults are mounted to a drive letter, either as a network or a local drive.
Infos about supported custom options can be found in the `WinFsp repository <https://github.com/winfsp/winfsp/blob/c61679a35d041d843173fa3b2eba106b5ab7b01f/src/dll/fuse/fuse.c#L628-L654>`_.

.. note:: Vaults mounted to a drive letter are only accessible to the `current user`. If you want to access the vault as a different/elevated user, use either

    - the UNC path if using WinFsp (e.g, ``\\cryptomator-vault\secretFiles`` for a vault named "secretFiles"),
    - or mount to a directory if using WinFsp (Local Drive).


.. _desktop/vault-mounting/fuse/macFUSE:

macFUSE
^^^^^^^

**Requirements:** macOS, macFUSE installed

This volume type binds to a library provided by the `macFUSE project <https://osxfuse.github.io/>`_.
Due to license restrictions, you have to install it separately.
The most recent installer can be found on the `macFUSE release page <https://github.com/osxfuse/osxfuse/releases>`_.
By default unlocked vaults are mounted to `/Volumes`.
Infos about supported custom options can be found in the `macFUSE wiki <https://github.com/osxfuse/osxfuse/wiki/Mount-options>`_.

.. warning::

    Apple has deprecated the OS APIs used by macFUSE since macOS 12.3 and made installation difficult. We suggest to try out FUSE-T and only fallback to macFUSE, if problems arise.


.. _desktop/vault-mounting/dokany:

Dokany
------

.. warning::

    With version 1.7.0 Dokany support in Cryptomator is deprecated. We suggest to switch to :ref:`desktop/vault-mounting/fuse/winfsp`.

**Requirements:** Windows, Dokany 1.5.1 installed

The `Dokan project <https://dokan-dev.github.io/>` aims for the same goal as FUSE, but specific for Windows: Provide an interface to create your own filesystem without requiring to write your own kernel filesystem driver.
It has to be installed separately, you can download the installer on the `Dokany release page <https://github.com/dokan-dev/dokany/releases/tag/v1.5.1.1000>`_.
By default unlocked vaults are mounted to a drive letter.

