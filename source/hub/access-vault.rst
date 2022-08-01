Working with Vaults
===================

This section describes exemplarily how to unlock a vault in the desktop app. Android and iOS behave analogously.

As described in :ref:`open an existing vault <desktop/adding-vaults/open-an-existing-vault>`, you should have already added the vault to the vault list by e.g. selecting the `vault.cryptomator` file.

.. _hub/access-vault/unlocking-a-vault:

Unlocking a Vault
-----------------

.. _hub/access-vault/unlocking-a-vault/1.-click-unlock:

1. Click Unlock
^^^^^^^^^^^^^^^^

To unlock the vault, click on the large ``Unlock`` button in the center of Cryptomator window. 

.. image:: ../img/hub/unlock-step1.png
    :alt: Click unlock to unlock a Hub vault with the desktop app
    :width: 920px

.. _hub/access-vault/unlocking-a-vault/2.-authenticate:

2. Authenticate
^^^^^^^^^^^^^^^

Cryptomator should open your default browser for authentication. If you're not already logged in, you need to provide your user credentials by e.g. entering your username and password or e.g. insert your key when WebAuthn is enabled.

.. image:: ../img/hub/unlock-step2.png
    :alt: After your browser asks for credentials, enter your username/password
    :width: 920px

.. _hub/access-vault/unlocking-a-vault/3.-add-device:

3. Add Device
^^^^^^^^^^^^^

If the authentication was successful, but you connect with this device the first time, you need to enter a unique name for this device

.. image:: ../img/hub/unlock-step3.png
    :alt: After your browser asks for credentials, enter your username/password
    :width: 920px

If the device registration was successful, you see the following confirmation dialog

.. image:: ../img/hub/unlock-step4.png
    :alt: After your browser asks for credentials, enter your username/password
    :width: 920px

.. _hub/access-vault/unlocking-a-vault/4.-vault-unlocked:

4. Vault unlocked
^^^^^^^^^^^^^^^^^

If you just registered the new device, a vault administrator needs to update the permission for the requested vault as described in :ref:`update permission of a vault <hub/vault-management/updating-permission>`, otherwise you see the following dialog

.. image:: ../img/hub/unlock-step5.png
    :alt: After your browser asks for credentials, enter your username/password
    :width: 920px

If the authentication was successful, you have access to this vault and your device is already granted to access it, the browser redirects to Cryptomator and you can reveal the vault folder as usual.

.. image:: ../img/hub/unlock-step6.png
    :alt: After the unlock was successful, you're redirected to Cryptomator
    :width: 920px
