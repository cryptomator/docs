---
id: access-vault
title: Working with Vaults
sidebar_position: 4
---

# Working with Vaults

This section shows you how to work with a vault like view its content, move files or access it with other applications.

## Unlock Vault {#unlock-vault}

If you want to access the data inside a vault, you have to unlock it by selecting it.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/unlock-vault-0-select.png" alt="How to unlock a vault with Android" width="810" height="1665" />
</Grid>

In the next step, you have to unlock the vault using the password. If the device supports fingerprint authentication and you've activated it in the settings for this vault, you will be prompted to unlock using fingerprint. How to setup fingerprint authentication will be documented in a separate chapter.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/unlock-vault-1-using-password.png" alt="How to unlock a vault with Android" width="1080" height="2220" />
  <Image src="/img/android/unlock-vault-2-using-fingerprint.png" alt="How to unlock a vault with Android" width="1080" height="2160" />
</Grid>

After providing the credentials, the vault gets unlocked and opened.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/unlock-vault-3-loading.png" alt="How to unlock a vault with Android" width="1080" height="2220" />
  <Image src="/img/android/unlock-vault-4-unlocked.png" alt="How to unlock a vault with Android" width="1080" height="2220" />
</Grid>

You're now able to edit the content of the vault.

## Lock Vault {#lock-vault}

To lock an unlocked vault, there are several ways to do this:

* use the lock button in the vault list ①
* use the lock button in the notification ②
* use the lock button in the vault actions ③ and ④

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/lock-vault-0-lock.png" alt="How to lock a vault with Android" width="810" height="1665" />
  <Image src="/img/android/lock-vault-1-notification.png" alt="How to lock a vault with Android" width="810" height="1665" />
  <Image src="/img/android/lock-vault-2-lock-start.png" alt="How to lock a vault with Android" width="810" height="1665" />
  <Image src="/img/android/lock-vault-3-select-lock.png" alt="How to lock a vault with Android" width="810" height="1665" />
</Grid>

All of the possibilities will result in the locked vault.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/lock-vault-4-finish.png" alt="How to lock a vault with Android" width="1080" height="2220" />
</Grid>

:::note
The auto-lock timeout specified in the settings will lock the vault if Cryptomator is in background. Furthermore if not changed in settings, the vault gets locked if the screen turns off.
:::

## View and Edit File {#view-and-edit-file}

Start the view and edit process by clicking on a file.
Finish the editing or viewing using the back button of the device until you're back in Cryptomator.
If the content has changed, the upload process starts.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/edit-file.gif" alt="How to edit a file with Android" width="540" height="1110" />
</Grid>

## Rename File or Folder {#rename-file-or-folder}

To change the name of a specific file or folder in Cryptomator, you select the `V` ① next to the file or folder  and choose *Rename* ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/rename-vault-0-start.png" alt="How to rename a vault with Android" width="810" height="1665" />
  <Image src="/img/android/rename-vault-1-select-rename.png" alt="How to rename a vault with Android" width="810" height="1665" />
</Grid>

Choose a new name and confirm using the `RENAME` button.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/rename-vault-3-renaming.png" alt="How to rename a vault with Android" width="1080" height="2220" />
  <Image src="/img/android/rename-vault-4-finish.png" alt="How to rename a vault with Android" width="1080" height="2220" />
</Grid>

## Move File or Folder {#move-file-or-folder}

To move a file or a folder into another folder, you select the `V` next to the file or folder ① and choose *Move* ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/move-file-0-start.png" alt="How to move a file or folder with Android" width="810" height="1665" />
  <Image src="/img/android/move-file-1-select-move.png" alt="How to move a file or folder with Android" width="810" height="1665" />
</Grid>

Choose a new location by selecting a folder or by pressing the back button of your phone to navigate to the parent folder.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/move-file-2-move-root.png" alt="How to move a file or folder with Android" width="1080" height="2220" />
  <Image src="/img/android/move-file-3-move-target.png" alt="How to move a file or folder with Android" width="1080" height="2220" />
</Grid>

Confirm using the `MOVE` button.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/move-file-3-moving.png" alt="How to move a file or folder with Android" width="1080" height="2220" />
  <Image src="/img/android/move-file-4-finish.png" alt="How to move a file or folder with Android" width="1080" height="2220" />
</Grid>

While moving, you can use the ③ button to create a new folder in the current folder.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/move-file-5-move-folder-hint.png" alt="How to move a file or folder with Android" width="810" height="1665" />
</Grid>

## Delete File or Folder {#delete-file-or-folder}

