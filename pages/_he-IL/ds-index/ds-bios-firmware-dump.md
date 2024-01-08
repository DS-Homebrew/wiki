---
lang: he-IL
layout: וויקי
section: ds-index
category: guides
title: השמירת BIOS/קרנל
description: כיצד לחלץ את BIOS/קרנל Nintendo DS או DSi מהקונסולה שלך
tabs:
  - 
    dsi-sd-card: DSi עם Unlaunch
    flashcard: פלאשקארט
---

כמה מהמדמים, כמו melonDS, דורשים את BIOS וקושחה במצב DS או DSi, שניתן להוציא מהמכשיר שלך. ישנם שני דרכים שונות להשיג זאת, באמצעות:
- DSi עם Unlaunch, או
- DS/DS Lite/3DS או DSi ללא Unlaunch, יחד עם כרטיס זיכרון מותאם למכשיר

השיטה של DSi תשדרג את קבצי ה-BIOS וה-Firmware בשני מצבי ה-DS וה-DSi. השיטה של כרטיס ה-Flash תשדרג רק את קבצי ה-DS במצב DS.

{% capture tab-dsi-sd-card %}

דף זה מניח שאתה מריץ סביבת CFW עדכנית מ־[dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### חלק 1: השגת הקבצים הנדרשים

1. הורד [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. העתק את `dsibiosdumper.nds` מתוך קובץ dsibiosdumper `.7z` לשורש כרטיס ה-SD שלך
1. הכנס מחדש את כרטיס ה-SD שלך למכשיר שלך

### חלק 2: dsibiosdumper
1. עם המכשיר שלך כדיווחת כבוי, החזק את הכפתורים הבאים: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, ותחזוק אותם ביחד בזמן שאתה מדליק את המכשיר שלך
1. על מכשירך להשתמש בתפריט Unlaunch כעת
1. הפעל את dsibiosdumper מרשימת היישומים
1. לחץ <kbd class="face">A</kbd> כדי לשדרג הכול
1. חכה עד שהתהליך יושלם
    - זה יכול לקחת זמן
1. לאחר שהתהליך הושלם, לחץ על <kbd>SELECT</kbd> כדי לצאת מ־dsibiosdumper
1. כבה את המכשיר שלך
1. הכנס את כרטיס ה-SD שלך למחשב

כל הקבצים הנדרשים יהיו בתיקיית `dsidump` בשורש כרטיס ה-SD שלך.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### חלק 1: השגת הקבצים הנדרשים

1. הורד [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (הקובץ `.nds`)
1. העתק `dsbf_dump.nds` אל שורש כרטיס ה-SD שלך
1. הכנס מחדש את כרטיס ה-SD שלך אל כרטיס הפלאש שלך

### חלק 2: dsbf_dump
1. הדלק את המכשיר שלך
1. השתמש בכרטיס הזכרון שלך
1. נווט לשורש כרטיס הSD שלך והפעל את dsbf_dump
1. חכה עד שהתהליך יושלם
1. לאחר ההליך, לחץ על <kbd>START</kbd> כדי לכבות את המכשיר שלך
  - במערכות משפחת ה-3DS, זה יציג במקום ״תוכנה סגורה״. כבו את המכשיר ממסך זה
1. הכנס את כרטיס ה-SD שלך למחשב

כל הקבצים הדרושים יהיו בתיקייה המצויה במסך העליון של המכשיר שלך.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
