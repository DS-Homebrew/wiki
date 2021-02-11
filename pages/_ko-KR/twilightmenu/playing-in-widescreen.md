---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 와이드스크린으로 플레이하기
description: 닌텐도 3DS에서 와이드스크린으로 TWiLight Menu++를 이용하는 방법
---

구 / 뉴 닌텐도 3DS 또는 2DS 본체가 필요합니다.

**준비하기**
- `boot.firm`이 SD의 루트에 저장되어있는지 확인합니다.
- 업데이트에 TWiLight Menu++ Updater나 Universal-Updater를 사용했다면, TWiLight Menu++의 CIA를 FBI를 통해 설치해주세요.

1. Download [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) ([GBATemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Luma config에서, external FIRMs와 modules를 활성화해주세요.
1. TWPatch CIA를 설치해주세요.
1. TWPatch를 실행해주세요.
1. (Optional!) For a less pixelated widescreen, hold Y+B, and enable `GPU scale test (health hazard!)`
1. Press <kbd class="face">X</kbd> + <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 4 again
   - If widescreen still doesn't work, wait for RTCom-activated widescreen to be released
1. In the TWiLight Menu++ settings, switch the page to `Misc settings`, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

모든 작업이 끝났습니다! DS 게임을 와이드스크린으로 즐기세요!

**참고 1**: DS(i) 모드의 모든 게임/응용프로그램은 와이드스크린과 호환되지 않더라도 와이드스크린으로 실행 될 것입니다. 와이드스크린 호환 게임만 와이드스크린에서 실행되도록 수정하려면 RTCom-activated widescreen이 릴리즈될 때까지 기다립니다.

참고 2: 와이드스크린에서 글리칭 현상 (화면이 깨지는 오류)를 보기 싫으시다면, TWLMenu++가 실행될 때 <kbd>START</kbd> 또는 <kbd>SELECT</kbd> 버튼을 누르지 마세요. 만약 화면 비율 설정이 보이지 않는다면, RTCom-activated widescreen이 릴리즈될 때까지 기다립니다.

모든 게임이 와이드스크린과 호환되지는 않습니다. [(와이드스크린 호환 게임 목록)](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
