.. role:: raw-html(raw)
    :format: html

Setup
=====

You can get Cryptomator for Android on

* `Google Play <https://play.google.com/store/apps/details?id=org.cryptomator&hl=en>`_
* `APK Store <https://cryptomator.org/android/>`_ 
* `Cryptomator F-Droid repository <https://static.cryptomator.org/android/fdroid/repo?fingerprint=F7C3EC3B0D588D3CB52983E9EB1A7421C93D4339A286398E71D7B651E8D8ECDD>`_
* `Main F-Droid repository <https://f-droid.org/en/packages/org.cryptomator.lite>`_

As for the functionality of Cryptomator, the application does not differ using Google Play or the APK Store as installation type. Google Drive is excluded from the F-Droid version because Google Drive needs proprietary dependencies which doesn’t fit to the spirit of F-Droid.

The APK Store and F-Droid variant of Cryptomator was created to serve users who do not have Google PlayStore installed on their Android device.
If you have a Google PlayStore on your device, we recommend using the PlayStore version of Cryptomator.

.. csv-table:: Cryptomator for Android variants
   :header: "", ":ref:`Google Play <android/setup/google-playstore>`", ":ref:`APK Store <android/setup/apk-store>`", ":ref:`Cryptomator F-Droid repo <android/setup/f-droid-repository>`", ":ref:`Main F-Droid repo <android/setup/f-droid-main-repository>`"

   "Dropbox", "✅", "✅", "✅", "❌¹"
   "Google Drive", "✅", "✅", "❌²", "❌¹"
   "OneDrive", "✅", "✅", "✅", "❌¹"
   "pCloud", "✅", "✅", "✅", "❌¹"
   "WebDAV", "✅", "✅", "✅", "✅"
   "S3", "✅", "✅", "✅", "✅"
   "Local Storage", "✅", "✅", "✅", "✅"

❌¹: Excluded because they require API keys. :raw-html:`<br />`
❌²: Excluded because they contains proprietary dependencies.

.. _android/setup/google-playstore:

Google PlayStore
------------------

If you have installed Cryptomator via the Google PlayStore, you will receive updates as usual via the Google PlayStore.

After buying the app using Google PlayStore, it can be used with any number of devices that you have linked to the google account from your purchase. Furthermore it supports the "Google Play Family Library" function which means that the app can be used by up to 5 people in a family without having to buy it again. The conditions and how to create a “Google Play Family” can be found here: https://support.google.com/googleplay/answer/7007852?hl=en

Sometimes the Google PlayStore has problems to recognize that the app was already bought and asks you to buy again the app, see this topic to recover from this problem: `On how many devices can the app be installed using Google Play Store? <https://community.cryptomator.org/t/on-how-many-devices-can-the-app-be-installed-using-google-play-store/6129>`_

.. _android/setup/apk-store:

APK Store
------------

The APK store version can be installed from our website `https://cryptomator.org/android/ <https://cryptomator.org/android/>`_. Please verify the `SHA256 Signature` after downloading the APK before installing. The download is a so-called `APK` (Android application package), which is an installation archive. Install the app by simply clicking on the APK.

It is possible that the app in which you clicked on the APK is asking for "Install from Unknown Sources" permission, this is normal and must be activated for a short time (it is recommended to remove the permission afterwards).

This version does include an automatic updater that periodically checks if there is a newer version of this app, and if so, it can be downloaded and installed directly from within the app. Using the :ref:`Update Check Interval <android/settings/update-check-interval>` in the Cryptomator settings, you can specify how often the update check is executed.

As this version wasn't bought using Google's PlayStore you need to buy a license key from our website `https://cryptomator.org/android/ <https://cryptomator.org/android/>`_. After Cryptomator is installed, you have to enter this key. This can be done by copying and pasting the license into the field when asked for it or by clicking on the link starting with `cryptomator://license/YOUR_LICENSE_KEY`.

.. _android/setup/f-droid-repository:

Cryptomator F-Droid repository
--------------------------------

The Cryptomator F-Droid repository version can be installed after adding our F-Droid repository to the F-Droid app by opening `this link <https://static.cryptomator.org/android/fdroid/repo?fingerprint=F7C3EC3B0D588D3CB52983E9EB1A7421C93D4339A286398E71D7B651E8D8ECDD>`_ on the device or scanning the following QR-Code:

.. image:: ../img/android/fdroid-qr-code.svg
    :alt: How to handle cloud services with Android
    :width: 128px

As well as using the APK Store variant because this app version wasn't bought using Google's PlayStore you need to buy a license key from our website `https://cryptomator.org/android/ <https://cryptomator.org/android/>`_. After Cryptomator is installed, you have to enter this key. This can be done by copying and pasting the license into the field when asked for it or by clicking on the link starting with `cryptomator://license/YOUR_LICENSE_KEY`.

.. _android/setup/f-droid-main-repository:

Main F-Droid repository
------------------------

The Main F-Droid repository version can be installed directly from the `Main F-Droid repository <https://f-droid.org/en/packages/org.cryptomator.lite>`_. Regarding the license key, the same  applies as with the :ref:`Cryptomator F-Droid repository <android/setup/f-droid-repository>` variant.

Unlike all other versions of Cryptomator for Android, this version has its own package name: ``org.cryptomator.lite``. It means that you cannot, intentionally or unintentionally, simply switch between this and the other versions. It requires to setup the app again. The reason we decided to do this is that other Cryptomator variants already exist in some popular F-Droid repositories, and if we hadn't decided to do this, there could have been an unwanted variant switch.

.. _android/setup/requirements:

Requirements
------------

Requires Android 8.0 or later.
