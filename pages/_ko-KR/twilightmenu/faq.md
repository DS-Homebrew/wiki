---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 자주 묻는 질문 & 문제 해결
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs and troubleshooting for TWiLight Menu++
---

더 많은 FAQ를 원하신다면, [GBAtemp 스레드](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)를 참고하세요.
{:.alert .alert-info}

#### TWiLight Menu++를 실행할 때 화면이 안나옴, 크래시, 전원이 나가는 등의 증상이 생기는 이유가 뭔가요?
TWL_FIRM이 알 수 없는 이유로 망가졌을 수 있습니다. 문제를 해결하기 위해 다음 가이드를 따르세요: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### TWiLight Menu++를 부팅할 때 하얀 화면만 떠있는 문제는 어떻게 고칠 수 있나요?
- 가장 먼저, 본체의 뚜껑을 닫아서 슬립모드로 전환했다가 다시 여세요. (구형 2DS의 경우 슬립모드 스위치를 전환했다가 다시 원래대로 돌리세요.)
- 이래도 효과가 없으면, 사용중인 SD카드를 파일 시스템은 FAT32, 할당 단위 크기는 32 KB로 설정하고 포맷하세요 (용어는 윈도우 파일 탐색기 기준).
- 이렇게까지 했는데도 효과가 없으면, 다른 SD카드로 시도해보세요.

#### 게임을 실행할 때 TWiLight Menu++가 재부팅되거나 Guru Meditation Error가 발생하는 현상을 고치는 방법이 뭔가요?
TWLMenu++ 설정에 가서 `최근 플레이 목록 갱신`을 비활성화하세요.

#### SD카드에서 게임을 불러올 때, 하얀 화면만 떠있는 문제는 어떻게 고칠 수 있나요?
- 가장 먼저, [nds-bootstrap 호환성 리스트](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)를 확인해서 실행하려는 게임이 호환되는지 확인하세요.
- nds-bootstrap과 호환되지 않는 치트가 있을 수 있으니, 해당 게임의 모든 치트를 비활성화하세요. 이 때, <kbd class="l">L</kbd> 버튼으로 게임의 모든 치트를 비활성화 할 수 있습니다.
- 만약 DSi 향상 게임을 실행하려고 한다면, TWiLight Menu++가 `DS 모드`로 되어있지는 않은지 확인하세요.
- 이전에 작동한 적이 있으면, `sd:/_nds/nds-bootstrap/`에서 `fatTable`과 `patchOffsetCache`폴더를 지우세요.

#### 치트를 사용할 수 있나요?
`sd:/_nds/TWiLightMenu/extras/` 폴더 안에 `usrcheat.dat` 형식의 치트 데이터베이스가 필요합니다. 가장 최신의 치트 데이터베이스는 [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/) 입니다.
- On the 3DS, this database is available in the Universal Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### DSi 테마 위쪽 화면의 사진을 커스텀하는 방법이 있나요?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### 게임은 어디서 가져오죠?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcard, DS games
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### 세이브 파일을 게임 카드에서 SD카드로 혹은, 그 반대로 이동시킬 수 있나요?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### TWiLight Menu++의 언어를 변경하는 방법이 뭔가요?
1. TWiLight Menu++의 설정을 여세요. TWiLight Menu++가 로딩될 때 <kbd>SELECT</kbd>버튼을 누르면 바로 설정으로 넘어갈 수 있습니다.
1. <kbd class="l">L</kbd> 또는 <kbd class="face">Y</kbd>를 한 번 (flashcard / 3DS) 또는 두 번 (DSi) 누르세요.
1. 첫 번째 옵션을 설정하고 싶은 언어가 보일때까지 변경하고, 설정에서 나옵니다.
   - DS 게임과 그 게임 제목의 언어를 변경하려고 할 때에는, 두 번째 옵션을 변경하면 됩니다.

#### 이건 DS(i) 에뮬레이터인가요?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### TWiLight Menu++가 지원하는 게임기는 어떤게 있나요?

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

#### sudokuhax에서 왜 터치 입력이 작동되지 않나요?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### The Biggest Loser가 TWiLight Menu++를 부팅할 수 있나요?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: DS homebrew 앱의 경로와 실행 인수를 포함한 자세한 사항은 [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) 텍스트 파일을 참고해주세요.
[^2]: 시판되는 롬에 한해, 홈브류에 특정 세이브 파일을 저장하지 않습니다.
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
