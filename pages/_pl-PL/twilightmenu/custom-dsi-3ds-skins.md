---
lang: pl_PL
layout: wiki
section: twilightmenu
category: customization
title: How to Create DSi/3DS Skins
description: Jak tworzyć własne skórki DSi i 3DS dla TWiLight Menu++
---

Najprostszym sposobem dostosowania motywu jest edycja tekstur png w folderach `ui`, `battery`, i/lub `volume` motywu. Te pliki mogą być dowolnym plikiem png. Należy, jednak, zauważyć, że przeźroczystość będzie pokazana tylko dla pikseli w 100% przeźroczystych, reszta będzie kompletnie nieprzeźroczysta. Ponadto, każda część, która jest przezroczysta w jednym z zestawów (np. wszystkie ikony baterii) powinna być przezroczysta we wszystkich, ponieważ przezroczyste piksele są po prostu pomijane, a nie przywracane do tła, więc każda część, która jest przezroczysta tylko w niektórych powinna mieć teksturę tła, a nie przezroczystość. Te tekstury mogą mieć różny rozmiar, ale mogą wymagać zmiany konfiguracji motywu, aby były poprawnie renderowane (patrz poniżej).

Zmiany w teksturach paletowych są bardziej skomplikowane. W folderach motywu `grit` i `background_grit` można edytować różne pliki graficzne. Będziesz również potrzebował [devkitPro's toolchains](https://devkitpro.org) z zainstalowanym GRIT. Po zakończeniu edycji plików, należy je uruchomić
```bash
$ make
```
w celu kompresji motywów do formatu Grit RIFF. Spowoduje to skompresowanie twoich paletowych tekstur do formatu **.grf** w folderze `grf`. Nie wprowadzaj zmian w plikach `.grit` dopóki nie przeczytasz [zaawansowanego motywu](#advanced-theming) (rozdział poniżej).

Pamiętaj, że tekstury paletowe mają więcej ograniczeń niż tekstury BMP, w których jest absolutne maksimum 16 kolorów na teksturę. Jednak niektóre tekstury mogą mieć jeszcze ściślejsze ograniczenia domyślnej palety, które można modyfikować pod ryzykiem wyczerpania pamięci palety (patrz poniżej).

Przykładowe motywy znajdują się na stronie [`romsel_dsimenutheme/resources/dsimenu_theme_examples` folder](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) w repozytorium TWiLight Menu++. Aby je pobrać, [załaduj repozytorium](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) lub sklonuj je za pomocą git, a następnie znajdź ten folder.

## Opisy plików tematycznych

Tekstury `volume` i `battery` są zrozumiałe.

### Tekstury tła (folder `background_grit`)

| Tekstura           | Opis                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| bottom             | Tekstura dolnego tła, gdy nie jest wyświetlana nad ikoną                         |
| bottom_bubble      | Tekstura dolnego tła po najechaniu na ikonę                                      |
| bottom_ds          | Dla motywu 3DS, tekstura dolnego tła, gdy nie jest najechana na ikonę na DS lite |
| bottom_bubble_ds | Dla motywu 3DS, tekstura dolnego tła po najechaniu na ikonę na DS lite           |
| top                | Górne Tło                                                                        |

### Tekstury paletyzowane (folder `grit`)

| Tekstura      | Opis                                                                                           | Ograniczenia palety (jeśli są mniejsze niż 16)           |
| ------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| bips          | Bipy wyświetlane na dole paska przewijania (Motyw DSi)                                         |                                                          |
| box           | Tekstura pudełka, zawierająca zarówno pełne jak i puste tekstury (Motyw DSi)                   |                                                          |
| box_empty     | Tekstura wyświetlana dla pustego pola (Motyw 3DS)                                              | W motywie 3DS domyślnie przezroczysty kolor to `#E0DAD9` |
| box_full      | Tekstura wyświetlana dla pola z ikoną (Motyw 3DS)                                              | W motywie 3DS domyślnie przezroczysty kolor to `#E0DAD9` |
| brace         | Klamra tekstury pokazana poza pierwszą i ostatnią ikoną (motyw DSi)                            | 4 kolory                                                 |
| bubble        | Dolna część dymku, który jest rysowany nad ramką startową lub polem ikony                      | 8 kolorów                                                |
| button_arrow  | Tekstury dla strzałek po obu stronach dolnego paska przewijania (Motyw DSi)                    |                                                          |
| cornerbutton  | Przyciski, które są wyświetlane w menu SELECT (Motyw DSi) (Nazwa jest oparta na starym użyciu) |                                                          |
| cursor        | Obramowanie z ramkami animacji, które wskazują wybraną ikonę (3DS Theme)                       |                                                          |
| dialogbox     | Tło okna dialogowego, które się przesuwa w dół                                                 |                                                          |
| folder        | Ikona folderów                                                                                 |                                                          |
| icon_gb       | Ikona gier Game Boy                                                                            |                                                          |
| icon_gba      | Ikona gier GBA (Wszystkie motywy) i górna ikona do uruchomienia GBARunner2 (Motyw 3DS)         | Domyślny kolor przezroczysty to `#00FF00`                |
| icon_gbamode  | Ikona natywnego trybu GBA                                                                      |                                                          |
| icon_gg       | Ikona gier Game Gear                                                                           |                                                          |
| icon_manual   | Ikona podręcznika                                                                              |                                                          |
| icon_md       | Ikona gier Mega Drive                                                                          |                                                          |
| icon_nes      | Ikona dla gier NES                                                                             |                                                          |
| icon_plg      | Ikona wtyczek DSTWO                                                                            |                                                          |
| icon_settings | Ikona dla ustawień Nintendo DSi                                                                |                                                          |
| icon_sms      | Ikona dla gier Sega Master System                                                              |                                                          |
| icon_snes     | Ikona dla gier SNES                                                                            |                                                          |
| icon_unk      | Ikona wyświetlana, gdy gra nie ma ikony                                                        |                                                          |
| launch_dot    | Kropki wyświetlane po uruchomieniu gry (motyw DSi)                                             |                                                          |
| moving_arrow  | Strzałka wyświetlana, gdy gra jest przenoszona (motyw DSi)                                     |                                                          |
| progress      | Postęp wczytywania animacji z 8 klatkami                                                       | 9 kolorów                                                |
| scroll_window | Część paska przewijania, która wskazuje na ikony, które są widoczne                            | 7 kolorów                                                |
| small_cart    | Ikony wyświetlane u góry (motyw 3DS) i w menu SELECT (motyw DSi)                               |                                                          |
| start_border  | Obramowanie z ramkami animacji, które wskazuje wybraną ikonę (Motyw DSi)                       |                                                          |
| start_text    | Tekst wyświetlany na krawędzi startowej (motyw DSi)                                            | 4 kolory                                                 |
| wirelessicons | Ikony wyświetlane w celu wskazania, że dana gra obsługuje łączność bezprzewodową               | 7 kolorów                                                |

### Tekstury interfejsu użytkownika (folder `ui`)

| Tekstura         | Opis                                          |
| ---------------- | --------------------------------------------- |
| date_time_font | Czcionka do wyświetlania daty i godziny       |
| Lshoulder        | Lewe ramię                                    |
| Lshoulder_greyed | Lewe ramię, gdy nie ma żadnych stron po lewej |
| Rshoulder        | Prawe ramię                                   |
| Rshoulder_greyed | Prawe ramię, gdy nie ma stron po prawej       |

### Film tekstury (`wideo` folder)

`3dsRotatingCubes.rvid` jest plikiem Rocket Video. Po więcej informacji na temat konwersji wideo do rvid, przeczytaj [Konwersja wideo do .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) na wiki Vid2RVID. Jeśli nie chcesz, aby to było rysowane, możesz to po prostu usunąć.

## Konfiguracja motywu

Możesz skonfigurować różne opcje dotyczące sposobu rysowania motywu w pliku `theme.ini`, aby dostosować go do większych sprite'ów lub tekstur.

| Wartość                  | Opis                                                                                                                   | Domyślne (3DS) | Domyślne (DSi) |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------- | -------------- |
| `StartBorderRenderY`     | Początkowa pozycja Y granicy startowej                                                                                 | 92             | 81             |
| `StartBorderSpriteW`     | Szerokość początkowej krawędzi sprite'a. Zauważ, że tekstura granicy początkowej jest dokładnie połową pełnej granicy. | 32             | 32             |
| `StartBorderSpriteH`     | Wysokość początkowej ramki sprite'a                                                                                    | 64             | 80             |
| `TitleboxRenderY`        | Początkowa pozycja Y rysowanego tekstu tytułowego                                                                      | 96             | 85             |
| `BubbleTipRenderY`       | Pozycja Y wierzchołka bąbelka, który jest rysowany nad granicą początkową                                              | 98             | 80             |
| `BubbleTipRenderX`       | Pozycja X wierzchołka bąbelka, który jest rysowany nad granicą początkową                                              | 125            | 22             |
| `BubbleTipSpriteH`       | Wysokość sprite'a końcówki bąbelka                                                                                     | 7              | 8              |
| `BubbleTipSpriteW`       | Szerokość sprite'u końcówki bąbelka                                                                                    | 7              | 11             |
| `RotatingCubesRenderY`   | Pozycja Y na górnym ekranie do rysowania obracających się sześcianów                                                   | 78             | N/A            |
| `ShoulderLRenderY`       | Pozycja Y na górnym ekranie, aby narysować lewe ramię                                                                  | 172            | 172            |
| `ShoulderLRenderX`       | Pozycja X na górnym ekranie, aby narysować lewe ramię                                                                  | 0              | 0              |
| `ShoulderRRenderY`       | Pozycja Y na górnym ekranie, aby narysować prawe ramię                                                                 | 172            | 172            |
| `ShoulderRRenderX`       | Pozycja X na górnym ekranie, aby narysować prawe ramię                                                                 | 178            | 178            |
| `VolumeRenderX`          | Pozycja X na górnym ekranie do rysowania ikony głośności                                                               | 4              | 4              |
| `VolumeRenderY`          | Pozycja Y na górnym ekranie do narysowania ikony głośności                                                             | 16             | 16             |
| `BatteryRenderY`         | Pozycja Y na górnym ekranie, aby narysować ikonę baterii                                                               | 5              | 5              |
| `BatteryRenderX`         | Pozycja X na górnym ekranie, aby narysować ikonę baterii                                                               | 235            | 235            |
| `RenderPhoto`            | Czy rysować zdjęcie na górnym ekranie, czy nie                                                                         | 0              | 1              |
| `StartTextUserPalette`   | Czy do palety tekstu startowego ma być używany kolor profilu DS                                                        | N/A            | 1              |
| `StartBorderUserPalette` | Określenie, czy do palety krawędzi początkowej ma być używany kolor profilu DS                                         | N/A            | 1              |
| `ButtonArrowUserPalette` | Czy używać koloru profilu DS dla palety przycisków strzałek w dolnej części ekranu                                     | N/A            | 1              |
| `MovingArrowUserPalette` | Czy używać koloru profilu DS dla palety strzałki wyświetlanej podczas przesuwania ikon                                 | N/A            | 1              |
| `LaunchDotsUserPalette`  | Określenie, czy do palety punktów startowych ma być używany kolor profilu DS                                           | N/A            | 1              |
| `DialogBoxUserPalette`   | Określenie, czy dla palety okna dialogowego ma być używany kolor profilu DS                                            | N/A            | 1              |

## Zaawansowane Motywy

Niekiedy dla niektórych palet tekstur może być wymagana większa niż domyślna liczba kolorów. W takich przypadkach można zmodyfikować plik kompilacji `.grit` dla tekstury, aby zwiększyć rozmiar palety.

Na przykład, w `scroll_window.grit`, możesz edytować `-pn7` i zmienić `7` na `16` dla 16 kolorów. Pamiętaj, że jeśli usuniesz całą linię `-pn`, możesz napotkać nieoczekiwane rezultaty.

Należy również pamiętać, że absolutne maksimum 16 kolorów na teksturę jest wymuszone w kodzie i nie może być modyfikowane. Nawet jeśli zwiększysz liczbę kolorów w palecie do ponad 16, nie zostanie załadowanych więcej niż 16. Przy takiej ilości załadowanych tekstur, może nie być wystarczająco dużo pamięci na palety, aby pomieścić 16 kolorów palet dla każdej tekstury. Należy o tym pamiętać przy dostosowywaniu rozmiarów palety.

Dodatkowo, tekstury paletowe muszą mieć wymiary będące wielokrotnością 2. Rozmiary tekstur paletyzowanych nie mogą być zmieniane, z wyjątkiem `bubble` i `start_border`, które mogą mieć konfigurowalne wymiary sprite'ów w `theme.ini`. Należy jednak zauważyć, że może to mieć niespodziewane konsekwencje.

Tekstury paletyzowane nie są sprawdzane pod kątem ważności. Nieprawidłowa tekstura powinna być rzadkością, jeśli została stworzona przy użyciu dostarczonego pliku makefile, ale w niektórych przypadkach uszkodzona tekstura może spowodować, że menu w ogóle się nie załaduje.

## Własne efekty muzyczne i dźwiękowe w tle

Menu DSi i motywy 3DS również obsługują własną muzykę. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
