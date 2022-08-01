Managing Vaults
===============
This page contains instructions to manage vaults in Cryptomator Hub.


.. _hub/vault-management/vault-list:

Vault List
----------

The vault list is the central page of Cryptomator Hub.
Here, all vaults which are shared with you, are listed.
After signing in, Hub redirects you to the list.
Alternatively, you can also access the list by clicking on the ``Vaults`` tab in the navbar.

.. image:: ../img/hub/vaultlist.png
    :alt: Listing vaults
    :width: 920px

.. note::

    Even if you are an administrator of the Hub instance, only vaults which are shared with you are listed.


.. _hub/vault-management/creating-a-vault:

Creating a Vault
----------------
To create a vault in Hub, navigate to the vault list and click on the ``Create Vault`` button in the top right corner.
Fill out the opened form and complete the setup by clicking the ``Create Vault`` button in the right corner.

.. image:: ../img/hub/create-vault.png
    :alt: Creating a vault
    :width: 920px

.. note::
    The vault password is needed to grant or revoke access to the vault. It is not used to unlock the vault in Cryptomator apps.


When the setup is finished, you have the opportunity to download the initial vault template and place it in your desired cloud storage location.
If you skip this step, you can download the template :ref:`later <hub/vault-management/vault-management>`.

.. image:: ../img/hub/create-vault-download.png
    :alt: Creating a vault
    :width: 920px


.. _hub/vault-management/vault-details:

Vault Details
-------------
The vault details page shows metadata of a vault (e.g. creation date) and contains the management section of the vault (e.g. grant a user access).
To open it, navigate to the vault list and click on entry in the list.
The details are displayed on the right side.

.. image:: ../img/hub/vault-details.png
    :alt: Displaying vault details
    :width: 920px


.. _hub/vault-management/vault-management:

Vault Management
^^^^^^^^^^^^^^^^
To add a user, grant devices access or view the members list, you have enable the management section in the vault details.
Open the vault details and click the ``Manage Vault`` button.
In showing dialog, enter the vault admin password.

.. image:: ../img/hub/vault-details-enter-pw.png
    :alt: Enter Admin Password
    :width: 920px


If the password is correct, the vault details view is enriched with more elements:

* ``Shared with`` user list
* ``Download Vault template`` button
* ``Grant Access`` button (only shown if necessary)

.. image:: ../img/hub/vault-details-with-manage.png
    :alt: Vault details including management section
    :width: 920px

.. _hub/vault-management/adding-user:

Adding a User
-------------
To unlock a vault in the desktop app, you need to share the vault with the user.
Open the vault details and enable the management section.
Click on the ``Share`` button in below the ``Shared with`` list.
A search field opens to search for users and groups.

.. image:: ../img/hub/vault-details-search.png
    :alt: Vault details with opened share-with search field 
    :width: 920px

To add a user or group, select it from the results list and click the ``Add`` button.
It will appear in the ``Shared with`` list.

.. _hub/vault-management/updating-permission:

Updating permission
-------------------

If a new user with a device is added to this vault or an existing user adds a new device, an admin of the vault has to confirm this process, only then the new user or the new device can unlock the vault. As a vault admin you can see that an update is necessary when you open the vault management and a ``Update Permissions`` button appears.

.. image:: ../img/hub/update-permission.png
    :alt: Update permissions
    :width: 920px