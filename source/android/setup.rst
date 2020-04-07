Setup
=====

TODO.

.. _android/setup/requirements:

Requirements
------------

Requires Android 4.3 or later.

.. _android/setup/installation:

Installation
------------

You can get Cryptomator for Android on `Google Play <https://play.google.com/store/apps/details?id=org.cryptomator&hl=en>`_ or using our `APK Store <https://cryptomator.org/android/>`_.
As for the functionality of Cryptomator, the application does not differ in the different installation types. The APK-Store variant of Cryptomator was created to serve users who do not have Google PlayStore installed on their Android device.
If you have a Google PlayStore on your device, we recommend using the PlayStore version of Cryptomator as well.

The license to the App and also the app itself can be downloaded from our `APK-Store <https://cryptomator.org/android/>`_. The download is a so-called `APK` (Android application package), which is an installation archive. Install the app by simply clicking on the APK. 
It is possible that the app in which you clicked on the APK is asking for "Install from Unknown Sources" permission, this is normal and must be activated for a short time (it is recommended to remove the permission afterwards).

After Cryptomator is installed, you have to enter the license you purchased from `https://cryptomator.org/android/ <https://cryptomator.org/android/>`_. This can be done by copying and pasting the license into the field or by clicking on the link starting with `cryptomator://license/YOUR_LICENSE_KEY`.

For the technical people who also use 'adb' you can enter the following in the console: `adb shell am start -W -a android.intent.action.VIEW -d "cryptomator://license/YOUR_LICENSE_KEY" org.cryptomator`


