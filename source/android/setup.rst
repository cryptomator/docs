Setup
=====

You can get Cryptomator for Android on

* `Google Play Store`_
* `APK Store`_
* `Cryptomator F-Droid repository`_
* `Main F-Droid repository`_
* `Accrescent`_

No matter which variant of the app you choose: The key functionality of Cryptomator stays the same.

| The variants only differ in terms of the :ref:`supported Cloud Services,<misc/supported-cloud-services>` the way they are downloaded and the way a license is acquired.
  If you have access to the *Google Play Store* on your device, **we recommend using the** |GooglePlayStoreVariant|_ **of Cryptomator.**
| Otherwise, please keep reading.

.. _android/setup/variant-differences:

Differences between variants and how to choose
----------------------------------------------

While all variants of the Cryptomator for Android app have the same key functionality, you should make sure to pick
the perfect variant for you:

Most users will want to use the :ref:`Google Play Store<android/setup/google-playstore>` or the :ref:`APK Store<android/setup/apk-store>` as installation type. Both variants have access to all
:ref:`supported Cloud Services<misc/supported-cloud-services>` and allow for maximum flexibility. While the *Google Play Store variant* can be purchased and downloaded via its
*Google Play Store* page, the *APK Store variant* and the accompanying license must be obtained via our website.

| The :ref:`Cryptomator F-Droid repo variant<android/setup/f-droid-repository>` and :ref:`Main F-Droid repo variant<android/setup/f-droid-main-repository>` both **don't** support Google Drive as Cloud Service because
  Google Drive requires proprietary dependencies which doesn’t fit the spirit of F-Droid.
  Additionally the *Main F-Droid repo variant* **doesn't** support **any** Cloud Services that require an API key.
| Both can be downloaded from their corresponding F-Droid repository and require a license which can be obtained via
  `our website. <APK Store_>`_
| The *APK Store*, *F-Droid variants* and *Accrescent* of Cryptomator were created to serve users who do not have the *Google Play Store* installed
  on their Android device or do not want their purchases to go through Google.

.. note::
    If you have access to the *Google Play Store* on your device, **we recommend using the** |GooglePlayStoreVariant|_ **of Cryptomator**
    for the best user experience and maximum flexibility.

To learn more about the supported Cloud Services, please see :ref:`Supported Cloud Services.<misc/supported-cloud-services>`

.. _android/setup/google-playstore:

Google Play Store
------------------

.. highlights::
    | You can buy and download the *Google Play Store variant* of Cryptomator here:
    | `Google Play Store`_

If you have installed Cryptomator via the *Google Play Store,* you will receive updates as usual via the *Google Play Store.*

After buying the app using the *Google Play Store,* it can be used with any number of devices that you have linked to the google account from your purchase. Furthermore it supports the "Google Play Family Library" function which means that the app can be used by up to 5 people in a family without having to buy it again. The conditions and how to create a “Google Play Family” can be found here: https://support.google.com/googleplay/answer/7007852?hl=en

Sometimes the *Google Play Store* has problems to recognize that the app was already bought and asks you to buy again the app, see this topic to recover from this problem: `On how many devices can the app be installed using Google Play Store? <https://community.cryptomator.org/t/on-how-many-devices-can-the-app-be-installed-using-google-play-store/6129>`_

.. _android/setup/apk-store:

APK Store
------------

.. highlights::
    | You can buy a license for the app and download the *APK Store variant* of Cryptomator here:
    | `APK Store`_

The *APK store variant* can be installed from the `APK Store`_ on our website. Please verify the `SHA256 Signature` after downloading the APK before installing. The download is a so-called `APK` (Android application package), which is an installation archive. Install the app by simply clicking on the APK.

It is possible that the app in which you clicked on the APK is asking for "Install from Unknown Sources" permission, this is normal and must be activated for a short time (it is recommended to remove the permission afterwards).

This variant does include an automatic updater that periodically checks if there is a newer version of this app, and if so, it can be downloaded and installed directly from within the app. Using the :ref:`Update Check Interval <android/settings/update-check-interval>` in the Cryptomator settings, you can specify how often the update check is executed.

