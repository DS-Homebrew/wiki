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
הNintendo DS הגיע עם מעבד 67 MHz ב2004. הNintendo DSi הגיע עם מעבד של 133 MHz ב2009. רוב המשחקים בספריה של הNintendo DS נוצרו לפני שהNintendo DSi יצא, כתוצאה מכך המעבד היחיד שהיה להם זמין הוא 67 MHz. חלק מהתוכנות קשרו את עצמם למהירות השעון הזאת, כתוצאה מכך הם לא יעבדו כראוי עם מהירות שעון גבוהה יותר. בפועל, רוב המשחקים יעבדו בצורה טובה יותר מהמקור עם מהירות השעון הגבוהה יותר.

לnds-bootstrap יש את האופציה למהירות שעון של TWL, אבל הוא לא ינסה להתאים את הרום לעבודה עם המהירות הגבוהה יותר. ההתאמה תלויה בתוכנה עצמה, ותוכנות שלא עובדות עם מהירות השעון הגבוהה יותר לא נובעות מבאג בצד של nds-bootstrap.

### Nintendo DSi Menu
In version 1.4.0, RSA signatures in the DS cart whitelist aren't verified. There is an exploit regarding a vulnerability in the Nintendo DSi flashcard whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see the [hiyaCFW troubleshooting page](/hiyacfw/troubleshooting#the-free-space-bug).

### גישה & חסימה לSlot-1 בNintendo DSi
Slot-1 access is blocked when launching applications from the system menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

The flashcard white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcards that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector / interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. Also, the exploit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

### המצלמה של Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public ds homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
