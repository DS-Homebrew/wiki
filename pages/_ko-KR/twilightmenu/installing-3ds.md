---
lang: ko-KR
layout: wiki
section: twilightmenu
category: installing
title: 설치하기 (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

설치를 진행하기 전에, [3ds.hacks.guide](https://3ds.hacks.guide)를 따라 사용자의 3DS 본체에 커스텀 펌웨어를 설치해야합니다.
{:.alert .alert-info}

{% capture tab-working-camera %}
1. FBI를 열고 `Remote Install`에 진입합니다. 그러고 나서 `Scan QR Code`를 선택합니다.
1. 아래의 QR 코드를 스캔해서 최신 버전의 [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)를 설치합니다.<br> ![Universal-Updater QR 코드](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. FBI를 닫고 Universal-Updater를 실행합니다.
   - 홈 메뉴에 표시되지 않는다면 3DS를 재부팅 해주세요.
1. TWiLight Menu++를 앱 그리드에서 찾으세요. 찾는 데 문제가 있는 경우 사이드바의 세 번째 탭으로 검색할 수 있습니다.
   - TWiLight Menu++의 아이콘은 다음과 같습니다: ![TWiLight Menu++ 아이콘](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. 사이드바에서 <kbd class="face">A</kbd>를 누르거나 다운로드 아이콘을 터치한 후, `TWiLight Menu++`를 선택해서 설치를 진행하세요.
   - This will take a while
{% endcapture %}

{% capture tab-non-working-camera %}
1. [Universal-Updater 릴리즈 페이지](https://github.com/Universal-Team/Universal-Updater/releases)에서 `Universal-Updater.cia` 파일을 다운로드하세요.
1. SD카드의 아무데나 `Universal-Updater.cia` 파일을 놓으세요.
1. 닌텐도 3DS에서 FBI를 실행하세요.
1. FBI에서 `Universal-Updater.cia`파일을 붙여넣은 폴더를 찾으세요.
1. `Universal-Updater.cia`파일을 선택해서 "Install & Delete"를 선택하세요.
1. FBI를 닫고 Universal-Updater를 실행하세요.
   - 홈 메뉴에 표시되지 않는다면 3DS를 재부팅 해주세요.
1. TWiLight Menu++를 앱 그리드에서 찾으세요. 찾는 데 문제가 있는 경우 사이드바의 세 번째 탭으로 검색할 수 있습니다.
   - TWiLight Menu++의 아이콘은 다음과 같습니다: ![TWiLight Menu++ 아이콘](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. 사이드바에서 <kbd class="face">A</kbd>를 누르거나 다운로드 아이콘을 터치한 후, `TWiLight Menu++`를 선택해서 설치를 진행하세요.
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Installing

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Non-Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Working Camera</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Non-Working Camera</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
