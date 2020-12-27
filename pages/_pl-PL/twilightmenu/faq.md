---
lang: pl-PL
layout: wiki
section: twilightmenu
title: FAQ & Rozwiązywanie problemów
category: Inne
---

Dla więcej FAQ, odwiedź [wątek na GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).

#### P: Dlaczego mój 3DS/2DS zatrzymuje się na czarnym ekranie podczas włączania TWiLight Menu++ albo dlaczego mój 3DS/2DS się wyłącza podczas włączania TWiLight Menu++?
O: TWL_FIRM może być uszkodzony. Postępuj zgodnie z tym przewodnikiem, aby naprawić problem: https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide

#### P: Mam biały ekran podczas uruchamiania TWiLight Menu++. Jak to naprawić?
O:
- Najpierw, spróbuj wstawić konsolę w tryb uśpienia (np. poprzez zamknięcie konsoli albo poprzez wciśnięcie przycisku uśpienia na O2DS), a następnie ją "obudź"
- If that doesn't work, format your SD card to FAT32 with 32KB cluster/allocation size
- Jeśli to też nie zadziała, spróbuj innej karty SD

#### P: Dlaczego dostaję biały ekran podczas uruchamiania gry z karty SD?
O:
- Najpierw, sprawdź [listę kompatybilności nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) i upewnij się że gra jest kompatybna
- If the game that's attempted to be launched is a DSi Enhanced game, then make sure that TWiLight Menu++ is set to use `DS Mode`
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`

#### Q: How do I use cheats?
A: You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### Q: How do I show a custom picture on the top screen of the DSi theme?
A: A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- The file(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use tinypng to reduce the size

#### Q: Why isn't touch input working on sudokuhax?
A: Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Q: Can The Biggest Loser boot TWiLight Menu++?
A: No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

#### Q: How do I get games?
A: You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). You can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump GBA games on DS or DS games on DSi, or [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump DS and 3DS games 3DS.

#### Q: Can I get the save files from my cartridges onto my SD card? / Can I put my save files from the SD onto my cartridges?
A: Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.
