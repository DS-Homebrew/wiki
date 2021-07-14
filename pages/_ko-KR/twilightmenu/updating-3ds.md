---
lang: ko-KR
layout: wiki
section: twilightmenu
category: updating
title: 업데이트하기 (3DS)
long_title: TWiLight Menu++ 업데이트 (3DS)
description: 닌텐도 3DS에서 TWiLight Menu++를 업데이트하는 방법
tabs:
  - 
    universal-updater: Universal-Updater
    manual: 수동 업데이트
---

v16.4.0보다 낮은 버전에서 업데이트 한다면, `saves`폴더를 DS 롬 파일이 있는 위치와 같은 곳에 새로 만든 뒤, DS 게임의 `.sav` 파일을 해당 폴더에 넣어주세요.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare roms.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Universal-Updater를 실행합니다.
   - 설치되어있지 않다면,  [설치하기](installing-3ds)에 대한 설명을 참고합니다.
1. TWiLight Menu++를 앱 그리드에서 찾으세요. 찾는 데 문제가 있는 경우 사이드바의 세 번째 탭으로 검색할 수 있습니다.
1. 사이드바에서 <kbd class="face">A</kbd>를 누르거나 다운로드 아이콘을 터치한 후, `TWiLight Menu++`를 선택해서 설치를 진행하세요.
   - 시간이 조금 걸릴 수 있습니다.
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Download the latest [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. `TWiLightMenu-3DS.7z`를 압축 해제합니다.
1. SD 카드 루트에 `_nds` 폴더를 복사합니다.
1. SD 카드 루트에 `BOOT.NDS` 파일을 복사합니다.
1. SD 카드 루트에 `.cia` 파일 두 개를 복사합니다.
1. 3DS 본체의 FBI에서 두 CIA 파일들을 설치합니다.
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 업데이트하기

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Flashcard를 위한 추가적인 단계

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. TWLMenu++ 설정으로 진입합니다.
1. `TWiLight Menu++ 업데이트`를 선택합니다.
1. `본체 (마이크로)SD > Slot-1 마이크로SD`를 선택합니다.
