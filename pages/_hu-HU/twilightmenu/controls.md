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
- <kbd>Bal</kbd>/<kbd>Jobb</kbd>: Játék / app kiválasztása
- <kbd class="face">A</kbd>/<kbd>START</kbd>: Játék / app indítása
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> vagy <kbd>SELECT</kbd> + <kbd>Bal</kbd> /<kbd>Jobb</kbd>: Oldalak lapozása
- (DSi/Saturn/HBL téma) <kbd>SELECT</kbd> + <kbd>Fel</kbd>/<kbd>Le</kbd> & és <kbd>SELECT</kbd> elengedése: Átkapcsolás az SD kártya és a flashcard között
- <kbd class="face">Y</kbd>: Játékonkénti beállítások
   - <kbd class="face">X</kbd>: Csalás menü
      - <kbd class="face">A</kbd>: Csalás be-/kikapcsolása
      - <kbd class="face">B</kbd>: Kilépés a csalás menüből
      - <kbd class="face">X</kbd>: Mentés és kilépés a csalás menüből
      - <kbd class="face">Y</kbd>: Csalás leírás megjelenítése
      - <kbd class="l">L</kbd>: Minden csalás kikapcsolása
- <kbd class="face">X</kbd>: Játék törlése/elrejtése
- (DSi/Saturn/HBL téma) <kbd>SELECT</kbd>: SELECT menü vagy DS Classic Menü (Ahol a rendszer menü, TWiLight Menu++ Beállítások és a GBA Mód érhető el)

#### R4 téma
- <kbd>Fel</kbd>/<kbd>Le</kbd>: Játék/app kiválasztása
- <kbd class="face">A</kbd>: Játék/app indítása
- <kbd class="l">L</kbd>: Váltás az SD kártya és a flashcard között
- <kbd class="face">Y</kbd>: Játékonkénti beállítások
   - <kbd class="face">X</kbd>: Csalás menü
      - <kbd class="face">A</kbd>: Csalás be-/kikapcsolása
      - <kbd class="face">B</kbd>: Kilépés a csalás menüből
      - <kbd class="face">X</kbd>: Mentés és kilépés a csalás menüből
      - <kbd class="face">Y</kbd>: Csalás leírás megjelenítése
      - <kbd class="l">L</kbd>: Minden csalás kikapcsolása

#### DS(i) ROM-ok (az nds-bootstrap használatával)
Ezek nem érvényesek a DSiWare-ekre.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Up</kbd> + <kbd class="face">X</kbd> egy másodpercig: Képernyők váltása
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> 2 másodpercig: RAM dumpolása az `sd:/_nds/nds-bootstrap` útvonalra, mint `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>LE</kbd> + <kbd class="face">B</kbd> 2 másodpercig: Visszatérés a TWiLight Menu++-ba
- <kbd class="l">L</kbd> + <kbd>LE</kbd> + <kbd>SELECT</kbd>: Játékonkénti menü megnyitása
   - <kbd class="r">R</kbd>: Előre egy képkockával
   - Képernyőkép
      - <kbd>Fel</kbd>/<kbd>Le</kbd>/<kbd>Bal</kbd>/<kbd>Jobb</kbd>: VRAM bank módosítása
      - <kbd class="face">A</kbd>: Képernyőkép mentése
      - <kbd class="face">B</kbd>: Vissza a játékonkénti menübe
   - RAM Nézegető
      - <kbd>Fel</kbd>/<kbd>Le</kbd>: Görgetés
      - <kbd>Bal</kbd>/<kbd>Jobb</kbd>: Gyorsgörgetés
      - <kbd class="r">R</kbd> + <kbd>Fel</kbd>/<kbd>Le</kbd>: Gyorsabb görgetés
      - <kbd class="r">R</kbd> + <kbd>Bal</kbd>/<kbd>Jobb</kbd>: Gyorsabb görgetés
      - <kbd class="face">A</kbd>: Belépés a RAM Szerkesztőbe
      - <kbd class="face">B</kbd>: Vissza a játékonkénti menübe
      - <kbd class="face">Y</kbd>: Adott memóriacímhez ugrás
        - <kbd>Fel</kbd>/<kbd>Le</kbd>: Kiválasztott érték növelése/csökkentése
        - <kbd>Bal</kbd>/<kbd>Jobb</kbd>: Érték választása
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Vissza a RAM Szerkesztőbe/Nézegetőbe a megadott címen
   - RAM Szerkesztő
      - <kbd>Fel</kbd>/<kbd>Le</kbd>/<kbd>Bal</kbd>/<kbd>Jobb</kbd>: Érték választása
      - <kbd class="face">A</kbd>: Kiválasztott érték módosítása
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Érték növelése/csökkentése 1h-val
         - <kbd>Bal</kbd>/<kbd>Jobb</kbd>: Érték növelése/csökkentése 10h-val
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Érték módosítás befejezése
      - <kbd class="face">B</kbd>: Vissza a RAM Nézegetőbe
      - <kbd class="face">Y</kbd>: Adott memóriacímhez ugrás
        - <kbd>Fel</kbd>/<kbd>Le</kbd>: Kiválasztott érték növelése/csökkentése
        - <kbd>Bal</kbd>/<kbd>Jobb</kbd>: Érték választása
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Vissza a RAM Szerkesztőbe/Nézegetőbe a megadott címen
- A visszatérés a TWiLight Menu++-ba elképzelhető, hogy nem működik néhány O3DS modellen
- A játékonkénti menü megnyitására szolgáló billentyű kombináció módosítható a TWiLight Menu++ beállításokban
- A képernyőképek az `sd:/_nds/nds-bootstrap/screenshots.tar` fájlba kerülnek mentésre. Ez a fájl megnyitható egy archív kezelővel, mint például a [7-Zip](https://www.7-zip.org/)
- RAM dumpolás és képernyőképek készítése jelenleg nem lehetséges B4DS módban

#### Indítási gyorsbillentyűk
Ezeket a TWiLight Menu++ kezdőképernyőjén kell nyomni / rögtön a Nintendo DSi keződképernyő után.

- <kbd>SELECT</kbd>: Beálltások megnyitása
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Minden TWiLight Menu++ beálltás alaphelyzetbe álltása
- <kbd class="face">B</kbd>: Utoljára futtatott ROM betöltése
