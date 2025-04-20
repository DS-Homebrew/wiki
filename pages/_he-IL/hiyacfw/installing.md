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
- A NAND Backup taken from your device [using dumpTool](https://dsi.cfw.guide/dumping-nand)
- מכשיר עם Windows, macOS או Linux

### שלב 1: הכנת המחשב שלכם להתקנת hiyaCFW
{% capture tab-windows %}
1. Download the latest Windows version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Run the TWLMagician MSI package and extract it to anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. התקינו Python 3 באמצעות מנהל החבילות אם הוא לא מותקן כבר
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. התקינו את tkinter באמצעות הפקודה הבאה בהתאם לגרסה שלכם אם אין לכם את זה עדיין:
    - Debian-based: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Install requirements with the following command:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### חלק 2: הוספת קבצי hiyaCFW לכרטיס הSD שלכם
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. לחצו על הכפתור `...` בתיבה "NAND file with No$GBA footer"
1. נווטו לגיבוי הNAND שלכם, ולחצו על `Open`
1. לחצו על `Start`
1. בחלון החדש שיפתח, נווטו לכרטיס הSD שלכם, ולחצו על `OK`.
    - זה עשוי להימשך כמה דקות
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

### חלק 3: הגדרת Unlaunch וhiyaCFW
1. הדליקו את הNintendo DSi שלכם בזמן שאתם מחזיקים את <kbd class="face">A</kbd> ואת <kbd class="face">B</kbd>
    - זה אמור להביא אתכם לתפריט הקבצים של Unlaunch
1. נווטו ל`OPTIONS` ואז ל`NO BUTTON`
1. בחרו ב`hiyaCFW` ולחצו על <kbd class="face">A</kbd>
    - זה יגרום למערכת להפעיל את hiyaCFW באופן אוטומטי
1. שמרו את ההגדרות ואתחלו את המכשיר
1. החזיקו <kbd>SELECT</kbd> בזמן שאתם מדליקים את הNintendo DSi שלכם בשביל לגשת להגדרות של hiyaCFW
1. שנו את ההגדרות לפי רצונכם, ולחצו על <kbd>START</kbd> בשביל להמשיך

If it shows `An error has occurred`, please see the [faq](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw) page.
{: .alert .alert-warning}
