Manual AppImage Build for Cryptomator
======================================

Prerequisites
-------------

Install the following packages before following the guide if you don't have them already. You will also need JDK 23 (Bellsoft JDK works fairly well) as well as per the Github docs:

.. code-block:: bash

    sudo apt install maven squashfs-tools unzip curl

Download the AppImage tool:

.. code-block:: bash

    curl -LO https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage
    chmod +x appimagetool-x86_64.AppImage

Clone and Build the Project
---------------------------

.. code-block:: bash

    git clone https://github.com/cryptomator/cryptomator.git
    cd cryptomator
    mvn clean install -Plinux

Optionally test the JAR file
----------------------------

.. code-block:: bash

    java -Dcryptomator.ipcSocketPath=/tmp/cryptomator.sock \
         -Dcryptomator.mountPointsDir=/tmp/cryptomounts \
         -cp "/your/path/to/cryptomator/target/mods/*:cryptomator-1.16.0-SNAPSHOT.jar" \
         org.cryptomator.launcher.Cryptomator

.. note::
   This is required because there's no main manifest defined. The mount point and IPC socket are also mandatory for unlocking vaults.

Build the AppImage folder
-------------------------

1. Create a folder named ``Cryptomator.AppDir``.
2. Inside it, place:

   - ``AppRun`` (see below)
   - A ``.desktop`` file
   - App icon (``.png``)
   - A ``usr/`` folder

Inside ``usr/`` create:

::

    usr/
    ├── bin/         → place your JAR and ``mods/`` folder here
    └── share/
        ├── icons/
        ├── applications/
        ├── mime/packages/
        └── metainfo/

.. tip::
   You can get all the required files from the cloned repository, except the AppRun file and the jar binary, which must be manually made, by running maven.

Build the AppRun Script
-----------------------

.. code-block:: bash

    #!/bin/bash
    HERE="$(dirname "$(readlink -f "${0}")")"
    java -Dcryptomator.ipcSocketPath=/tmp/cryptomator.sock \
         -Dcryptomator.mountPointsDir=/tmp/cryptomounts \
         -cp "$HERE/usr/bin/mods/*:$HERE/usr/bin/cryptomator-1.16.0-SNAPSHOT.jar" \
         org.cryptomator.launcher.Cryptomator

Make it executable:

.. code-block:: bash

    chmod +x AppRun

Change the .desktop file to execute from the AppRun file, before running appimage tool.


Build the AppImage
------------------

.. code-block:: bash

    ARCH=x86_64 ./appimagetool-x86_64.AppImage Cryptomator.AppDir

Replace the folder name if needed. Then just make the `.AppImage` executable and run it.

Done!
