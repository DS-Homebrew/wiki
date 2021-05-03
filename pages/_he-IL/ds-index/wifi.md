---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: מידע על שימוש בWi-FI על הנינטנדו DS
---

- בתוכנות ומשחקים של Nintendo DS, אפשר להשתמש רק בWEP ובWIFI ללא אבטחה
- בתוכנות ומשחקים שמורחבים או אקסלוסיבים על Nintendo DSi, נוספת תמיכה של WPA וWPA2

ניתן להשתמש בנקודות גישה/נקודות חמות, כך שלא צריך לשנות את ההגדרות של הראוטר שלכם.

### יצירת נקודה חמה
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

### התקנת הטלאי ידנית לרומים של DS
עקבו אחרי המדריך הנ"ל אם ספק האינטרנט שלכם חוסם שרתי DNS מותאמים אישית, אחרת זה מומלץ *מאוד* לעקוב אחרי המדריך מעל.

הערה: משתמשי GNU/Linux וmacOS יכולים לעקוב אחרי הוראות דומות מאוד, אבל יצטרכו להשתמש בmono

1. הורידו את [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. העתיקו את הROM של המשחק שאתם רוצים להתקין עליו את הפאטץ לאותה תיקיה שבה נמצא WFCPatcher ופתחו את תיקיה זו
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Done! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Troubleshooting and further reading
If you are receiving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
