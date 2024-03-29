.. _hub/your-account:

Your Account
============

To open vaults secured by a Cryptomator Hub instance, you need an account on the regarding Hub instance.
The account is used to authenticate your identity and to manage your trusted devices.

If you don't have an account, contact your local administrator to create one for you.


.. _hub/your-account/account-key:

Account Key
-----------

Every account has a private *Account Key*.
The Account Key is used for authorizing browsers or apps which try to connect to Hub.
It is not used for encrypting vault data.
Keep your account key secret and only store it in a secure place (e.g. password manager).
You can view your account key in your :ref:`profile <hub/your-account/profile>` on trusted browsers.

.. note::
    If you lose your account key, you have two options: If you have access to an authorized browser, you can view it on the `profile page <hub/your-account/profile>` or otherwise, you can :ref:`reset your account <hub/your-account/reset-account>`.

.. _hub/your-account/setup:

Account Setup
-------------

The very first time you log in to Cryptomator Hub, you're asked to set up your account.
This is a one-time process that takes just a minute.

.. image:: ../img/hub/account-setup.png
    :alt: Account setup on first login


In the setup your :ref:`hub/your-account/account-key` is generated and displayed.
We recommend to copy your Account Key to a secure place (e.g. password manager), but you can always view it later in your profile from any trusted browser.

The browser used for the setup is automatically trusted.
You can revoke the trust at any time in your profile.

After storing your account key securely, tick the checkbox and finish the setup.
You are now logged in to Hub and can start using it.


.. _hub/your-account/profile:

Profile Page
------------

On the profile page, you can manage your account.
It shows your account key and fingerprint, lists your trusted devices and more.

You can open it by clicking on your profile icon in the top right corner and select *Your Profile*.

.. image:: ../img/hub/profile-view.png
    :alt: Your account in Cryptomator Hub


.. _hub/your-account/profile/regenerate-account-key:

Regenerate Account Key
^^^^^^^^^^^^^^^^^^^^^^

If you suspect that your old Account Key has been compromised, you can regenerate it.
You will then only be able to add new devices with the new Account Key.
Your existing devices will remain trusted.


.. _hub/your-account/profile/authorized-devices:

Authorized Devices
^^^^^^^^^^^^^^^^^^
A device is authorized if it has been authenticated with your Account Key.
Only on authorized devices you can log in to Hub and open vaults.

If you don't trust a device anymore, you can remove it from the list of authorized devices.


.. _hub/your-account/profile/fingerprint:

User Key Fingerprint
^^^^^^^^^^^^^^^^^^^^

The fingerprint can be used to verify the identity of the user, for example when :ref:`updating the permissions <hub/vault-management/updating-permission>` of a vault.
It will only change if you :ref:`reset your account <hub/your-account/reset-account>`.

.. _hub/your-account/reset-account:

Reset Account
-------------
If you lose your account key and can't access any trusted browser, you can reset your account when logging in from a new device.
All already authorized devices will be removed and access to shared vaults will be revoked.
After the reset, you can log in to Hub from a new browser and set up your account again.

.. image:: ../img/hub/trust-device.png
    :alt: Reset account on login