To delete a specific file or folder in Cryptomator, you select the `V` next to the file or folder ① and choose *Delete* ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/delete-file-0-start.png" alt="How delete a file or folder with Android" width="810" height="1665" />
  <Image src="/img/android/delete-file-1-select-delete.png" alt="How delete a file or folder with Android" width="810" height="1665" />
</Grid>

Confirm the deletion process using the `DELETE` button.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/delete-file-2-confirmation.png" alt="How to delete a file or folder with Android" width="1080" height="2220" />
  <Image src="/img/android/delete-file-3-deleting.png" alt="How to delete a file or folder with Android" width="1080" height="2220" />
  <Image src="/img/android/delete-file-4-finish.png" alt="How to delete a file or folder with Android" width="1080" height="2220" />
</Grid>

:::note
By deleting a folder, all subfolders and files inside are deleted recursively.
:::

## Export File or Folder {#export-file-or-folder}

To export a specific file or folder in Cryptomator, you select the `V` next to the file or folder ① and choose *Export* ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/export-file-0-start.png" alt="How export a file or folder with Android" width="810" height="1665" />
  <Image src="/img/android/export-file-1-select-export.png" alt="How export a file or folder with Android" width="810" height="1665" />
</Grid>

Choose the target location where the file or folder should be exported to.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/export-file-2-choose-location.png" alt="How to export a file or folder with Android" width="1080" height="2220" />
  <Image src="/img/android/export-file-3-exporting.png" alt="How to export a file or folder with Android" width="1080" height="2220" />
  <Image src="/img/android/export-file-4-finish.png" alt="How to export a file or folder with Android" width="1080" height="2220" />
</Grid>

## Share File with Other App {#share-file-with-other-app}

To share a specific file or folder in Cryptomator with another app, you select the `V` next to the file or folder ① and choose Share ②.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/share-file-0-start.png" alt="How share a file or folder with Android" width="810" height="1665" />
  <Image src="/img/android/share-file-1-select-share.png" alt="How share a file or folder with Android" width="810" height="1665" />
</Grid>

Choose the target app in which you will use the file or folder.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/share-file-2-select-app.png" alt="How to share a file or folder with Android" width="1080" height="2220" />
</Grid>

:::tip
By sharing a file or folder from Cryptomator with Cryptomator, you can copy content from one vault to another one.
:::

## Share File with Cryptomator {#share-file-with-cryptomator}

You can share files from another app with Cryptomator.
We use as example the Files app from Android.

You select the file(s) to share by long clicking on it ①.
Press the share button ② to choose to share these file(s) and select *Cryptomator* ③.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/share-with-cm-0-start.png" alt="How share a file or folder with Android" width="810" height="1665" />
  <Image src="/img/android/share-with-cm-1-choose-cm.png" alt="How share a file or folder with Android" width="810" height="1665" />
</Grid>

Choose the vault ⑤ and optionally specify the target folder in the vault ④ (default is the root).

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/share-with-cm-2-select-vault.png" alt="How to share a file or folder with Android" width="810" height="1665" />
</Grid>

Then the encryption and upload starts.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/share-with-cm-3-uploading.png" alt="How to share a file or folder with Android" width="1080" height="2220" />
  <Image src="/img/android/share-with-cm-4-finish.png" alt="How to share a file or folder with Android" width="1080" height="2220" />
</Grid>

## Search in Folder {#search-in-folder}

Search for files or folders within the same folder using the magnifier ①.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/search-0-start.png" alt="How to search in a vault with Android" width="810" height="1665" />
</Grid>

Now you can enter the pattern after which you want to search in this folder.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/search-1-searched.png" alt="How to search in a vault with Android" width="1080" height="2220" />
</Grid>

Using the `X` ② you can clear the pattern and after pressing it again, the filter mode is finished.

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/search-2-finish.png" alt="How to search in a vault with Android" width="810" height="1665" />
</Grid>

In the settings there are two options that influence the behavior of the search:

* Live search (disabled by default)
* Search using glob pattern matching (disabled by default)

For more information, see the Settings chapter.

## Sort Folder by… {#sort-folder-by}

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/sort.gif" alt="How to sort the content of a folder with Android" width="540" height="1110" />
</Grid>

## Fast Scroll {#fast-scroll}

<Grid columns={3} columnsSmall={2} columnsLarge={4}>
  <Image src="/img/android/fast-scroll.gif" alt="How to scroll fast through the content of a folder with Android" width="540" height="1110" />
</Grid>

If the folder contents are sorted by file size, the preview will show the file sizes accordingly. The same applies to the modification date.
