---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: Irányítás
long_title: TWiLight Menu++ irányítás
description: A TWiLight Menu++ irányítása
---

#### Nintendo DSi, Nintendo 3DS, SEGA Saturn, és Homebrew Launcher témák
- <kbd>Bal</kbd> / <kbd>Jobb</kbd>: Játék / app kiválasztása
- <kbd class="face">A</kbd> / <kbd>START</kbd>: Játék / app indítása
- <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Bal</kbd> / <kbd>Jobb</kbd>: Oldalak lapozása
- (DSi/Saturn/HBL téma) <kbd>SELECT</kbd> + <kbd>Fel</kbd> / <kbd>Le</kbd> & és <kbd>SELECT</kbd> elengedése: Átkapcsolás az SD kártya és a flashcard között
- <kbd class="face">Y</kbd>: Játékonkénti beállítások
   - <kbd class="face">X</kbd>: Csalás menü
      - <kbd class="face">A</kbd>: Csalás be-/kikapcsolása
      - <kbd class="face">B</kbd>: Kilépés a csalás menüből
      - <kbd class="face">X</kbd>: Mentés és kilépés a csalás menüből
      - <kbd class="face">Y</kbd>: Csalás leírás megjelenítése
      - <kbd class="l">L</kbd>: Minden csalás kikapcsolása
- <kbd class="face">X</kbd>: Játék törlése/elrejtése
- (DSi/Saturn/HBLtéma) <kbd>SELECT</kbd>: SELECT menü vagy DS Classic Menü (Ahol a rendszer menü, TWLMenu++ beállítások és a GBA Mód érhető el)

#### R4 téma
- <kbd>Fel</kbd> / <kbd>Le</kbd>: Játék / app kiválasztása
- <kbd class="face">A</kbd>: Játék / app indítása
- <kbd class="l">L</kbd>: Váltás az SD kártya és a flashcard között
- <kbd class="face">Y</kbd>: Játékonkénti beállítások
   - <kbd class="face">X</kbd>: Csalás menü
      - <kbd class="face">A</kbd>: Csalás be-/kikapcsolása
      - <kbd class="face">B</kbd>: Kilépés a csalás menüből
      - <kbd class="face">X</kbd>: Mentés és kilépés a csalás menüből
      - <kbd class="face">Y</kbd>: Csalás leírás megjelenítése
      - <kbd class="l">L</kbd>: Minden csalás kikapcsolása

#### DS ROM-ok (az nds-bootstrap használatával)
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Up</kbd> + <kbd class="face">X</kbd> egy másodpercig: Képernyők váltása
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 3 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>: Open the in-game menu
   - RAM Viewer
      - <kbd>Up</kbd> / <kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd> / <kbd>Right</kbd>: Fast scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd> / <kbd>Down</kbd>: Increase / Decrease selected value
        - <kbd>Left</kbd> / <kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM szerkesztő
      - <kbd>Up</kbd> / <kbd>Down</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd> / <kbd>Down</kbd>: Increase / Decrease value by 1h
         - <kbd>Left</kbd> / <kbd>Right</kbd>: Increase / Decrease value by 10h
         - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd> / <kbd>Down</kbd>: Increase / Decrease selected value
        - <kbd>Left</kbd> / <kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address

#### Indítási gyorsbillentyűk
Ezeket a TWiLight Menu++ kezdőképernyőjén kell nyomni / rögtön a Nintendo DSi keződképernyő után.

- <kbd>SELECT</kbd>: Beálltások megnyitása
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Minden TWiLight Menu++ beálltás alaphelyzetbe álltása
- <kbd class="face">B</kbd>: Az utolsó futtatott ROM bootolása, vagy ellenkezője, attól függően, hogy az utolsó ROM-ra az autoboot engedélyezve volt-e
