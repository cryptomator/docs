.. _hub/deployment:

Deployment
==========

Cryptomator Hub can be deployed to a Kubernetes cluster or a Docker host. The following sections describe the deployment process in detail.

.. note::

    Cryptomator Hub is also offered as a hosted solution, including 99.5%-uptime guarantee and regular backups! Visit https://cryptomator.org/hub/ for more information.

Summary
-------

#. Decide, on which web addresses you want to deploy Hub and Keycloak
#. Set up DNS and TLS termination
#. Use the `Setup Wizard <https://cryptomator.org/hub/setup/>`_ to generate a deployment descriptor template
#. Customize the template if needed (e.g., adjust the Ingress settings) and deploy the software stack to your cluster

Afterwards you're done.
You can now login to Cryptomator Hub and start :ref:`creating vaults<hub/vault-management>` or :ref:`add users <hub/user-group-management>`.

.. _hub/deployment/requirements:

Hardware Requirements
---------------------

Currently, we are evaluating the system requirements for Cryptomator Hub. If you can provide data, please send us an email to hub@cryptomator.org.

Setup Wizard
------------

To get started, use the `Setup Wizard <https://cryptomator.org/hub/setup/>`_ to generate the necessary configuration files.

Cryptomator Hub depends on `Keycloak <https://www.keycloak.org/>`_, an open-source identity and access management solution.
In the Setup Wizard, you will have the option to choose between deploying Keycloak alongside Hub or specifying an URL to an existing Keycloak installation.

Reverse Proxy
-------------

Cryptomator Hub must be used behind a reverse proxy such as Traefik or Nginx. In the `Setup Wizard <https://cryptomator.org/hub/setup/>`_ you can already add rules for some reverse proxies like Traefik. As mentioned there, you will still need a running Traefik deployment.

If you don't have a running Traefik deployment and want to use Docker Compose to run Hub, you can use the following as starting point:

.. code-block::

    networks:
      srv:
        name: srv

    services:
      traefik:
        image: traefik:v2.9
        command:
          # Provider
          - '--providers.docker'
          - '--providers.docker.exposedbydefault=false'
          - '--providers.docker.network=srv'
          # Entrypoints
          - '--entrypoints.web.address=:80'
          - '--entrypoints.web.http.redirections.entrypoint.to=websecure'
          - '--entrypoints.websecure.address=:443'
          # Let's Encrypt
          - '--certificatesresolvers.myresolver.acme.email=TODO' # TODO change
          - '--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web'
          - '--certificatesresolvers.myresolver.acme.httpchallenge=true'
          - '--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json'
          # Uncomment to use staging for testing
          # - '--certificatesresolvers.myresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory'
          - '--entrypoints.websecure.http.tls.certresolver=myresolver'
          # Logs
          - '--accesslog.filepath=/logs/access.log'
          - '--accesslog.format=json'
          - '--log.filepath=/logs/traefik.log'
          - '--log.format=json'
          - '--log.level=ERROR'
          # Misc
          - '--api.dashboard=false'
          - '--global.checknewversion=false'
          - '--global.sendanonymoususage=false'
          - '--ping'
        ports:
          - '80:80'
          - '443:443'
        networks:
          - 'srv'
        restart: always
        healthcheck:
          test: ['CMD', 'traefik', 'healthcheck', '--ping']
          interval: 10s
          timeout: 10s
          retries: 5
        volumes:
          - '/var/run/docker.sock:/var/run/docker.sock'
          - './logs:/logs'
          - './letsencrypt:/letsencrypt'
        labels:
          - 'traefik.enable=false'

Some remarks

#. There are a lot of other features of Traefik like Promeheus metrics generation, API frontend, ... but we wanted to keep the deployment as simple as possible
#. This deployment uses Let's encrypt in HTTP challenge mode to create and update a TLS certificate for Hub/Keycloak. There are other methods available such as DNS or TCP challenge, see https://doc.traefik.io/traefik/https/overview/ for more information
#. Make sure you add ``logs/access.log`` to your log rotation, otherwise this file can grow very quickly

Before running this deployment

#. You must set a valid email address in ``TODO``
#. You must have ports 80 and 443 open on the host machine
#. You need to create for Hub and optionally Keycloak DNS entries (``CNAME``, or ``A`` record) for the domain entered in the Setup Wizard of Hub
#. Create a Hub deployment using the `Setup Wizard <https://cryptomator.org/hub/setup/>`_ with ``include Traeffik`` selected and merge the content with this file:

  #. Copy the ``hub-internal: {}`` section of the Setup Wizard to this ``networks``
  #. Copy all services of the Setup Wizard under the ``services`` section to this ``services``
  #. Copy the ``volumes`` from the Setup Wizard to this file

Troubleshooting: If you encounter problems, check the log files in ``logs/traffik.log`` and ``logs/access.log``. Make sure you entered ``srv`` as ``Public Network`` in the Setup Wizard of Hub.


.. _hub/setup/backup:

Backup
------

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
