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
| Oberers_Foto          | Die Hintergrundtextur im oberen Bildschirm, wenn ein Foto angezeigt wird                                                         |
| bottom                | Die untere Hintergrundtextur, wenn der Mauszeiger nicht auf ein Symbol zeigt                                                     |
| bottom_ds             | Für das 3DS-Thema, die untere Hintergrundtextur, wenn auf einem DS Phat/Lite der Mauszeiger nicht auf ein Symbol zeigt           |
| bottom_macro          | Für das DSi-Thema, die Hintergrundtextur, wenn der Mauszeiger, während der Makromodus verwendet wird, nicht auf ein Symbol zeigt |
| bottom_bubble         | Die untere Hintergrundtextur, wenn der Mauszeiger auf ein Symbol zeigt                                                           |
| bottom_bubble_ds    | Für das 3DS-Thema, die untere Hintergrundtextur, wenn auf einem DS Phat/Lite der Mauszeiger auf ein Symbol zeigt                 |
| bottom_bubble_macro | Für das DSi-Thema, die Hintergrundtextur, wenn der Mauszeiger, während der Makromodus verwendet wird, auf ein Symbol zeigt       |
| bottom_moving         | Für das DSi-Thema, die untere Hintergrundtextur beim Verschieben eines Symbols                                                   |
| bottom_moving_macro | For the DSi theme, the background texture when moving an icon while using Macro Mode                                             |

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
These must be 4 BPP (16 color) BMP files.

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
| launch_dot    | Die Punkte, die angezeigt werden, wenn ein Spiel gestartet wird (DSi-Theme)                                |
| moving_arrow  | Die Punkte, die angezeigt werden, wenn ein Spiel gestartet wird (DSi-Theme)                                |
| progress      | Die Fortschritts-Ladeanimation mit 8 Bildern                                                               |
| scroll_window | Der Teil der Scrollleiste, der die angezeigten Symbole anzeigt                                             |
| small_cart    | Die oben (3DS-Theme) und im SELECT-Menü (DSi-Theme) angezeigten Symbole                                    |
| start_border  | Der Rahmen mit Animationsbildern, die das ausgewählte Symbol anzeigen (3DS-Theme)                          |
| start_text    | Der auf dem Startbildschirm angezeigte Text (DSi-Theme)                                                    |
| wirelessicons | Die Symbole, die angezeigt werden, um anzuzeigen, dass ein Spiel drahtlose Unterstützung bietet            |

### DS Classic Menü Texturen (`Schnellmenü` Ordner)
Diese müssen PNG-Dateien sein.

| Textur     | Beschreibung                                                      |
| ---------- | ----------------------------------------------------------------- |
| bottombg   | Hintergrund für den unteren Bildschirm                            |
| phat_topbg | Hintergrund für den oberen Bildschirm des DS Phat                 |
| topbg      | Hintergrund für den oberen Bildschirm bei jedem anderen DS-Modell |

### UI-Texturen (`ui`-Ordner)
Diese müssen PNG-Dateien sein. Transparenz wird unterstützt, aber nur 100 % Transparenz wird funktionieren. Jedes Pixel, das in einer Textur transparent ist, sollte dies in allen Texturen sein, damit es bei einer Änderung ordnungsgemäß überschrieben wird.

