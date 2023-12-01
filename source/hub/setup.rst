.. _hub/setup:

Setup
-----

After Cryptomator Hub is deployed, you can already login to the web interface and create your first vault.
However, you will not be able share it, since no other users are registered.
For on-premise installations, you must additionally add your license if you want to use the full feature set.

.. _hub/setup/license:

License
-------

When Cryptomator Hub is freshly installed, it comes with a community license.

.. image:: ../img/hub/billing-community-license.png
    :alt: Billing shows community license
    :width: 920px

This license is valid for 5 seats. Only users assigned to a vault will occupy a seat.

The ``Get License`` button will direct you to an external website at cryptomator.org where you can buy a license for this instance. If successful, you will be automatically redirected back to your Hub instance.

.. image:: ../img/hub/billing-active-license.png
    :alt: Billing shows standard license
    :width: 920px

.. _hub/setup/keycloak:

Adding Users
------------

While Cryptomator Hub manages access to vaults, it does not manage users directly.
Instead, it uses Keycloak, an open source identity and access management solution for this task.
Section :ref:`hub/user-management` explains how to access Keycloak from Cryptomator Hub and manage users.