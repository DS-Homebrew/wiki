---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: Box-art beszerzése
description: Hogyan szerezz be játék box art-ot/játékborítókat a TWiLight Menu++-ban
---

### Windows
1. Töltsd le a [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases) legfrissebb verzióját
1. CSomagold ki a `TwilightBoxart-Windows-UX.zip`-et és futtasd a `TwilightBoxart.exe` állományt
1. Kattints a `Detect SD` opcióra
   - Ha nem találja meg a megfelelő SD kártyát, kattints a `Browse...`-ra és válaszd ki a jót
1. Módosítsd a méret, keret, stb. opciókat, ahogy tetszik
1. Kattints a `Start`-ra
1. Ellenőrizd, hogy a box-art megjelenítése bekapcsolt a TWiLight Menu++ beállításaiban

### macOS/Linux
1. Töltsd le a [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases) legfrissebb verzióját
1. Csomagold ki a `.zip` fájlt
1. Nyisd meg a `TwilightBoxart.ini` fájlt egy szöveg editorral
1. Írd be az SD kártyád útvonalát az `SdRoot=` mögé, majd mentsd a fájlt
   - Ez macOS-en a `/Volumes/`, majd ezt követően az SD kártyád neve
1. Nyisd meg a terminált
1. A terminal-ban gépeld be, hogy `cd ` majd húzd bele a mappát, ami tartalmazza a `TwilightBoxart.CLI`-t a terminal-ba
1. Futtasd a `chmod +x TwilightBoxart.CLI` parancsot
1. Futtasd a `./TwilightBoxart.CLI` parancsot
1. Válaszolj `Yes`-t, ha az SD kártyád útvonalát helyesen mutatja
1. Ellenőrizd, hogy a box-art megjelenítése bekapcsolt a TWiLight Menu++ beállításaiban

### Kézzel
1. Töltsd le a png box-art csomagot a [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs) oldaláról
1. Csomagold ki a .png fájlokat a `sd:/_nds/TWiLightMenu/boxart` mappába
1. Ellenőrizd, hogy a box-art megjelenítése bekapcsolt a TWiLight Menu++ beállításaiban

**Saját box-art hozzáadása:** Rakd őket az `sd:/_nds/TWiLightMenu/boxart` mappába. A neve lehet a játék TID-e (pl. `ASME.png`), vagy a fájlneve (pl. `SM64DS.nds.png`). A formátuma `.png` kell legyen az ajánlott 128x115 felbontással, de maximum 208x143 lehet.

Egyesével is letölthető box-art a GameTDB-ről, az **S Covers (png)** kategória alatt.
