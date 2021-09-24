---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: RAM Disk létrehozása
description: Hogyan hozz létre RAM lemezeket a TWiLight Menu++-szal, régi DS homebrew használatához
---

Néhány DS homebrew nem képes megfelelően hozzáférni az SD kártya fájlrendszeréhez. Emiatt szükség lehet egy önálló fájlrendszer betöltésére a RAM-ba, amely tartalmazza a homebrew-hez szükséges fájlokat, hogy az működjön.

Az itt használt szoftver Windows operációs rendszert igényel.
{:.alert .alert-info}

Nem szükséges ezt végrehajtanod, ha flashcard-ot használsz.
{:.alert .alert-info}

A RAM disk létrehozásához töltsd le [Dataram RAMDisk-et](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (kattints a `Download Software`-re), és kövesd az alábbi lépéseket.

A lépések Dakkon7-tól, Rocket Robz módosításaival:

1. Futtasd a RAMDisk-et
1. Kattints **View** -> **Advanced** opciókra
1. A **Disk Size**-hoz, írj `12`-t a DSi-hez vagy `28`-at a 3DS-hez, a **Max 1023 MB** felett
1. Vedd ki a jelölést a **Create TEMP Directory** elől, ha be lenne már jelölve
1. Katints a **Load/Save** opcióra
1. Kattints a `Start RAMDisk`-re, és egy új ablak az .img fájlodra fog megjelenni
1. Rakj be bármilyen fájlt és/vagy mappát, amit a homebrew vár itt, és/vagy amit használni szeretnél
1. A RAMDisk programban, kattints a `Save Disk Image Now` opcióra
1. Mentsd a `romname.img` fájlt egy `ramdisks` nevű mappába az .nds fájl lokációra. Ha nem létezik, hozd létre őket
1. Kattints a `Stop RAMDisk` opcióra, ha kész vagy
1. A TWiLight Menu++-ban nyisd meg a játékonkénti beállításokat a homebrew alkalmazásodhoz
1. Állítsd a RAM disk-et 0-ra
1. Indítsd el a homebrew-od, és az olvasni tudja majd a RAM disk-edet

Ha egy másik RAM disk slot-ot használnál egy önálló homebrew alkalmazáshoz, használd az `.img1` kiterjesztést a RAM disk slot 1-re és így tovább.
{:.alert .alert-info}
