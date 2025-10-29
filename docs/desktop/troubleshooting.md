---
id: troubleshooting
title: Troubleshooting
sidebar_position: 14
---

# Troubleshooting

This page contains solutions for common issues you might encounter when using Cryptomator on desktop platforms.

## Log File Locations {#log-file-locations}

Cryptomator creates log files to help with troubleshooting when issues occur.
The default locations for these log files vary by operating system:

| Operating System | Default Log File Location                    |
| :--------------- | :------------------------------------------- |
| Windows          | `%localappdata%\Cryptomator\`                |
| macOS            | `~/Library/Logs/Cryptomator/`                |
| Linux            | `~/.local/share/Cryptomator/logs/`           |

The log files are named with the pattern `cryptomatorX.log`, where `X` is a number from 0 to 9.
The most recent log file is always `cryptomator0.log`.


## Debug Mode {#debug-mode}

Debug mode enables additional diagnostic logging to help troubleshoot issues with Cryptomator. When debug mode is active, the application records more detailed information about its operations in the log files.

:::warning Privacy Consideration
With debug mode enabled, _every accessed file and listed directory inside the vault is written in clear text to the log file_. This creates a record of your file and folder names, which may compromise privacy. Only enable debug mode when actively troubleshooting an issue, and remember to disable it afterward.
:::

To enable debug mode:

1. Open Cryptomator and open the preferences.
2. In the general tab, look for the `Enable debug logging` checkbox at the bottom and enable it.

Cryptomator will now run in debug mode. The app indicates this by showing a red bar at the bottom of the main window.
The additional debug information is written to your log files.
Once you have reproduced the issue you're investigating, disable debug mode by unchecking the option to return to normal logging levels.

## Known Issues {#known-issues}

For a list of known issues, please refer to the [Cryptomator Community](https://community.cryptomator.org/c/help/known-issues/16) or [GitHub Issues page](https://github.com/cryptomator/cryptomator/issues).
