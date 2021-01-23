---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Information on using Wi-Fi on the Nintendo DS
---

- בתוכנות ומשחקים של Nintendo DS, אפשר להשתמש רק בWEP ובWIFI ללא אבטחה
- בתוכנות ומשחקים שמורחבים או אקסלוסיבים על Nintendo DSi, נוספת תמיכה של WPA2

ניתן להשתמש בנקודות גישה/נקודות חמות, כך שלא צריך לשנות את ההגדרות של הראוטר שלכם.

### Creating a hotspot
There are guides for creating a DS game compatible hotspot on macOS and Linux computers on GBAtemp. If you're on Windows you can use a Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC Restoration

1. הפעילו את ההגדות של Nintendo WFC
1. התחברו לנקודת הגישה שלכם
1. הגדירו את הPrimary DNS שלכם לאחד הערכים הבאים, בהתאם לשירות בו תרצו להשתמש:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` או `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. הגדירו את `1.1.1.1` בתור הsecondary DNS
1. ייתכן ותצטרכו להתקין טלאי NoSSL על המשחק שלכם בשלב זה, כתלות במשחק
