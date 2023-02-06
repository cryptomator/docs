.. _hub/setup:

Setup
=====

Cryptomator Hub is a zero-knowledge key management solution that allows you to manage access to your vaults from a central component deployed on your own infrastructure.

Quickstart
----------

#. Decide, on which web addresses you want to deploy Hub and Keycloak (and set up DNS and TLS termination, if required)

#. Use the `Setup Wizard <https://cryptomator.org/hub/setup/>`_ to generate a deployment descriptor template

#. Customize the template if needed (e.g., adjust the Ingress settings) and deploy the software stack to your cluster

#. Log in to Keycloak to

   * adjust authentication settings
   * set up users/groups or LDAP/AD

#. Log in to Cryptomator Hub and start creating Hub-managed vaults

More Details
------------

To get started, use the `Setup Wizard <https://cryptomator.org/hub/setup/>`_ to generate the necessary configuration files.

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

.. _hub/setup/backup:

Backup
------------

Cryptomator Hub and Keycloak both write to the connected Postgres database. So the best and easiest way is to backup it cyclically using e.g. a Cron Job. Depending on your deployment, here is a sample command that you can run on the host system to backup the entire databases to a file using the Postgres container, which you than could import in a similar way:

.. code-block:: console

    Docker:
    docker exec -u postgres -it postgres /bin/bash -c /usr/local/bin/pg_dumpall \ 
        > "$(date +%F)-hub-backup"
    
    Kubernetes:
    kubectl exec -it deployments/postgres -n NAMESPACE \
        -- /usr/local/bin/pg_dumpall -U postgres > "$(date +%F)-hub-backup"

See https://www.postgresql.org/docs/current/app-pg-dumpall.html for more information on the `pg_dumpall` command.
The command will create a file on the host with a name like "2023-02-06-hub-backup".

Besides `pg_dumpall` Postgres offers with `psql -f PATH_TO_FILE` a command to restore the database from this file and a new system is completely at the state of this file.

If you also back up the deployment script, you can restore the entire solution to production in minutes.

.. note::

    Make sure this backup is moved to another secure location.
