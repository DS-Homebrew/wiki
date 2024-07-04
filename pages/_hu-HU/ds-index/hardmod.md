---
lang: hu-HU
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: A Nintendo DSi hardmod-olása
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

A hardmodding könnyen károsíthatja a DSi-det. Ha a DSi-t próbálod unbrickelni, akkor először az [ntrboot-ot](ntrboot) kellene kipróbálnod.
{:.alert .alert-danger}

A Hardmodding az az amikor fizikailag hozzá forrasztasz a egy SD kártya adaptert a Nintendo DSi alaplapjához, hogy olvasható legyen számítógépről. Ez hasznos lehet a NAND mentés visszaállításához, a NAND megtekintéséhez a PC-den, stb...

### Nintendo DS
[![Eredeti DS alaplap az érintési pontokat jelölve](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

A Nintendo DSi/DSi XL (LL) hardmod-hoz a következőre lesz szükséged:
   - [Ceruza hegyű forrasztó](https://www.amazon.com/dp/B01N4571Q6)
   - [Nagyon vékony drót](https://www.amazon.com/dp/B01MXGNTA4), 28AWG vagy kisebb, preferált a 30AWG+
   - SD->microSD adapter
   - Egy SD kártya olvasó, ami képes eMMC chippet olvasni egy vezetékes adat-vonal módban. [Itt található egy működő](https://www.amazon.com/dp/B006T9B6R2)
   - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) és [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) ha Windowson vagy
   - Egy érvényes NAND mentés a DSi-ről, amit hardmoddolni szeretnél
   - Legyél komfortos azzal, hogy forrasz olyan forrasztási helyre, aminek az átmérője 0,5 mm-nél kisebb

#### DSi A oldal pin kiosztás
[![DSi A oldal pin kiosztás](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### DSi B oldal pin kiosztás
[![DSi B oldal pin kiosztás](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### DSi XL B oldal pin kiosztás
[![DSi XL B oldal pin kiosztás](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Az alaplapon található pontokat kell hozzáforrasztania a microSD kártya adapterhez
   - CMD a pin 2-höz
   - GND a pin 3-hoz és 6-hoz
   - CLK a pin 5-höz
   - DAT0 a pin 7-hez

#### Forrasztott microSD adapter példa
[![microSD példa](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Csatlakoztasd a microSD kártya adaptert a számítógépedhez
   - **FIGYELEM** - a Windows szertné majd formázni: **NE FORMÁZD**, mert visszafordíthatatlan károkat okozhat

#### A no$gba lábléc eltávolítása
Először el kell távolítanod a NOCASH láblécet a mentésről, amit flashelni fogsz a DSi-re. Ez megtehető a [hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest)-rel.

1. Töltsd le az operációs rendszerednek megfelelő verziót
1. Futtasd a scriptet, kiválasztva a NAND mentést, amit majd flashelni szeretnél a DSi-be
1. Kapcsolj NAND módra a gombbal, ami fájl útvonaltól balra található
1. Kattints a `Start`-ram hogy létrehozz egy NAND mentés a a no$gba lábléc nélkül

- Ha a szkript végzett, akkor létre kell jönni egy fájlnak a hosszú `-no-footer.bin` végződéssel abban a mappában, ahol a terminál megnyitásra került
   - Használd ezt a fájl, mint NAND képfájlt, amit flashelsz a DSi-re

{% capture tab-windows %}
1. Nyisd meg a Win32DiskImager-t
1. Kattints a mappa ikonon és tallózd az asztali géped. A szövegdobozba írd: `NAND_0.bin`. A típus kiválasztásakor válaszd az `All types *.*` opciót
1. Válaszd ki az eszközt, ami a DSi-hez tartozik és kattins a Read-ra
1. Ha kész, kattints a mappa ikonra és módosítsd a nevet `NAND_1.bin`-re és klikkelj a Read-re újra
1. Nyisd meg a HxD-t és húzd be mindkét fájlt az editorba. Menj a felső sávra, és kattints az "Analysis"-re, majd a "File compare"-re a lenyíló menüben, és kattints a "Compare"-re.
1. Választ a "compare both files" opciót, majd kattints az OK-ra, ha kész
   - Ha azt mondja, hogy "The chosen files are identical.", akkor jól csináltad, és tovább léphetsz a következő szakaszra
   - Ha nem mondja ezt, és egyik NAND sem 240MB körüli, akkor dumpold újra NAND_1/NAND_0-t
1. Nyisd meg a Win32DiskImager-t, kattints a mappa ikonra és válaszd ki a meglévő NAND mentésedet, amit korábban csináltál
1. Flasheld `Write` gombbal
1. Húzd ki az SD kártya adaptert, és próbáld meg bekapcsolni a DSi-t
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Derítsük ki, hogyaz SD kártya hova lett felcsatolva
   - Linux:
      1. Húzd ki az SD kártya adaptert
      1. Futtasd a `lsblk` parancsot a terminálban
      1. Dugd be az SD kártya adaptert
      1. Futtasd a `lsblk` parancsot újra
      1. Ez alkalommal egy új eszköznek kell megjelennie
         - Lehet, hogy `/dev/sdb`-nek hívják, jegyezd fel, hogyan hívják a *te* számítógépeden

   - macOS:
      1. Húzd ki az SD kártya adaptert
      1. Futtasd a `df` parancsot a terminálban
      1. Dugd be az SD kártya adaptert
      1. Futtasd a `df` parancsot újra
      1. Egy új eszköznek kell megjelennie a listában
         - Lehet, hogy `/dev/disk1s1`-nek hívják, jegyezd fel, hogyan hívják a *te* számítógépeden

1. A NAND dumpolása
   - Futtasd a következő parancsot a terminálban:
      - `cat {device-name} > nand0.bin`
      - Cseréld a `{device-name}` részt az SD kártya csatolási pontjára
      - Pl.: `cat /dev/sdb > nand0.bin`
      - Utána futtasd a következőt: `cat {device-name} > nand1.bin`


1. NAND dumpok összehasonlítása
   1. Futtasd a következő parancsot:
      - Linux: `md5sum nand0.bin nand1.bin`
      - macOS: `md5 -r nand0.bin nand1.bin`
   1. Ellenőrizd, hogy a generált hash-ek megegyeznek-e
   1. Ha nem, dumpold újra, a vezetékelést igazítva, ha szükséges
   1. Egészen addig csináld a NAND dumpolást, amíg a két hash nem egyezik

1. NAND flashelése
   1. Keresd meg a NAND mentés, amit a konzolról csináltál
   1. Futtasd a következő parancsot:
      - `cat {existing-nand-backup} > {device-name}`
      - Cseréld az `{existing-nand-backup}` részt a helyére és a nevére a NAND mentésednek
      - Cseréld a `{device-name}` részt az SD kártya csatolási pontjára

Ezen a ponton kihúzhatod az SD kártya adapter, és megpróbálhatod bekapcsolni a DSi-t. Ha minden rendben ment a DSi-nek be kell bootolnia abba az állapotba, amin a mentés készült!
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### NAND mentés flashelése
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
