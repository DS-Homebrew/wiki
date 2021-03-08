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

#### TWiLight Menu++를 실행할 때 화면이 안나옴, 크래시, 전원이 나가는 등의 증상이 생기는 이유가 뭔가요?
TWL_FIRM이 알 수 없는 이유로 망가졌을 수 있습니다. 문제를 해결하기 위해 다음 가이드를 따르세요: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### TWiLight Menu++를 부팅할 때 하얀 화면만 떠있는 문제는 어떻게 고칠 수 있나요?
- 가장 먼저, 본체의 뚜껑을 닫아서 슬립모드로 전환했다가 다시 여세요. (구형 2DS의 경우 슬립모드 스위치를 전환했다가 다시 원래대로 돌리세요.)
- 이래도 효과가 없으면, 사용중인 SD카드를 파일 시스템은 FAT32, 할당 단위 크기는 32KB로 설정하고 포맷하세요 (용어는 윈도우 파일 탐색기 기준).
- 이렇게까지 했는데도 효과가 없으면, 다른 SD카드로 시도해보세요.

#### 게임을 실행할 때 TWiLight Menu++가 재부팅되거나 Guru Meditation Error가 발생하는 현상을 고치는 방법이 뭔가요?
TWLMenu++ 설정에 가서 `최근 플레이 목록 갱신`을 비활성화하세요.

#### SD카드에서 게임을 불러올 때, 하얀 화면만 떠있는 문제는 어떻게 고칠 수 있나요?
- 가장 먼저, [nds-bootstrap 호환성 리스트](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)를 확인해서 실행하려는 게임이 호환되는지 확인하세요.
- nds-bootstrap과 호환되지 않는 치트가 있을 수 있으니, 해당 게임의 모든 치트를 비활성화하세요. 이 때, <kbd class="l">L</kbd> 버튼으로 게임의 모든 치트를 비활성화 할 수 있습니다.
- 만약 DSi 향상 게임을 실행하려고 한다면, TWiLight Menu++가 `DS 모드`로 되어있지는 않은지 확인하세요.
- 이전에 작동한 적이 있으면, `sd:/_nds/nds-bootstrap/`에서 `fatTable`과 `patchOffsetCache`폴더를 지우세요.

#### 치트를 사용할 수 있나요?
`sd:/_nds/TWiLightMenu/extras/` 폴더 안에 `usrcheat.dat` 형식의 치트 데이터베이스가 필요합니다. 가장 최신의 치트 데이터베이스는 [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/) 입니다. 대신에, [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html)를 이용해서 치트 데이터베이스를 만들 수도 있습니다.

#### DSi 테마 위쪽 화면의 사진을 커스텀하는 방법이 있나요?
메뉴를 불러올때마다 `sd:/_nds/TWiLightMenu/dsimenu/photos/` 안에 있는 `.png` 파일을 무작위로 보여줍니다.

