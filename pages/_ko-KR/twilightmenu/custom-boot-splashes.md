---
lang: ko-KR
layout: wiki
section: twilightmenu
category: customization
title: 시작화면 커스텀하기
description: TWiLight Menu++의 시작화면을 커스텀하는 방법
---

TWiLight Menu++가 켜질 때의 화면을 GIF 파일로 커스텀할 수 있습니다. `splashtop.gif`와 `splashbottom.gif`으로 되어있는 파일을 `sd:/_nds/TWiLightMenu/extras`에 놓습니다. 그러고 나서, TWiLight Menu++ 설정에서 `DSi 시작화면`을 `사용자 지정`으로 설정합니다.

대부분의 GIF 파일은 256x192에서 작동하며, 예외 사항은 다음과 같습니다:
- 켜자마자 즉시 실행되는 만큼, 1MiB (DSi 모드) 또는 256KiB (DS 모드)를 넘기는 GIF 파일은 최고 속도로 실행되지 않을 수 있습니다.
- 두 GIF들은 항상 약 10MB (DSi 모드) 또는 약 2MB (DS 모드) 보다 작아야 합니다.
- GIF가 무한루프로 설정되면 3초 동안 표시되므로 적어도 하나에서 루프 카운트를 설정하여 시간을 제어합니다.
- 사용자 입력 플래그가 지원되므로 기본 설정처럼 시작화면을 표시하고 대기하려면 한 프레임에서 긴 딜레이를 설정하면 됩니다.
  - 입력 대기 중인 GIF만 일시 중지되므로 다른 GIF가 애니메이션을 계속할 수 있습니다.
- 로컬 색상표를 사용하는 경우 전체 프레임을 덮어써야 합니다. 현재 프레임이 아닌 전체 화면 팔레트를 대체하기 때문입니다.
- 인터레이스와 텍스트 프레임은 작동하지 않습니다.
