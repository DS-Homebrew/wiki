---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: DSi / 3DS szkinek létrehozása
---

A legegyszerűbb módja egy téma egyediesítésének, ha szerkesztjük a png texturákat a téma `ui`, `battery`, és/vagy `volume` mappáiban. Ezek a fájlok bármilyen png-k lehetnek, azzal a fontos kiegészítéssel, hogy csak a 100%-ban átlátszó pixelek kerülnek átlátszóként megjelenítésre, minden más átlátszóság átlátszatlannak kerül kirajzolásra. Továbbá minden részletnek, ami átlátszó egy készletben (például az elem ikonok) átlátszónak kell lennie, mert az átlátszó pixelek egyszerűen átugrásra kerülnek, nem a háttér színnel kitöltésre; azaz bármilyen részlet ami csak néhányban átlátszó inkább háttérszín kell legyen, mint átlátszó. A textúrák lehetnek változó méretűek, de szükséges a téma konfiguráció változtatása, hogy helyesen jelenjenek meg (lásd alább).

A palettás textúrák változásai jobban érintettek. A `grit` és a `background_grit` könyvtáraiban a témának, a különböző kép fájlok szerkeszthetők. Továbbá szükséged lesz a [devkitPro eszköztárára](https://devkitpro.org) telepített GRIT-tel. Ha végeztél a fájljaid szerkesztésével futtatnod kell a
```bash
$ make
```
parancsot, hogy lefordítsd a témádat Grit RIFF formátumra. Ez lefordítja a palettás textúrákat **.grf** formátumra, a `grf` mappába. Ne módosítsd a `.grit` fájlokat addig, amíg nem olvastad a Fejlett témázás fejezetet lentebb.

Tartsd szem előtt, hogy a palettás textúrák több korlátozással rendelkeznek, mint a BMP textúrák, a 16 szín textúránként az abszolút maximum. Azonban néhány textúra esetén még ennél is erősebb az alapértelmezett korlátozás, ami annak függvényében módosítható, hogy kifutsz a paletta memóriából (lásd lentebb).

A példa témák a [`romsel_dsimenutheme/resources/dsimenu_theme_examples` mappában találhatók a ](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) TWiLight Menu++'s repository-jában. A letöltéséhez [töltsd le a repository-t](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) vagy klónozd git-tel, és keresd meg a mappát.

## Téma fájl leírások

A `volume` (hangerő) és `battery` (elem) texturák önmagukat magyarázzák.

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

A `3dsRotatingCubes.rvid` egy Rocket Video fájl. További információkért a videók rvid fájllá konvertálásáról, olvasd el [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) cikket a Vid2RVID wiki-ben. Ha nem szeretnéd, hogy megjelenjen, egyszerűen csak töröld.

## Téma konfigurálás

Különböző opciókat konfigurálhatsz arról, hogy hogyan kerüljön rajzolásra a téma a `theme.ini` fájlban, hogy nagyobb sprite-okat és texturákat használhass.

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

Alkalmanként az alapértelmezettnél számúnál több színre van szükséged, palettás texturáknál. Ezekben az esetekben módosítanod kell a `.grit` kompilációs fájlt a texturához, hogy növeld a paletta méretét.

Például a `scroll_window.grit`-ben szerkesztheted a `-pn7`-et és módosíthatod a `7`-et `16`-ra, hogy 16 színed legyen. Figyelj arra, hogy ha eltávolítod a teljes `-pn` sort, nem várt eredményt kaphatsz.

Szintén figyelj arra, hogy az abszolút maximum 16 szín textúránként kódból betartatott, és így az nem módosítható. Még ha növeled is a paletták számát 16 felé, nem több, mint 16 szín kerül betöltésre a a palettából. A betöltött textúrák mennyiségétől függően, előfordulhat, hogy nincs elég paletta memória ahhoz, hogy 16 színű paletta legyen minden textúrához. Tartsd ezt észben, amikor a paletta méreteket állítod.

Továbbá a palettás textúráknak a méretei oszthatók kell legyenek 2-vel. A palettás textúrák mérete nem módosíthatók, kivéve a `bubble` és a `start_border`, amik konfigurálható sprite mérettel rendelkezhetnek a `theme.ini`-ben. Azonban ezek módosítása nem várt eredményeket is okozhat.

A palettás textúrák nem kerülnek ellenőrzésre érvényesség szempontjából. Egy érvénytelen textúra ritka kell legyen, ha a biztosított makefile-lal készül, de egyes esetekben a hibás textúrák a menü betöltődését megakadályozhatják.

## Egyedi háttér zene és hangok

A DSi Menü és a 3DS témák támogatják továbbá az egyedi zenét. Lásd a [DSi / 3DS szkinek - Egyedi hangeffektusok](custom-dsi-3ds-sfx) fejezetet a részletekért.