- 이미지의 가로세로 크기는 208x156을 넘어서는 안됩니다.
- 오류는 대부분 이미지의 용량때문에 발생합니다. 이미지 용량을 줄이려면 [tinypng](https://tinypng.com)를 이용해주세요.

#### 게임은 어디서 가져오죠?
홈브류 게임들은 [Universal-DB](https://db.universal-team.net/ds) 와 [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications)에서 다운로드하실 수 있습니다. 시중에 유통되는 게임의 덤프를 뜨는 방법:
- DS 본체 상에서 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 GBA 게임이나 Slot-2 flashcard, DS 게임를 덤프할 수 있습니다.
- DSi 상에서[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 DS 게임이나 DSi웨어를 덤프할 수 있습니다.
- 3DS 상에서[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용해 DS 게임이나 DSi웨어, 버추얼 콘솔 게임을 덤프할 수 있습니다.

#### 세이브 파일을 게임 카드에서 SD카드로 혹은, 그 반대로 이동시킬 수 있나요?
네. DSi에서 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)를 이용하거나 3DS에서 [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)를 이용할 수 있습니다.

#### TWiLight Menu++의 언어를 변경하는 방법이 뭔가요?
1. TWiLight Menu++의 설정을 여세요. TWiLight Menu++가 로딩될 때 <kbd>SELECT</kbd>버튼을 누르면 바로 설정으로 넘어갈 수 있습니다.
1. <kbd class="l">L</kbd> 또는 <kbd class="face">Y</kbd>를 한 번 (flashcard / 3DS) 또는 두 번 (DSi) 누르세요.
1. 첫 번째 옵션을 설정하고 싶은 언어가 보일때까지 변경하고, 설정에서 나옵니다.
   - DS 게임과 그 게임 제목의 언어를 변경하려고 할 때에는, 두 번째 옵션을 변경하면 됩니다.

#### 이건 DS(i) 에뮬레이터인가요?
아니오, 이건 에뮬레이터가 아닙니다. 메뉴와 DS 게임들(nds-bootstrap를 통해 로드된 것)은 콘솔의 DS/DSi 모드에서 네이티브로 실행됩니다. 에뮬레이션된 유일한 콘솔은 일부분이며, 과거 콘솔인 GBA뿐입니다.(그래픽과 같은 일부 또는 모든 부분이 네이티브로 실행됨).

#### TWiLight Menu++가 지원하는 게임기는 어떤게 있나요?

| 포맷                    | 로더                                          | 확장자                                    | 세이브 파일                         |
| --------------------- | ------------------------------------------- | -------------------------------------- | ------------------------------ |
| ARGV[^1]              | 네이티브                                        | `.argv`                                |                                |
| 아타리 2600              | [StellaDS][stellads]                        | `.a26`                                 |                                |
| 아타리 5200              | [A5200DS][a5200ds]                          | `.a52`                                 |                                |
| 아타리 7800              | [A7800DS][a7800ds]                          | `.a78`                                 |                                |
| 아타리 XEGS              | [XEGS-DS][xegs-ds]                          | `.xex`, `.atr`                         |                                |
| DS                    | [nds-bootstrap][ndsbs], flashcard 커널, 네이티브  | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom 이름].sav`[^2]       |
| DSi웨어                 | [Unlaunch][unlaunch]                        | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom 이름].pub`, `[rom 이름].prv` |
| DSTWO 플러그인            | [DSTWO][dstwo][^3]                          | `.plg`                                 |                                |
| 게임보이 (컬러)             | [GameYob][gameyob]                          | `.gb`, `.sgb`, `.gbc`                  | `[rom 이름].sav`                 |
| 게임보이 어드밴스             | [GBARunner2][gbarunner2][^4], native[^5]    | `.agb`, `.gba`, `.mb`                  | `[rom 이름].sav`                 |
| 게임 기어                 | [S8DS][s8ds]                                | `.gg`                                  | `[rom 이름].gg.sav`              |
| 제네시스 / 메가 드라이브        | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl] | `.gen`                                 | `[rom 이름].srm`[^6]             |
| 마스터 시스템               | [S8DS][s8ds]                                | `.sms`                                 | `[rom 이름].sms.sav`             |
| MPEG4 비디오             | [MPEG4 Player][mpeg4player]                 | `.mp4`                                 |                                |
| NES / 패미컴             | [nesDS][nesds]                              | `.nes`, `.fds`                         | `[rom 이름].sav`                 |
| PC 엔진 / TurboGrafx-16 | [NitroGrafx][nitrografx]                    | `.pce`                                 |                                |
| RVID 비디오              | [Rocket Video Player][rvidplayer]           | `.rvid`                                |                                |
| SNES[^7]              | [SNEmulDS][snemulds]                        | `.smc`, `.sfc`                         | `[rom 이름].srm`[^8]             |
{:.table}

- Footnotes -
{:footnotes}

#### sudokuhax에서 왜 터치 입력이 작동되지 않나요?
sudokuhax의 세이브 파일에 따라 터치스크린 입력이 작동하지 않을 수 있습니다.

#### The Biggest Loser가 TWiLight Menu++를 부팅할 수 있나요?
안됩니다. The Biggest Loser는 Slot-1 게임이고, DSi웨어 게임이 아니기 때문에, Slot-1 카드가 실행될 때에는 SD 접근이 비활성화됩니다.

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
