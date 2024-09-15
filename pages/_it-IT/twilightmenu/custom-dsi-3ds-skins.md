---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Come creare skin per DSi/3DS
description: Come creare skin DSi e 3DS personalizzate per TWiLight Menu++
---

Per creare una skin per TWiLight Menu++, è necessario un editor di immagini in grado di esportare i file `.png`, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` o `.png` e file 4 BPP `.bmp`. Idealmente dovrebbe anche essere in grado di potersi riorganizzare manualmente le palette delle immagini. [GIMP](https://www.gimp.org) è fortemente consigliato e verrà utilizzato in questa guida in quanto è in grado di fare tutto il necessario.

## Parte 1: Scarica gli esempi
La prima cosa da fare è scaricare le [skin di esempio](/assets/files/skin-examples.zip). Possono essere utilizzate come base per la tua skin e sono già nel formato corretto, quindi se in seguito si riscontrano problemi si possono confrontare con queste.

## Parte 2: Modifica delle immagini
Scarica e installa [GIMP](https://www.gimp.org)
- Altri editor di immagini come Photoshop possono funzionare, ma in questa guida verrà utilizzato GIMP

Una volta installato, apri GIMP e seleziona `Windows` -> `Dockable Dialogs` -> `Colormap`. Apre la finestra di dialogo della mappa dei colori, utile per la modifica delle immagini con palette.

A questo punto è possibile aprire l'immagine che si desidera modificare in GIMP e proseguire con la sezione sottostante in base alla cartella in cui si trova. Nota bene che TWiLight Menu++ è esigente per quanto riguarda il formato esatto delle immagini e varia a seconda della cartella in cui si trovano, quindi assicurati di esportarle come indicato nella sezione.

### Texture di sfondo (cartella `background`)
Possono essere file PNG o file BMP a 16 bit (`A1 R5 G5 B5` o `X1 R5 G5 B5`).
- Se si utilizzano file BMP, è possibile impostarli a 16 bit in Opzioni avanzate durante l'esportazione. Potrebbe essere necessario eseguire questa operazione ogni volta che si esporta in formato BMP

| Texture               | Descrizione                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| top                   | La texture di sfondo dello schermo superiore                                                                        |
| top_photo             | The top screen background texture when a photo is being shown                                                       |
| bottom                | La texture di sfondo dello schermo inferiore quando non si passa sopra a un'icona                                   |
| bottom_ds             | Per il tema 3DS, la texture di sfondo dello schermo inferiore quando non si passa sopra un'icona su un DS Phat/Lite |
| bottom_macro          | Per il tema DSi, la texture di sfondo quando non si passa sopra un'icona utilizzando la modalità Macro              |
| bottom_bubble         | La texture di sfondo dello schermo inferiore quando si passa sopra a un'icona                                       |
| bottom_bubble_ds    | Per il tema 3DS, la texture di sfondo dello schermo inferiore quando si passa sopra un'icona su un DS Phat/Lite     |
| bottom_bubble_macro | Per il tema DSi, la texture di sfondo quando si passa sopra un'icona utilizzando la modalità Macro                  |
| bottom_moving         | For the DSi theme, the bottom background texture when moving an icon                                                |
| bottom_moving_macro | For the DSi theme, the background texture when moving an icon while using Macro Mode                                |

### Texture della batteria (cartella `battery`)
Devono essere file PNG. Transparency is supported, however only 100% transparency will work.

| Texture            | Description/Notes                                                                                         |
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
These must be 4 BPP (16 color) BMP files.

To edit these in GIMP, select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors, select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. Quando si passa all'indicizzazione, assicurartiche `Generate optimum palette` sia selezionato e `Maximum number of colors` sia impostato su `16`.

**Nota:** Alcune immagini nel tema DSi hanno le palette sovrascritte in base al colore del profilo dell'utente. Se modifichi i colori di questi, assicurarsi che l'opzione `UserPalette` nel file `theme.ini` sia impostata su `0`.

Dopo la conversione in indicizzato, accedi alla finestra di dialogo della mappa dei colori e assicurati che il colore trasparente (#FF00FF) sia il colore #0 nella mappa dei colori. In caso contrario, clicca con il pulsante destro del mouse sulla mappa dei colori e seleziona `Rearrange Colormap...` quindi sposta il colore trasparente in modo che sia il primo colore della mappa dei colori e seleziona `OK`.

If there are fewer than 16 colors in your final colormap, press the `+` button at the bottom of the colormap dialog until you have 16 colors.

When exporting, it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown.

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
| icon_col      | The icon for Colecovision games                                                                             |
| icon_gb       | The icon for Game Boy games                                                                                 |
| icon_gba      | The icon for GBA games                                                                                      |
| icon_gbamode  | The icon for native GBA Mode                                                                                |
| icon_gg       | The icon for Game Gear games                                                                                |
| icon_img      | The icon for BMP, GIF, and PNG images                                                                       |
| icon_int      | The icon for Intellivision games                                                                            |
| icon_m5       | The icon for Sord M5 games                                                                                  |
| icon_manual   | The icon for the manual                                                                                     |
| icon_md       | The icon for Mega Drive games                                                                               |
| icon_nes      | The icon for NES games                                                                                      |
| icon_ngp      | The icon for Neo Geo Pocket games                                                                           |
| icon_pce      | The icon for PC Engine/TurboGrafx-16 games                                                                  |
| icon_plg      | The icon for DSTWO plugins                                                                                  |
| icon_settings | The icon for Nintendo DSi Settings                                                                          |
| icon_sg       | The icon for Sega SG-1000 games                                                                             |
| icon_sms      | The icon for Sega Master System games                                                                       |
| icon_snes     | The icon for SNES games                                                                                     |
| icon_unk      | The icon displayed when a game is missing an icon                                                           |
| icon_ws       | The icon for WonderSwan games                                                                               |
| launch_dot    | The dots displayed when a game is launched (DSi Theme)                                                      |
| moving_arrow  | The arrow displayed when a game is being moved (DSi Theme)                                                  |
| progress      | The progress loading animation with 8 frames                                                                |
| scroll_window | The part of the scrollbar that indicates the icons that are in view                                         |
| small_cart    | The icons displayed along the top (3DS Theme) and in the SELECT menu (DSi Theme)                            |
| start_border  | The border with animation frames that indicates the selected icon (DSi Theme)                               |
| start_text    | The text displayed on the start border (DSi Theme)                                                          |
| wirelessicons | The icons displayed to indicate a game has wireless support                                                 |

### Texture del Menu DS Classico (cartella `quickmenu`)
Devono essere file PNG.

| Texture    | Descrizione                                                   |
| ---------- | ------------------------------------------------------------- |
| bottombg   | Sfondo per lo schermo inferiore                               |
| phat_topbg | Sfondo per lo schermo superiore su DS Phat                    |
| topbg      | Sfondo per lo schermo superiore di qualsiasi altro modello DS |

### Texture dell'IU (cartella `ui`)
Devono essere file PNG. Transparency is supported, however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all of them, so that it's properly overwritten on change.

| Texture                  | Descrizione                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| Lshoulder                | The left shoulder                                                |
| Lshoulder_greyed         | The left shoulder when there are no pages to the left            |
| Lshoulder_photo          | The left shoulder when there is a photo being shown              |
| Lshoulder_photo_greyed | The left shoulder with no pages to the left and a photo showing  |
| Rshoulder                | The right shoulder                                               |
| Rshoulder_greyed         | The right shoulder when there are no pages to the right          |
| Rshoulder_photo          | The right shoulder when there is a photo being shown             |
| Rshoulder_photo_greyed | The right shoulder with no pages to the left and a photo showing |

### Texture video (cartella `video`)
Utilizzate solo per il tema 3DS, `3dsRotatingCubes.rvid` è un file Rocket Video. Per ulteriori informazioni su come convertire i video in rvid, leggi [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) sulla wiki Vid2RVID. Se non vuoi che venga mostrato, è sufficiente cancellarlo.

### Texture del volume (cartella `volume`)
Volume textures are only displayed in DSi Mode.

Devono essere file PNG. Transparency is supported, however only 100% transparency will work.


| Texture | Description/Notes            |
| ------- | ---------------------------- |
| volume0 | 0 is muted, 4 is full volume |
| volume1 |                              |
| volume2 |                              |
| volume3 |                              |
| volume4 |                              |

## Configurazione del tema (file `theme.ini`)
You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger graphics or different layouts. For true/false options, `0` is false, and `1` is true. Options with a blank default value for a theme are unused in that theme.

| Valore                     | Description/Notes                                                                                                                                                  | Predefinite (3DS) | Predefinite (DSi) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ----------------- |
| `StartBorderRenderY`       | La posizione Y iniziale del bordo iniziale                                                                                                                         | 92                | 81                |
| `StartBorderSpriteW`       | La larghezza dello sprite del bordo iniziale. Note that the start border texture is exactly half of the full border                                                | 32                | 32                |
| `StartBorderSpriteH`       | L'altezza dello sprite del bordo iniziale                                                                                                                          | 64                | 80                |
| `StartTextRenderY`         | La posizione Y iniziale del testo di avvio                                                                                                                         | 143               | 143               |
| `BubbleTipRenderX`         | The X position of the tip of the bubble that is drawn over the start border                                                                                        | 125               | 122               |
| `BubbleTipRenderY`         | The Y position of the tip of the bubble that is drawn over the start border                                                                                        | 98                | 80                |
| `BubbleTipSpriteW`         | La larghezza dello sprite della punta della bolla                                                                                                                  | 7                 | 11                |
| `BubbleTipSpriteH`         | L'altezza dello sprite della punta della bolla                                                                                                                     | 7                 | 8                 |
| `TitleboxRenderY`          | La posizione Y iniziale della casella del testo del titolo                                                                                                         | 96                | 85                |
| `TitleboxTextY`            | La posizione Y iniziale del testo del titolo                                                                                                                       | 55                | 30                |
| `TitleboxTextW`            | Larghezza massima del testo del titolo                                                                                                                             | 200               | 240               |
| `TitleboxTextLarge`        | Whether to use the large font for the title text                                                                                                                   | 0                 | 1                 |
| `TitleboxMaxLines`         | The maximum lines of text to show of the title                                                                                                                     | 3                 | 4                 |
| `VolumeRenderX`            | The X position on the top screen to draw the volume icon                                                                                                           | 4                 | 4                 |
| `VolumeRenderY`            | The Y position on the top screen to draw the volume icon                                                                                                           | 5                 | 5                 |
| `ShoulderLRenderX`         | The X position on the top screen to draw the left shoulder                                                                                                         | 0                 | 0                 |
| `ShoulderLRenderY`         | The Y position on the top screen to draw the left shoulder                                                                                                         | 172               | 172               |
| `ShoulderRRenderX`         | The X position on the top screen to draw the right shoulder                                                                                                        | 178               | 178               |
| `ShoulderRRenderY`         | The Y position on the top screen to draw the right shoulder                                                                                                        | 172               | 172               |
| `BatteryRenderX`           | The X position on the top screen to draw the battery icon                                                                                                          | 235               | 235               |
| `BatteryRenderY`           | The Y position on the top screen to draw the battery icon                                                                                                          | 5                 | 5                 |
| `UsernameRenderX`          | The X position on the top screen to draw the username text                                                                                                         | 28                | 28                |
| `UsernameRenderY`          | The Y position on the top screen to draw the username text                                                                                                         | 15                | 15                |
| `UsernameRenderXDS`        | The X position on the top screen to draw the username text, when on a DS Phat/Lite                                                                                 | 4                 | 4                 |
| `DateRenderX`              | The X position on the top screen to draw the date text                                                                                                             | 162               | 162               |
| `DateRenderY`              | The Y position on the top screen to draw the date text                                                                                                             | 7                 | 7                 |
| `TimeRenderX`              | The X position on the top screen to draw the time text                                                                                                             | 200               | 200               |
| `TimeRenderY`              | The Y position on the top screen to draw the time text                                                                                                             | 7                 | 7                 |
| `PurpleBatteryAvailable`   | Whether or not to use the purple battery icons when `Power LED color` is set to `Purple` in settings                                                               | 1                 | 1                 |
| `FontPalette1`             | The transparent color of the font, unused for default fonts                                                                                                        | 0x0000            | 0x0000            |
| `FontPalette2`             | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                                                                         | 0xDEF7            | 0xDEF7            |
| `FontPalette3`             |                                                                                                                                                                    | 0xC631            | 0xC631            |
| `FontPalette4`             |                                                                                                                                                                    | 0xA108            | 0xA108            |
| `FontPaletteDateTime1`     | The override transparent color of the font for the date and time                                                                                                   | 0x0000            | 0x0000            |
| `FontPaletteDateTime2`     | The override color of the font for the date and time                                                                                                               | 0xDEF7            | 0xA529            |
| `FontPaletteDateTime3`     |                                                                                                                                                                    | 0xC631            | 0xBDEF            |
| `FontPaletteDateTime4`     |                                                                                                                                                                    | 0xA108            | 0xD6B5            |
| `FontPaletteTitlebox1`     | The override transparent color of the font for the ROM title box                                                                                                   | 0x0000            | 0x0000            |
| `FontPaletteTitlebox2`     | The override color of the font for the ROM title box                                                                                                               | 0xDEF7            | 0xDEF7            |
| `FontPaletteTitlebox3`     |                                                                                                                                                                    | 0xC631            | 0xC631            |
| `FontPaletteTitlebox4`     |                                                                                                                                                                    | 0xA108            | 0xA108            |
| `FontPaletteDialog1`       | The override transparent color of the font for dialogs                                                                                                             | 0x0000            | 0x0000            |
| `FontPaletteDialog2`       | The override color of the font for dialogs                                                                                                                         | 0xDEF7            | 0xDEF7            |
| `FontPaletteDialog3`       |                                                                                                                                                                    | 0xC631            | 0xC631            |
| `FontPaletteDialog4`       |                                                                                                                                                                    | 0xA108            | 0xA108            |
| `FontPaletteOverlay1`      | The override transparent color of the font for overlayed text                                                                                                      | 0x0000            | 0x0000            |
| `FontPaletteOverlay2`      | The override color of the font for overlayed text                                                                                                                  | 0xDEF7            | 0xDEF7            |
| `FontPaletteOverlay3`      |                                                                                                                                                                    | 0xC631            | 0xC631            |
| `FontPaletteOverlay4`      |                                                                                                                                                                    | 0xA108            | 0xA108            |
| `FontPaletteUsername1`     | The override transparent color of the font for the username                                                                                                        | 0x0000            | 0x0000            |
| `FontPaletteUsername2`     | The override color of the font for the username                                                                                                                    | 0xDEF7            | 0xDEF7            |
| `FontPaletteUsername3`     |                                                                                                                                                                    | 0xC631            | 0xC631            |
| `FontPaletteUsername4`     |                                                                                                                                                                    | 0xA108            | 0xA108            |
| `BipsUserPalette`          | Se utilizzare o meno il colore del profilo DS per la tavolozza dei bips sulla barra di scorrimento                                                                 |                   | 0                 |
| `BoxUserPalette`           | Se utilizzare o meno il colore del profilo DS per la tavolozza delle caselle contenenti le icone di gioco nel tema DSi                                             |                   | 0                 |
| `BoxEmptyUserPalette`      | Se utilizzare o meno il colore del profilo DS per la tavolozza delle caselle vuote nel tema 3DS                                                                    | 0                 |                   |
| `BoxFullUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza delle caselle contenenti le icone di gioco nel tema 3DS                                             | 0                 |                   |
| `BraceUserPalette`         | Se utilizzare o meno il colore del profilo DS per la tavolozza del tutore all'inizio e alla fine dell'elenco dei giochi                                            |                   | 0                 |
| `BubbleUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza della punta del fumetto del titolo                                                                  | 0                 | 0                 |
| `ButtonArrowUserPalette`   | Se utilizzare o meno il colore del profilo DS per la tavolozza dei pulsanti freccia nella parte inferiore dello schermo                                            |                   | 1                 |
| `CornerButtonUserPalette`  | Se utilizzare o meno il colore del profilo DS per la tavolozza delle icone del menu DSi e delle impostazioni nel menu SELECT                                       |                   | 0                 |
| `CursorUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza del cursore                                                                                         | 0                 |                   |
| `DialogBoxUserPalette`     | Se utilizzare o meno il colore del profilo DS per la palette della casella di dialogo                                                                              | 0                 | 1                 |
| `FolderUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza delle cartelle                                                                                      | 0                 | 0                 |
| `LaunchDotsUserPalette`    | Se utilizzare o meno il colore del profilo DS per la tavolozza dei punti di lancio                                                                                 |                   | 1                 |
| `MovingArrowUserPalette`   | Se utilizzare o meno il colore del profilo DS per la tavolozza della freccia mostrata quando si spostano le icone                                                  |                   | 1                 |
| `ProgressUserPalette`      | Se utilizzare o meno il colore del profilo DS per la tavolozza dello spinner di avanzamento del caricamento                                                        | 1                 | 1                 |
| `ScrollWindowUserPalette`  | Se utilizzare o meno il colore del profilo DS per la tavolozza dello sfondo della finestra di scorrimento sulla barra di scorrimento                               |                   | 0                 |
| `SmallCartUserPalette`     | Se utilizzare o meno il colore DS Profile per la tavolozza delle icone delle cartucce                                                                              | 0                 | 0                 |
| `StartBorderUserPalette`   | Se utilizzare o meno il colore del profilo DS per la tavolozza del bordo iniziale                                                                                  |                   | 1                 |
| `StartTextUserPalette`     | Se utilizzare o meno il colore del profilo DS per la tavolozza del testo iniziale                                                                                  |                   | 1                 |
| `WirelessIconsUserPalette` | Se utilizzare o meno il colore DS Profile per la tavolozza delle icone wireless                                                                                    | 0                 | 0                 |
| `IconA26UserPalette`       | Se utilizzare o meno il colore DS Profile per la tavolozza dell'icona Atari 2600                                                                                   | 0                 | 0                 |
| `IconCOLUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona ColecoVision                                                                             | 0                 | 0                 |
| `IconGBUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona del Game Boy                                                                             | 0                 | 0                 |
| `IconGBAUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona del Game Boy Advance                                                                     | 0                 | 0                 |
| `IconGBAModeUserPalette`   | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona della modalità GBA nativa                                                                | 0                 | 0                 |
| `IconGGUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona del Game Gear                                                                            | 0                 | 0                 |
| `IconIMGUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona dell'immagine                                                                            | 0                 | 0                 |
| `IconINTUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona Intellivision                                                                            | 0                 | 0                 |
| `IconM5UserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona Sord M5                                                                                  | 0                 | 0                 |
| `IconManualUserPalette`    | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona del manuale                                                                              | 0                 | 0                 |
| `IconMDUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona Genesis/Mega Drive                                                                       | 0                 | 0                 |
| `IconNESUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona NES/Famicom                                                                              | 0                 | 0                 |
| `IconNGPUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona Neo Geo Pocket                                                                           | 0                 | 0                 |
| `IconPCEUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona PC Engine/TurboGrafx-16                                                                  | 0                 | 0                 |
| `IconPLGUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona del plug-in DSTWO                                                                        | 0                 | 0                 |
| `IconSettingsUserPalette`  | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona Impostazioni DSi                                                                         | 0                 | 0                 |
| `IconSGUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona SG-1000                                                                                  | 0                 | 0                 |
| `IconSMSUserPalette`       | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona del sistema principale                                                                   | 0                 | 0                 |
| `IconSNESUserPalette`      | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona SNES                                                                                     | 0                 | 0                 |
| `IconUnknownUserPalette`   | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona sconosciuta (mancante)                                                                   | 0                 | 0                 |
| `IconWSUserPalette`        | Se utilizzare o meno il colore del profilo DS per la tavolozza dell'icona WonderSwan                                                                               | 0                 | 0                 |
| `UsernameUserPalette`      | Se utilizzare o meno il colore del profilo DS per la tavolozza del nome utente                                                                                     | 1                 | 1                 |
| `ProgressBarUserPalette`   | Se utilizzare o meno il colore del profilo DS come colore della barra di avanzamento                                                                               | 1                 | 1                 |
| `ProgressBarColor`         | Il colore della barra di avanzamento se `ProgressBarUserPalette` è disabilitato                                                                                    | 0x7C00            | 0x7C00            |
| `UseAlphaBlend`            | Se fondere o meno i colori del testo dello schermo superiore (Data/Ora e Nome Utente) con i colori dello sfondo                                                    | 1                 | 1                 |
| `DarkLoading`              | Se sfumare o meno in nero invece che in bianco durante il caricamento delle schermate                                                                              | 0                 | 0                 |
| `RenderPhoto`              | Se disegnare o meno una foto sullo schermo superiore                                                                                                               | 0                 | 1                 |
| `RotatingCubesRenderY`     | La posizione Y sullo schermo superiore per disegnare i cubi rotanti                                                                                                | 78                |                   |
| `PlayStartupJingle`        | Se utilizzare o meno il suono di avvio prima della musica di sottofondo principale. Consulta la pagina [custom SFX](custom-dsi-3ds-sfx) per ulteriori informazioni | 1                 | 0                 |
| `StartupJingleDelayAdjust` | La quantità di campioni all'inizio del suono di avvio con cui dovrebbe iniziare la musica di sottofondo                                                            | 0                 | 0                 |

