---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: מידע על שימוש בWi-FI על הנינטנדו DS
---

- בתוכנות ומשחקים של Nintendo DS, אפשר להשתמש רק בWEP ובWIFI ללא אבטחה
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA and WPA2 support

ניתן להשתמש בנקודות גישה/נקודות חמות, כך שלא צריך לשנות את ההגדרות של הראוטר שלכם.

### Creating a Hotspot
ישנם מדריכים על יצירת נקודות חמות המתאימות למשחקי DS על מחשבי macOS וLinux בGBAtemp. אם אתם בWindows אתם יכולים להשתמש בLinux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### שחזור Nintendo DS WFC
1. הפעילו את ההגדות של Nintendo WFC
1. התחברו לנקודת הגישה שלכם
1. הגדירו את הPrimary DNS שלכם לאחד הערכים הבאים, בהתאם לשירות בו תרצו להשתמש:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` או `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. הגדירו את `1.1.1.1` בתור הsecondary DNS
1. ייתכן ותצטרכו להתקין טלאי NoSSL על המשחק שלכם בשלב זה, כתלות במשחק

### Manually Patching Your DS ROMs
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use mono

1. Download [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WFCPatcher is saved and open that folder
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Done! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Troubleshooting and Further Reading
If you are recieving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
