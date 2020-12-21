---
lang: hu-HU
layout: wiki
section: ds-index
title: Wi-Fi
description: An explanation of all things DS modding
---

- On Nintendo DS applications, you can only use WEP and Open WiFi
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA2 support

Hotspots are usable, so you don't need to change your router configuration.

### Nintendo DS WFC helyreállítás

1. Launch the Nintendo WFC settings
1. Connect to your access point
1. Set your Primary DNS value as one of the values below, depending on which service you want to use:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` or `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Set `1.1.1.1` as your secondary DNS
1. You might need to NoSSL patch your game at this point, depending on the game
