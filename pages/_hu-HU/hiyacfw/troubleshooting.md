---
lang: hu-HU
layout: wiki
section: hiyacfw
title: Hibaelhárítás
category: other
description: Hibaelhárítási információ a hiyaCFW-hez
---

### #-2435-8325
Ha a Nintendo DSi bootoláskor egy ilyen formátumú hibát mutat a # helyén egy számmal, akkor az az jelenti, hogy a második boot fázisban valami probléma van az SDNAND-oddal. Ezt általában javítja a [hiyaCFW újratelepítése](installing-hiyacfw).

### "An error has occurred"
Ha a Nintendo DSi Menü porblémát észlel általában azt az általános hibaüzenetet adja, aminek az okai lehetnek:

#### Szabad hely hiba
A Nintendo DSi Menünek van egy hibája, amikor ellenőrzi a szabad területet nagy méretű tároló eszközökön. Habár ez nem fordul elő az aktuális NAND-dal (mert a chip csak 256 MiB), ez előfordulhat SD kártya használatakor.

Hogy mi működik és mi nem hasonló a többi gibibájt méretnél is. Például, 0-2 GiB szabad tárhely működik, míg 2-4 GiB nem. Hasonló 4-6 GiB és 6-8 GiB esetén, egészen amíg el nem jutsz az SD kártyád méretéig.

A legutolsó hiyaCFW verzió létre tud hozni dummy fájlokat, a probléma megkerüléséhez, így legyél biztos abban, hogy letöltötted a legfrissebb verzióját a [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z)-nek és bemásoltad a `hiya.dsi` fájlt a "for SDNAND SD card" útvonalról az SD kártyád gyökerébe.

#### 39 cím felett
A Nintendo DSi Menü-nek 39 cím a korlátja. Ha ennél több van, törölj néhányat az `sd:/title` mappából vagy használd a [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest)-t az eltávolításukhoz.

#### Túl sok területet használ a DSiWare
Maximum 200 blokk (25MB) DSiWare lehet a `00030004` mappában. Ez a probléma megkerülhető, a rendszer alkalmazások [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest)-en keresztüli telepítésével.

#### Érvénytelen cím
Van néhány további dolog, amit figyelembe kell venned, amikor címeket adsz hozzá a hiyaCFW-hez:
- A játékkártya dumpok nem futtathatók [forwarder](forwarders) használata nélkül
- A homebrew-okat úgy kell fordítani modern eszközök használatával, hogy működjenek a Nintendo DSi Menüből
