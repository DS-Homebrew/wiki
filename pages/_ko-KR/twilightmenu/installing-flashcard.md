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
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. 세이브 데이터를 이미 갖고있다면, DS ROM의 위치에 있는 `.sav` 파일을 `saves` 폴더에 넣으세요. (DS ROM의 위치에도 있습니다.)
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and/or insert a DS Memory Expansion Pak, and try again

### TWiLight Menu++ 자동 부팅하기
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - 사용중인 Flashcard가 보이지 않는다면 이 과정을 건너뛰세요.
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### 사용하고 있는 Flashcard 펌웨어를 이용해 게임을 실행하려면...

이 섹션은 flashcard가 TWiLight Menu++를 자동 부팅하도록 설정 되있을 시에만 적용됩니다. 방법은 위 섹션을 참고하세요.
{:.alert .alert-warning}

모든 Flashcard가 이 방식으로 게임을 실행하는 것을 지원하지는 않는다는 걸 알아 주세요. 만약 아래 절차가 당신의 Flashcard에 맞지 않는다면, 이 부분을 건너뛰셔도 됩니다,
{:.alert .alert-warning}

Please note that you'll lose the ability to use cheats when running games in this fashion. If you want to retain cheat functionality, please skip this section.
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - A README.txt file is present in the `Flashcart Loader` folder, to help find which flashcart loader is appropriate for your flashcard.
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

1. 아래 Flashcard 이용자:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 카드 (.hk, .com.cn **아님**)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4 Gold 3DS RTS (r4i-gold.com)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (non-SDHC 모델은 ***지원 안됨***)
   - M3 DS Real
   - M3i Zero (GMP-Z003가 아닌 모델)
   - iTouchDS와 iTouch2 (M3Real_M3iZero YSMenu 파일을 사용함)
   - R4(i)RTS (r4rts.com) (M3Real_M3iZero YSMenu 파일을 사용함)
   - R4 SDHC RTS (black cartridge) (r4isdhc.com) (M3Real_M3iZero YSMenu 파일을 사용함)

   [RetroGameFan의 YSMenu](https://gbatemp.net/download/35737/)를 설치해 주세요.
      - Flashcard의 microSD카드 루트에 `YSMenu.nds` (`TTMenu.dat`에서 이름을 변경해도 됨)과 `TTMenu`가 있는 것을 확인해 주세요.
      - Do not copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
