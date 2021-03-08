---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 와이드스크린으로 플레이하기
description: 닌텐도 3DS에서 와이드스크린으로 TWiLight Menu++를 이용하는 방법
---

구 / 뉴 닌텐도 3DS 또는 2DS 본체가 필요합니다.
{:.alert .alert-info}

### 준비하기
- `boot.firm`이 SD의 루트에 저장되어있는지 확인합니다.

### 설치하기
1. [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia)를 다운로드 한 후, `TWPatch.cia`를 사용자의 SD카드로 복사합니다. ([GBATemp 스레드](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. `TWPatch.cia`를 FBI를 이용해서 설치합니다.
   - TWPatch 대신에 Universal-Updater를 사용하면 위의 두 단계를 거치지 않아도 좋습니다.
1. 홈 메뉴로 돌아가서 TWPatch를 실행합니다.
1. <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> 를 꾹 누르고, `Widescreen patch (384x240 16:10)`를 활성화합니다.
1. (선택 사항!) 저화질 와이드 스크린에서는 `GPU scale test (health hazard!)` 도또한 활성화합니다.
   - "health hazard!"라고 뜨는것은 화면이 너무 흐릿한 탓에 개발자 머리가 아팠기 때문입니다.
1. `TwlBg.cxi` 파일을 생성하기 위해 <kbd>START</kbd> 버튼을 누릅니다.
   - 상단 화면에 와이드 패치가 되지 않았으면 3단계부터 다시 시작하십시오.
   - 여전히 와이드스크린이 작동하지 않는다면, RTCom-activated 와이드스크린이 릴리즈될 때까지 기다립니다.
1. 3DS 본체의 전원을 완전히 끄고, Luma3DS 설정에 진입하기 위해 <kbd>SELECT</kbd>버튼을 누른채로 전원을 켭니다.
1. `external FIRMs and modules`를 활성화하고, 저장하고 나가기 위해 <kbd>START</kbd> 버튼을 누릅니다.
1. TWiLight Menu++ 설정을 열어서 `기타 설정` 페이지로 이동하고, `화면 비율`을 `16:10`으로 설정합니다.
   - 이 작업은 게임마다 따로 설정할 수 있습니다.

모든 작업이 끝났습니다! DS 게임을 와이드스크린으로 즐기세요!

**참고 1**: DS(i) 모드의 모든 게임/응용프로그램은 와이드스크린과 호환되지 않더라도 와이드스크린으로 실행 될 것입니다. 와이드스크린 호환 게임만 와이드스크린에서 실행되도록 수정하려면 RTCom-activated widescreen이 릴리즈될 때까지 기다립니다.

참고 2: 와이드스크린에서 글리칭 현상 (화면이 깨지는 오류)를 보기 싫으시다면, TWLMenu++가 실행될 때 <kbd>START</kbd> 또는 <kbd>SELECT</kbd> 버튼을 누르지 마세요. 만약 화면 비율 설정이 보이지 않는다면, RTCom-activated widescreen이 릴리즈될 때까지 기다립니다.

모든 게임이 와이드스크린과 호환되지는 않습니다. [(와이드스크린 호환 게임 목록)](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
