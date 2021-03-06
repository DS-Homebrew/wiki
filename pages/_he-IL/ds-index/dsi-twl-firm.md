---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: מידע בנושא הNintendo DSi והTWL_FIRM של הNintendo 3DS
---

### התקנת קושחה מותאמת אישית CFW
מאחר ורוב היתרונות של הקושחה המותאמת אישית הם עבור משפחת המערכות של הNintendo DSi והNintendo 3DS, זה מאפשר לכם לפתוח את כל האפשרויות של הקונסלות שלכם. התקנת קושחה מותאמת אישית היא יחסית קלה, וברוב המקרים כל מה שנדרש זה כרטיס (מיקרו) SD. יש לנו את המדריכים הטובים ביותר בשבילכם, עם הוראות שלב אחר שלב.

- [מדריך פריצה 3DS](https://3ds.hacks.guide)
  - פקודת Lightning: `mod 3ds`
  - פקודת Kuriisu: `guide 3ds`
- [מדריך פריצת DSi](https://dsi.cfw.guide)
  - פקודת Lightning: `mod dsi cfw`
  - פקודת Kuriisu: `guide dsi`

### מהירויות מעבד
הNintendo DS הגיע עם מעבד 67MHz ב2004. הNintendo DSi הגיע עם מעבד של 133MHz ב2009. רוב המשחקים בספריה של הNintendo DS נוצרו לפני שהNintendo DSi יצא, כתוצאה מכך המעבד היחיד שהיה להם זמין הוא 67MHz. חלק מהתוכנות קשרו את עצמם למהירות השעון הזאת, כתוצאה מכך הם לא יעבדו כראוי עם מהירות שעון גבוהה יותר. בפועל, רוב המשחקים יעבדו בצורה טובה יותר מהמקור עם מהירות השעון הגבוהה יותר.

לnds-bootstrap יש את האופציה למהירות שעון של TWL, אבל הוא לא ינסה להתאים את הרום לעבודה עם המהירות הגבוהה יותר. ההתאמה תלויה בתוכנה עצמה, ותוכנות שלא עובדות עם מהירות השעון הגבוהה יותר לא נובעות מבאג בצד של nds-bootstrap.

### תפריט מערכת של Nintendo DSi
תפריט המערכת של הNintendo DSi משתמש במספר שלם בגודל 32 ביט על מנת לקבוע כמה זכרון פנוי יש למערכת. כשמשתמשים במקור שהוא גדול מהמגבלה של מספר שלם בגודל 32 ביט, המספר זולג למספר שלילי, שמוביל לקריסה המציגה מסך שחור עם הכיתוב "An error has occurred".

הטווחים שגורמים לו לזלוג נקבע על ידי זוגות של שתיים. לדוגמה, מקום פנוי בנפח של 1-2 GB מותר, בעוד שנפח של 3-4 GB לא. מקום פנוי בנפח של 5-6 GB מותר, בעוד שנפח של 7-8 GB לא.

קריסה זו לא תקרה במידה ותפריט המערכת עולה מרכיב NAND אמיתי (מאחר והנפח המקסימלי שלו הוא 128MB), אבל מערכת הכוונה מחדש (כמו hiyaCFW) יגרום לזה לקרות. למזלנו, ניתן לתקן את הבאג הזה בקלות על ידי קבצי דמה בשביל להעביר את הסופר למספר חיובי. זה קורה אוטומטית עם hiyaCFW בגרסה העדכנית שלו.

בגרסה 1.4.0 חתימות RSA ברשימה הלבנה של הקלטות DS לא נבדקות. יש פירצה הקשורה לפגיעות ברשימה הלבנה של הפלאשקארדים בNintendo DSi המאפשרת לנו לקבל שליטה על המעבד ARM9. זה דורש מכשיר בגרסה 1.4.0 (פירצה זו נחסמה בגרסות עתידיות, ולא הייתה קיימת בגרסות ישנות יותר) ופלאשקארט עם רום ערוך.

### גישה & חסימה לSlot-1 בNintendo DSi
גישה לSlot-1 נחסמת כאשר מריצים תוכנות מתפריט המערכת, מלבד המקרים בהם התוכנה עצמה היא המפעיל של Slot-1 או תפריט הגדרות המערכת. על מנת להפעיל קלטות slot-1 שלא ניתן להפעיל באופן רגיל, תצטרכו או פירצה בתפריט הגדרות המערכת או להתקין את Unlaunch. ללא אחד מאלה, לא תוכלו להפעיל פלאשקארדים שלא ניתן להפעיל ולא תוכלו לחלץ רומים לכרטיס הSD שלכם.

הרשימה הלבנה של הפלאשקארדים נבדקת על ידי חתימות RSA שמוכלות במפתחות RSA בכל קושחה מלבד 1.4.0. זאת אומרת שאנשים יוכלים להכניס את הקלטות שלהם לרשימה הלבנה

לפני גרסה 1.4.0, הרשימה הלבנה הכילה 2 חלקים. ב1.4.0, הם הוסיפו חלק נוסף שיועד לחסום פלאשקארדים שעקפו את שני החלקים הראשונים. החלק השלישי טוען עד שמונה חלקים שונים של הרום ובודק אותם מול hash בשביל לבדוק אם הרום שונה בצורה כלשהיא. למרות זאת, כתוצאה מהעובדה ששכחו לשים בדיקות שפיות, אנחנו יכולים לגרום להצפה לכתובת הההפרעה או וקטור החריגים באמצעות ערך גדול מספיק. החשוב מכל, זה פועל על ARM7 (המכונה גם מעבד האבטחה) ולכן זה הופך את זה לפריצה הראשונה עבור מעבד ARM7. מאחר וזה קורה לפני הנעילה של רישומי הSCFG, ניתן יהיה להריץ הומברו מתקדם (לדוגמת מחלצי Slot-1 & מחלצי slot-1 חיצוניים)

לרוע המזל, הדרישות לחוצות. זה דורש גרסה 1.4.0 ופלאשקארד עם רום שעבר שינוי. בנוסף, הפירצה מעולם לא יצאה באופן רשמי, מאחר וUnlaunch פשוט יותר להתקנה ובעל פחות דרישות (נדרשת רק דרך לגשת להומברו) עם אותם היתרונות.

### המצלמה של Nintendo DSi
התוכנה Nintendo DSi Camera בעלת יכולת לצלם תמונות בפורמט JPEG ולשמור אתם או לזכרון המערכת או לכרטיס SD. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi Bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public ds homebrew that make use of RTCom is certain builds of gbarunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).