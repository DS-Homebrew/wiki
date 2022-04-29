---
lang: ko-KR
layout: wiki
section: twilightmenu
category: installing
title: 설치하기 (Flashcard)
long_title: TWiLight Menu++ 설치하기 (플래시카드)
description: 닌텐도 DS 플래시카드에서 TWiLight Menu++를 설치하는 방법
---

### 설치하기
1. 최신 버전의 [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)를 다운로드 하세요.
1. `TWiLightMenu-Flashcard.7z`를 압축 해제합니다.
1. Flashcard의 SD 카드 루트에 `_nds` 폴더를 복사합니다.
1. Flashcard의 SD 카드 루트에 `BOOT.NDS` 파일을 복사합니다.
1. Flashcard의 SD 카드 루트에 `roms` 폴더를 복사합니다.
1. 세이브 데이터를 이미 갖고있다면, DS ROM의 위치에 있는 `.sav` 파일을 `saves` 폴더에 넣으세요. (DS ROM의 위치에도 있습니다.)
1. ...
   - **DS Phat/Lite 이용자: **`BOOT.NDS`를 부팅할 때, 하얀 화면이 지속된다면 DS 메모리 확장 팩을 삽입하고 다시 시도해보세요.
   - **DSi/3DS 이용자:** TWiLight Menu++를 콘솔 SD 카드에서 실행하고, `Slot-1에서 SCFG 접근` 을 활성화 하고 `Slot-1: 터치 모드`를 `DSi 모드`로 설정하세요.
      - 이렇게 하면 플래시 카드 게임에서 TWL 클락 속도나 VRAM 부스트를 사용할 수 있을 뿐 아니라 본체의 SD 카드에 액세스하거나 플래시 카드에서 DSi 전용, DSi 웨어 게임을 DSi 모드로 실행할 수도 있습니다.
      - With this enabled you can use <kbd>SELECT</kbd> + <kbd>Up</kbd>/<kbd>Down</kbd> to switch between your internal SD card and your flashcard's SD card

### TWiLight Menu++ 자동 부팅하기
1. `Autoboot/(사용하는 flashcard)`에 있는 것들을 Flashcard의 마이크로 SD카드의 루트에 추출합니다.
   - 사용중인 Flashcard가 보이지 않는다면 이 과정을 건너뛰세요.
1. ...
   - **DS Phat/Lite 이용자:** DS 메뉴의 설정에 들어가서 Auto-start를 켜면 부팅할 때 Flashcard가 시작됩니다.
   - **DSi/3DS 이용자:** TWLMenu++를 본체의 SD 카드에서 실행하고, `Slot-1 자동 시작`을 켭니다.

### 사용하고 있는 Flashcard 펌웨어를 이용해 게임을 실행하려면...

Please note this only works if your flashcart is set to autoboot TWiLight Menu++. See above section for how to do so.
{:.alert .alert-warning}

모든 Flashcard가 이 방식으로 게임을 실행하는 것을 지원하지는 않는다는 걸 알아 주세요. 만약 아래 절차가 당신의 Flashcard에 맞지 않는다면, 이 부분을 건너뛰셔도 됩니다,
{:.alert .alert-warning}

1. `Flashcart Loader/(your flashcard)`에 있는 것들을 Flashcard의 마이크로 SD카드의 루트에 추출합니다.
   - 이렇게 했다면, 3번으로 건너뛰셔도 됩니다. 아니라면, 아래 Flashcard 리스트에서 순서에 따라 진행합니다.

1. 아래 Flashcard 이용자:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2020 카드
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (non-SDHC 모델은 ***지원 안됨***)
   - M3 DS Real
   - M3i Zero (GMP-Z003가 아닌 모델)
   - iTouchDS와 iTouch2 (M3Real_M3iZero YSMenu 파일을 사용함)
   - R4(i)RTS (r4rts.com) (M3Real_M3iZero YSMenu 파일을 사용함)
   - R4 SDHC RTS (black cartridge) (r4isdhc.com) (M3Real_M3iZero YSMenu 파일을 사용함)

   [RetroGameFan의 YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)를 설치해 주세요.
      - Flashcard의 microSD카드 루트에 `YSMenu.nds` (`TTMenu.dat`에서 이름을 변경해도 됨)과 `TTMenu`가 있는 것을 확인해 주세요.
1. `nds-bootstrap 사용`을 `비활성화`로 설정해서 nds-bootstrap 대신 Flashcard 펌웨어를 쓰도록 합니다.
