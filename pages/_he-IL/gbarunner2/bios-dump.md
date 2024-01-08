---
lang: he-IL
layout: wiki
section: gbarunner2
title: גילוי BIOS של GBA
description: איך לחשוב את ה-BIOS של נינטנדו GBA מהקונסולה שלך
tabs:
  - 
    3ds-sd-card: 3DS עם open_agb_firm
    gba-flashcart: GBA/DS/DS Lite עם כרטיס פלאש במצב GBA
---

בעוד שרוב מסימולטורי GBA אין בעיה לשחק במשחקי GBA לבד, ייתכן שקצת מהם והיפרווייזורים, כמו GBARunner2, יזדקקו לקובץ ה-BIOS כדי להפעיל כמו שצריך כמה כותרים.

ישנם שני דרכים שונות להשיג זאת, באמצעות:
- 3DS עם קושחה מותאמת אישית, או
- GBA/DS/DS Lite עם כרטיס פלאש במצב GBA

{% capture tab-3ds-sd-card %}
### חלק 1: השגת הקבצים הנדרשים
1. הורד את [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (הקובץ `.7z`)
1. הורד את [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. צור תיקייה בשם `payloads` בתוך התיקייה `/luma` אם היא עדיין לא קיימת
1. העתק את `open_agb_firm.firm` מתוך קובץ ה-`.7z` של open_agb_firm לתיקיית `/luma/payloads`
1. העתק את `Bios_Dumper.gba` לשורש כרטיס ה-SD שלך
1. הכנס מחדש את כרטיס ה-SD שלך למכשיר שלך

### חלק 2: Bios_Dumper
1. לחץ והחזק <kbd>START</kbd>, ותחזיק את <kbd>START</kbd> במצב דולק למכשיר שלך
    - זה יפעיל את open_agb_firm
    - אם זה מטעין את `Luma3DS Chainloader`, בחר את `open_agb_firm` מתוך התפריט הזה
    - אם זה מטעין משהו אחר, אתה לא העתקת את `open_agb_firm.firm` לתיקייה הנכונה בכרטיס ה-SD שלך
1. מתוך open_agb_firm, הפעל את `Bios_Dumper.gba`
1. המסך ייבה אדום לפני שיבה ירוק
1. חכה במשך כחמישה שניות
1. כבה את המכשיר שלך

{% capture upload-bios-text %}
מכרטיס ה-SD שלך, העלה את `/3ds/open_agb_firm/saves/Bios_Dumper.sav` לכאן:
{% endcapture %}

### חלק 3: חלץ את ה-BIOS מהקובץ שמינהו
1. הכנס את כרטיס ה-SD שלך למחשב
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### חלק 1: השגת הקבצים הנדרשים
1. הורד את [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. העתק את `Bios_Dumper.gba` לשורש כרטיס ה-SD של הכרטיס בזיכרון מהיר
1. הכנס מחדש את כרטיס ה-SD שלך לכרטיס המהיר
1. הכנס מחדש את כרטיס ה-GBA המהיר שלך לתוך הכרטיס

### חלק 2: Bios_Dumper
1. הפעל את הכרטיס המהיר שלך, ואז הפעל את `Bios_Dumper.gba`
1. המסך ייבה אדום לפני שיבה ירוק
1. חכה במשך כחמישה שניות
1. כבה את המכשיר שלך

{% capture upload-bios-text %}
מכרטיס ה-SD שלך, העלה את `Bios_Dumper.sav` לכאן:
{% endcapture %}

### חלק 3: חלץ את ה-BIOS מהקובץ שמינהו
1. הכנס את כרטיס ה-SD שלך למחשב
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

קובץ `bios.bin` יורד אוטומטית. זהו קובץ BIOS GBA הסופי.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
