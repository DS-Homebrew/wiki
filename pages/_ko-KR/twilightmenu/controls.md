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
- <kbd>Left</kbd>/<kbd>Right</kbd>: 게임 또는 응용프로그램 선택
- <kbd class="face">A</kbd>/<kbd>START</kbd>: 게임 또는 응용프로그램 실행
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> 또는 <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: 페이지 전환
- (DSi/새턴/홈브류 테마) <kbd>SELECT</kbd> + <kbd>위</kbd>/<kbd>아래</kbd> & <kbd>SELECT</kbd>를 손에서 뗌: SD카드와 flashcard 간 전환
- <kbd class="face">Y</kbd>: 게임 별 설정
   - <kbd class="face">X</kbd>: 치트 메뉴
      - <kbd class="face">A</kbd>: 치트 켬/끔
      - <kbd class="face">B</kbd>: 치트 메뉴 나가기
      - <kbd class="face">X</kbd>: 저장하고 나가기
      - <kbd class="face">Y</kbd>: 치트 설명 보기
      - <kbd class="l">L</kbd>: 모든 치트 비활성화하기
- <kbd class="face">X</kbd>: 게임 제거/숨기기
- (DSi/새턴/홈브류 테마) <kbd>SELECT</kbd>: SELECT 메뉴 또는 DS 클래식 메뉴 (시스템 메뉴, TWiLightMenu++ 설정, GBA모드에 접근할 수 있는 곳)

#### R4 테마
- <kbd>위</kbd>/<kbd>아래</kbd>: 게임 또는 응용프로그램 선택
- <kbd class="face">A</kbd>: 게임 또는 응용프로그램 실행
- <kbd class="l">L</kbd>: SD카드와 flashcard 간 전환
- <kbd class="face">Y</kbd>: 게임 별 설정
   - <kbd class="face">X</kbd>: 치트 메뉴
      - <kbd class="face">A</kbd>: 치트 켬/끔
      - <kbd class="face">B</kbd>: 치트 메뉴 나가기
      - <kbd class="face">X</kbd>: 저장하고 나가기
      - <kbd class="face">Y</kbd>: 치트 설명 보기
      - <kbd class="l">L</kbd>: 모든 치트 비활성화하기

#### DS(i) ROM (nds-bootstarp 사용)
다음 단축키는 DSi 웨어에서는 적용되지 않습니다.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>위</kbd> + <kbd class="face">X</kbd> 1초 동안 누름: 위 아래 화면 전환
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 2 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>아래</kbd> + <kbd class="face">B</kbd> 2초 동안 누름: TWiLight Menu++로 돌아가기
- <kbd class="l">L</kbd> + <kbd>아래</kbd> + <kbd>SELECT</kbd>: 게임 내 메뉴 열기
   - <kbd class="r">R</kbd>: Advance by one frame
   - Screenshot
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Change VRAM bank
      - <kbd class="face">A</kbd>: Save screenshot
      - <kbd class="face">B</kbd>: Return to in-game menu
   - RAM Viewer
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="r">R</kbd> + <kbd>Down</kbd>/<kbd>Up</kbd>: Faster scroll
      - <kbd class="r">R</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Fastest scroll
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
- Returning to TWiLight Menu++ may not work on some O3DS models
- The button combination for opening the in-game menu can be changed in the TWiLight Menu++ settings
- Screenshots are saved to `sd:/_nds/nds-bootstrap/screenshots.tar`. This file can be opened using an archive viewer such as [7-Zip](https://www.7-zip.org/)
- Dumping RAM and taking screenshots are currently not possible in B4DS mode

#### 부팅 단축키
아래는 TWiLight Menu++ 시작화면 실행중 또는, DSi 시작화면이 나온 즉시에 사용할 수 있는 단축키입니다.

- <kbd>SELECT</kbd>: 설정 진입
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: TWiLight Menu++ 설정 초기화
- <kbd class="face">B</kbd>: 마지막으로 실행한 롬 부팅
