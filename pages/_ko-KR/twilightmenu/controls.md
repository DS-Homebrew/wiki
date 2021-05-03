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

#### DS ROM (nds-bootstarp 사용)
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>위</kbd> + <kbd class="face">X</kbd> 1초 동안 누름: 위 아래 화면 전환
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>아래</kbd> + <kbd class="face">A</kbd> 3초 동안 누름: RAM을 덤프하여 `sd:/_nds/nds-bootstrap`에 `ramDump.bin`파일로 저장
- <kbd class="l">L</kbd> + <kbd>아래</kbd> + <kbd>SELECT</kbd>: 게임 내 메뉴 열기
   - RAM 뷰어
      - <kbd>위</kbd> / <kbd>아래</kbd>: 스크롤
      - <kbd>왼쪽</kbd> / <kbd>오른쪽</kbd>: 빠르게 스크롤
      - <kbd class="face">A</kbd>: RAM 에디터 진입
      - <kbd class="face">B</kbd>: 게임 내 메뉴로 돌아가기
      - <kbd class="face">Y</kbd>: 이동할 주소 지정
        - <kbd>위</kbd> / <kbd>아래</kbd>: 선택된 값을 올림 / 낮춤
        - <kbd>왼쪽</kbd> / <kbd>오른쪽</kbd>: 값 선택
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: 지정된 주소의 RAM 뷰어 / 에디터로 돌아가기
   - RAM 에디터
      - <kbd>위</kbd> / <kbd>아래</kbd> / <kbd>왼쪽</kbd> / <kbd>오른쪽</kbd>: 값 선택
      - <kbd class="face">A</kbd>: 선택한 값 수정
         - <kbd>위</kbd> / <kbd>아래</kbd>: 선택된 값을 1h만큼 올림 / 낮춤
         - <kbd>위</kbd> / <kbd>아래</kbd>: 선택된 값을 10h만큼 올림 / 낮춤
         - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: 값 수정 마치기
      - <kbd class="face">B</kbd>: RAM 뷰어로 돌아가기
      - <kbd class="face">Y</kbd>: 이동할 주소 지정
        - <kbd>위</kbd> / <kbd>아래</kbd>: 선택된 값을 올림 / 낮춤
        - <kbd>왼쪽</kbd> / <kbd>오른쪽</kbd>: 값 선택
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: 지정된 주소의 RAM 뷰어 / 에디터로 돌아가기

#### 부팅 단축키
아래는 TWiLight Menu++ 시작화면 실행중 또는, DSi 시작화면이 나온 즉시에 사용할 수 있는 단축키입니다.

- <kbd>SELECT</kbd>: 설정 진입
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: TWiLight Menu++ 설정 초기화
- <kbd class="face">B</kbd>: 마지막 실행 ROM을 자동 부팅할 수 있는지 여부에 따라 마지막 실행 ROM을 부팅합니다.
