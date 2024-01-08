---
lang: ko-KR
layout: wiki
section: gbarunner2
title: GBA BIOS 덤프 중
description: 닌텐도 GBA BIOS를 게임기에서 추출하는 방법
tabs:
  - 
    3ds-sd-card: open_agb_firm을 사용하는 3DS
    gba-flashcart: GBA 모드 플래시 카트리지를 사용하는 GBA/DS/DS Lite
---

대부분의 GBA 에뮬레이터는 GBA 게임을 플레이하는 데 문제가 없지만, GBARunner2와 같은 일부 에뮬레이터와 하이퍼바이저는 일부 게임을 올바르게 재생하기 위해 BIOS 파일이 필요할 수 있습니다.

이를 달성하는 두 가지 명백한 방법이 있습니다. 다음과 같이 사용할 수 있습니다:
- 커스텀 펌웨어가 적용된 3DS, 또는
- GBA/DS/DS Lite와 GBA 모드 플래시 카트리지가 장착된 것

{% capture tab-3ds-sd-card %}
### 파트 1: 필요한 파일 가져오기
1. [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest)을(`.7z` 파일) 다운로드하세요
1. [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)를 다운로드하세요
1. `/luma` 폴더 내에 `payloads`라는 폴더를 만드십시오. 이미 존재하지 않는 경우
1. `/luma/payloads` 폴더로부터 `open_agb_firm.firm` 파일을 open_agb_firm `.7z` 파일에서 복사하십시오
1. `Bios_Dumper.gba`를 귀하의 SD 카드 루트에 복사하십시오
1. 귀하의 SD 카드를 기기에 다시 삽입하십시오

### 파트 2: Bios_Dumper
1. <kbd>START</kbd> 버튼을 누르고 잡아두고, <kbd>START</kbd> 버튼을 누른 채로 장치의 전원을 켜십시오
    - 이것으로 open_agb_firm을 실행합니다
    - `Luma3DS Chainloader`를 불러오면, 이 메뉴에서 `open_agb_firm`을 선택하세요
    - 다른 곳에 로드된다면, SD 카드의 올바른 폴더에 `open_agb_firm.firm`을 복사하지 않았을 것입니다
1. open_agb_firm에서 `Bios_Dumper.gba`을 실행하십시오
1. 화면이 빨간색으로 깜박이고, 그런 다음 녹색으로 깜박입니다
1. 약 5초 동안 기다리십시오
1. 기기의 전원을 끄십시오

{% capture upload-bios-text %}
SD 카드에서 `/3ds/open_agb_firm/saves/Bios_Dumper.sav`을 이곳에 업로드하십시오:
{% endcapture %}

### 파트 3: 생성된 저장 파일에서 BIOS를 해제하세요
1. SD 카드를 컴퓨터에 삽입하세요
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### 파트 1: 필요한 파일 가져오기
1. [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)를 다운로드하세요
1. `Bios_Dumper.gba`를 플래시 카트리지의 SD 카드 루트 디렉터리에 복사하십시오
1. SD 카드를 플래시 카트리지에 다시 삽입하십시오
1. GBA 플래시 카트리지를 다시 카트리지에 삽입하십시오

### 파트 2: Bios_Dumper
1. 플래시 카트리지를 실행한 다음 `Bios_Dumper.gba`를 실행하십시오
1. 화면이 빨간색으로 깜박이고, 그런 다음 녹색으로 깜박입니다
1. 약 5초 동안 기다리십시오
1. 기기의 전원을 끄십시오

{% capture upload-bios-text %}
SD 카드에서 `Bios_Dumper.sav`을 이곳에 업로드하십시오:
{% endcapture %}

### 파트 3: 생성된 저장 파일에서 BIOS를 해제하세요
1. SD 카드를 컴퓨터에 삽입하세요
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

`bios.bin` 파일이 자동으로 다운로드됩니다. 이것이 마지막 GBA BIOS 파일입니다.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
