---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Information on using Wi-Fi on the Nintendo DS
---

- On Nintendo DS applications, you can only use WEP and Open WiFi
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA2 support

Hotspots are usable, so you don't need to change your router configuration.

### Creating a hotspot
There are guides for creating a DS game compatible hotspot on macOS and Linux computers on GBAtemp. If you're on Windows you can use a Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC Restoration

1. Launch the Nintendo WFC settings
1. Connect to your access point
1. Set your Primary DNS value as one of the values below, depending on which service you want to use:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` or `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Set `1.1.1.1` as your secondary DNS
1. You might need to NoSSL patch your game at this point, depending on the game
