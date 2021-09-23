---
lang: pl_PL
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informacje o korzystaniu z Wi-Fi na Nintendo DS
---

- W aplikacjach Nintendo DS można korzystać tylko z ustawień zabezpieczeń WEP i Open Wi-Fi
- W przypadku aplikacji Nintendo DSi-Enhanced/Exclusive działających w trybie DSi dostępne są dodatkowe opcje zabezpieczeń WPA i WPA2

Da się używać hotspotów, więc nie musisz zmieniać konfiguracji swojego routera.

### Tworzenie hotspotu
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

### Przywracanie Nintendo DS WFC
1. Uruchom Nintendo Wi-Fi Connection Setup
1. Połącz się ze swoim punktem dostępu
1. Ustaw wartość Primary DNS jako jedną z wartości podanych poniżej, w zależności od tego, której usługi chcesz użyć:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` lub `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online player list](http://zwei.moe:9001))** - `172.104.88.237`
1. Ustaw `1.1.1.1` jako swój drugi DNS
1. W zależności od gry, będziesz potrzebować spatchowania jej za pomocą NoSSL

### Ręczne Patchowanie Twoich ROMów DS
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Download [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WfcPatcher is saved and open that folder
1. Utwórz plik tekstowy
1. W pliku wpisujemy `wfcpatcher.exe %1 --domain wiimmfi.de` następnie zapisujemy plik tekstowy z nazwą `patch.bat` i zamykamy okno
   - Możesz zastąpić wiimmfi.de innym adresem URL, jeśli chcesz użyć innego serwera
   - Jeśli plik nadal wydaje się być dokumentem tekstowym, [włącz rozszerzenia nazw plików](https://dsi.cfw.guide/file-extensions-%28windows%29) i usuń `.txt` z pliku
1. Teraz przeciągnij wszystkie ROMy, które chcesz patchować do patch.bat
1. Gotowe! poprawione ROMy będą tymi, które kończą się na (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Troubleshooting oraz further reading
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
