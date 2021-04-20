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
Kövesd az útmutatót, ha az ISP-t blokkolja az egyedi DNS szervereket, egyébként *erősen* ajánlott, hogy a fenti útmutatót kövesd.

Megjegyzés: A GNU/Linux és macOS felhasználók hasonló lépéseket kell kövessenek, de mono-t kell használjanak

1. Töltsd le a [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)-t
1. Másold a játék ROM-t amit patchelni a WFCPatcher mappájába és nyisd meg azt a mappát
1. Hozz létre egy szövegfájlt `patch.bat` néven
1. A fájlba írd be `wfcpatcher.exe %1 --domain wiimmfi.de` majd mentsd és zárd be (kicserélheted a wiimmfi.de egy másik URL-re, ha másik szervert szeretnél használni)
1. Most húzd rá az összes romot amit patchelni szeretnél a patch.bat-ra
1. Kész! A patchelt romok azok, amelyek (wiimmfi) végződéssel rendelkeznek

Ne felejtsd, hogy távolítsd el az összes DNS-t amit mentettél a Wi-FI beállításokban, mielőtt csatlakoznál a patchelt ROM-mal

### Hibaelhárítás és további olvasnivalók
Ha hibát kapsz, add be a hibakódot a wiimmfi [hibaelhárítójába](https://wiimmfi.de/error), hogy megtudd, hogyan javítható.

Részletesebb hibaelhárításért és további információért, mint például, hogyan csatlakozz online emulátorokkal elolvashatod a [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing)-ot, amit a [Mario Kart DS Network](https://discord.gg/pa9bea6) tagjai készítettek.
