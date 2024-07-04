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
- Ha DSi-t vagy 3DS-t használsz, először győződj meg róla, hogy elfogadtad a hálózati megállapodást

Hotspotok használhatók, így nem szükséges megváltoztatnod a routered konfigurációját.

### Hotspot létrehozása
Találhatók útmutatók a GBATemp-en arról, hogyan hozz létre egy DS-kompatibilis hotspot-ot macOS és Linux számítógépekre.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

Olyan Android mobil hotspot is használható, amely Nyílt (nincs) biztonságra van állítva.

A Windows nem tud kompatibilis hotspotot létrehozni, ezért a Windows-felhasználóknak Linuxot kell indítaniuk, hogy létrehozhassanak egyet.
#### Egyéb metódusok
Ha nem tudsz létrehozni egy DS-kompatibilis hotspot-ot a fenti metódusokkal, lehet, hogy létre tudod hozni egy másikkal.
- Nintendo Wi-Fi USB Connector
    - Bár ez továbbra is használható, nem ajánlott, mivel a Windows XP vagy Vista 32 bites verziója szükséges hozzá
    - A Nintendo Wi-Fi USB Connector beállításhoz olvasd el a 3. fejezetét a [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing)-nak, amit a [Mario Kart DS Network](https://discord.gg/pa9bea6) tagjai írtak
- A router beállításainak módosítása DS-kompatibilisre
    - Ez nem ajánlott, mert kinyitja a hálózatodat a behatolók számára, még akkor is ha WEP biztonságot használsz. Továbbá problémákat okozhat a hálózatod más felhasználói számára. Ha ezt választod, ajánlott, hogy egy másodlagos routert használj vagy egy vendég hálózatot, ha elérhető
    - Nem minden router támogatja a vendég hálózatot vagy a biztonság kikapcsolását
- Wi-Fi extender-ek

#### Beállítások
Ha olyan hálózatot készítesz, ami DS-kompatibilis, annak meg kell felelnie a következő követelményeknek:
- WEP vagy Nyílt (nincs) biztonság
- 2.4 GHz Wi-Fi frekvencia
- 802.11b Wi-Fi mód
    - Ez elképzelhető, hogy "Legacy mode"-ként vagy vmi hasonlóként jelölt

### Nintendo DS WFC helyreállítás
1. Indítsd el a Nintendo Wi-Fi Connection Setup-ot
1. Csatlakozz a hozzáférési pontodhoz
1. Állítsd be az elsődleges (primary) DNS értéket az alábbiak valamelyikére, attól függően, hogy melyik szolgáltatást szeretnéd használni:
    - **[Wiimmfi](https://wiimmfi.de)** - `167.235.229.36` vagy `178.62.43.212`
    - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online játékos lista](http://zwei.moe:9001))** - `172.104.88.237`
1. Állítsd be az `1.1.1.1` címet másodlagos DNS-nek
1. Szükséged lehet NoSSL patchelésre a játékodban, függően a játéktól

### A DS ROM-ok kézi patchelése
Kövesd az útmutatót, ha az ISP-d blokkolja az egyedi DNS szervereket, egyébként *erősen* ajánlott, hogy a fenti útmutatót kövesd.

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
