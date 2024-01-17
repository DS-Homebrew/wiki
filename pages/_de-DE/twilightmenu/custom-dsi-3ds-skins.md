---
lang: de-DE
layout: wiki
section: twilightmenu
category: customization
title: Wie man DSi-/3DS-Skins erstellt
description: Wie man eigene DSi- und 3DS-Skins für TWiLight Menu++ erstellt
---

Um ein TWiLight Menu++ Skin zu erstellen, brauchst du einen Bildeditor, der `.png` Dateien, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` Dateien oder `.png` Dateien und 4 BPP `.bmp` Dateien exportieren kann. Idealerweise sollte es auch in der Lage sein, Bildpaletten manuell neu anzuordnen. [GIMP](https://www.gimp.org) wird empfohlen und für diese Anleitung verwendet, da es alles Notwendige kann.

## Teil 1: Lade die Beispiele herunter
Das Erste, was du tun solltest, ist die [Beispielskins](/assets/files/skin-examples.zip) herunterzuladen. Diese können als Grundlage für deinen Skin verwendet werden und haben bereits das richtige Format, sodass du ihn später bei Problemen mit diesen vergleichen kannst.

## Teil 2: Bearbeiten von Bildern
Lade dir [GIMP](https://www.gimp.org) herunter und installiere es
- Andere Bildbearbeitungsprogramme, wie z. B. Photoshop, könnten funktionieren, aber in dieser Anleitung wird GIMP genutzt

Nach der Installation öffnest du GIMP und wählst `Windows` -> `Andockbare Dialoge` -> `Colormap`. Dadurch wird der Dialog mit der Farbtabelle geöffnet, was bei der Bearbeitung von Bildern mit Paletten hilfreich ist.

Du kannst nun jenes Bild, welches du bearbeiten willst, in GIMP öffnen und je nachdem, in welchem Ordner es sich befindet, mit dem folgenden Abschnitt fortfahren. Beachten, dass TWiLight Menu++ wählerisch ist, was das genaue Format der Bilder angeht, und es davon abhängt, in welchem Ordner sie sich befinden. Stelle also sicher, dass du sie wie im Abschnitt beschrieben exportierst.

### Hintergrundtexturen (`background`-Ordner)
Dies können PNG-Dateien oder 16-Bit (`A1 R5 G5 B5` oder `X1 R5 G5 B5`) BMP-Dateien sein.
- Wenn du BMP-Dateien verwendest, kannst du sie unter Erweiterte Optionen beim Exportieren auf 16 Bit einstellen. Das musst du möglicherweise jedes Mal machen, wenn du als BMP exportierst

| Textur                | Beschreibung                                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| top                   | Die Hintergrundtextur des oberen Bildschirms                                                                                     |
| top_photo             | The top screen background texture when a photo is being shown                                                                    |
| bottom                | Die untere Hintergrundtextur, wenn der Mauszeiger nicht auf ein Symbol zeigt                                                     |
| bottom_ds             | Für das 3DS-Thema, die untere Hintergrundtextur, wenn auf einem DS Phat/Lite der Mauszeiger nicht auf ein Symbol zeigt           |
| bottom_macro          | Für das DSi-Thema, die Hintergrundtextur, wenn der Mauszeiger, während der Makromodus verwendet wird, nicht auf ein Symbol zeigt |
| bottom_bubble         | Die untere Hintergrundtextur, wenn der Mauszeiger auf ein Symbol zeigt                                                           |
| bottom_bubble_ds    | Für das 3DS-Thema, die untere Hintergrundtextur, wenn auf einem DS Phat/Lite der Mauszeiger auf ein Symbol zeigt                 |
| bottom_bubble_macro | Für das DSi-Thema, die Hintergrundtextur, wenn der Mauszeiger, während der Makromodus verwendet wird, auf ein Symbol zeigt       |
| bottom_moving         | Für das DSi-Thema, die untere Hintergrundtextur beim Verschieben eines Symbols                                                   |
| bottom_moving_macro | Für das DSi-Thema, die Hintergrundtextur beim Verschieben eines Symbols im Makromodus                                            |

### Batterie-Texturen (`battery` Ordner)
Diese müssen PNG-Dateien sein. Transparenz wird unterstützt, aber nur 100 % Transparenz wird funktionieren.

| Textur             | Beschreibung/Anmerkungen                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| battery0           | Blitzt mit `battery1` bei sehr geringem Akku                                                                     |
| battery1           | 0-4 werden im DSi-Modus verwendet                                                                                |
| battery1purple     | Violette Symbole werden verwendet, wenn `Farbe der Power-LED` in den Einstellungen auf `Violett` eingestellt ist |
| battery2           |                                                                                                                  |
| battery2purple     |                                                                                                                  |
| battery3           |                                                                                                                  |
| battery3purple     |                                                                                                                  |
| battery4           |                                                                                                                  |
| battery4purple     |                                                                                                                  |
| batterycharge      |                                                                                                                  |
| batterychargeblink | Blinkt mit `batterycharge` beim Laden                                                                            |
| batteryfull        | Wird im DS-Modus auf DSi/3DS verwendet                                                                           |
| batteryfullDS      | Wird auf dem DS Phat/DS Lite verwendet                                                                           |
| batterylow         | Wird im DS-Modus verwendet                                                                                       |

### Palettierte Texturen (`grf` Ordner)
Es muss sich um 4 BPP-Dateien (16 Farben) handeln.

Um diese in GIMP zu bearbeiten, wählen Sie `Bild` -> `Modus` -> `RGB`, um das Ändern von Farben zu ermöglichen, dann, wenn Sie mit dem Ändern der Farben fertig sind, wählen Sie `Bild` -> `Modus` -> `Indexed...`, um wieder in eine Palette zu konvertieren. Wenn Sie auf Indexed umschalten, stellen Sie sicher, dass `Optimale Palette generieren` aktiviert ist und `Maximale Anzahl von Farben` auf `16`eingestellt ist.

**Hinweis:** Bei einigen Bildern im DSi-Thema werden die Paletten auf der Grundlage der Profilfarbe des Benutzers überschrieben. Wenn Sie die Farben von diesen bearbeiten, stellen Sie sicher, dass die `Nutzerpalette` Option dafür in der `theme.ini` auf `0` gesetzt ist.

Nach der Konvertierung in indiziert, gehen Sie zum Farbkartendialog und stellen Sie sicher, dass die transparente Farbe (#FF00FF) die Farbe #0 in der Farbkarte ist. Ist dies nicht der Fall, klicken Sie mit der rechten Maustaste auf die Farbkarte und wählen Sie `Farbkarte neu anordnen...` und verschieben Sie die transparente Farbe zur ersten Farbe in der Farbkarte und wählen Sie `OK`.

Wenn Ihre endgültige Farbkarte weniger als 16 Farben enthält, drücken Sie die Taste `+` am unteren Rand des Farbkartendialogs, bis Sie 16 Farben haben.

Es wird empfohlen, beim Exportieren das Kontrollkästchen `Farbrauminformationen nicht schreiben` unter dem Dropdown-Menü `Kompatibilitätsoptionen` zu aktivieren.

| Textur        | Beschreibung                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| bips          | Die Bips, die am unteren Rand der Bildlaufleiste angezeigt werden (DSi-Thema)                              |
| box           | Die Kastentextur, die sowohl volle als auch leere Texturen enthält (DSi-Thema)                             |
| box_empty     | Die für eine leere Box angezeigte Textur (3DS-Thema)                                                       |
| box_full      | Die angezeigte Textur für eine Box mit einem Symbol (3DS-Thema)                                            |
| brace         | Die Klammertextur, die hinter dem ersten und letzten Symbol angezeigt wird (DSi-Theme)                     |
| bubble        | Der untere Teil der Blase, der über den Startrahmen oder das Symbolfeld gezogen wird                       |
| button_arrow  | Die Texturen für die Pfeile auf beiden Seiten der unteren Scrollleiste (DSi Theme)                         |
| cornerbutton  | Die Tasten, die im SAuswahlmenü angezeigt werden (DSi-Thema) (Der Name basiert auf einer alten Verwendung) |
| cursor        | Der Rahmen mit Animationsbildern, die das ausgewählte Symbol anzeigen (3DS-Thema)                          |
| dialogbox     | Der Hintergrund des Dialogfelds, das nach unten gleitet                                                    |
| folder        | Das Symbol für Ordner                                                                                      |
| icon_a26      | Das Symbol für Atari 2600-Spiele                                                                           |
| icon_col      | Das Symbol für Colecovision-Spiele                                                                         |
| icon_gb       | Das Symbol für Game Boy Spiele                                                                             |
| icon_gba      | Das Symbol für GBA-Spiele                                                                                  |
| icon_gbamode  | Das Symbol für den nativen GBA-Modus                                                                       |
| icon_gg       | Das Symbol für Game Gear-Spiele                                                                            |
| icon_img      | Das Symbol für BMP-, GIF- und PNG-Bilder                                                                   |
| icon_int      | Das Symbol für Intellivision-Spiele                                                                        |
| icon_m5       | Das Symbol für Sord M5 Spiele                                                                              |
| icon_manual   | Das Symbol für das Handbuch                                                                                |
| icon_md       | Das Symbol für Mega Drive-Spiele                                                                           |
| icon_nes      | Das Symbol für NES-Spiele                                                                                  |
| icon_ngp      | Das Symbol für Neo Geo Pocket-Spiele                                                                       |
| icon_pce      | Das Symbol für PC-Engine/TurboGrafx-16-Spiele                                                              |
| icon_plg      | Das Symbol für DSTWO-Erweiterungen                                                                         |
| icon_settings | Das Symbol für die Nintendo DSi-Einstellungen                                                              |
| icon_sg       | Das Icon für Sega SG-1000-Spiele                                                                           |
| icon_sms      | Das Icon für Sega-Master-System-Spiele                                                                     |
| icon_snes     | Das Icon für SNES-Spiele                                                                                   |
| icon_unk      | Das Icon, das angezeigt wird, wenn in einem Spiel ein Icon fehlt                                           |
| icon_ws       | Das Icon für WonderSwan-Spiele                                                                             |
| launch_dot    | The dots displayed when a game is launched (DSi Theme)                                                     |
| moving_arrow  | The arrow displayed when a game is being moved (DSi Theme)                                                 |
| progress      | The progress loading animation with 8 frames                                                               |
| scroll_window | The part of the scrollbar that indicates the icons that are in view                                        |
| small_cart    | The icons displayed along the top (3DS Theme) and in the SELECT menu (DSi Theme)                           |
| start_border  | The border with animation frames that indicates the selected icon (DSi Theme)                              |
| start_text    | The text displayed on the start border (DSi Theme)                                                         |
| wirelessicons | The icons displayed to indicate a game has wireless support                                                |

### DS Classic Menu textures (`quickmenu` folder)
Diese müssen PNG-Dateien sein.

| Textur     | Beschreibung                                                      |
| ---------- | ----------------------------------------------------------------- |
| bottombg   | Hintergrund für den unteren Bildschirm                            |
| phat_topbg | Hintergrund für den oberen Bildschirm des DS Phat                 |
| topbg      | Hintergrund für den oberen Bildschirm bei jedem anderen DS-Modell |

### UI-Texturen (`ui`-Ordner)
Diese müssen PNG-Dateien sein. Transparenz wird unterstützt, aber nur 100 % Transparenz wird funktionieren. Jedes Pixel, das in einer Textur transparent ist, sollte dies in allen Texturen sein, damit es bei einer Änderung ordnungsgemäß überschrieben wird.

| Textur                   | Beschreibung                                                     |
| ------------------------ | ---------------------------------------------------------------- |
| Lshoulder                | Die linke Schulter                                               |
| Lshoulder_greyed         | Die linke Schulter, wenn sich links keine Seiten befinden        |
| Lshoulder_photo          | The left shoulder when there is a photo being shown              |
| Lshoulder_photo_greyed | The left shoulder with no pages to the left and a photo showing  |
| Rshoulder                | Die rechte Schulter                                              |
| Rshoulder_greyed         | Die rechte Schulter, wenn sich rechts keine Seiten befinden      |
| Rshoulder_photo          | The right shoulder when there is a photo being shown             |
| Rshoulder_photo_greyed | The right shoulder with no pages to the left and a photo showing |

### Videotextur (`video`-Ordner)
Nur für das 3DS-Thema verwendet, `3dsRotatingCubes.rvid` ist eine Rocket-Video-Datei. Für weitere Informationen zum Konvertieren von Videos in rvid, lies [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) (englisch) im Vid2RVID Wiki. Wenn du das nicht willst, kannst du es einfach löschen.

### Volume-Texturen (`volume`-Ordner)
Lautstärketexturen werden nur im DSi-Modus angezeigt.

Diese müssen PNG-Dateien sein. Transparenz wird unterstützt, aber nur 100 % Transparenz wird funktionieren.


| Textur  | Beschreibung/Anmerkungen            |
| ------- | ----------------------------------- |
| volume0 | 0 ist stumm, 4 ist volle Lautstärke |
| volume1 |                                     |
| volume2 |                                     |
| volume3 |                                     |
| volume4 |                                     |

## Themenkonfiguration (`theme.ini`-Datei)
In der Datei `theme.ini` kannst du verschiedene Optionen für die Darstellung des Themas konfigurieren, um größere Grafiken oder andere Layouts zu ermöglichen. Bei Wahr/Falsch-Optionen ist `0` falsch und `1` wahr. Optionen mit einem leeren Standardwert für ein Thema werden in jenem Thema nicht verwendet.

| Wert                       | Beschreibung/Anmerkungen                                                                                                                                    | Standard (3DS) | Standard (DSi) |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------- |
| `StartBorderRenderY`       | Die anfängliche Y-Position des Start-Rahmens                                                                                                                | 92             | 81             |
| `StartBorderSpriteW`       | Die Breite des Start-Rand-Sprites. Beachte, dass die Start-Rand-Textur genau die Hälfte des gesamten Rahmens beträgt                                        | 32             | 32             |
| `StartBorderSpriteH`       | Die Höhe des Start-Rand-Sprites                                                                                                                             | 64             | 80             |
| `StartTextRenderY`         | Die anfängliche Y-Position des Start-Textes                                                                                                                 | 143            | 143            |
| `BubbleTipRenderX`         | Die X-Position der Spitze der Blase, die über den Start-Rand gezeichnet wird                                                                                | 125            | 122            |
| `BubbleTipRenderY`         | Die Y-Position der Spitze der Blase, die über den Start-Rand gezeichnet wird                                                                                | 98             | 80             |
| `BubbleTipSpriteW`         | Die Breite des Blasenspitze-Sprites                                                                                                                         | 7              | 11             |
| `BubbleTipSpriteH`         | Die Höhe des Blasenspitze-Sprites                                                                                                                           | 7              | 8              |
| `TitleboxRenderY`          | Die anfängliche Y-Position des Titeltext-Feldes                                                                                                             | 96             | 85             |
| `TitleboxTextY`            | Die anfängliche Y-Position des Titeltextes                                                                                                                  | 55             | 30             |
| `TitleboxTextW`            | Die maximale Breite des Titeltextes                                                                                                                         | 200            | 240            |
| `TitleboxTextLarge`        | Ob die große Schriftart für den Titeltext verwendet werden soll                                                                                             | 0              | 1              |
| `TitleboxMaxLines`         | Die maximal anzuzeigenden Textzeilen des Titels                                                                                                             | 3              | 4              |
| `VolumeRenderX`            | Die X-Position auf dem oberen Bildschirm, um das Lautstärkesymbol zu zeichnen                                                                               | 4              | 4              |
| `VolumeRenderY`            | Die Y-Position auf dem oberen Bildschirm, um das Lautstärkesymbol zu zeichnen                                                                               | 5              | 5              |
| `ShoulderLRenderX`         | Die X-Position auf dem oberen Bildschirm, um die linke Schulter zu zeichnen                                                                                 | 0              | 0              |
| `ShoulderLRenderY`         | Die Y-Position auf dem oberen Bildschirm, um die linke Schulter zu zeichnen                                                                                 | 172            | 172            |
| `ShoulderRRenderX`         | Die X-Position auf dem oberen Bildschirm, um die rechte Schulter zu zeichnen                                                                                | 178            | 178            |
| `ShoulderRRenderY`         | Die Y-Position auf dem oberen Bildschirm, um die rechte Schulter zu zeichnen                                                                                | 172            | 172            |
| `BatteryRenderX`           | Die X-Position auf dem oberen Bildschirm, um das Akku-Symbol zu zeichnen                                                                                    | 235            | 235            |
| `BatteryRenderY`           | Die Y-Position auf dem oberen Bildschirm, um das Akku-Symbol zu zeichnen                                                                                    | 5              | 5              |
| `UsernameRenderX`          | Die X-Position auf dem oberen Bildschirm, um den Text des Benutzernamens zu zeichnen                                                                        | 28             | 28             |
| `UsernameRenderY`          | Die Y-Position auf dem oberen Bildschirm, um den Text des Benutzernamens zu zeichnen                                                                        | 15             | 15             |
| `UsernameRenderXDS`        | The X position on the top screen to draw the username text, when on a DS Phat/Lite                                                                          | 4              | 4              |
| `DateRenderX`              | The X postion on the top screen to draw the date text                                                                                                       | 162            | 162            |
| `DateRenderY`              | The Y postion on the top screen to draw the date text                                                                                                       | 7              | 7              |
| `TimeRenderX`              | The X positon on the top screen to draw the time text                                                                                                       | 200            | 200            |
| `TimeRenderY`              | The Y positon on the top screen to draw the time text                                                                                                       | 7              | 7              |
| `PurpleBatteryAvailable`   | Whether or not to use the purple battery icons when `Power LED color` is set to `Purple` in settings                                                        | 1              | 1              |
| `FontPalette1`             | The transparent color of the font, unused for default fonts                                                                                                 | 0x0000         | 0x0000         |
| `FontPalette2`             | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                                                                  | 0xDEF7         | 0xDEF7         |
| `FontPalette3`             |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPalette4`             |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteDateTime1`     | The override transparent color of the font for the date and time                                                                                            | 0x0000         | 0x0000         |
| `FontPaletteDateTime2`     | The override color of the font for the date and time                                                                                                        | 0xDEF7         | 0xA529         |
| `FontPaletteDateTime3`     |                                                                                                                                                             | 0xC631         | 0xBDEF         |
| `FontPaletteDateTime4`     |                                                                                                                                                             | 0xA108         | 0xD6B5         |
| `FontPaletteTitlebox1`     | The override transparent color of the font for the ROM title box                                                                                            | 0x0000         | 0x0000         |
| `FontPaletteTitlebox2`     | The override color of the font for the ROM title box                                                                                                        | 0xDEF7         | 0xDEF7         |
| `FontPaletteTitlebox3`     |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteTitlebox4`     |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteDialog1`       | The override transparent color of the font for dialogs                                                                                                      | 0x0000         | 0x0000         |
| `FontPaletteDialog2`       | The override color of the font for dialogs                                                                                                                  | 0xDEF7         | 0xDEF7         |
| `FontPaletteDialog3`       |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteDialog4`       |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteOverlay1`      | The override transparent color of the font for overlayed text                                                                                               | 0x0000         | 0x0000         |
| `FontPaletteOverlay2`      | The override color of the font for overlayed text                                                                                                           | 0xDEF7         | 0xDEF7         |
| `FontPaletteOverlay3`      |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteOverlay4`      |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteUsername1`     | The override transparent color of the font for the username                                                                                                 | 0x0000         | 0x0000         |
| `FontPaletteUsername2`     | The override color of the font for the username                                                                                                             | 0xDEF7         | 0xDEF7         |
| `FontPaletteUsername3`     |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteUsername4`     |                                                                                                                                                             | 0xA108         | 0xA108         |
| `BipsUserPalette`          | Whether or not to use the DS Profile color for the palette of the bips on the scrollbar                                                                     |                | 0              |
| `BoxUserPalette`           | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the DSi Theme                                          |                | 0              |
| `BoxEmptyUserPalette`      | Whether or not to use the DS Profile color for the palette of empty boxes in the 3DS Theme                                                                  | 0              |                |
| `BoxFullUserPalette`       | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the 3DS Theme                                          | 0              |                |
| `BraceUserPalette`         | Whether or not to use the DS Profile color for the palette of the brace at the start and end of the game list                                               |                | 0              |
| `BubbleUserPalette`        | Whether or not to use the DS Profile color for the palette of the tip of the title bubble                                                                   | 0              | 0              |
| `ButtonArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen                                                 |                | 1              |
| `CornerButtonUserPalette`  | Whether or not to use the DS Profile color for the palette of the DSi Menu and Settings icons in the SELECT menu                                            |                | 0              |
| `CursorUserPalette`        | Whether or not to use the DS Profile color for the palette of the cursor                                                                                    | 0              |                |
| `DialogBoxUserPalette`     | Whether or not to use the DS Profile color for the palette of the dialog box                                                                                | 0              | 1              |
| `FolderUserPalette`        | Whether or not to use the DS Profile color for the palette of folders                                                                                       | 0              | 0              |
| `LaunchDotsUserPalette`    | Whether or not to use the DS Profile color for the palette of the launch dots                                                                               |                | 1              |
| `MovingArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow shown when moving icons                                                             |                | 1              |
| `ProgressUserPalette`      | Whether or not to use the DS Profile color for the palette of the loading progress spinner                                                                  | 1              | 1              |
| `ScrollWindowUserPalette`  | Whether or not to use the DS Profile color for the palette of the background to the scroll window on the scrollbar                                          |                | 0              |
| `SmallCartUserPalette`     | Whether or not to use the DS Profile color for the palette of the cartridge icons                                                                           | 0              | 0              |
| `StartBorderUserPalette`   | Whether or not to use the DS Profile color for the palette of the start border                                                                              |                | 1              |
| `StartTextUserPalette`     | Whether or not to use the DS Profile color for the palette of the start text                                                                                |                | 1              |
| `WirelessIconsUserPalette` | Whether or not to use the DS Profile color for the palette of the wireless icons                                                                            | 0              | 0              |
| `IconA26UserPalette`       | Whether or not to use the DS Profile color for the palette of the Atari 2600 icon                                                                           | 0              | 0              |
| `IconCOLUserPalette`       | Whether or not to use the DS Profile color for the palette of the ColecoVision icon                                                                         | 0              | 0              |
| `IconGBUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Boy icon                                                                             | 0              | 0              |
| `IconGBAUserPalette`       | Whether or not to use the DS Profile color for the palette of the Game Boy Advance icon                                                                     | 0              | 0              |
| `IconGBAModeUserPalette`   | Whether or not to use the DS Profile color for the palette of the native GBA Mode icon                                                                      | 0              | 0              |
| `IconGGUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Gear icon                                                                            | 0              | 0              |
| `IconIMGUserPalette`       | Whether or not to use the DS Profile color for the palette of the image icon                                                                                | 0              | 0              |
| `IconINTUserPalette`       | Whether or not to use the DS Profile color for the palette of the Intellivision icon                                                                        | 0              | 0              |
| `IconM5UserPalette`        | Whether or not to use the DS Profile color for the palette of the Sord M5 icon                                                                              | 0              | 0              |
| `IconManualUserPalette`    | Whether or not to use the DS Profile color for the palette of the manual icon                                                                               | 0              | 0              |
| `IconMDUserPalette`        | Whether or not to use the DS Profile color for the palette of the Genesis/Mega Drive icon                                                                   | 0              | 0              |
| `IconNESUserPalette`       | Whether or not to use the DS Profile color for the palette of the NES/Famicom icon                                                                          | 0              | 0              |
| `IconNGPUserPalette`       | Whether or not to use the DS Profile color for the palette of the Neo Geo Pocket icon                                                                       | 0              | 0              |
| `IconPCEUserPalette`       | Ob die DS-Profilfarbe für die Palette des PC-Engine/TurboGrafx-16-Symbols verwendet werden soll oder nicht                                                  | 0              | 0              |
| `IconPLGUserPalette`       | Ob die DS-Profilfarbe für die Palette des DSTWO-Plugins verwendet werden soll verwendet werden soll oder nicht                                              | 0              | 0              |
| `IconSettingsUserPalette`  | Ob die DS-Profilfarbe für die Palette des DSi-Einstellungssymbols verwendet werden soll oder nicht                                                          | 0              | 0              |
| `IconSGUserPalette`        | Ob die DS-Profilfarbe für die Palette des SG-1000-Symbols verwendet werden soll oder nicht                                                                  | 0              | 0              |
| `IconSMSUserPalette`       | Ob die DS-Profilfarbe für die Palette des Master System-Symbols verwendet werden soll oder nicht                                                            | 0              | 0              |
| `IconSNESUserPalette`      | Ob die DS-Profilfarbe für die Palette des SNES-Symbols verwendet werden soll oder nicht                                                                     | 0              | 0              |
| `IconUnknownUserPalette`   | Ob die DS-Profilfarbe für die Palette des unbekannten (fehlenden) Symbols verwendet werden soll oder nicht                                                  | 0              | 0              |
| `IconWSUserPalette`        | Ob die DS Profilfarbe für die Palette des WonderSwan-Symbols verwendet werden soll oder nicht                                                               | 0              | 0              |
| `UsernameUserPalette`      | Ob die DS-Profilfarbe für die Palette des Benutzernamens verwendet werden soll oder nicht                                                                   | 1              | 1              |
| `ProgressBarUserPalette`   | Ob die Farbe des DS-Profils als Farbe für den Fortschrittsbalken verwendet werden soll oder nicht                                                           | 1              | 1              |
| `ProgressBarColor`         | Die Farbe des Fortschrittsbalkens, wenn `ProgressBarUserPalette` deaktiviert ist                                                                            | 0x7C00         | 0x7C00         |
| `UseAlphaBlend`            | Ob die Farben des Textes am oberen Bildschirmrand (Datum/Uhrzeit und Benutzername) mit den Farben des Hintergrunds übereinstimmen sollen oder nicht         | 1              | 1              |
| `DarkLoading`              | Ob bei Ladebildschirmen zu Schwarz statt zu Weiß verblasst werden soll oder nicht                                                                           | 0              | 0              |
| `RenderPhoto`              | Ob ein Foto auf dem oberen Bildschirm gezeichnet werden soll oder nicht                                                                                     | 0              | 1              |
| `RotatingCubesRenderY`     | Die Y-Position auf dem oberen Bildschirm zum Zeichnen der rotierenden Würfel                                                                                | 78             |                |
| `PlayStartupJingle`        | Ob der Startsound vor der Haupt-BGM verwendet werden soll oder nicht. Lies die [benutzerdefinierte SFX](custom-dsi-3ds-sfx)-Seite für weitere Informationen | 1              | 0              |
| `StartupJingleDelayAdjust` | Die Anzahl der Samples zu Beginn des Startup-Sounds, mit denen die BGM beginnen soll                                                                        | 0              | 0              |

