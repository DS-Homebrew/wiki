---
lang: it-IT
layout: faq
section: nds-bootstrap
title: Domande frequenti e risoluzione dei problemi
long_title: Domande frequenti e Risoluzione dei problemi di nds-bootstrap
description: FAQ & Risoluzione dei problemi per nds-bootstrap
---

#### Ho problemi con le mie ROM, cosa devo fare?
- Assicurati di avere l'ultima versione di [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) e [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) se lo stai utilizzando (le istruzioni di aggiornamento sono fornite in ogni pagina delle versioni)
- Controlla [l'elenco di compatibilità di nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) per vedere se è un problema noto nell'ultima versione di nds-bootstrap
- Prova a disabilitare tutti i trucchi per quel gioco, visto che al momento non tutti sono compatibili con nds-bootstrap; premere <kbd class="l">L</kbd> nel menu dei trucchi del gioco su **TW**i**L**ight Menu++ disabiliterà tutti i trucchi attivati
- Se precedentemente funzionava, elimina le cartelle `fatTable` e `patchOffsetCache` in `sd:/_nds/nds-bootstrap/`
- Avvia il gioco con diverse impostazioni, tra cui velocità della CPU ARM9, lettura asincrona della scheda, modalità DS/DSi, qualità del suono, lettura scheda DMA, ecc
    - Utilizzando **TW**i**L**ight Menu++, modifica tutte le impostazioni per-gioco a `Predefinito`
    - Se esiste un'impostazione specifica per-gioco che causa il problema, segnalala alla [repository GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- Se presente, eliminare il database dei trucchi (`usrcheat.dat`) in `sd:/_nds/TWiLightMenu/extras`
- [Esegui nuovamente il dump della ROM](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) per assicurarsi che non sia danneggiata
- Se hai seguito tutti i passaggi precedenti, chiedi nel server Discord [](https://discord.gg/yD3spjv)
- Se il server dice che si tratta di un problema di nds-bootstrap, controlla se il gioco non è già stato segnalato su GitHub
    - Controlla anche i problemi chiusi, nel caso in cui ci sia già stato un problema chiuso a favore di uno diverso
    - Se non c'è n'è già uno, creane uno nuovo
- Se a questo punto non è stata trovata alcuna soluzione, aggiorna la [lista di compatibilità](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Perché ci sono problemi con il caricamento delle ROM, anche se sono eseguite nativamente?
nds-bootstrap applica una patch alle funzioni ROM da eseguire da una scheda SD, visto che le ROM sono codificate per essere lette dalla Slot-1. Ci sono anche problemi di timing e misure AP (che per la maggior parte sono già state rimosse), entrambi i quali causano il non corretto funzionamento delle ROM.

#### Perché usare nds-bootstrap piuttosto di una normale flashcard?
- Alcune ROM compatibili sono caricate nella RAM, consentendo tempi di caricamento più rapidi rispetto alle normali schede di gioco
- È possibile espandere il bus di memoria VRAM a 32-bit
- È possibile utilizzare la velocità della CPU aggiuntiva del DSi, consentendo prestazioni migliori in alcuni giochi
- È possibile migliorare l'audio con 48 kHz
- Si può utilizzare la modalità DSi, consentendo le funzionalità extra del DSi
- Less battery power is consumed
- Using certain Game Cards, you are able to use IR in your application
- nds-bootstrap is open source, meaning developers can always update it to fix bugs and other things, even if the project gets discontinued
- The DS Memory Expansion Pak is emulated, meaning games that require that accessory will work
- Inverti gli schermi superiori e inferiori per i giochi compatibili per un gameplay più confortevole, o su sistemi con uno schermo rotto o rimosso
- Take screenshots and edit values in the RAM using the in-game menu

#### DS/DS Lite: Perché usare nds-bootstrap su una flashcard DS?
- Alcune ROM compatibili vengono caricate nel Memory Expansion Pak (o nelle flashcard Slot-2 contenenti RAM), consentendo tempi di caricamento più rapidi rispetto alle normali schede di gioco
- Più di 200 titoli DSiWare possono essere avviati usando le patch integrate e una ROM donatrice di un titolo DSi-Enchanced
     - Tieni presente che nds-bootstrap sarà sempre usato per DSiWare, indipendentemente dall'impostazione `Usa nds-bootstrap` nelle impostazioni di TWLMenu++
     - Not all DSiWare titles can save, due to the difficulty of adding save support for them, and/or them storing more than one file in the save filesystem.
- Se il kernel della flashcard non è in grado di far girare una certa ROM, si può usare al suo posto nds-bootstrap, che può essere impostato per-gioco
- Inverti gli schermi superiori e inferiori per i giochi compatibili per un gameplay più confortevole, o su sistemi con uno schermo rotto o rimosso
- Take screenshots and edit values in the RAM using the in-game menu

#### Che cos'è una ROM donatrice?
In nds-bootstrap, quando un gioco non si avvia, viene usata un'altra ROM per "donare" il suo binario ARM7 (e ARM7i, se disponibile) al gioco da eseguire, al posto di quello del gioco stesso.     
Una ROM donatrice può essere impostata usando **TW**i**L**ight Menu++.
- **Flashcards in DS mode:** The supported DSi-Exclusive/DSiWare titles will require a DSi-Enhanced ROM set as a Donor ROM
- **DSiWarehax:** As both DSi-Enhanced games and (most) DSi-Exclusive/DSiWare games contain different MBK settings from each other, DSi-Enhanced games will not boot in DSi mode without a Donor ROM. By setting a DSi-Exclusive/DSiWare title as a Donor ROM, DSi-Enhanced games will be able to run within the MBK settings set by the DSiWare title the exploit is used on
     - On DSi, if **TW**i**L**ight Menu++ detects no Donor ROM is set, *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s)
- **CycloDS iEvolution:** Stesso caso di DSiWarehax, ma i titoli DSi-Exclusive/DSiWare richiederanno un gioco DSi-Enhanced impostato come ROM donatrice, invece del contrario

#### Qual è la migliore ROM donatrice?
There is no *best* one to use. Most ROMs of TWL titles can be set as a Donor ROM.

Examples:
- **DSiWarehax on DSi:** *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s), if one hasn't been set yet.
- **DSiWarehax on 3DS:** Dump the DS WiFi Settings ROM (SDK5.5) using GodMode9, and set it as a Donor ROM.

#### Perché non posso impostare una ROM donatrice?
If there's a title requiring a Donor ROM, and the ROM TWLMenu++ stated to find doesn't show the option to set it as one (provided you've scrolled down), then find another ROM to set as a donor.

#### Che cos'è una nightly e dove posso trovarla?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [from the TWLBot/Builds GitHub repository](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
- Some cheats may have button activators or other conditions that need to be met. Check the description of the cheat for more information
  - In **TW**i**L**ight Menu++, you can press Y to view a specific cheat's information, when available
- Most cheats were developed for use in DS mode and may not work correctly while running in DSi mode. If the game is DSi-Enhanced, try setting it to run in DS mode
- The way E-type cheats are implemented in nds-bootstrap is currently broken, meaning they may or may not work. Your cheat probably uses that type, and it is not known when this issue will be fixed

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### How do I take screenshots?
You can take screenshots of the main screen from the in-game menu. By default the in-game menu is opened by pressing <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>, then select `Screenshot...`, change the VRAM bank if needed, and press <kbd class="face">A</kbd> to save the screenshot.

To view your screenshots on your PC you will need to extract `sd:/_nds/nds-bootstrap/screenshots.tar`, inside will be all of your screenshots in BMP format. There will also be additional empty BMP files to pad the TAR file out to 50, these can simply be ignored or deleted.

nds-bootstrap can only fit 50 screenshots in the `screenshots.tar`, so once you're getting close you should extract them and delete the TAR, nds-bootstrap will then generate a new TAR next time you load a game.

#### What is the main screen and why can only it have screenshots?
The "main" screen is whichever screen is being drawn using the main engine, which can be either physical screen. Typically it's the screen where the main gameplay is happening and if one screen has 3D that's always the main screen. It'll always be the top screen when in the in-game menu.

The reason screenshots can only be taken of the main screen is a hardware limitation of the Nintendo DS, it doesn't have a framebuffer but it does have a display capture feature which allows main engine's output to be captured. This is most often used by games to render 3D to both screens but can also be used to take screenshots.

#### What is the "VRAM bank" I'm asked to select when taking a screenshot?
When taking a screenshot using nds-bootstrap it needs to use the DS's display capture feature to capture a frame from the main engine, however this display capture can only write to VRAM and requires one of the first four banks. nds-bootstrap will try to select a bank that isn't being used for the main engine so usually you can simply ignore this, however in some case all four of the possible VRAM banks will be in use for the main engine and thus it's not possible to take a perfect screenshot and you will need to select the bank you find looks best.

#### Can I play games online using nds-bootstrap?
Playing games online with nds-bootstrap will work exactly as it does with real Game Cards. See the [Wi-Fi](../ds-index/wifi) page for information on connecting to an alternate online service.
- If you are playing a DSi-Enhanced game in DS mode, you are restricted to unsecured or WEP network connections

#### Can setting a game to use 133 MHz (TWL) CPU speed damage my console?
No. While not all games may function correctly under this setting, the DSi and 3DS were designed to be able to reach this CPU speed.
- If you encounter an issue with a game when running at 133 MHz (TWL) CPU speed, create an issue on the [**TW**i**L**ight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues) detailing the effects so that it may be blacklisted from being launched at that CPU speed

#### Can I speed up games using nds-bootstrap?
While TWL CPU speed may reduce lag, nds-bootstrap cannot run games at faster speeds than intended.

#### Can I remap button inputs using nds-bootstrap?
No. Since nds-bootstrap runs games natively, it cannot change the function of most buttons. The only way to do so would be to modify the game itself, or by using cheat codes.

#### How do I play randomized Pokémon ROMs with nds-bootstrap?
Pokémon HeartGold/SoulSilver, Black/White, and Black 2 / White 2 have anti-piracy measures that have to be manually patched out *before* randomizing the ROM. You can do this with [DS-Scene ROM Tool](https://gbatemp.net/download/35735/).
- Randomized ROMs cannot be AP-patched on-the-fly like the vanilla versions of these games are, because randomizing a ROM has far too many unique possible outputs to be reasonably included with **TW**i**L**ight Menu++

#### What are DSi binaries? How do I get them?
DSi binaries are the portions of a game's code to be used on DSi (as well as 3DS) systems for use of the DSi's features, such as the cameras and improved Wi-Fi capabilities. Older dumping methods may not have properly dumped these.

- ROMs without the DSi binaries can still be played on any console through DS mode, in which it will run as if the game were being played on a Nintendo DS Phat/Lite

To obtain a ROM that contains the DSi binaries, [re-dump your Game Card](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games).
