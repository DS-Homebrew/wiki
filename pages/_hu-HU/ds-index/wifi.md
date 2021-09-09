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
Találhatók útmutatók a GBATemp-en arról, hogyan hozz létre egy DS-kompatibilis hotspot-ot macOS és Linux számítógépekre. Ha Windows 10-et használsz, használhatod a Linux Live Boot-ot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)
- [Windows](https://gbatemp.net/questions/how-can-i-put-a-live-os-on-a-dual-boot-with-windows.5319)

### Nintendo DS WFC helyreállítás
1. Indítsd el a Nintendo Wi-Fi Connection Setup-ot
1. Csatlakozz a hozzáférési pontodhoz
1. Állítsd be az elsődleges (primary) DNS értéket az alábbiak valamelyikére, attól függően, hogy melyik szolgáltatást szeretnéd használni:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` vagy `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. Állítsd be az `1.1.1.1` címet másodlagos DNS-nek
1. Szükséged lehet NoSSL patchelésre a játékodban, függően a játéktól

### A DS ROM-ok kézi patchelése
Kövesd az útmutatót, ha az ISP-t blokkolja az egyedi DNS szervereket, egyébként *erősen* ajánlott, hogy a fenti útmutatót kövesd.

- A GNU/Linux és macOS felhasználók hasonló lépéseket kell kövessenek, de Mono-t kell használjanak
- A WfcPatcher jelenleg nem támogatja a DSiWare-eket

1. Töltsd le a [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)-t
1. Másold a játék ROM-t amit patchelni a WfcPatcher mappájába és nyisd meg azt a mappát
1. Hozz létre egy szövegfájlt
1. A fájlba írd be `wfcpatcher.exe %1 --domain wiimmfi.de` majd mentsd le `patch.bat` néven és zárd be az ablakot
   - Kicserélheted a wiimmfi.de címet egy másik URL-lel, ha más szervert szeretnél használni
   - Ha a fájl még szöveges dokumentumnak látszik, [engedélyezd a fájl kiterjesztéseket](https://dsi.cfw.guide/file-extensions-%28windows%29) és távolítsd el a `.txt`-t a fájl nevéből
1. Most húzd rá az összes ROM-ot amit patchelni szeretnél a patch.bat-ra
1. Kész! A patchelt ROM-ok azok, amelyek (wiimmfi) végződéssel rendelkeznek

Ne felejtsd, hogy távolítsd el az összes DNS-t amit mentettél a Wi-FI beállításokban, mielőtt csatlakoznál a patchelt ROM-mal.

### Hibaelhárítás és további olvasnivalók
Ha hibát kapsz, add be a hibakódot a Wiimmfi [hibaelhárítójába](https://wiimmfi.de/error), hogy megtudd, hogyan javítható.

Részletesebb hibaelhárításért és további információért, mint például, hogyan csatlakozz online emulátorokkal vagy a Nintendo Wi-Fi USB Connector-ral elolvashatod a [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing)-ot, amit a [Mario Kart DS Network](https://discord.gg/pa9bea6) tagjai készítettek.
