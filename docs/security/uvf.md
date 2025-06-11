---
id: uvf
title: Vault Cryptography with Universal Vault Format
sidebar_position: 7
---

# Vault Cryptography with Universal Vault Format

In the mid-term, we want to support key rotation. After key rotation, new data will be encrypted with new keys. This will allow to retract access from vault members, cryptographically ensuring they can never decrypt new data.

[Unified Vault Format (UVF)](https://github.com/encryption-alliance/unified-vault-format) defines a common vendor-independent standard. It is close to [Vault Format 8](/docs/misc/vault-format-history.md), and will allow to support key rotation in the future.
Key rotation is not implemented yet, though.
Users will need to decide at vault creation time whether to use the new format.

:::warning
New vaults will be created in the new UVF format. There is no automatic migration plan for Vault Format 8 and below as data needs to be re-encrypted. Users will need to create a new vault (in the new UVF format) and to upload the data again. Clients and Hub will be backwards-compatible.
:::

## Key Rotation {#key-rotation}

If a member (assume it's Bob) is removed from a vault, we need to replace the existing keys.
Theoretically, we could re-encrypt the whole data. However, this is time- and resource-consuming (I/O). And Bob may have made a backup copy of the data anyway.
Therefore, key rotation aims at encrypting new data - Bob must not be able to decrypt the new data with his old key, even if he still has access to the new ciphertext.

The UVF metadata file replaces the masterkey file (or the user-specific JWE containing the masterkey introduced in Cryptomator Hub [1.3.0](https://github.com/cryptomator/hub/releases/tag/1.3.0)). It can contain many key generations - only the latest generation is used for data encryption. The older generations are used to read the older data encrypted with previous generation keys.

Here's an example of the UVF metadata payload with different key generations in the `seeds` field and the `latestFileKey` pointing to the current key:

```json
{
    "fileFormat": "AES-256-GCM-32k",
    "nameFormat": "AES-256-SIV",
    "seeds": {
        "HDm38i": "ypeBEsobvcr6wjGzmiPcTaeG7/gUfE5yuYB3ha/uSLs=",
        "gBryKw": "PiPoFgA5WUoziU9lZOGxNIu9egCI1CxKy3PurtWcAJ0=",
        "QBsJFo": "Ln0sA6lQeuJl7PW1NWiFpTOTogKdJBOUmXJloaJa78Y="
    },
    "latestFileKey": "QBsJFo",
    "nameKey": "HDm38i",
    "kdf": "HKDF-SHA512",
    "kdfSalt": "NIlr89R7FhochyP4yuXZmDqCnQ0dBB3UZ2D+6oiIjr8=",
    "org.example.customfield": 42
}
```

When a new generation of keys is added to the metadata file, it must be re-encrypted as well. Bob, with his old key, must not be able to decrypt data encrypted later.

Furthermore, for technical reasons (which will become clear below), the above payload needs to be shared with several `recipients`. More precisely, we use different Key Encapsulation methods to encrypt the payload for multiple recipients (a `recipient` being identified by their key ID `kid`). This is done in two steps:

- The payload is encrypted only once with the same (shared) Content Encryption Key (CEK). The encrypted payload is stored in the `ciphertext` field of the encrypted metadata file.
- The CEK is then encrypted specifically for each recipient with their key and method, and the resulting encrypted key is stored in the `encrypted_key` field of the encrypted metadata file.

Here's an example of an (encrypted) metadata file (JWE in JSON serialization, see [RFC 7516](https://www.rfc-editor.org/rfc/rfc7516.html)) with two recipients (`org.cryptomator.hub.memberkey` and `org.cryptomator.hub.recoverykey`):

```json
{
  "protected": "eyJlbmMiOiJBMjU2R0NNIiwiamt1IjogImZvby9iYXIva2V5cy5qd2tzIn0",
  "recipients": [
    {
      "header": {
        "alg": "A256KW",
        "kid": "org.cryptomator.hub.memberkey"
      },
      "encrypted_key": "6KB707dM9YTIgHtLvtgWQ8mKwboJW3of9locizkDTHzBC2IlrT1oOQ"
    },
    {
      "header": {
        "alg": "ECDH-ES+A256KW",
        "kid": "org.cryptomator.hub.recoverykey.{keyhash}",
        "epk": {
          "kty": "EC",
          "crv": "P-384",
          "x": "z7S-cEoCC0J0H42jocPnEgMr8pr0wyIZgaMvzu4We8B_nQkF1zpYSGZRcD9wI3hA",
          "y": "PlaiCkoGadNfVFi2ju-Dr19CewL-kjvXI8ibFOWaKizPh5gWjm9BFvx9Ox41Ka8x"
        }
      },
      "encrypted_key": "6KB707dM9YTIgHtLvtgWQ8mKwboJW3of9locizkDTHzBC2IlrT1oOQ"
    }
  ],
  "iv": "48V1_ALb6US04U3b",
  "ciphertext": "5eym8TW_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX_EFShS8iB7j6jiSdiwkIr3ajwQzaBtQD_A",
  "tag": "XFBoMYUZodetZdvTiFvSkQ"
}
```

The `tag` field contains the [MAC](https://en.wikipedia.org/wiki/Message_authentication_code) which allows to verify message authentication and integrity checking, i.e. verify that the message can only come from someone having access to the CEK and that the message has not been tampered with. Note that the recipient headers are authenticated as well.

<WhiteBox>
  <Image src="/img/security/uvf-key-rotation.drawio.png" alt="UVF Key Rotation" width="700" />
</WhiteBox>

## Vault Members {#vault-members}

All vault members share the same vault member key to access the vault metadata.

The shared vault member key is a 256-bit AES Key. It is used for AES Key Wrap (`"alg": "A256KW"`) to encrypt/decrypt the metadata CEK.
The wrapped CEK is stored as `encrypted_key` for the `org.cryptomator.hub.memberkey` recipient.

The vault member key in turn is stored for each user separately in the Hub in the form of a JWE encrypted with the user's public user key.
Upon key rotation, the JWE for each user needs to be updated by using the public user key of each vault member.

## Recovery Key {#recovery-key}

Recovery keys are supposed to be long-living (print out human-readable and store offline) and should not be known by every vault member (only members with access to the private recovery key).

In the key rotation setting, symmetric keys cannot be used for recovery key encryption.
Not only vault members with access to the recovery key, but any vault member must be able to carry out key rotation.
However, in symmetric cryptography, the same key is used for encryption and decryption.
Key rotation must be carried out by a vault member as only vault members must know the metadata containing the CEK generations so far.

Vault members may also be notified by an external event (e.g. person leaving an organization), share the new metadata after key rotation with a restricted member set only.

Therefore, we use an ECDH key pair for each `org.cryptomator.hub.recoverykey.{keyhash}` recipient. Here's an example of such a key pair:

```json
{
  "kty": "EC",
  "crv": "P-384",
  "d": "cMyQpw7YIGjop48z1fh9fekbjwVvCThhC0Owumzv_hTHkljBAG8bnMUSbts55Vy6",
  "x": "BzMNrgLiKSi9-gJ944_u7YgdXk5UfzGzSFlbDmuQS49LgVc8JpMAm1rAYhrLV9zi",
  "y": "X9rATILnkQNx33tIjVwkgVZj1E7r69ZN1K4QHvhjO3tgoBGiIbvf2D14CaFPnvM9"
}
```

The private key is the part that can be printed out at vault creation time.
That's the `d` parameter above, which is a short bit of information that can be easily encoded in a human-readable way.
All the other parts form the public key.
During key rotation, only the public key needs to be known.
The public key is used to encrypt the new CEK, and the recipient in the metadata is updated with the new `encrypted_key`.
The public key can be retrieved from the hub for key rotation with the vault's ID.

The API returns a JWK Set, containing the public key for the vault recovery key `org.cryptomator.hub.recoverykey.{keyhash}`
(currently, the JWK set will only contain the vault recovery key, but could be used for further keys in the future):

```json
{
    "keys": [
        {
            "kid": "org.cryptomator.hub.recoverykey.{keyhash}",
            "kty": "EC",
            "crv": "P-384",
            "x": "BzMNrgLiKSi9-gJ944_u7YgdXk5UfzGzSFlbDmuQS49LgVc8JpMAm1rAYhrLV9zi",
            "y": "X9rATILnkQNx33tIjVwkgVZj1E7r69ZN1K4QHvhjO3tgoBGiIbvf2D14CaFPnvM9",
            "use": "enc",
            "key_ops": ["deriveKey"]
        }
    ]
}
```

The following rules need to be respected upon encrypting the CEK for vault recovery key:

| Verify | Protection Against |
|--------|-------------------|
| relative URL | implantation of untrusted URLs |
| JWE signature | JWE manipulation |
| public key hash | implantation of new public key at server side |

Only URLs relative to the trusted hub must be followed, absolute URLs must not be followed in order not to retrieve the public recovery key from an untrusted source.
JWE signature verification makes sure the JWE comes from someone having access to the CEK, i.e. from a vault member (having access to CEK via member key or recoverykey).
A technical admin of the managed server cannot implant public keys at the server side unnoticed without being a vault member, as the keyhash is authenticated by the `tag` as well.

:::warning
Vault owners must be careful not to share vaults with technical hub admins.
Only a technical hub admin who is also a Vault Member, could sneak in a new recovery key pair (and thereby gain access to future data).
A technical hub admin of the managed server who is not Vault Member cannot perform this forgery.
This ensures Zero Knowledge for Managed Servers.
:::

:::warning
A malicious technical hub admin could still do some sort of "phishing" attack by "emptying" the vault, i.e. uploading a new member key (or also recoverykey).
Vault members not paying attention could upload files and the malicious technical hub admin would then have access to the new data.
This kind of attack would be noticed only if there is data in the storage for which the seeds have been removed from the metadata file or if a vault owner cannot use their locally stored recovery key any more.
:::

## Look Ahead: Key Rotation {#look-ahead-key-rotation}

Although actual rotation of keys is not implemented yet, we give a sketch of the future implementation.
To ensure Zero Knowledge, key rotation is not performed in the server, but on a vault member's machine in the client code.
Only the encrypted data is then uploaded to the hub.
Even a technical admin with access to the DB cannot gain access to the key material and, therefore, not decrypt the data even with access to the cloud storage.

Key rotation will comprise the following steps:

1. Get mutex for vault key rotation from hub (avoid concurrent key rotation for the same vault, lock at server)
2. Generate new member key
3. Encrypt new member key for all members with their public user key and update their vault access token
4. Generate new CEK
5. Generate new seed for data encryption and add to `seeds` of new metadata payload
6. Encrypt payload with CEK for `ciphertext` of new metadata JWE
7. Encrypt CEK with new member key and public recovery key into corresponding `encrypted_key` new metadata JWE
8. Upload new metadata JWE
9. Return mutex for vault key rotation to hub

## File Header Encryption {#file-header-encryption}

:::warning
TODO: Differences to Vault8?
:::

## File Content Encryption {#file-content-encryption}

:::warning
TODO: Differences to Vault8?
:::

## Directory IDs {#directory-ids}

:::warning
TODO: Differences to Vault8?
:::

## Filename Encryption {#filename-encryption}

:::warning
TODO: Differences to Vault8?
:::

## Name Shortening {#name-shortening}

:::warning
TODO: Differences to Vault8?
:::

## Backup Directory IDs {#backup-directory-ids}

:::warning
TODO: Differences to Vault8?
:::
