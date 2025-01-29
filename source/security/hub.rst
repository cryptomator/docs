Cryptomator Hub
=====================

Cryptomator Hub facilitates asymmetric encryption to allow sharing the key material used in Cryptomator vaults between multiple parties. 

.. _security/hub/keys:

Key Types
---------

Cryptomator Hub facilitates different keys types. Here is an overview of these types and how they are interconnected:

.. _security/hub/keys/user-keys:

User Key Pair
~~~~~~~~~~~~~

During first login, every user will generate a new EC key pair. The private key is then encrypted using both the :ref:`Account Key <security/hub/keys/account-key>`
as well as the :ref:`Device Key <security/hub/keys/device-keys>` of every single device owned by this user.

The purpose of the user key is to access secrets that have been shared with this user using `ECDH-ES-encrypted JWEs <https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.6>`_, most prominently the masterkey of shared vaults.

If users wish to rotate their keys, e.g. when a device may be compromised, they can simply re-roll the key pair, re-encrypt secrets that they whish to keep access to and delete the old key pair.

.. _security/hub/keys/device-keys:

Device Key Pair
~~~~~~~~~~~~~~~

Every device requires a key pair, which is generated on first use. The private key is securely stored on-device and not intended to ever leave it. For example,
on web browsers the private key is `non-extractable <https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey#extractable>`_ and stored in the browser's IndexedDB.

.. note::

    A *device* is any client that interacts with Cryptomator Hub on behalf of a user. This definition includes the web browser used to access the Hub
    web interface as well as the mobile app on a user's smartphone. On multi-user systems, every user is expected to have a separate user account, in
    which case we're talking about multiple devices with distinct key pairs, even if they share the same hardware.

The sole purpose of the device key is to decrypt the :ref:`User Key <security/hub/keys/user-keys>`, which is stored in a device-specific `ECDH-ES-encrypted JWE <https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.6>`_.

Users can invalidate devices by simply deleting the device-specific JWE and rotating their user key.

.. _security/hub/keys/account-key:

Account Key
~~~~~~~~~~~

When users attempt to access their account from a new device, there is no device-specific JWE yet. Instead they can then use the Account Key to decrypt
the :ref:`User Key <security/hub/keys/user-keys>`. The Account Key acts as a password to derive a key for a `PBES2-encrypted JWE <https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.8>`_.

.. warning::
    The Account Key needs to be kept secret, as it is the only user-facing secret that allows anyone knowing it to authorize as the corresponding user.

    When an Account Key is suspected of being compromised, it can and should be re-generated from the user's profile page, which will immediately invalidate any circulating copies.

.. note::

    The Account Key itself is stored as an `ECDH-ES-encrypted JWE <https://datatracker.ietf.org/doc/html/rfc7518.html#section-4.6>`_, allowing its owner to
    view it from any authorized device. Regardless it should be securely stored independently.


.. _security/hub/wot:

Web of Trust
------------

The Web of Trust (WoT) feature in Cryptomator Hub helps users verify each other's identity by signing using ECDSA the :ref:`User Key Pair <security/hub/keys/user-keys>` with their private keys.
First the trusting user needs to verify the trustee by entering the first characters of the trustee's public key fingerprint. Once signed, the proof is uploaded to Hub, where others can check its authenticity e.g. during vault sharing.

WoT also supports transitive trust, meaning if alice trusts bob, and bob trusts charlie, then alice implicitly trusts charlie. This forms a trust chain, allowing users to establish indirect trust relationships.

The maximum depth of such chains can be configured using the ``wot_max_depth`` property, which limits how far trust can extend within Hub:

* The default value is 3 ("Great-Grandchild")
* The maximum value is 9
* The minimum value, 0, means no trust chain is allowed, only direct trust relationships are considered

With the ``wot_id_verify_len`` property, the minimum length of to be entered public key fingerprint can be configured:

* The default value is 2
* The minimum value, 0, means the fingerprint of the trustee is fully shown wihtout any input needed

.. note::

    If a user resets their account, their User Key Pair is regenerated, invalidating all previously established trust relationships regarding this user. As a result, the user must be re-verified by everyone who previously trusted them.
    Additionally, any existing trust chains that included the user will be broken, requiring re-verification to restore trust and re-establish transitive trust relationships.

