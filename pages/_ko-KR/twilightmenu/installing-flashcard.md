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
1. `TWiLightMenu-Flashcard.7z`의 최신버전을 [깃허브 페이지](https://github.com/DS-Homebrew/TWiLightMenu/releases)에서 다운로드하세요.
1. `TWiLightMenu-Flashcard.7z`를 압축 해제합니다.
1. Flashcard의 SD 카드 루트에 `_nds` 폴더를 복사합니다.
1. Flashcard의 SD 카드 루트에 `BOOT.NDS` 파일을 복사합니다.
1. Flashcard의 SD 카드 루트에 `roms` 폴더를 복사합니다.
1. 세이브 데이터를 이미 갖고있다면, DS ROM의 위치에 있는 `.sav` 파일을 `saves` 폴더에 넣으세요. (DS ROM의 위치에도 있습니다.)
1. ...
   - **DS Phat / Lite 이용자: **`BOOT.NDS`를 부팅할 때, 하얀 화면이 지속된다면 DS 메모리 확장 팩을 삽입하고 다시 시도해보세요.
   - **DSi/3DS 이용자: **본체의 SD 카드에서 TWLMenu++를 실행하고, `Slot-1에서 SCFG 접근`을 '켬'으로 합니다.
      - 이렇게 하면 본체의 SD카드에 접근할 수 있고, TWL 클럭 속도 또는 VRAM 속도 증폭을 flashcard 게임에서 사용할 수 있도록 합니다.

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
   - **DS Phat / DS Lite 이용자:** DS 메뉴의 설정에 들어가서 Auto-start를 켜면 부팅할 때 Flashcard가 시작됩니다.
   - **DSi / 3DS 이용자:** TWLMenu++를 본체의 SD 카드에서 실행하고, `Slot-1 자동 시작`을 켭니다.
