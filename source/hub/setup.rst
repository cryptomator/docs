.. _hub/setup:

Setup
=====

After Cryptomator Hub is deployed, you can already login to the web interface and create your first vault.
However, you will not be able share it, since no other users are registered.
For on-premise installations, you must additionally add your license if you want to use the full feature set.

.. _hub/setup/license:

License
-------

Every Cryptomator Hub instance requires a license.
The license is bound to the instance and cannot be transferred to another instance.
A license has a fixed amount of seats.
A seat is taken for every user, which is assigned to at least one vault.
If a user is not assigned to any vault, it does not occupy a seat.

By default, when Cryptomator Hub is freshly installed, it comes with a community license.

.. image:: ../img/hub/billing-community-license.png
    :alt: Billing shows community license
    :width: 920px

This license is valid for 5 seats.

The ``Get License`` button will redirect you to the Cryptomator Hub license store where you can buy a license for your instance.
If you buy a license (or upgrade the existing one), you will be automatically redirected back to your Hub instance.

.. image:: ../img/hub/billing-active-license.png
    :alt: Billing shows standard license
    :width: 920px

.. _hub/setup/keycloak:

Create Users
------------

Cryptomator Hub uses *Keycloak* to manage users and groups.
Keycloak is an open source identity and access management solution.
Section :ref:`hub/user-management` explains how to access Keycloak from Cryptomator Hub and use it.