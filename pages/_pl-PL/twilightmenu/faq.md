---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: FAQ & Troubleshooting
---

Dla więcej FAQ, odwiedź [wątek na GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Q: Why does my 3DS / 2DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
A: TWL_FIRM might've somehow got corrupted. Follow this guide to fix the issue: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Q: How do I fix getting a white screen when booting TWiLight Menu++?
O:
- Najpierw, spróbuj wstawić konsolę w tryb uśpienia (np. poprzez zamknięcie konsoli albo poprzez wciśnięcie przycisku uśpienia na O2DS), a następnie ją "obudź"
- If that doesn't work, format your SD card to FAT32 with 32KB cluster/allocation size
- Jeśli to też nie zadziała, spróbuj innej karty SD

#### P: Dlaczego dostaję biały ekran podczas uruchamiania gry z karty SD?
A:
- Najpierw, sprawdź [listę kompatybilności nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) i upewnij się że gra jest kompatybna
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, you can use <kbd class="l">L</kbd> to disable all cheats for a game
- If the game you're trying to launch is a DSi Enhanced game, then make sure that TWiLight Menu++ is set to use `DS Mode`
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`

#### Q: How do I use cheats?
A: You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### Q: How do I show a custom picture on the top screen of the DSi theme?
A: A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### Q: How do I get games?
A: You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcard, DS games
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Q: Can I get the save files from my cartridges onto my SD card or vise versa?
A: Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### Q: How do I change TWiLight Menu++'s language?
A:
1. Open TWiLight Menu++ settings, you can do this by holding <kbd>SELECT</kbd> while loading TWiLight Menu++
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard / 3DS) or twice (on DSi)
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the next two options as they control the language of DS games and their titles in TWiLight Menu++

#### Q: Why isn't touch input working on sudokuhax?
A: Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Q: Can The Biggest Loser boot TWiLight Menu++?
A: No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.
