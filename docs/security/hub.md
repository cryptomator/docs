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
