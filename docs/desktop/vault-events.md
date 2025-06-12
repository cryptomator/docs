---
id: vault-events
title: Events and Event View
sidebar_position: 9
---

# Events and Event View

Vault events provide information about your vault's status and activities during file operations. Cryptomator generates events to help you monitor vault health and troubleshoot issues like sync conflicts or file corruption.

:::info
Vault events are not persisted on the hard disk.
They are only stored in memory and are lost when the application is closed.
:::

## Viewing Events {#viewing-events}

All vault events are logged in the event view, which can be accessed from the main window. To open the event view, click the **Bell** icon in the lower left corner of the main window. If new, unread events are present, the icon displays a small red dot.

<Image src="/img/desktop/event-view.png" alt="Event view" width="236" height="369" />

The event view displays events from all vaults, with the newest events at the top. You can filter events by vault or clear the entire log using the **trash can** icon in the action bar.

Each vault event shows a title, the number of occurrences in brackets, an affected file path, and a timestamp. Hover over any event to reveal a context menu with event-specific actions, such as revealing affected files in your file manager.

When a vault is locked, its events are anonymized for security. Unlock the vault to view detailed event information.

## Event Types {#event-types}

Cryptomator generates five types of vault events. Understanding these events helps you maintain vault health and resolve issues quickly.

## Decryption Failed Event {#decryption-failed-event}

Cryptomator cannot decrypt an encrypted file in your vault. This indicates potential file corruption or cryptographic integrity issues.

**When it occurs:**
- An encrypted file cannot be decrypted during a read operation
- File corruption has damaged the cryptographic data

**What to do:**
Investigate the affected file by ensuring it is properly synced. Compare the file size with what appears in your cloud provider's web interface. If the sizes differ, sync conflicts or incomplete uploads may be the cause. Restore the file from a backup if corruption is confirmed.

When multiple files are affected, the entire vault's integrity may be compromised.

## Conflict Resolved Event {#conflict-resolved-event}

Cryptomator automatically resolved a filename conflict within an encrypted directory. This occurs when two encrypted files have the same base name, with one having an additional suffix. For more information, see [handling sync conflicts](sync-conflicts.md).

**When it occurs:**
- Two files with conflicting encrypted names exist in the same directory
- The automatic conflict resolution successfully renames the conflicting file
- Data integrity is maintained during the resolution process

**What to do:**
Verify that both files contain the expected content and manually merge any necessary changes. This is typically the result of sync conflicts between devices.

## Conflict Resolution Failed Event {#conflict-resolution-failed-event}

Cryptomator encounters a filename conflict but fails to automatically resolve it. This typically happens when the automatic renaming process cannot complete due to filesystem restrictions or permissions issues.

**When it occurs:**
- A filename conflict is detected but cannot be automatically resolved
- File system permissions prevent the renaming operation
- The target filename for conflict resolution already exists
- An I/O error occurs during the resolution process

**What to do:**
Manual intervention is required. Check file permissions, retry or free up space in the target directory. Afterwards, start the conflict resolution again by listing the decrypted directory.

## Broken File Node Event {#broken-file-node-event}

A path within your vault appears to be corrupted because the encrypted directory is missing required identification files. This might be structural damage to the vault's directory hierarchy.

**When it occurs:**
- Accessing a path that should exist but has incomplete encrypted directory structure
- The directory is missing essential files like *dir.c9r*
- Vault structure corruption has occurred

**What to do:**
Ensure the encrypted directory is properly synced. Compare the content of the encrypted directory with what appears in your cloud provider's web interface or on other devices. Restore from backup if there other sources show the same directory content . If the directory is still broken, consider deleting it to free the filesystem node.

## Broken Directory File Event {#broken-directory-file-event}

A *dir.c9r* file is corrupted, either because it's empty when it shouldn't be, or because it exceeds the maximum allowed size of 1000 bytes. Directory files are critical for maintaining the vault's encrypted directory structure.

**When it occurs:**
- A *dir.c9r* file is completely empty
- A *dir.c9r* file is larger than 1000 bytes (indicating corruption)
- The directory file contains invalid or corrupted data

**What to do:**
This indicates directory structure corruption. As with the [Broken File Node Event](#broken-file-node-event), ensure proper sync and compare with other sources. The affected directory is inaccessible and access needs to be restored with the health check. If the fix inside the health check was applied, delete the directory containing the broken link.

:::warning
Broken file events (both file nodes and directory files) indicate serious vault corruption. When these events occur, you should always investigate for a cause and restore from the cloud or a recent backup to prevent further corruption.
:::