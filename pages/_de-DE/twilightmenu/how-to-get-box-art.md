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
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. Vergewissern Sie sich, dass in den Einstellungen von TWiLight Menu++ die Anzeige von Box-Art eingestellt ist
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
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
