---
id: cloud-management
title: Cloud Management
sidebar_position: 2
---

# Cloud Management

## WebDAV {#webdav}

Please see [Cloud Services With WebDAV Support](/docs/misc/supported-cloud-services.md#cloud-services-with-webdav-support) for a non-exhaustive list of Cloud Services and information about accessing them with WebDAV.

:::note
While creating the WebDAV connection, please make sure to add the root of the accessible storage and don't navigate directly into the vault.
:::

If you encounter the `Request method not supported by the target resource.` error, it means that the WebDAV URL entered is invalid or the server doesn't support WebDAV properly.

To resolve this:
1. Verify you're using the correct WebDAV URL for your cloud service
2. Check the [list of supported cloud services](/docs/misc/supported-cloud-services.md#cloud-services-with-webdav-support) for the correct WebDAV URLs
3. Ensure your cloud provider has WebDAV enabled (some require enabling it in account settings)
4. If using 2FA, you might need to generate an app-specific password for WebDAV access

## Other File Provider {#other-file-provider}

This option allows you to add a vault from any supported [file provider](https://developer.apple.com/documentation/fileprovider/). Default implementations by Apple are iCloud Drive and On My iPhone/iPad. Inside the Files app, you can also add custom connections to SMB-compatible servers.

If you have a lot of apps installed that include a file provider, you may notice that most of them are grayed out. This is because third-party file providers usually don't support "picking folders". To our best of knowledge, this is unsupported by Apple. You can find a technical discussion [here](https://github.com/cryptomator/ios/issues/51).
