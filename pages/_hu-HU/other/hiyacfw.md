---
lang: hu-HU
layout: wiki
section: other
title: hiyaCFW
description: Információ a hiyaCFW-ről
---

Információk a [hiyaCFW](https://github.com/RocketRobz/hiyaCFW)-hez, a világ első CFW-ről DSi-hez.

### Egyedi kezdőképernyők
A hiyaCFW-vel egyedi kezdőképernyőket használhatsz `.bmp` vagy `.gif` formátumban. A `sd:/hiya` mappába kell rakni őket `splashtop` néven a felső képernyőhöz és `splashbottom` néven az alsóhoz, a megfelelő fájl kiterjesztéssel, és ellenőrizni kell, hogy a kezdőképernyő bekapcsolt a konfigurációban. A képeknek nem kell egyforma formátumúaknak lenni, az egyik lehet BMP míg a másik GIF, a GIF-eknek magasabb a prioritása, mint a BMP-knek. Alább néhány részlet a követelményekről, hogy a képeid működjenek:

#### BMP
- 16-bit (RGBA 1555, RGB 1555, or RGB 565)
- 256 x 192 vagy kisebb

#### GIF
- Egyszerű válasz: A legtöbb 256 x 192 vagy kisebb GIF működni fog
- Lehetnek animáltak, de javasolt, hogy 1 Mb alatt maradjanak az ideális teljesítményhez, és 10 Mb alatt kell maradjanak
- Ha mindkettő végtelenül ismétlődik, akkor 3 másodpercig lesz lejátszva, egyébként addig jelennek meg, amíg mindkettő le nem játszódik
- Ha egy képkockánál beállított a felhasználói bevitel flag, addig fog várni, amíg a várakozási idő eltelik, vagy egy gomb megnyomásra kerül, bármelyik is van hamarabb
- Interlace-el és sima szöveg képkockák ***nem*** támogatottak
- A helyi szín táblák támogatottak, de kicserélik az egész palettát, beleértve a maradék képet a korábbi kockákból, így a képek amik használják ezeket jó eséllyel paletta problémások lesznek
