---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: מידע על שימוש בWi-FI על הנינטנדו DS
---

- בתוכנות ומשחקים של Nintendo DS, אפשר להשתמש רק בהגדרות אבטחה של WEP ובWIFI ללא אבטחה
- באפליקציות Nintendo DSi-Enhanced או אקסלוסיביות שרצו במצב DSi, יש לכם את האופציות הנוספות של אבטחת WPA וWPA2

ניתן להשתמש בנקודות גישה/נקודות חמות, כך שלא צריך לשנות את ההגדרות של הראוטר שלכם.

### יצירת נקודה חמה
ישנם מדריכים על יצירת נקודות חמות המתאימות למשחקי DS על מחשבי macOS וLinux בGBAtemp. אם אתם בWindows אתם יכולים להשתמש בLinux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### שחזור Nintendo DS WFC
1. הפעילו את הNintendo Wi-Fi Connection Setup
1. התחברו לנקודת הגישה שלכם
1. הגדירו את הPrimary DNS שלכם לאחד הערכים הבאים, בהתאם לשירות בו תרצו להשתמש:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` or `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. הגדירו את `1.1.1.1` בתור הsecondary DNS
1. ייתכן ותצטרכו להתקין טלאי NoSSL על המשחק שלכם בשלב זה, כתלות במשחק

### התקנת הטלאי ידנית לרומים של DS
עקבו אחרי המדריך הנ"ל אם ספק האינטרנט שלכם חוסם שרתי DNS מותאמים אישית, אחרת זה מומלץ *מאוד* לעקוב אחרי המדריך מעל.

הערה: משתמשי GNU/Linux וmacOS יכולים לעקוב אחרי הוראות דומות מאוד, אבל יצטרכו להשתמש בMono

1. הורידו את [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. העתיקו את הROM של המשחק שאתם רוצים להתקין עליו את הפאטץ לאותה תיקיה שבה נמצא WFCPatcher ופתחו את תיקיה זו
1. צרו קובץ טקסט
1. בקובץ, כתבו `wfcpatcher.exe %1 --domain wiimmfi.de` ושמרו את הקובץ עם השם `patch.bat`, ואז סגרו את החלון
   - אתם יכולים להחליף את wiimmfi.de עם URL אחר, אם אתם רוצים להשתמש בשרת אחר
   - אם הקובץ עדיין נראה כמו קובץ טקסט, [אפשרו סיומות לשמות קבצים ](https://dsi.cfw.guide/file-extensions-%28windows%29) ומחקו את `.txt` משם הקובץ
1. עכשיו גררו את כל הרומים שאתם רוצים לעשות להם פאטץ על patch.bat
1. זהו! הרומים עם הפאטץ יהיו אלו שהשם שלהם נגמר ב(wiimmfi)

אל תשכחו למחוק DNSים שאולי הגדרתם בהגדרות Wi-Fi שלכם לפני שאתם מנסים להתחבר עם הרום שעבר פאטץ.

### פתרון בעיות וקריאה נוספת
אם אתם מקבלים שגיאות כלשהן, אתם יכולים להכניס אותם ב[פותר בעיות](https://wiimmfi.de/error) של Wiimmfi לדרכים לפתרון.

לפתרון בעיות מסויימות יותר ולמידע נוסף, לדוגמת איך להתחבר לרשת עם אימולטורים או על שימוש בNintendo Wi-Fi USB Connector, תוכלו לקרוא את [מדריך של Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) שנכתב על ידי משתמשים של [Mario Kart DS Network](https://discord.gg/pa9bea6).
