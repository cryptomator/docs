---
id: hub
title: Cryptomator Hub
sidebar_position: 3
---

# Cryptomator Hub

Cryptomator Hub facilitates asymmetric encryption to allow sharing the key material used in Cryptomator vaults between multiple parties. 

## Key Types {#key-types}

Cryptomator Hub facilitates different keys types. Here is an overview of these types and how they are interconnected:

### User Key Pair {#user-key-pair}

During first login, every user will generate a new EC key pair. The private key is then encrypted using both the [Account Key](#account-key) as well as the [Device Key](#device-key-pair) of every single device owned by this user.

The purpose of the user key is to access secrets that have been shared with this user using [ECDH-ES-encrypted JWEs](https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.6), most prominently the masterkey of shared vaults.

If users wish to rotate their keys, e.g. when a device may be compromised, they can simply re-roll the key pair, re-encrypt secrets that they whish to keep access to and delete the old key pair.

### Device Key Pair {#device-key-pair}

Every device requires a key pair, which is generated on first use. The private key is securely stored on-device and not intended to ever leave it. For example,
on web browsers the private key is [non-extractable](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey#extractable) and stored in the browser's IndexedDB.

:::note
A *device* is any client that interacts with Cryptomator Hub on behalf of a user. This definition includes the web browser used to access the Hub
web interface as well as the mobile app on a user's smartphone. On multi-user systems, every user is expected to have a separate user account, in
which case we're talking about multiple devices with distinct key pairs, even if they share the same hardware.
:::

The sole purpose of the device key is to decrypt the [User Key](#user-key-pair), which is stored in a device-specific [ECDH-ES-encrypted JWE](https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.6).

Users can invalidate devices by simply deleting the device-specific JWE and rotating their user key.

### Account Key {#account-key}

When users attempt to access their account from a new device, there is no device-specific JWE yet. Instead they can then use the Account Key to decrypt the [User Key](#user-key-pair). The Account Key acts as a password to derive a key for a [PBES2-encrypted JWE](https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.8).

:::warning
The Account Key needs to be kept secret, as it is the only user-facing secret that allows anyone knowing it to authorize as the corresponding user.

When an Account Key is suspected of being compromised, it can and should be re-generated from the user's profile page, which will immediately invalidate any circulating copies.
:::

:::note
The Account Key itself is stored as an [ECDH-ES-encrypted JWE](https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.6), allowing its owner to
view it from any authorized device. Regardless it should be securely stored independently.
:::

## Unlock Procedure {#unlock-procedure}

Vault keys are shared with users via their [User Key Pairs](#user-key-pair). Each user self-manages their devices. The [Device Key Pair](#device-key-pair) is required to decrypt the user's private key, which in turn decrypts the vault access token.

<WhiteBox>
  <Image src="/img/hub/unlock-procedure.drawio.png" alt="Hub Unlock Procedure" width="1102" />
</WhiteBox>

### Unlock Flow {#unlock-flow}

The unlock procedure consists of two distinct steps that establish a key hierarchy between devices, users, and vaults:

1. The client requests the vault access token from `/api/vaults/{vaultId}/access-token`. The server returns a JWE containing the vault's raw masterkey encrypted with the [User Public Key](#user-key-pair).
2. The client requests its device-specific JWE from `/api/devices/{deviceId}`. This JWE contains the [User Private Key](#user-key-pair) encrypted with the [Device Public Key](#device-key-pair). The device uses its locally stored private key to decrypt this JWE, obtaining the user's private key, which is then used to decrypt the vault-specific JWE from step 1.

This creates a cryptographic chain: Device Private Key → User Private Key → Vault Key. The intermediary user key layer allows vault keys to be encrypted once per user rather than once per device. When users add new devices, only a new device-specific JWE of the user key needs to be created, eliminating the need to re-encrypt all vault keys.

### Access States {#access-states}

When retrieving the vault access token from `/api/vaults/{vaultId}/access-token`:

* `200 OK`: Successful retrieval of encrypted vault key
* `402 Payment Required`: License needs upgrade
* `403 Forbidden`: User lacks permission to access the vault
* `410 Gone`: Vault has been archived
* `449 Retry With`: User account exists but hasn't been properly initialized (missing key pair)

When retrieving the user's encrypted private key from `/api/devices/{deviceId}`:

* `200 OK`: Device is registered and authorized
* `404 Not Found`: Device needs to be set up

We still keep the legacy API endpoint `/api/vaults/{vaultId}/keys/{deviceId}` for compatibility reasons for a while. However, it will only work for existing data. Any newly registered device can only be unlocked using the new workflow.
