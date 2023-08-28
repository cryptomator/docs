Cloud Management
================

.. _ios/cloud-management/other-file-provider:

Other File Provider
-------------------

This option allows you to add a vault from any supported `file provider <https://developer.apple.com/documentation/fileprovider/>`_. Default implementations by Apple are iCloud Drive and On My iPhone/iPad. Inside the Files app, you can also add custom connections to SMB-compatible servers.

If you have a lot of apps installed that include a file provider, you may notice that most of them are grayed out. This is because third-party file providers usually don't support "picking folders". To our best of knowledge, this is unsupported by Apple. You can find a technical discussion `here <https://github.com/cryptomator/ios/issues/51>`_.
