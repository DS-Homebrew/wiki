---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 조작법
long_title: TWiLight Menu++ 조작법
description: TWiLight Menu++의 조작법
---

#### 닌텐도 DSi, 닌텐도 3DS, 세가 새턴, 홈브류 런처 테마
- <kbd>Left</kbd>/<kbd>Right</kbd>: Select a game/app
- <kbd class="face">A</kbd>/<kbd>START</kbd>: Launch game/app
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Switch pages
- (DSi/Saturn/HBL theme) <kbd>SELECT</kbd> + <kbd>Up</kbd>/<kbd>Down</kbd> & release <kbd>SELECT</kbd>: Switch between the SD card and flashcard
- <kbd class="face">Y</kbd>: 게임 별 설정
   - <kbd class="face">X</kbd>: 치트 메뉴
      - <kbd class="face">A</kbd>: 치트 켬/끔
      - <kbd class="face">B</kbd>: 치트 메뉴 나가기
      - <kbd class="face">X</kbd>: 저장하고 나가기
      - <kbd class="face">Y</kbd>: 치트 설명 보기
      - <kbd class="l">L</kbd>: 모든 치트 비활성화하기
- <kbd class="face">X</kbd>: 게임 제거/숨기기
- (DSi/Saturn/HBL theme) <kbd>SELECT</kbd>: SELECT menu or DS Classic Menu (Where system menu, TWiLight Menu++ Settings, and GBA Mode can be accessed)

#### R4 테마
- <kbd>Up</kbd>/<kbd>Down</kbd>: Select a game/app
- <kbd class="face">A</kbd>: Launch game/app
- <kbd class="l">L</kbd>: SD카드와 flashcard 간 전환
- <kbd class="face">Y</kbd>: 게임 별 설정
   - <kbd class="face">X</kbd>: 치트 메뉴
      - <kbd class="face">A</kbd>: 치트 켬/끔
      - <kbd class="face">B</kbd>: 치트 메뉴 나가기
      - <kbd class="face">X</kbd>: 저장하고 나가기
      - <kbd class="face">Y</kbd>: 치트 설명 보기
      - <kbd class="l">L</kbd>: 모든 치트 비활성화하기

#### DS(i) ROMs (using nds-bootstrap)
These do not apply to DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>위</kbd> + <kbd class="face">X</kbd> 1초 동안 누름: 위 아래 화면 전환
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>아래</kbd> + <kbd class="face">A</kbd> 3초 동안 누름: RAM을 덤프하여 `sd:/_nds/nds-bootstrap`에 `ramDump.bin`파일로 저장
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">B</kbd> for 2 seconds: Return to TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>: Open the in-game menu
   - RAM Viewer
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM Editor
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
         - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- The in-game menu is not accessible in DSi Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will instead exit the game
- Only the screen swap button combo will work in B4DS mode, the others will not work
- Returning to TWiLight Menu++ may not work on some O3DS models

#### 부팅 단축키
These should be pressed on the TWiLight Menu++ splash screen / right after the Nintendo DSi splash screen.

- <kbd>SELECT</kbd>: 설정 진입
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: TWiLight Menu++ 설정 초기화
- <kbd class="face">B</kbd>: Boot the last ran ROM
