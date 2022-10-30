---
lang: it-IT
layout: faq
section: twilightmenu
title: FAQ & Risoluzione dei problemi
long_title: FAQ e Risoluzione dei problemi & di TWiLight Menu++
description: FAQ e risoluzione dei problemi di TWiLight Menu++
---

Per ulteriori FAQ, visita il thread [GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Perché il mio 3DS si blocca con schermi neri, si spegne, ecc quando avvio TWiLight Menu++?
TWL_FIRM potrebbe in qualche modo essere danneggiato. Segui questa guida per risolvere il problema: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Come risolvo il problema di schermo bianco che ottengo quando avvio TWiLight Menu++?
- Riavvia la console
- Se ciò non funziona, formatta la scheda SD in FAT32 con 32 KB cluster/ memoria d'allocazione
   - Vedi la pagina [di guida di dsi.cfw](https://dsi.cfw.guide/sd-card-setup.html) per gli strumenti consigliati
- Se anche ciò non funziona, prova una scheda SD diversa

#### Dov'è il tema Acekard/Wood IU?
Il tema Acekard (chiamato anche Wood IU) è stato rimosso per via del suo comportamento difettoso e per le corruzioni che causava alla scheda SD. Si prega di aspettare che venga corretto. I progressi per il ritorno di questo tema possono essere trovati in [questo PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Come faccio a risolvere TWiLight Menu++ che si riavvia o mi dà un Guru Meditation Error quando avvio un gioco?
Vai nelle impostazioni di TWLMenu++ e disabilita `Aggiorna la lista giochi recenti`.

#### Perché ottengo uno schermo bianci quando tento di caricare un gioco dalla scheda SD?
Segui [Ho problemi con le mie ROM, cosa devo fare?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) nella pagina delle FAQ di nds-bootstrap.

#### Come posso usare i trucchi?
Devi avere un DB di trucchi nella forma di un file `usrcheat.dat` nella cartella `sd:/_nds/TWiLightMenu/extras/`. Il database dei cheat più aggiornato è quello di [DeadSkullzJr's](https://gbatemp.net/threads/488711/).
- Sul 3DS, questo database è disponibile nell'app Universal-Updater come "NDS(i) Cheat Databases". Lo installerà automaticamente nella posizione richiesta.

In alternativa, puoi usare [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) per creare il tuo DB di trucchi.

Una volta ottenuto un DB dei cheat, è possibile abilitarli premendo <kbd class="face">Y</kbd> in TWiLight Menu++ quando il cursore è sul gioco per aprire le impostazioni di gioco, quindi <kbd class="face">X</kbd> per aprire il menu dei cheat.

#### Come faccio a mostrare un'immagine personalizzata sullo schermo superiore nel tema DSi? La posso nascondere?
Un'immagine casuale in formato `.png` in `sd:/_nds/TWiLightMenu/dsimenu/photos/` verrà mostrata ogni volta che il menu viene caricato. Se non ci sono immagini utilizzabili, verranno utilizzati gli screenshot scattati da nds-bootstrap.

- Le immagini non devono essere più grandi di 208x156
- Se si verificano errori, è molto probabile che siano a causa della dimensione dell'immagine. Usa [tinypng](https://tinypng.com) per ridurre la dimensione

Per nascondere l'immagine, è necessario modificare il file `theme.ini` che si trova in `sd:/_nds/TWiLightMenu/dsimenu/themes/[cartella skin]/`. Apri il file con un editor di testo, modifica la riga `RenderPhoto` da `1` a `0`, e poi salva il file.

#### Come si ottengono i giochi?
Puoi scaricare i giochi homebrew da [Universal-DB](https://db.universal-team.net/ds) e [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Per ottenere i dump (copie) dei tuoi giochi commerciali:
- Su DS puoi usare [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) per effettuare copie dei tuoi giochi GBA e, se hai una flashcard Slot-2, giochi DS. Se hai solo una flashcard Slot-1 e vuoi effettuare una copia di un gioco per DS, puoi usare [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), che richiede una connessione Wi-Fi compatibile con il DS e un client FTP su un dispositivo separato per ricevere la ROM
- Su DSi puoi usare [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) per effettuare copie dei tuoi giochi DS e DSiWare
- Su 3DS puoi usare [GodMode9](https://github.com/d0k3/GodMode9/releases) per effettuare copie dei tuoi giochi DS, DSiWare e Virtual Console

#### Posso ottenere i file di salvataggio dalle mie schede di gioco sulla scheda SD o viceversa?
Sì. Puoi usare [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) su 3DS o [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) su DSi / 3DS.

#### Come faccio a cambiare la lingua di TWiLight Menu+?
1. Apri le impostazioni di TWiLight Menu++ tenendo premuto <kbd>SELECT</kbd> durante il caricamento di TWiLight Menu++
1. Cambia la prima opzione finché non vedi la lingua che vuoi, poi esci dalle impostazioni
   - Potresti anche voler cambiare le prime tre opzioni sulla pagina delle impostazioni nds-bootstrap in quanto riguardano la lingua e la regione dei giochi DS e i loro titoli in TWiLight Menu++

#### Questo è un emulatore del DS(i)?
No, questo non è un emulatore. Il menu e i giochid el DS (caricati tramite nds-bootstrap) vengono eseguiti nativamente nella modalità DS/DSi della console. Le uniche console emulate sono le console del passato, parzialmente il GBA (visto che alcune o tutte le parti come la grafica sono eseguite nativamente).

#### Quali sistemi supporta TWiLight Menu++?
Visita [Elenco dei sistemi supportati da TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Gli exploit dei giochi dello Slot-1 possono avviare TWiLight Menu++?
No. L'accesso alla scheda SD è consentito solo alle applicazioni DSiWare, quindi i giochi dello Slot-1 non possono avviare (o accedere) a TWiLight Menu++.

#### Perché non riesco a trovare/vedere i miei giochi?
I motivi per cui non riesci a trovarli possono sono molteplici.
- La cartella `_nds` che si trova nella root della scheda SD non è destinata alle applicazioni a cui si accede tramite TWiLight Menu++, in quanto è riservata ai file basati sulla funzionalità (skin, configurazione, immagini, emulatori e altro). Se avete inserito i vostri titoli qui, spostateli in un'altra posizione.
- Se in una cartella sono presenti più di 39 elementi e tutti gli slot del menu sono occupati, i giochi potrebbero trovarsi nella pagina successiva. Utilizza <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd>SELECT</kbd> + <kbd>Sinistra</kbd>/<kbd>Destra</kbd> per cambiare pagina
- Se il gioco o la cartella sono nascosti, potrebbe essere necessario mostrare i file nascosti tramite le impostazioni dell'interfaccia grafica di TWiLight Menu++
- Se il gioco è contenuto in un archivio (`zip`, `rar`, `7z`, ecc.), non può essere utilizzato da TWiLight Menu++. Estrai il gioco dall'archivio per utilizzarlo
- Se il gioco non utilizza una delle [estensioni supportate](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), potrebbe essere necessario cambiare l'estensione rinominando il file

#### Come accedo alle impostazioni di TWiLight Menu++?
Il modo di accedere alle impostazioni di TWiLight Menu++ varia a seconda della configurazione.
- **Menu classico DS:** Tocca l'icona DS nella parte inferiore dello schermo
- **Temi Nintendo DSi/SEGA Saturn/Homebrew Launcher che utilizzano il menu SELECT:** Premi <kbd>SELECT</kbd>, quindi avvia l'applet Impostazioni (utilizza la croce direzionale per evidenziare le opzioni)
- **Temi Nintendo DSi/SEGA Saturn/Homebrew Launcher che non utilizzano il menu SELECT:** Premendo <kbd>SELECT</kbd> si accede al menu classico del DS
- **Tema Nintendo 3DS:** Tocca l'icona della chiave inglese sullo schermo inferiore
- **Tema originale R4:** Premi <kbd>START</kbd> (se sei nel browser dei file), poi premere<kbd>SELECT</kbd>

È anche possibile tenere premuto <kbd>SELECT</kbd> mentre avvii TWiLight Menu++ per accedere direttamente alle impostazioni.

#### Come posso utilizzare icone/banner personalizzati per i giochi?
È possibile utilizzare un banner personalizzato in formato PNG o DS banner.bin inserendolo nella cartella `sd:/_nds/TWiLightMenu/icons` con il nome della ROM (inclusa l'estensione) + `.png` o `.bin`.

Per i banner PNG è sufficiente un file PNG con 15 colori o meno e una risoluzione massima di 32x32.

I banner di tipo banner.bin possono essere animati e consentono di sostituire il titolo che verrà visualizzato in TWiLight Menu++. Possono essere realizzati utilizzando [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases) o [dsibanner.py](https://gist.github.com/Epicpkmn11/232b7568eed650e11523da4b01c7f64f). NDS Banner Editor è un'applicazione GUI che può essere più semplice da usare, ma a volte ha problemi con la trasparenza ed è solo per Windows (anche se funziona in WINE).

I banner preconfezionati si trovano nella [ sezione delle icone del sito delle skin di TWiLight Menu++](https://skins.ds-homebrew.com/icon/) e se ne crei di nuovi possono essere condivisi anche lì.
