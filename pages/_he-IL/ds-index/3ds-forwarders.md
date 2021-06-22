---
lang: he-IL
layout: wiki
section: ds-index
category: guides
title: מעבירי משחקי DS (על 3DS)
description: איך לייצור מעבירי משחקים בקובץ CIA על מנת לקבל משחקי DS בתפריט הבית של ה3DS
tabs:
  - 
    tab-sd-card: כרטיס SD
    tab-flashcard: פלאשקארט
---

מעבירים בתפריט הבית הם אייקונים בתפריט זה שמעבירים אותך לתוכנה שמריצה את האייקון המופיע. במקרה זה, תוכלו להוסיף משחקי DS מכרטיס הSD (שמנצלים את nds-bootstrap) או מפלאשקארט (דרך הגרעין המתאים שלו) אל תפריט הבית בשביל גישה נוחה יותר למשחקים.

משחקי DS צריכים לעבור דאמפ לפורמט `.nds` דיגיטלי. תוכלו לחלץ את הקלטות DS שלכם באמצעות [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge).
{:.alert .alert-info}

עמוד זה מניח שאתם מריצים קושחה מותאמת אישית מודרנית מ[3ds.hacks.guide](https://3ds.hacks.guide).

בחרו אחת מבאים להוסיף לעמוד הHOME:

{% capture tab-sd-card %}

### חלק 1: השגת הקבצים הנדרשים

אם יש לכם את Universal Updater מותקן כבר על הקונסולה, אתם יכולים לדלג לשלב 3.
{:.alert .alert-info}

1. פתחו את FBI ובחרו `Remote Install`, לאחר מכן בחרו then `Scan QR Code`
1. סרקו את קוד הQR הזה על מנת להתקין את הגרסה האחרונה של [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![קוד QR של Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. פתחו את Universal Updater מתפריט הבית שלכם
1. התקן את חבילת NDSForwarder
1. NDSForwarder והקבצים הנדרשים עבורו מוגדרים במקומות הייעודים שלהם

### חלק 2: NDSForwarder
1. פתחו את הHomebrew Launcher
1. בHomebrew Launcher פתחו את `NDS Forwarder Generator`
1. נווטו למיקום של המשחק שלכם ולחצו על <kbd class="face">A</kbd>
1. אשרו שאתם רוצים להתקין על ידי בחירה ב`Yes`
1. לאחר שזה מותקן, המשחק יופיע ככותר בתפריט הבית
{% endcapture %}
{% assign tab-sd-card = tab-sd-card | split: "////////" %}

{% capture tab-flashcard %}

אם אתם נתקלים בבעיות, בדקו את השו"ת ב[בנושא בGBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### דרישות

3DS:

{% capture flashcards %}
הפלאשקארטים המומלצים הם DSTT וAcekard 2i. אם אתם רוצים תאימות מושלמת למשחקים, השיגו את הSuperCard DSTWO / DSTWO PLUS. החסרון היחיד הוא שהם ירוקנו את הסוללה מהר יותר.

אם יש לכם פלאשקארט שעובד עם NTR Launcher של Apache Thunder, תרגישו חופשי לבקש אותו ב[נושא בGBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). וודאו שאתם מציינים באיזה build אתם משתמשים (Normal או Alt), ואם `RESETSLOT1` מוגדר על `0` או על `1` ב`sd:/nds/ntr_launcher.ini`.

תואמים:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (משחקים שהם DSi-Enhanced, כולל משחקי NTR חדשים יותר, לא יעבדו.)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (משתמש בכרטיסי מיקרו SD בנפח < 2GB)
- <[R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (המקורי, לא גרסת הSDHC, משתמש בכרטיסי מיקרו SD < 2GB)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (גרסה רגילה וRTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (כרטיסים סגולים עלולים לא להיות תואמים)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (גרסה רגילה וPlus)

לא נבדק:
- R4i3D NEW (השתמשו בתבנית ובחבילה של R4iDSN)

נתמכים חלקית:
- Ace 3DS+ (התמיכה במשחקים לא טובה, אז שמירה וטעינה גורמים לקריסה)
- Gateway Blue Card (התמיכה במשחקים לא טובה, אז שמירה וטעינה גורמים לקריסה)
- EX4DS (התמיכה במשחקים לא טובה, אז שמירה וטעינה גורמים לקריסה)
- R4iLS (התמיכה במשחקים לא טובה, אז שמירה וטעינה גורמים לקריסה)
- כרטיסים עם [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (התמיכה במשחקים לא טובה, אז שמירה וטעינה גורמים לקריסה)

אינו תואם:
- CycloDS (i)Evolution (יכול להפעיל בטעינה רומים, אבל עובד שונה מפלאשקארדים אחרים)
- (i)Edge (לא מסוגל להפעיל בטעינה רום .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com)/[www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (לא פעולת המעבירים) גורמים לבריק לקלטת)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (לא פעולת המעבירים) גורמים לבריק לקלטת)
{% endcapture %}

<details>
    <summary>כרטיס פלאשקארד נתמך מהרשימה הזאת</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

PC:
- מערכת הפעלה 64 ביט
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Java 8 Update 251
- **משתמשי לינוקס:** JavaFX
   - מבוסס Debian: הריצו [את זה](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
   - Arch: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### חלק 1: צעדים ראשונים
1. הורידו את אחת מהחבילות הבאות:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. חלצו את התוכן של התיקייה `for Slot-1 microSD` אל כרטיס המיקרו SD של הפלאשקארד שלכם וגם (אם התיקייה קיימת) את התוכן של התיקיה `for 3DS SD card` לכרטיס הSD של ה3DS שלכם.

לאחר שתחלצו את החבילה עבור הכרטיס שלכם, תוכלו לערוך את `sd:/_nds/ntr_forwarder.ini` על מנת לשנות את ההגדרות. זה לא אפשרי עבור Acekard RPG, R4 DS וR4i Gold RTS.
- `NTRCLOCK`: אם מוגדר ל`0` או ש<kbd class="face">A</kbd> מוחזק, מסך העליה של הDSi יוצג במקום מסך העליה הרגיל של הDS ומהירות השעון של TWL תהיה בשימוש והלאג יעלם
- `DISABLEANIMATION`: אם מוגדר ל`1` או ש<kbd class="face">B</kbd> מוחזק, מסך העליה של הDS / DSi ידולג
- `HEALTHSAFETYMSG`: אם מוגדר ל`1`, מסך הבריאות ובטיחות של העליה יוצג במסך התחתון, אחרת המסך התחתון ישאר לבן ללא הודעה בריאות ובטיחות

### חלק 2: קבלת קבצי תיקון האנטי פיראטיות (AP) מTWiLight Menu++
אם יש לכם כבר את TWiLight Menu++, דלגו לחלק הבא.
1. הורידו את הגרסה האחרונה של [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. בקובץ ה7z, לכו ל`_nds/TWiLightMenu/`
1. העתיקו את התיקיה `apfix` אל `sd:/_nds/ntr-forwarder/` בכרטיס הSD של ה3DS שלכם

### חלק 3: Forwarder3-DS
1. פתחו את `Forwarder3DS.jar`
   - **משתמשי Windows:** אם זה לא נפתח, הורידו את [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat) ושימו אותו באותה תיקיה כמו Forwarder3DS.jar, והריצו
1. הגדירו את כרטיס שלכם כ`Target` בצד שמאל
   - **הערה:** אם אתם לא רואים רשימה של כרטיסים, הורידו [את קובץ הZIP הזה](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), ושימו את התיקיה `forwarders` באותה תיקיה כמו Forwarder3DS.jar ואז שנו אות השם ל`.forwarders`
1. הפעילו את `Automatically set ROM path`
   - **משתמשי Linux:** הדרך האוטומטית לא נכונה מאחר והיא כוללת את כל הדרך (לדוגמה `/media/$USER/something/`), בבקשה מחקו את החלק הזה
   - **משתמשי macOS:** הדרך האוטומטית לא נכונה מאחר והיא כוללת את `/Volumes/(cardname)/` בהתחלה, בבקשה מחקו את החלק הזה
1. לחצו על התיקיה בפינה הימנית העליונה ובחרו את הרומים שתרצו להכין עבורים מעבירים, או גררו ושחררו אותם על החלון
   - **הערה:** קבצי הרום חייבים להיות כבר על כרטיס הSD שלכם כשאתם בוחרים אותם, ולא ניתן להזיזם בלי ליצור מחדש את המעבירים
   - **משתמשי כרטיס SD:** אם קבצי השמירה שלכם נמצאים באותה תיקיה עם הרומים, העבירו אותם לתיקיה בשם `saves` כאשר התיקיה הזו נמצאת באותו מקום עם הרומים
1. אם אתם משחקים בגרסת האק או תרגום של משחק DSi-Enhanced שהבאנר או הכותרת שלו שונו, מצאו את הבאנר [כאן](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), לחצו מקש ימיני על המשחק בForwarder3-DS, לחצו על `Import banner` ובחרו את הבאנר לשימוש
1. אם אתם משתמשים ברום של הומברו, לחצו עליו, מחקו את ה `Game title` שלו ורשמו את השם של המשחק
1. לחצו על הכפתור של הדיסקט ליצור הCIAים של המעבירים
1. העתיקו את הCIAים לכרטיס הSD של ה3DS שלכם, והתקינו אותם באמצעות FBI
   - אם אתם משתמשים בEmuNAND, התקינו אותם גם לSysNAND וגם לEmuNAND
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}