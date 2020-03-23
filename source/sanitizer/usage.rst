Usage
=====

TODO.

.. _sanitizer/usage/running-sanitizer:

Running Sanitizer
-----------------


.. _sanitizer/usage/windows:

Windows
^^^^^^^

To run a Sanitizer check on Windows, open the command prompt (Start Menu > Enter "cmd" and press enter) and enter the following command:

.. code-block:: console

    java -jar C:\path\to\sanitizer-0.16.jar check -vault C:\path\to\vault -deep

Replace the paths ``C:\path\to\sanitizer-0.16.jar`` and ``C:\path\to\vault`` accordingly.

You can open an Explorer window and drag & drop the JAR file and vault directory into the command prompt to insert the correct path.


.. _sanitizer/usage/macos:

macOS
^^^^^

`This video <https://www.youtube.com/watch?v=yxJUcaXmdig>`_ shows how to do that on macOS.

.. image:: https://img.youtube.com/vi/yxJUcaXmdig/0.jpg
    :alt: Cryptomator Sanitizer: Quick Guide
    :target: https://www.youtube.com/watch?v=yxJUcaXmdig


.. _sanitizer/usage/output:

Output
------

After running Sanitizer, the files ``*.structure.txt`` and ``*.check.txt`` are created.

Those files contain some information about your vault (a list of the (encrypted) files and a problems report).


.. _sanitizer/usage/advanced-usage:

Advanced Usage
--------------

If you're looking for a way to restore missing file extensions after using the ``decryptVault`` command, please read this guide:

`Sanitizer: Restore Missing File Extensions <https://community.cryptomator.org/t/sanitizer-restore-missing-file-extensions>`_

.. warning::

    This article is only for a worst-case scenario when the vault has been partially deleted.
    **Use at your own risk!**
    Do not run these scripts if you don't know exactly what you are doing.
