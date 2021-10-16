---
lang: hu-HU
layout: wiki
section: nds-bootstrap
title: Irányítás
long_title: nds-bootstrap irányítás
description: Irányító gombok az nds-bootstrap-hez
---

Ezek nem érvényesek a DSiWare-ekre.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Up</kbd> + <kbd class="face">X</kbd> egy másodpercig: Képernyők váltása
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> 2 másodpercig: RAM dumpolása az `sd:/_nds/nds-bootstrap` útvonalra, mint `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>LE</kbd> + <kbd class="face">B</kbd> 2 másodpercig: Visszatérés a loader-be
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
- A visszatérés a loader-be elképzelhető, hogy nem működik néhány O3DS modellen és nem működik B4DS módban
- A játékonkénti menü megnyitására szolgáló billentyű kombináció módosítható a TWiLight Menu++ beállításokban
- A képernyőképek az `sd:/_nds/nds-bootstrap/screenshots.tar` fájlba kerülnek mentésre. Ez a fájl megnyitható egy archív kezelővel, mint például a [7-Zip](https://www.7-zip.org/)
- RAM dumpolás és képernyőképek készítése jelenleg nem lehetséges B4DS módban
