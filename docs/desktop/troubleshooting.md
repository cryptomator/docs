---
id: troubleshooting
title: Troubleshooting
sidebar_position: 14
---

# Troubleshooting

This page contains solutions for common issues you might encounter when using Cryptomator on desktop platforms.

## Log File Locations {#log-file-locations}

Cryptomator creates log files to help with troubleshooting when issues occur. The default locations for these log files vary by operating system:

| Operating System | Default Log File Location                    |
| :--------------- | :------------------------------------------- |
| Windows          | `%appdata%\Cryptomator\cryptomator.log`      |
| macOS            | `~/Library/Logs/Cryptomator/cryptomator.log` |
| Linux            | `~/.Cryptomator/cryptomator.log`             |

You can change the log file directory by setting the `cryptomator.logDir` property in the [advanced configuration](advanced-settings.md). This allows you to store log files in a custom location if needed.

## Debug Mode {#debug-mode}

Debug mode enables additional diagnostic logging to help troubleshoot issues with Cryptomator. When debug mode is active, the application records more detailed information about its operations in the log files.

:::warning Privacy Consideration
With debug mode enabled, the paths of all files you encrypt are stored in the log file. This creates a record of your file and folder names, which may compromise privacy. Only enable debug mode when actively troubleshooting an issue, and remember to disable it afterward.
:::

To enable debug mode:

1. Open Cryptomator and navigate to the settings
2. Look for the `Enable debug logging` checkbox and enable it

The additional debug information will now be written to your log files. Once you have reproduced the issue you're investigating, disable debug mode by unchecking the option to return to normal logging levels.

## Known Issues {#known-issues}

For a list of known issues, please refer to the [Cryptomator Community](https://community.cryptomator.org/c/help/known-issues/16) or [GitHub Issues page](https://github.com/cryptomator/cryptomator/issues).
