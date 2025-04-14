.. _misc/supported-cloud-services:

Supported Cloud Services
========================

A standard use case for Cryptomator is storing your encrypted vaults in a Cloud Service of your choice for
safe and private synchronization of your data. When using Cryptomator for Desktop, you will need to have your
Cloud Service's synchronization software installed on your computer to access cloud-based vaults.

| In comparison, Cryptomator for Android and Cryptomator for iOS support access to vaults that are stored with a range
  of Cloud Services directly from within the app.
| While the Cryptomator for Android and Cryptomator for iOS apps offer native support for a growing number of cloud
  services, it can happen, especially with smaller ones, that your Cloud Service is not natively supported.
| In this case, however, most providers allow you to connect to your vaults via WebDAV instead.

.. note::
    | Depending on how well it is supported by your provider, individual features may not work optimally
      when using WebDAV.
    | If possible, *we therefore recommend that you access your data using the native integration* of your Cloud Service
      for an optimal user experience.

The following sections will provide you with an overview
of :ref:`natively supported Cloud Services,<misc/supported-cloud-services/natively-supported-clouds>` as well as
information about :ref:`selected Cloud Services with WebDAV support<misc/supported-cloud-services/clouds-with-webdav-support>`
and a list of :ref:`incompatible Cloud Services.<misc/supported-cloud-services/incompatible-clouds>`

.. _misc/supported-cloud-services/natively-supported-clouds:

Natively supported Cloud Services (Recommended)
-----------------------------------------------

The following Cloud Services are natively supported by Cryptomator for Android and/or Cryptomator for iOS.

.. csv-table:: Natively supported Cloud Services
   :header-rows: 1
   :file: ../_static/csv/natively-supported-clouds.csv

.. [#playstore-recommendation] **We recommend using the** |GooglePlayStoreVariant|_ **of Cryptomator for Android users**
   for the best experience. Please see :ref:`here <android/setup/variant-differences>` for more information about
   the different Cryptomator for Android variants and the reasoning behind those.
.. [#except-f-droid-main] Not supported by the :ref:`Main F-Droid repo variant <android/setup/f-droid-main-repository>`
   because this Cloud Service requires an API key.
.. [#except-f-droid-cryptomator] Not supported by the :ref:`Cryptomator F-Droid repo variant <android/setup/f-droid-repository>`
   because this Cloud Service requires proprietary dependencies.
.. [#except-accrescent] Not supported by the :ref:`Accrescent variant <android/setup/accrescent>`
   because this Cloud Service requires proprietary dependencies.
.. [#note-app-spaces] Some Android and iOS apps integrate into the operating system's file manager with their own
   storage spaces to allow seamless access to their files via so called "File Providers." Cryptomator generally supports
   saving vaults in those spaces, but is dependent on those apps explicitly supporting access by other
   apps like Cryptomator.
   For more technical information about this see `here <https://github.com/cryptomator/android/issues/553>`__ for Android
   and `here <https://github.com/cryptomator/ios/issues/51>`__ for iOS.
.. [#note-webdav] Please see :ref:`misc/supported-cloud-services/clouds-with-webdav-support` for a non-exhaustive list
   of Cloud Services and information about accessing them with WebDAV.

.. _misc/supported-cloud-services/clouds-with-webdav-support:

Cloud Services with WebDAV support
----------------------------------

The following *non-exhaustive* table lays out information about Cloud Services that can be accessed using WebDAV
by both Cryptomator for Android and Cryptomator for iOS.

.. csv-table:: Cloud Services with WebDAV support
   :header-rows: 1
   :file: ../_static/csv/clouds-with-webdav-support.csv

.. [#note-disroot] Disroot: To login, you must provide your disroot username (or your email if you are using your own domain) and your password. If 2FA is enabled you will have to generate an app-specific password.
.. [#note-hidrive-ionos] HiDrive IONOS: When using 2FA WebDAV requires the OTP provided next to the password but it is only valid for 30 minutes then (see `here \[de\] <https://www.ionos.de/hilfe/hidrive/sicherheit-in-hidrive/aktivieren-der-zwei-faktor-authentifizierung/>`__)
.. [#note-hidrive-strato] HiDrive Strato: When using 2FA WebDAV requires the OTP provided next to the password but it is only valid for 60 minutes then (see `here \[de\] <https://www.strato.de/faq/cloud-speicher/2-Faktor-Authentifizierung/>`__)
.. [#note-icedrive] IceDrive: WebDAV requires a paid plan and a separate access key as password. (see `here <https://icedrive.net/help/account/does-icedrive-support-webdav>`__)
.. [#note-kdrive] kDrive: WebDAV support is disabled for free users.
.. [#note-koofr] Koofr: WebDAV access requires a separate app password.
.. [#note-magentacloud] MagentaCLOUD: WebDAV access requires a separate protocol password.
.. [#note-nextcloud] Nextcloud: WebDAV requires an app-specific password when 2FA is enabled.
.. [#note-owncloud] ownCloud: WebDAV requires an app-specific password when 2FA is enabled.
.. [#note-pcloud] pCloud: WebDAV access is disabled when 2FA is enabled. Requires a paid plan.
.. [#note-yandex-disk] Yandex.Disk: WebDAV requires an app-specific password when 2FA is enabled.

.. _misc/supported-cloud-services/incompatible-clouds:

Incompatible Cloud Services
---------------------------

| The Cloud Services listed in the following *non-exhaustive* table can currently **not** be used natively or via WebDAV.
| This applies to both Cryptomator for Android and Cryptomator for iOS.

.. csv-table:: Incompatible Cloud Services
   :header-rows: 1
   :file: ../_static/csv/incompatible-clouds.csv

.. |GooglePlayStoreVariant| replace:: **Google Play Store variant**
.. _GooglePlayStoreVariant: ../../android/setup/#google-play-store
