---
lang: ko-KR
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS Themes - Custom SFX
description: How to use custom background music and sound effects in DSi and 3DS themes for TWiLight Menu++
---

TWiLight Menu++는 테마에서 커스텀 사운드를 지원합니다. 사용할 사운드 파일을 테마 폴더 안의 `sound` 디렉토리에 넣습니다. 예를 들어, `white`라는 테마가 있다고 치면 파일을 각각 `themes/white/sound/sfx.bin` 그리고 `themes/white/sound/bgm.pcm.raw`으로 해서 넣어둡니다. Both files are optional, if `bmg.pcm.raw` is missing, the default music will be used. The same thing would happen with the sound effects if `sfx.bin` is missing as well.

이 설명은 mmutil이 설치된 devkitPro를 갖고있다는 전제 하에 적용됩니다. [devkitPro 웹사이트](https://devkitpro.org/wiki/Getting_Started)에서 devkitPro를 받으실 수 있습니다.

## 사운드 효과 뱅크
The sound effect bank (`sfx.bin`) contains sound effects such as the icon select sound, etc.

| 파일          | 설명                                                                     |
| ----------- | ---------------------------------------------------------------------- |
| startup.wav | 시스템을 시작할 때 재생합니다. 더 자세한 설명은 [부팅 음악](#startup-sound) 섹션을 참고해주세요.        |
| back.wav    | 뒤로갈때 재생됩니다.                                                            |
| launch.wav  | 게임을 실행할 때 재생됩니다.                                                       |
| select.wav  | Played when moving the cursor in the per-game settings and select menu |
| wrong.wav   | 페이지의 끝에 다다랐을 때 재생됩니다.                                                  |
| switch.wav  | 페이지를 전환할 때 재생됩니다.                                                      |
| stop.wav    | DSi 테마에서 선택커서가 움직임을 멈출 때 재생됩니다.                                        |

All the files listed above are required to build a custom sound effect bank. If you want a sound to be mute, you can use a silent audio file. The `.wav` format is mandatory and the encoding *must* be PCM.

[This file](/assets/files/sfx-example.zip) includes the sounds used in the default DSi and 3DS themes, along with the makefile used to build them into a valid sfx.bin file. Feel free to edit and change the sound files to make a custom sound effect bank.

To build your custom sound effect bank, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command. You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### 부팅 음악
While the other sound effects will work with any WAV file with PCM encoding, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16 kHz**. You can use [Audacity](https://github.com/audacity/audacity/releases/latest) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## 메뉴 배경음악
Menu BGM needs to be a **16-bit Mono** `.wav` file. Below is the method for converting audio files into that format.

Unlike `sfx.bin`, `bgm.wav` can be arbitrarily large.

Please note that if your audio file already comes as a `.wav` file, you must follow the below method anyways, as TWLMenu++ has specific requirements.

### Audacity
To get started, download [the latest version of Audacity](https://github.com/audacity/audacity/releases/latest).

To convert the audio:
1. Load the file in Audacity
1. If your file is in stereo, click on the song then select `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Go to `Audio Setup` > `Audio Settings...`, and make sure the `Project Sample Rate` is not set to be above `48000 Hz` (which is the limit)

To export in the correct format:
1. Select `File` > `Export` > `Export Audio...`
1. Set `Save as type` to `WAV (Microsoft)`
1. Set `Encoding` to `Signed 16-bit PCM`
1. Set the output name to `bgm.wav` and click `Save`
1. Click `Clear` and then click `OK` to the metadata editing

Now you have a `bgm.wav` file that can be copied to the `sound` subfolder in your theme folder.

You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.
