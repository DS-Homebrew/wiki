---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 와이드스크린으로 플레이하기
description: 닌텐도 3DS에서 와이드스크린으로 TWiLight Menu++를 이용하는 방법
---

오리지널 / New 닌텐도 3DS 또는 2DS 본체가 필요합니다.
{:.alert .alert-info}

### 준비하기
- `boot.firm`이 SD의 루트에 저장되어있는지 확인합니다.

### 설치하기
1. [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia)를 다운로드 한 후, `TWPatch.cia`를 사용자의 SD 카드로 복사합니다. ([GBATemp 스레드](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. `TWPatch.cia`를 FBI를 이용해서 설치합니다.
   - TWPatch 대신에 Universal-Updater를 사용하면 위의 두 단계를 거치지 않아도 좋습니다.
1. 홈 메뉴로 돌아가서 TWPatch를 실행합니다.
1. <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> 를 꾹 눌러서 패치 메뉴를 열고, `Widescreen patch (384x240 16:10)`를 활성화합니다.
1. (선택사항) 저화질의 와이드 스크린을 위해서는 `GPU scaling (blurry, no filters)` 또한 활성화합니다.
1. <kbd class="face">B</kbd>를 눌러서 패치 메뉴를 나가 주세요.
1. `TwlBg.cxi` 파일을 생성하기 위해 <kbd>START</kbd> 버튼을 눌러주세요.
   - 상단 화면에 와이드 패치가 활성화되었음을 표시하지 않으면 3단계부터 다시 시작하세요.
1. Move `TwlBg.cxi` from `sd:/luma/sysmodules/` to `sd:/_nds/TWiLightMenu/TwlBg/` (create `TwlBg` folder, if it doesn't exist), and rename the file to `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++, press <kbd class="face">Y</kbd> on your desired game to bring up the per-game settings, and set `Screen Aspect Ratio` to `16:10`

모든 작업이 끝났습니다! DS 게임을 와이드스크린으로 즐기세요!

**NOTES:**
1. Do not hold <kbd>START</kbd> or <kbd>SELECT</kbd> when launching TWLMenu++, if you don't want widescreen to look glitched
1. Not every game is widescreen compatible. [Here is a list of games with widescreen support](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide
1. Most widescreen patches will only adjust 3D elements for widescreen, 2D elements (such as menus) will only be stretched
