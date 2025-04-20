---
lang: he-IL
layout: wiki
section: twilightmenu
category: customization
title: גופנים מותאמים אישית
description: כיצד להשתמש בפונטים מותאמים אישית עבור TWiLight Menu++
---

TWiLight Menu++ יכול להשתמש בגופנים מותאמים אישית בפורמט NFTR (Nitro FonT Resource). They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### מבנה תיקייה
גופנים מותאמים אישית נטענים מ`sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr`, כשה`[font name]` הוא שם הגופן לבחירתכם ו `[font file].nftr` הוא אחד מהבאים:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. טענו את קובץ הNFTR לnftr-editor
1. רשמו את השמותש ל הגופנים שאתם רוצים על פי סדר עדיפויות בתיבת הטקסט `Input font`, מופרדים בפסיק
    - ניתן לראות תצוגה מקדימה של הפונטים בתיבת הטקסט בצד שמאל ואת הNFTR הנוכחי בתיבת הטקסט התחתונה
1. לחצו על `Generate from font`, בחרו ב`OK` על מנת ליצור מחדש תווים קיימים ו`Cancel` על מנת ליצור מחדש את תווי הכפתור המיוחדים (לדוגמת &#xE000;)
1. לחצו על `Save`, וחזרו על הפעולה עבור שאר הגדלים
