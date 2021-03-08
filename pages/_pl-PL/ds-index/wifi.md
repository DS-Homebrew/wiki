---
lang: pl_PL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informacje o korzystaniu z Wi-Fi na Nintendo DS
---

- W aplikacjach Nintendo DS można używać tylko WEP i Open WiFi
- W rozszerzonych/ekskluzywnych aplikacjach Nintendo DSi, masz dodatkowo wsparcie WPA i WPA2

Da się używać hotspotów, więc nie musisz zmieniać konfiguracji swojego routera.

### Tworzenie Hotspotu
Istnieją poradniki dotyczące tworzenia hotspotu kompatybilnego z grami DS na komputerach macOS i Linux na GBAtemp. Jeśli korzystasz z Windowsa, możesz użyć Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Przywracanie Nintendo DS WFC
1. Uruchom ustawienia WFC Nintendo
1. Połącz się ze swoim punktem dostępu
1. Ustaw wartość Primary DNS jako jedną z wartości podanych poniżej, w zależności od tego, której usługi chcesz użyć:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` or `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Ustaw `1.1.1.1` jako swój drugi DNS
1. W zależności od gry, będziesz potrzebować spatchowania jej za pomocą NoSSL

### Ręczne Patchowanie Twoich ROMów DS
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use mono

1. Download [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WFCPatcher is saved and open that folder
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Gotowe! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Troubleshooting and Further Reading
If you are recieving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
