---
id: shortcuts-guide
title: Shortcuts Guide
sidebar_position: 6
---

# Shortcuts Guide

The Shortcuts integration of Cryptomator allows you to build different automations in the [Shortcuts app](https://support.apple.com/guide/shortcuts/welcome/ios). With that, you can automate recurring tasks quickly and easily.

For a shortcut to run smoothly, the vault must be unlocked during the execution of the shortcut. For automations, you should set the unlock duration to "Indefinite" in the [settings of your vault](vault-management.md#unlock-duration).

In addition, you should know that some Cryptomator shortcut actions build on each other. For example, the "Save File" action requires a folder inside a vault as an input, which can be obtained using the "Get Folder" action.

## Automatic Photo Upload {#automatic-photo-upload}

With Cryptomator's integration in Shortcuts, you can build an action to automatically upload your photos to a Cryptomator vault. You can either follow these step-by-step instructions or use the following shortcut to get started:

[https://www.icloud.com/shortcuts/90ae0e36dda44da3a39c9070ae097a92](https://www.icloud.com/shortcuts/90ae0e36dda44da3a39c9070ae097a92)

**Step 1: Create new shortcut**

* Open the Shortcuts app on your iOS device.
* Tap on the "+" at the top right to create a new shortcut.

If the Shortcuts app is not installed, download it from the [App Store](https://apps.apple.com/app/shortcuts/id915249334).

**Step 2: Add "Find Photos" action**

* Select the search field at the bottom to add an action.
* Under the tab "Apps", select "Photos".
* Select the action "Find Photos".

You can customize this action to your needs by adding various filters or to limit the number of photos to be selected.

**Step 3: Add "Get Folder" action**

* Add the "Get Folder" action from Cryptomator.
* Specify the vault and the path of the folder where your photos should be stored.

Important: It will check if the folder exists in your vault. If it doesn't exist, the action will fail and no photos will be uploaded.

**Step 4: Add "Save File" action**

We're going to add the "Save File" action from Cryptomator. But since this action only saves a single file (or in this case, photo), we need to add wrap this action around a different action first.

* Add the "Repeat with Each" action, which you can find under the "Categories" tab and then under "Scripting".
* Add the "Save File" action from Cryptomator.
* Make sure that the two variables are correctly set: The image you want to save and the folder from the "Get Folder" action in step 3.

In order to set these variables, you may have to tap on the "File" field, then "Select Magic Variable", and tap on "Repeat Item".

Congratulations, you have just created your first shortcut with Cryptomator actions!

**Hints:**

1. To fully automate your photo upload, you should run a shortcut using an automation. To do this, [create a new automation](https://support.apple.com/guide/shortcuts/create-a-new-personal-automation-apdfbdbd7123/ios) in the Shortcuts app. You don't have to create the whole shortcut again. You can just add the action "Execute Shortcut" and select the previously created shortcut.

2. Executing a shortcut with a lot of photos (>1,000) can take much longer than executing it with 2x500 photos. To our knowledge, this seems to be a limitation of the Shortcuts app. Therefore, try to limit the number of photos using the available filters. One possible filter is to consider only the photos of the last 2-7 days for a shortcut that is executed daily.

## Photo to PDF (Advanced Example) {#photo-to-pdf}

Another example, inspired by community member JB, is to convert the latest photo to a PDF and save it in a vault under a chosen path. This example is a bit more advanced, but it shows how you can combine different actions to create a more complex automation. You can either follow these step-by-step instructions or use the following shortcut to get started:

[https://www.icloud.com/shortcuts/3d8e20cbfe26452486f3629a2f104c94](https://www.icloud.com/shortcuts/3d8e20cbfe26452486f3629a2f104c94)

We assume that you have already installed Shortcuts, see step 1 of the previous example.

**Step 1: Add "Is Vault Unlocked" action**

* Add the "Is Vault Unlocked" action from Cryptomator.
* Specify the vault you want to use.
* Add the "If" action from the "Scripting" category.
* Set the condition to "is" and the number to "0".

This makes sure that your vault is unlocked. If it is not, the shortcut will ask you to unlock it, see step 2.

**Step 2: Add "Open Vault" action**

* Add the "Open Vault" action from Cryptomator.
* Drag this action below the "If" action (and above "Otherwise").
* Specify the same vault you used before.
* Add the "Show Alert" action from the "Scripting" category.
* Drag this action below the "Open Vault" action (and above "Otherwise").
* Replace the informational message with something like "Unlock this vault and run this shortcut again".

This completes the "If" block. Now we can be certain that the vault is unlocked for the "Otherwise" block.

**Step 3: Add "List" action**

If you only want to save the PDF in one specific path, you can skip this step and go to step 4. Otherwise, you can add a list of paths to choose from.

* Add the "List" action from the "Scripting" category.
* Drag this action below the "Otherise" action (and above "End If").
* Customize this list to your needs by specifying paths of the folders where your PDFs could potentially be stored, something like a "favorites" list.
* Add the "Choose from List" action from the "Scripting" category.

Don't worry about dragging these actions inside the "Otherwise" block of the "If" action, we'll do that in the very end.

**Step 4: Add "Get Latest Photos" + "Make PDF" actions**

* Add the "Get Latest Photos" action from the "Media" category.
* Add the "Make PDF" action from the "Documents" category.

This is just an example. Shortcuts offer you many other ways to get the file or media that you could use as an input for encryption.

**Step 5: Add "Get Folder" action**

* Add the "Get Folder" action from Cryptomator.
* Select the variable "Chosen Item" for the path (or enter a specific path if you skipped step 3) and specify the same vault you used before.

Important: It will check if the folder exists in your vault. If it doesn't exist, the action will fail and no PDF will be uploaded.

**Step 6: Add "Save File" action**

* Add the "Save File" action from Cryptomator.
* Make sure that the two variables are correctly set: The PDF you want to save and the folder from the "Get Folder" action in step 5.

**Step 7: Finish "Otherwise" block**

* Drag the "End If" action to the very bottom, which will enclose all actions that you have created between the steps 3 and 6 into the "Otherwise" block.

Congratulations, you have just created a more advanced shortcut with Cryptomator actions!
