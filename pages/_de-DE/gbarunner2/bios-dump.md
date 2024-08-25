---
lang: de-DE
layout: wiki
section: gbarunner2
title: GBA-BIOS-Dumping
description: So extrahieren Sie das Nintendo GBA BIOS von Ihrer Konsole
tabs:
  - 
    3ds-sd-card: 3DS mit open_agb_firm
    gba-flashcart: GBA/DS/DS Lite mit einer GBA-Modus-Flashcart
---

Während die meisten GBA-Emulatoren GBA-Spiele problemlos abspielen können, benötigen einige Emulatoren und Hypervisoren, wie z. B. GBARunner2, die BIOS-Datei, um einige Titel korrekt abzuspielen.

Es gibt zwei verschiedene Möglichkeiten, dies zu erreichen, und zwar durch Verwendung von:
- einen 3DS mit angepasster Firmware ODER
- einen GBA/DS/DS Lite mit einer GBA-Flashcart

{% capture tab-3ds-sd-card %}
### Teil 1: Beschaffung der erforderlichen Dateien
1. [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) herunterladen (die `.7z-Datei`)
1. [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba) herunterladen
1. Erstellen Sie einen Ordner namens `payloads` innerhalb des Ordners `/luma`, falls er noch nicht existiert
1. Kopieren Sie `open_agb_firm.firm` aus der open_agb_firm `.7z-Datei` in den Ordner `/luma/payloads`
1. Kopieren Sie `3ds` aus der open_agb_firm `.7z-Datei` in das Stammverzeichnis Ihrer SD-Karte
1. Kopieren Sie `Bios_Dumper.gba` in das Stammverzeichnis Ihrer SD-Karte
1. Setzen Sie Ihre SD-Karte wieder in Ihr Gerät ein

### Teil 2: Bios_Dumper
1. Halten Sie <kbd>START</kbd> gedrückt und schalten Sie Ihr Gerät ein, während Sie <kbd>START</kbd> gedrückt halten
    - Dadurch wird open_agb_firm gestartet
    - Wenn es den `Luma3DS Chainloader` lädt, wählen Sie `open_agb_firm` aus diesem Menü
    - Wenn die Datei in einen anderen Ordner geladen wird, haben Sie `open_agb_firm.firm` nicht in den richtigen Ordner auf Ihrer SD-Karte kopiert
1. Starten Sie mit open_agb_firm die `Datei Bios_Dumper.gba`
1. Der Bildschirm blinkt rot, dann grün
1. Etwa fünf Sekunden lang warten
1. Schalten Sie Ihr Gerät aus

{% capture upload-bios-text %}
Laden Sie `/3ds/open_agb_firm/saves/Bios_Dumper.sav` von Ihrer SD-Karte hierher hoch:
{% endcapture %}

### Teil 3: Entpacken des BIOS aus der erzeugten Speicherdatei
1. Stecken Sie Ihre SD-Karte in Ihren Computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Teil 1: Beschaffung der erforderlichen Dateien
1. [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba) herunterladen
1. Kopieren Sie `Bios_Dumper.gba` in das Stammverzeichnis Ihrer SD-Karte
1. Stecken Sie Ihre SD-Karte erneut in Ihre Flash-Karte
1. Setzen Sie Ihre GBA-Flashcart wieder in Slot-2 ein

### Teil 2: Bios_Dumper
1. Starten Sie Ihren Flashcart, dann starten Sie `Bios_Dumper.gba`
1. Der Bildschirm blinkt rot, dann grün
1. Etwa fünf Sekunden lang warten
1. Schalten Sie Ihr Gerät aus

{% capture upload-bios-text %}
Laden Sie die `Datei Bios_Dumper.sav` von Ihrer SD-Karte hier hoch:
{% endcapture %}

### Teil 3: Entpacken des BIOS aus der erzeugten Speicherdatei
1. Stecken Sie Ihre SD-Karte in Ihren Computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Eine `bios.bin-Datei` wird automatisch heruntergeladen. Dies ist die endgültige GBA-BIOS-Datei.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
