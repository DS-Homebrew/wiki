---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: RAM Disk létrehozása
description: Hogyan hozz létre RAM lemezeket a TWiLight Menu++-szal, régi DS homebrew használatához
---

Nem szükséges ezt végrehajtanod, ha flashcard-ot használsz.
{:.alert .alert-info}

A RAM disk létrehozásához töltsd le [ezt](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) az eszközt (kattints a `Download Software`-re), és kövesd a további lépéseket.

A lépések @Dakkon7-tól, módosította RocketRobz:

1. Futtasd a RAMDisk-et
1. Kattints **View** -> **Advanced** opciókra
1. A **Disk Size**-hoz, írj `12`-t a DSi-hez vagy `28`-at a 3DS-hez, a **Max 1023 MB** felett
1. Vedd ki a jelölést a **Create TEMP Directory** elől, ha be lenne már jelölve
1. Katints a **Load/Save** opcióra
1. Kattints a `Start RAMDisk`-re, és egy új ablak az .img fájlodra fog megjelenni
1. Rakj be bármilyen fájlt és/vagy mappát, amit a homebrew vár itt, és/vagy amit használni szeretnél
1. A RAMDisk programban, kattints a `Save Disk Image Now` opcióra
1. Mentsd a `romname.img` fájlt egy `ramdisks` nevű mappába az .nds fájl lokációra
1. Kattints a `Stop RAMDisk` opcióra, ha kész vagy
1. A TWiLight Menu++, nyisd meg a játékonkénti beállításokat a homebrew alkalmazásodhoz
1. Állítsd a RAM disk-et 0-ra
1. Indítsd el a homebrew-od, és az olvasni tudja majd a RAM disk-edet
