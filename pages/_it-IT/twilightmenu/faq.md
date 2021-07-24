---
lang: it-IT
layout: faq
section: twilightmenu
category: other
title: FAQ & Risoluzione dei problemi
long_title: TWiLight Menu++ FAQ & Risoluzione dei problemi
description: FAQ e risoluzione dei problemi per il menu TWiLight ++
---

Per ulteriori FAQ, visita il thread [GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Perché il mio 3DS/2DS si bloccano su schermi neri, crashano, si spengono, ecc quando avvio TWiLight Menu++?
TWL_FIRM potrebbe in qualche modo essere danneggiato. Segui questa guida per risolvere il problema: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Come faccio a risolvere il problema di ottenere uno schermo bianco quando avvio TWiLight Menu++?
- Innanzitutto, prova a mettere la console in modalità riposo (es. chiudendo il coperchio della console, o premendo il pulsante sospensione sull'O2DS), poi risveglia la console da esso
- Se ciò non funziona, formatta la scheda SD in FAT32 con 32 KB cluster/ memoria d'allocazione
- Se anche questo non funziona, prova una scheda SD diversa

#### Dov'è il tema Acekard/Wood IU?
Il tema acekard (chiamato anche Wood IU) è stato rimosso per via del suo comportamento buggoso e per le corruzioni della scheda SD. Si prega di aspettare che venga corretto. I progressi per il ritorno di questo tema possono essere trovati in [questo PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### Come faccio a risolvere TWiLight Menu++ che si riavvia o mi dà un Guru Meditation Error quando avvio un gioco?
Vai nelle impostazioni di TWLMenu++ e disabilita `Aggiorna la lista giochi recenti`.

#### Perché ottengo uno schermo bianco quando si tenta di caricare un gioco dalla scheda SD?
- Innanzitutto, controlla [la lista di compatibilità di nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) e assicurati che il tuo gioco sia compatibile
- Prova con tutti i trucchi disabilitati per quel gioco in quanto alcuni trucchi non sono compatibili con nds-bootstrap al momento, puoi usare <kbd class="l">L</kbd> per disabilitare tutti i trucchi per un gioco
- Se ha funzionato prima, elimina le cartelle `fatTable` e `patchOffsetCache` in `sd:/_nds/nds-bootstrap/`

#### Come posso usare i trucchi?
Devi avere un DB di trucchi nella forma di un file `usrcheat.dat` nella cartella `sd:/_nds/TWiLightMenu/extras/`. Il database dei trucchi più aggiornato è quello di [DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- Sul 3DS, questo database è disponibile nell'app Universal-Updater come "NDS Cheat Databases." Lo installerà automaticamente nella posizione richiesta.

In alternativa, puoi usare [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) per creare il tuo DB di trucchi.

#### Come faccio a mostrare un'immagine personalizzata sullo schermo superiore nel tema DSi?
Un'immagine casuale `.png` in `sd:/_nds/TWiLightMenu/dsimenu/photos/` verrà mostrata ogni volta che il menu viene caricato.

- Le immagini non devono essere più grandi di 208x156
- Se si verificano errori, è molto probabile che si verifichi un errore con la dimensione dell'immagine. Usa [tinypng](https://tinypng.com) per ridurre la dimensione

#### Come posso ottenere i giochi?
Puoi scaricare i giochi homebrew da [Universal-DB](https://db.universal-team.net/ds) e [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Per ottenere i dump dei tuoi giochi:
- Su DS puoi usare [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) per scaricare i tuoi giochi GBA e, se hai una flashcard Slot-2, giochi DS
- Su DS puoi usare [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) per scaricare i tuoi giochi DS e DSiWare
- Su 3DS puoi usare [GodMode9](https://github.com/d0k3/GodMode9/releases) per scaricare i tuoi giochi DS, DSiWare e Virtual Console

#### Posso ottenere i file di salvataggio dalle mie cartucce di gioco sulla mia scheda SD o viceversa?
Sì, puoi usare [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) su DSi e 3DS o [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) su 3DS.

#### Come faccio a cambiare la lingua di TWiLight Menu+?
1. Apri le impostazioni di TWiLight Menu++ puoi farlo tenendo premuto <kbd>SELECT</kbd> durante il caricamento di TWiLight Menu++
1. Premi <kbd class="l">L</kbd> o <kbd class="face">Y</kbd> una volta (su flashcard/3DS) o due volte (su DSi)
1. Cambia la prima opzione finché non vedi la lingua che vuoi, poi esci dalle impostazioni
   - Potresti anche voler cambiare le due opzioni successive in quanto controllano la lingua dei giochi del DS e i loro titoli in TWiLight Menu++

#### Questo è un emulatore del DS(i)?
No, questo non è un emulatore. Il menu e i giochi DS (caricati tramite nds-bootstrap) vengono eseguiti nativamente nella modalità DS/DSi della console. Le uniche console emulate sono le console del passato, ma parzialmente per il GBA (visto che alcune o tutte le parti come la grafica sono eseguite nativamente).

#### Quali sistemi supporta TWiLight Menu++?

| Formato                 | Caricatore                                       | Estensioni                             | File di salvataggio                            |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                                |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                                |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                |
| Atari XEGS              | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                                |
| DS                      | [nds-bootstrap][ndsbs], kernel flashcard, nativo | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nome della rom].sav`[^2]               |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].pub`, `saves/[rom name].prv` |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[nome della rom].sav`                         |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], nativo[^5]         | `.agb`, `.gba`, `.mb`                  | `[nome della rom].sav`                         |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[nome della rom].gg.sav`                      |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[nome della rom].srm`[^6]                     |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[nome della rom].sms.sav`                     |
| Video MPEG4             | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                                |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[nome della rom].sav`                         |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                |
| Video RVID              | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                |
| SNES[^7]                | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[nome della rom].srm`[^8]                     |
{:.table}

- Footnotes -
{:footnotes}

#### Perché l'input touch non funziona su sudokuhax?
A seconda del file di salvataggio di sudokuhax, gli input sul touch screen potrebbero non funzionare.

#### Può The Biggest Loser avviare TWiLight Menu++?
No. Poiché The Biggest Loser è un gioco Slot-1, e non un gioco DSiWare, l'accesso alla SD è disabilitato quando si eseguono schede Slot-1.

[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the cartridge
[^4]: When running in DSi Mode, it can use the DSP for better sound
[^5]: Requires a Slot-2 flashcard and thus only works on DS Phat and DS Lite
[^6]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard
[^7]: Only shown when using a flashcard, 3DS's internal SD card, or DSi with Unlaunch installed
[^8]: Can only save when running from a flashcard

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