### Macro Mode options
You may add specific override options to `theme.ini` for use in Macro Mode. To do this, add `[MACRO]` to a blank line at the bottom of the configuration file, then add any specified configurations below it.

## Custom background music and sound effects
I temi per DSi e 3DS supportano anche la musica personalizzata. Per maggiori dettagli, consulta [Skin DSi/3DS - Effetti sonori personalizzati](custom-dsi-3ds-sfx).

## Custom fonts
You may put [Custom Fonts](custom-fonts) in the `font` folder for use in the skin. You can also add override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

## Tavolozze personalizzate
Per le texture con tavolozza (cartella `grf`), è possibile aggiungere facoltativamente set di palette di sostituzione che vengono utilizzati quando l'impostazione `UserPalette` corrispondente è abilitata. I file del set di tavolozze possono essere creati utilizzando [questo editor](https://skinpaltool.dvdo.dev/). Quando utilizzi l'editor, importa l'immagine con cui desideri lavorare, quindi crea una tavolozza per ciascuno dei 16 colori del profilo DS. Puoi utilizzare questo [file tavolozza di esempio](/assets/files/example-palette.bin) come punto di partenza.

Le 16 righe della collezione tavolozza corrispondono a ciascun colore del profilo e devono essere nel seguente ordine:
1. Grigio-Blu
2. Marrone
3. Rosso
4. Rosa
5. Arancione
6. Giallo
7. Verde lime
8. Verde
9. Verde scuro
10. Turchese
11. Ciano/Azzurro
12. Blu
13. Blu Scuro/Indaco
14. Viola/Viola Scuro
15. Viola
16. Magenta

