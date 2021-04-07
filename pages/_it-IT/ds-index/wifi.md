---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Informazioni sull'utilizzo del Wi-Fi sul Nintendo DS
---

- Nelle applicazioni Nintendo DS è possibile utilizzare solo WEP e Open WiFi
- Nelle applicazioni Nintendo DSi enhanced/esclusive, si dispone del supporto ulteriore WPA e WPA2

Gli hotspot sono utilizzabili, quindi non è necessario modificare la configurazione del router.

### Creare un hotspot
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

### Patchare manualmente le tue ROM del DS
Segui la guida qui sotto nel caso in cui il tuo ISP blocchi i server DNS personalizzati, altrimenti è *fortemente* consigliato di seguire la guida qui sopra.

Nota: Gli utenti di GNU/Linux e macOS possono seguire istruzioni molto simili, ma dovranno usare mono

1. Scarica [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copiare la ROM del gioco che si desidera patchare nella stessa cartella in cui WFCPatcher viene salvato e aprire quella cartella
1. Crea un file di testo con il nome `patch.bat`
1. Nel file, inserisci `wfcpatcher.exe %1 --domain wiimmfi. e` quindi salva e chiudi (è possibile sostituire wiimmfi.de con un altro URL, se si desidera utilizzare un server diverso)
1. Ora trascina tutte le Rom che si desiderano patchare su patch.bat
1. Fatto! le roms patchate saranno quelle che finiscono in (wiimmfi)

Non dimenticare di rimuovere qualsiasi DNS che potresti aver salvato sulle impostazioni Wi-Fi prima di tentare di connetterti con la ROM patchata

### Risoluzione dei problemi e ulteriore lettura
Se stai ricevendo degli errori, puoi mettere il loro codice nel [risolutore dei problemi di wimmfi ](https://wiimmfi.de/error) per trovare delle soluzioni per risolverli.

Per una risoluzione dei problemi più specifica e per ulteriori informazioni, come ad esempio come connettersi agli emulatori online, puoi leggere questa [Guida Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) scritta dai membri della [Mario Kart DS Network](https://discord.gg/pa9bea6).
