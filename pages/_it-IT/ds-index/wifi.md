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
Ci sono guide per la creazione di un hotspot compatibile con DS su computer macOS e Linux su GBAtemp.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

Anche un hotspot mobile Android senza password può funzionare.

Windows non è in grado di creare un hotspot compatibile, quindi gli utenti di Windows dovranno avviare Linux per crearne uno.
#### Altri metodi
Se non riesci a creare un hotspot compatibile con il DS utilizzando i metodi sopra descritti, è possibile utilizzare un altro metodo.
- Nintendo Wi-Fi USB Connector
  - Anche se è possibile utilizzarlo, non è consigliato perché richiede una versione a 32 bit di Windows XP o Vista
  - Per maggiori informazioni sull'impostazione di un Nintendo Wi-Fi USB Connector, leggi la sezione 3 di questa [Guida Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) scritta dai membri della [Mario Kart DS Network](https://discord.gg/pa9bea6)
- Modifica delle impostazioni del router per renderlo compatibile con il DS
  - Questo metodo non è consigliabile perché apre la rete agli intrusi, anche se si utilizza la sicurezza WEP. Potrebbe inoltre causare problemi ad altri utenti della tua rete. Se vuoi comunque utilizzare questo metodo, si consiglia di utilizzare un router secondario o una guest network, se disponibile
  - Non tutti i router supportano le guest network o la disattivazione della sicurezza
- Ripetitori Wi-Fi

#### Impostazioni
Se si sta configurando una rete compatibile con il DS, deve soddisfare le seguenti specifiche:
- Sicurezza WEP o Aperta (nessuna)
- Frequenza wireless 2,4 GHz
- Modalità wireless 802.11b
  - Potrebbe essere indicato come "Legacy mode" o qualcosa del genere

### Restauro WFC Nintendo DS
1. Avvia configurazione Nintendo Wi-Fi Connection
1. Connettiti al tuo punto di accesso
1. Imposta il tuo valore DNS primario come uno dei valori sottostanti, a seconda del servizio che vuoi utilizzare:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` o `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([lista dei giocatori online](http://zwei.moe:9001))** - `172.104.88.237`
1. Imposta `1.1.1.1` come DNS secondario
1. Potresti aver bisogno di NoSSL per applicare una patch per il tuo gioco a questo punto, a seconda della sua compatibilità

### Patch manuale delle tue ROM DS
Segui la guida qui sotto nel caso in cui il tuo ISP blocchi i server DNS personalizzati, altrimenti è *fortemente* consigliato di seguire la guida qui sopra.

- Gli utenti di GNU/Linux e macOS possono seguire istruzioni molto simili, ma dovranno usare Mono
- WfcPatcher attualmente non supporta i DSiWare

1. Scarica [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copia la ROM del gioco a cui desideri effettuare una patch nella stessa cartella in cui WFCPatcher viene salvato e aprila
1. Crea un file di testo
1. Nel file, inserisci `wfcpatcher.exe %1 --domain wiimmfi.de` e salva il file di testo con il nome `patch.bat` e chiudi la finestra
   - È possibile sostituire wiimmfi.de con un altro URL, se si desidera utilizzare un server diverso
   - Se il file sembra ancora essere un documento di testo, [abilita le estensioni del nome del file](https://dsi.cfw.guide/file-extensions-%28windows%29) e rimuovi `.txt` dal nome del file
1. Ora trascina tutte le ROM a cui si desidera effettuare delle patch su patch.bat
1. Fatto! le ROM a cui sono state applicate le patch saranno quelle che finiscono in (wiimmfi)

Non dimenticare di rimuovere qualsiasi DNS che potresti aver salvato sulle impostazioni Wi-Fi prima di tentare di connetterti con la ROM a cui hai effettuato la patch.

### Risoluzione dei problemi
Se stai ricevendo degli errori, puoi mettere il loro codice nel [risolutore dei problemi di Wimmfi ](https://wiimmfi.de/error) per trovare delle soluzioni per risolverli.

Per una risoluzione dei problemi più specifica e per ulteriori informazioni, come ad esempio come connettersi agli emulatori online o utilizzare USB Connector Nintendo Wi-Fi, puoi leggere questa [Guida Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) scritta dai membri della [Mario Kart DS Network](https://discord.gg/pa9bea6).
