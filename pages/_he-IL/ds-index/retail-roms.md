---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: רומים רשמיים
description: מידע לגבי משחקי DS רשמיים
---

### Anti-Piracy (נוגד פיראטיות)
AP (Anti-Piracy) is a method used by developers to enforce legitimate purchases and prevent piracy. ניתן לעקוף את שיטה זו באמצעות התוכנה שטוענת את המשחק או דרך הROM עצמו.

- For nds-bootstrap, it can load an `.ips` file in order to circumvent said patches. This `.ips` file will be applied by nds-bootstrap in RAM so you can keep the ROM files intact. A pack of `.ips` files is included with TWiLight Menu++
- For Wood R4, these patches are included in the software itself, you will not need to modify the ROM itself

If there isn't an `.ips` file for your ROM or your software doesn't patch your ROM, you can try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/).

### Cloneboot
Cloneboot זה כאשר משחק שולח את הבינארים של ARM7 וARM9 שלו למכשיר אחר. זה בשימוש בDS Download עבור משחקים בעלי מולטפלייר עם קלטת אחת. אך לא כל המשחקים שיש להם מולטפלייר עם קלטת אחת משתמשים בcloneboot.

### קבצי שמירה
Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you have saves in a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php.

### Assembly
Assembly language is any low-level programming language with a strong connection between the language's instructions and the processor's instructions. On the DS, assembly code comes in the form of either ARM or THUMB instructions, THUMB instructions being a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instructions over the regular 32-bit instructions that ARM uses.

You can find more information on assembly instructions, as well as a lot more technical information for the DS and DSi, on [GBATEK](https://problemkaputt.de/gbatek.htm).

### DMA לקריאה מכרטיס
DMA (Direct Memory Access) is a more efficient way to read data than using the CPU. When data is being transferred code can still execute, so it is the preferred way of accessing data.

You can spot a game that uses DMA in no$gba by enabling the DMA log on ARM9. A DMA access to the card uses AF000001 as the third parameter.
- לדוגמה: `DMA2: 04100010 023C18C0 AF000001`

### צ'יטים של Action Replay
Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax lets you use cheats with real Game Cards from a flashcard. המנוע שבשימש כאן טוען את כל המאגר cheats.xml אל הRAM המוגבל של Nintendo DS ומנסה לנהל דברים משם. דבר זה יוצא מגבלה משמעותית על כמות הצ'יטים שתוכלו שיהיה לכם, מאחר וNitroHax לא יטעון קבצי cheats.xml גדולים מ2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
   - NitroHax3DS היא גרסה של NitroHax שרצה מהכרטיס SD של המערכת בDSi או ב3DS. הגרסה המקורית משתמשת בcheats.xml עם אותה מגבלה של 2.4 MB כמו של NitroHax המקורי, אבל יש גם גרסה שטוענת צ'יטים ממאגר usrcheat.dat ללא מגבלת גודל
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ קורא את `usrcheat.dat` ושולח את הערכים של הצ'יטים המאופשרים לקובץ אחר, שאותו nds-bootstrap קורא
   - מנוע הצ'יטים שבשימוש בnds-bootstrap מבוסס על זה שבNitroHax. מאחר וקובץ הצ'יטים כולל רק את הצ'יטים שהופעלו עבור הכותר המסויים הזה, יש מגבלה לכמות הצ'יטים שניתן להפעיל, לא מגבלה על גודל המאגר

For the most complete cheat database, using [DeadSkullzJr's NDS Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711) is recomended.

Cheat codes generally have types 0 through F, and here is an (unfinished) description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job
  - It is known that cheat codes of this type usually do not work with nds-bootstrap currently
- DeadSkullzJr is working on a more comprehensive list of cheat code descriptions, this section will link to that once it is ready

### Demonstration and Distribution Titles:
Demonstration (Demo) titles are different from their retail counterparts in various ways. The obvious indicator being that the title at hand is a demo of what the retail version will be like, essentially it's a sneak peek at what is coming in the future when the full retail release comes. In the case of the Nintendo DS line, these titles often are marked as "Not for Resale" on the title labels, each demo also sports a different title ID compared to their retail counterparts, on the back of the title's cartridge a "Not for Resale" sticker is also present. These titles are usually just kiosk demos in promotional places in stores and what not.

Distribution titles are a slightly different situation in most cases, however demos can also fit the distribution label for a few titles in the library. Most cases distribution titles are just retail versions of the title(s) that are for display only or come from a promotional packaging of some sort. You can see "Not for Resale" labeled on these types of titles like you can with the demonstration titles. These can sometimes also be used in kiosks for the sake of letting other players test out the title. However knowing that these are essentially the same as their retail counterparts in most cases, they tend to have an extra identifier in the title ID on the label.

Example ID: `DIS-NTR-NTRJ-JPN`

`DIS` - Distribution


### Title Labels
Looking at the bottom of the title label shows the title ID along with other bits of information, for this example the following ID will be used:

- NTR-NTRJ-**XXX**

**XXX** represents the following:

- AUS - Australia
- CHN - China
- DEN - Denmark
- EUR - Europe (Multilingual)
- EUU - Europe (Dutch or Italian Only)
- FRA - France
- GER - Germany
- HOL - Netherlands
- ITA - Italian
- JPN - Japan
- KOR - Korea
- NOE - Europe (German Only)
- NOR - Norway
- RUS - Russia
- SPA - Spain
- UKV - United Kingdom
- USA - United States

The last letter of the title ID itself represents the language of the title. Using the last example's title ID:

- NTR-NTR**X**-JPN

**X** represents the following:

- A - World (doesn't count as only one thing used it)
- C - Chinese (Simplified)
- D - German
- E - American English
- F - French
- G - Greek
- H - Dutch
- I - Italian
- J - Japanese
- K - Korean
- M - Swedish
- N - Norwegian
- O - English (DSi Enhanced)
- P - European Multilingual
- Q - Danish
- R - Russian
- S - Spanish
- T - English (DSi Enhanced)
- U - Australian English
- V - British English
- W - Other languages (Varies)
- X - Other languages (Varies)
- Y - Other languages (Varies)
- Z - Other languages (Varies)

In terms of the system identifiers:

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### DSi Enhanced:

Games with "DSi Enhanced" functionality are games that take advantage of some aspect of the DSi's hardware while still remaining compatible with the DS Phat/Lite. These games are marked as `TWL` but still say "Nintendo DS" instead of "Nintendo DSi" on the label.
