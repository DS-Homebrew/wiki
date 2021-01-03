---
lang: hu-HU
layout: wiki
section: twilightmenu
title: Telepítés (Flashcard)
category: Telepítés
---

### Telepítés
1. Töltsd le a `TWiLightMenu-Flashcard.7z` legfrissebb verzióját [a kiadások (Releases) oldalról](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Csomagold ki `TWiLightMenu-Flashcard.7z` fájlt
1. Másold az `_nds` mappát a flash kártyád microSD kártyájának gyökerébe
1. Másold az `BOOT.NDS` fájlt a flash kártyád microSD kártyájának gyökerébe
1. Másold a `roms` mappát a flash kártyád microSD kártyájának gyökerébe
1. Ha már van mentés adatod, mozgasd a `.sav` fájljaidat, ami a DS ROM lokáción találhatók egy új `saves` nevű mappába, ami szintén DS ROM lokáción található
1. ...
   - **DS Phat/lite felhasználók:** Ha a `BOOT.NDS` bootolása fehér képernyő fagyást okoz, akkor helyezz be egy DS Memory Expansion Pak-ot és próbáld újra
   - **DSi/3DS felhasználók:** Futtasd a TWLMenu++-t a konzol SD kártyáján és kapcsold be a `SCFG hozzáférést a Slot-1-ben` opciót
      - Ez lehetővé teszi, hogy használd a TWL óra sebességet és/vagy VRAM gyorsítást a flashcard játékaidon, valamint a hozzáférést a konzol SD kártyájához

### Játékok futtatása a flashcard firmware használatával
1. Csomagold ki a `Flashcart Loader/(a te flashcard-od)` mappát a flashcard-od microSD kártyája gyökerébe
   - Ha ezt már megcsináltad, folytasd a 3. lépéssel. Ha még nem, kövesd a flashcard-ok listája alatti lépéseket

1. Ezekhez a flashcard-okhoz:
   - R4i-SDHC
   - r4isdhc.com kártyák
   - r4isdhc.hk kártyák
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS

   Telepítsd az YSMenu-t [innen](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Ellenőrizd, hogy az `YSMenu.nds` és a `TTMenu` mappák (átnevezve `YSMenu`-ről, ha létezett) léteznek a flashcard-od microSD kártyájának gyökerében
1. Állítsd be a `Use nds-bootstrap (B4DS)` opciót `No`-ra, így a flashcard firmware kerül felhasználásra az nds-bootstrap helyett

### TWiLight Menu++ automatikus bootolása
1. Csomagold ki az `Autoboot/(a te flashcard-od)` mappát a flashcard-od microSD kártyája gyökerébe
   - Lépd át ezt, ha nem látod a flashcard-od
1. ...
   - **DS Phat/DS Lite felhasználók:** Menj a beállításokba a DS menüben és kapcsold be az auto-start-ot, így a flash kártyád fog bootolni induláskor
   - **DSi/3DS felhasználók:** Futtasd a TWLMenu++-t a konzol SD kártyáján és kapcsold be a `Auto-start Slot-1` opciót
