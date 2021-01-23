---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: Egyedi boot képernyők
description: How to use custom splash screens for TWiLight Menu++
---

Használhatsz egyedi GIF fájlokat arra, hogy egyedi indítóképernyőt jeleníts meg, amikor a TWiLight Menu++ boot-ol. A fájlok `splashtop.gif` és `splashbottom.gif` néven kell legyenek az `sd:/_nds/TWiLightMenu/extras`, mappában, és ezt követően be kell állítani a `DSi nyitókép` opciót `Egyéni`-re a TWiLight Menu++ beállításaiban.

A legtöbb GIF fájl egészen 256x192 felbontásig kell, hogy működjön, néhány kivétellel:
- Az 1MiB-nál nagyobb GIF fájlok (DSi mód) vagy 256KiB-nál nagyobbak (DS mód) nem játszódnak le teljes sebességgel, mert menet közben kerülnek kicsomagolásra
- A GIF-eknek 10MB-nál kisebbnek (DSi mód) vagy 2MB-nál kisebbnek (DS mód) kell lennie
- Ha mindkét GIF fájl örökké ismétlésre van állítva, csak 3 másodpercig kerülnek megmutatásra, ezért állíts ismétlés számlálót legalább az egyiken, hogy tudd vezérelni a megjelenés idejét
- A felhasználói bevitel flag támogatott, így állíts be egy hosszú várakozást a képkockán, ha szeretnél megjeleníteni egy indulóképernyőt és várni, mint az alapértelmezettnél
  - Csak az inputra váró a GIF kerül pauzálásra, így a másik folytani tudja az animációt
- Ha helyi színtáblákat használ az egész képkocka felülírása szükséges, mert az kicseréli a teljes képernyő palettáját, nem csak az aktuális képkockáét
- Interlace képek és szövegkeretek nem fognak működni
