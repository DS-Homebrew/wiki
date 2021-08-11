---
lang: pl-PL
layout: faq
section: twilightmenu
category: other
title: FAQ & Rozwiązywanie problemów
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs i troubleshooting dla TWiLight Menu++
---

Dla więcej FAQ, odwiedź [wątek na GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Dlaczego po uruchomieniu TWiLight Menu++ mój 3DS/2DS utknął na czarnym ekranie, ulega awarii, wyłącza się itp.?
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
1. Naciśnij <kbd class="l">L</kbd> lub <kbd class="face">Y</kbd> raz (na karcie flash/3DS) lub dwa razy (na DSi)
1. Zmieniaj pierwszą opcję, dopóki nie zobaczysz wybranego języka, następnie opuść ustawienia
   - Możesz chcieć też zmienić dwie następne opcje, ponieważ odpowiadają one za język gier DS i ich tytuły w TWiLight Menu++

#### Czy to emulator DS(i)?
Nie, to nie jest emulator. Menu i gry DS (ładowane przez nds-bootstrap) są uruchamiane natywnie w trybie DS/DSi konsoli. Jedynymi emulowanymi konsolami są konsole z przeszłości, ale częściowo GBA (ponieważ niektóre lub wszystkie części, takie jak grafika, są uruchamiane natywnie).

#### Jakie systemy obsługuje TWiLight Menu++?

See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Dlaczego w sudokuhax nie działa dotyk?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Czy The Biggest Loser może uruchomić TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.
