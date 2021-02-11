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

#### Q: TWiLight Menu++를 실행할 때 화면이 안나옴, 크래시, 전원이 나가는 등의 증상이 생기는 이유가 뭔가요?
A: TWL_FIRM이 어떻게든 망가졌을 수 있습니다. 문제를 해결하기 위해 다음 가이드를 따르세요: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### TWiLight Menu++를 부팅할 때 하얀 화면만 떠있는 문제는 어떻게 고칠 수 있나요?
A:
- 가장 먼저, 본체의 뚜껑을 닫아서 슬립모드로 전환했다가 다시 여세요. (구형 2DS의 경우 슬립모드 스위치를 전환했다가 다시 원래대로 돌리세요.)
- 이래도 효과가 없으면, 사용중인 SD카드를 파일 시스템은 FAT32, 할당 단위 크기는 32KB로 설정하고 포맷하세요 (용어는 윈도우 파일 탐색기 기준).
- 이렇게까지 했는데도 효과가 없으면, 다른 SD카드로 시도해보세요.

#### Q: SD카드에서 게임을 불러올 때, 하얀 화면만 떠있는 문제는 어떻게 고칠 수 있나요?
A:
- 가장 먼저, [nds-bootstrap 호환성 리스트](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)를 확인해서 실행하려는 게임이 호환되는지 확인하세요.
- nds-bootstrap과 호환되지 않는 치트가 있을 수 있으니, 해당 게임의 모든 치트를 비활성화하세요. 이 때, <kbd class="l">L</kbd> 버튼으로 게임의 모든 치트를 비활성화 할 수 있습니다.
- 만약 DSi 향상 게임을 실행하려고 한다면, TWiLight Menu++가 `DS 모드`로 되어있지는 않은지 확인하세요.
- 이전에 작동한 적이 있으면, `sd:/_nds/nds-bootstrap/`에서 `fatTable`과 `patchOffsetCache`폴더를 지우세요.

#### Q: 치트를 사용할 수 있나요?
A: `sd:/_nds/TWiLightMenu/extras/` 폴더 안에 `usrcheat.dat` 형식의 치트 데이터베이스가 필요합니다. 가장 최신의 치트 데이터베이스는 [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/) 입니다. 대신에, [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)를 이용해서 치트 데이터베이스를 만들 수도 있습니다.

#### Q: DSi 테마 위쪽 화면의 사진을 커스텀하는 방법이 있나요?
A: 메뉴를 불러올때마다 `sd:/_nds/TWiLightMenu/dsimenu/photos/` 안에 있는 `.png` 파일을 보여줍니다.

- 이미지의 가로세로 크기는 208x156을 넘어서는 안됩니다.
- 오류는 대부분 이미지의 용량때문에 발생합니다. 이미지 용량을 줄이려면 [tinypng](https://tinypng.com)를 이용해주세요.

#### Q: 게임은 어디서 가져오죠?
A: 홈브류 게임들은 [Universal-DB](https://db.universal-team.net/ds) 와 [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications)에서 다운로드하실 수 있습니다. 시중에 유통되는 게임의 덤프를 뜨는 방법:
- DS 본체 상에서 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 GBA 게임이나 Slot-2 flashcard, DS 게임를 덤프할 수 있습니다.
- DSi 상에서[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 DS 게임이나 DSi웨어를 덤프할 수 있습니다.
- 3DS 상에서[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 DS 게임이나 DSi웨어, 버추얼 콘솔 게임을 덤프할 수 있습니다.

#### Q: Can I get the save files from my game cards onto my SD card or vice versa?
A: 네. DSi에서 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용하거나 3DS에서 [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)를 이용할 수 있습니다.

#### Q: TWiLight Menu++의 언어를 변경하는 방법이 뭔가요?
A:
1. TWiLight Menu++의 설정을 여세요. TWiLight Menu++가 로딩될 때 <kbd>SELECT</kbd>버튼을 누르면 바로 설정으로 넘어갈 수 있습니다.
1. <kbd class="l">L</kbd> 또는 <kbd class="face">Y</kbd>를 한 번 (flashcard / 3DS) 또는 두 번 (DSi) 누르세요.
1. 첫 번째 옵션을 설정하고 싶은 언어가 보일때까지 변경하고, 설정에서 나옵니다.
   - DS 게임과 그 게임 제목의 언어를 변경하려고 할 때에는, 두 번째 옵션을 변경하면 됩니다.

#### Q: TWiLight Menu++가 지원하는 게임기는 어떤게 있나요?

A:

| Format                    | Loader                                           | Extensions                             | Save file                          |
| ------------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------- |
| ARGV[^1]                  | Native                                           | `.argv`                                |                                    |
| Atari 2600                | [StellaDS][stellads]                             | `.a26`                                 |                                    |
| Atari 5200                | [A5200DS][a5200ds]                               | `.a52`                                 |                                    |
| Atari 7800                | [A7800DS][a7800ds]                               | `.a78`                                 |                                    |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]         |
| DSiWare                   | [Unlaunch][unlaunch]                             | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                    |
| Game Boy (Color)          | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                   |
| Game Boy Advance          | [GBARunner2][gbarunner2], native[^4]             | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                   |
| Game Gear                 | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^5]               |
| Master System             | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`               |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                    |
| NES / Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                   |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                    |
| RVID Video                | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                    |
| SNES[^6]                  | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^7]               |
{:.table}

- Footnotes -
{:footnotes}

#### Q: sudokuhax에서 왜 터치 입력이 작동되지 않나요?
A: Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Q: The Biggest Loser가 TWiLight Menu++를 부팅할 수 있나요?
A: No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the cartridge
[^4]: Requires a Slot-2 flashcard and thus only works on DS Phat and DS Lite
[^5]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard
[^6]: Only shown when using a flashcard or Unlaunch is installed
[^7]: Can only save when running from a flashcard

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
