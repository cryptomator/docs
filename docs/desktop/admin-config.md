---
id: admin-config
title: Admin Configuration
sidebar_position: 12
---

# Admin Configuration

The admin configuration allows device or system administrators to define environment properties for Cryptomator so it runs in the desired context for all users on a device.
It is a system-level key-value file that persists across updates.

## Location of the Admin Configuration {#location-of-admin-configuration}

:::note
Editing the *admin configuration* may require elevated privileges (i.e. admin or root permissions).
:::

The storage location of the admin configuration file `config.properties` depends on the OS. The following table shows the storage path for each OS:


| OS      | Default Path                                                 |
| :------ | :----------------------------------------------------------- |
| Windows | `C:\ProgramData\Cryptomator\config.properties`           |
| macOS   | `/Library/Application Support/Cryptomator/config.properties` |
| Linux   | `/etc/cryptomator/config.properties`                   |


## Editing the Admin Configuration {#editing-the-admin-configuration}

The admin configuration is a simple, UTF-8 encoded key-value file.
Entries are of the form `property-key=property-value`.

:::info
Backward slashes `\` in property values must be escaped with another `\`. For example, setting a value of `C:\Logs\Cryptomator` has to be entered as `C:\\Logs\\Cryptomator`.
:::

**Example:** To allow loading of external plugins, you have to set `cryptomator.pluginDir` to a directory of your choice. If you want to set it to `~/cryptomator/plugins`, the line in the admin file looks like this:

```
cryptomator.pluginDir=@{userhome}/cryptomator/plugins
```

:::warning
After creating/editing the file, ensure correct file access permissions!

We recommend read access for all users, **write access only for system/device admins**.
:::

## Configurable Properties {#configurable-properties}

The following property keys are supported.

| Property Key                                                  | Description                                                                                                                                                      |
| :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cryptomator.logDir=[DirPath]`                                | The directory where Cryptomator stores its log files (e.g. application log, migration log).                                                                     |
| `cryptomator.pluginDir=[DirPath]`                             | The directory where Cryptomator discovers plugins.                                                                                                               |
| `cryptomator.p12Path=[FilePath]`                              | The path to the device key.                                                                                                                                     |
| `cryptomator.mountPointsDir=[DirPath]`                        | The directory where Cryptomator mounts vaults if no per-vault location has been set.                                                                             |
| `cryptomator.disableUpdateCheck=[Boolean]`                    | Whether to disable automatic update checks (`true`) or allow them (`false`). Defaults to false.                                                                      |
| `cryptomator.hub.allowedHosts=[UrlList]` | List of hosts that Cryptomator is allowed to connect to during Hub unlock. List entries are comma separated and each host url consists of `scheme:host:port` (`port` is optional). For example `https://hub1.example.com,https://hub2.example.com:4432` |
| `cryptomator.hub.enableTrustOnFirstUse=[Boolean]`             | Whether Cryptomator shall ask the user to trust unknown Hub hosts (`true`) or disallow connection attempts (`false`). A Hub host is considered unknown unless it is well-known (`*.cryptomator.cloud`), listed in `cryptomator.hub.allowedHosts`, or has already been allowed by the user. Defaults to true |


## Substitutions {#substitutions}

Substitutions are used to dynamically resolve the content of some properties depending on the environment Cryptomator is
started in, e.g. by inserting the path to the user's home folder. They may **only** be used in properties that start
with `cryptomator.` (mind the dot) like `cryptomator.logDir`.
All occurrences of the following substitution keys – in supported properties – are replaced by their respective variable
values:

| Substitution Key | Variable Value                          |
| :--------------- | :-------------------------------------- |
| `@{appdir}`      | The application installation directory. |
| `@{appdata}`     | `%APPDATA%` (Windows only).             |
| `@{localappdata}`| `%LOCALAPPDATA%` (Windows only).        |
| `@{userhome}`    | The user's home directory.              |

Unknown substitution keys remain unchanged; a key without a value is replaced with an empty string.
