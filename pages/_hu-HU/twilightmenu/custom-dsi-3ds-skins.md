---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: How to create DSi / 3DS skins
---

A legegyszerűbb módja egy téma egyediesítésének, ha szerkesztjük a png texturákat a téma `ui`, `battery`, és/vagy `volume` mappáiban. Ezek a fájlok bármilyen png-k lehetnek, azzal a fontos kiegészítéssel, hogy csak a 100%-ban átlátszó pixelek kerülnek átlátszóként megjelenítésre, minden más átlátszóság átlátszatlannak kerül kirajzolásra. Továbbá minden részletnek, ami átlátszó egy készletben (például az elem ikonok) átlátszónak kell lennie, mert az átlátszó pixelek egyszerűen átugrásra kerülnek, nem a háttér színnel kitöltésre; azaz bármilyen részlet ami csak néhányban átlátszó inkább háttérszín kell legyen, mint átlátszó. A textúrák lehetnek változó méretűek, de szükséges a téma konfiguráció változtatása, hogy helyesen jelenjenek meg (lásd alább).

A palettás textúrák változásai jobban érintettek. A `grit` és a `background_grit` könyvtáraiban a témának, a különböző kép fájlok szerkeszthetők. Továbbá szükséged lesz a [devkitPro eszköztárára](https://devkitpro.org) telepített GRIT-tel. Ha végeztél a fájljaid szerkesztésével futtatnod kell a
```bash
$ make
```
parancsot, hogy lefordítsd a témádat Grit RIFF formátumra. Ez lefordítja a palettás textúrákat **.grf** formátumra, a `grf` mappába. Ne módosítsd a `.grit` fájlokat addig, amíg nem olvastad a Fejlett témázás fejezetet lentebb.

Tartsd szem előtt, hogy a palettás textúrák több korlátozással rendelkeznek, mint a BMP textúrák, a 16 szín textúránként az abszolút maximum. Azonban néhány textúra esetén még ennél is erősebb az alapértelmezett korlátozás, ami annak függvényében módosítható, hogy kifutsz a paletta memóriából (lásd lentebb).

The example themes are in the [`romsel_dsimenutheme/resources/dsimenu_theme_examples` folder](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) in TWiLight Menu++'s repository. To download them, [download the repository](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) or clone it with git, then find that folder.

## Téma fájl leírások

The `volume` and `battery` textures are self explanatory.

### Háttér texturák (`background_grit` mappa)

| Textúra            | Leírás                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| bottom             | Az alsó háttérkép, ha nem ikon felett állunk                                                      |
| bottom_bubble      | Az alsó háttérkép, ha ikon felett állunk                                                          |
| bottom_ds          | A 3DS témához, az alsó háttér texturája, amikor nem egy ikon felett áll, és amikor DS lite-on van |
| bottom_bubble_ds | A 3DS témához, az alsó háttér texturája, amikor egy ikon felett áll, és amikor DS lite-on van     |
| top                | A felső háttér                                                                                    |

### Palettás texturák (`grit` mappa)

| Textúra       | Leírás                                                                                        | Paletta korlátozások (ha kevesebb, mint 16)                      |
| ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| bips          | A gördítősáv alján látható pontok (DSi téma)                                                  |                                                                  |
| box           | Doboz textúrája, ami tartalmaz egyaránt teli és üres textúrákat (DSi téma)                    |                                                                  |
| box_empty     | Üres doboz textúra (3DS téma)                                                                 | A 3DS témában az átlátszó szín kódja alapértelmezetten `#E0DAD9` |
| box_full      | Doboz ikonnal textúra (3DS téma)                                                              | A 3DS témában az átlátszó szín kódja alapértelmezetten `#E0DAD9` |
| brace         | A kapocs textúra ami az első és utolsó ikon után jelenik meg (DSi téma)                       | 4 szín                                                           |
| bubble        | Az alsó darabja a buboréknak, ami az induló keret vagy az ikon doboz felé rajzolt             | 8 szín                                                           |
| button_arrow  | A nyilak textúrái mindkét oldalán az alsó gördítő sávnak (DSi téma)                           |                                                                  |
| cornerbutton  | A gombok, amik megjelennek a SELECT menüben (DSi Menü) (A név egy régi felhasználáson alapul) |                                                                  |
| cursor        | A keret animáció kockák, amik a kiválasztott ikont jelzik (3DS téma)                          |                                                                  |
| dialogbox     | A lecsúszó párbeszéd ablak háttere                                                            |                                                                  |
| folder        | A mappák ikonja                                                                               |                                                                  |
| icon_gb       | A Game Boy játékok ikonja                                                                     |                                                                  |
| icon_gba      | A GBA játékok ikonja (minden téma) és a felső GBARunner2 indító ikon (3DS téma)               | Az alapértelmezett átlátszó szín kódja `#00FF00`                 |
| icon_gbamode  | A natív GBA Mód ikonja                                                                        |                                                                  |
| icon_gg       | Game Gear játékok ikonja                                                                      |                                                                  |
| icon_manual   | A kézikönyv ikonja                                                                            |                                                                  |
| icon_md       | Mega Drive játékok ikonja                                                                     |                                                                  |
| icon_nes      | NES játékok ikonja                                                                            |                                                                  |
| icon_plg      | DSTWO bővítmények ikonja                                                                      |                                                                  |
| icon_settings | A Nintendo DSi Settings ikonja                                                                |                                                                  |
| icon_sms      | Sega Master System játékok ikonja                                                             |                                                                  |
| icon_snes     | SNES játékok ikonja                                                                           |                                                                  |
| icon_unk      | Megjelenített ikon, ha a játéknak nincs ikonja                                                |                                                                  |
| launch_dot    | A megjelenített pontok, amikor az alkalmazás indul (DSi téma)                                 |                                                                  |
| moving_arrow  | A megjelenített nyíl, amikor az alkalmazás mozgatásra kerül (DSi téma)                        |                                                                  |
| progress      | Töltési animáció 8 képkockával                                                                | 9 szín                                                           |
| scroll_window | A gördítősáv része, ami mutatja, hogy ikonok vannak a nézetben                                | 7 szín                                                           |
| small_cart    | Az ikonok amik megjelennek fent (3DS téma) és a SELECT menüben (DSi téma)                     |                                                                  |
| start_border  | A keret animáció kockák, amik a kiválasztott ikont jelzik (DSi téma)                          |                                                                  |
| start_text    | Az indító kereten megjelenített szöveg (DSi téma)                                             | 4 szín                                                           |
| wirelessicons | A megjelenített ikonok, amik azt mutatják, hogy a játéknak van vezetéknélküli támogatása      | 7 szín                                                           |

### UI texturák (`ui` mappa)

| Textúra          | Leírás                                                  |
| ---------------- | ------------------------------------------------------- |
| date_time_font | A dátum és idő megjelenítésére használt karakterkészlet |
| Lshoulder        | A bal váll                                              |
| Lshoulder_greyed | A bal váll, ha már nincs további oldal tovább balra     |
| Rshoulder        | A jobb váll                                             |
| Rshoulder_greyed | A jobb váll, ha már nincs további oldal tovább jobbra   |

### Videó texturák (`video` mappa)

`3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. If you don't want this to be drawn you can simply delete it.

## Téma konfigurálás

You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger sprites or textures.

| Érték                    | Leírás                                                                                                              | Alapértelmezés (3DS) | Alapértelmezés (DSi) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| `StartBorderRenderY`     | A kezdeti Y pozíciója a keret indítónak                                                                             | 92                   | 81                   |
| `StartBorderSpriteW`     | A keretindító sprite szélessége. Fontos megjegyezni, hogy a keret indító textúra pontosan a fele a teljes keretnek. | 32                   | 32                   |
| `StartBorderSpriteH`     | A keret indító sprite magassága                                                                                     | 64                   | 80                   |
| `TitleboxRenderY`        | A kezdeti Y pozíciója a cím szöveg kirajzolásának                                                                   | 96                   | 85                   |
| `BubbleTipRenderY`       | Az Y pozíciója a buborékcsúcsnak, ami a kezdő keret felé rajzolt                                                    | 98                   | 80                   |
| `BubbleTipRenderX`       | Az X pozíciója a buborékcsúcsnak, ami a kezdő keret felé rajzolt                                                    | 125                  | 22                   |
| `BubbleTipSpriteH`       | A buborékcsúcs sprite magassága                                                                                     | 7                    | 8                    |
| `BubbleTipSpriteW`       | A buborékcsúcs sprite szélessége                                                                                    | 7                    | 11                   |
| `RotatingCubesRenderY`   | A forgó kockák rajzolásának Y pozíciója a felső képernyőn                                                           | 78                   | N/A                  |
| `ShoulderLRenderY`       | Az Y pozíciója bal vállnak a felső képernyőn                                                                        | 172                  | 172                  |
| `ShoulderLRenderX`       | Az X pozíciója bal vállnak a felső képernyőn                                                                        | 0                    | 0                    |
| `ShoulderRRenderY`       | Az Y pozíciója jobb vállnak a felső képernyőn                                                                       | 172                  | 172                  |
| `ShoulderRRenderX`       | Az X pozíciója jobb vállnak a felső képernyőn                                                                       | 178                  | 178                  |
| `VolumeRenderX`          | Az X pozíciója jobb vállnak a felső képernyőn                                                                       | 4                    | 4                    |
| `VolumeRenderY`          | Az Y pozíciója a hangerő ikonnak a felső képernyőn                                                                  | 16                   | 16                   |
| `BatteryRenderY`         | Az Y pozíciója az elem ikonnak a felső képernyőn                                                                    | 5                    | 5                    |
| `BatteryRenderX`         | Az X pozíciója az elem ikonnak a felső képernyőn                                                                    | 235                  | 235                  |
| `RenderPhoto`            | Kerüljön vagy ne kerüljön fénykép rajzolásra a felső képernyőn                                                      | 0                    | 1                    |
| `StartTextUserPalette`   | A DSi profil téma paletta hozzárendelése a kezdő szöveg palettájához                                                | N/A                  | 1                    |
| `StartBorderUserPalette` | A DSi profil téma paletta hozzárendelése a kezdő keret palettájához                                                 | N/A                  | 1                    |
| `ButtonArrowUserPalette` | A DSi profil téma paletta hozzárendelése a nyíl gombok palettájához, amik a képernyő alján kerülnek megjelenítésre  | N/A                  | 1                    |
| `MovingArrowUserPalette` | A DSi profil téma paletta hozzárendelése a nyilak palettájához, amik ikonok mozgatásakor kerülnek megjelenítésre    | N/A                  | 1                    |
| `LaunchDotsUserPalette`  | A DSi profil téma paletta hozzárendelése az indítási pontok palettájához                                            | N/A                  | 1                    |
| `DialogBoxUserPalette`   | A DSi profil téma paletta hozzárendelése a párbeszéd ablak palettájához                                             | N/A                  | 1                    |

## Fejlett témázás

Occasionally, you may require more than the default number of colors for some paletted textures. In such cases, you may modify the `.grit` compilation file for the texture to increase the size of the palette.

For example, in `scroll_window.grit`, you may edit `-pn7` and change `7` to `16` for 16 colors. Be aware that if you remove the entire `-pn` line, you may encounter unexpected results.

Also note that the absolute maximum of 16 colors per texture is enforced in code and can not be modified. Even if you increase the number of palettes to above 16, no more than 16 colors worth of palette data will be loaded. With the amount of textures loaded in, there may not be enough palette memory to hold 16 colors worth of palettes for every texture. Keep this in mind when adjusting palette sizes.

Additionally, paletted textures must have dimensions that are a multiple of 2. Paletted textures sizes can not be changed except for `bubble` and `start_border`, which can have configurable sprite dimensions in `theme.ini`. However, note that doing so may have unexpected consequences.

Paletted textures are not checked for validity. An invalid texture should be rare if created with the provided makefile, but in certain cases a corrupted texture will cause the menu to not load at all.

## Egyedi háttér zene és hangok

The DSi Menu and 3DS themes also support custom music. See [DSi / 3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
