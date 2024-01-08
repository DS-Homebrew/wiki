---
lang: nl-NL
layout: wiki
section: twilightmenu
category: customization
title: Hoe MAak je DSi- / 3DS-skins
description: Hoe maak je aangepaste DSi- en 3DS-skins voor TWiLight Menu++
---

Om een TWiLight Menu++ skin te maken, heb je een afbeeldingsbewerker nodig die `.png`-bestanden, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp`-bestanden of `.png`-bestanden, en 4 BPP `.bmp`-bestanden kan exporteren. Het zou ook mogelijk moeten zijn om handmatig beeldpaletten te herschikken. [GIMP](https://www.gimp.org) wordt aanbevolen en zal worden gebruikt voor deze gids, omdat het alles kan wat nodig is.

## Deel 1: Download de voorbeelden
Het eerste wat je moet doen is de [voorbeeldskins](/assets/files/skin-examples.zip) downloaden. Deze kunnen worden gebruikt als basis voor je skin en zijn al in het juiste formaat, dus als je later problemen hebt, kun je daarmee vergelijken.

## Deel 2: Afbeeldingen bewerken
Download en installeer [GIMP](https://www.gimp.org)
- Andere afbeeldingsbewerkers zoals Photoshop kunnen ook werken, maar in deze gids wordt GIMP gebruikt

Eenmaal geïnstalleerd, open GIMP en selecteer `Windows` -> `Dockable Dialogs` -> `Colormap`. Dit opent het kleurenkaartvenster, dat handig is bij het bewerken van gepaleteerde afbeeldingen.

Je kunt nu de afbeelding die je wilt bewerken openen in GIMP en doorgaan naar het onderstaande gedeelte op basis van de map waarin deze zich bevindt. Let op dat TWiLight Menu++ kieskeurig is over het exacte formaat van de afbeeldingen en het verschilt per map waarin ze staan, dus zorg ervoor dat je exporteert zoals vermeld in de sectie.

### Achtergrondtexturen (`background` map)
Dit kunnen PNG-bestanden of 16-bits (`A1 R5 G5 B5` of `X1 R5 G5 B5`) BMP-bestanden zijn.
- Als je BMP-bestanden gebruikt, kan je deze tijdens het exporteren onder Geavanceerde Opties instellen op 16-bit. Mogelijk moet je dit telkens doen als je exporteert als BMP

| Textuur               | Beschrijving                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| top                   | De achtergrondtextuur van het bovenste scherm                                                                                   |
| bottom                | De achtergrondtextuur van het onderste scherm wanneer je niet over een pictogram zweeft                                         |
| bottom_ds             | Voor het 3DS-thema, de achtergrondtextuur van het onderste scherm wanneer je niet over een pictogram zweeft op een DS Phat/Lite |
| bottom_macro          | Voor het DSi-thema, de achtergrondtextuur wanneer je niet over een pictogram zweeft tijdens het gebruik van de Macro-modus      |
| bottom_bubble         | De achtergrondtextuur van het onderste scherm wanneer je over een pictogram zweeft                                              |
| bottom_bubble_ds    | Voor het 3DS-thema, de achtergrondtextuur van het onderste scherm wanneer je over een pictogram zweeft op een DS Phat/Lite      |
| bottom_bubble_macro | Voor het DSi-thema, de achtergrondtextuur wanneer je over een pictogram zweeft tijdens het gebruik van de Macro-modus           |
| bottom_moving         | Voor het DSi-thema, de achtergrondtextuur van het onderste scherm bij het verplaatsen van een pictogram                         |
| bottom_moving_macro | Voor het DSi-thema, de achtergrondtextuur wanneer je over een pictogram zweeft tijdens het gebruik van de Macro-modus           |

### Batterijtexturen (`battery` map)
Dit moeten PNG-bestanden zijn. Transparantie wordt ondersteund, maar alleen 100% transparantie werkt.

| Textuur            | Omschrijving/Aantekeningen                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| battery0           | Knippert met `battery1` wanneer de batterij erg laag is                                                |
| battery1           | 0-4 worden gebruikt in DSi-modus                                                                       |
| battery1purple     | Paarse pictogrammen worden gebruikt wanneer `Power LED color` is ingesteld op `Purple` in instellingen |
| battery2           |                                                                                                        |
| battery2purple     |                                                                                                        |
| battery3           |                                                                                                        |
| battery3purple     |                                                                                                        |
| battery4           |                                                                                                        |
| battery4purple     |                                                                                                        |
| batterycharge      |                                                                                                        |
| batterychargeblink | Knippert met `batterycharge` tijdens het opladen                                                       |
| batteryfull        | Gebruikt in DS-modus op DSi/3DS                                                                        |
| batteryfullDS      | Gebruikt op DS Phat/DS Lite                                                                            |
| batterylow         | Gebruikt in DS-modus                                                                                   |

### Gepalletiseerde texturen (`grf` map)
Dit moeten 4 BPP (16 kleuren) BMP-bestanden zijn.

Om deze in GIMP te bewerken, selecteer je `Image` -> `Mode` -> `RGB` om kleuren te kunnen veranderen, en als je klaar bent met het veranderen van kleuren, selecteer je `Image` -> `Mode` -> `Indexed...` om terug te converteren naar palet. Wanneer je overschakelt op geïndexeerd, moet je ervoor zorgen dat `Generate optimum palette` is aangevinkt en `Maximum number of colors` is ingesteld op `16`.

**Opmerking:** Voor sommige afbeeldingen in het DSi-thema worden de paletten overschreven op basis van de profielkleur van de gebruiker. Als je de kleuren hiervan bewerkt, moet je ervoor zorgen dat de optie `UserPalette` in `theme.ini` is ingesteld op `0`.

Ga na het omzetten naar geïndexeerd naar het kleurenkaartvenster en zorg ervoor dat de transparante kleur (#FF00FF) kleur #0 is in de kleurenkaart. Als dat niet zo is, klik dan met de rechtermuisknop in de kleurenkaart en selecteer `Rearrange Colormap...` verplaats dan de transparante kleur naar de eerste kleur in de kleurenkaart en selecteer `OK`.

Zijn er minder dan 16 kleuren in je uiteindelijke kleurenkaart, druk dan op de knop `+` onderaan het kleurenkaartvenster tot je 16 kleuren hebt.

Bij het exporteren wordt aanbevolen het vakje `Do not write color space information` aan te vinken onder het keuzemenu `Compatibility Options`.

| Textuur       | Beschrijving                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| bips          | De punten onderaan de schuifbalk (DSi-thema)                                                               |
| box           | De boxtextuur, met zowel volle als lege texturen (DSi-thema)                                               |
| box_empty     | De textuur voor een lege doos (3DS-thema)                                                                  |
| box_full      | De textuur voor een lege doos met een pictogram (3DS-thema)                                                |
| brace         | De brace-textuur weergegeven voorbij het eerste en laatste pictogram (DSi-thema)                           |
| bubble        | Het onderste deel van de bel dat over de beginrand of het pictogrammetje wordt getekend                    |
| button_arrow  | De texturen voor de pijlen aan beide zijden van de onderste schuifbalk (DSi-thema)                         |
| cornerbutton  | De knoppen die worden weergegeven in het SELECT-menu (DSi-thema) (De naam is gebaseerd op een oud gebruik) |
| cursor        | De rand met animatieframes die het geselecteerde pictogram aangeven (3DS-thema)                            |
| dialogbox     | De achtergrond van het dialoogvenster dat naar beneden schuift                                             |
| folder        | Het pictogram voor mappen                                                                                  |
| icon_a26      | Het pictogram voor Atari 2600-spellen                                                                      |
| icon_col      | Het pictogram voor Colecovision-spellen                                                                    |
| icon_gb       | Het pictogram voor Game Boy-spellen                                                                        |
| icon_gba      | Het pictogram voor GBA-spellen                                                                             |
| icon_gbamode  | Het pictogram voor de GBA-modus                                                                            |
| icon_gg       | Het pictogram voor Game Gear-spellen                                                                       |
| icon_img      | Het pictogram voor BMP-, GIF- en PNG-afbeeldingen                                                          |
| icon_int      | Het pictogram voor Intellivision-spellen                                                                   |
| icon_m5       | Het pictogram voor Sord M5-spellen                                                                         |
| icon_manual   | Het pictogram voor de handleiding                                                                          |
| icon_md       | Het pictogram voor Mega Drive-spellen                                                                      |
| icon_nes      | Het pictogram voor NES-spellen                                                                             |
| icon_ngp      | Het pictogram voor Neo Geo Pocket-spellen                                                                  |
| icon_pce      | Het pictogram voor PC Engine- / TurboGrafx-16-spellen                                                      |
| icon_plg      | Het pictogram voor DSTWO-plugins                                                                           |
| icon_settings | Het pictogram voor Nintendo DSi-instellingen                                                               |
| icon_sg       | Het pictogram voor Sega SG-1000-spellen                                                                    |
| icon_sms      | Het pictogram voor Sega Master System-spellen                                                              |
| icon_snes     | Het pictogram voor SNES-spellen                                                                            |
| icon_unk      | Het pictogram dat wordt weergegeven wanneer een spel een pictogram mist                                    |
| icon_ws       | Het icoon voor WonderSwan-spellen                                                                          |
| launch_dot    | De punten die worden weergegeven wanneer een spel wordt uitgevoerd (DSi-thema)                             |
| moving_arrow  | De pijl die wordt weergegeven wanneer een spel wordt verplaatst (DSi-thema)                                |
| progress      | De voortgangsanimatie met 8 frames                                                                         |
| scroll_window | Het deel van de schuifbalk dat de pictogrammen aangeeft die in beeld zijn                                  |
| small_cart    | De pictogrammen bovenaan (3DS-thema) en in het SELECT-menu (DSi-thema)                                     |
| start_border  | De rand met animatieframes die het geselecteerde pictogram aangeeft (DSi-thema)                            |
| start_text    | De tekst op de beginrand (DSi-thema)                                                                       |
| wirelessicons | De pictogrammen die worden weergegeven om aan te geven dat een spel draadloze ondersteuning heeft          |

### DS Classic Menu-texturen (`quickmenu` map)
Dit moeten PNG-bestanden zijn.

| Textuur    | Beschrijving                                               |
| ---------- | ---------------------------------------------------------- |
| bottombg   | Achtergrond voor het onderste scherm                       |
| phat_topbg | Achtergrond voor het bovenste scherm op DS Phat            |
| topbg      | Achtergrond voor het bovenste scherm op elk ander DS-model |

### UI-texturen (`ui` map)
Dit moeten PNG-bestanden zijn. Transparantie wordt ondersteund, maar alleen 100% transparantie werkt. Elke pixel die transparant is in één textuur moet transparant zijn in alle texturen, zodat het goed wordt overschreven bij verandering.

| Textuur          | Beschrijving                                                 |
| ---------------- | ------------------------------------------------------------ |
| Lshoulder        | De linkerschouder                                            |
| Lshoulder_greyed | De linkerschouder wanneer er geen pagina's links zijn        |
| Rshoulder        | De rechterschouder                                           |
| Rshoulder_greyed | De rechterschouder wanneer er geen pagina's naar rechts zijn |

### Videotextuur (`video` map)
Alleen gebruikt voor het 3DS-thema, `3dsRotatingCubes.rvid` is een Rocket Video-bestand. Voor meer informatie over het converteren van video's naar rvid, lees [Een video converteren naar .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) op de Vid2RVID-wiki. Als je niet wilt dat dit getekend wordt, kun je het gewoon verwijderen.

### Volumetexturen (`volume` map)
Volumetextures worden alleen weergegeven in DSi-modus.

Dit moeten PNG-bestanden zijn. Transparantie wordt ondersteund, maar alleen 100% transparantie werkt.


| Textuur | Omschrijving/Aantekeningen    |
| ------- | ----------------------------- |
| volume0 | 0 is gedempt, 4 is vol volume |
| volume1 |                               |
| volume2 |                               |
| volume3 |                               |
| volume4 |                               |

## Themaconfiguratie (`theme.ini` bestand)
Je kan in `theme.ini` verschillende opties configureren over hoe het thema wordt getekend om grotere afbeeldingen of verschillende lay-outs mogelijk te maken. Voor waar/onwaar-opties is `0` onwaar, en `1` waar. Opties met een lege standaardwaarde voor een thema zijn ongebruikt in dat thema.

| Waarde                     | Omschrijving/Aantekeningen                                                                                                                 | Standaard (3DS) | Standaard (DSi) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | --------------- |
| `StartBorderRenderY`       | De eerste Y-positie van de Start-rand                                                                                                      | 92              | 81              |
| `StartBorderSpriteW`       | De breedte van de start-rand sprite. Let op dat de start-randtextuur precies de helft is van de volledige rand                             | 32              | 32              |
| `StartBorderSpriteH`       | De hoogte van de beginrand-sprite                                                                                                          | 64              | 80              |
| `StartTextRenderY`         | De eerste Y-positie van de Start-tekst                                                                                                     | 143             | 143             |
| `BubbleTipRenderX`         | De X-positie van de punt van de bel getekend over de start-rand                                                                            | 125             | 122             |
| `BubbleTipRenderY`         | De Y-positie van de punt van de bel getekend over de start-rand                                                                            | 98              | 80              |
| `BubbleTipSpriteW`         | De breedte van de bubbeluiteinde-sprite                                                                                                    | 7               | 11              |
| `BubbleTipSpriteH`         | De hoogte van de bubbleuiteinde-sprite                                                                                                     | 7               | 8               |
| `TitleboxRenderY`          | De eerste Y-positie van het titeltekstvak                                                                                                  | 96              | 85              |
| `TitleboxTextY`            | De eerste Y-positie van de titeltekst                                                                                                      | 55              | 30              |
| `TitleboxTextW`            | De maximale breedte van de titeltekst                                                                                                      | 200             | 240             |
| `TitleboxTextLarge`        | Of het grote lettertype voor de titeltekst moet worden gebruikt                                                                            | 0               | 1               |
| `TitleboxMaxLines`         | De maximale regels tekst die van de titel getoond zullen worden                                                                            | 3               | 4               |
| `VolumeRenderX`            | De X-positie op het bovenste scherm om het volumepictogram te tekenen                                                                      | 4               | 4               |
| `VolumeRenderY`            | De Y-positie op het bovenste scherm om het volumepictogram te tekenen                                                                      | 5               | 5               |
| `ShoulderLRenderX`         | De X-positie op het bovenste scherm om de linkerschouder te tekenen                                                                        | 0               | 0               |
| `ShoulderLRenderY`         | De Y-positie op het bovenste scherm om de linkerschouder te tekenen                                                                        | 172             | 172             |
| `ShoulderRRenderX`         | De X-positie op het bovenste scherm om de rechterschouder te tekenen                                                                       | 178             | 178             |
| `ShoulderRRenderY`         | De Y-positie op het bovenste scherm om de rechterschouder te tekenen                                                                       | 172             | 172             |
| `BatteryRenderX`           | De X-positie op het bovenste scherm om het batterijpictogram te tekenen                                                                    | 235             | 235             |
| `BatteryRenderY`           | De Y-positie op het bovenste scherm om het batterijpictogram te tekenen                                                                    | 5               | 5               |
| `UsernameRenderX`          | De X-positie op het bovenste scherm om de gebruikersnaam te tekenen                                                                        | 28              | 28              |
| `UsernameRenderY`          | De Y-positie op het bovenste scherm om de gebruikersnaam te tekenen                                                                        | 15              | 15              |
| `UsernameRenderXDS`        | De X-positie op het bovenste scherm om de gebruikersnaam tekst te tekenen, op een DS Phat/Lite                                             | 4               | 4               |
| `DateRenderX`              | De X-positie op het bovenste scherm om de datum te tekenen                                                                                 | 162             | 162             |
| `DateRenderY`              | De Y-positie op het bovenste scherm om de datum te tekenen                                                                                 | 7               | 7               |
| `TimeRenderX`              | De X-positie op het bovenste scherm om de tijdtekst te tekenen                                                                             | 200             | 200             |
| `TimeRenderY`              | De Y-positie op het bovenste scherm om de tijdtekst te tekenen                                                                             | 7               | 7               |
| `PurpleBatteryAvailable`   | Of de paarse batterijpictogrammen al dan niet moeten worden gebruikt wanneer `Power LED color` is ingesteld op `Purple` in de instellingen | 1               | 1               |
| `FontPalette1`             | De transparante kleur van het lettertype, ongebruikt voor standaardlettertypen                                                             | 0x0000          | 0x0000          |
| `FontPalette2`             | De kleuren van het lettertype, gebruik [deze site](http://www.conradshome.com/html2bgr15/) om te converteren                               | 0xDEF7          | 0xDEF7          |
| `FontPalette3`             |                                                                                                                                            | 0xC631          | 0xC631          |
| `FontPalette4`             |                                                                                                                                            | 0xA108          | 0xA108          |
| `FontPaletteDateTime1`     | De transparante kleur voor het overschrijven van het lettertype voor de datum en de tijd                                                   | 0x0000          | 0x0000          |
| `FontPaletteDateTime2`     | De overschrijfkleur van het lettertype voor de datum en de tijd                                                                            | 0xDEF7          | 0xA529          |
| `FontPaletteDateTime3`     |                                                                                                                                            | 0xC631          | 0xBDEF          |
| `FontPaletteDateTime4`     |                                                                                                                                            | 0xA108          | 0xD6B5          |
| `FontPaletteTitlebox1`     | De transparante kleur voor het overschrijven van het lettertype voor het ROM-titelvak                                                      | 0x0000          | 0x0000          |
| `FontPaletteTitlebox2`     | De overschrijfkleur van het lettertype voor het ROM-titelvak                                                                               | 0xDEF7          | 0xDEF7          |
| `FontPaletteTitlebox3`     |                                                                                                                                            | 0xC631          | 0xC631          |
| `FontPaletteTitlebox4`     |                                                                                                                                            | 0xA108          | 0xA108          |
| `FontPaletteDialog1`       | De transparante kleur voor het overschrijven van het lettertype voor dialogen                                                              | 0x0000          | 0x0000          |
| `FontPaletteDialog2`       | De overschrijfkleur van het lettertype voor dialogen                                                                                       | 0xDEF7          | 0xDEF7          |
| `FontPaletteDialog3`       |                                                                                                                                            | 0xC631          | 0xC631          |
| `FontPaletteDialog4`       |                                                                                                                                            | 0xA108          | 0xA108          |
| `FontPaletteOverlay1`      | De transparante kleur voor het overschrijven van het lettertype voor overlappende tekst                                                    | 0x0000          | 0x0000          |
| `FontPaletteOverlay2`      | De overschrijfkleur van het lettertype voor overlappende tekst                                                                             | 0xDEF7          | 0xDEF7          |
| `FontPaletteOverlay3`      |                                                                                                                                            | 0xC631          | 0xC631          |
| `FontPaletteOverlay4`      |                                                                                                                                            | 0xA108          | 0xA108          |
| `FontPaletteUsername1`     | De transparante kleur voor het overschrijven van het lettertype voor de gebruikersnaam                                                     | 0x0000          | 0x0000          |
| `FontPaletteUsername2`     | De overschrijfkleur van het lettertype voor de gebruikersnaam                                                                              | 0xDEF7          | 0xDEF7          |
| `FontPaletteUsername3`     |                                                                                                                                            | 0xC631          | 0xC631          |
| `FontPaletteUsername4`     |                                                                                                                                            | 0xA108          | 0xA108          |
| `BipsUserPalette`          | Whether or not to use the DS Profile color for the palette of the bips on the scrollbar                                                    |                 | 0               |
| `BoxUserPalette`           | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the DSi Theme                         |                 | 0               |
| `BoxEmptyUserPalette`      | Whether or not to use the DS Profile color for the palette of empty boxes in the 3DS Theme                                                 | 0               |                 |
| `BoxFullUserPalette`       | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the 3DS Theme                         | 0               |                 |
| `BraceUserPalette`         | Whether or not to use the DS Profile color for the palette of the brace at the start and end of the game list                              |                 | 0               |
| `BubbleUserPalette`        | Whether or not to use the DS Profile color for the palette of the tip of the title bubble                                                  | 0               | 0               |
| `ButtonArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen                                |                 | 1               |
| `CornerButtonUserPalette`  | Whether or not to use the DS Profile color for the palette of the DSi Menu and Settings icons in the SELECT menu                           |                 | 0               |
| `CursorUserPalette`        | Whether or not to use the DS Profile color for the palette of the cursor                                                                   | 0               |                 |
| `DialogBoxUserPalette`     | Whether or not to use the DS Profile color for the palette of the dialog box                                                               | 0               | 1               |
| `FolderUserPalette`        | Whether or not to use the DS Profile color for the palette of folders                                                                      | 0               | 0               |
| `LaunchDotsUserPalette`    | Whether or not to use the DS Profile color for the palette of the launch dots                                                              |                 | 1               |
| `MovingArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow shown when moving icons                                            |                 | 1               |
| `ProgressUserPalette`      | Whether or not to use the DS Profile color for the palette of the loading progress spinner                                                 | 1               | 1               |
| `ScrollWindowUserPalette`  | Whether or not to use the DS Profile color for the palette of the background to the scroll window on the scrollbar                         |                 | 0               |
| `SmallCartUserPalette`     | Whether or not to use the DS Profile color for the palette of the cartridge icons                                                          | 0               | 0               |
| `StartBorderUserPalette`   | Whether or not to use the DS Profile color for the palette of the start border                                                             |                 | 1               |
| `StartTextUserPalette`     | Whether or not to use the DS Profile color for the palette of the start text                                                               |                 | 1               |
| `WirelessIconsUserPalette` | Whether or not to use the DS Profile color for the palette of the wireless icons                                                           | 0               | 0               |
| `IconA26UserPalette`       | Whether or not to use the DS Profile color for the palette of the Atari 2600 icon                                                          | 0               | 0               |
| `IconCOLUserPalette`       | Whether or not to use the DS Profile color for the palette of the ColecoVision icon                                                        | 0               | 0               |
| `IconGBUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Boy icon                                                            | 0               | 0               |
| `IconGBAUserPalette`       | Whether or not to use the DS Profile color for the palette of the Game Boy Advance icon                                                    | 0               | 0               |
| `IconGBAModeUserPalette`   | Whether or not to use the DS Profile color for the palette of the native GBA Mode icon                                                     | 0               | 0               |
| `IconGGUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Gear icon                                                           | 0               | 0               |
| `IconIMGUserPalette`       | Whether or not to use the DS Profile color for the palette of the image icon                                                               | 0               | 0               |
| `IconINTUserPalette`       | Whether or not to use the DS Profile color for the palette of the Intellivision icon                                                       | 0               | 0               |
| `IconM5UserPalette`        | Whether or not to use the DS Profile color for the palette of the Sord M5 icon                                                             | 0               | 0               |
| `IconManualUserPalette`    | Whether or not to use the DS Profile color for the palette of the manual icon                                                              | 0               | 0               |
| `IconMDUserPalette`        | Whether or not to use the DS Profile color for the palette of the Genesis/Mega Drive icon                                                  | 0               | 0               |
| `IconNESUserPalette`       | Whether or not to use the DS Profile color for the palette of the NES/Famicom icon                                                         | 0               | 0               |
| `IconNGPUserPalette`       | Whether or not to use the DS Profile color for the palette of the Neo Geo Pocket icon                                                      | 0               | 0               |
| `IconPCEUserPalette`       | Whether or not to use the DS Profile color for the palette of the PC Engine/TurboGrafx-16 icon                                             | 0               | 0               |
| `IconPLGUserPalette`       | Whether or not to use the DS Profile color for the palette of the DSTWO plugin icon                                                        | 0               | 0               |
| `IconSettingsUserPalette`  | Whether or not to use the DS Profile color for the palette of the DSi Settings icon                                                        | 0               | 0               |
| `IconSGUserPalette`        | Whether or not to use the DS Profile color for the palette of the SG-1000 icon                                                             | 0               | 0               |
| `IconSMSUserPalette`       | Whether or not to use the DS Profile color for the palette of the Master System icon                                                       | 0               | 0               |
| `IconSNESUserPalette`      | Whether or not to use the DS Profile color for the palette of the SNES icon                                                                | 0               | 0               |
| `IconUnknownUserPalette`   | Whether or not to use the DS Profile color for the palette of the unknown (missing) icon                                                   | 0               | 0               |
| `IconWSUserPalette`        | Whether or not to use the DS Profile color for the palette of the WonderSwan icon                                                          | 0               | 0               |
| `UsernameUserPalette`      | Whether or not to use the DS Profile color for the palette of the username                                                                 | 1               | 1               |
| `ProgressBarUserPalette`   | Whether or not to use the DS Profile color as the color of the progress bar                                                                | 1               | 1               |
| `ProgressBarColor`         | The color of the progress bar if `ProgressBarUserPalette` is disabled                                                                      | 0x7C00          | 0x7C00          |
| `UseAlphaBlend`            | Whether or not to blend the colors of the top screen text (the date/time and username) with the colors of the background                   | 1               | 1               |
| `DarkLoading`              | Whether or not to fade to black instead of white during loading screens                                                                    | 0               | 0               |
| `RenderPhoto`              | Whether or not to draw a photo on the top screen                                                                                           | 0               | 1               |
| `RotatingCubesRenderY`     | The Y position on the top screen to draw the rotating cubes                                                                                | 78              |                 |
| `PlayStartupJingle`        | Whether or not to use the startup sound before the main BGM. See the [custom SFX](custom-dsi-3ds-sfx) page for more information            | 1               | 0               |
| `StartupJingleDelayAdjust` | The amount of samples early in the startup sound the BGM should start at                                                                   | 0               | 0               |

### Macro-modus opties
Je kan specifieke overschrijfopties toevoegen aan `theme.ini` voor gebruik in de Macro-modus. Voeg hiervoor `[MACRO]` toe aan een lege regel onderaan het configuratiebestand, en voeg daaronder eventuele gespecificeerde configuraties toe.

## Aangepaste achtergrondmuziek en geluidseffecten
De DSi- en 3DS-thema's ondersteunen ook aangepaste muziek. Zie [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) voor meer details.

## Aangepaste lettertypes
Je kunt [Custom Fonts](custom-fonts) in de map `font` zetten voor gebruik in de skin. Je kan ook overschrijflettertypes toevoegen voor de datum en tijd met `date_time.nftr`, en de console gebruikersnaam met `username.nftr`.

## Custom palettes
For the paletted textures (`grf` folder), you can optionally add override palette sets which are used when the corresponding `UserPalette` setting is enabled. Palette set files can be created using [this editor](https://skinpaltool.dvdo.dev/). When using the editor, import the image you would like to work with, then create a palette for each of the 16 DS Profile colors. You can use this [example palette file](/assets/files/example-palette.bin) as a starting point.

The 16 rows of the palette collection correspond to each profile color and should be in the following order:
1. Gray-Blue
2. Brown
3. Rood
4. Roze
5. Orange
6. Geel
7. Lime Green
8. Groen
9. Dark Green
10. Turquoise
11. Cyan/Light Blue
12. Blauw
13. Dark Blue/Indigo
14. Violet/Dark Purple
15. Paars
16. Magenta

Once you've created a palette file, place it in the `palettes` folder. The name of the palette file should match the name of its image but with a `.bin` extension instead (ex. `start_border.bin` will be applied to `start_border.bmp`).

You may also put a `username.bin` palette file to change the palettes of the username font. Make sure to set the palette editor to `Font Mode` when creating this file.

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.
