---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informazioni sull'utilizzo del Wi-Fi sul Nintendo DS
---

- Nelle applicazioni Nintendo DS è possibile utilizzare solo le impostazioni di sicurezza WEP e Open Wi-Fi
- Su applicazioni Nintendo DSi-Enhanced/Esclusive avviate in modalità DSi, hai le opzioni aggiuntive di sicurezza WPA e WPA2

Gli hotspot sono utilizzabili, quindi non è necessario modificare la configurazione del router.

### Creare un hotspot
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

### Restauro WFC Nintendo DS
1. Avvia configurazione Nintendo Wi-Fi Connection
1. Connettiti al tuo punto di accesso
1. Imposta il tuo valore DNS primario come uno dei valori sottostanti, a seconda del servizio che vuoi utilizzare:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` o `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online player list](http://zwei.moe:9001))** - `172.104.88.237`
1. Imposta `1.1.1.1` come DNS secondario
1. Potresti aver bisogno di NoSSL per applicare una patch per il tuo gioco a questo punto, a seconda della sua compatibilità

### Patchare manualmente le tue ROM del DS
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Scarica [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WfcPatcher is saved and open that folder
1. Crea un file di testo
1. Nel file, inserisci `wfcpatcher.exe %1 --domain wiimmfi.de` e salva il file di testo con il nome `patch.bat` e chiudi la finestra
   - È possibile sostituire wiimmfi.de con un altro URL, se si desidera utilizzare un server diverso
   - Se il file sembra ancora essere un documento di testo, [abilita le estensioni del nome del file](https://dsi.cfw.guide/file-extensions-%28windows%29) e rimuovi `.txt` dal nome del file
1. Ora trascina tutte le ROM che si desiderano patchare su patch.bat
1. Fatto! le ROM patchate saranno quelle che finiscono in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Risoluzione dei problemi e ulteriore lettura
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
