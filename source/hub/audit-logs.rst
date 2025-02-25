.. _hub/audit-logs:

Audit Logs
==========

The Audit Logs provide an overview of security-related events within Cryptomator Hub.
These logs allow administrators to track important account and vault-related actions.

.. note::
    Audit Logs are not available with a Community License.

.. _hub/audit-logs/event-list:

Event Types
-----------

The following events are logged:

Device
^^^^^^
- **Register Device** – A device has been registered. :ref:`Read more <hub/access-vault/unlocking-a-vault/add-device>`
- **Remove Device** – A device has been removed.
WoT
^^^
- **Signed Identity** – A Web-of-Trust identity has been signed. :ref:`Read more <hub/vault-management/wot>`
- **Update Wot Setting** – A Web-of-Trust setting has been updated.
Vault
^^^^^
- **Add Vault Member** – A member has been added to a vault.  :ref:`Read more <hub/vault-management/add-user>`
- **Create Vault** – A vault has been created. :ref:`Read more <hub/vault-management/create-vault>`
- **Claim Vault Ownership** – Vault ownership has been claimed.
- **Grant Vault Access** – Access to a vault has been granted. :ref:`Read more <hub/vault-management/updating-permission>`
- **Retrieve Vault Key** – A vault key has been retrieved.
- **Remove Vault Member** – A member has been removed from a vault.
- **Update Vault Member** – A vault member’s role (owner VS user) have been updated. :ref:`Read more <hub/vault-management/change-ownership>`
- **Update Vault** – A vault has been updated. :ref:`Read more <hub/vault-management/edit-vault-metadata>`
Account
^^^^^^^
- **Account Key Changed** – A user’s account key has been changed. :ref:`Read more <hub/your-account/profile/regenerate-account-key>`
- **Reset User Account** – A user account has been reset.  :ref:`Read more <hub/your-account/reset-account>`
- **User Keys Change** – User keys have been changed. :ref:`Read more <hub/your-account/account-key>`

.. _hub/audit-logs/table-view:

Audit Log Table View
--------------------

The logs are displayed in a structured table containing the following columns:

- **Timestamp** – The exact time of the event.
- **Event** – The type of event that occurred.
- **Details** – Additional information about the event.

.. image:: ../img/hub/auditlogs-overview.png
    :alt: Audit Logs Table View

.. _hub/audit-logs/filters:

Filtering Audit Logs
--------------------

To refine the displayed logs, a filtering function is available:

.. image:: ../img/hub/auditlogs-filter.png
    :alt: Audit Log Filtering Options

- **Date Range Filter**: Allows filtering logs between two specific dates.
- **Event Type Filter**: A multi-select dropdown enables filtering by event type.

.. image:: ../img/hub/auditlogs-filter-events.png
    :alt: Audit Log Filtering Options
