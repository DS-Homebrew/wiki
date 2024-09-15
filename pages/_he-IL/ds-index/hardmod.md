---
lang: he-IL
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: איך לעשות hardmod לNintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Hardmodding can easily damage your DSi. If you're trying to unbrick your DSi, then you should try [ntrboot](ntrboot) first.
{:.alert .alert-danger}

המושג Hardmod מתייחס למצב שבו מלחימים ללוח האם של הDSi מתאם לכרטיס SD, על מנת שהוא יוכל להקרא באמצעות מחשב. זה יעיל לשחזור גיבויי NAND, צפייה בNAND על המחשב ועוד...

### Nintendo DS
[![לוח אם של DS מקורי עם נקודות מגע עם תוויות](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

בשביל לעשות hardmod לNintendo DSi/DSi XL (LL) תצטרכו:
    - [מלחם עם ראש עיפרון](https://www.amazon.com/dp/B01N4571Q6)
    - [חוטים דקים מאוד](https://www.amazon.com/dp/B01MXGNTA4), 28AWG או קטן יותר, עדיפות ל30AWG+
    - מתאם SD לmicroSD
    - קורא כרטיסי SD המסוגל לקרוא ציפים מסוג eMMC הרצים במצב data-line בודד. [זה אחד שידוע כמתאים](https://www.amazon.com/dp/B006T9B6R2)
    - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) ו[HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) אם על Windows
    - גיבוי NAND תקין של הDSi שאתם עושים לו hardmod
    - נוחות בהלחמה לפדים קטנים, עד ל0.5 מ"מ בקוטר

#### פינאווט צד A של DSi
[![פינאווט צד A של DSi](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### פינאווט צד B של DSi
[![פינאווט צד B של DSi](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### פינאווט צד B של DSi XL
[![פינאווט צד B של DSi XL](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- תצטרכו להלחים את הנקודות על לוח האם אל מתאם הmicroSD
    - CMD לפין 2
    - GND לפין 3 ו6
    - CLK לפין 5
    - DAT0 לפין 7

#### דוגמה למתאם microSD מולחם
[![דוגמה לmicroSD](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- הכניסו את מתאם כרטיס הmicroSD אל המחשב
    - **אזהרה** - Windows יבקש ממכם לפרמט אותו: **אל** תפרמטו אותו - זה עשוי ליצור נזק שלא ניתן לתיקון

#### הסרת הfooter של no$gba
ראשית תצטרכו למחוק את הכותרת התחתנוה NOCASH מהגיבוי שאתם צורבים לDSi. ניתן לבצע זאת באמצעות ה[hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. הורידו את הגרסה המתאימה למערכת ההפעלה שבה אתם משתמשים
1. הריצו את הסקריפט, בחרו את גיבוי הNAND שתרצו לצרוב לDSi שלכם
1. עברו למצב NAND בכפתור בצד שמאל של מסלול הקובץ
1. לחצו על `Start` על מנת ליצור גיבוי NAND ללא הfooter של no$gba

- לאחר שהסקריפט מסיים, אמור להיות קובץ עם שם ארוך שנגמר ב`-no-footer.bin` בתיקיה שבה הטרמינל פתוח
    - השתמשו בקובץ זה כאימג' של הNAND שאתם צורבים לDSi

{% capture tab-windows %}
1. פתחו את Win32DiskImager
1. לחצו על האייקון של התיקיה ונווטו לשולחן העבודה. בתיבת הטקסט, רשמו `NAND_0.bin`. כשאתם בוחרים סוג, בחרו ב`All types *.*`
1. בחרו את המכשיר שהוא הDSi ולחצו על read
1. כשזה מסיים, לחצו על האייקון של התיקיה, שנו את השם ל`NAND_1.bin` וקראו שוב
1. פתחו את HxD וגררו את שני הקבצים אל העורך. בסרגל העליון, לחצו על "Analysis", על "File compare" מהתפריט שנפתח ואז לחצו על "Compare".
1. בחרו להשוות את 2 הקבצים ואז לחצו על OK כשזה מסיים
    - אם זה אומר "The chosen files are identical.", אתם יכולים להמשיך לחלק הבא
    - אם זה לא אומר את זה, ושני הNANDים לא בסביבות 240 MB, חלצו את NAND_1/NAND_0 שוב
1. פתחו את Win32DiskImager, לחצו על האייקון של התיקייה ובחרו את גיבוי הNAND שיצרתם קודם
1. צרבו אותו באמצעות הכפתור `Write`
1. נתקו את מתאם כרטיס הSD ונסו להדליק את הDSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. מציאת מיקום טעינת כרטיס הSD
    - Linux:
        1. נתקו את מתאם כרטיס הSD
        1. הריצו את `lsblk` בטרמינל
        1. חברו את מתאם כרטיס הSD
        1. הריצו את `lsblk` שוב
        1. This time a new device should appear
            - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

    - macOS:
        1. נתקו את מתאם כרטיס הSD
        1. הריצו את `df` בטרמינל
        1. חברו את מתאם כרטיס הSD
        1. הריצו את `df` שוב
        1. A new device should appear in the list
            - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* computer

1. חילוץ הNAND
    - הריצו את הפקודה הבאה בטרמינל:
        - `cat {device-name} > nand0.bin`
        - החליפו את `{device-name}` עם מיקום טעינת כרטיס הSD
        - לדוגמא `cat /dev/sdb > nand0.bin`
        - לאחר מכן הריצו `cat {device-name} > nand1.bin`


1. השוואת גיבויי NAND
    1. הריצו את הפקודה הבאה:
        - Linux: `md5sum nand0.bin nand1.bin`
        - macOS: `md5 -r nand0.bin nand1.bin`
    1. וודאו שההאש שנוצר תואם אחד לשני
    1. אם לא, חלצו מחדש את הNAND, תקנו את החיווט אם צריך
    1. המשיכו לחלץ את הNAND עד שההאשים זהים

1. צריבת NAND
    1. מצאו את גיבוי הNAND שיצרתם קודם על הקונסולה
    1. הריצו את הפקודה הבאה:
        - `cat {existing-nand-backup} > {device-name}`
        - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
        - Replace `{device-name}` with the mount point of the SD card

בשלב זה אתם יכולים לנתק את מתאם כרטיס הSD ולנסות להדליק את הDSi. אם הכל הלך כשורה, הDSi אמור להדלק למצב שבו הוא היה כשהגיבוי נוצר!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### צריבת גיבוי הNAND
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
