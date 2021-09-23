---
lang: he-IL
layout: wiki
section: gbarunner2
title: מידע לגבי הBIOS של הGBA
description: מידע לגבי הBIOS של הGBA וכיצד לחלץ אותו
---

על מנת שGBARunner2 יוכל להפעיל משחקים, נדרש עותק של הBIOS של הGBA. גרסאות חדשות יותר של GBARunner2 (שמגיעות עם הגרסה האחרונה של TWiLight Menu++) כוללות את [Normatt's Open Source BIOS](https://github.com/Normmatt/gba_bios). אבל מאחר וזה לא העתק מדויק, שימוש בעותק רשמי של הBIOS משפר את התאימות. ניתן לחלץ עותק רשמי של הGBA BIOS באמצעות אחת מהשיטות הבאות.

### מדריכי חילוץ

- [Wii (לא גרסת הfamily)/Gamecube + כבל לינק](https://github.com/FIX94/gba-link-cable-dumper)
- [3DS באמצעות רוב כותרי ה](https://glazedbelmont.github.io/gbabiosdump/#virtual-console-title-from-a-3ds) Virtual Console (לא כותרי GBA או כותרים שהם לא של נינטנדו (Game Gear))
- [GBA או DS שמן/לייט עם פלאשקארד של GBA](https://glazedbelmont.github.io/gbabiosdump/#gameboy-advance-sp-micro-ds-ds-lite)

לאחר חילוץ הBIOS, חייב לשנות את שמו ל`bios.bin` ולשים אותו ב`sd:/`, `sd:/gba/` או ב`sd:/_gba/` בשביל שGBARunner2 יוכל לקרוא אותו.

ניתן לוודא שהעותק הוא תקין על ידי השוואה שלו עם הchecksums הבאים:

**CRC32:** `81977335`

**MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`

**SHA1:** `300c20df6731a33952ded8c436f7f186d25d3492`

**SHA256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`

If you don't know how to obtain a file checksum, you can use an [online checksum calculator](https://emn178.github.io/online-tools/crc32_checksum.html).
