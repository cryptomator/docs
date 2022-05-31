Shortcuts Guide
===============

The Shortcuts integration of Cryptomator allows you to build different automations in the `Shortcuts app <https://support.apple.com/guide/shortcuts/welcome/ios>`_. With that, you can automate recurring tasks quickly and easily.

For a shortcut to run smoothly, the vault must be unlocked during the execution of the shortcut. For automations, you should set the unlock duration to "Indefinite" in the :ref:`settings of your vault <ios/vault-management/unlock-duration>`.

In addition, you should know that some Cryptomator shortcut actions build on each other. For example, the "Save File" action requires a folder inside a vault as an input, which can be obtained using the "Get Directory" action.

.. _ios/shortcuts-guide/automatic-photo-upload:

Automatic Photo Upload
----------------------

With Cryptomator's integration in Shortcuts, you can build an action to automatically upload your photos to a Cryptomator vault. You can either follow these step-by-step instructions or use the following shortcut to get started:

`https://www.icloud.com/shortcuts/90ae0e36dda44da3a39c9070ae097a92 <https://www.icloud.com/shortcuts/90ae0e36dda44da3a39c9070ae097a92>`_

**Step 1: Create new shortcut**

* Open the Shortcuts app on your iOS device.
* Tap on the "+" at the top right to create a new shortcut.

If the Shortcuts app is not installed, download it from the `App Store <https://apps.apple.com/app/shortcuts/id915249334>`_.

**Step 2: Add "Find Photos" action**

* Select "Add Action".
* Under the tab "Apps", select "Photos".
* Select the action "Find Photos".

You can customize this action to your needs by adding various filters or to limit the number of photos to be selected.

**Step 3: Add "Get Directory" action**

* Add the "Get Directory" action from Cryptomator.
* Specify the vault and the path of the folder where your photos should be stored.

Important: It will check if the folder exists in your vault. If it doesn't exist, the action will fail and no photos will be uploaded.

**Step 4: Add "Save File" action**

We're going to add the "Save File" action from Cryptomator. But since this action only saves a single file (or in this case, photo), we need to add wrap this action around a different action first.

* Add the "Repeat with Each" action, which you can find under the "Categories" tab and then under "Scripting".
* Add the "Save File" action from Cryptomator.
* Make sure that the two variables are correctly set: The image you want to save and the folder from the "Get Directory" action in step 3.

In order to set these variables, you may have to tap on the "File" field, then "Select Magic Variable", and tap on "Repeat Item".

Congratulations, you have just created your first shortcut with Cryptomator actions!

**Hints:**

1. To fully automate your photo upload, you should run a shortcut using an automation. To do this, `create a new automation <https://support.apple.com/guide/shortcuts/create-a-new-personal-automation-apdfbdbd7123/ios>`_ in the Shortcuts app. You don't have to create the whole shortcut again. You can just add the action "Execute Shortcut" and select the previously created shortcut.

2. Executing a shortcut with a lot of photos (>1,000) can take much longer than executing it with 2x500 photos. To our knowledge, this seems to be a limitation of the Shortcuts app. Therefore, try to limit the number of photos using the available filters. One possible filter is to consider only the photos of the last 2-7 days for a shortcut that is executed daily.
