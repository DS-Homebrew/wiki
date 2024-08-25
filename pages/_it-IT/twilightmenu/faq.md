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

#### How do I fix touch screen not working after launching a game?
- If you're launching a cartridge, then make sure the `Slot-1 Touch Mode` setting is set to `DS mode`
- If the issue persists, or if you're using a ROM instead, then follow this guide: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### How do I fix TWiLight Menu++ restarting or giving a Guru Meditation Error when launching a game?
Vai nelle impostazioni di TWLMenu++ e disabilita `Aggiorna la lista giochi recenti`.

#### Why do I get a white screen when trying to load a DS game from SD card?
Segui [Ho problemi con le mie ROM, cosa devo fare?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) nella pagina delle FAQ di nds-bootstrap.

#### How do I use cheats?
Devi avere un DB di trucchi nella forma di un file `usrcheat.dat` nella cartella `sd:/_nds/TWiLightMenu/extras/`. Il database dei cheat più aggiornato è quello di [DeadSkullzJr's](https://gbatemp.net/threads/488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS(i) Cheat Databases". This will automatically install it to the required location.

In alternativa, puoi usare [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) per creare il tuo DB di trucchi.

Una volta ottenuto un DB dei cheat, è possibile abilitarli premendo <kbd class="face">Y</kbd> in TWiLight Menu++ quando il cursore è sul gioco per aprire le impostazioni di gioco, quindi <kbd class="face">X</kbd> per aprire il menu dei cheat.

#### How do I show a custom picture on the top screen of the DSi theme? Can I hide it instead?
Un'immagine casuale in formato `.png` in `sd:/_nds/TWiLightMenu/dsimenu/photos/` verrà mostrata ogni volta che il menu viene caricato. Se non ci sono immagini utilizzabili, verranno utilizzati gli screenshot scattati da nds-bootstrap.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

Per nascondere l'immagine, è necessario modificare il file `theme.ini` che si trova in `sd:/_nds/TWiLightMenu/dsimenu/themes/[cartella skin]/`. Apri il file con un editor di testo, modifica la riga `RenderPhoto` da `1` a `0`, e poi salva il file.

#### How do I get games?
Puoi scaricare i giochi homebrew da [Universal-DB](https://db.universal-team.net/ds) e [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Per ottenere giochi rilasciati ufficialmente, devi fare un dump delle tue cartucce fisiche o da una console esistente:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Sì. Puoi usare [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) su 3DS o [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) su DSi / 3DS.

#### How do I change TWiLight Menu++'s language?
1. Apri le impostazioni di TWiLight Menu++ tenendo premuto <kbd>SELECT</kbd> durante il caricamento di TWiLight Menu++
1. Cambia la prima opzione finché non vedi la lingua che vuoi, poi esci dalle impostazioni
   - Potresti anche voler cambiare le prime tre opzioni sulla pagina delle impostazioni nds-bootstrap in quanto riguardano la lingua e la regione dei giochi DS e i loro titoli in TWiLight Menu++

#### Is this a DS(i) emulator?
No, questo non è un emulatore. Il menu e i giochid el DS (caricati tramite nds-bootstrap) vengono eseguiti nativamente nella modalità DS/DSi della console. Le uniche console emulate sono le console del passato, parzialmente il GBA (visto che alcune o tutte le parti come la grafica sono eseguite nativamente).

#### What systems does TWiLight Menu++ support?
Visita [Elenco dei sistemi supportati da TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
No. L'accesso alla scheda SD è consentito solo alle applicazioni DSiWare, quindi i giochi dello Slot-1 non possono avviare (o accedere) a TWiLight Menu++.

#### Why can't I find/see my games?
I motivi per cui non riesci a trovarli possono sono molteplici.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
Il modo di accedere alle impostazioni di TWiLight Menu++ varia a seconda della configurazione.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>
- **Wood UI theme:** Hitting <kbd>START</kbd> will bring you to the DS Classic Menu

È anche possibile tenere premuto <kbd>SELECT</kbd> mentre avvii TWiLight Menu++ per accedere direttamente alle impostazioni.

#### How do I use custom icons/banners for games?
You can use a custom banner in either PNG or DS banner.bin format by placing it in the `sd:/_nds/TWiLightMenu/icons` folder with the name of the ROM (including the extension) or folder + `.png` or `.bin`.

For PNG banners you simply need any PNG file with 15 colors or fewer and a maximum resolution of 32x32. Full transparency works and does not count towards the 15 colors, but semitransparency does not work.

I banner di tipo banner.bin possono essere animati e consentono di sostituire il titolo che verrà visualizzato in TWiLight Menu++. They can be made using [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

I banner preconfezionati si trovano nella [ sezione delle icone del sito delle skin di TWiLight Menu++](https://skins.ds-homebrew.com/icon/) e se ne crei di nuovi possono essere condivisi anche lì.

#### How do I install custom themes for TWiLight Menu++?
Custom skins for themes can be acquired from [the official skins site](https://skins.ds-homebrew.com/), which houses serveral community-made skins ready to apply. You can also make a custom skin for the Nintendo 3DS and Nintendo DSi themes on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** themes are _**not**_ customizable.

Once you have acquired a custom skin, you can install it by placing its folder on the appropiate path, which depends on what theme the skin is made for.
- Skins for the Nintendo DSi theme go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skins for the Nintendo 3DS theme go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skins for the R4 Original theme go in `sd:\_nds\TWiLightMenu\r4menu\themes\`
- Skins for the Wood UI theme go in `sd:\_nds\TWiLightMenu\akmenu\themes\`

If you are using a 3DS family console, you can install custom skins using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Skins`.

To apply a custom theme you must access TWiLight Menu++ Settings.
1. On the `GUI Settings` page, go to the `Theme` option and choose the theme using the right and left buttons on the D-Pad.
1. Once the target theme is selected, press the A button to choose between the skin you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired skin, then press A to select it.
1. Apply the settings by pressing B to go back to TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected skin supports it and is enabled on the settings).

#### Is there a 3DS emulator for DS(i)?
No, there isn't. It is not possible to emulate 3DS on DS(i) because of the 3DS using newer hardware.
