---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Information on using Wi-Fi on the Nintendo DS
---

- On Nintendo DS applications, you can only use WEP and Open Wi-Fi security settings
- On Nintendo DSi-Enhanced/Exclusive applications running in DSi Mode, you have the additional options of WPA and WPA2 security

Hotspots are usable, so you don't need to change your router configuration.

### Creating a hotspot
There are guides for creating a DS-compatible hotspot on macOS and Linux computers on GBAtemp. If you're on Windows, you can use a Linux live boot if you are using Windows 10.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC restoration
1. Launch Nintendo Wi-Fi Connection Setup
1. Connect to your access point
1. Set your Primary DNS value as one of the values below, depending on which service you want to use:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` or `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. Set `1.1.1.1` as your secondary DNS
1. You might need to NoSSL patch your game at this point, depending on the game

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
