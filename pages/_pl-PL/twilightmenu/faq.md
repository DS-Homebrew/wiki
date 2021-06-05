---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: FAQ & Rozwiązywanie problemów
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs i troubleshooting dla TWiLight Menu++
---

Dla więcej FAQ, odwiedź [wątek na GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Why does my 3DS/2DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM może być uszkodzony. Postępuj zgodnie z tym poradnikiem, aby naprawić problem: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Jak rozwiązać problem białego ekranu podczas uruchamiania TWiLight Menu++?
- Najpierw, spróbuj wstawić konsolę w tryb uśpienia (np. poprzez zamknięcie konsoli albo poprzez wciśnięcie przycisku uśpienia na O2DS), a następnie ją "obudź"
- Jeśli to nie zadziała, sformatuj kartę SD do formatu FAT32 z rozmiarem klastra/alokacji 32 KB
- Jeśli to też nie zadziała, spróbuj innej karty SD

#### Gdzie jest motyw Acekard/Wood UI?
Motyw acekard (zwany również Wood UI) został usunięty z powodu jego błędnego zachowania i powodowania uszkodzeń karty SD. Proszę poczekaj na poprawkę. Postępy w zakresie powrotu tego tematu można znaleźć w [tym PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Jak naprawić błąd restartu TWiLight Menu++ lub Guru Meditation Error podczas uruchamiania gry?
Przejdź do ustawień TWLMenu++ i wyłącz opcję `Update recently played list`.

#### Dlaczego przy próbie załadowania gry z karty SD pojawia się biały ekran?
- Najpierw, sprawdź [listę kompatybilności nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) i upewnij się że gra jest kompatybna
- Spróbuj włączyć grę bez włączonych cheatów dla tej gry, ponieważ niektóre cheaty są niekompatybilne z nds_bootstrap. Możesz użyć <kbd class="l">L</kbd> w menu cheatów, by wyłączyć każdego cheata dla danej gry
- Jeśli działało to wcześniej, usuń foldery `fatTable` i `patchOffsetCache` w `sd:/_nds/nds-bootstrap/`

#### Jak korzystać z cheatów?
Musisz mieć cheat DB w postaci pliku `usrcheat.dat` w folderze `sd:/_nds/TWiLightMenu/extras/`. Najbardziej aktualna baza cheatów to [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- Na 3DS baza ta jest dostępna w aplikacji Universal-Updater jako "NDS Cheat Databases" Spowoduje to automatyczne zainstalowanie go w wymaganej lokalizacji.

Alternatywnie, możesz użyć [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) do stworzenia własnego cheat DB.

#### Jak wyświetlić własny obrazek na górnym ekranie motywu DSi?
Losowy obraz `.png` w `sd:/_nds/TWiLightMenu/dsimenu/photos/` będzie pokazywany przy każdym załadowaniu menu.

- Obrazki nie mogą być większe niż 208x156
- Jeśli występują błędy, to najprawdopodobniej jest to błąd z rozmiarem obrazu. Użyj [tinypng](https://tinypng.com), aby zmniejszyć rozmiar

#### Jak mogę zdobyć gry?
Możesz pobrać gry homebrew z [Universal-DB](https://db.universal-team.net/ds) i [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Aby uzyskać zrzuty swoich gier:
- Na DS możesz użyć [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), aby zrzucić swoje gry GBA i, jeśli masz flashcard Pola-2, gry DS
- Na DSi możesz użyć [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases), aby zrzucić swoje gry DS i DSiWare
- Na 3DS możesz użyć [GodMode9](https://github.com/d0k3/GodMode9/releases), aby zrzucić swoje gry DS, DSiWare i tytuły z Wirtualnej Konsoli

#### Czy mogę przenieść pliki zapisu z karty gry na kartę SD lub odwrotnie?
Tak, możesz użyć [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) na DSi i 3DS lub [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) na 3DS.

#### Jak zmienić język TWiLight Menu++?
1. Otwórz ustawienia TWiLight Menu++, możesz to zrobić poprzez przytrzymanie <kbd>SELECT</kbd> kiedy TWiLight Menu++ się uruchamia
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard/3DS) or twice (on DSi)
1. Zmieniaj pierwszą opcję, dopóki nie zobaczysz wybranego języka, następnie opuść ustawienia
   - Możesz chcieć też zmienić dwie następne opcje, ponieważ odpowiadają one za język gier DS i ich tytuły w TWiLight Menu++

#### Czy to emulator DS(i)?
Nie, to nie jest emulator. Menu i gry DS (ładowane przez nds-bootstrap) są uruchamiane natywnie w trybie DS/DSi konsoli. Jedynymi emulowanymi konsolami są konsole z przeszłości, ale częściowo GBA (ponieważ niektóre lub wszystkie części, takie jak grafika, są uruchamiane natywnie).

#### Jakie systemy obsługuje TWiLight Menu++?

| Format                  | Loader                                            | Rozszerzenia                           | Plik zapisu                            |
| ----------------------- | ------------------------------------------------- | -------------------------------------- | -------------------------------------- |
| ARGV[^1]                | Native                                            | `.argv`                                |                                        |
| Atari 2600              | [StellaDS][stellads]                              | `.a26`                                 |                                        |
| Atari 5200              | [A5200DS][a5200ds]                                | `.a52`                                 |                                        |
| Atari 7800              | [A7800DS][a7800ds]                                | `.a78`                                 |                                        |
| Atari XEGS              | [XEGS-DS][xegs-ds]                                | `.xex`, `.atr`                         |                                        |
| DS                      | [nds-bootstrap][ndsbs], kernel flashcard, natywny | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nazwa romu].sav`[^2]           |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]      | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[nazwa romu].pub`, `[nazwa romu].prv` |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                                | `.plg`                                 |                                        |
| Game Boy (Color)        | [GameYob][gameyob]                                | `.gb`, `.sgb`, `.gbc`                  | `[nazwa romu].sav`                     |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], natywny[^5]         | `.agb`, `.gba`, `.mb`                  | `[nazwa romu].sav`                     |
| Game Gear               | [S8DS][s8ds]                                      | `.gg`                                  | `[nazwa romu].gg.sav`                  |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]       | `.gen`                                 | `[nazwa romu].srm`[^6]                 |
| Master System           | [S8DS][s8ds]                                      | `.sms`                                 | `[nazwa romu].sms.sav`                 |
| Film MPEG4              | [MPEG4 Player][mpeg4player]                       | `.mp4`                                 |                                        |
| NES/Famicom             | [nesDS][nesds]                                    | `.nes`, `.fds`                         | `[nazwa romu].sav`                     |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                          | `.pce`                                 |                                        |
| Film RVID               | [Rocket Video Player][rvidplayer]                 | `.rvid`                                |                                        |
| SNES[^7]                | [SNEmulDS][snemulds]                              | `.smc`, `.sfc`                         | `[nazwa romu].srm`[^8]                 |
{:.table}

- Footnotes -
{:footnotes}

#### Dlaczego w sudokuhax nie działa dotyk?
W zależności od zapisanego pliku sudokuhax, przyciski na ekranie dotykowym mogą nie działać.

#### Czy The Biggest Loser może uruchomić TWiLight Menu++?
Nie. Ponieważ The Biggest Loser jest grą typu Pola-1, a nie DSiWare, dostęp do SD jest wyłączony podczas korzystania z kart Pola-1.

[^1]: Pliki tekstowe zawierające ścieżkę do aplikacji DS homebrew i potrzebne argumenty do jej uruchomienia. Zobacz [README nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) aby uzyskać więcej informacji
[^2]: Tylko dla detalicznych ROMów, aplikacje homebrew nie mają określonych plików zapisu
[^3]: Działa tylko z flashcardem SuperCard DSTWO, ponieważ kartridż ma dodatkową moc obliczeniową i więcej RAMu
[^4]: Kiedy działa w trybie DSi, może korzystać z DSP dla lepszego dźwięku
[^5]: Wymaga karty flash Pola-2 i dlatego działa tylko na DS Phat i DS Lite
[^6]: jEnesis może zapisywać tylko podczas uruchamiania z flascharda, ale PicoDriveTWL może zapisywać z SD jak i flashcarda
[^7]: Wyświetlane tylko przy korzystaniu z karty flash, wewnętrznej karty SD 3DS-a lub DSi z zainstalowanym Unlaunch
[^8]: Można zapisać tylko podczas uruchamiania z flashcard

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
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
