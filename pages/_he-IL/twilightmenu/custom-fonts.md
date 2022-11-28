---
lang: he-IL
layout: wiki
section: twilightmenu
category: customization
title: גופנים מותאמים אישית
description: כיצד להשתמש בפונטים מותאמים אישית עבור TWiLight Menu++
---

TWiLight Menu++ יכול להשתמש בגופנים מותאמים אישית בפורמט NFTR (Nitro FonT Resource). הם ישומו בהגדרות, בכותרות של המדריכים ובערכות הנושא של הNintendo DSi, Nintendo 3DS, SEGA Saturn ושל הHomebrew Launcher.

### מידע על הגופנים הכלולים
יש שלושה גופנים כלולים בTWiLight Menu++. When TWiLight Menu++ is running in DSi Mode, they all contain all of the characters that should be needed for all of the languages TWiLight is translated to, but when running in DS Mode they are more limited due to RAM limitations. הם כלהלן:
- Default: This uses the official DSi font as its primary font, and supports all characters that are used in TWiLight Menu++ itself in all languages in DS mode
- סינית (מופשטת): גופן זה משתמש בNoto Sans CS בתור הגופן העיקרי, יש לו באופן מובהק יותר תווים של סינית (מופשטת) במצב DS, במחיר של תווים עבור שפות אחרות
- קוראינית: גופן זה זהה לברירת המחדל במצב DSi, אבל במצב DS יש לו סט שלם יותר של הנגול, במחיר של תווים עבור שפות אחרות

### מבנה תיקייה
גופנים מותאמים אישית נטענים מ`sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr`, כשה`[font name]` הוא שם הגופן לבחירתכם ו `[font file].nftr` הוא אחד מהבאים:
- `large-ds.nftr`, `large-dsi.nftr` או `large.nftr`: הגופן הגדול יותר המשמש לכותרות
- `small-ds.nftr`, `small-dsi.nftr` או `small.nftr`: הגופן הקטן יותר המשמש לשאר הטקסט

לקבצי ה`-ds` and `-dsi` יש עדיפות גבוהה יותר מהקבצים הרגילים ואם הם ימצאו, TWiLight Menu++ ישתמש בהם במצב DS או במצב DSi בהתאם.

### Skin fonts
You may add fonts to [custom DSi/3DS theme skins](custom-dsi-3ds-skins), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the skin's root folder.

Custom skins can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. טענו את קובץ הNFTR לnftr-editor
1. רשמו את השמותש ל הגופנים שאתם רוצים על פי סדר עדיפויות בתיבת הטקסט `Input font`, מופרדים בפסיק
   - ניתן לראות תצוגה מקדימה של הפונטים בתיבת הטקסט בצד שמאל ואת הNFTR הנוכחי בתיבת הטקסט התחתונה
1. לחצו על `Generate from font`, בחרו ב`OK` על מנת ליצור מחדש תווים קיימים ו`Cancel` על מנת ליצור מחדש את תווי הכפתור המיוחדים (לדוגמת &#xE000;)
1. לחצו על `Save`, וחזרו על הפעולה עבור שאר הגדלים
