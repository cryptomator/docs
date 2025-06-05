---
id: admin
title: Admin
sidebar_position: 8
---

# Admin

## License {#license}

Every Cryptomator Hub instance requires a license.
The license is bound to the instance and cannot be transferred to another instance.
Every license has a number of seats and a validity period.
As an Hub administrator, you can view license information in the administration area.

<Image src="/img/hub/admin-area-license.png" alt="Administration area" width="1440" height="574" />

### What Is a Seat? {#what-is-a-seat}

A regular license contains a fixed number of *seats*.
A *seat* is taken for every user, which is assigned to at least one, not-archived vault.
Note that:

* If a user is not assigned to any vault, it *does not occupy* a seat.
* If a user is assigned to multiple vaults, it only *occupies one* seat.
* If [a user is created or imported to Hub](user-group-management.md), it does not occupy a seat.

:::note
Enterprise licenses can have an unlimited number of seats. Visit [cryptomator.org](https://cryptomator.org/for-teams/) for more information.
:::

### Community License {#community-license}

When you deploy Cryptomator Hub by yourself, it comes with a community license with life-long validity and 5 seats.

### Updating Your License {#updating-your-license}

If the community license is not sufficient for your needs, you can upgrade it to a paid license.
You can also upgrade an already existing, paid license.
To do so, click on the button in the lower right corner of the administration area.
It will redirect you to the Cryptomator Hub license store.
After the purchase, you will be automatically redirected back to your Hub instance.

## Audit Logs {#audit-logs}

The Audit Logs provide an overview of security-related events within Cryptomator Hub.
These logs allow administrators to track important account and vault-related actions.

:::note
Audit Logs are not available with a Community License.
:::

### Event Types {#event-types}

The following events are logged:

#### Device {#event-type-device}

- **Register Device** - A user [registered a new device](access-vault.md#register-device). This can be, e.g., a Cryptomator app (desktop/mobile) to unlock a vault or a web browser to access Cryptomator Hub.
- **Remove Device** – A user [removed a device](your-account.md#authorized-devices).

#### Web of Trust {#event-type-web-of-trust}

- **Signed Identity** – A user [signed the identity of another user](vault-management.md#web-of-trust).
- **Update Wot Setting** – A user updated [Web-of-Trust settings](vault-management.md#web-of-trust), e.g., the `wot_max_depth`.

#### Vault {#event-type-vault}

- **Add Vault Member** – A vault owner [added a member to a vault](vault-management.md#share-a-vault). This only adds the member but does not derive the vault key for the new member.
- **Create Vault** – A user [created a vault](vault-management.md#create-a-vault).
- **Grant Vault Access** – A user [derived the vault key for the new member](vault-management.md#update-permissions).
- **Retrieve Vault Key** – A user retrieved a vault key. This happens when a user [unlocks a vault](access-vault.md#unlocking-a-vault) but also, e.g., when an owner manages the vault. The IP address and device information are optional for legacy reasons.
- **Remove Vault Member** – A vault owner removed a member from a vault.
- **Update Vault Member** – A vault owner [changed a member's role](vault-management.md#change-ownership) (owner or user).
- **Update Vault** – A vault owner [updated the vault metadata](vault-management.md#edit-vault-metadata). This includes the vault name or description.

#### Account {#event-type-account}

- **Account Key Changed** – A user [re-generated the account key](your-account.md#regenerate-account-key). This also logs `User Keys Change` because changing the account key also changes parts of the user keys.
- **Reset User Account** – A user [reset their account](your-account.md#reset-account).
- **User Keys Change** – A user changed their keys. This happens when, e.g., the user [finished the account setup](your-account.md#account-setup) or when the `Account Key Changed`.

#### Legacy {#event-type-legacy}

- **Claim Vault Ownership** – A user claimed vault ownership. This event is logged when a vault created with hub pre 1.3.0 is claimed by the vault creator using the `Vault Admin Password`.

### Audit Log Table View {#audit-log-table-view}

The logs are displayed in a structured table containing the following columns:

- **Timestamp** – The exact time of the event.
- **Event** – The type of event that occurred.
- **Details** – Additional information about the event.

<Image src="/img/hub/auditlogs-overview.png" alt="Audit Logs Table View" width="1238" height="858" />

### Filtering Audit Logs {#filtering-audit-logs}

To refine the displayed logs, a filtering function is available:

<Image src="/img/hub/auditlogs-filter.png" alt="Audit Log Filtering Options" width="406" height="360" />

- **Date Range Filter**: Allows filtering logs between two specific dates.
- **Event Type Filter**: A multi-select dropdown enables filtering by event type.

<Image src="/img/hub/auditlogs-filter-events.png" alt="Audit Log Filtering Options" width="406" height="553" />

## Web of Trust {#web-of-trust}

The Web of Trust (WoT) feature in Cryptomator Hub helps users verify each other's identity by signing the [User Key Pair](/docs/security/hub.md#user-key-pair) with their private keys using ECDSA.
First, the trusting user needs to verify the trustee by entering the first characters of the trustee's public key fingerprint. Once signed, the proof is uploaded to Hub, where others can check its authenticity.

WoT also supports transitive trust, meaning if Alice trusts Bob, and Bob trusts Charlie, then Alice implicitly trusts Charlie. This forms a trust chain, allowing users to establish indirect trust relationships.

<Image src="/img/hub/wot-admin.png" alt="Web of Trust Administration" width="1440" height="658" />

**In the administration area, administrators can configure the following trust settings:**

The maximum depth of such chains can be configured using the **Maximum WoT Depth** property:

* The default value is 3 ("Great-Grandchild")
* The maximum value is 9
* The minimum value, 0, means no trust chain is allowed, only direct trust relationships are considered.

With the **Fingerprint Verification Preciseness** property, the minimum length of the entered public key fingerprint can be configured:

* The default value is 2
* The minimum value, 0, means the fingerprint of the trustee is fully shown without any input needed.

:::note
If a user resets their account, their [User Key Pair](/docs/security/hub.md#user-key-pair) is regenerated, invalidating all previously established trust relationships regarding this user.  
Additionally, any existing trust chains that included the user will be broken, requiring re-verification to restore trust.
:::
