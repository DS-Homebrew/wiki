---
lang: de-DE
layout: wiki
section: ds-index
category: guides
title: BIOS-/Firmware-Auslesen
description: Wie man das Nintendo DS- oder DSi-BIOS/Firmware aus Ihrer Konsole extrahiert
tabs:
  - 
    dsi-sd-card: DSi mit Unlaunch
    flashcard: Flashkarten
---

Einige Emulatoren, wie beispielsweise melonDS, erfordern das DS-Modus- oder DSi-Modus-BIOS und die Firmware, die durch Extrahieren aus Ihrer Konsole verfügbar sind. Es gibt zwei verschiedene Möglichkeiten, dies zu erreichen, und zwar durch Verwendung von:
- eine DSi mit Unlaunch ODER
- eine DS/DS Lite/3DS oder eine DSi ohne Unlaunch, zusammen mit einer für die Konsole kompatiblen Flashkarte

Die DSi-Methode wird sowohl die DS-Modus- als auch die DSi-Modus-BIOS- und Firmware-Dateien extrahieren. Die Methode mit der Flash-Karte wird nur die DS-Modus-Dateien extrahieren.

{% capture tab-dsi-sd-card %}

Diese Seite setzt voraus, dass Sie eine moderne CFW-Umgebung von [dsi.cfw.guide](https://dsi.cfw.guide) verwenden.
{:.alert .alert-warning}

### Teil 1: Beschaffung der erforderlichen Dateien

1. Laden Sie [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z) herunter
1. Kopieren Sie `dsibiosdumper.nds` aus der dsibiosdumper `.7z` Datei in das Stammverzeichnis Ihrer SD-Karte
1. Stecken Sie Ihre SD-Karte erneut in Ihr Gerät

### Teil 2: dsibiosdumper
1. Bei ausgeschaltetem Gerät halten Sie die folgenden Tasten gedrückt: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, und während Sie diese Tasten zusammen gedrückt halten, schalten Sie Ihr Gerät ein
1. Ihr Gerät sollte in das Unlaunch-Menü gebootet sein
1. Starten Sie dsibiosdumper aus der Liste der Anwendungen
1. Drücken Sie <kbd class="face">A</kbd>, um alles zu dumpen
1. Warten Sie, bis der Vorgang abgeschlossen ist
    - Dies kann eine Weile dauern
1. Nach Abschluss des Vorgangs drücken Sie <kbd>SELECT</kbd>, um dsibiosdumper zu verlassen
1. Schalten Sie Ihr Gerät aus
1. Stecken Sie Ihre SD-Karte in Ihren Computer

Alle erforderlichen Dateien befinden sich im `dsidump`-Ordner im Stammverzeichnis Ihrer SD-Karte.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Teil 1: Beschaffung der erforderlichen Dateien

1. Laden Sie [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (die Datei `.nds`) herunter
1. Kopieren Sie `dsbf_dump.nds` in das Stammverzeichnis Ihrer SD-Karte
1. Stecken Sie Ihre SD-Karte erneut in Ihre Flash-Karte

### Teil 2: dsbf_dump
1. Schalten Sie Ihr Gerät ein
1. Starten Sie Ihre Flash-Karte
1. Navigieren Sie zum Stammverzeichnis Ihrer SD-Karte und starten Sie dsbf_dump
1. Warten Sie, bis der Vorgang abgeschlossen ist
1. Nach Abschluss des Vorgangs drücken Sie <kbd>START</kbd>, um Ihr Gerät auszuschalten
  - Auf 3DS-Familiensystemen wird stattdessen "Software geschlossen" angezeigt. Schalten Sie Ihr Gerät von diesem Bildschirm aus
1. Stecken Sie Ihre SD-Karte in Ihren Computer

Alle erforderlichen Dateien befinden sich in einem auf dem oberen Bildschirm Ihres Geräts angegebenen Ordner.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
