---
lang: ko-KR
layout: wiki
section: twilightmenu
category: installing
title: 설치하기 (DSi)
long_title: TWiLight Menu++ 설치하기 (DSi)
description: 닌텐도 DSi에서 TWiLight Menu++를 설치하는 방법
---

아직 사용자의 DSi 본체에 홈브류를 설치하지 않았다면, TWiLight Menu++를 설치하기 위해 [dsi.cfw.guide](https://dsi.cfw.guide)를 따르세요.
{:.alert .alert-info}

### 설치하기
1. 최신 버전의 [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)를 다운로드 하세요.
1. `TWiLightMenu-DSi.7z`를 압축 해제합니다.
1. SD 카드 루트에 `_nds` 폴더를 복사합니다.
1. SD 카드 루트에 `BOOT.NDS` 파일을 복사합니다.
1. SD 카드 루트에 `roms` 폴더를 복사합니다.
1. **hiyaCFW 이용자:** SD 카드 루트에 `title` 폴더를 복사합니다.

### Unlaunch로 자동 부팅하기
1. <kbd class="face">A</kbd>와 <kbd class="face">B</kbd>를 누르면서 DSi 본체의 전원을 켜세요.
1. Unlaunch menu에서 `OPTIONS`에 진입하세요.
1. 하단 화면에서 `BOOT.NDS`가 표시된`TWiLight Menu++`를 `NO BUTTON`으로 설정하거나 또는 임의의 버튼으로 선택해서 설정합니다.

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
     - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, launch your flashcard
     - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
     - If the SELECT menu is enabled, you can do so there as well
     - If you use the 3DS theme, touch the Game Card/SD Card icon
     - If you use the R4/GBC theme, press `L` button
