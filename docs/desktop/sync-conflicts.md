---
id: sync-conflicts
title: Synchronization Conflicts
sidebar_position: 11
---

# Synchronization Conflicts

Working on encrypted data from multiple locations is the same as working on unencrypted data from multiple locations.
If there is a synchronization conflict, it is handled similarly to how most cloud storage services deal with conflicts.

When a sync conflict occurs, cloud storage services typically resolve the conflict by leaving the local file as it is and create an additional, conflicting file with the content from the cloud.
The file name is the same as the original one, suffixed with a short string (e.g., `(Created by Alice)`) to indicate it's a different version.

Cryptomator handles encrypted files in the same way.
It detects sync conflicts and appends the suffix from your cloud provider to the decrypted filename.
If the filename with the conflict suffix is too long, Cryptomator shortens the overall filename.
If the (decrypted) filename with the conflict suffix already exists, the conflicted file has a simple `(X)` suffix, where X is an integer.


| Situation                                   | Cloud Provider Suffix            | Original Decrypted Name                       | New Decrypted Name                                             |
|---------------------------------------------|----------------------------------|-----------------------------------------------|----------------------------------------------------------------|
| Regular                                     | (Created by Alice)               | businessPitch.odp                             | businessPitch (Created by Alice).odp                           |
| Preferred name already taken                | (Created by Alice)               | businessPitch.odp                             | businessPitch (1).odp                                          |
| Maximum cleartext of the vault is set to 62 | (Created by Alice on 2024-01-31) | businessPitchForTheGreatIdeaIHadLastNight.odp | businessPitchForTheGreatIdeaI (Created by Alice on 2024-01.odp |


:::tip
Sync conflicts can happen in cloud storages for several reasons.
In such cases, it is up to you to decide what to do with the conflicted files.
It is recommended to manually check both files and determine which one to keep.
If you conclude that both files are identical, you can delete one copy.
The organization of your files is entirely in your hands.
:::

## Handling Sync Conflicts {#handling-sync-conflicts}

1. When a sync conflict is detected, Cryptomator will display the conflicted file with a suffix, as shown in the table above.
2. Manually review both the original and conflicted files.
3. Decide which file to keep based on your review.
4. If both files are identical, you can delete one of the copies to resolve the conflict.

By following these steps, you can effectively manage synchronization conflicts and ensure that your data remains consistent across multiple locations.

## Example {#example}

Suppose you have a file named `projectPlan.doc` in your vault.
In the encrypted vault, this file might be represented with an encrypted name such as `5TyvCyF255sRtfrIv...83ucADQ==.c9r`.

If a synchronization conflict occurs, it will happen on the encrypted filename.
Cryptomator detects unexpected patterns in the encrypted filename and handles the conflict accordingly.

For example, if there is a conflict with `5TyvCyF255sRtfrIv...83ucADQ== (Created by Alice).c9r`, Cryptomator will decrypt the encrypted part of the filename and rename the file to include a conflict suffix.
The conflicted file might be renamed to something like `FHTa55bH...sUfVDbEb0gTL9hZ8nho.c9r`, which corresponds to `projectPlan (Created by Alice).doc`.
