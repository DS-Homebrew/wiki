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
Töltsd le és telepítsd a [GIMP](https://www.gimp.org)-et
- Más képszerkesztő programok, például a Photoshop is működhetnek, de ebben az útmutatóban a GIMP-et fogjuk használni

Miután telepítetted, nyisd meg a GIMP-et és válaszd az `Ablakok` -> `Dokkolható párbeszédablakok` -> `Színtérkép` opciókat. Ez megnyitja a Színtérkép párbeszédpanelt, amely hasznos lehet palettás képek szerkesztésekor.

Most már megnyithatod a GIMP-ben azt a képet, amelyet szerkeszteni szeretnél, és folytathatod az alábbi szakaszokban, attól függően, hogy melyik mappában van az adott fájl. Ne feledd, hogy a TWiLight Menu válogatós a képek pontos formátumát illetően, és ez attól függően változik, hogy melyik mappában vannak, ezért győződj meg róla, hogy úgy exportálod, ahogy az adott szakasz mondja.

### Háttér textúrák (`background` mappa)
Ezek vagy PNG fájlok vagy 16 bites (`A1 R5 G5 B5` vagy `X1 R5 G5 B5`) BMP-fájlok lehetnek.
- Ha BMP-fájlokat használsz, akkor az exportálás során a Speciális beállítások menüpontban 16 bitesre állíthatod őket. Ezt minden egyes alkalommal meg kell tenned, amikor BMP-ként exportálsz

| Textúra               | Leírás                                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| top                   | A felső képernyő háttér textúrája                                                                              |
| bottom                | Az alsó háttér textúra, ha nem ikon felett állsz                                                               |
| bottom_ds             | A 3DS téma esetén, az alsó háttér texturája, amikor nem egy ikon felett állsz és DS Phat/Lite van használatban |
| bottom_macro          | A DSi téma esetén, a háttér textúrája, amikor nem egy ikon felett állsz és Macro mód van használatban          |
| bottom_bubble         | Az alsó háttér textúra, ha ikon felett állsz                                                                   |
| bottom_bubble_ds    | A 3DS téma esetén, az alsó háttér texturája, amikor egy ikon felett állsz, DS Phat/Lite-ot van használatban    |
| bottom_bubble_macro | A DSi téma esetén, a háttér textúrája, amikor egy ikon fölé állsz és a Macro mód van használatban              |
| bottom_moving         | A DSi téma esetén, az alsó háttér textúrája, amikor egy ikont mozgatsz                                         |
| bottom_moving_macro | A DSi téma esetén, a háttér textúrája, amikor egy ikont mozgatsz és Macro mód van használatban                 |

### Elem textúrák (`battery` mappa)
Ezeknek PNG fájloknak kell lenniük. Az átlátszóság támogatott, azonban csak a 100%-os átlátszóság fog működni.

| Textúra            | Leírás/Megjegyzések                                                                                           |
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

Ezek beállításához a GIMP-ben válaszd a `Kép` -> `Mód` ->`RGB`-t a színek módostásához, majd ha készen vagy a színek módosításával, válaszd a `Kép` -> `Mód` -> `Indexelt...` opciókat a palettásra visszakonvertálásához. Indexáltra váltáskor győződj meg arról, hogy `Optimális paletta generálása` be van jelölve, és `Maximális színszám` `16`.

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
| bubble        | Az alsó darabja a buboréknak, ami az Start ikon keret vagy az ikon doboz felé rajzolt         |
| button_arrow  | A nyilak textúrái mindkét oldalán az alsó gördítő sávnak (DSi téma)                           |
| cornerbutton  | A gombok, amik megjelennek a SELECT menüben (DSi téma) (A név egy régi felhasználáson alapul) |
| cursor        | A keret animáció kockák, amik a kiválasztott ikont jelzik (3DS téma)                          |
| dialogbox     | A lecsúszó párbeszéd ablak háttere                                                            |
| folder        | A mappák ikonja                                                                               |
| icon_a26      | Az Atari 2600 játékok ikonja                                                                  |
| icon_col      | A Colecovision játékok ikonja                                                                 |
| icon_gb       | A Game Boy játékok ikonja                                                                     |
| icon_gba      | A GBA játékok ikonja                                                                          |
| icon_gbamode  | A natív GBA Mód ikonja                                                                        |
| icon_gg       | A Game Gear játékok ikonja                                                                    |
| icon_img      | A BMP, GIF és PNG képek ikonja                                                                |
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
| start_border  | A keret animáció képkockák, amik a kiválasztott ikont jelzik (DSi téma)                       |
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
Ezeknek PNG fájloknak kell lenniük. Az átlátszóság támogatott, azonban csak a 100%-os átlátszóság fog működni. Bármelyik pixelnek ami átlátszó az egyik textúrán, átlátszónak kell lenni mindegyiken, így megfelelően felülírásra kerül változáskor.

| Textúra          | Leírás                                                |
| ---------------- | ----------------------------------------------------- |
| Lshoulder        | A bal váll                                            |
| Lshoulder_greyed | A bal váll, ha már nincs további oldal tovább balra   |
| Rshoulder        | A jobb váll                                           |
| Rshoulder_greyed | A jobb váll, ha már nincs további oldal tovább jobbra |

### Videó texturák (`video` mappa)
Csak a 3DS témában használt, a `3dsRotatingCubes.rvid` egy Rocket Video fájl. További információkért a videók rvid fájllá konvertálásáról, olvasd el [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) cikket a Vid2RVID wiki-ben. Ha nem szeretnéd, hogy megjelenjen, egyszerűen csak töröld.

### Hangerő textúrák (`volume` mappa)
Ez a hangerő textúrák csak DSi módban jelenik meg.

Ezeknek PNG fájloknak kell lenniük. Az átlátszóság támogatott, azonban csak a 100%-os átlátszóság fog működni.


| Textúra | Leírás/Megjegyzések          |
| ------- | ---------------------------- |
| volume0 | 0 némított, 4 teljes hangerő |
| volume1 |                              |
| volume2 |                              |
| volume3 |                              |
| volume4 |                              |

## Téma konfiguráció (`theme.ini` fájl)
Különböző opciókat konfigurálhatsz arról, hogy hogyan kerüljön rajzolásra a téma a `theme.ini` fájlban, hogy nagyobb grafikákat és más elrendezésket használhass. Az igaz/hamis opciók esetében `0` a hamis és `1` az igaz. Az üres alapértelmezett értékkel rendelkező beállítások egy téma esetében nem használatosak az adott témában.

| Érték                      | Leírás/Megjegyzések                                                                                                                                             | Alapértelmezés (3DS) | Alapértelmezés (DSi) |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| `StartBorderRenderY`       | A kezdeti Y pozíciója a Start ikon keretnek                                                                                                                     | 92                   | 81                   |
| `StartBorderSpriteW`       | A Start ikon keret sprite szélessége. Fontos megjegyezni, hogy a Start ikon keret textúra pontosan a fele a teljes keretnek                                     | 32                   | 32                   |
| `StartBorderSpriteH`       | A Start ikon keret sprite magassága                                                                                                                             | 64                   | 80                   |
| `StartTextRenderY`         | A kezdeti Y pozíciója a Start ikon szövegnek                                                                                                                    | 143                  | 143                  |
| `BubbleTipRenderX`         | Az X pozíciója a buborékcsúcsnak, ami a kezdő keret felé rajzolt                                                                                                | 125                  | 122                  |
| `BubbleTipRenderY`         | Az Y pozíciója a buborékcsúcsnak, ami a kezdő keret felé rajzolt                                                                                                | 98                   | 80                   |
| `BubbleTipSpriteW`         | A buborékcsúcs sprite szélessége                                                                                                                                | 7                    | 11                   |
| `BubbleTipSpriteH`         | A buborékcsúcs sprite magassága                                                                                                                                 | 7                    | 8                    |
| `TitleboxRenderY`          | A kezdeti Y pozíciója a cím szövegdobozának                                                                                                                     | 96                   | 85                   |
| `TitleboxTextY`            | A kezdeti Y pozíciója a cím szövegnek                                                                                                                           | 55                   | 30                   |
| `TitleboxTextW`            | A maximum szélessége a cím szövegnek                                                                                                                            | 200                  | 240                  |
| `TitleboxTextLarge`        | Használja-e a nagy betűtípust a cím szöveghez                                                                                                                   | 0                    | 1                    |
| `TitleboxMaxLines`         | A maximum sorok száma a cím megjelenítésekor                                                                                                                    | 3                    | 4                    |
| `VolumeRenderX`            | Az X pozíciója a hangerő ikonnak a felső képernyőn                                                                                                              | 4                    | 4                    |
| `VolumeRenderY`            | Az Y pozíciója a hangerő ikonnak a felső képernyőn                                                                                                              | 5                    | 5                    |
| `ShoulderLRenderX`         | Az X pozíciója bal vállnak a felső képernyőn                                                                                                                    | 0                    | 0                    |
| `ShoulderLRenderY`         | Az Y pozíciója bal vállnak a felső képernyőn                                                                                                                    | 172                  | 172                  |
| `ShoulderRRenderX`         | Az X pozíciója jobb vállnak a felső képernyőn                                                                                                                   | 178                  | 178                  |
| `ShoulderRRenderY`         | Az Y pozíciója jobb vállnak a felső képernyőn                                                                                                                   | 172                  | 172                  |
| `BatteryRenderX`           | Az X pozíciója az elem ikonnak a felső képernyőn                                                                                                                | 235                  | 235                  |
| `BatteryRenderY`           | Az Y pozíciója az elem ikonnak a felső képernyőn                                                                                                                | 5                    | 5                    |
| `UsernameRenderX`          | Az X pozíció a felső képernyőn, ahova a felhasználónév kerüljön kirajzolásra                                                                                    | 28                   | 28                   |
| `UsernameRenderY`          | Az Y pozíció a felső képernyőn, ahova a felhasználónév kerüljön kirajzolásra                                                                                    | 15                   | 15                   |
| `UsernameRenderXDS`        | Az X pozíció a felső képernyőn, ahova a felhasználónév kerüljön kirajzolásra, DS Phat/Lite használata esetén                                                    | 4                    | 4                    |
| `DateRenderX`              | Az X pozíció a felső képernyőn, ahova a dátum kerüljön kirajzolásra                                                                                             | 162                  | 162                  |
| `DateRenderY`              | Az Y pozíció a felső képernyőn, ahova a dátum kerüljön kirajzolásra                                                                                             | 7                    | 7                    |
| `TimeRenderX`              | Az X pozíció a felső képernyőn, ahova az idő kerüljön kirajzolásra                                                                                              | 200                  | 200                  |
| `TimeRenderY`              | Az Y pozíció a felső képernyőn, ahova az idő kerüljön kirajzolásra                                                                                              | 7                    | 7                    |
| `PurpleBatteryAvailable`   | Használja-e vagy sem a lila elem ikonokat, amikor a `Power LED szín` be lett állítva `Lila` színre a beállításokban                                             | 1                    | 1                    |
| `FontPalette1`             | A betűtípus átlátszó színe, alapértelmezett betűtípusok esetében nem használt                                                                                   | 0x0000               | 0x0000               |
| `FontPalette2`             | A betűtípus színei, használd [ezt az oldalt](http://www.conradshome.com/html2bgr15/) a konvertáláshoz                                                           | 0xDEF7               | 0xDEF7               |
| `FontPalette3`             |                                                                                                                                                                 | 0xC631               | 0xC631               |
| `FontPalette4`             |                                                                                                                                                                 | 0xA108               | 0xA108               |
| `FontPaletteDateTime1`     | A felülíró átlátszó színe a betűtípusnak a dátumoz és időhöz                                                                                                    | 0x0000               | 0x0000               |
| `FontPaletteDateTime2`     | A felülíró színe a betűtípusnak a dátumhoz és időhöz                                                                                                            | 0xDEF7               | 0xA529               |
| `FontPaletteDateTime3`     |                                                                                                                                                                 | 0xC631               | 0xBDEF               |
| `FontPaletteDateTime4`     |                                                                                                                                                                 | 0xA108               | 0xD6B5               |
| `FontPaletteTitlebox1`     | A felülíró átlátszó színe a betűtípusnak a ROM cím dobozhoz                                                                                                     | 0x0000               | 0x0000               |
| `FontPaletteTitlebox2`     | A felülíró színe a betűtípusnak a ROM cím dobozhoz                                                                                                              | 0xDEF7               | 0xDEF7               |
| `FontPaletteTitlebox3`     |                                                                                                                                                                 | 0xC631               | 0xC631               |
| `FontPaletteTitlebox4`     |                                                                                                                                                                 | 0xA108               | 0xA108               |
| `FontPaletteDialog1`       | A felülíró átlátszó színe a betűtípusnak a párbeszédablakokhoz                                                                                                  | 0x0000               | 0x0000               |
| `FontPaletteDialog2`       | A felülíró színe a betűtípusnak a párbeszédablakokhoz                                                                                                           | 0xDEF7               | 0xDEF7               |
| `FontPaletteDialog3`       |                                                                                                                                                                 | 0xC631               | 0xC631               |
| `FontPaletteDialog4`       |                                                                                                                                                                 | 0xA108               | 0xA108               |
| `FontPaletteOverlay1`      | A felülíró átlátszó színe a betűtípusnak az átlapolt szövegekhez                                                                                                | 0x0000               | 0x0000               |
| `FontPaletteOverlay2`      | A felülíró színe a betűtípusnak az átlapolt szövegekhez                                                                                                         | 0xDEF7               | 0xDEF7               |
| `FontPaletteOverlay3`      |                                                                                                                                                                 | 0xC631               | 0xC631               |
| `FontPaletteOverlay4`      |                                                                                                                                                                 | 0xA108               | 0xA108               |
| `FontPaletteUsername1`     | A felülíró átlátszó színe a betűtípusnak a felhasználó névhez                                                                                                   | 0x0000               | 0x0000               |
| `FontPaletteUsername2`     | A felülíró színe a betűtípusnak a felhasználó névhez                                                                                                            | 0xDEF7               | 0xDEF7               |
| `FontPaletteUsername3`     |                                                                                                                                                                 | 0xC631               | 0xC631               |
| `FontPaletteUsername4`     |                                                                                                                                                                 | 0xA108               | 0xA108               |
| `BipsUserPalette`          | Használja-e vagy sem a DS profil színt palettának a bips-hez a gördítősávon                                                                                     |                      | 0                    |
| `BoxUserPalette`           | Használja-e vagy sem a DS profil színt palettának a dobozokhoz, amik a játék ikonokat tartalmazzák a DSi témában                                                |                      | 0                    |
| `BoxEmptyUserPalette`      | Használja-e vagy sem a DS profil színt palettának az üres dobozokhoz a 3DS témában                                                                              | 0                    |                      |
| `BoxFullUserPalette`       | Használja-e vagy sem a DS profil színt palettának a dobozokhoz, amik a játék ikonokat tartalmazzák a 3DS témában                                                | 0                    |                      |
| `BraceUserPalette`         | Használja-e vagy sem a DS profil színt palettának a merevítőhöz a játéklista elején és végén                                                                    |                      | 0                    |
| `BubbleUserPalette`        | Használja-e vagy sem a DS profil színt palettának a cím buborék hegyéhez                                                                                        | 0                    | 0                    |
| `ButtonArrowUserPalette`   | Használja-e vagy sem a DS profil színt a nyíl gombok palettájához, amik a képernyő alján kerülnek megjelenítésre                                                |                      | 1                    |
| `CornerButtonUserPalette`  | Használja-e vagy sem a DS profil színt palettának a DSi Menu és DSi Settings ikonhoz a SELECT menüben                                                           |                      | 0                    |
| `CursorUserPalette`        | Használja-e vagy sem a DS profil színt palettának a kurzorhoz                                                                                                   | 0                    |                      |
| `DialogBoxUserPalette`     | Használja-e vagy sem a DS profil színt a párbeszéd ablak palettájához                                                                                           | 0                    | 1                    |
| `FolderUserPalette`        | Használja-e vagy sem a DS profil színt palettának a mappákhoz                                                                                                   | 0                    | 0                    |
| `LaunchDotsUserPalette`    | Használja-e vagy sem a DS profil színt az indítási pontok palettájához                                                                                          |                      | 1                    |
| `MovingArrowUserPalette`   | Használja-e vagy sem a DS profil színt a nyilak palettájához, amik ikonok mozgatásakor kerülnek megjelenítésre                                                  |                      | 1                    |
| `ProgressUserPalette`      | Használja-e vagy sem a DS profil színt palettának a betöltés folyamatban pörgőhöz                                                                               | 1                    | 1                    |
| `ScrollWindowUserPalette`  | Használja-e vagy sem a DS profil színt palettának a görgetősávon a görgetőablak hátterének                                                                      |                      | 0                    |
| `SmallCartUserPalette`     | Használja-e vagy sem a DS profil színt palettának a cartridge ikonokhoz                                                                                         | 0                    | 0                    |
| `StartBorderUserPalette`   | Használja-e vagy sem a DS profil színt a kezdő keret palettájához                                                                                               |                      | 1                    |
| `StartTextUserPalette`     | Használja-e vagy sem a DS profil színt a kezdő szöveg palettájához                                                                                              |                      | 1                    |
| `WirelessIconsUserPalette` | Használja-e vagy sem a DS profil színt palettának a vezetéknélküli ikonokhoz                                                                                    | 0                    | 0                    |
| `IconA26UserPalette`       | Használja-e vagy sem a DS profil színt palettának az Atari 2600 ikonhoz                                                                                         | 0                    | 0                    |
| `IconCOLUserPalette`       | Használja-e vagy sem a DS profil színt palettának a ColecoVision ikonhoz                                                                                        | 0                    | 0                    |
| `IconGBUserPalette`        | Használja-e vagy sem a DS profil színt palettának a Game Boy ikonhoz                                                                                            | 0                    | 0                    |
| `IconGBAUserPalette`       | Használja-e vagy sem a DS profil színt palettának a Game Boy Advance ikonhoz                                                                                    | 0                    | 0                    |
| `IconGBAModeUserPalette`   | Használja-e vagy sem a DS profil színt palettának a natív GBA mód ikonhoz                                                                                       | 0                    | 0                    |
| `IconGGUserPalette`        | Használja-e vagy sem a DS profil színt palettának a Game Gear ikonhoz                                                                                           | 0                    | 0                    |
| `IconIMGUserPalette`       | Használja-e vagy sem a DS profil színt palettának a kép ikonhoz                                                                                                 | 0                    | 0                    |
| `IconINTUserPalette`       | Használja-e vagy sem a DS profil színt palettának az Intellivision ikonhoz                                                                                      | 0                    | 0                    |
| `IconM5UserPalette`        | Használja-e vagy sem a DS profil színt palettának a Sord M5 ikonhoz                                                                                             | 0                    | 0                    |
| `IconManualUserPalette`    | Használja-e vagy sem a DS profil színt palettának a kézi ikonhoz                                                                                                | 0                    | 0                    |
| `IconMDUserPalette`        | Használja-e vagy sem a DS profil színt palettának a Genesis/Mega Drive ikonhoz                                                                                  | 0                    | 0                    |
| `IconNESUserPalette`       | Használja-e vagy sem a DS profil színt palettának a NES/Famicom ikonhoz                                                                                         | 0                    | 0                    |
| `IconNGPUserPalette`       | Használja-e vagy sem a DS profil színt palettának a Neo Geo Pocket ikonhoz                                                                                      | 0                    | 0                    |
| `IconPCEUserPalette`       | Használja-e vagy sem a DS profil színt palettának a PC Engine/TurboGrafx-16 ikonhoz                                                                             | 0                    | 0                    |
| `IconPLGUserPalette`       | Használja-e vagy sem a DS profil színt palettának a DSTWO plugin ikonhoz                                                                                        | 0                    | 0                    |
| `IconSettingsUserPalette`  | Használja-e vagy sem a DS profil színt palettának a DSi Settings ikonhoz                                                                                        | 0                    | 0                    |
| `IconSGUserPalette`        | Használja-e vagy sem a DS profil színt palettának az SG-1000 ikonhoz                                                                                            | 0                    | 0                    |
| `IconSMSUserPalette`       | Használja-e vagy sem a DS profil színt palettának a Master System ikonhoz                                                                                       | 0                    | 0                    |
| `IconSNESUserPalette`      | Használja-e vagy sem a DS profil színt palettának az SNES ikonhoz                                                                                               | 0                    | 0                    |
| `IconUnknownUserPalette`   | Használja-e vagy sem a DS profil színt palettának az ismeretlen (hiányzó) ikonhoz                                                                               | 0                    | 0                    |
| `IconWSUserPalette`        | Használja-e vagy sem a DS profil színt palettának a WonderSwan ikonhoz                                                                                          | 0                    | 0                    |
| `UsernameUserPalette`      | Használja-e vagy sem a DS profil színt palettának a felhasználónévhez                                                                                           | 1                    | 1                    |
| `ProgressBarUserPalette`   | Használja-e vagy sem a DS profil színt a folyamatjelző-sáv színének                                                                                             | 1                    | 1                    |
| `ProgressBarColor`         | A folyamatjelző-sáv színe, ha a `ProgressBarUserPalette` kikapcsolt                                                                                             | 0x7C00               | 0x7C00               |
| `UseAlphaBlend`            | Összemossa-e vagy sem a képernyő felső részén megjelenő szöveg (dátum/idő és felhasználónév) és a háttér színét                                                 | 1                    | 1                    |
| `DarkLoading`              | Feketére menjen-e vagy sem színátmenettel a fehér helyett a töltő képernyőkön                                                                                   | 0                    | 0                    |
| `RenderPhoto`              | Kerüljön-e vagy sem a fénykép kirajzolásra a felső képernyőn                                                                                                    | 0                    | 1                    |
| `RotatingCubesRenderY`     | A forgó kockák rajzolásának Y pozíciója a felső képernyőn                                                                                                       | 78                   |                      |
| `PlayStartupJingle`        | Használja-e vagy sem az indítási hangot, mielőtt a fő BGM háttérzene elindul. Tekintsd meg az [Egyedi hangeffektusok](custom-dsi-3ds-sfx) oldalt a részletekért | 1                    | 0                    |
| `StartupJingleDelayAdjust` | Az indítási hangból lejátszott hangminták száma, mielőtt a BGM háttérzene elindul                                                                               | 0                    | 0                    |

### Macro mód opciók
Hozzáadhatsz különböző felülírási opciókat a `theme.ini` fájlhoz a Macro módban való használathoz. Ehhez add hozzá a `[MACRO]` címet a konfigurációs fájl alján lévő üres sorhoz, majd adj hozzá minden szükséges konfigurációt alatta.

## Egyedi háttér zene és hangok
A DSi és a 3DS témák támogatják továbbá az egyedi zenét. Lásd a [DSi/3DS szkinek - Egyedi hangeffektusok](custom-dsi-3ds-sfx) fejezetet a részletekért.

## Egyéni betűtípusok
[Egyéni betűtípusokat](custom-fonts) rakhatsz `font` mappába a szkinből történő használathoz. Hozzáadhatsz különböző felülírási betűkészleteket dátumhoz & időhoz a `date_time.nftr` használatával, és konzol felhasználó nevet a `username.nftr` használatával.

## Egyéni paletták
A palettás textúrákhoz (`grf` mappa) opcionálisan hozzáadhatsz felülbírálható palettakészleteket, amelyek akkor kerülnek felhasználásra, ha a megfelelő `UserPalette` beállítás engedélyezett. A palettakészlet-fájlok a [, ezzel a szerkesztővel](https://skinpaltool.dvdo.dev/) hozhatók létre. A szerkesztő használatakor importáld a képet, amellyel dolgozni szeretnél, majd hozz létre egy palettát mind a 16 DS profil színhez. Használhatod kiindulási pontként ezt a [paletta-példafájlt](/assets/files/example-palette.bin).

A paletta-gyűjtemény 16 sora megfelel az egyes profilszíneknek, és a következő sorrendben kell elhelyezkedniük:
1. Szürkéskék
2. Barna
3. Vörös
4. Rózsaszín
5. Narancssárga
6. Sárga
7. Limezöld
8. Zöld
9. Sötétzöld
10. Türkiz
11. Cián/Világoskék
12. Kék
13. Sötétkék/Indigo
14. Viola/Sötétlila
15. Lila
16. Magenta

Miután létrehoztál egy palettafájlt, helyezd el a `palettes` mappába. A palettafájl nevének meg kell egyeznie a kép nevével, de a `.bin` kiterjesztéssel (pl. `start_border.bin` használt a `start_border.bmp` esetében).

A `username.bin` palettafájlt is elhelyezheted, hogy megváltoztasd a felhasználónév betűtípus palettáit. Győződj meg róla, hogy a paletta szerkesztőd a `Font Mode` beállításra állítottad be a fájl létrehozásakor.

## 3. rész: Hozzáadás a TWiLight Menu++-hoz
Ha szerkesztettél néhány grafikát és szeretnéd tesztelni a szkinjeidet, csak másold a szkin foldert (a mappát, ami a `background`, `battery`, és egyéb mappákat tartalmazza) az `sd:/_nds/TWiLightMenu/3dsmenu/themes/` vagy az `sd:/_nds/TWiLightMenu/dsimenu/themes/` mappába attól függően, hogy 3DS-hez vagy a DSi-hez tartoznak.

## 4. rész: Szkinjeid megosztása
Ha elkészültél a szkineddel, megoszthatod a közösséggel egy Pull Request létrehozásával a [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository-ban és egy `.7z` fájlban hozzáadással. Ha nem ismered a git használatát, akkor egyszerűen létrehozhatsz egy issue-t a repositoryban a szkined zip fájljával, és kérheted a hozzáadását.
