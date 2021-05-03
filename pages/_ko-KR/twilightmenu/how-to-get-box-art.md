---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 박스 아트 가져오기
description: TWiLight Menu++에서 박스 아트 가져오기
---

### 3DS
1. [KirovAir의 TWiLight Menu++ Updater 포크](https://github.com/KirovAir/TWiLightMenu-Updater/releases)를 설치해 주세요.
   - 원래 TWiLight Menu++ Updater를 대체할 것이기 때문에, TWiLight Menu++ 업데이트로는 Universal-Updater를 사용해 주세요.
1. `Extras`, `Boxart`를 선택해고, <kbd class="face">X</kbd>를 눌러서 SD 카드 전체를 스캔하거나 <kbd class="face">A</kbd>로 스캔할 폴더를 선택해 주세요.
1. 박스 아트 사이즈를 선택해 주세요.
1. 보더 스타일을 선택해 주세요.
1. TWiLight Menu++ 설정에서 박스 아트가 표시되도록 설정해 주세요.

### Windows
1. [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)의 최신 버전을 다운로드해 주세요.
1. `TwilightBoxart-Windows-UX.zip`의 압축을 풀고, `TwilightBoxart.exe`를 실행해 주세요.
1. `Detect SD`를 클릭해 주세요.
   - 만약 옳은 SD 카드를 찾지 못한다면, `Browse...`를 클릭하고 맞는 것을 선택해 주세요.
1. 사이즈, 보더 등등 설정을 원하는 대로 설정해 주세요.
1. `Start`를 클릭해 주세요.
1. TWiLight Menu++ 설정에서 박스 아트가 표시되도록 설정해 주세요.

### macOS / Linux
1. [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)의 최신 버전을 다운로드해 주세요.
1. `.zip`의 압축을 풀어 주세요.
1. 압축이 풀린 폴더 안에 있는 `TwilightBoxart.ini`를 텍스트 에디터에서 열어 주세요.
1. `SdRoot=` 옆에 SD 카드 경로를 입력하고, 파일을 저장해 주세요.
   - macOS에서는 `/Volumes/`(SD 카드 이름) 입니다.
1. 터미널을 열어 주세요.
1. 터미널에 `cd `를 적고, `TwilightBoxart.CLI`가 들어있는 폴더를 드래그 & 드롭해 주세요.
1. `chmod +x TwilightBoxart.CLI`를 실행해 주세요.
1. `./TwilightBoxart.CLI`를 실행해 주세요,
1. SD 카드 경로가 맞다면 `Yes`를 쳐 주세요.
1. TWiLight Menu++ 설정에서 박스 아트가 표시되도록 설정해 주세요.

### 수동
1. [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)에서 pgn 박스 아트 팩을 다운로드해 주세요.
1. .png 파일들을 `sd:/_nds/TWiLightMenu/boxart`로 압축을 풀어 주세요.
1. TWiLight Menu++ 설정에서 박스 아트가 표시되도록 설정해 주세요.

**오리지널 박스 아트 추가하기** `sd:/_nds/TWiLightMenu/boxart`에 파일을 넣어 주세요. 이미지 파일 이름이 게임의 타이틀 ID (예시: `ASME.png`)나, 파일 이름 (예시: `슈퍼마리오64DS.nds.png`)이여야 합니다. `.png` 포맷이여야 하며, 추천 사이즈 128x115, 최대 사이즈 208x143입니다.

개별 박스 아트도 GameTDB의 **S Covers (png)** 카테고리에서 다운로드할 수 있습니다.
