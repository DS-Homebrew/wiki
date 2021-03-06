---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informazioni sull'utilizzo del Wi-Fi sul Nintendo DS
---

- Nelle applicazioni Nintendo DS è possibile utilizzare solo WEP e Open WiFi
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA and WPA2 support

Gli hotspot sono utilizzabili, quindi non è necessario modificare la configurazione del router.

### Creating a Hotspot
Ci sono guide per la creazione di un hotspot compatibile con un gioco del DS su computer macOS e Linux su GBAtemp. Se sei su Windows puoi usare un avvio dal vivo Linux.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Restauro Nintendo DS WFC
1. Avvia le impostazioni Nintendo WFC
1. Connettiti al tuo punto di accesso
1. Imposta il tuo valore DNS primario come uno dei valori sottostanti, a seconda del servizio che vuoi utilizzare:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` o `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Imposta `1.1.1.1` come DNS secondario
1. Potresti aver bisogno di NoSSL per applicare una patch per il tuo gioco a questo punto, a seconda della sua compatibilità

### Manually Patching Your DS ROMs
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use mono

1. Download [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WFCPatcher is saved and open that folder
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Done! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Troubleshooting and Further Reading
If you are recieving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
