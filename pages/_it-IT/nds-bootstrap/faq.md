---
lang: it-IT
layout: faq
section: nds-bootstrap
title: FAQ & Risoluzione dei problemi
long_title: nds-bootstrap FAQ & Risoluzione dei problemi
description: FAQ & Risoluzione dei problemi per nds-bootstrap
---

#### Perché ottengo una schermata bianca quando si tenta di caricare un gioco dalla scheda SD?
- Innanzitutto, controlla [la lista di compatibilità di nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) e assicurati che il tuo gioco sia compatibile
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, you can use <kbd class="l">L</kbd> in the TWiLight Menu++ cheats menu to disable all cheats for a game
- Se precedentemente funzionava, elimina le cartelle `fatTable` e `patchOffsetCache` in `sd:/_nds/nds-bootstrap/`
- Run the game with different settings, including changing the ARM9 CPU Speed, Async card read, DS/DSi Mode, sound quality, Card read DMA, etc
- It's probably not that big of an issue; ask in the [Discord server](https://discord.gg/yD3spjv) If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on [GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues). Check the closed issues too in case there has already been an issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one

If no solution has been found at this point, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which will cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Certain compatible ROMs are loaded into RAM, allowing for load times to be faster than even normal Game Cards
- È possibile espandere il bus di memoria VRAM a 32-bit
- È possibile utilizzare la velocità della CPU aggiuntiva del DSi, consentendo prestazioni migliori in alcuni giochi
- È possibile migliorare l'audio con 48 kHz
- Si può utilizzare la modalità DSi, consentendo le funzionalità del DSi
- Using certain Game Cards, you are able to use IR in your application
- nds-bootstrap è open source: significa che gli sviluppatori possono sempre aggiornarlo per correggere bug e altre cose, anche se il progetto si interrompe
- Il DS Memory Expansion Pak è emulato, questo significa che i giochi che lo richiedono funzioneranno
- Inverti gli schermi superiori e inferiori per i giochi compatibili per un gameplay più confortevole, o su sistemi con uno schermo rotto o rimosso
- Take screenshots and edit values in the RAM using the in-game menu

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

