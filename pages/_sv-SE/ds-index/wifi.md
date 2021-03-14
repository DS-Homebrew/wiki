---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Information om hur du använder Wi-Fi på Nintendo DS
---

- På Nintendo DS-program kan du bara använda WEP och Open WiFi
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA and WPA2 support

Hotspots är användbara, så du behöver inte ändra din router-konfiguration.

### Creating a hotspot
Det finns guider för att skapa ett hotspot kompatibelt med DS spel på macOS och Linux-datorer på GBAtemp. Om du är på Windows kan du använda en Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC restoration
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

### Troubleshooting and further reading
If you are receiving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
