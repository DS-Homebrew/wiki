---
lang: ko-KR
layout: wiki
section: ds-index
category: guides
title: BIOS/Firmware 덤프
description: 당신의 콘솔로부터 닌텐도 DS 또는 DSi BIOS/Firmware을 추출하는 방법
tabs:
  - 
    dsi-sd-card: Unlaunch가 설치된 DSi
    flashcard: 플래시 카드
---

melonDS와 같은 일부 에뮬레이터는 콘솔에서 추출 가능한 DS 모드 또는 DSi 모드 BIOS 및 펌웨어를 필요로 합니다. 이를 달성하는 두 가지 명백한 방법이 있습니다. 다음과 같이 사용할 수 있습니다:
- Unlaunch가 설치된 DSi 또는
- Unlaunch가 설치되지 않은 DS/DS Lite/3DS 또는 콘솔과 호환되는 플래시 카드와 함께 DSi

DSi 방법은 DS 모드 및 DSi 모드 BIOS 및 펌웨어 파일을 모두 추출합니다. 플래시 카드 방법은 DS 모드 파일만 추출합니다.

{% capture tab-dsi-sd-card %}

이 페이지는 당신이 [dsi.cfw.guide](https://dsi.cfw.guide)에서 제공하는 현대적인 CFW 환경을 실행 중이라고 가정합니다.
{:.alert .alert-warning}

### 파트 1: 필요한 파일 가져오기

1. [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)를 다운로드하세요
1. dsibiosdumper `.7z` 파일에서 `dsibiosdumper.nds` 파일을 SD 카드의 루트로 복사합니다
1. 귀하의 SD 카드를 기기에 다시 삽입하십시오

### 파트 2: dsibiosdumper
1. 장치가 여전히 꺼져 있는 상태에서 다음 버튼을 누른 채로 기다린다: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, 그리고 이러한 버튼을 함께 누른 채로 장치의 전원을 켠다
1. 당신의 장치는 Unlaunch 메뉴로 부팅되어야 합니다
1. 응용 프로그램 목록에서 dsibiosdumper를 실행합니다
1. 모든 것을 덤프하려면 <kbd class="face">A</kbd>를 누르십시오
1. 과정이 완료될 때까지 기다려 주십시오
    - 이 작업은 시간이 걸릴 수 있습니다
1. 과정이 완료된 후에 <kbd>SELECT</kbd>를 눌러 dsibiosdumper를 종료합니다
1. 기기의 전원을 끄십시오
1. SD 카드를 컴퓨터에 삽입하세요

필요한 모든 파일은 SD 카드의 루트 디렉토리에있는 `dsidump` 폴더에 있습니다.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### 파트 1: 필요한 파일 가져오기

1. [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (`.nds` 파일)을 다운로드하세요
1. `dsbf_dump.nds` 파일을 당신의 SD 카드 루트로 복사합니다
1. 당신의 SD 카드를 다시 플래시 카드에 삽입합니다

### 파트 2: dsbf_dump
1. 장치의 전원을 켜세요
1. 플래시 카드를 실행하세요
1. SD 카드 루트로 이동하고 dsbf_dump를 실행합니다
1. 과정이 완료될 때까지 기다려 주십시오
1. 과정이 완료된 후 <kbd>START</kbd>를 눌러 장치의 전원을 끕니다
  - 3DS 패밀리 시스템에서는 대신 "소프트웨어가 종료됨"이 표시됩니다. 이 화면에서 장치의 전원을 끕니다
1. SD 카드를 컴퓨터에 삽입하세요

모든 필요한 파일은 당신의 장치 상단 화면에 지정된 폴더에 있을 것입니다.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
