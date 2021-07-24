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
1. Download [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) and copy `TWPatch.cia` to your SD card ([GBATemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. `TWPatch.cia`를 FBI를 이용해서 설치합니다.
   - TWPatch 대신에 Universal-Updater를 사용하면 위의 두 단계를 거치지 않아도 좋습니다.
1. 홈 메뉴로 돌아가서 TWPatch를 실행합니다.
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> to open the patch menu and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scaling (blurry, no filters)`
1. Press <kbd class="face">B</kbd> to exit the patch menu
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
1. Move `TwlBg.cxi` from `sd:/luma/sysmodules/` to `sd:/_nds/TWiLightMenu/TwlBg/` (create `TwlBg` folder, if it doesn't exist), and rename the file to `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++ settings, switch to the `Games/Apps settings` page, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

모든 작업이 끝났습니다! DS 게임을 와이드스크린으로 즐기세요!

**NOTES:**
1. Do not hold <kbd>START</kbd> or <kbd>SELECT</kbd> when launching TWLMenu++, if you don't want widescreen to look glitched
1. Not every game is widescreen compatible. [We have created a list of games with widescreen](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide
