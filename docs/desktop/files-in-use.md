---
id: files-in-use
title: Files in Use
sidebar_position: 18
---

# Files in Use

:::info
This feature is only available for [Cryptomator Hub](/docs/hub/introduction.md) vaults.
:::

When multiple people work in a shared vault, two users might try to edit the same file at the same time.
The **Files in Use** feature helps prevent accidental overwrites in this situation.

## When This Feature Applies {#when-this-feature-applies}

You can run into concurrent edits when:

- a Cryptomator Hub vault is used by multiple team members
- the vault is synced across multiple devices
- the vault is accessed over a network share

If another user is currently editing a file, Cryptomator can block opening that file for writing on your side.

:::note
The usage information is passed with the files being edited.
Therefore, it requires either the vault residing on shared storage (for example, a network share) or file synchronization.
In the latter case, it takes around 10 seconds until the status is synchronized to other devices (depending on the sync app).
:::

## What You Will See {#what-you-will-see}

If a file is currently in use by someone else, Cryptomator shows a notification in the app.
This means another device or user has an active edit session for that file.

<Image src="/img/desktop/files-in-use-notification.png" alt="Cryptomator notification for a file currently in use" />

## What You Can Do {#what-you-can-do}

In most cases, the best action is to wait until the other person finishes editing and then try again.

You can also choose to ignore the use status and continue.
Use this only if you are sure it is safe, because forcing access can overwrite someone else's newer changes.

We recommend the following sequence when receiving a "File is in use" notification:
1. Ask the person shown in the notification whether they are still editing the file.
1. If they already closed the file but it is still shown as "in use", use "Ignore Use Status".
1. Only open a file marked as in use without checking with teammates in exceptional situations.
1. In that case, create a backup copy first to avoid losing edits.

## Stale Use Status {#stale-use-status}

The use status is cleared after some time without file updates (around 10 min).
If this happens, access is possible again.
This helps in cases such as device sleep, crashes, or interrupted sessions.

## Related Topics {#related-topics}

- [Synchronization Conflicts](/docs/desktop/sync-conflicts.md)
