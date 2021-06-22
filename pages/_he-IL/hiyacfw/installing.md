---
lang: he-IL
layout: wiki
section: hiyacfw
title: התקנה
long_title: התקנת hiyaCFW
description: איך להתקין את hiyaCFW על Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

אל תעדכנו את המכשיר לאחר התקנת hiyaCFW. זה יסיר את כל הפאטצים של הSD מhiyaCFW.
{: .alert .alert-danger}

### דרישות
- מכשיר Nintendo DSi עם [Unlaunch מותקן](https://dsi.cfw.guide/installing-unlaunch)
- גיבוי NAND מהמכשיר שלכם שנוצר באמצעות dumpTool
   - אם אין לכם, עקבו אחר [חילוץ NAND](https://dsi.cfw.guide/dumping-nand)
- מכשיר עם Windows, macOS או Linux

### שלב 1: הכנת המחשב שלכם להתקנת hiyaCFW
{% capture tab-windows %}
הhiyaCFW Helper ידוע שגורם לWindows Defender ולתוכנות אנטי וירוס אחרות לתת התראה חיובית שגויה. בבקשה תכבו באופן זמן את התוכנות האלה במידה ויש לכם בעיה להוריד או להריץ אותה.
{: .alert .alert-info}

1. הורידו & התקינו את הגרסה האחרונה של [7-Zip](https://www.7-zip.org/download.html)
   - זה לא יעבוד עם אף תוכנת חילוץ אחרת, לדוגמת WinRAR, מאחר וhiyaCFW helper תלוי ב7-Zip עצמו ולא בתוכנת חילוץ כללית
1. הורידו את הגרסה האחרונה לWindows של [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. חלצו את hiyaCFW Helper למיקום כלשהוא על המחשב שלכם
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. הורידו את הגרסה האחרונה לmacOS של [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. חלצו את hiyaCFW Helper למיקום כלשהוא על המחשב שלכם
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. התקינו Python 3 באמצעות מנהל החבילות אם הוא לא מותקן כבר
1. הורידו את הגרסת Pyhon של [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases)
1. חלצו את hiyaCFW Helper למיקום כלשהוא על המחשב שלכם
1. התקינו את tkinter באמצעות הפקודה הבאה בהתאם לגרסה שלכם אם אין לכם את זה עדיין:
   - מבוסס Debian: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### חלק 2: הוספת קבצי hiyaCFW לכרטיס הSD שלכם
![צילום מסך של hiyaCFW Helper](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. הפעילו את hiyaCFW Helper
  - **Windows:** הפעילו את הקובץ `HiyaCFW_Helper.exe` שחולץ מהקובץ המכווץ hiyaCFW Helper (ייתכן שתצטרכו לכבות באופן זמני את האנטי וירוס שלכם)
  - **macOS:** לחצו על המקש הימני בעכבר על הקובץ `HiyaCFW_Helper` שחולץ מהקובץ המכווץ hiyaCFW Helper ובחרו ב`Open`
  - **Linux:** הפעילו את `HiyaCFW_Helper.py` שחולץ מהקובץ המכווץ hiyaCFW Helper
1. לחצו על הכפתור `...` בתיבה "NAND file with No$GBA footer"
1. נווטו לגיבוי הNAND שלכם, ולחצו על `Open`
1. לחצו על `Start`
1. בחלון החדש שיפתח, נווטו לכרטיס הSD שלכם, ולחצו על `OK`.
   - זה עשוי להימשך כמה דקות
1. כאשר האפליקציה אומרת `Done!`, סגרו את hiyaCFW Helper
1. סגרו את חלון הטרמינל

### חלק 3: הגדרת Unlaunch וhiyaCFW
1. הדליקו את הNintendo DSi שלכם בזמן שאתם מחזיקים את <kbd class="face">A</kbd> ואת <kbd class="face">B</kbd>
   - זה אמור להביא אתכם לתפריט הקבצים של Unlaunch
1. נווטו ל`OPTIONS` ואז ל`NO BUTTON`
1. בחרו ב`hiyaCFW` ולחצו על <kbd class="face">A</kbd>
   - זה יגרום למערכת להפעיל את hiyaCFW באופן אוטומטי
1. שמרו את ההגדרות ואתחלו את המכשיר
1. החזיקו <kbd>SELECT</kbd> בזמן שאתם מדליקים את הNintendo DSi שלכם בשביל לגשת להגדרות של hiyaCFW
1. שנו את ההגדרות לפי רצונכם, ולחצו על <kbd>START</kbd> בשביל להמשיך

אם זה מראה `An error has occurred`, בבקשה עקבו אחרי העמוד [פתרון בעיות](troubleshooting#an-error-has-occurred).
{: .alert .alert-warning}
