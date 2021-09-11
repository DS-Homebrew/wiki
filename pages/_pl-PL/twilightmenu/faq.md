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

#### Why does my 3DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM może być uszkodzony. Postępuj zgodnie z tym poradnikiem, aby naprawić problem: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Jak rozwiązać problem białego ekranu podczas uruchamiania TWiLight Menu++?
- Najpierw, spróbuj wstawić konsolę w tryb uśpienia (np. poprzez zamknięcie konsoli albo poprzez wciśnięcie przycisku uśpienia na O2DS), a następnie ją "obudź"
- Jeśli to nie zadziała, sformatuj kartę SD do formatu FAT32 z rozmiarem klastra/alokacji 32 KB
- Jeśli to też nie zadziała, spróbuj innej karty SD

#### Gdzie jest motyw Acekard/Wood UI?
The Acekard (also called Wood UI) theme was removed due to its buggy behavior and causing SD card corruption. Proszę poczekaj na poprawkę. Postępy w zakresie powrotu tego tematu można znaleźć w [tym PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Jak naprawić błąd restartu TWiLight Menu++ lub Guru Meditation Error podczas uruchamiania gry?
Przejdź do ustawień TWLMenu++ i wyłącz opcję `Update recently played list`.

#### Why do I get a white screen when trying to load a DS game from SD card?
See [Why do I get a white screen when trying to load a game from SD card?](../nds-bootstrap/faq?faq=why-do-i-get-a-white-screen-when-trying-to-load-a-game-from-sd-card) on the nds-bootstrap FAQ page.

#### Jak korzystać z cheatów?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### Jak wyświetlić własny obrazek na górnym ekranie motywu DSi?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### Jak mogę zdobyć gry?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### Jak zmienić język TWiLight Menu++?
1. Otwórz ustawienia TWiLight Menu++, możesz to zrobić poprzez przytrzymanie <kbd>SELECT</kbd> kiedy TWiLight Menu++ się uruchamia
1. Naciśnij <kbd class="l">L</kbd> lub <kbd class="face">Y</kbd> raz (na karcie flash/3DS) lub dwa razy (na DSi)
1. Zmieniaj pierwszą opcję, dopóki nie zobaczysz wybranego języka, następnie opuść ustawienia
   - Możesz chcieć też zmienić dwie następne opcje, ponieważ odpowiadają one za język gier DS i ich tytuły w TWiLight Menu++

#### Czy to emulator DS(i)?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### Jakie systemy obsługuje TWiLight Menu++?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Dlaczego w sudokuhax nie działa dotyk?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Czy The Biggest Loser może uruchomić TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.
