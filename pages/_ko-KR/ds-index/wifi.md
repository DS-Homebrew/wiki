---
lang: ko-KR
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: 닌텐도 DS에서 Wi-Fi를 사용하는 방법에 대한 정보
---

- 닌텐도 DS 응용프로그램에서는, WEP과 오픈 WiFi만 사용할 수 있습니다.
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA and WPA2 support

핫스팟은 사용 가능하므로, 라우터 설정을 바꾸지 않아도 됩니다.

### Creating a Hotspot
GBAtemp의 macOS와 Linux 컴퓨터 상에 DS 게임 호환 핫스팟을 만드는 방법입니다. 윈도우를 사용중이면, Linux live boot를 이용할 수도 있습니다.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### 닌텐도 DS Wi-Fi 커넥션 복구
1. 닌텐도 Wi-Fi 커넥션 설정을 실행합니다.
1. 사용자의 엑세스 포인트에 접속합니다.
1. 사용할 목적과 서비스에 따라, 기본 설정 DNS를 아래에 적힌 값으로 설정합니다.
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` 또는 `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. 보조 DNS를 `1.1.1.1` 로 설정합니다.
1. 여기서, 게임에 따라 NoSSL 패치가 필요할 수 있습니다.

### Manually Patching Your DS ROMs
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use mono

1. Download [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WFCPatcher is saved and open that folder
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Done! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Troubleshooting and Further Reading
If you are recieving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
