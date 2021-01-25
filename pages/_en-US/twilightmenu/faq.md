---
lang: en-US
layout: wiki
section: twilightmenu
category: other
title: FAQ & Troubleshooting
description: FAQs and troubleshooting for TWiLight Menu++
---

For more FAQs, please visit the [GBAtemp thread](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Q: Why does my 3DS / 2DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
A: TWL_FIRM might've somehow got corrupted.
Follow this guide to fix the issue: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Q: How do I fix getting a white screen when booting TWiLight Menu++?
A:
- First, try putting the console in sleep mode (e.g. closing the console's lid, or pressing the sleep button on the O2DS), then wake up the console from it
- If that doesn't work, format your SD card to FAT32 with 32KB cluster/allocation size
- If that also doesn't work, try a different SD card

#### Q: Why do I get a white screen when trying to load a game from SD Card?
A:
- First, check [the nds-bootstrap compatibility list](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) and make sure your game is compatible
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

#### Q: Can I get the save files from my game cards onto my SD card or vise versa?
A: Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### Q: How do I change TWiLight Menu++'s language?
A:
1. Open TWiLight Menu++ settings, you can do this by holding <kbd>SELECT</kbd> while loading TWiLight Menu++
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard / 3DS) or twice (on DSi)
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the next two options as they control the language of DS games and their titles in TWiLight Menu++

#### Q: What systems does TWiLight Menu++ support?

A:

| Format                    | Loader                                           | Extensions                             | Save file                                          |
| ------------------------- | ------------------------------------------------ | -------------------------------------- | -------------------------------------------------- |
| [ARGV][nds-hb-menu-argv]  | Native                                           | `.argv`                                |                                                    |
| Atari 2600                | [StellaDS][stellads]                             | `.a26`                                 |                                                    |
| Atari 5200                | [A5200DS][a5200ds]                               | `.a52`                                 |                                                    |
| Atari 7800                | [A7800DS][a7800ds]                               | `.a78`                                 |                                                    |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`<br>(retail ROMs only)       |
| DSiWare                   | [Unlaunch][unlaunch]                             | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv`                 |
| DSTWO Plugin              | [DSTWO][dstwo] (requires DSTWO flashcard)        | `.plg`                                 |                                                    |
| Game Boy (Color)          | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                                   |
| Game Boy Advance          | [GBARunner2][gbarunner2], native                 | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                                   |
| Game Gear                 | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                                |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`<br>(flashcard only for jEnesisDS) |
| Master System             | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`                               |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                                    |
| NES / Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                                   |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                    |
| RVID Video                | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                    |
| SNES                      | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`<br>(flashcard only)               |

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nds-hb-menu-argv]: https://github.com/devkitPro/nds-hb-menu#passing-arguments
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm


#### Q: Why isn't touch input working on sudokuhax?
A: Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Q: Can The Biggest Loser boot TWiLight Menu++?
A: No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.
