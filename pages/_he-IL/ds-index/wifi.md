---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: מידע על שימוש בWi-FI על הנינטנדו DS
---

- On Nintendo DS applications, you can only use WEP and Open Wi-Fi security settings
- On Nintendo DSi-Enhanced/Exclusive applications running in DSi Mode, you have the additional options of WPA and WPA2 security

ניתן להשתמש בנקודות גישה/נקודות חמות, כך שלא צריך לשנות את ההגדרות של הראוטר שלכם.

### יצירת נקודה חמה
There are guides for creating a DS-compatible hotspot on macOS and Linux computers on GBAtemp. If you're on Windows, you can use a Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### שחזור Nintendo DS WFC
1. Launch Nintendo Wi-Fi Connection Setup
1. התחברו לנקודת הגישה שלכם
1. הגדירו את הPrimary DNS שלכם לאחד הערכים הבאים, בהתאם לשירות בו תרצו להשתמש:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` or `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. הגדירו את `1.1.1.1` בתור הsecondary DNS
1. ייתכן ותצטרכו להתקין טלאי NoSSL על המשחק שלכם בשלב זה, כתלות במשחק

### התקנת הטלאי ידנית לרומים של DS
עקבו אחרי המדריך הנ"ל אם ספק האינטרנט שלכם חוסם שרתי DNS מותאמים אישית, אחרת זה מומלץ *מאוד* לעקוב אחרי המדריך מעל.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono

1. הורידו את [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. העתיקו את הROM של המשחק שאתם רוצים להתקין עליו את הפאטץ לאותה תיקיה שבה נמצא WFCPatcher ופתחו את תיקיה זו
1. Create a text file
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save the text file with the name `patch.bat` and close the window
   - You can replace wiimmfi.de with another URL, if you wish to use a different server
   - If the file still appears to be a text document, [enable file name extensions](https://dsi.cfw.guide/file-extensions-%28windows%29) and remove `.txt` from the file name
1. Now drag all the ROMs you wish to patch on to patch.bat
1. Done! the patched ROMs will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Troubleshooting and further reading
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
