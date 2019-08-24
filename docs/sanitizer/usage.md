# Running Sanitizer

## Windows

To run a Sanitizer check on Windows, open the command prompt (Start Menu > Enter "cmd" and press enter) and enter the following command:

```cmd
java -jar C:\path\to\sanitizer-0.16.jar check -vault C:\path\to\vault -deep
```

Replace the paths `C:\path\to\sanitizer-0.16.jar` and `C:\path\to\vault` accordingly.

You can open an Explorer window and drag & drop the JAR file and vault directory into the command prompt to insert the correct path.

## macOS

[This video](https://www.youtube.com/watch?v=yxJUcaXmdig){: rel="external"} shows how to do that on macOS.

[![Cryptomator Sanitizer: Quick Guide](https://img.youtube.com/vi/yxJUcaXmdig/0.jpg)](https://www.youtube.com/watch?v=yxJUcaXmdig){: rel="external"}
	
# Output

After running Sanitizer, the files `*.structure.txt` and `*.check.txt` are created.

Those files contain some information about your vault (a list of the (encrypted) files and a problems report).

# Advanced Usage

If you're looking for a way to restore missing file extensions after using the `decryptVault` command, please read this guide:

[Sanitizer: Restore Missing File Extensions](https://community.cryptomator.org/t/sanitizer-restore-missing-file-extensions){: rel="external"}

!!! warning
    This article is only for a worst-case scenario when the vault has been partially deleted.

    **Use at your own risk!**

    Do not run these scripts if you don't know exactly what you are doing.
