---
lang: de-DE
layout: wiki
section: twilightmenu
category: customization
title: Benutzerdefinierte Unlaunch-Hintergründe
description: Wie man benutzerdefinierte Unlaunch-Hintergründe erstellt und sie mit TWiLight Menu++ installiert
---

Vorgefertigte Unlaunch-Hintergründe finden Sie auf der [TWiLight Menu++ Skins-Seite](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

Mit TWiLight Menu++ können Sie das Unlaunch-Installationsprogramm mit einem Patch versehen, um ein benutzerdefiniertes Hintergrundbild und eine Textfarbpalette zu erhalten. Dies muss ein 256 x 192 GIF sein, mit einigen Einschränkungen:
- Es wird nur das erste Bild angezeigt, keine animierten Hintergründe
- Die Datei muss kleiner oder gleich 15.472 Bytes sein
- GIFs mit mehr als 31 Farben erfordern speziell angefertigte Paletten, damit der Text nicht unterbrochen wird

### Installation
1. Kopieren Sie die GIF-Datei nach `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Laden Sie das [neueste Unlaunch-Installationsprogramm](https://problemkaputt.de/unlaunch.zip) herunter und entpacken Sie `UNLAUNCH.DSI` auf Ihre SD-Karte
1. Öffnen Sie TWiLight Menu++ Einstellungen, wechseln Sie auf die `Einstellungsseite Unlaunch` und klicken Sie auf `Background`, dann wählen Sie die gewünschte Einstellung
1. Beenden Sie die Einstellungen und starten Sie `Unlaunch DSi Installer`
   - Wenn das nicht der Fall ist, schalten Sie Ihre Konsole aus und stellen Sie sicher, dass Ihr GIF den oben genannten Anforderungen entspricht
1. Wählen Sie `Jetzt installieren`

### Verwendung von GIFs mit mehr als 31 Farben
Da die GIF-Palette in denselben Bereich des VRAM geladen wird wie die Textpaletten, überschreibt sie diese, wenn die Palette zu groß wird. Wenn Sie dies mit verschiedenen Farben verwenden, können Sie auch verschiedene Textfarben verwenden, wenn Sie dies wünschen. Diese Anleitung bezieht sich auf [GIMP](https://gimp.org), aber jedes Bildbearbeitungsprogramm, das in der Lage ist, die Palette eines Bildes neu anzuordnen, funktioniert.
1. Öffnen Sie Ihr Bild in GIMP und stellen Sie sicher, dass es 256 x 192 Pixel groß ist
1. Wählen Sie in der oberen Menüleiste `Bild` -> `Modus` -> `Indiziert...`
1. Wählen Sie `Optimale Palette generieren` und stellen Sie die maximalen Farben auf bis zu 226 Farben ein
1. Wählen Sie ein Dithering-Muster aus der Dropdown-Liste `Farbdithering`
   - Bilder ohne Dithering lassen sich in der Regel am besten komprimieren, aber mit Dithering sehen sie in der Regel besser aus. Probieren Sie aus, was bei der Größe am besten aussieht
1. `Konvertieren` anklicken
1. Wählen Sie in der oberen Menüleiste `Datei` -> `Exportieren als...`, geben Sie der Datei einen Namen mit der Erweiterung `.gif`, und klicken Sie auf `Exportieren`
   - Wenn es Warnungen gibt, klicken Sie auf die Schaltfläche Akzeptieren
1. Deaktivieren Sie im nächsten Popup den `GIF-Kommentar` und klicken Sie auf `Exportieren`
1. Überprüfen Sie die Größe der exportierten Datei. Wenn sie 15.472 Byte oder weniger beträgt, fahren Sie mit Schritt 13 fort
1. Wenn Ihr GIF zu groß ist, können Sie versuchen, es mit [gifsicle](http://www.lcdf.org/gifsicle/) oder [ezgif.com](https://ezgif.com/optimize) zu optimieren
   - In dieser Anleitung wird ezgif verwendet, da es einfacher ist, da es eine Website ist
1. Öffnen Sie https://ezgif.com/optimize, und laden Sie Ihr GIF hoch
1. Probieren Sie verschiedene Komprimierungsstufen aus, bis Sie die beste unter 15.472 Bytes (15,11 KiB) gefunden haben, idealerweise etwas weniger, da GIMP die Größe etwas erhöhen kann
1. Speichern Sie das optimierte GIF und öffnen Sie es in GIMP
1. Wählen Sie in der oberen Menüleiste `Windows` -> `Andockbare Dialoge` -> `Colormap`
1. Ändern Sie Ihre aktuelle `Vordergrundfarbe` in #080808 und fügen Sie 14 neue Farben mit der Schaltfläche `+` hinzu
    - Wenn Ihr Bild nicht mindestens 133 Farben hat, müssen Sie so lange Farben hinzufügen, bis der letzte Index 146 erreicht ist
1. Klicken Sie mit der rechten Maustaste auf eine Farbe in der Farbkarte und wählen Sie `Farbkarte neu anordnen...`
1. Ordnen Sie Ihre neuen Farben so an, dass sie mit den rot umrandeten Farben übereinstimmen: (Die 2. und 3. Spalte ab der 4. Zeile)<br> ![Palette mit korrekten Textfarben](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Verwenden Sie den Farbwähler, um Ihre neuen Farben mit denen im obigen Bild abzustimmen
1. Wählen Sie in der oberen Menüleiste `Datei` -> `Exportieren als...`, geben Sie der Datei einen Namen mit der Erweiterung `.gif`, und klicken Sie auf `Exportieren`
1. Vergewissern Sie sich im nächsten Popup, dass der `GIF-Kommentar` deaktiviert ist, und klicken Sie auf `Exportieren`
1. Vergewissern Sie sich, dass das Bild immer noch weniger als 15.472 Byte groß ist. Wenn es zu groß geworden ist, wiederholen Sie den Vorgang ab Schritt 10 mit einer höheren Komprimierungsstufe
1. Du bist fertig! Befolgen Sie die [Installationsanweisungen](#installing) oben, um Ihr Bild zu verwenden!
