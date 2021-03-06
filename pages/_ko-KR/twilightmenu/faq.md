---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 자주 묻는 질문 & 문제 해결
description: TWiLight Menu++를 위한 자주 묻는 질문 / 문제 해결
---

더 많은 FAQ를 원하신다면, [GBAtemp 스레드](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)를 참고하세요.
{:.alert .alert-info}

#### Why does my 3DS / 2DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM might've somehow got corrupted. 문제를 해결하기 위해 다음 가이드를 따르세요: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### How do I fix getting a white screen when booting TWiLight Menu++?
- 가장 먼저, 본체의 뚜껑을 닫아서 슬립모드로 전환했다가 다시 여세요. (구형 2DS의 경우 슬립모드 스위치를 전환했다가 다시 원래대로 돌리세요.)
- 이래도 효과가 없으면, 사용중인 SD카드를 파일 시스템은 FAT32, 할당 단위 크기는 32KB로 설정하고 포맷하세요 (용어는 윈도우 파일 탐색기 기준).
- 이렇게까지 했는데도 효과가 없으면, 다른 SD카드로 시도해보세요.

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Go into TWLMenu++ Settings, and disable `Update recently played list`.

#### Why do I get a white screen when trying to load a game from SD Card?
- 가장 먼저, [nds-bootstrap 호환성 리스트](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)를 확인해서 실행하려는 게임이 호환되는지 확인하세요.
- nds-bootstrap과 호환되지 않는 치트가 있을 수 있으니, 해당 게임의 모든 치트를 비활성화하세요. 이 때, <kbd class="l">L</kbd> 버튼으로 게임의 모든 치트를 비활성화 할 수 있습니다.
- 만약 DSi 향상 게임을 실행하려고 한다면, TWiLight Menu++가 `DS 모드`로 되어있지는 않은지 확인하세요.
- 이전에 작동한 적이 있으면, `sd:/_nds/nds-bootstrap/`에서 `fatTable`과 `patchOffsetCache`폴더를 지우세요.

#### How do I use cheats?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### How do I show a custom picture on the top screen of the DSi theme?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- 이미지의 가로세로 크기는 208x156을 넘어서는 안됩니다.
- 오류는 대부분 이미지의 용량때문에 발생합니다. 이미지 용량을 줄이려면 [tinypng](https://tinypng.com)를 이용해주세요.

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). To get dumps of your retail games:
- DS 본체 상에서 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 GBA 게임이나 Slot-2 flashcard, DS 게임를 덤프할 수 있습니다.
- DSi 상에서[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 DS 게임이나 DSi웨어를 덤프할 수 있습니다.
- 3DS 상에서[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 DS 게임이나 DSi웨어, 버추얼 콘솔 게임을 덤프할 수 있습니다.

#### Can I get the save files from my game cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### How do I change TWiLight Menu++'s language?
1. TWiLight Menu++의 설정을 여세요. TWiLight Menu++가 로딩될 때 <kbd>SELECT</kbd>버튼을 누르면 바로 설정으로 넘어갈 수 있습니다.
1. <kbd class="l">L</kbd> 또는 <kbd class="face">Y</kbd>를 한 번 (flashcard / 3DS) 또는 두 번 (DSi) 누르세요.
1. 첫 번째 옵션을 설정하고 싶은 언어가 보일때까지 변경하고, 설정에서 나옵니다.
   - DS 게임과 그 게임 제목의 언어를 변경하려고 할 때에는, 두 번째 옵션을 변경하면 됩니다.

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?

| Format                    | Loader                                           | Extensions                             | Save file                          |
| ------------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------- |
| ARGV[^1]                  | Native                                           | `.argv`                                |                                    |
| Atari 2600                | [StellaDS][stellads]                             | `.a26`                                 |                                    |
| Atari 5200                | [A5200DS][a5200ds]                               | `.a52`                                 |                                    |
| Atari 7800                | [A7800DS][a7800ds]                               | `.a78`                                 |                                    |
| Atari XEGS                | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                    |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]         |
| DSiWare                   | [Unlaunch][unlaunch]                             | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                    |
| Game Boy (Color)          | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                   |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                   |
| Game Gear                 | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^6]               |
| Master System             | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`               |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                    |
| NES / Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                   |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                    |
| RVID Video                | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                    |
| SNES[^7]                  | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]               |
{:.table}

- Footnotes -
{:footnotes}

#### Why isn't touch input working on sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Can The Biggest Loser boot TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the cartridge
[^4]: When running in DSi Mode, it can use the DSP for better sound
[^5]: Requires a Slot-2 flashcard and thus only works on DS Phat and DS Lite
[^6]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard
[^7]: Only shown when using a flashcard, 3DS's internal SD card, or DSi with Unlaunch installed
[^8]: Can only save when running from a flashcard

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
