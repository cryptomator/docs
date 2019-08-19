# Running Sanitizer

## Windows
To run a sanitizer-check on Windows, open the command prompt (Start Menu > Enter “cmd” and press enter) and enter the following command:  
`java -jar C:\path\to\sanitizer-0.15.jar check -vault C:\path\to\vault -deep`  
Replace the paths _C:\path\to\sanitizer-0.15.jar_ and _C:\path\to\vault_ accordingly.  
You can open an Explorer window and drag and drop the JAR file and vault directory into the command prompt to insert the correct path.

## macOS
[This video](https://www.youtube.com/watch?v=yxJUcaXmdig){: rel="external"} shows how to do that on macOS.  
[![Cryptomator Sanitizer: Quick Guide](https://img.youtube.com/vi/yxJUcaXmdig/0.jpg)](https://www.youtube.com/watch?v=yxJUcaXmdig){: rel="external"}
	
# Output
After running Sanitizer, the files _.structure.txt_ and _.check.txt_ are created.  
Those files contain some information about your vault (a list of the (encrypted) files and a problems report).
