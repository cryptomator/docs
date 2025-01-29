.. _desktop/network:

Network Settings
================

In general, Cryptomator does not require a network connection to function.

If the network connection is present, it is used for optional features, i.e. update checks and searching the error database for solutions.
The only exception is when unlocking :ref:`Cryptomator Hub <hub/introduction>` vaults, then a network connection to the hub server is required.
All network connections to the internet are using HTTPS with at least TLS 1.2.


.. _desktop/network/trust-certificate-management:

Trust Certificate Management
-----------------------------
Depending on the OS, the required trusted root certificates are loaded from different locations.

+---------+--------------------------------------------------------------------------------------------------------------------------------+
| OS      | Trust store                                                                                                                    |
+=========+================================================================================================================================+
| Linux   | | PKCS#12 file ``/etc/cryptomator/certs.p12``; If the file does not exist, the JDK default                                     |
|         | | trust store is used. [1]_                                                                                                    |
+---------+--------------------------------------------------------------------------------------------------------------------------------+
| macOS   | System keychain                                                                                                                |
+---------+--------------------------------------------------------------------------------------------------------------------------------+
| Windows | | Certificate store "Trusted Root Certification Authorities", with registry path                                               |
|         | | ``HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\ROOT\``                                                           |
+---------+--------------------------------------------------------------------------------------------------------------------------------+

Remarks:

.. [1] For more information about the location and contained certificates, see `JEP 319 <https://openjdk.org/jeps/319>`_.


.. _desktop/network/proxy-server:

Proxy Server
------------
The default proxy server differs depending on the operating system:

+---------+-----------------------+
| OS      | Default proxy setting |
+=========+=======================+
| Linux   | No proxy              |
+---------+-----------------------+
| macOS   | Use system proxy      |
+---------+-----------------------+
| Windows | Use system proxy      |
+---------+-----------------------+


To change the proxy server, you need to edit :ref:`Cryptomator.cfg <desktop/advanced-settings/locating-system-wide-advanced-configuration>`.
Open the file in a text editor, search for the line::

    java-options=-Djava.net.useSystemProxies=true

and *if it exists*, only replace the word ``true`` with ``false``.

In the second step, add the following lines to the end of the file::

    java-options=-Dhttp.proxyHost=[1]
    java-options=-Dhttp.proxyPort=[2]
    java-options=-Dhttps.proxyHost=[1]
    java-options=-Dhttps.proxyPort=[2]
    java-options=-Dhttp.nonProxyHosts=localhost|127.0.0.1|cryptomator-vault|[3]

and replace ``[1]`` with the host address of the proxy server, ``[2]`` with the port used on the proxy server and ``[3]`` with the list of host addresses, which should not use the proxy server, separated by '|'.