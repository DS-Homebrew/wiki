---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Információk a Wi-Fi használatáról Nintendo DS-en
---

- Nintendo DS applikációkból csak WEP és nyílt WiFi biztonsági beállítás használható
- A Nintendo DSi bővített/exkluzív alkalmazások DSi módban futtatásakor rendelkezel még WPA és WPA2 biztonsági opciókkal is

Hotspotok használhatók, így nem szükséges megváltoztatnod a routered konfigurációját.

### Hotspot létrehozása
There are guides for creating a DS-compatible hotspot on macOS and Linux computers on GBAtemp.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

An Android mobile hotspot set to Open (none) security would also work.

Windows cannot create a compatible hotspot, so Windows users will need to boot into Linux in order to set one up.
#### Other methods
If you cannot create a DS-compatible hotspot using the above methods, you may be able to use another method.
- [Nintendo Wi-Fi USB Connector](https://gbatemp.net/threads/575631/)
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

### Nintendo DS WFC helyreállítás
1. Indítsd el a Nintendo Wi-Fi Connection Setup-ot
1. Csatlakozz a hozzáférési pontodhoz
1. Állítsd be az elsődleges (primary) DNS értéket az alábbiak valamelyikére, attól függően, hogy melyik szolgáltatást szeretnéd használni:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` vagy `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online player list](http://zwei.moe:9001))** - `172.104.88.237`
1. Állítsd be az `1.1.1.1` címet másodlagos DNS-nek
1. Szükséged lehet NoSSL patchelésre a játékodban, függően a játéktól

### A DS ROM-ok kézi patchelése
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Töltsd le a [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)-t
1. Másold a játék ROM-t amit patchelni a WfcPatcher mappájába és nyisd meg azt a mappát
1. Hozz létre egy szövegfájlt
1. A fájlba írd be `wfcpatcher.exe %1 --domain wiimmfi.de` majd mentsd le `patch.bat` néven és zárd be az ablakot
   - Kicserélheted a wiimmfi.de címet egy másik URL-lel, ha más szervert szeretnél használni
   - Ha a fájl még szöveges dokumentumnak látszik, [engedélyezd a fájl kiterjesztéseket](https://dsi.cfw.guide/file-extensions-%28windows%29) és távolítsd el a `.txt`-t a fájl nevéből
1. Most húzd rá az összes ROM-ot amit patchelni szeretnél a patch.bat-ra
1. Kész! A patchelt ROM-ok azok, amelyek (wiimmfi) végződéssel rendelkeznek

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Hibaelhárítás és további olvasnivalók
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