### Optionen für den Makromodus
You may add specific override options to `theme.ini` for use in Macro Mode. To do this, add `[MACRO]` to a blank line at the bottom of the configuration file, then add any specified configurations below it.

## Custom background music and sound effects
The DSi and 3DS themes also support custom music. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.

## Custom fonts
You may put [Custom Fonts](custom-fonts) in the `font` folder for use in the skin. You can also add override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

## Custom palettes
For the paletted textures (`grf` folder), you can optionally add override palette sets which are used when the corresponding `UserPalette` setting is enabled. Palette set files can be created using [this editor](https://skinpaltool.dvdo.dev/). When using the editor, import the image you would like to work with, then create a palette for each of the 16 DS Profile colors. You can use this [example palette file](/assets/files/example-palette.bin) as a starting point.

The 16 rows of the palette collection correspond to each profile color and should be in the following order:
1. Gray-Blue
2. Brown
3. Rot
4. Rosa
5. Orange
6. Gelb
7. Lime Green
8. Grün
9. Dark Green
10. Turquoise
11. Cyan/Light Blue
12. Blau
13. Dark Blue/Indigo
14. Violet/Dark Purple
15. Lila
16. Magenta

Once you've created a palette file, place it in the `palettes` folder. The name of the palette file should match the name of its image but with a `.bin` extension instead (ex. `start_border.bin` will be applied to `start_border.bmp`).

You may also put a `username.bin` palette file to change the palettes of the username font. Make sure to set the palette editor to `Font Mode` when creating this file.

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.
