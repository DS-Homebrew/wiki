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
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. `TWiLightMenu-Flashcard.7z`를 압축 해제합니다.
1. Flashcard의 SD 카드 루트에 `_nds` 폴더를 복사합니다.
1. Flashcard의 SD 카드 루트에 `BOOT.NDS` 파일을 복사합니다.
1. Flashcard의 SD 카드 루트에 `roms` 폴더를 복사합니다.
1. 세이브 데이터를 이미 갖고있다면, DS ROM의 위치에 있는 `.sav` 파일을 `saves` 폴더에 넣으세요. (DS ROM의 위치에도 있습니다.)
1. ...
   - **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1` and set `Slot-1: Touch Mode` to `DSi Mode`
      - This will let you use TWL clock speed and/or VRAM boost on your flashcard games, as well as both accessing the console's SD card, and running DSi-Enhanced/DSi-Exclusive/DSiWare games in DSi mode from your flashcard

### 사용하고 있는 Flashcard 펌웨어를 이용해 게임을 실행하려면...
1. `Flashcart Loader/(your flashcard)`에 있는 것들을 Flashcard의 마이크로 SD카드의 루트에 추출합니다.
   - 이렇게 했다면, 3번째로 건너뜁니다. 아니라면, 아래 Flashcard 리스트에서 순서에 따라 진행합니다.

1. 아래 Flashcard 이용자:
   - R4i-SDHC
   - r4isdhc.com 카드
   - r4isdhc.hk 카드
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   [여기](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)에서 YSMenu를 설치하도록 합니다.
      - flashcard microSD 루트에 `YSMenu.nds`(없으면 `TTMenu.dat`에서 이름을 변경하면 됨.)와 `TTMenu` 폴더가 있는지 확인합니다.
1. `nds-bootstrap 사용`을 `비활성화`로 설정해서 nds-bootstrap 대신 Flashcard 펌웨어를 쓰도록 합니다.

### TWiLight Menu++ 자동 부팅하기
1. `Autoboot/(사용하는 flashcard)`에 있는 것들을 Flashcard의 마이크로 SD카드의 루트에 추출합니다.
   - 사용중인 Flashcard가 보이지 않는다면 이 과정을 건너뛰세요.
1. ...
   - **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