As this variant is not bought using the *Google Play Store* you need to buy a license key from the `APK Store`_ on our website. After Cryptomator is installed, you have to enter this key. This can be done by copying and pasting the license into the field when asked for it or by clicking on the link starting with ``cryptomator://license/YOUR_LICENSE_KEY``.

.. _android/setup/f-droid-repository:

Cryptomator F-Droid repository
--------------------------------

.. highlights::
    | You can buy a license for the *Cryptomator F-Droid repository variant* of Cryptomator here:
    | `APK Store`_

.. highlights::
    | You can download the *Cryptomator F-Droid repository variant* of Cryptomator from F-Droid after adding our F-Droid
      repository to the F-Droid app by opening this link on the device or by scanning the following QR-Code:
    | `Cryptomator F-Droid repository`_

    .. image:: ../img/android/fdroid-qr-code.svg
        :alt: How to handle cloud services with Android
        :width: 128px

As with the *APK Store variant,* since this app variant is not purchased via the *Google Play Store,* you need to buy a license key from the `APK Store`_ on our website. After Cryptomator is installed, you have to enter this key. This can be done by copying and pasting the license into the field when asked for it or by clicking on the link starting with ``cryptomator://license/YOUR_LICENSE_KEY``.

.. _android/setup/f-droid-main-repository:

Main F-Droid repository
------------------------

.. highlights::
    | You can buy a license for the *Main F-Droid repository variant* of Cryptomator here:
    | `APK Store`_

.. highlights::
    | You can download the *Main F-Droid repository variant* of Cryptomator here:
    | `Main F-Droid repository`_

The *Main F-Droid repository variant* can be installed directly from the `Main F-Droid repository. <Main F-Droid repository_>`_ Regarding the license key, the same applies as with the :ref:`Cryptomator F-Droid repository variant.<android/setup/f-droid-repository>`

Unlike all other variants of Cryptomator for Android, this variant has its own package name: ``org.cryptomator.lite``. It means that you cannot, intentionally or unintentionally, simply switch between this and the other variants. It requires to setup the app again. The reason we decided to do this is that other Cryptomator variants already exist in some popular F-Droid repositories, and if we hadn't decided to do this, there could have been an unwanted variant switch.

.. _android/setup/accrescent:

Accrescent
----------

.. highlights::
    | You can buy a license for the *Accrescent* variant of Cryptomator here:
    | `APK Store`_

.. highlights::
    | You can download the *Accrescent* variant of Cryptomator here:
    | `Accrescent`_

As this variant is not bought using the *Google Play Store* you need to buy a license key from the `APK Store`_ on our website. After Cryptomator is installed, you have to enter this key. This can be done by copying and pasting the license into the field when asked for it or by clicking on the link starting with ``cryptomator://license/YOUR_LICENSE_KEY``.

.. _android/setup/requirements:

Requirements
------------

Requires Android 8.0 or later.

.. _android/setup/update-rollout:

Update Rollout
---------------

The timing of the update depends on your installed variant:

* *Google Play Store:* Updates are reviewed by Google, so it may take a few days before the update is available.
* *APK Store:* Updates are available as they are released.
* *Cryptomator F-Droid Repo:* Updates are available as they are released.
* *Main F-Droid Repo:* Updates are available as soon as the F-Droid maintainers have built the application, which can take a few days.

.. _`Google Play Store`: https://play.google.com/store/apps/details?id=org.cryptomator&hl=en
.. _`APK Store`: https://cryptomator.org/android/
.. _`Cryptomator F-Droid repository`: https://static.cryptomator.org/android/fdroid/repo?fingerprint=F7C3EC3B0D588D3CB52983E9EB1A7421C93D4339A286398E71D7B651E8D8ECDD
.. _`Main F-Droid repository`: https://f-droid.org/en/packages/org.cryptomator.lite
.. _`Accrescent`: https://accrescent.app/app/org.cryptomator

.. |GooglePlayStoreVariant| replace:: **Google Play Store variant**
.. _GooglePlayStoreVariant: `android/setup/google-playstore`_