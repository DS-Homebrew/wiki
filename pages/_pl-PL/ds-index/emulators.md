---
lang: pl-PL
layout: wiki
section: ds-index
category: reference
title: Emulatory na DS
description: Zbiór różnych emulatorów na DS
---

Istnieje wiele emulatorów dla DS i DSi. Ta strona zawiera wyczerpujące wyjaśnienia do wielu emulatorów i loaderów dołączonych do TWiLiht Menu++.

### Lista systemów obsługiwanych przez TWiLight Menu++

| Format                    | Loader                                            | Rozszerzenia                           | Plik zapisu                                        |
| ------------------------- | ------------------------------------------------- | -------------------------------------- | -------------------------------------------------- |
| ARGV[^1]                  | Natywny                                           | `.argv`                                |                                                    |
| Atari 2600                | [StellaDS][stellads]                              | `.a26`                                 |                                                    |
| Atari 5200                | [A5200DS][a5200ds]                                | `.a52`                                 |                                                    |
| Atari 7800                | [A7800DS][a7800ds]                                | `.a78`                                 |                                                    |
| Atari XEGS                | [XEGS-DS][xegs-ds]                                | `.xex`, `.atr`                         |                                                    |
| ColecoVision              | [S8DS][s8ds], [ColecoDS][colecods]                | `.col`                                 |                                                    |
| DS                        | [nds-bootstrap][ndsbs], kernel flashcard, natywny | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nazwa romu].sav`[^2]                       |
| DSiWare                   | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]      | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nazwa romu].pub`, `saves/[nazwa romu].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                                | `.plg`                                 |                                                    |
| Game Boy (Color)          | [GameYob][gameyob]                                | `.gb`, `.sgb`, `.gbc`                  | `[nazwa romu].sav`                                 |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], natywny[^5]         | `.agb`, `.gba`, `.mb`                  | `[nazwa romu].sav`                                 |
| Game Gear                 | [S8DS][s8ds]                                      | `.gg`                                  | `[nazwa romu].gg.sav`                              |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]       | `.gen`                                 | `[nazwa romu].srm`[^6]                             |
| Intellivision             | [Nintellivision][nintellivision]                  | `.int`                                 |                                                    |
| Master System             | [S8DS][s8ds]                                      | `.sms`                                 | `[nazwa romu].sms.sav`                             |
| Neo Geo Pocket (Color)    | [NGPDS][ngpds]                                    | `.ngp`, `.ngc`                         | `/data/ngpds/[nazwa romu].ngp.fla`                 |
| Fast Video                | Wkrótce                                           | `.fv`                                  |                                                    |
| NES / Famicom             | [nesDS][nesds]                                    | `.nes`, `.fds`                         | `[nazwa romu].sav`                                 |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                          | `.pce`                                 |                                                    |
| Rocket Video              | [Rocket Video Player][rvidplayer]                 | `.rvid`                                |                                                    |
| SG-1000                   | [S8DS][s8ds], [ColecoDS][colecods]                | `.sg`                                  |                                                    |
| Sord M5                   | [ColecoDS][colecods]                              | `.m5`                                  |                                                    |
| SNES                      | [SNEmulDS][snemulds]                              | `.smc`, `.sfc`                         | `[nazwa romu].srm`                                 |
| WonderSwan (Color)        | [NitroSwan][nitroswan]                            | `.ws`, `.wsc`                          | ???                                                |
| Xvid                      | [tuna-viDS][tunavids]                             | `.avi`                                 |                                                    |

- Footnotes -
{:footnotes}

To są tylko rekomendowane emulatory i loadery, które są również dostępne w TWiLight Menu++. Istnieją także inne emulatory dostępne dla tych konsol (np. lolSnes, Gbaemu4ds itp.)

### Inne emulatory dla DS

| Format  | Loader         | Rozszerzenia | Plik zapisu |
| ------- | -------------- | ------------ | ----------- |
| Neo Geo | [neoDS][neods] | `.neo`       | (nieznane)  |

## Uwagi dotyczące niektórych emulatorów
### Ramdyski
- Żeby **jEnesisDS** lub **neoDS** działały na karcie SD DSi, będziesz musiał(a) użyć ramdysku z nds-bootstrap
   - Program tworzący Ramdyski dla jEnesisDS jest dostępny w TWiLight Menu++. Dla neoDS trzeba stworzyć ramdysk własnoręcznie. Zaglądnij do [Tworzenie Ramdysków](../twilightmenu/creating-ram-disks), żeby się dowiedzieć jak to zrobić
   - Potrzeba użycia ramdysków dla tych emulatorów, wynika z tego, że ich hooki ARM7 nie działają poprawnie

### Porównanie pomiędzy PicoDriveTWL i jEnesisDS
- **PicoDriveTWL**
   - Został stworzony dla DSi
   - Nie wymaga ramdysków nds-bootstrap
      - Jest obsługiwany zapis na karcie SD DSi
      - Szybsze czasy ładowania między TWiLight Menu++ a emulatorem na karcie SD DSi
   - Obsługuje argumenty
   - Limit wynosi 2,5 MB na **Flashcardzie**
      - Wykorzystuje dodatkową pamięć RAM DSi lub DS Memory Pak, aby zwiększyć ten limit
   - Brak emulacji dźwięku
   - Niska ilość klatek na sekundę

- **jEnesisDS**
   - DS Mode
      - Wymaga ramdysku nds-bootstrap, by był używany na karcie SD DSi
      - Zapisywanie jest niedostępne dla kart SD DSi
   - Trochę długo się ładuje
   - Brak wsparcia argumentów
   - Limit wynosi 3 MB na wszystkich platformach (romy są ładowane do pamięci RAM)
      - Brak obsługi DS Memory Pak i DSi Extended Memory
      - Jest patch dla Sonic 3 & Knuckles, który zmniejsza rozmiar gry poprzez usunięcie trybu multiplayer
   - Emulacja dźwięku
   - Wysoka ilość klatek na sekundę


<!-- Links for tables -->
[^1]: Pliki tekstowe zawierające ścieżkę i argumenty do aplikacji homebrew DS. Zaglądnij do [pliku README nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments), aby uzyskać więcej informacji
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the flashcard
[^4]: When running in DSi Mode, it can use the DSP for better sound
[^5]: Requires a Slot-2 flashcart and thus only works on DS Phat and DS Lite
[^6]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[ngpds]: https://github.com/FluBBaOfWard/NGPDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[nitroswan]: https://github.com/FluBBaOfWard/NitroSwan
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://github.com/FluBBaOfWard/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SnemulDS_-_Revival
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
