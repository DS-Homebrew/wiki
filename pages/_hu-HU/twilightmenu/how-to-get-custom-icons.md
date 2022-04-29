---
lang: hu-HU
layout: wiki
section: twilightmenu
category: egyéb
title: Hogyan szerezz egyéni ikonokat és bannereket
description: Egyedi ikonok és bannerek beállítása mappákhoz és játékokhoz a TWiLight Menu++-ban
---

### Egyéni játékikonok és bannerek
1. Töltsd le az ikont vagy bannert, amit be szeretnél állítani [a Skins oldalról](https://skins.ds-homebrew.com/icon/)
   - A bannerek `.bin` fájlkiterjesztéssel rendelkeznek, egyedi játékcímeket tartalmaznak, és az ikonok lehetnek állóképek vagy animáltak. Ezeket a fájlokat csak romokhoz lehet beállítani.
   - Az ikonok `.png` kiterjesztésűek, és csak állóképként jelennek meg. Ezek mind a mappákhoz, mind a romokhoz beállíthatók.
   - Bármilyen `.png` fájl használható, amely 4 bites színmélységű és 32x32 pixel vagy annál kisebb felbontású, nem csak a Skins oldalon találhatóak.
1. Rakd az ikon/banner fájlta a `sd:\_nds\TWiLightMenu\icons` mappába
   - Ha egy mappa egyéni ikonjáról van szó, nevezd át a fájlt úgy, hogy a neve megegyezzen annak a mappának a nevével, amelynél az ikont meg szeretnéd jeleníteni.
   - Ha ez egy egyéni ikon vagy banner egy romhoz, nevezd át a fájlt úgy, hogy a neve megegyezzen annak a rom-nak a nevével, amelynek az ikonját le akarod cserélni. Vedd figyelembe, hogy a névnek tartalmaznia kell a fájlkiterjesztést, pl. `ASME.nds.png` vagy `ASME.nds.bin` ha azt szeretnéd, hogy az ikon/banner megjelenjen az `ASME.nds` rom-nál. Ez nem csak a `.nds` romok esetében működik, hanem minden olyan rom esetében, amely a TWiLight Menu++-ból futtatható.
