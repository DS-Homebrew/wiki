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
    manual: 수동
---

v6.8.3보다 낮은 버전에서 업데이트 한다면, <0>saves</0>폴더를 DS 롬 파일이 있는 위치와 같은 곳에 새로 만든 뒤, DS 게임의 <0>.sav</0> 파일을 해당 폴더에 넣어주세요.
{:.alert .alert-info}

v21.0.0보다 낮은 버전에서 업데이트 한다면, `.pub` 그리고/또는 `.prv`폴더를 DSiWare 타이틀 파일이 있는 위치와 같은 곳에 새로 만든 뒤, DSiWare 롬의 `.sav` 파일을 해당 폴더에 넣어주세요.
{:.alert .alert-info}

If updating from a version older than v25.7.0, it is recommended to delete the `TWiLight Menu++ Game Booter` title from the title list, using FBI.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Universal-Updater를 실행하세요
   - 설치되어있지 않다면,  [설치하기](installing-3ds)에 대한 설명을 참고합니다.
1. TWiLight Menu++를 앱 그리드에서 찾으세요. 찾는 데 문제가 있는 경우 사이드바의 세 번째 탭으로 검색할 수 있습니다.
1. 사이드바에서 <kbd class="face">A</kbd>를 누르거나 다운로드 아이콘을 터치한 후, `TWiLight Menu++`를 선택해서 설치를 진행하세요.
   - This will take a while
   - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. 최신 버전의 [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)를 다운로드 하세요.
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. `TWiLightMenu-3DS.7z`를 압축 해제하세요
1. Copy the `_nds` folder to your SD card root, replacing any existing files
   - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your SD card root, replacing any existing files
1. Copy the `.cia` file to your SD card root, replacing any existing files
1. 3DS 본체의 FBI에서 CIA 파일을 설치하세요
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### 업데이트하기

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
