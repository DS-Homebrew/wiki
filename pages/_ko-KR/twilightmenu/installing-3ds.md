---
lang: ko-KR
layout: wiki
section: twilightmenu
category: installing
title: 설치하기 (3DS)
description: 닌텐도 3DS에서 TWiLight Menu++를 설치하는 방법
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
   - 시간이 조금 걸릴 수 있습니다.
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
   - 시간이 조금 걸릴 수 있습니다.
{% endcapture %}

{% capture tab-manual %}
1. `TWiLightMenu-3DS.7z`의 최신버전을 [깃허브 페이지](https://github.com/DS-Homebrew/TWiLightMenu/releases)에서 다운로드하세요.
1. `TWiLightMenu-3DS.7z`를 압축 해제합니다.
1. SD 카드 루트에 `_nds` 폴더를 복사합니다.
1. SD 카드 루트에 `BOOT.NDS` 파일을 복사합니다.
1. SD 카드 루트에 `roms` 폴더를 복사합니다.
1. SD 카드 루트에 `.cia` 파일 두 개를 복사합니다.
1. 3DS 본체의 FBI에서 두 CIA 파일들을 설치합니다.
{% endcapture %}

### 설치하기

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">카메라를 사용하여 설치</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">카메라를 사용하지 않고 설치</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">수동 설치</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>카메라를 사용하여 설치</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>카메라를 사용하지 않고 설치</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>수동 설치</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
