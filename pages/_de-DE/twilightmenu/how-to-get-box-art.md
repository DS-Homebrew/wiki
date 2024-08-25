---
lang: de-DE
layout: wiki
section: twilightmenu
category: other
title: Wie man Box Art bekommt
description: Wie erhält man Schachtelzeichnungen/Spielcover in TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Anleitung
---

{% capture tab-windows %}
1. [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases) herunterladen
1. Entpacken Sie `TwilightBoxart-Windows-GUI.zip` und starten Sie `TwilightBoxart.exe`
1. Klicken Sie auf `SD erkennen`
   - Wenn die richtige SD-Karte nicht gefunden wird, klicken Sie auf `Durchsuchen...` und wählen Sie die richtige Karte aus
1. **Optional:** Ändern Sie die Größe, den Rahmen usw. nach Ihren Wünschen
1. `Konvertieren` anklicken
1. Vergewissern Sie sich, dass in den Einstellungen von TWiLight Menu++ die Anzeige von Box-Art eingestellt ist
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases) herunterladen
1. Entpacken Sie die MacOS- oder Linux- `.zip-Datei`
1. Öffnen Sie die `Datei TwilightBoxart.ini` im entpackten Ordner in einem Texteditor
1. Geben Sie den Pfad zu Ihrer SD-Karte nach `SdRoot=` ein, und speichern Sie die Datei
   - Unter macOS ist dies `/Volumes/` und dann der Name Ihrer SD-Karte
1. Öffne das Terminal
1. Geben Sie im Terminal `cd` ein und ziehen Sie dann den Ordner mit `TwilightBoxart.CLI` auf Ihr Terminal
1. `chmod +x TwilightBoxart.CLI` ausführen
1. `./TwilightBoxart.CLI` ausführen
1. Verwenden Sie die Pfeil- und Eingabetasten, um `Ja zu` wählen, wenn der SD-Pfad korrekt angezeigt wird
1. Vergewissern Sie sich, dass in den Einstellungen von TWiLight Menu++ die Anzeige von Box-Art eingestellt ist
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Laden Sie ein png Box Art Pack von [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)herunter, unter der Kategorie **S Covers (png)**
1. Extrahieren Sie die .png-Dateien nach `sd:/_nds/TWiLightMenu/boxart`
1. Vergewissern Sie sich, dass in den Einstellungen von TWiLight Menu++ die Anzeige von Box-Art eingestellt ist
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**So fügen Sie Ihr eigenes Boxart hinzu:** Platzieren Sie sie in `sd:/_nds/TWiLightMenu/boxart`.
- Kann entweder die TID des Spiels (z. B. `ASME.png`) oder den Dateinamen (z. B. `SM64DS.nds.png`) enthalten
- Muss im Format `.png` vorliegen, mit einer empfohlenen Größe von 128x115 und einer maximalen Größe von 208x143
- Wenn in der Konfiguration **TW**i**L**ight Menu++ die Anzeige von Box-Art auf `Cached`eingestellt ist, muss die Bildgröße 44 KiB oder weniger betragen. Sie können ein Tool wie [tinypng](https://tinypng.com/) verwenden, um die Bilder auf eine akzeptable Größe zu komprimieren

Einzelne Schachtelgrafiken können auch von GameTDB unter der Kategorie **S Covers (png)** heruntergeladen werden.
