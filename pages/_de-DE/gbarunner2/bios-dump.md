---
lang: de-DE
layout: wiki
section: gbarunner2
title: GBA-BIOS-Auslesen
description: Wie extrahiert man das Nintendo GBA-BIOS von Ihrer Konsole
tabs:
  - 
    3ds-sd-card: 3DS mit open_agb_firm
    gba-flashcart: GBA/DS/DS Lite mit einer GBA-Modus-Flashkarte
---

Obwohl die meisten GBA-Emulatoren keine Probleme beim Abspielen von GBA-Spielen haben, könnten einige Emulatoren und Hypervisoren wie GBARunner2 die BIOS-Datei benötigen, um einige Titel ordnungsgemäß wiederzugeben.

Es gibt zwei verschiedene Möglichkeiten, dies zu erreichen, und zwar durch Verwendung von:
- eine 3DS mit benutzerdefinierter Firmware ODER
- Ein GBA/DS/DS Lite mit einer GBA-Modus-Flashkarte

{% capture tab-3ds-sd-card %}
### Teil 1: Beschaffung der erforderlichen Dateien
1. Laden Sie [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (die Datei `.7z`) herunter
1. Laden Sie [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba) herunter
1. Erstellen Sie einen Ordner namens `payloads` innerhalb des `/luma` Ordners, falls er noch nicht existiert
1. Kopieren Sie `open_agb_firm.firm` aus der open_agb_firm `.7z` Datei in den `/luma/payloads` Ordner
1. Kopieren Sie `Bios_Dumper.gba` in das Stammverzeichnis Ihrer SD-Karte
1. Stecken Sie Ihre SD-Karte erneut in Ihr Gerät

### Teil 2: Bios_Dumper
1. Drücken und halten Sie <kbd>START</kbd> gedrückt, und während Sie <kbd>START</kbd> gedrückt halten, schalten Sie Ihr Gerät ein
    - Dies wird open_agb_firm starten
    - Wenn der `Luma3DS Chainloader` geladen wird, wählen Sie `open_agb_firm` aus diesem Menü
    - Wenn es in etwas anderes lädt, haben Sie `open_agb_firm.firm` nicht in den richtigen Ordner auf Ihrer SD-Karte kopiert
1. Starten Sie `Bios_Dumper.gba` aus open_agb_firm
1. Der Bildschirm wird rot aufleuchten, dann wird er grün aufleuchten
1. Warten Sie etwa fünf Sekunden
1. Schalten Sie Ihr Gerät aus

{% capture upload-bios-text %}
Von Ihrer SD-Karte, laden Sie `/3ds/open_agb_firm/saves/Bios_Dumper.sav` hier hoch:
{% endcapture %}

### Teil 3: Entpacken Sie das BIOS aus der generierten Speicherdatei
1. Stecken Sie Ihre SD-Karte in Ihren Computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Teil 1: Beschaffung der erforderlichen Dateien
1. Laden Sie [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba) herunter
1. Kopieren Sie `Bios_Dumper.gba` auf die Wurzel Ihrer Flashkarte SD-Karte
1. Setzen Sie Ihre SD-Karte erneut in Ihr Flashmodul ein
1. Setzen Sie Ihre GBA-Flashkarte erneut in Ihr Modul ein

### Teil 2: Bios_Dumper
1. Starten Sie Ihre Flashkarte und anschließend `Bios_Dumper.gba`
1. Der Bildschirm wird rot aufleuchten, dann wird er grün aufleuchten
1. Warten Sie etwa fünf Sekunden
1. Schalten Sie Ihr Gerät aus

{% capture upload-bios-text %}
Von Ihrer SD-Karte, laden Sie `Bios_Dumper.sav` hier hoch:
{% endcapture %}

### Teil 3: Entpacken Sie das BIOS aus der generierten Speicherdatei
1. Stecken Sie Ihre SD-Karte in Ihren Computer
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Es wird automatisch eine `bios.bin`-Datei heruntergeladen. Dies ist die endgültige GBA-BIOS-Datei.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
