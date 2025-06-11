---
id: best-practices
title: Best Practices
sidebar_position: 5
---

# Best Practices

## Sharing of Vaults {#sharing-of-vaults}

When sharing your vault or working in a team, we strongly recommend using [Cryptomator Hub](https://cryptomator.org/for-teams/).
It adds access management for your vaults and allows you to unlock vaults with your own account.

Otherwise, always be careful when sharing your vault with other people.

In general, keep your vault password secret.
Nobody except yourself should know the vault password.
Sharing your vault password should be reserved for very limited personal scenarios (for example, with your spouse) and is generally not advised.
Keep in mind that other people could pass on – with or without intent – the vault password.
Only share your vaults with people you trust.

If you share a vault with others, do not communicate the vault password on an insecure channel.
Tell the password in person, use encrypted email or messengers or other similar secure means.

## Good Passwords {#good-passwords}

Bad passwords can be cracked easily when using computers.
Plenty of recommendations exist for secure passwords.
Some of these are:

* A password should not contain public or personal information like the name of your pet, date of birth, or username.
* A password should be long.
* A password should not be an existing word or a combination of few words. It should be a combination of characters or words that is as random as possible.
* For each purpose, a unique password without similarities to other passwords should be used.

If you fulfill these requirements, you quickly reach a point where remembering the passwords gets impossible.
Thus, we recommend using a password manager to generate and store the passwords.
By doing so, you only have to remember a few or a single secure password.
Otherwise, we recommend using at least 10 characters, ideally [use sentences instead of words](https://xkcd.com/936/).

### Keyboard Layouts and Special Characters {#keyboard-layouts-and-special-characters}

Be aware that keyboard layout differences can affect password entry. When creating a password, consider these important points:

* Use the same keyboard layout when entering your password. Characters may produce different results depending on your keyboard language setting.
* Some keyboard layouts use "dead keys" for accented characters. For example, pressing `'` followed by `e` might produce `é` instead of `'e`. This can cause unexpected character conversion in passwords.
* Characters like `'`, `"`, `` ` ``, `^`, and `~` may behave differently across keyboard layouts and can be particularly problematic.

To avoid issues:

* Test your password immediately after setting it by locking and unlocking your vault.
* Avoid special characters that may be affected by dead keys if you frequently switch between keyboard layouts.
* If you must use different keyboard layouts, document which layout was used when creating the password.
* Consider using alphanumeric characters and basic symbols that remain consistent across keyboard layouts.

## Backup Strategy {#backup-strategy}

Cryptomator is not a backup solution.
Its primary and only purpose is client-side encryption.

We strongly recommend maintaining your own backup strategy.
Even with unencrypted data, regular backups are essential.

Most cloud storage services offer some form of backup or file revision capabilities.
Evaluate if those available measures are sufficient for your needs or consider implementing additional backup systems.
