---
id: settings
title: Settings
sidebar_position: 5
---

# Settings

You can configure Cryptomator to your needs.
This section provides an overview of the different settings.

## General Settings {#general-settings}

After pressing the three dots ① and clicking on `Settings`, you will find options to customize Cryptomator.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/launch-settings.png" alt="How to launch settings with Android" width="810" height="1665" />
  <Image src="/img/android/settings.png" alt="How to launch settings with Android" width="1080" height="2220" />
</Grid>

### Cloud Services {#cloud-services}

This setting lists all Cloud Services. When pressing on a service, the authentication starts or if you're already authenticated, you will be logged out.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/setting-cloud-services.png" alt="How to handle cloud services with Android" width="1080" height="2220" />
</Grid>

### Fingerprint {#fingerprint}

:::note
This setting is only available if your device supports the fingerprint authentication.
:::

With the toggle button in the right upper corner ①, the fingerprint will be generally enabled/disabled.
Using the toggle button next to the vault, it will be enabled/disabled for this vault ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/setting-fingerprint-0-setup.png" alt="How to use fingerprint with Android" width="810" height="1665" />
  <Image src="/img/android/setting-fingerprint-1-enter-pw.png" alt="How to use fingerprint with Android" width="1080" height="2220" />
</Grid>

After enabling, you have to unlock the vault using the password.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/setting-fingerprint-2-authenticate.png" alt="How to use fingerprint with Android" width="1080" height="2160" />
  <Image src="/img/android/setting-fingerprint-3-finish.png" alt="How to use fingerprint with Android" width="1080" height="2160" />
</Grid>

To have access to the key stored in the keystore, you have to authenticate against the system using the fingerprint.

### Block App When Obscured {#block-app-when-obscured}

Under certain circumstances, Cryptomator for Android may not respond to touches.

This is most often caused by apps which apply a color filter to the device.
Examples are the apps Twilight or Blue Light Filter. When disabling or uninstalling such apps, Cryptomator will work again.

