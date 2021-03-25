---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Information om hur du använder Wi-Fi på Nintendo DS
---

- På Nintendo DS-program kan du bara använda WEP och Open WiFi
- På Nintendo DSi förbättrade/exklusiva applikationer så har du tillgång till WPA och WPA2

Hotspots är användbara, så du behöver inte ändra din router-konfiguration.

### Att skapa en hotspot
Det finns guider för att skapa ett hotspot kompatibelt med DS spel på macOS och Linux-datorer på GBAtemp. Om du är på Windows kan du använda en Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC återställning
1. Starta Nintendo WFC inställningar
1. Anslut till din åtkomstpunkt
1. Ange ditt primära DNS-värde som ett av värdena nedan, beroende på vilken tjänst du vill använda:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` eller `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Ställ in `1.1.1.1` som din sekundära DNS
1. Du kan behöva NoSSL patchad in i ditt spel just nu, beroende på spelet

### Manually patching your DS ROMs
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use mono

1. Download [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WFCPatcher is saved and open that folder
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Done! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Felsökning och vidare läsning
Om du får några fel så kan du ange felkoden i wiimmfi's [troubleshooter](https://wiimmfi.de/error) för att åtgärda det.

För mer specifik felsökning och information, till exempel hur du ansluter till nätet på emulatorer så kan du läsa denna [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) skriven av medlemmar i [Mario Kart DS Network](https://discord.gg/pa9bea6).
