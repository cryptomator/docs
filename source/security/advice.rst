Advice
======

TODO.

.. _security/advice/security-target:

Security Target
---------------

Cryptomator was designed to solve privacy issues when saving files to cloud storages.

The risk that the cloud provider or third parties access the data stored in the cloud without permission is mitigated.
Only people who know the vault password are able to read the files in the vault or change the file contents undetected.
This is true for file contents as well as for filenames.

To allow a working synchronization with the cloud, there are some meta information that Cryptomator does not encrypt.
These are:

* access, modification, and creation timestamp of files and folders,
* number of files and folders in a vault and in the folders, and
* size of the stored files.

In addition, you have to keep in mind what Cryptomator is not.
Protection of the files on the local computer is not the focus of Cryptomator.
Cryptomator is not a complete replacement for other encryption tools based on container files if the aforementioned meta information should be encrypted.
Cryptomator does not provide protection if programs create backup copies of the encrypted files when working with them.
Such files are not detected by Cryptomator and may remain on the computer even after unlocking a vault.
Cryptomator cannot provide protection if the local computer is infected with malware which reads entered passwords and file contents (e.g., files in an unlocked vault).

To protect against such risks, other methods, like complete disk encryption, immediate installation of system and software updates, and the use of applicable antivirus software, is required.


.. _security/advice/sharing-of-vaults:

Sharing of Vaults
-----------------

Always be careful when sharing your vault with other people.

In general, keep your vault password secret.
Nobody except youself should know the vault password.
Only when you use a vault together with other people, they may know your vault password.
Keep in mind that other people could pass on – with or without intent – the vault password.
Only share your vaults with people you trust.

If you share a vault with others, do not communicate the vault password on an insecure channel.
Tell the password in person, use encrypted email, or other similar secure means.


.. _security/advice/good-passwords:

Good Passwords
--------------

Bad passwords can be cracked easily when using computers.
Plenty of recommendations exist for secure passwords.
Some of these are:

* A password should not contain public or personal information like the name of your pet, date of birth, or username.
* A password should be long.
* A password should not be an existing word or a combination of few words. It should be a combination of characters or words that is as random as possible.
* For each purpose, a unique password without similarities to other passwords should be used.

If you fulfill these requirements, you quickly reach a point where remembering the passwords gets impossible.
Thus, we recommend to use a password manager to generate and store the passwords.
By doing so, you only have to remember a few or a single secure password.
Otherwise, we recommend to use at least 10 characters, ideally `use sentences instead of words <https://xkcd.com/936/>`_.