| Textur                   | Beschreibung                                                            |
| ------------------------ | ----------------------------------------------------------------------- |
| Lshoulder                | Die linke Schulter                                                      |
| Lshoulder_greyed         | Die linke Schulter, wenn sich links keine Seiten befinden               |
| Lshoulder_photo          | Die linke Schultertaste, wenn ein Foto gezeigt wird                     |
| Lshoulder_photo_greyed | Die linke Schultertaste ohne Seiten nach links und ein Foto mit         |
| Rshoulder                | Die rechte Schulter                                                     |
| Rshoulder_greyed         | Die rechte Schulter, wenn sich rechts keine Seiten befinden             |
| Rshoulder_photo          | Die rechte Schultertaste, wenn ein Foto gezeigt wird                    |
| Rshoulder_photo_greyed | Die rechte Schultertaste ohne Seiten nach links und ein Foto, das zeigt |

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
| `UsernameRenderXDS`        | Die X-Position auf dem oberen Bildschirm, um den Text des Benutzernamens zu zeichnen, wenn auf einem DS Phat/Lite                                           | 4              | 4              |
| `DateRenderX`              | The X position on the top screen to draw the date text                                                                                                      | 162            | 162            |
| `DateRenderY`              | The Y position on the top screen to draw the date text                                                                                                      | 7              | 7              |
| `TimeRenderX`              | The X position on the top screen to draw the time text                                                                                                      | 200            | 200            |
| `TimeRenderY`              | The Y position on the top screen to draw the time text                                                                                                      | 7              | 7              |
| `PurpleBatteryAvailable`   | Ob die violetten Batteriesymbole verwendet werden sollen oder nicht, wenn die `Farbe der Power-LED` in den Einstellungen auf `Violett` eingestellt ist      | 1              | 1              |
| `FontPalette1`             | Die transparente Farbe der Schrift, unbenutzt für Standard-Schriften                                                                                        | 0x0000         | 0x0000         |
| `FontPalette2`             | Die Farben der Schrift, verwenden Sie [diese Website](http://www.conradshome.com/html2bgr15/) zu konvertieren                                               | 0xDEF7         | 0xDEF7         |
| `FontPalette3`             |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPalette4`             |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteDateTime1`     | Die transparente Farbe der Schrift für das Datum und die Uhrzeit überschreiben                                                                              | 0x0000         | 0x0000         |
| `FontPaletteDateTime2`     | Die Überschreibungsfarbe der Schrift für Datum und Uhrzeit                                                                                                  | 0xDEF7         | 0xA529         |
| `FontPaletteDateTime3`     |                                                                                                                                                             | 0xC631         | 0xBDEF         |
| `FontPaletteDateTime4`     |                                                                                                                                                             | 0xA108         | 0xD6B5         |
| `FontPaletteTitlebox1`     | Die transparente Farbe der Schrift für das ROM-Titelfeld überschreiben                                                                                      | 0x0000         | 0x0000         |
| `FontPaletteTitlebox2`     | Die Überschreibungsfarbe der Schriftart für das ROM-Titelfeld                                                                                               | 0xDEF7         | 0xDEF7         |
| `FontPaletteTitlebox3`     |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteTitlebox4`     |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteDialog1`       | Die überschreibende transparente Farbe der Schrift für Dialoge                                                                                              | 0x0000         | 0x0000         |
| `FontPaletteDialog2`       | Die Override-Farbe der Schrift für Dialoge                                                                                                                  | 0xDEF7         | 0xDEF7         |
| `FontPaletteDialog3`       |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteDialog4`       |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteOverlay1`      | Die überschreibende transparente Farbe der Schrift für überlagerten Text                                                                                    | 0x0000         | 0x0000         |
| `FontPaletteOverlay2`      | Die Überlagerungsfarbe der Schriftart für überlagerten Text                                                                                                 | 0xDEF7         | 0xDEF7         |
| `FontPaletteOverlay3`      |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteOverlay4`      |                                                                                                                                                             | 0xA108         | 0xA108         |
| `FontPaletteUsername1`     | Die überschreibende transparente Farbe der Schrift für den Benutzernamen                                                                                    | 0x0000         | 0x0000         |
| `FontPaletteUsername2`     | Die Überschreibungsfarbe der Schrift für den Benutzernamen                                                                                                  | 0xDEF7         | 0xDEF7         |
| `FontPaletteUsername3`     |                                                                                                                                                             | 0xC631         | 0xC631         |
| `FontPaletteUsername4`     |                                                                                                                                                             | 0xA108         | 0xA108         |
| `BipsUserPalette`          | Ob die DS-Profilfarbe für die Palette der Bips auf der Bildlaufleiste verwendet werden soll oder nicht                                                      |                | 0              |
| `BoxUserPalette`           | Ob die DS-Profilfarbe für die Palette der Felder mit den Spielsymbolen im DSi-Theme verwendet werden soll oder nicht                                        |                | 0              |
| `BoxEmptyUserPalette`      | Ob die DS-Profilfarbe für die Palette der leeren Felder im 3DS-Thema verwendet werden soll oder nicht                                                       | 0              |                |
| `BoxFullUserPalette`       | Ob die DS-Profilfarbe für die Palette der Felder mit den Spielsymbolen im 3DS-Thema verwendet werden soll oder nicht                                        | 0              |                |
| `BraceUserPalette`         | Ob die DS-Profilfarbe für die Palette der Klammer am Anfang und Ende der Spielliste verwendet werden soll oder nicht                                        |                | 0              |
| `BubbleUserPalette`        | Ob die DS-Profilfarbe für die Palette der Spitze der Titelblase verwendet werden soll oder nicht                                                            | 0              | 0              |
| `ButtonArrowUserPalette`   | Ob die DS-Profilfarbe für die Palette der Pfeiltasten am unteren Bildschirmrand verwendet werden soll oder nicht                                            |                | 1              |
| `CornerButtonUserPalette`  | Ob die DS-Profilfarbe für die Palette der DSi-Menü- und Einstellungssymbole im SELECT-Menü verwendet werden soll oder nicht                                 |                | 0              |
| `CursorUserPalette`        | Ob die DS-Profilfarbe für die Palette des Cursors verwendet werden soll oder nicht                                                                          | 0              |                |
| `DialogBoxUserPalette`     | Ob die DS-Profilfarbe für die Palette des Dialogfelds verwendet werden soll oder nicht                                                                      | 0              | 1              |
| `FolderUserPalette`        | Ob die DS-Profilfarbe für die Palette der Ordner verwendet werden soll oder nicht                                                                           | 0              | 0              |
| `LaunchDotsUserPalette`    | Ob die DS-Profilfarbe für die Palette der Startpunkte verwendet werden soll oder nicht                                                                      |                | 1              |
| `MovingArrowUserPalette`   | Ob die DS-Profilfarbe für die Palette des Pfeils beim Verschieben von Symbolen verwendet werden soll oder nicht                                             |                | 1              |
| `ProgressUserPalette`      | Ob die DS-Profilfarbe für die Palette der Ladefortschrittsanzeige verwendet werden soll oder nicht                                                          | 1              | 1              |
| `ScrollWindowUserPalette`  | Ob die DS-Profilfarbe für die Palette des Hintergrunds des Bildlauffensters auf der Bildlaufleiste verwendet werden soll oder nicht                         |                | 0              |
| `SmallCartUserPalette`     | Ob die DS-Profilfarbe für die Palette der Cartridge-Symbole verwendet werden soll oder nicht                                                                | 0              | 0              |
| `StartBorderUserPalette`   | Ob die DS-Profilfarbe für die Palette des Startrahmens verwendet werden soll oder nicht                                                                     |                | 1              |
| `StartTextUserPalette`     | Ob die DS-Profilfarbe für die Palette des Starttextes verwendet werden soll oder nicht                                                                      |                | 1              |
| `WirelessIconsUserPalette` | Ob die DS-Profilfarbe für die Palette der Drahtlos-Symbole verwendet werden soll oder nicht                                                                 | 0              | 0              |
| `IconA26UserPalette`       | Ob die DS-Profilfarbe für die Palette des Atari 2600-Symbols verwendet werden soll oder nicht                                                               | 0              | 0              |
| `IconCOLUserPalette`       | Ob die DS-Profilfarbe für die Palette des ColecoVision-Symbols verwendet werden soll oder nicht                                                             | 0              | 0              |
| `IconGBUserPalette`        | Ob die DS-Profilfarbe für die Palette des Game Boy-Symbols verwendet werden soll oder nicht                                                                 | 0              | 0              |
| `IconGBAUserPalette`       | Ob die DS-Profilfarbe für die Farbpalette des Game Boy Advance-Symbols verwendet werden soll oder nicht                                                     | 0              | 0              |
| `IconGBAModeUserPalette`   | Ob die DS-Profilfarbe für die Palette des nativen GBA-Modus-Symbols verwendet werden soll oder nicht                                                        | 0              | 0              |
| `IconGGUserPalette`        | Ob die DS-Profilfarbe für die Palette des Game Gear-Symbols verwendet werden soll oder nicht                                                                | 0              | 0              |
| `IconIMGUserPalette`       | Ob die DS-Profilfarbe für die Palette des Bildsymbols verwendet werden soll oder nicht                                                                      | 0              | 0              |
| `IconINTUserPalette`       | Ob die DS-Profilfarbe für die Palette des Intellivision-Symbols verwendet werden soll oder nicht                                                            | 0              | 0              |
| `IconM5UserPalette`        | Ob die DS-Profilfarbe für die Palette des Sord M5-Symbols verwendet werden soll oder nicht                                                                  | 0              | 0              |
| `IconManualUserPalette`    | Ob die DS-Profilfarbe für die Palette des Handbuchsymbols verwendet werden soll oder nicht                                                                  | 0              | 0              |
| `IconMDUserPalette`        | Ob die DS-Profilfarbe für die Palette des Genesis/Mega Drive-Symbols verwendet werden soll oder nicht                                                       | 0              | 0              |
| `IconNESUserPalette`       | Ob die DS-Profilfarbe für die Palette des NES/Famicom-Symbols verwendet werden soll oder nicht                                                              | 0              | 0              |
| `IconNGPUserPalette`       | Ob die DS-Profilfarbe für die Palette des Neo Geo Pocket-Symbols verwendet werden soll oder nicht                                                           | 0              | 0              |
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
Für die Verwendung im Makromodus können Sie der `Datei theme.ini` spezielle Überschreibungsoptionen hinzufügen. Fügen Sie dazu `[MACRO]` in eine leere Zeile am Ende der Konfigurationsdatei ein und fügen Sie dann alle angegebenen Konfigurationen darunter ein.

## Benutzerdefinierte Hintergrundmusik und Soundeffekte
Die DSi- und 3DS-Themen unterstützen auch eigene Musik. Siehe [DSi/3DS Skins - Benutzerdefinierte SFX](custom-dsi-3ds-sfx) für weitere Details.

## Benutzerdefinierte Schriftarten
Sie können [benutzerdefinierte Schriftarten](custom-fonts) zur Verwendung im Skin in den `Schriftartenordner` legen. Sie können auch überschreibende Schriftarten für das Datum & Zeit mit `date_time.nftr` und den Konsolenbenutzernamen mit `username.nftr` hinzufügen.

## Benutzerdefinierte Paletten
Für die palettierten Texturen (`grf` Ordner), können Sie optional die Palettenüberschreibungen hinzufügen, die verwendet werden, wenn die entsprechende `BenutzerPalette` Einstellung aktiviert ist. Paletten-Sets können mit [diesem Editor](https://skinpaltool.dvdo.dev/) erstellt werden. Wenn Sie den Editor verwenden, importieren Sie das Bild, mit dem Sie arbeiten möchten, und erstellen dann eine Palette für jede der 16 DS-Profilfarben. Sie können diese [Beispiel-Paletten-Datei](/assets/files/example-palette.bin) als Ausgangspunkt verwenden.

Die 16 Zeilen der Palettensammlung entsprechen den einzelnen Profilfarben und sollten in der folgenden Reihenfolge angeordnet werden:
1. Graublau
2. Braun
3. Rot
4. Rosa
5. Orange
6. Gelb
7. Limettengrün
8. Grün
9. Dunkelgrün
10. Türkis
11. Cyan/Hellblau
12. Blau
13. Dunkelblau/Indigo
14. Violett/Dunkellila
15. Lila
16. Magenta

Sobald Sie eine Palettendatei erstellt haben, legen Sie sie in den `Paletten` Ordner. Der Name der Palettendatei sollte mit dem Namen des Bildes übereinstimmen, stattdessen jedoch mit einer `.bin` Endung (z. B. `start_border.bin` wird auf `start_border.bmp` angewendet).

Sie können auch eine `-Benutzername.bin` Palettendatei angeben, um die Paletten des Benutzernamens zu ändern. Stellen Sie sicher, dass der Paletteneditor bei der Erstellung dieser Datei auf den `Schriftmodus` eingestellt ist.

## Teil 3: Hinzufügen zu TWiLight Menu++
Sobald Sie einige Grafiken bearbeitet haben und Ihre Haut testen möchten, kopieren Sie einfach Ihren Skin Ordner (der Ordner mit dem `Hintergrund`, `Batterie`, etc Ordner) zu `sd:/_nds/TWiLightMenu/3dsmenu/themes/` oder `sd:/_nds/TWiLightMenu/dsimenu/themes/` für 3DS bzw. DSi Theme Skins.

## Teil 4: Teile deinen Skin
Sobald Sie Ihren Skin fertiggestellt haben, können Sie ihn mit der Community teilen, indem Sie einen Pull Request erstellen und ihn in einer `.7z-Datei` zum [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub-Repository hinzufügen. Wenn Sie mit der Verwendung von Git nicht vertraut sind, können Sie auch einfach eine Anfrage an das Repository mit einer Zip-Datei Ihres Skins stellen und darum bitten, dass es hinzugefügt wird.
