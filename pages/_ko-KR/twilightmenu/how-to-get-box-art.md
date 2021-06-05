---
lang: ko-KR
layout: wiki
section: twilightmenu
category: other
title: 박스 아트 가져오기
description: How to get box art/game covers in TWiLight Menu++
---

### Windows
1. Download the latest version of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### macOS/Linux
1. [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)의 최신 버전을 다운로드해 주세요.
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### Manual
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extract the .png files to `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings

**오리지널 박스 아트 추가하기** `sd:/_nds/TWiLightMenu/boxart`에 파일을 넣어 주세요. 이미지 파일 이름이 게임의 타이틀 ID (예시: `ASME.png`)나, 파일 이름 (예시: `슈퍼마리오64DS.nds.png`)이여야 합니다. `.png` 포맷이여야 하며, 추천 사이즈 128x115, 최대 사이즈 208x143입니다.

개별 박스 아트도 GameTDB의 **S Covers (png)** 카테고리에서 다운로드할 수 있습니다.
