---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 조작법
long_title: TWiLight Menu++ Controls
description: Controls for using TWiLight Menu++
---

#### 닌텐도 DSi, 닌텐도 3DS, 세가 새턴, 홈브류 런처 테마
- <kbd>Left</kbd> / <kbd>Right</kbd>: 게임 또는 응용프로그램 선택
- <kbd class="face">A</kbd> / <kbd>START</kbd>: 게임 또는 응용프로그램 실행
- <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd> / <kbd>Right</kbd>: 페이지 전환
- (DSi/새턴/홈브류 테마) <kbd>SELECT</kbd> + <kbd>Up</kbd> / <kbd>Down</kbd> & <kbd>SELECT</kbd>를 손에서 뗌: SD카드와 flashcard 간 전환
- <kbd class="face">Y</kbd>: 게임 별 설정
   - <kbd class="face">X</kbd>: 치트 메뉴
      - <kbd class="face">A</kbd>: 치트 켬/끔
      - <kbd class="face">B</kbd>: 치트 메뉴 나가기
      - <kbd class="face">X</kbd>: 저장하고 나가기
      - <kbd class="face">Y</kbd>: 치트 설명 보기
      - <kbd class="l">L</kbd>: 모든 치트 비활성화하기
- <kbd class="face">X</kbd>: 게임 제거/숨기기
- (DSi/새턴/홈브류 테마) <kbd>SELECT</kbd>: SELECT 메뉴 또는 DS 클래식 메뉴 (시스템 메뉴, TWLMenu++ 설정, GBA모드가 접근 가능한 곳)

#### R4 테마
- <kbd>Up</kbd> / <kbd>Down</kbd>: 게임 또는 응용프로그램 선택
- <kbd class="face">A</kbd>: 게임 또는 응용프로그램 실행
- <kbd class="l">L</kbd>: SD카드와 flashcard 간 전환
- <kbd class="face">Y</kbd>: 게임 별 설정
   - <kbd class="face">X</kbd>: 치트 메뉴
      - <kbd class="face">A</kbd>: 치트 켬/끔
      - <kbd class="face">B</kbd>: 치트 메뉴 나가기
      - <kbd class="face">X</kbd>: 저장하고 나가기
      - <kbd class="face">Y</kbd>: 치트 설명 보기
      - <kbd class="l">L</kbd>: 모든 치트 비활성화하기

#### DS ROMs (using nds-bootstrap)
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Up</kbd> + <kbd class="face">X</kbd> for 1 second: Swap the screens
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 3 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>: Open the in-game menu
   - RAM Viewer
      - <kbd>Up</kbd> / <kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd> / <kbd>Right</kbd>: Fast scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd> / <kbd>Down</kbd>: Increase / Decrease selected value
        - <kbd>Left</kbd> / <kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM Editor
      - <kbd>Up</kbd> / <kbd>Down</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd> / <kbd>Down</kbd>: Increase / Decrease value by 1h
         - <kbd>Left</kbd> / <kbd>Right</kbd>: Increase / Decrease value by 10h
         - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd> / <kbd>Down</kbd>: Increase / Decrease selected value
        - <kbd>Left</kbd> / <kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address

#### 부팅 단축키
아래는 TWiLight Menu++ 시작화면 실행중 또는, DSi 시작화면이 나온 즉시에 사용할 수 있는 단축키입니다.

- <kbd>SELECT</kbd>: 설정 진입
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: TWiLight Menu++ 설정 초기화
- <kbd class="face">B</kbd>: 마지막 실행 ROM을 자동 부팅할 수 있는지 여부에 따라 마지막 실행 ROM을 부팅합니다.
