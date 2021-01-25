---
lang: ko-KR
layout: wiki
section: twilightmenu
category: updating
title: 업데이트하기 (3DS)
description: 닌텐도 3DS에서 TWiLight Menu++를 업데이트하는 방법
---

v16.4.0보다 낮은 버전에서 업데이트 한다면, `saves`폴더를 DS 롬 파일이 있는 위치와 같은 곳에 새로 만든 뒤, DS 게임의 `.sav` 파일을 해당 폴더에 넣어주세요.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Universal-Updater를 실행합니다.
   - 설치되어있지 않다면,  [설치하기](installing-3ds)에 대한 설명을 참고합니다.
1. TWiLight Menu++를 앱 그리드에서 찾으세요. 찾는 데 문제가 있는 경우 사이드바의 세 번째 탭으로 검색할 수 있습니다.
1. 사이드바에서 <kbd class="face">A</kbd>를 누르거나 다운로드 아이콘을 터치한 후, `TWiLight Menu++`를 선택해서 설치를 진행하세요.
   - 시간이 조금 걸릴 수 있습니다.
{% endcapture %}

{% capture tab-manual %}
1. `TWiLightMenu-3DS.7z`의 최신버전을 [깃허브 페이지](https://github.com/DS-Homebrew/TWiLightMenu/releases)에서 다운로드하세요.
1. `TWiLightMenu-3DS.7z`를 압축 해제합니다.
1. SD 카드 루트에 `_nds` 폴더를 복사합니다.
1. SD 카드 루트에 `BOOT.NDS` 파일을 복사합니다.
1. SD 카드 루트에 `.cia` 파일 두 개를 복사합니다.
1. 3DS 본체의 FBI에서 두 CIA 파일들을 설치합니다.
{% endcapture %}

### 업데이트하기

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">수동 업데이트</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>수동 업데이트</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### Flashcard를 위한 추가적인 단계

TWLMenu++내의 SD 카드와 Flashcard 간의 내용물을 전환하고 싶거나, Flashcard의 TWLMenu++가 v16.3.0 이후의 버전이라면, 이 단계를 따르도록 합니다.

1. TWLMenu++ 설정으로 진입합니다.
1. `TWiLight Menu++ 업데이트`를 선택합니다.
1. `본체 (마이크로)SD > Slot-1 마이크로SD`를 선택합니다.
