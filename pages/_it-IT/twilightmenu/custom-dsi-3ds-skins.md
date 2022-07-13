---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Come creare skin per DSi/3DS
description: Come creare skin DSi e 3DS personalizzate per TWiLight Menu++
---

Per creare una skin per TWiLight Menu++, è necessario un editor di immagini in grado di esportare i file `.png`, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` o `.png` e file 4 BPP `.bmp`. Idealmente dovrebbero anche essere in grado di potersi riorganizzare manualmente le palette immagini. [GIMP](https://www.gimp.org) è fortemente consigliato e verrà utilizzato in questa guida in quanto è in grado di fare tutto il necessario.

## Parte 1: Scarica gli esempi
La prima cosa da fare è scaricare le [skin di esempio](/assets/files/skin-examples.zip). Possono essere utilizzate come base per la tua skin e sono già nel formato corretto, quindi se in seguito si riscontrano problemi si possono confrontare con queste.

## Parte 2: Modifica delle immagini
Scarica e installa [GIMP](https://www.gimp.org), puoi utilizzare anche altri editor, ma questa guida usa GIMP.

Once installed, open GIMP and select `Windows` -> `Dockable Dialogs` -> `Colormap`. This opens the colormap dialog, which will be helpful when editing paletted images.

A questo punto è possibile aprire l'immagine che si desidera modificare in GIMP e proseguire con la sezione sottostante in base alla cartella in cui si trova. Nota bene che TWiLight Menu++ è esigente per quanto riguarda il formato esatto delle immagini e varia a seconda della cartella in cui si trovano, quindi assicurati di esportarle come indicato nella sezione.

### Texture di sfondo (cartella `background`)
Possono essere file PNG o file BMP a 16 bit (`A1 R5 G5 B5` o `X1 R5 G5 B5`).

| Texture            | Descrizione                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| bottom             | La texture di sfondo dello schermo inferiore quando non si passa sopra a un'icona                              |
| bottom_bubble      | La texture di sfondo dello schermo inferiore quando si passa sopra a un'icona                                  |
| bottom_ds          | Per il tema 3DS, la texture di sfondo dello schermo inferiore quando non si passa sopra un'icona su un DS lite |
| bottom_bubble_ds | Per il tema 3DS, la texture di sfondo dello schermo inferiore quando si passa sopra un'icona su un DS lite     |
| top                |                                                                                                                |

### Texture della batteria (cartella `battery`)
Devono essere file PNG, qualsiasi file funzionerà, ma solo con trasparenza al 100%. Qualsiasi pixel trasparente in un'icona deve essere trasparente in tutte, in modo che venga sovrascritto correttamente al momento della modifica.

| Texture            | Descrizione                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| battery0           | Lampeggia con `battery1` quando la batteria è quasi scarica                                               |
| battery1           | 0-4 sono utilizzate in modalità DSi                                                                       |
| battery1purple     | Le icone viola vengono utilizzate quando `Colore LED batteria` è impostato su `Viola` nelle impostazioni. |
| battery2           |                                                                                                           |
| battery2purple     |                                                                                                           |
| battery3           |                                                                                                           |
| battery3purple     |                                                                                                           |
| battery4           |                                                                                                           |
| battery4purple     |                                                                                                           |
| batterycharge      |                                                                                                           |
| batterychargeblink | Lampeggia con `batterycharge` durante la ricarica                                                         |
| batteryfull        | Utilizzata in modalità DS su DSi/3DS                                                                      |
| batteryfullDS      | Utilizzata su DS Phat/DS Lite                                                                             |
| batterylow         | Utilizzata in modalità DS                                                                                 |

### Texture della palette (cartella `grf`)
Devono esserci 4 file BPP (16 colori) BMP.

To edit these in GIMP select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. When switching to indexed, ensure that `Generate optimum palette` is checked and `Maximum number of colors` is set to `16`.

**Nota:** Alcune immagini nel tema DSi hanno le palette sovrascritte in base al colore del profilo dell'utente. If editing the colors of these ensure that the `UserPalette` option for it in the `theme.ini` is set to `0`.

After converting to indexed, go to the colormap dialog and ensure the transparent color (#FF00FF) is color #0 in the colormap. If it isn't, right click in the colormap and select `Rearrange Colormap...` then move the transparent color to be the first color in the colormap and select `OK`.

If there are fewer than 16 colors in your final colormap press the `+` button at the bottom of the colormap dialog until you have 16 colors.

When exporting it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown.

| Texture       | Descrizione                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| bips          | I puntini visualizzati in fondo alla barra di scorrimento (tema DSi)                                        |
| box           | La texture della casella, contenente texture piene e vuote (tema DSi)                                       |
| box_empty     | La texture mostrata per la casella vuota (tema 3DS)                                                         |
| box_full      | La texture mostrata per una casella con un'icona (tema 3DS)                                                 |
| brace         | La texture mostrata dopo la prima e l'ultima icona (tema DSi)                                               |
| bubble        | La parte inferiore della bolla che viene disegnata o sopra il bordo iniziale o sopra la casella delle icone |
| button_arrow  | Le texture per le frecce ai lati della barra di scorrimento inferiore (tema DSi)                            |
| cornerbutton  | I pulsanti mostrati nel menu SELECT (tema DSi) (Il nome origina da un vecchio utilizzo del menu)            |
| cursor        | Il bordo con i frame d'animazione indica l'icona selezionata (tema 3DS)                                     |
| dialogbox     | Lo sfondo della finestra di dialogo che scorre verso il basso                                               |
| folder        | L'icona delle cartelle                                                                                      |
| icon_a26      | L'icona dei giochi Atari 2600                                                                               |
| icon_gb       | L'icona dei giochi Game Boy                                                                                 |
| icon_gba      | L'icona dei giochi GBA (per tutti i temi) e l'icona in alto per avviare GBARunner2 (tema 3DS)               |
| icon_gbamode  | L'icona della modalità GBA nativa                                                                           |
| icon_gg       | L'icona dei giochi Game Gear                                                                                |
| icon_int      | L'icona dei giochi Intellivision                                                                            |
| icon_m5       | L'icona dei giochi Sord M5                                                                                  |
| icon_manual   | L'icona del manuale                                                                                         |
| icon_md       | L'icona dei giochi Mega Drive                                                                               |
| icon_nes      | L'icona dei giochi NES                                                                                      |
| icon_ngp      | L'icona dei giochi Neo Geo Pocket                                                                           |
| icon_pce      | L'icona dei giochi PC Engine/TurboGrafx-16                                                                  |
| icon_plg      | L'icona dei plugin DSTWO                                                                                    |
| icon_settings | L'icona delle Impostazioni del Nintendo DSi                                                                 |
| icon_sg       | L'icona dei giochi Sega SG-1000                                                                             |
| icon_sms      | L'icona dei giochi Sega Master System                                                                       |
| icon_snes     | L'icona dei giochi SNES                                                                                     |
| icon_unk      | L'icona mostrata quando un gioco non ne ha una                                                              |
| icon_ws       | L'icona dei giochi WonderSwan                                                                               |
| launch_dot    | I punti mostrati all'avvio di un gioco (tema DSi)                                                           |
| moving_arrow  | La freccia mostrata quando si sposta un gioco (tema DSi)                                                    |
| progress      | The progress loading animation with 8 frames                                                                |
| scroll_window | La parte della barra di scorrimento che indica le icone visualizzate                                        |
| small_cart    | Le icone visualizzate in alto (tema 3DS) e nel menu SELECT (tema DSi)                                       |
| start_border  | Il bordo con i frame d'animazione indica l'icona selezionata (tema DSi)                                     |
| start_text    | Il testo mostrato sul bordo iniziale (tema DSi)                                                             |
| wirelessicons | Le icone mostrate per indicare che un gioco è dotato di supporto wireless                                   |

### Texture del Menu DS Classico (cartella `quickmenu`)
Devono essere file PNG.

| Texture    | Descrizione                                                   |
| ---------- | ------------------------------------------------------------- |
| bottombg   | Sfondo per lo schermo inferiore                               |
| phat_topbg | Sfondo per lo schermo superiore su DS Phat                    |
| topbg      | Sfondo per lo schermo superiore di qualsiasi altro modello DS |

### Texture dell'IU (cartella `ui`)
Devono essere file PNG, qualsiasi file funzionerà, ma solo con trasparenza al 100%. Qualsiasi pixel trasparente in una texture deve essere trasparente in tutte le texture correlate, in modo che venga sovrascritto correttamente al momento della modifica.

| Texture          | Descrizione                                                |
| ---------------- | ---------------------------------------------------------- |
| date_time_font | Il carattere per visualizzare la data e l'ora              |
| Lshoulder        | Il grilletto sinistro                                      |
| Lshoulder_greyed | Il grilletto sinistro quando non ci sono pagine a sinistra |
| Rshoulder        | Il grilletto destro                                        |
| Rshoulder_greyed | Il grilletto destro quando non ci sono pagine a destra     |

### Texture video (cartella `video`)
Utilizzate solo per il tema 3DS, `3dsRotatingCubes.rvid` è un file Rocket Video. Per ulteriori informazioni su come convertire i video in rvid, leggi [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) sulla wiki Vid2RVID. Se non vuoi che venga mostrato, è sufficiente cancellarlo.

### Texture del volume (cartella `volume`)
Devono essere file PNG, qualsiasi file funzionerà, ma solo con trasparenza al 100%. Qualsiasi pixel trasparente in una texture deve essere trasparente in tutte, in modo che venga sovrascritto correttamente al momento della modifica.

| Texture | Descrizione                                       |
| ------- | ------------------------------------------------- |
| volume0 | Il volume viene visualizzato solo in modalità DSi |
| volume1 | 0 è senza volume, 4 è al massimo                  |
| volume2 |                                                   |
| volume3 |                                                   |
| volume4 |                                                   |

## Configurazione del tema (file `theme.ini`)
È possibile configurare varie opzioni sul modo in cui il tema viene visualizzato nel file `theme.ini` per adattarlo a sprite o a texture più grandi. Per le opzioni vero/falso `0` è falso e `1` è vero. Le opzioni con un valore predefinito vuoto per un tema sono inutilizzate in esso.

| Valore                   | Descrizione                                                                                                                    | Predefinite (3DS) | Predefinite (DSi) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ----------------- |
| `StartBorderRenderY`     | La posizione Y iniziale del bordo iniziale                                                                                     | 92                | 81                |
| `StartBorderSpriteW`     | La larghezza dello sprite del bordo iniziale. Nota che la texture del bordo iniziale è esattamente la metà del bordo completo. | 32                | 32                |
| `StartBorderSpriteH`     | L'altezza dello sprite del bordo iniziale                                                                                      | 64                | 80                |
| `StartTextRenderY`       | La posizione Y iniziale del testo di avvio                                                                                     | 143               | 143               |
| `BubbleTipRenderY`       | La posizione Y della punta della bolla che viene tracciata sopra il bordo iniziale                                             | 98                | 80                |
| `BubbleTipRenderX`       | La posizione X della punta della bolla che viene tracciata sopra il bordo iniziale                                             | 125               | 122               |
| `BubbleTipSpriteW`       | La larghezza dello sprite della punta della bolla                                                                              | 7                 | 11                |
| `BubbleTipSpriteH`       | L'altezza dello sprite della punta della bolla                                                                                 | 7                 | 8                 |
| `TitleboxRenderY`        | La posizione Y iniziale della casella del testo del titolo                                                                     | 96                | 85                |
| `TitleboxTextY`          | La posizione Y iniziale del testo del titolo                                                                                   | 55                | 30                |
| `TitleboxTextW`          | Larghezza massima del testo del titolo                                                                                         | 200               | 240               |
| `MacroTitleboxTextY`     | La posizione Y iniziale del testo del titolo in modalità macro                                                                 |                   | 40                |
| `MacroTitleboxTextW`     | La larghezza massima del testo del titolo in modalità macro                                                                    |                   | 224               |
| `TitleboxTextLarge`      | Se utilizzare o meno i caratteri grandi per il testo del titolo                                                                | 0                 | 1                 |
| `TitleboxMaxLines`       | Il numero massimo di linee di testo da mostrare del titolo                                                                     | 3                 | 4                 |
| `VolumeRenderX`          | La posizione X sullo schermo superiore per tracciare l'icona del volume                                                        | 4                 | 4                 |
| `VolumeRenderY`          | La posizione Y sullo schermo superiore per tracciare l'icona del volume                                                        | 5                 | 5                 |
| `ShoulderLRenderY`       | La posizione Y sullo schermo superiore per tracciare l'icona del grilletto sinistro                                            | 172               | 172               |
| `ShoulderLRenderX`       | La posizione X sullo schermo superiore per tracciare l'icona del grilletto sinistro                                            | 0                 | 0                 |
| `ShoulderRRenderY`       | La posizione Y sullo schermo superiore per tracciare l'icona del grilletto destro                                              | 172               | 172               |
| `ShoulderRRenderX`       | La posizione X sullo schermo superiore per tracciare l'icona del grilletto destro                                              | 178               | 178               |
| `BatteryRenderY`         | La posizione Y sullo schermo superiore per tracciare l'icona della batteria                                                    | 5                 | 5                 |
| `BatteryRenderX`         | La posizione X sullo schermo superiore per tracciare l'icona della batteria                                                    | 235               | 235               |
| `FontPalette1`           | Il colore trasparente del carattere, non utilizzato per i caratteri predefiniti                                                | 0x0000            | 0x0000            |
| `FontPalette2`           | I colori dei caratteri, utilizza [questo sito](http://www.conradshome.com/html2bgr15/) per convertirli                         | 0xDEF7            | 0xDEF7            |
| `FontPalette3`           |                                                                                                                                | 0xC631            | 0xC631            |
| `FontPalette4`           |                                                                                                                                | 0xA108            | 0xA108            |
| `StartTextUserPalette`   | Se utilizzare o meno il colore del profilo DS per la palette del testo iniziale                                                |                   | 1                 |
| `StartBorderUserPalette` | Se utilizzare o meno il colore del profilo DS per la palette del bordo iniziale                                                |                   | 1                 |
| `ButtonArrowUserPalette` | Se utilizzare o meno il colore del profilo DS per la palette dei pulsanti freccia nella parte inferiore dello schermo          |                   | 1                 |
| `MovingArrowUserPalette` | Se utilizzare o meno il colore del profilo DS per la palette dei pulsanti quando si muovono le icone                           |                   | 1                 |
| `LaunchDotsUserPalette`  | Se utilizzare o meno il colore del profilo DS per la palette dei punti d'avvio                                                 |                   | 1                 |
| `DialogBoxUserPalette`   | Se utilizzare o meno il colore del profilo DS per la palette della casella di dialogo                                          |                   | 1                 |
| `RenderPhoto`            | Indica se mostrare o meno una foto nella schermata superiore                                                                   | 0                 | 1                 |
| `RotatingCubesRenderY`   | La posizione Y sullo schermo superiore per tracciare i cubi che roteano                                                        | 78                |                   |

## Parte 3: Aggiungere le skin a TWiLight Menu++
Dopo che hai modificato la grafica, se vuoi provare la skin è sufficiente copiare la cartella skin (la cartella contenente le cartelle `background`, `battery`, ecc.) in `sd:/_nds/TWiLightMenu/3dsmenu/themes/` o `sd:/_nds/TWiLightMenu/dsimenu/themes/` corrispettivavamente per le skin 3DS e DSi.

## Parte 4: Condividere la tua skin
Una volta completata la skin, è possibile condividerla con la community creando un Pull Request e aggiungendola al repository GitHub [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) in un file `.7z`. Se non hai dimestichezza con git, puoi semplicemente creare un issue sulla repository con un file zip della tua skin, chiedendo che venga aggiunta.

## Musica di sottofondo ed effetti sonori personalizzati
I temi per DSi e 3DS supportano anche la musica personalizzata. Per maggiori dettagli, consulta [Skin DSi/3DS - Effetti sonori personalizzati](custom-dsi-3ds-sfx).
