---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS szkinek létrehozása
description: Hogyan készíts egyedi DSi és 3DS szkineket a TWiLight Menu++-hoz
---

A TWiLight Menu++ szkin elkészítéséhez szükséged lesz egy olyan képszerkesztő programra, amely képes exportálni `.png` fájlokat és 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` fájlokat vagy `.png` fájlokat és 4 BPP `.bmp` fájlokat. Ideális esetben a képpaletták kézi átrendezésére is képesnek kell lennie. A [GIMP](https://www.gimp.org) az ajánlott, és ebben az útmutatóban ezt fogjuk használni, mivel minden szükséges dologra képes.

## 1. rész: Töltsd le a példákat
Ez első dolog emit le kell töltened a [példa szkinek](/assets/files/skin-examples.zip). Ezek alapként használhatók a szkinjeid számára, és már a megfelelő formátumban vannak, így ha később problémáid adódnának, ezekkel tudod összehasonlítani.

## 2. rész: A képek szerkesztése
Töltsd le és telepítsd a [GIMP](https://www.gimp.org)-et. Használhatsz más szerkesztőt is ha szeretnél, de ez az útmutató a GIMP-et használja.

Miután telepítetted, nyisd meg a GIMP-et és válaszd az `Ablakok` -> `Dokkolható párbeszédablakok` -> `Színtérkép` opciókat. Ez megnyitja a Színtérkép párbeszédpanelt, amely hasznos lehet palettás képek szerkesztésekor.

Most már megnyithatod a GIMP-ben azt a képet, amelyet szerkeszteni szeretnél, és folytathatod az alábbi szakaszokban, attól függően, hogy melyik mappában van az adott fájl. Ne feledd, hogy a TWiLight Menu válogatós a képek pontos formátumát illetően, és ez attól függően változik, hogy melyik mappában vannak, ezért győződj meg róla, hogy úgy exportálod, ahogy az adott szakasz mondja.

### Háttér textúrák (`background` mappa)
Ezek vagy PNG fájlok vagy 16 bites (`A1 R5 G5 B5` vagy `X1 R5 G5 B5`) BMP-fájlok lehetnek.

| Textúra            | Leírás                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| bottom             | Az alsó háttérkép, ha nem ikon felett állunk                                                      |
| bottom_bubble      | Az alsó háttérkép, ha ikon felett állunk                                                          |
| bottom_ds          | A 3DS témához, az alsó háttér texturája, amikor nem egy ikon felett áll, és amikor DS lite-on van |
| bottom_bubble_ds | A 3DS témához, az alsó háttér texturája, amikor egy ikon felett áll, és amikor DS lite-on van     |
| top                |                                                                                                   |

### Elem textúrák (`battery` mappa)
Ezeknek PNG fájloknak kell lenniük, bármilyen fájl működni fog, azonban csak 100%-os átlátszósággal fognak működni. Bármelyik pixelnek ami átlátszó az egyik ikonon, átlátszónak kell lenni mindegyiken, így megfelelően felülírásra kerül változáskor.

| Textúra            | Leírás                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| battery0           | Felváltva villog `battery1`-gyel együtt, ha az akkumulátor nagyon lemerült                                    |
| battery1           | 0-4 használt DSi módban                                                                                       |
| battery1purple     | A lila ikonok (purple) akkor használatosak, ha a `Power LED szín` a beállításokban `Lila` értékre van állítva |
| battery2           |                                                                                                               |
| battery2purple     |                                                                                                               |
| battery3           |                                                                                                               |
| battery3purple     |                                                                                                               |
| battery4           |                                                                                                               |
| battery4purple     |                                                                                                               |
| batterycharge      |                                                                                                               |
| batterychargeblink | Felváltva villog `batterycharge`-al együtt, ha az akkumulátor tölt                                            |
| batteryfull        | DS módban használt DSi-n/3DS-en                                                                               |
| batteryfullDS      | DS módban használt DS Phat-on/DS Lite-on                                                                      |
| batterylow         | DS módban használt                                                                                            |

### Palettás texturák (`grf` mappa)
Ezeknek 4 BPP (16 színű) BMP fájloknak kell lenniük.

Ezek beállításához a GIMP-ben, válaszd a `Kép` -> `Mód` ->`RGB`-t a színek módostásához, majd ha készen vagy a színek módosításával, válaszd a `Kép` -> `Mód` -> `Indexelt...` opciókat a palettásra visszakonvertálásához. Indexáltra váltáskor győződj meg arról, hogy `Optimális paletta generálása` be van jelölve, és `Maximális színszám` `16`.

**Megjegyzés:** A DSi témában egyes képek palettája a felhasználó profilszíne alapján felül van írva. Ha szeretnéd szerkeszteni ezek színeit, biztosítsd, hogy a `UserPalette` opció beállítása a `theme.ini` fájlban `0` legyen.

Az indexeltre való konvertálás után menj a Színtérkép párbeszédpanelre, és ellenőrizd, hogy az átlátszó szín (#FF00FF) a színtérképen a #0 szín. Ha nem az, akkor kattints jobb gombbal a színtérképen, és válaszd a `Színtérkép átrendezése...` parancsot majd mozgasd az átlátszó színt a színtérkép első színére, és nyomj az `OK`-ra.

Ha a végleges színtérképben 16-nál kevesebb szín van, nyomd meg a `+` gombot a Színtérkép párbeszédpanel alján, amíg nem lesz 16 szín.

Exportáláskor ajánlott bejelölni a `Ne írjon színtérinformációt` jelölőnégyzetet a `Kompatibilitási beállítások` legördülő ablak alatt.

| Textúra       | Leírás                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------- |
| bips          | A gördítősáv alján látható pontok (DSi téma)                                                  |
| box           | Doboz textúrája, ami tartalmaz egyaránt teli és üres textúrákat (DSi téma)                    |
| box_empty     | Üres doboz textúra (3DS téma)                                                                 |
| box_full      | Doboz ikonnal textúra (3DS téma)                                                              |
| brace         | A kapocs textúra ami az első és utolsó ikon után jelenik meg (DSi téma)                       |
| bubble        | Az alsó darabja a buboréknak, ami az induló keret vagy az ikon doboz felé rajzolt             |
| button_arrow  | A nyilak textúrái mindkét oldalán az alsó gördítő sávnak (DSi téma)                           |
| cornerbutton  | A gombok, amik megjelennek a SELECT menüben (DSi téma) (A név egy régi felhasználáson alapul) |
| cursor        | A keret animáció kockák, amik a kiválasztott ikont jelzik (3DS téma)                          |
| dialogbox     | A lecsúszó párbeszéd ablak háttere                                                            |
| folder        | A mappák ikonja                                                                               |
| icon_a26      | Az Atari 2600 játékok ikonja                                                                  |
| icon_gb       | A Game Boy játékok ikonja                                                                     |
| icon_gba      | A GBA játékok ikonja (minden téma) és a felső GBARunner2 indító ikon (3DS téma)               |
| icon_gbamode  | A natív GBA Mód ikonja                                                                        |
| icon_gg       | A Game Gear játékok ikonja                                                                    |
| icon_int      | Az Intellivision játékok ikonja                                                               |
| icon_m5       | A Sord M5 játékok ikonja                                                                      |
| icon_manual   | A kézikönyv ikonja                                                                            |
| icon_md       | A Mega Drive játékok ikonja                                                                   |
| icon_nes      | Az NES játékok ikonja                                                                         |
| icon_ngp      | A Neo Geo Pocket játékok ikonja                                                               |
| icon_pce      | A PC Engine/TurboGrafx-16 játékok ikonja                                                      |
| icon_plg      | A DSTWO bővítmények ikonja                                                                    |
| icon_settings | A Nintendo DSi Settings ikonja                                                                |
| icon_sg       | A Sega SG-1000 játékok ikonja                                                                 |
| icon_sms      | A Sega Master System játékok ikonja                                                           |
| icon_snes     | Az SNES játékok ikonja                                                                        |
| icon_unk      | Megjelenített ikon, ha egy játéknak nincs ikonja                                              |
| icon_ws       | A WonderSwan játékok ikonja                                                                   |
| launch_dot    | A megjelenített pontok, amikor egy játék indul (DSi téma)                                     |
| moving_arrow  | A megjelenített nyíl, amikor egy játék mozgatásra kerül (DSi téma)                            |
| progress      | Töltési animáció 8 képkockával                                                                |
| scroll_window | A görgetősávnak az a része, amely a látható ikonokat jelzi                                    |
| small_cart    | Az ikonok amik megjelennek fent (3DS téma) és a SELECT menüben (DSi téma)                     |
| start_border  | A keret animáció kockák, amik a kiválasztott ikont jelzik (DSi téma)                          |
| start_text    | Az indító kereten megjelenített szöveg (DSi téma)                                             |
| wirelessicons | A megjelenített ikonok, amik azt mutatják, hogy a játéknak van vezetéknélküli támogatása      |

### DS Classic Menu textúrák (`quickmenu` mappa)
Ezeknek PNG fájloknak kell lenniük.

| Textúra    | Leírás                                              |
| ---------- | --------------------------------------------------- |
| bottombg   | Háttér az alsó képernyőre                           |
| phat_topbg | Háttér a felső képernyőre DS Phat-on                |
| topbg      | Háttér a felső képernyőre bármilyen más DS modellen |

### UI texturák (`ui` mappa)
Ezeknek PNG fájloknak kell lenniük, bármilyen fájl működni fog, azonban csak 100%-os átlátszósággal fognak működni. Bármelyik pixelnek ami átlátszó az egyik textúrán, átlátszónak kell lenni mindegyik kapcsolódó textúrán, így megfelelően felülírásra kerül változáskor.

| Textúra          | Leírás                                                  |
| ---------------- | ------------------------------------------------------- |
| date_time_font | A dátum és idő megjelenítésére használt karakterkészlet |
| Lshoulder        | A bal váll                                              |
| Lshoulder_greyed | A bal váll, ha már nincs további oldal tovább balra     |
| Rshoulder        | A jobb váll                                             |
| Rshoulder_greyed | A jobb váll, ha már nincs további oldal tovább jobbra   |

### Videó texturák (`video` mappa)
Csak a 3DS témában használt, a `3dsRotatingCubes.rvid` egy Rocket Video fájl. További információkért a videók rvid fájllá konvertálásáról, olvasd el [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) cikket a Vid2RVID wiki-ben. Ha nem szeretnéd, hogy megjelenjen, egyszerűen csak töröld.

### Hangerő textúrák (`volume` mappa)
Ezeknek PNG fájloknak kell lenniük, bármilyen fájl működni fog, azonban csak 100%-os átlátszóság fog működni. Bármelyik pixelnek ami átlátszó az egyik textúrán, átlátszónak kell lenni mindegyiken, így megfelelően felülírásra kerül változáskor.

| Textúra | Leírás                                   |
| ------- | ---------------------------------------- |
| volume0 | Ez a hangerő csak DSi módban jelenik meg |
| volume1 | 0 némított, 4 teljes hangerő             |
| volume2 |                                          |
| volume3 |                                          |
| volume4 |                                          |

## Téma konfiguráció (`theme.ini` fájl)
Különböző opciókat konfigurálhatsz arról, hogy hogyan kerüljön rajzolásra a téma a `theme.ini` fájlban, hogy nagyobb sprite-okat és texturákat használhass. Az igaz/hamis opciók esetében `0` a hamis és `1` az igaz. Az üres alapértelmezett értékkel rendelkező beállítások egy téma esetében nem használatosak az adott témában.

| Érték                    | Leírás                                                                                                              | Alapértelmezés (3DS) | Alapértelmezés (DSi) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| `StartBorderRenderY`     | A kezdeti Y pozíciója a keret indítónak                                                                             | 92                   | 81                   |
| `StartBorderSpriteW`     | A keretindító sprite szélessége. Fontos megjegyezni, hogy a keret indító textúra pontosan a fele a teljes keretnek. | 32                   | 32                   |
| `StartBorderSpriteH`     | A keret indító sprite magassága                                                                                     | 64                   | 80                   |
| `StartTextRenderY`       | The initial Y position of the Start text                                                                            | 143                  | 143                  |
| `BubbleTipRenderY`       | Az Y pozíciója a buborékcsúcsnak, ami a kezdő keret felé rajzolt                                                    | 98                   | 80                   |
| `BubbleTipRenderX`       | Az X pozíciója a buborékcsúcsnak, ami a kezdő keret felé rajzolt                                                    | 125                  | 122                  |
| `BubbleTipSpriteW`       | A buborékcsúcs sprite szélessége                                                                                    | 7                    | 11                   |
| `BubbleTipSpriteH`       | A buborékcsúcs sprite magassága                                                                                     | 7                    | 8                    |
| `TitleboxRenderY`        | A kezdeti Y pozíciója a cím szövegdobozának                                                                         | 96                   | 85                   |
| `TitleboxTextY`          | A kezdeti Y pozíciója a cím szövegnek                                                                               | 55                   | 30                   |
| `TitleboxTextW`          | A maximum szélessége a cím szövegnek                                                                                | 200                  | 240                  |
| `MacroTitleboxTextY`     | A kezdeti Y pozíciója a cím szövegnek makro módban                                                                  |                      | 40                   |
| `MacroTitleboxTextW`     | A maximum szélessége a cím szövegnek makró módban                                                                   |                      | 224                  |
| `TitleboxTextLarge`      | Használja-e a nagy betűtípust a cím szöveghez                                                                       | 0                    | 1                    |
| `TitleboxMaxLines`       | A maximum sorok száma a cím megjelenítésekor                                                                        | 3                    | 4                    |
| `VolumeRenderX`          | Az X pozíciója a hangerő ikonnak a felső képernyőn                                                                  | 4                    | 4                    |
| `VolumeRenderY`          | Az Y pozíciója a hangerő ikonnak a felső képernyőn                                                                  | 5                    | 5                    |
| `ShoulderLRenderY`       | Az Y pozíciója bal vállnak a felső képernyőn                                                                        | 172                  | 172                  |
| `ShoulderLRenderX`       | Az X pozíciója bal vállnak a felső képernyőn                                                                        | 0                    | 0                    |
| `ShoulderRRenderY`       | Az Y pozíciója jobb vállnak a felső képernyőn                                                                       | 172                  | 172                  |
| `ShoulderRRenderX`       | Az X pozíciója jobb vállnak a felső képernyőn                                                                       | 178                  | 178                  |
| `BatteryRenderY`         | Az Y pozíciója az elem ikonnak a felső képernyőn                                                                    | 5                    | 5                    |
| `BatteryRenderX`         | Az X pozíciója az elem ikonnak a felső képernyőn                                                                    | 235                  | 235                  |
| `FontPalette1`           | A betűtípus átlátszó színe, alapértelmezett betűtípusok esetében nem használt                                       | 0x0000               | 0x0000               |
| `FontPalette2`           | A betűtípus színei, használd [ezt az oldalt](http://www.conradshome.com/html2bgr15/) a konvertáláshoz               | 0xDEF7               | 0xDEF7               |
| `FontPalette3`           |                                                                                                                     | 0xC631               | 0xC631               |
| `FontPalette4`           |                                                                                                                     | 0xA108               | 0xA108               |
| `StartTextUserPalette`   | Használja-e a DS profil színt a kezdő szöveg palettájához                                                           |                      | 1                    |
| `StartBorderUserPalette` | Használja-e a DS profil színt a kezdő keret palettájához                                                            |                      | 1                    |
| `ButtonArrowUserPalette` | Használja-e a DS profil színt a nyíl gombok palettájához, amik a képernyő alján kerülnek megjelenítésre             |                      | 1                    |
| `MovingArrowUserPalette` | Használja-e a DS profil színt a nyilak palettájához, amik ikonok mozgatásakor kerülnek megjelenítésre               |                      | 1                    |
| `LaunchDotsUserPalette`  | Használja-e a DS profil színt az indítási pontok palettájához                                                       |                      | 1                    |
| `DialogBoxUserPalette`   | Használja-e a DS profil színt a párbeszéd ablak palettájához                                                        |                      | 1                    |
| `RenderPhoto`            | Kerüljön vagy ne kerüljön fénykép rajzolásra a felső képernyőn                                                      | 0                    | 1                    |
| `RotatingCubesRenderY`   | A forgó kockák rajzolásának Y pozíciója a felső képernyőn                                                           | 78                   |                      |

## 3. rész: Hozzáadás a TWiLight Menu++-hoz
Ha szerkesztettél néhány grafikát és szeretnéd tesztelni a szkinjeidet, csak másold a szkin foldert (a mappát, ami a `background`, `battery`, és egyéb mappákat tartalmazza) az `sd:/_nds/TWiLightMenu/3dsmenu/themes/` vagy az `sd:/_nds/TWiLightMenu/dsimenu/themes/` mappába attól függően, hogy 3DS-hez vagy a DSi-hez tartoznak.

## 4. rész: Szkinjeid megosztása
Ha elkészültél a szkinedde, megoszthatod a közösséggel egy Pull Request létrehozásával a [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository-ban és egy `.7z` fájlban hozzáadással. Ha nem ismered a git használatát, akkor egyszerűen létrehozhatsz egy issue-t a repositoryban a skined zip fájljával, és kérheted a hozzáadását.

## Egyedi háttér zene és hangok
A DSi és a 3DS témák támogatják továbbá az egyedi zenét. Lásd a [DSi/3DS szkinek - Egyedi hangeffektusok](custom-dsi-3ds-sfx) fejezetet a részletekért.
