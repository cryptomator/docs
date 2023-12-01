User & Group Management
-----------------------


Users and groups are managed in `Keycloak <https://www.keycloak.org/>`, a powerful, open source identity and access management solution.
You can decide to connect your own Keycloak instance to Hub or use the one provided by Cryptomator.

You can access the Keycloak management interface over the admin section of Hub.


.. image:: ../img/hub/access-keycloak-link.png
    :alt: Accessing Keycloak via Hub
    :width: 920px

There you can perform all users or groups related tasks, such as
`creating new users <https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-user_server_administration_guide>`_,
`deleting users <https://www.keycloak.org/docs/latest/server_admin/index.html#proc-deleting-user_server_administration_guide>`_ or
`manage groups <https://www.keycloak.org/docs/latest/server_admin/index.html#proc-managing-groups_server_administration_guide>`_.

.. note::
    Subgroups are not supported at this time.

## Integrating existing identity providers

Alternatively to the in-house administration, you can also connect already existing identity providers (e.g., ActiveDirectory/Microsoft Entra), to keep your user management centralized.
Keycloak supports a wide range of identity provider protocols, such as:

* `LDAP <https://www.keycloak.org/docs/latest/server_admin/#_ldap>`_
* OpenID Connect
* SAML

.. note::
    With ``LDAP``, all users and groups are imported and synchronized with Keycloak, so they are available immediately after setup.
    With ``OpenID Connect`` or ``SAML``, users are unknown to Keycloak and Hub *until they log in for the first time*.

.. warning::
    All preconfigured Keycloak instance already contains a user called ``syncer``. It is used to synchronize all users and groups from Keycloak to Hub, so do not edit or delete it!

