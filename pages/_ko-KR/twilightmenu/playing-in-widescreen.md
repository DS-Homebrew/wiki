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
1. `TwlBg.cxi`를 `sd:/luma/sysmodules`에서 `sd:/_nds/TWiLightMenu/TwlBg` (만약 폴더가 없을 시에는 `TwlBg` 폴더를 생성)로 옮기고, `Widescreen.cxi`로 이름을 바꿔주세요.
1. 3DS 본체의 전원을 완전히 끄고, Luma3DS 설정에 진입하기 위해 <kbd>SELECT</kbd> 버튼을 누른채로 전원을 켜 주세요.
1. `external FIRMs and modules`를 활성화하고, 저장하고 나가기 위해 <kbd>START</kbd> 버튼을 눌러 주세요.
1. TWiLight Menu++를 열고, 원하는 게임에서 <kbd class="face">Y</kbd>를 눌러서 게임별 설정을 열고, `화면 비율`을 `16:10`으로 설정하세요.

모든 작업이 끝났습니다! DS 게임을 와이드스크린으로 즐기세요!

**주의:**
1. 와이드스크린이 이상하게 보이기 싫으시다면, TWLMenu++가 실행될 때 <kbd>START</kbd> 또는 <kbd>SELECT</kbd> 버튼을 누르지 마세요.
1. 모든 게임이 와이드스크린과 호환되지는 않습니다. [와이드 스크린 호환 게임 목록은 여기서 보실 수 있습니다.](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. 만약 이 가이드를 따르고, 와이드스크린 호환 게임을 열고 나서 TWL_FIRM 전체에서 와이드스크린이 적용되고 있다면 (TWLMenu++ GUI 포함), `sd:/luma/sysmodules/` 내의 `TwlBg.cxi`를 지우고, TWiLight Menu++를 [제거](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) 및 [재설치](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds)하고 나서 위 가이드를 다시 따라 주시기 바랍니다.
1. 많은 와이드스크린 패치들은 3D 요소만을 와이드스크린을 위해서 조정할 것이고, 2D 요소 (메뉴 등)은 그냥 늘리기만 할 것입니다.
