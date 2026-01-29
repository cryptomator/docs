---
id: supported-cloud-services
title: Supported Cloud Services
sidebar_position: 2
---

# Supported Cloud Services

A standard use case for Cryptomator is storing your encrypted vaults in a Cloud Service of your choice for
safe and private synchronization of your data. When using Cryptomator for Desktop, you will need to have your
Cloud Service's synchronization software installed on your computer to access cloud-based vaults.

In comparison, Cryptomator for Android and Cryptomator for iOS support access to vaults that are stored with a range of Cloud Services directly from within the app.

While the Cryptomator for Android and Cryptomator for iOS apps offer native support for a growing number of cloud services, it can happen, especially with smaller ones, that your Cloud Service is not natively supported.

In this case, however, most providers allow you to connect to your vaults via WebDAV instead.

:::note
Depending on how well it is supported by your provider, individual features may not work optimally when using WebDAV.

If possible, *we therefore recommend that you access your data using the native integration* of your Cloud Service for an optimal user experience.
:::

The following sections will provide you with an overview of [natively supported Cloud Services](#natively-supported-cloud-services), as well as information about [selected Cloud Services with WebDAV support](#cloud-services-with-webdav-support) and a list of [incompatible Cloud Services](#incompatible-cloud-services).

## Natively Supported Cloud Services (Recommended) {#natively-supported-cloud-services}

The following Cloud Services are natively supported by Cryptomator for Android and/or Cryptomator for iOS.

| Cloud Service | Android [^android-recommendation] | iOS |
|:--------------|:-------------|:----|
| Dropbox | ✅ [^no-fdroid-main] | ✅ |
| Google Drive | ✅ [^no-fdroid-main] [^no-fdroid-cryptomator] [^no-accrescent] | ✅ |
| OneDrive | ✅ [^no-fdroid-main] | ✅ |
| pCloud | ✅ [^no-fdroid-main] | ✅ |
| S3 | ✅ | ✅ |
| Box.com | ❌ | ✅ |
| iCloud | ❌ | ✅ |
| Local device storage | ✅ | ✅ |
| Spaces provided by other apps [^file-providers] | ✅ | ✅ |
| WebDAV [^webdav-list] | ✅ | ✅ |

[^android-recommendation]: **We recommend using the** [**Google Play Store variant**](/docs/android/setup.md#google-play-store) **of Cryptomator for Android users** for the best experience. Please see [here](/docs/android/setup.md#differences-between-variants-and-how-to-choose) for more information about the different Cryptomator for Android variants and the reasoning behind those.

[^no-fdroid-main]: Not supported by the [Main F-Droid repo variant](/docs/android/setup.md#main-f-droid-repository) because this Cloud Service requires an API key.

[^no-fdroid-cryptomator]: Not supported by the [Cryptomator F-Droid repo variant](/docs/android/setup.md#cryptomator-f-droid-repository) because this Cloud Service requires proprietary dependencies.

[^no-accrescent]: Not supported by the [Accrescent variant](/docs/android/setup.md#accrescent) because this Cloud Service requires proprietary dependencies.

[^file-providers]: Some Android and iOS apps integrate into the operating system's file manager with their own storage spaces to allow seamless access to their files via so called "File Providers." Cryptomator generally supports saving vaults in those spaces, but is dependent on those apps explicitly supporting access by other apps like Cryptomator. For more technical information about this see [here](https://github.com/cryptomator/android/issues/553) for Android and [here](https://github.com/cryptomator/ios/issues/51) for iOS.

[^webdav-list]: Please see [Cloud Services with WebDAV support](#cloud-services-with-webdav-support) for a non-exhaustive list of Cloud Services and information about accessing them with WebDAV.

## Cloud Services With WebDAV Support {#cloud-services-with-webdav-support}

The following *non-exhaustive* table lays out information about Cloud Services that can be accessed using WebDAV by both Cryptomator for Android and Cryptomator for iOS.

| Cloud Service | URL |
|:--------------|:----|
| 1&1 Online-Speicher (DSL) | `https://sd2dav.1und1.de` |
| 1&1 Online-Speicher (Webhosting) | `https://webdav.office.1und1.de` |
| blaucloud | `https://{username}.blaucloud.de/remote.php/webdav` |
| Disroot [^disroot] | `https://cloud.disroot.org/remote.php/webdav/` |
| freenetcloud | `https://webmail.freenet.de/webdav` |
| GMX MediaCenter | `https://webdav.mc.gmx.net` |
| HiDrive IONOS [^hidrive-ionos] | `https://webdav.hidrive.ionos.com` |
| HiDrive Strato [^hidrive-strato] | `https://webdav.hidrive.strato.com` |
| IceDrive [^icedrive] | `https://webdav.icedrive.io/` |
| kDrive [^kdrive] | `https://connect.drive.infomaniak.com` |
| Koofr [^koofr] | `https://app.koofr.net/dav/Koofr` |
| MagentaCLOUD [^magentacloud] | `https://magentacloud.de/remote.php/webdav` |
| Mailbox.org | `https://dav.mailbox.org/servlet/webdav.infostore/` |
| Mail.Ru | `https://webdav.cloud.mail.ru` |
| Nextcloud [^nextcloud] | `https://{host}/{path}/remote.php/dav/files/{username}` |
| OpenCloud [^opencloud] | `https://{host}/remote.php/dav/spaces/{space-id}` |
| ownCloud [^owncloud] | `https://{host}/{path}/remote.php/webdav` |
| pCloud (EU) [^pcloud] | `https://ewebdav.pcloud.com` |
| pCloud (US) [^pcloud] | `https://webdav.pcloud.com` |
| Seafile (self-hosted) | `https://{host}/{path}/seafdav` |
| STACK | `https://{username}.stackstorage.com/remote.php/webdav` |
| SWITCHdrive | `https://drive.switch.ch/remote.php/dav/files/{username}` |
| Syncwerk (formerly Seafile.de) | `https://app.syncwerk.com/seafdav` |
| WEB.DE Online-Speicher | `https://webdav.smartdrive.web.de` |
| wölkli | `https://cloud.woelkli.com/remote.php/webdav` |
| Yandex.Disk [^yandex] | `https://webdav.yandex.com` |

[^disroot]: Disroot: To login, you must provide your disroot username (or your email if you are using your own domain) and your password. If 2FA is enabled you will have to generate an app-specific password.

[^hidrive-ionos]: HiDrive IONOS: When using 2FA WebDAV requires the OTP provided next to the password but it is only valid for 30 minutes then (see [here \[de\]](https://www.ionos.de/hilfe/hidrive/sicherheit-in-hidrive/aktivieren-der-zwei-faktor-authentifizierung/))

[^hidrive-strato]: HiDrive Strato: When using 2FA WebDAV requires the OTP provided next to the password but it is only valid for 60 minutes then (see [here \[de\]](https://www.strato.de/faq/cloud-speicher/2-Faktor-Authentifizierung/))

[^icedrive]: IceDrive: WebDAV requires a paid plan and a separate access key as password. (see [here](https://icedrive.net/help/account/does-icedrive-support-webdav))

[^kdrive]: kDrive: WebDAV support is disabled for free users.

[^koofr]: Koofr: WebDAV access requires a separate app password.

[^magentacloud]: MagentaCLOUD: WebDAV access requires a separate protocol password.

[^nextcloud]: Nextcloud: WebDAV requires an app-specific password when 2FA is enabled.

[^opencloud]: OpenCloud: WebDAV requires an App Token generated from Settings > App Tokens. The `{space-id}` is obtained from the info panel of the resource in OpenCloud.

[^owncloud]: ownCloud: WebDAV requires an app-specific password when 2FA is enabled.

[^pcloud]: pCloud: WebDAV access is disabled when 2FA is enabled. Requires a paid plan.

[^yandex]: Yandex.Disk: WebDAV requires an app-specific password when 2FA is enabled.

## Incompatible Cloud Services {#incompatible-cloud-services}

The Cloud Services listed in the following *non-exhaustive* table can currently **not** be used natively or via WebDAV.

This applies to both Cryptomator for Android and Cryptomator for iOS.

| Cloud Service | Android Feature Request | iOS Feature Request |
|:--------------|:------------------------|:--------------------|
| Mega | [#39](https://github.com/cryptomator/android/issues/39) | [#258](https://github.com/cryptomator/ios/issues/258) |
