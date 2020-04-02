Settings
========

You can configure Cryptomator to your needs.
This section provides an overview of the different settings.

.. _android/settings/general-settings:

General Settings
----------------

After pressing the three dots ① and clicking on ``Settings``, you will find options to customize Cryptomator.

.. image:: ../img/android/launch-settings.png
    :alt: How to launch settings with Android
    :width: 346px

.. image:: ../img/android/settings.png
    :alt: How to launch settings with Android
    :width: 346px

.. _android/settings/cloud-services:

Cloud Services
^^^^^^^^^^^^^^

This setting lists all cloud services. When pressing on a service, the authentication starts or if you're already authenticated, you will be logged out.

.. image:: ../img/android/setting-cloud-services.png
    :alt: How to handle cloud services with Android
    :width: 346px

.. _android/settings/fingerprint:

Fingerprint
^^^^^^^^^^^

.. note::

    This setting is only available if your device supports the fingerprint authentication.

With the toggle button in the right upper corner ①, the fingerprint will be generally enabled/disabled.
Using the toggle button next to the vault, it will be enabled/disabled for this vault ②.

.. image:: ../img/android/setting-fingerprint-0-setup.png
    :alt: How to use fingerprint with Android
    :width: 346px

.. image:: ../img/android/setting-fingerprint-1-enter-pw.png
    :alt: How to use fingerprint with Android
    :width: 346px

After enabling, you have to unlock the vault using the password.

.. image:: ../img/android/setting-fingerprint-2-authenticate.png
    :alt: How to use fingerprint with Android
    :width: 346px

.. image:: ../img/android/setting-fingerprint-3-finish.png
    :alt: How to use fingerprint with Android
    :width: 346px

To have access to the key stored in the keystore, you have to authenticate against the system using the fingerprint.

.. _android/settings/block-app-when-obscured:

Block App When Obscured
^^^^^^^^^^^^^^^^^^^^^^^

Under certain circumstances, Cryptomator for Android may not respond to touches.

This is most often caused by apps which apply a color filter to the device.
Examples are the apps Twilight or Blue Light Filter. When disabling or uninstalling such apps, Cryptomator will work again.

The reason for Cryptomator not working is that the user interface of Cryptomator is obscured.
Whenever another app obscures Cryptomator, it could intercept the input done to Cryptomator or display a false UI tricking the user into doing stuff he does not want to do.
For security reasons, Cryptomator is disabled by default when obscured.
The Android documentation contains `some more details <https://developer.android.com/reference/android/view/View.html#Security>`_.

Starting from version 1.3.0, this protection can be disabled in the settings. We rather recommend to use the app without a blue light filter because this is more secure.

If you want to disable protection, the blue light filter or any app obscuring Cryptomator has to be disabled one time.
Afterwards, the settings can be opened and the option "Disable app when obscured" can be disabled. And then the relevant apps can be reenabled again.

To identify apps which could cause this, open the Android settings and navigate to **Settings - Apps - Advanced (gear icon) - Draw over other apps**.
This will list the installed Apps and will show you which ones are allowed to draw over other apps.
You can disable this for most apps (but not for system apps like the keyboard but this should not cause any problems).

If you see this dialog, some app is able to draw over Cryptomator: 

.. image:: ../img/android/setting-app-obscured.png
    :alt: How to enable obscured app with Android
    :width: 346px

.. _android/settings/live-search:

Live Search
^^^^^^^^^^^

If this setting is enabled, the search mode is ``live``.
That means, the search starts immediately after entering the search pattern.
If it is disabled, you have to use the magnifier or the enter button in your keyboard to start the search.

.. image:: ../img/android/filter.gif
    :alt: How to use live search with Android
    :width: 346px

.. _android/settings/screen-security:

Screen Security
^^^^^^^^^^^^^^^

Android provides the possibility to prevent the system and other apps from doing screenshots, screen recordings etc. while Cryptomator is active.
This feature is very important because it prevents other apps from reading data across the screen.

This feature is enabled for all our views.
For some devices, e.g. a Chromebook with a second display or to create a screenshot and disable it again, we made this option since the 1.3.9 configurable.

Read more: `FLAG*SECURE <https://developer.android.com/reference/android/view/Display.html#FLAG*SECURE>`_

.. _android/settings/style:

Style
^^^^^

You can choose between the following three styles:

* Automatic (follow system): Follows the system specified in the Android settings
* Light: App shows in light mode
* Dark: App shows in dark mode

.. image:: ../img/android/settings.png
    :alt: How to change style with Android
    :width: 346px

.. image:: ../img/android/setting-style-dark.png
    :alt: How to change style with Android
    :width: 346px

.. _android/settings/automatic-locking:

Automatic Locking
-----------------

If a vault is unlocked and Cryptomator isn't active, the automatic locking timeout is counting down.
After the timeout expires, all vaults get locked.
You can choose between:

* 1 minute
* 2 minutes
* 5 minutes
* 10 minutes
* Never

``When screen is disabled`` can be deactivated so that the vaults don't get locked when the screen locks.

.. _android/settings/automatic-photo-upload:

Automatic Photo Upload
----------------------

If the ``Automatic photo upload`` is enabled, all photos taken will be marked for upload and after the specified vault gets unlocked again, the upload starts.

Under the setting ``Choose vault for upload``, you can specify the target vault and folder in the vault where the images will be placed.

Which pictures will be tracked, depends on the Android version on your phone:

* Nougat (API level 24 or 7.x) and later: All images which Android adds to the gallery will be uploaded to the vault
* Pre-Nougat: Only the images created with the camera will be uploaded to the vault

.. _android/settings/cache:

Cache
----------------------

Introduced in version 1.5.0, if enbaled, all downloaded files will be cached (encrypted) on the file system. Further downloads will only verify with the server, that the cached file is still the latest version.
If so it will not be downloaded again but directly retrieved from the file system. The cache is implemented using a least recently used mechanism, that means, the oldest entry will be overwritten if the max cache size is reached.

.. _android/settings/chache-size-per-cloud:

Cache Size Per Cloud
^^^^^^^^^^^^^^^^^^^^^^^^^^

Using this setting, you can specify the total max cache size per cloud provider. 

You can choose between the following options:

* 50 MB
* 100 MB
* 250 MB
* 500 MB
* 1 GB
* 5 GB

.. note::
    The more memory is given to caching, the greater the convenience factor. However, this memory can be used up to the maximum on the system and is then no longer available.

.. _android/settings/clear-cache:

Clear Cache
^^^^^^^^^^^^^^^^^^^^^^^^^^

This setting will flush all cached files.

.. _android/settings/support:

Support
-------

If you have problems with the app you can enable the ``Debug mode``.
After reproducing the problem, you can disable the ``Debug mode`` again and ``Send log file``.

.. _android/settings/version:

Version
-------

This setting displays the current version of this app.

The following sub settings are only available, if you're using the APK-Store version of Cryptomator and not the PlayStore one.

.. _android/settings/update-check-interval:

Update Check Interval
^^^^^^^^^^^^^^^^^^^^^^^^^^

Using the specified interval below, the app checks if the latest version is installed.

You can choose between the following options:

* Once a day
* Once a week
* Once a month

.. _android/settings/check-for-updates:

Check For Updates
^^^^^^^^^^^^^^^^^^^^^^^^^^

This setting displays the timestamp of the latest update check. You can click on this setting to trigger a update check.
