---
lang: he-IL
layout: wiki
section: twilightmenu
category: customization
title: רקעים מותאמים אישית עבור Unlaunch
description: כיצד ליצור רקעים מותאמים אישית עבור Unlaunch ולהתקינם באמצעות TWiLight Menu++
---

תוכלו למצוא רקעים מוכן עבור Unlaunch ב[ אתר הסקינים של TWiLight Menu++](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

באמצעות TWiLight Menu++ ניתן לעשות פאטץ להתקנה של Unlaunch על מנת לקבל תמונת רקע ופלטת צבעים עבור טקסט מותאמים אישית. היא חייבת להיות GIF בגודל 256x192, עם מספר מגבלות:
- רק הפריים הראשון יוצג, ללא רקעים מונפשים
- גודל הקובץ חייב להיות קטן או שווה ל15,472 בתים
- קבצי GIF עם יותר מ31 צבעים דורשים פלטת צבעים מיוחדת על מנת להמנע מלהרוס את הטקסט

### התקנה
1. העתיקו את קובץ הGIF אל `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. הורידו את [הגרסה האחרונה של ההתקנה של Unlaunch](https://problemkaputt.de/unlaunch.zip) וחלצו את `UNLAUNCH.DSI` אל כרטיס הSD שלכם
1. פתחו את ההגדרות של TWiLight Menu++, עברו לעמוד `Unlaunch settings`, לחצו על `Background` ובחרו את הרקע שאתם רוצים
1. צאו מההגדרות והריצו את `Unlaunch DSi Installer`
    - הוא אמור להשתמש בתמונה המותאמת אישית שלכם, אם לא אז כבו את המכשיר ו-וודאו כי הGIF שלכם עומד בדרישות מעלה
1. בחרו `Install Now`

### שימוש בGIFים עם יותר מ31 צבעים
מאחר ולוח הצבעים של הGIF נטענת לאותו מקום בVRAM של לוח הצבעים של הטקסט, הוא יכתוב עליו אם הלוח גדול מידי. ניתן לעקוף זאת על ידי זה שנכלול את הלוח הצבעים של הטקטס בלוח של הGIF. שימוש בצבעים שונים יאפשר לכם גם לשנות את הצבע של הטקסט, אם תרצו. הוראות אלו יהיו עבור [GIMP](https://gimp.org), אבל כל עורך תמונות בעל יכולת לערוך מחדש את לוח הצבעים של תמונה יעבוד.
1. פתחו את התמונה בGIMP ו-וודאו שהיא בגודל 256x192 פיקסלים
1. בתפריט העליון, בחרו ב`Image` -> `Mode` -> `Indexed...`
1. בחרו ב`Generate optimum palette` וקבעו את מספר הצבעים המקסימלי ל226 צבעים
1. בחרו דפוס dithering מתפריט ה`Color dithering`
    - תמונות ללא dithering בדרך כלל מתכווצות בצורה הכי טוב, אבל עם dithering נראות טובות יותר. נסו ותראו מה נראה הכי טוב לגודל המתאים
1. לחצו על `Convert`
1. בתפריט העליון, בחרו ב`File` -> `Export As...`, תנו לו שם עם הסיומת `.gif` ולחצו על `Export`
    - אם הוא נותן שגיאות כלשהן, לחצו על כפתור האישור
1. בחלון הקופץ הבא, בטלו את `GIF comment` ולחצו על `Export`
1. בדקו את גודל הקובץ המיוצא, אם הוא 15,472 בתים או פחות, דלגו לשלב 13
1. אם הGIF שלכם גדול מידי, ניתן לנסות לייעל את הגודל באמצעות [gifsicle](http://www.lcdf.org/gifsicle/) או באמצעות [ezgif.com](https://ezgif.com/optimize)
    - הוראות אלו ישתמשו בezgif מאחר והוא פשוט יותר, למרות שהוא אתר אינטרנט
1. פתחו את https://ezgif.com/optimize והעלו את הGIF שלכם
1. נסו רמות דחיסה שונות עד שתמצאו את הטוב ביותר שמביא את הגודל למתחת ל15,472 בתים (15.11 KiB), עדיפות למעט מתחת מאחר וGIMP עלול להגדיל את הגודל מעט
1. שמרו את הGIF לאחר אופטימיזציה ופתחו אותו בGIMP
1. בתפריט העליון, בחרו ב`Windows` -> `Dockable Dialogs` -> `Colormap`
1. שנו את ה`Foreground color` הנוכחי ל#080808 והוסיפו 14 צבעים חדשים עם כפתור ה`+`
    - אם לתמונה שלכם אין לפחות 133 צבעים, תצטרכו להמשיך להוסיף צבעים עד שהאינדקס האחרון הוא 146
1. לחצו על מקש ימיני בעכבר מעל מפת הצבעים ובחרו ב`Rearrange Colormap...`
1. סדרו את הצבעים מחדש כך שהם יתאימו למסומן באדום: (העמודה השניה והשלישית, החל מהשורה הרביעית)<br> ![לוח צבעים עם צבעי טקסט נכונים](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. השתמשו בבוחר הצבעים על מנת לגרום לצבעים החדשים שלכם להתאים לתמונה מעלה
1. בתפריט העליון, בחרו ב`File` -> `Export As...`, תנו לו שם עם הסיומת `.gif` ולחצו על `Export`
1. בחלון הקופץ הבא, וודאו ש`GIF comment` מבוטל ולחצו על `Export`
1. וודאו שהתמונה היא עדיין מתחת ל15,472 בתים, אם היא נהייתה גדולה מידי חזרו על התהליך משלב 10 באמצעות רמת דחיסה גבוהה יותר
1. סיימתם! עקבו אחר שלב ה[ההתקנה](#installing) למעלה על מנת להשתמש בתמונה!
