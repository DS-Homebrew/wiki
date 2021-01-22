---
lang: ko-KR
layout: wiki
section: twilightmenu
category: customization
title: DSi / 3DS skins - 커스텀 사운드 효과
---

TWiLightMenu는 테마에서 커스텀 사운드를 지원합니다. 사용할 사운드 파일을 테마 폴더 안의 `sound` 디렉토리에 넣습니다. 예를 들어, `white`라는 테마가 있다고 치면 파일을 각각 `themes/white/sound/sfx.bin` 그리고 `themes/sound/bgm.pcm.raw`으로 해서 넣어둡니다. 두 파일들은 굳이 넣어야 할 필요는 없고, 둘 중 하나가 사라지면 기본 사운드를 사용합니다. 파일을 잘 넣어놨다면, 설정의 음악 옵션을 "테마"로 설정합니다.

이 설명은 mmutil이 설치된 devkitPro를 갖고있다는 전제 하에 적용됩니다. [devkitPro 웹사이트](https://devkitpro.org/wiki/Getting_Started)에서 devkitPro를 받으실 수 있습니다.

## 사운드 효과 뱅크
사운드 효과 뱅크에서는 아이콘 선택 사운드와 같은 사운드 효과를 포함합니다.

| 파일          | 설명                                                              |
| ----------- | --------------------------------------------------------------- |
| startup.wav | 시스템을 시작할 때 재생합니다. 더 자세한 설명은 [부팅 음악](#startup-sound) 섹션을 참고해주세요. |
| back.wav    | 뒤로갈때 재생됩니다.                                                     |
| launch.wav  | 게임을 실행할 때 재생됩니다.                                                |
| select.wav  | 선택 커서를 움직일 때 재생됩니다.                                             |
| wrong.wav   | 페이지의 끝에 다다랐을 때 재생됩니다.                                           |
| switch.wav  | 페이지를 전환할 때 재생됩니다.                                               |
| stop.wav    | DSi 테마에서 선택커서가 움직임을 멈출 때 재생됩니다.                                 |
| bgm.pcm.raw | 사운드 목록의 일부분이 아닙니다. 더 자세한 설명은 [메뉴 배경음악](#menu-bgm) 섹션을 참고해주세요.   |

사운드 효과 뱅크를 만들기 위해 `make`를 실행할 수 있습니다. All files listed above, except *bgm.pcm.raw* are required, but you can make them silent.

Your resulting *sfx.bin* **must be under 512000B = 512KB**. Any larger will result in either crashes or some sounds not playing fully.

### 부팅 음악
While the other sound effects will work with any WAV file, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16kHz**. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## 메뉴 배경음악

Menu BGM needs to be a **16-bit 16kHz Mono** raw PCM file. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

To export in the correct format, do:
1. Select `File` > `Export` > `Export Audio...`
1. Set `File Type` to `Other uncompressed files`
1. Set `Header` to `RAW (header-less)`
1. Set `Encoding` to `Signed 16-bit PCM`
1. Set the output name to `bgm.pcm.raw` and click `Save`
1. Click `OK` to the metadata editing

Now you have a `bgm.pcm.raw` file that can be copied to the *sound* subfolder in your theme folder.

Unlike sfx.bin, *bgm.pcm.raw* can be arbitrarily large.
