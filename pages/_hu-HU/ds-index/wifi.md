---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Információk a Wi-Fi használatáról Nintendo DS-en
---

- Nintendo DS applikációkból csak WEP és nyílt WiFi használható
- A Nintendo DSi bővített/exkluzív alkalmazások esetében rendelkezel a WPA és WPA2 támogatás kiegészítéssel

Hotspotok használhatók, így nem szükséges megváltoztatnod a routered konfigurációját.

### Hotspot létrehozása
Találhatók útmutatók a GBATemp-en arról, hogyan hozz létre egy DS játék kompatibilis hotspot-ot macOS és Linux számítógépekre. Ha Windows-on dolgozol használhatsz egy Linux live bootolást is.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC helyreállítás
1. Indítsd el a Nintendo WFC beállításokat
1. Csatlakozz a hozzáférési pontodhoz
1. Állítsd be az elsődleges (primary) DNS értéket az alábbiak valamelyikére, attól függően, hogy melyik szolgáltatást szeretnéd használni:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` or `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Állítsd be az `1.1.1.1` címet másodlagos DNS-nek
1. Szükséged lehet NoSSL patchelésre a játékodban, függően a játéktól

### A DS ROM-ok kézi patchelése
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use mono

1. Download [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WFCPatcher is saved and open that folder
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Kész! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Troubleshooting and further reading
If you are receiving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
