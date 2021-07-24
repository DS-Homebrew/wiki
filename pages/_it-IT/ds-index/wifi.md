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
Ci sono guide per la creazione di un hotspot compatibile con DS su computer macOS e Linux su GBAtemp. Se sei su Windows puoi usare un avvio Linux live.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Restauro WFC Nintendo DS
1. Avvia configurazione Nintendo Wi-Fi Connection
1. Connettiti al tuo punto di accesso
1. Imposta il tuo valore DNS primario come uno dei valori sottostanti, a seconda del servizio che vuoi utilizzare:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` o `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. Imposta `1.1.1.1` come DNS secondario
1. Potresti aver bisogno di NoSSL per applicare una patch per il tuo gioco a questo punto, a seconda della sua compatibilità

### Patchare manualmente le tue ROM del DS
Segui la guida qui sotto nel caso in cui il tuo ISP blocchi i server DNS personalizzati, altrimenti è *fortemente* consigliato di seguire la guida qui sopra.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Download [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
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
