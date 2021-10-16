---
lang: hu-HU
layout: wiki
section: hiyaCFW
title: Eltávolítás
long_title: A hiyaCFW eltávolítása
description: Hogyan távolítsd el a hiyaCFW-t Nintendo DSi-ról
---

a hiyaCFW csak az SD-kártyán van jelen, és nincs jelen a NAND-on. A folytatás előtt mindenképpen készíts biztonsági mentést az SDNAND-ról minden olyan mentett adatról, amelyet meg szeretnél tartani. Ennek lépéseit a III. részében a [dsi.cfw.guide](https://dsi.cfw.guide)-nak [DSiWare mentések](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional) útmutatóban találod.

### Eltávolítás
1. Töröld a `hiya.dsi` fájlt az SD kártya gyökeréből
1. Töröld a `hiya` mappát
1. Töröld az `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket`, és a `tmp` mappákat

### Unlaunch beállítások módosítása

Ha a hiyaCFW automatikus indítására állítottad be az Unlaunch-ot, akkor most, hogy már nem használod valószínűleg szeretnéd megváltoztatni ezeket a beállításokat.

1. Helyezd be az SD kártyád és kapcsold be a Nintendo DSi konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez meg kell nyissa az Unlaunch Filemenu-t
1. Menj az `OPTIONS`-be, majd a `NO BUTTON` opcióhoz állítsd be a kívánt alkalmazást
   - Ha a rendszer NAND-ot szeretnéd automatikusan bootolni, válaszd a `Launcher` nevű alkalmazást
   - Ha a TWiLight Menu++ szeretnéd automatikusan bootolni, válaszd a `BOOT.NDS` nevű fájlt
1. Válaszd a `SAVE & EXIT` opciót