The reason for Cryptomator not working is that the user interface of Cryptomator is obscured.
Whenever another app obscures Cryptomator, it could intercept the input done to Cryptomator or display a false UI tricking the user into doing stuff he does not want to do.
For security reasons, Cryptomator is disabled by default when obscured.
The Android documentation contains [some more details](https://developer.android.com/reference/android/view/View.html#Security).

Starting from version 1.3.0, this protection can be disabled in the settings. We rather recommend to use the app without a blue light filter because this is more secure.

If you want to disable protection, the blue light filter or any app obscuring Cryptomator has to be disabled one time.
Afterwards, the settings can be opened and the option "Disable app when obscured" can be disabled. And then the relevant apps can be re-enabled again.

To identify apps which could cause this, open the Android settings and navigate to **Settings - Apps - Advanced (gear icon) - Draw over other apps**.
This will list the installed Apps and will show you which ones are allowed to draw over other apps.
You can disable this for most apps (but not for system apps like the keyboard but this should not cause any problems).

If you see this dialog, some app is able to draw over Cryptomator: 

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/setting-app-obscured.png" alt="How to enable obscured app with Android" width="303" height="500" />
</Grid>

### Screen Security {#screen-security}

Android provides the possibility to prevent the system and other apps from doing screenshots, screen recordings etc. while Cryptomator is active.
This feature is very important because it prevents other apps from reading data across the screen.

This feature is enabled for all our views.
For some devices, e.g. a Chromebook with a second display or to create a screenshot and disable it again, we made this option since the 1.3.9 configurable.

Read more: [FLAG*SECURE](https://developer.android.com/reference/android/view/Display.html#FLAG*SECURE)

### Style {#style}

You can choose between the following three styles:

* Automatic (follow system): Follows the system specified in the Android settings
* Light: App shows in light mode
* Dark: App shows in dark mode

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/settings.png" alt="How to change style with Android" width="1080" height="2220" />
  <Image src="/img/android/setting-style-dark.png" alt="How to change style with Android" width="1080" height="2220" />
</Grid>

## Search {#search}

You can use the magnifier inside the cloud node list to search for specific nodes.
Thereby there are two settings:

* Live search (disabled by default)
* Search using glob pattern matching (disabled by default)

both are described in the following chapters.

### Live Search {#live-search}

If this setting is enabled, the search mode is `live`.
That means, the search starts immediately after entering the search pattern.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/search.gif" alt="How to use live search with Android" width="500" height="1028" />
</Grid>

If it is disabled, you have to use the magnifier or the enter button in your keyboard to start the search.

### Search using glob pattern matching {#search-using-glob-pattern-matching}

If this setting is enabled, you have to enter a glob pattern into the search bar.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/search-glob-pattern.gif" alt="How to use live search with Android" width="540" height="1110" />
</Grid>

If it is disabled, the beginning of the cloud node names must match the entered text. Upper and lower case is not relevant in this option.
 

## Automatic Locking {#automatic-locking}

If a vault is unlocked and Cryptomator isn't active, the automatic locking timeout is counting down.
After the timeout expires, all vaults get locked.
You can choose between:

* 1 minute
* 2 minutes
* 5 minutes
* 10 minutes
* Never

`When screen is disabled` can be deactivated so that the vaults don't get locked when the screen locks.

## Automatic Photo Upload {#automatic-photo-upload}

If the `Automatic photo upload` is enabled, all photos taken will be marked for upload and after the specified vault gets unlocked again, the upload starts.

Under the setting `Choose vault for upload`, you can specify the target vault and folder in the vault where the images will be placed.

Which pictures will be tracked, depends on the Android version on your phone:

* Nougat (API level 24 or 7.x) and later: All images which Android adds to the gallery will be uploaded to the vault
* Pre-Nougat: Only the images created with the camera will be uploaded to the vault

## Cache {#cache}

Introduced in version 1.5.0, if enabled, all downloaded files will be cached (encrypted) on the file system. Further downloads will only verify with the server, that the cached file is still the latest version.
If so it will not be downloaded again but directly retrieved from the file system. The cache is implemented using a least recently used mechanism, that means, the oldest entry will be overwritten if the max cache size is reached.

### Cache Size Per Cloud {#cache-size-per-cloud}

Using this setting, you can specify the total max cache size per Cloud Service.

You can choose between the following options:

* 50 MB
* 100 MB
* 250 MB
* 500 MB
* 1 GB
* 5 GB

:::note
The more memory is given to caching, the greater the convenience factor. However, this memory can be used up to the maximum on the system and is then no longer available.
:::

### Clear Cache {#clear-cache}

This setting will flush all cached files.

## Support {#support}

If you have problems with the app you can enable the `Debug mode`.
After reproducing the problem, you can disable the `Debug mode` again and `Send log file`.

## Advanced Settings {#advanced-settings}

### Workaround Opening Microsoft Files {#workaround-opening-microsoft-files}

With this setting enabled, files are opened in Microsoft applications with write permission.

Due to a bug in Microsoft apps, the file to be edited must be shared with these apps in a public media folder on the device. After Cryptomator is resumed, the publicly accessible file is deleted again but Cryptomator cannot influence what has happened to this file in the meantime. Make sure that you are aware of this behavior when activating this option. This will only apply to Microsoft file types.

### Keep Unlocked {#keep-unlocked}

With this setting enabled, all vaults remain unlocked when a file is opened by a third-party application, which can be useful in combination with the "Workaround Opening Microsoft Files".

### Accelerate Unlock {#accelerate-unlock}

Download files to unlock the vault in the background while prompted to enter the password or biometric authentication. Keep it activated unless unlocking the vault does not work.

## Version {#version}

This setting displays the current version of this app.

The following sub settings are only available, if you're using the APK-Store variant of Cryptomator and not the Google Play Store one.

### Update Check Interval {#update-check-interval}

Using the specified interval below, the app checks if the latest version is installed.

You can choose between the following options:

* Once a day
* Once a week
* Once a month
* Never

### Check For Updates {#check-for-updates}

This setting displays the timestamp of the latest update check. You can click on this setting to trigger a update check.
