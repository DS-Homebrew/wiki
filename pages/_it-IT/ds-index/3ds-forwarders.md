---
lang: it-IT
layout: wiki
section: ds-index
category: guides
title: Scorciatoie giochi del DS (3DS)
description: Come creare scorciatoie CIA per avere i tuoi giochi del DS nel menu home del tuo 3DS
tabs:
  - 
    tab-sd-card: Scheda SD
    tab-flashcard: Flashcard
---

Le scorciatoie del menu HOME sono icone nel menu HOME che reindirizzano ad un altro software che esegue l'icona come elencato. In questo caso, è possibile aggiungere giochi del DS dalla scheda SD (utilizzando nds-bootstrap) o da una flashcard compatibile (tramite il relativo kernel) al menu HOME per un accesso più facile ai giochi.

I giochi del DS devono essere scaricati in un formato digitale `.nds`. Puoi fare i dump delle tue cartucce DS usando [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge).
{:.alert .alert-info}

Questa pagina suppone che si sia in possesso di un CFW da [3ds.hacks.guide](https://3ds.hacks.guide).

Scegliere una delle seguenti opzioni da aggiungere al menu HOME:

{% capture tab-sd-card %}

### Parte 1: Ottenere i file richiesti

Se hai già installato Universal Updater sulla tua console, puoi saltare al passo 3.
{:.alert .alert-info}

1. Apri FBI e seleziona `Remote Install`, poi `Scan QR Code`
1. Scannerizza questo QR code per installare l'ultima versione di [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR code Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Apri Universal Updater dal tuo menu HOME
1. Installa il pacchetto NDSForwarder
1. NDSForwarder e i suoi file richiesti sono ora impostati nelle rispettive posizioni

### Parte 2: NDSForwarder
1. Avvia l'Homebrew Launcher
1. Nell'Homebrew Launcher, apri `NDS Forwarder Generator`
1. Vai alla posizione del tuo gioco e premi <kbd class="face">A</kbd>
1. Conferma che desideri installare selezionando `Yes`
1. Dopo che è stato installato, il tuo gioco apparirà come titolo nel menu HOME
{% endcapture %}
{% assign tab-sd-card = tab-sd-card | split: "////////" %}

{% capture tab-flashcard %}

Se hai qualche problema, controlla la FAQ sul thread di [GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### Requisiti

3DS:

{% capture flashcards %}
Le flashcard raccomandate sono DSTT e Acekard 2i. Se vuoi una perfetta compatibilità con i giochi, prendi la SuperCard DSTWO/DSTWO PLUS. L'unico svantaggio è che scarica la batteria del sistema più velocemente.

Se hai una flashcard che funziona con il Launcher NTR di Apache Thunder, non esitare a richiederla [sul thread di GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Assicurati di specificare quale build stai usando (Normal o Alt), e se `RESETSLOT1` è impostato a `0` o `1` in `sd:/nds/ntr_launcher.ini`.

Compatibile:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (i giochi DSi-Enhanced, compresi i giochi più recenti NTR, non funzionano.)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (utilizza una < scheda microSD da 2GB)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (versione originale non-SDHC, utilizza una < scheda microSD da 2GB)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (Versione Normale e RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (La Purple card potrebbe essere incompatible)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (versioni Normale e Plus)

Non testate:
- R4i3D NEW (utilizza modello e pacchetto R4iDSN)

Parzialmente compatibili:
- Ace 3DS+ (compatibilità con i giochi pessima, quindi il salvataggio/caricamento dei file di salvataggio risulta in un crash.)
- Gateway Blue Card (compatibilità con i giochi pessima, quindi il salvataggio/caricamento dei file di salvataggio risulta in un crash.)
- EX4DS (compatibilità con i giochi pessima, quindi il salvataggio/caricamento dei file di salvataggio risulta in un crash.)
- R4iLS (compatibilità con i giochi pessima, quindi il salvataggio/caricamento dei file di salvataggio risulta in un crash.)
- Le flashcard con [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (La compatibilità con i giochi è pessima, quindi il salvataggio/caricamento dei file risulta in crash.)

Incompatibili:
- CycloDS (i)Evolution (Può auto-avviare le ROM, ma funziona in modo diverso rispetto ad altre flashcard.)
- (i)Edge (Impossibile effettuare l'autoboot di una .nds ROM)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com)/[www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (non il processo di scorciatoia) rende inutilizzabile la card)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (non il processo di scorciatoia) rende inutilizzabile la card)
{% endcapture %}

<details>
    <summary>Una flashcard supportata da questa lista</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

PC:
- Un OS a 64 bit
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Java 8 Update 251
- **Utenti Linux:** JavaFX
   - Sistemi basati su Debian: avviare [questo](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
   - Arc: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### Passo 1: Per iniziare
1. Scarica uno di questi pacchetti:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. Estrai il contenuto della cartella `per Slot-1 microSD` nella root della scheda microSD della tua flashcard, e (se la cartella esiste) il contenuto della cartella `per scheda SD 3DS` nella directory principale della scheda SD del tuo 3DS.

Dopo aver estratto il pacchetto per la tua Sd, puoi modificare `sd:/_nds/ntr_forwarder.ini` per cambiare le impostazioni. Questo non è possibile per le flashcard Acekard RPG, R4 DS e R4i Gold RTS.
- `NTRCLOCK`: Se impostato a `0` o <kbd class="face">A</kbd> viene premuto, la schermata di avvio DSi apparirà al posto di quella normale del DS e viene utilizzata la velocità dell'orologio TWL, quindi dovrebbero esserci meno rallentamenti
- `DISABLEANIMATION`: Se impostato a `1` o <kbd class="face">B</kbd> è premuto, la schermata di avvio DS/DSi è saltata
- `HEALTHSAFETYMSG`: Se impostato a `1`, il messaggio di salute e sicurezza apparirà sullo schermo inferiore, altrimenti lo schermo inferiore rimane bianco senza alcun messaggio di salute e sicurezza

### Passo 2: Ottenere i file di fix AP per TWiLight Menu++
Se hai già TWiLight Menu++, vai al passo successivo.
1. Scarica la versione piè recente di [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Nel file 7z, vai a `_nds/TWiLightMenu/`
1. Copia la cartella `apfix` in `sd:/_nds/ntr-forwarder/` sulla scheda SD del tuo 3DS

### Passo 3: Forwarder3-DS
1. Apri `Forwarder3DS.jar`
   - **Utenti Windows:** Se non si apre, scarica questo [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), posizionalo nella stessa cartella di Forwarder3DS.jar, ed eseguilo
1. Imposta la tua carta come `Target` a sinistra
   - **NOTA:** Se non vedi un elenco di carte, scarica [questo zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), e metti la cartella `forwarders` nella stessa cartella di Forwarder3DS.jar, poi rinominalo `.forwarders`
1. Abilita `Automatically set ROM path`
   - **Linux users:** The automatic path is incorrect since it includes the entire path (e.g. `/media/$USER/something/`), please remove that part
   - **MacOS users:** The automatic path is incorrect since it includes `/Volumes/(cardname)/` at the start, please remove that part
1. Click the folder in the top right and select the ROMs you want to make forwarders for or drag and drop them onto the window
   - **NOTE:** The ROMs must already be on your SD card when selecting them, and can't be moved without recreating the forwarders
   - **SD card users:** If your save file is in the same folder as the ROM, move it to a folder called `saves`, with the `saves` folder being in the same place as the ROMs
1. If you're playing a hack/translation of a DSi-Enhanced game that has it's banner/title edited, find the banner for the game from [here](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), right click on the game in Forwarder3-DS, click `Import banner`, and click on the banner to use
1. If using a homebrew ROM, click on it, then clear the `Game title` and type the game's title
1. Click the floppy disk button to generate the forwarder CIA(s)
1. Copy the CIA(s) to your 3DS's SD card, then install them using FBI
   - Se utilizzi EmuNAND, installa sia SysNAND che EmuNAND
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}