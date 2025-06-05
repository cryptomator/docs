---
id: user-group-management
title: User & Group Management
sidebar_position: 3
---

# User & Group Management

Users and groups are managed in [Keycloak](https://www.keycloak.org/), a powerful, open source identity and access management solution.
In the default configuration Cryptomator Hub provides its own Keycloak instance, but you can also integrate an existing instance.

You can access the Keycloak management interface over the admin section of Hub.

<Image src="/img/hub/access-keycloak-link.png" alt="Accessing Keycloak via Hub" width="1440" height="653" />

There you can perform all users or groups related tasks, such as
[creating new users](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-user_server_administration_guide),
[deleting users](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-deleting-user_server_administration_guide) or
[manage groups](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-managing-groups_server_administration_guide).

:::note
Subgroups are not supported at this time.
:::

## Connect External IAM {#connect-external-iam}

Alternatively to the in-house administration, you can also connect Keycloak to other identity and access management solutions (IAM) to keep your user management centralized.
You can either only synchronize existing users and groups from your IAM (using LDAP or Active Directory) or completely delegate the authentication process to your IAM via OpenID Connect or SAML.

Setting up LDAP synchronization is described in the [Keycloak documentation](https://www.keycloak.org/docs/latest/server_admin/#_ldap).
For OpenID Connect and SAML, the Keycloak documentation provides [general information](https://www.keycloak.org/docs/latest/server_admin/#_identity_broker).
A good step-by-step guide for connecting Microsoft Entra with OpenID Connect can be found [here](https://dev.to/andremoriya/keycloak-azure-active-directory-4cg4).

:::note
With `LDAP`, all users and groups are imported and synchronized with Keycloak, so they are available immediately after setup.
With `OpenID Connect` or `SAML`, users are unknown to Keycloak and Hub *until they log in for the first time*.
:::

:::warning
Regardless of your choice, your Keycloak instance always contains two local users: `admin` and `syncer`. **Do not edit or delete them!** The first one is for administration tasks and the second one is used to synchronize users and groups between Keycloak and Hub.
:::

## Roles {#roles}

There are four different roles in Cryptomator Hub:

* **user**: A user can open vaults and manage their own account.
* **admin**: An admin manages the Keycloak realm, can see the audit log, and can create vaults.
* **create-vault**: Only users with this role can create vaults. The role is inherited by the `admin` role.

The `user`, `admin`, and `create-vault` roles are assigned to users or groups via the Keycloak admin console by an existing user with the `admin` role.

### Create Vault Role {#create-vault-role}

By default, this role is only assigned to the `admin` role. This means that only users with the `admin` role can create vaults. If you want to allow other users to create vaults, you can assign the `create-vault` role to them directly or via a group.

If you want that all users can create vaults, assigning the `create-vault` role as transient role to the `user` role. This way, every user will have the `create-vault` role as well.

To allow all users vault creation, assign `create-vault` as a transient role to the `user` role:

1. Open the Keycloak admin console.
2. Select `Realm roles`.
3. Select the `user` role.
4. Select `Assign role`.
5. Select the `create-vault` role.
6. Apply with `Assign`.
