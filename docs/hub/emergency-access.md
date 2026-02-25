---
id: emergency-access
title: Emergency Access
sidebar_position: 9
---

# Emergency Access

:::info Early Access
This feature is currently in **early access** and will be fully available in an upcoming release.
:::

:::info Enterprise Feature
Visit [cryptomator.org](https://cryptomator.org/hub/) for more information about Enterprise features.
:::

Emergency Access allows a defined council to restore access to a vault using key splitting based on **Shamir's Secret Sharing**. A process can only be completed once enough council members approve it.

## Define Emergency Access During Vault Creation

When creating a new vault, there is a dedicated step called `Define Emergency Access Conditions`. For the full vault creation workflow, see [Vault Management](vault-management.md#create-a-vault).

## Define Emergency Access for Existing Vaults

For existing vaults, Emergency Access can be configured or updated in `Vault Details`. See [Setup/Fix Emergency Access Council](vault-management.md#emergency-access-council).

## Start a Recovery Process

There are two process types:

1. `Change Permissions`: Change vault owners/members
2. `Change Council`: Change Emergency Access council and threshold

Open the `Emergency Access` page, select the vault, and start the desired process type.

<Image src="/img/hub/emergency_access_vault_list.png" alt="Emergency Access Vault List" width="2560" height="1080" />

Only one running process per type is allowed for a vault.

### Change Permissions

When starting `Change Permissions`, you select:

* future `Owners`
* future `Members`

Users that are no longer part of the selected set are shown as `Removed`.

<Image src="/img/hub/emergency_access_change_permissions_start.png" alt="Emergency Access Vault List" width="2560" height="1080" />


### Change Council

When starting `Change Council`, you select:

* the new council members that should hold emergency key shares

The required keys are defined by the configuration in the [Admin settings](admin.md#emergency-access).

<Image src="/img/hub/emergency_access_change_council_start.png" alt="Emergency Access Vault List" width="2560" height="1080" />

:::note
When starting a process, the initiating user usually adds the first key share automatically.
:::

## Approve a Recovery Process

In the `Emergency Access` vault list, a running process shows a split process button.
If a council member has not yet added their share, the right side of the button shows `Approve now`.

<Image src="/img/hub/emergency_access_vault_list_change_council_approve_now.png" alt="Emergency Access Vault List Approve Now" width="2560" height="1080" />

Hover (or click) the **left side** of the process button (the segment ring area) to open the process details popover.
This popover shows:

* process type and required key shares
* current progress
* process council members
* per-member status (`Added` / `Pending`)

<Image src="/img/hub/emergency_access_vault_list_hover_process.png" alt="Emergency Access Vault List Hover Process" width="2560" height="1080" />

To approve, click the **right side** of the process button (`Approve now`) to open the `Approve Emergency Access` dialog.
In this dialog, review the process details and click `Approve` to submit your key share.

<Image src="/img/hub/emergency_access_vault_list_change_council_approve_dialog.png" alt="Emergency Access Vault List Approve Dialog" width="2560" height="1080" />

After submitting your share, the button shows `Waiting for other approvals`. You can track the ongoing process progress in the same process button and its details popover.

## Complete a Recovery Process

As soon as enough shares are available, the process button in the `Emergency Access` vault list shows `Complete now`.

<Image src="/img/hub/emergency_access_vault_list_change_council_complete_now.png" alt="Emergency Access Vault List Complete Now" width="2560" height="1080" />

Click `Complete now` to open the `Complete Emergency Access` dialog. In this dialog, review the process details and click `Complete Process` to finalize the recovery process.

<Image src="/img/hub/emergency_access_vault_list_change_council_complete_dialog.png" alt="Emergency Access Vault List Complete Dialog" width="2560" height="1080" />

Results by type:

* `Change Permissions`: Vault roles are updated and required access grants are redistributed
* `Change Council`: The recovery key is re-split using the new council configuration

After successful completion, the process is removed.

## Abort a Recovery Process

Running processes can be canceled in the dialog using `Abort this Process`.

<Image src="/img/hub/emergency_access_vault_list_change_council_abort_dialog.png" alt="Emergency Access Vault List Abort Dialog" width="2560" height="1080" />


## Typical States and Notes

The following warning states can appear in the Emergency Access list:

* `No Vault Council Member anymore`: The user is still part of a running process but no longer part of the current vault council
* `Broken Emergency Access`: Too few valid shares remain (for example after council members reset their accounts)
* `No Redundancy`: No fault tolerance in the council

## Audit Log Events

See [Emergency Access Audit Log events](admin.md#event-type-emergency-access).
