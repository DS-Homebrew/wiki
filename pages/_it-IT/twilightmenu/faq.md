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
See [I’m having issues with my ROM(s), what should I do?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) on the nds-bootstrap FAQ page.

#### Come posso usare i trucchi?
Devi avere un DB di trucchi nella forma di un file `usrcheat.dat` nella cartella `sd:/_nds/TWiLightMenu/extras/`. Il database dei cheat più aggiornato è quello di [DeadSkullzJr's](https://gbatemp.net/threads/488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS(i) Cheat Databases". This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

Once you have a cheat DB, you can enable cheats by pressing <kbd class="face">Y</kbd> in TWiLight Menu++ when the cursor is on the game to open the per-game settings, then <kbd class="face">X</kbd> to open the cheats menu.

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

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Sì. Puoi usare [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) su 3DS o [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) su DSi / 3DS.

#### Come faccio a cambiare la lingua di TWiLight Menu+?
1. Apri le impostazioni di TWiLight Menu++ tenendo premuto <kbd>SELECT</kbd> durante il caricamento di TWiLight Menu++
1. Cambia la prima opzione finché non vedi la lingua che vuoi, poi esci dalle impostazioni
   - Potresti anche voler cambiare le prime tre opzioni sulla pagina delle impostazioni nds-bootstrap in quanto riguardano la lingua e la regione dei giochi DS e i loro titoli in TWiLight Menu++

#### Questo è un emulatore del DS(i)?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### Quali sistemi supporta TWiLight Menu++?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
No. SD card access is only granted to DSiWare applications, so Slot-1 games cannot launch (or even access) TWiLight Menu++.

#### Why can't I find/see my games?
There are a multiple reasons you may be unable to find them.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
The way to access the TWiLight Menu++ settings varies between your configuration.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

You can also hold <kbd>SELECT</kbd> while launching TWiLight Menu++ to directly access the settings.

#### How do I use custom icons/banners for games?
You can use a custom banner in either PNG or DS banner.bin format by placing it in the `sd:/_nds/TWiLightMenu/icons` folder with the name of the ROM (including the extension) + `.png` or `.bin`.

For PNG banners you simply need any PNG file with 15 colors or fewer and a maximum resolution of 32x32.

banner.bin type banners are able to be animated and allow you to replace the title that will be shown in TWiLight Menu++. They can be made using either [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases) or [dsibanner.py](https://gist.github.com/Epicpkmn11/232b7568eed650e11523da4b01c7f64f). NDS Banner Editor is a GUI application that may be simpler to use, however it sometimes has issues with transparency and is Windows only (although it does work in WINE).

Pre-made banners can be found in the [icons section of the TWiLight Menu++ skins site](https://skins.ds-homebrew.com/icon/) and if you make any they can be shared there as well.
