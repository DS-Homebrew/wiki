---
lang: hu-HU
layout: wiki
section: gBARunner2
title: GBA BIOS infó
description: Információk a GBA BIOS-ról és a dumpolás módjáról
---

A GBARunner2-nek, hogy betöltse a címeket szüksége van egy GBA BIOS dumpra. A GBARunner2 frissebb build-jei (amik együtt érkeznek a TWiLight Menu++-szal) rendelkeznek [Normatt Open Source BIOS-ával](https://github.com/Normmatt/gba_bios) előre beépítve. Mivel nem egy egzakt másolat, egy hivatalos BIOS dumpja növeli a kompatibilitást. A következő metódusokkal dumpolhatsz egy hivatalos GBA BIOS-t.

### Dumpolási útmutatók

- [GBA/DS/DS Lite egy GBA Flashcard-dal vagy 3DS](bios-dump)
    - **Nem** lehetséges a GBA BIOS dumpolása egy DSi-n
- [Wii (nem Family verzió)/GameCube, GBA és link kábel dumper](https://github.com/FIX94/gba-link-cable-dumper)

A BIOS dumpolása után át kell azt nevezni `bios.bin`-nek, majd az `sd:/`, `sd:/gba/`, vagy az `sd:/_gba/` könyvtárba kell rakni, hogy a GBARunner2 tudja olvasni.

Ellenőrizheted, hogy a BIOS-od megfelelő dump összehasonlítva a következő ellenőrző összegekkel:

GBA/GBA SP/Game Boy Micro/Game Boy Player:
- **CRC-32:** `81977335`
- **MD5:** `a860e8c0b6d573d191e4ec7db1b1e4f6`{:.wrap}
- **SHA-1:** `300c20df6731a33952ded8c436f7f186d25d3492`{:.wrap}
- **SHA-256:** `fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570`{:.wrap}

DS/DS Lite/3DS család:
- **CRC-32:** `a6473709`
- **MD5:** `1c0d67db9e1208b95a1506b1688a0ad6`{:.wrap}
- **SHA-1:** `c11531d5261006810cdc954bd4bec0afe3187b35`{:.wrap}
- **SHA-256:** `782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b`{:.wrap}

Ha nem tudod, hogyan kaphatod meg egy fájl ellenőrző összegét, használj egy [online ellenőrzőösszeg-kalkulátort](https://emn178.github.io/online-tools/crc32_checksum.html).
