---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: FAQ & Rozwiązywanie problemów
description: FAQ i rozwiązywanie problemów dla TWilLight Menu++
---

Dla więcej FAQ, odwiedź [wątek na GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### P: Dlaczego mój 3DS / 2DS wiesi się na czarnym ekranie, crashuje się, wyłącza się itp., podczas uruchamiania TWiLight Menu++?
O: TWL_FIRM może być uszkodzony. Postępuj zgodnie z tym poradnikiem, aby naprawić problem: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### P: Jak naprawić biały ekran podczas uruchamiania TWiLight Menu++?
O:
- Najpierw, spróbuj wstawić konsolę w tryb uśpienia (np. poprzez zamknięcie konsoli albo poprzez wciśnięcie przycisku uśpienia na O2DS), a następnie ją "obudź"
- Jeśli to nie działa, sformatuj kartę SD do FAT32 z 32KB rozmiarem przydziału
- Jeśli to też nie zadziała, spróbuj innej karty SD

#### P: Dlaczego dostaję biały ekran podczas uruchamiania gry z karty SD?
O:
- Najpierw, sprawdź [listę kompatybilności nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) i upewnij się że gra jest kompatybna
- Spróbuj włączyć grę bez włączonych cheatów dla tej gry, ponieważ niektóre cheaty są niekompatybilne z nds_bootstrap. Możesz użyć <kbd class="l">L</kbd> w menu cheatów, by wyłączyć każdego cheata dla danej gry
- Jeśli gra, którą próbujesz uruchomić, to gra DSi Enchanced, to upewnij się, że TWiLight Menu++ jest ustawione tak, by korzystało z `DS Mode`
- Jeśli gra działała wcześniej, usuń foldery `fatTable` i `patchOffsetCache` w `sdL/_nds/nds-bootstrap/`

#### P: Jak korzystać z cheatów?
O: Musisz mieć bazę danych cheatów w formie pliku `usrcheat.dat` w folderze `sd:/_nds/TWiLightMenu/extras`. Najbardziej zaktualizowana baza cheatów jest od [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Alternatywnie, możesz użyć [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) do tworzenia własnych baz cheatów.

#### P: Jak wyświetlić niestandardowy obrazek na górnym ekranie motywu DSi?
O: losowy obrazek `.png` w `sd:/_nds/TWiLightMenu/dsimenu/photos/` zostanie pokazany za każdym razem, gdy menu zostanie załadowane.

- Obrazki nie mogą być większe niż 208x156
- Jeśli wystąpił jakiś błąd, najczęstszym problemem jest rozmiar obrazka. Użyj [tinypng](https://tinypng.com), aby zmniejszyć rozmiar

#### P: Jak mogę wgrać gry?
O: Możesz pobierać gry homebrew z [Universal-DB](https://db.universal-team.net/ds) i z [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). Aby zrzucić swoje gry detaliczne:
- Na DSie możesz użyć [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) by tworzyć zrzuty gier GBA i, jeśli masz kartę flashcard Slot-2, gry DS
- Na DSi możesz użyć [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) by zrzucać swoje gry DS i DSiWare
- Na 3DS możesz użyć [GodMode9](https://github.com/d0k3/GodMode9/releases), by zrzucać swoje gry DS, DSiWare i tytuły Virtual Console

#### P: Czy mogę przerzucić pliki zapisów z kartridży na kartę SD lub odwrotnie?
O: Tak, możesz do tego użyć[GodeMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) na DSi i 3DS oraz [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) na 3DSie.

#### P: Jak zmienić język TWiLight Menu++?
O:
1. Otwórz ustawienia TWiLight Menu++, możesz to zrobić poprzez przytrzymanie <kbd>SELECT</kbd> kiedy TWiLight Menu++ się uruchamia
1. Wciśnij <kbd class="l">L</kbd> lub <kbd class="face">Y</kbd> raz (flashcard / 3DS) lub dwukrotnie (na DSi)
1. Zmieniaj pierwszą opcję, dopóki nie zobaczysz wybranego języka, następnie opuść ustawienia
   - Możesz chcieć też zmienić dwie następne opcje, ponieważ odpowiadają one za język gier DS i ich tytuły w TWiLight Menu++

#### P: Jakie systemy obsługuje TWiLight Menu++?

O:

| Format                    | Loader                                            | Rozszerzenia plików                    | Plik zapisu                            |
| ------------------------- | ------------------------------------------------- | -------------------------------------- | -------------------------------------- |
| ARGV[^1]                  | Natywny                                           | `.argv`                                |                                        |
| Atari 2600                | [StellaDS][stellads]                              | `.a26`                                 |                                        |
| Atari 5200                | [A5200DS][a5200ds]                                | `.a52`                                 |                                        |
| Atari 7800                | [A7800DS][a7800ds]                                | `.a78`                                 |                                        |
| DS                        | [nds-bootstrap][ndsbs], jądro flashcarda, natywny | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nazwa romu].sav`[^2]           |
| DSiWare                   | [Unlaunch][unlaunch]                              | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[nazwa romu].pub`, `[nazwa romu].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                                | `.plg`                                 |                                        |
| Game Boy (Color)          | [GameYob][gameyob]                                | `.gb`, `.sgb`, `.gbc`                  | `[nazwa romu].sav`                     |
| Game Boy Advance          | [GBARunner2][gbarunner2], natywny[^4]             | `.agb`, `.gba`, `.mb`                  | `[nazwa romu].sav`                     |
| Game Gear                 | [S8DS][s8ds]                                      | `.gg`                                  | `[nazwa romu].gg.sav`                  |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]       | `.gen`                                 | `[nazwa romu].srm`[^5]                 |
| Master System             | [S8DS][s8ds]                                      | `.sms`                                 | `[nazwa romu].sms.sav`                 |
| Film MPEG4                | [Odtwarzacz MPEG4][mpeg4player]                   | `.mp4`                                 |                                        |
| NES / Famicom             | [nesDS][nesds]                                    | `.nes`, `.fds`                         | `[nazwa romu].sav`                     |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                          | `.pce`                                 |                                        |
| Film RVID                 | [Rocket Video Player][rvidplayer]                 | `.rvid`                                |                                        |
| SNES[^6]                  | [SNEmulDS][snemulds]                              | `.smc`, `.sfc`                         | `[rom name].srm`[^7]                   |
{:.table}

- Footnotes -
{:footnotes}

#### P: Czemu nie działa dotyk w sudokuhax?
O: W niektórych plikach zapisu sudokuhax dotyk może nie działać.

#### P: Czy The Biggest Loser może uruchomić TWiLight Menu++?
O: Nie. The Biggest Loser to gra na Slot-1, a nie grą DSiWare. Dostęp do karty SD jest wyłączony, gdy uruchomiona jest gra na Slot-1.

[^1]: Pliki tekstowe zawierające ścieżkę do aplikacji DS homebrew i potrzebne argumenty do jej uruchomienia. Zobacz [README nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) aby uzyskać więcej informacji
[^2]: Tylko dla detalicznych ROMów, aplikacje homebrew nie mają określonych plików zapisu
[^3]: Działa tylko z flashcardem SuperCard DSTWO, ponieważ kartridż ma dodatkową moc obliczeniową i więcej RAMu
[^4]: Wymaga flashcarda na Slot-2, więc działa tylko na DS Phat i DS Lite
[^5]: jEnesis może zapisywać tylko wtedy, kiedy jest uruchomiony z flashcarda, ale PicoDriveTWL może zapisywać i z flashcarda, i z karty SD
[^6]: Pokazuje się tylko podczas korzystania z flashcarda albo jeśli Unlauch jest zainstalowany
[^7]: Może zapisywać tylko po uruchomieniu z flashcarda

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
