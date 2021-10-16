---
lang: ko-KR
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: 닌텐도 DS에서 Wi-Fi를 사용하는 방법에 대한 정보
---

- On Nintendo DS applications, you can only use WEP and Open Wi-Fi security settings
- On Nintendo DSi-Enhanced/Exclusive applications running in DSi Mode, you have the additional options of WPA and WPA2 security

핫스팟은 사용 가능하므로, 라우터 설정을 바꾸지 않아도 됩니다.

### Creating a hotspot
There are guides for creating a DS-compatible hotspot on macOS and Linux computers on GBAtemp.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

An Android mobile hotspot set to Open (none) security would also work.

Windows cannot create a compatible hotspot, so Windows users will need to boot into Linux in order to set one up.
#### Other methods
If you cannot create a DS-compatible hotspot using the above methods, you may be able to use another method.
- Nintendo Wi-Fi USB Connector
  - While this can still be used, it is not recommended because it requires a 32-bit version of Windows XP or Vista
  - For information on setting up a Nintendo Wi-Fi USB Connector, read Section 3 of this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6)
- Changing router settings to be DS-compatible
  - This is not recommended because it opens your network to intruders, even if you use WEP security. It may also cause issues for other users of your network. If you choose to do this, it is recommended that you use a secondary router or guest network, if available
  - Not all routers support guest networks or turning security off
- Wi-Fi extenders

#### Settings
If you are setting up a network to be DS-compatible, it must meet the following specifications:
- WEP or Open (none) security
- 2.4 GHz wireless frequency
- 802.11b wireless mode
  - This may be listed as "Legacy mode" or something similar

### Nintendo DS WFC restoration
1. Launch Nintendo Wi-Fi Connection Setup
1. 사용자의 엑세스 포인트에 접속합니다.
1. 사용할 목적과 서비스에 따라, 기본 설정 DNS를 아래에 적힌 값으로 설정합니다.
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` or `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online player list](http://zwei.moe:9001))** - `172.104.88.237`
1. 보조 DNS를 `1.1.1.1` 로 설정합니다.
1. 여기서, 게임에 따라 NoSSL 패치가 필요할 수 있습니다.

### Manually patching your DS ROMs
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Download [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WfcPatcher is saved and open that folder
1. Create a text file
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save the text file with the name `patch.bat` and close the window
   - You can replace wiimmfi.de with another URL, if you wish to use a different server
   - If the file still appears to be a text document, [enable file name extensions](https://dsi.cfw.guide/file-extensions-%28windows%29) and remove `.txt` from the file name
1. Now drag all the ROMs you wish to patch on to patch.bat
1. Done! the patched ROMs will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Troubleshooting and further reading
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
