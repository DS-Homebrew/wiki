---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Information om hur du använder Wi-Fi på Nintendo DS
---

- På Nintendo DS-program kan du bara använda WEP och Open WiFi
- På Nintendo DSi-Enhanced/Exklusiva program som körs i DSi läge så har du ytterligare alternativ för WPA och WPA2 säkerhet

Hotspots är användbara, så du behöver inte ändra din router-konfiguration.

### Att skapa en hotspot
There are guides for creating a DS-compatible hotspot on macOS and Linux computers on GBAtemp.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

An Android mobile hotspot set to Open (none) security would also work.

Windows cannot create a compatible hotspot, so Windows users will need to boot into Linux in order to set one up.
#### Other methods
If you cannot create a DS-compatible hotspot using the above methods, you may be able to use another method.
- Nintendo Wi-Fi USB Connector
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

### Nintendo DS WFC återställning
1. Starta Nintendo Wi-Fi Connection Setup
1. Anslut till din åtkomstpunkt
1. Ange ditt primära DNS-värde som ett av värdena nedan, beroende på vilken tjänst du vill använda:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` eller `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online player list](http://zwei.moe:9001))** - `172.104.88.237`
1. Ställ in `1.1.1.1` som din sekundära DNS
1. Du kan behöva NoSSL patchad in i ditt spel just nu, beroende på spelet

### Manuellt patcha dina DS ROM
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Download [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WfcPatcher is saved and open that folder
1. Skapa en textfil
1. I filen, ange `wfcpatcher.exe %1 --domain wiimmfi.de`, spara sedan textfilen med namnet `patch.bat` och stäng fönstret
   - Du kan ersätta wiimmfi.de med en annan URL, om du vill använda en annan server
   - Om filen fortfarande verkar vara ett textdokument, [aktivera filändelser](https://dsi.cfw.guide/file-extensions-%28windows%29) och ta bort `.txt` från filnamnet
1. Dra nu alla ROMs du vill patcha på till patch.bat
1. Klart! De patchade ROMen kommer att vara dem som slutar i (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Felsökning och vidare läsning
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