Dopo aver creato un file di tavolozza, posizionalo nella cartella `palettes`. Il nome del file della tavolozza dovrebbe corrispondere al nome della sua immagine ma con un'estensione `.bin` (es. `start_border.bin` sarà applicato a `start_border.bmp </codice>).</p>

<p spaces-before="0">Puoi anche inserire un file tavolozza <code>username.bin` per cambiare le tavolozze del carattere del nome utente. Assicurati di impostare l'editor della tavolozza su `Font Mode` quando crei questo file.

## Parte 3: Aggiungi skin in TWiLight Menu++
Una volta che hai modificato alcuni elementi grafici e vuoi testare la tua skin, copia semplicemente la cartella della tua skin (la cartella contenente le cartelle `background`, `battery`, ecc.) in ` sd:/_nds/TWiLightMenu/3dsmenu/themes/` o `sd:/_nds/TWiLightMenu/dsimenu/themes/` rispettivamente per le skin dei temi 3DS e DSi.

## Parte 4: Condividi la tua skin
Una volta completata la tua skin, puoi condividerla con la community creando una Pull Request nel repository GitHub [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras), in un file `.7z`. Se non hai familiarità con l'uso di git, puoi anche semplicemente creare un problema su quel repository con un file zip della tua skin richiedendone l'aggiunta.
