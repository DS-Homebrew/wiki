---
lang: ko-KR
layout: wiki
section: twilightmenu
category: updating
title: 업데이트하기 (Flashcard)
long_title: TWiLight Menu++ 업데이트하기 (플래시카드)
description: 닌텐도 DS 플래시카드에서 TWiLight Menu++를 업데이트하는 방법
---

v16.4.0보다 낮은 버전에서 업데이트 한다면, `saves`폴더를 DS 롬 파일이 있는 위치와 같은 곳에 새로 만든 뒤, DS 게임의 `.sav` 파일을 해당 폴더에 넣어주세요.
{:.alert .alert-info}

v21.0.0보다 낮은 버전에서 업데이트 한다면, `.pub` 그리고/또는 `.prv`폴더를 DSi웨어 타이틀 파일이 있는 위치와 같은 곳에 새로 만든 뒤, DSi웨어 롬의 `.sav` 파일을 해당 폴더에 넣어주세요.
{:.alert .alert-info}

### 업데이트하기
1. 최신 버전의 [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)를 다운로드 하세요.
1. `TWiLightMenu-Flashcard.7z`를 압축 해제합니다.
1. Copy the `_nds` folder to your flashcard's microSD card root, replacing any existing files
   - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your flashcard's microSD card root, replacing any existing files
1. If TWLMenu++ does not boot after updating, then update the autoboot file(s) as well

### DSi/3DS SD 카드를 위한 추가적인 단계

TWLMenu++내의 SD 카드와 Flashcard 간의 내용물을 전환하고 싶거나, Flashcard의 TWLMenu++가 v16.3.0 이후의 버전이라면, 이 단계를 따르도록 합니다.

1. TWLMenu++ 설정으로 진입합니다.
1. `TWiLight Menu++ 업데이트`를 선택합니다.
1. `Slot-1 마이크로SD > 본체 (마이크로)SD`를 선택합니다.
