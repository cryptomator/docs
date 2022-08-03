.. _hub/setup:

Setup
=====

Cryptomator Hub is a server application that can be deployed via Kubernetes or Docker Compose. To get started, use the `Setup Wizard <https://cryptomator.org/hub/setup/>`_ to generate the necessary configuration files.

Cryptomator Hub depends on `Keycloak <https://www.keycloak.org/>`_, an open-source identity and access management solution. That means, Hub manages access to your vaults whereas Keycloak manages users, groups, and authentication. In the Setup Wizard, you will have the option to choose between deploying Keycloak alongside Hub or specifying an URL to an existing Keycloak installation.

.. _hub/setup/keycloak-administration:

Keycloak Administration
-----------------------

Using Keycloak, you can `create users <https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-user_server_administration_guide>`_, `delete users <https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-user_server_administration_guide>`_, `manage groups <https://www.keycloak.org/docs/latest/server_admin/index.html#proc-managing-groups_server_administration_guide>`_, and optionally also synchronize users/groups to Keycloak using `LDAP <https://www.keycloak.org/docs/latest/server_admin/#_ldap>`_ or other identity providers to whom you can then give access to vaults in Hub.

.. note::

    Subgroups are not supported at this time.

.. _hub/setup/billing:

Billing
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

.. _hub/setup/requirements:

Requirements
------------

Currently, we are evaluating the system requirements for Cryptomator Hub. If you can provide data, please send us an email to hub-beta@cryptomator.org.
