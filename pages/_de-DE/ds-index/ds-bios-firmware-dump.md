---
lang: de-DE
layout: wiki
section: ds-index
category: guides
title: BIOS/Firmware-Dumping
description: So extrahieren Sie das Nintendo DS oder DSi BIOS/Firmware von Ihrer Konsole
tabs:
  - 
    dsi-sd-card: DSi mit Unlaunch
    flashcard: Flashkarten
---

Einige Emulatoren, wie MelonDS, benötigen den DS-Modus oder DSi-Modus BIOS und Firmware, die durch Extrahieren von Ihrer Konsole erhältlich sind. Dafür gibt es zwei verschiedene Wege:
- einen DSi mit Unlaunch, ODER
- ein DS/DS Lite/3DS oder ein DSi ohne Unstart, zusammen mit einer Karte, die mit der Konsole kompatibel ist

Die DSi Methode extrahiert sowohl den DS-Modus als auch den DSi-Modus BIOS und Firmware-Dateien. Die Flashcard-Methode extrahiert nur die DS-Modus-Dateien.

{% capture tab-dsi-sd-card %}

Diese Seite geht davon aus, dass Sie eine moderne CFW-Umgebung von [dsi.cfw.guide](https://dsi.cfw.guide) betreiben.
{:.alert .alert-warning}

### Teil 1: Beschaffung der erforderlichen Dateien

1. [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z) herunterladen
1. Kopieren Sie `dsibiosdumper.nds` aus der dsibiosdumper `.7z-Datei` in das Stammverzeichnis Ihrer SD-Karte
1. Setzen Sie Ihre SD-Karte wieder in Ihr Gerät ein

### Teil 2: dsibiosdumper
1. Wenn Ihr Gerät immer noch ausgeschaltet ist, halten Sie folgende Buttons gedrückt: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, und während Sie diese Tasten zusammen halten, schalten Sie Ihr Gerät ein
1. Ihr Gerät sollte nun das Menü "Unlaunch" aufrufen
1. Starte dsibiosdumper aus der Liste der Anwendungen
1. Drücke <kbd class="face">A</kbd> um alles zu dumpen
1. Warten Sie, bis der Vorgang abgeschlossen ist
    - Dies kann eine Weile dauern
1. Wenn der Vorgang abgeschlossen ist, drücken Sie <kbd>SELECT</kbd>, um dsibiosdumper zu beenden
1. Schalten Sie Ihr Gerät aus
1. Stecken Sie Ihre SD-Karte in Ihren Computer

Alle erforderlichen Dateien befinden sich im Ordner `dsidump` im Stammverzeichnis Ihrer SD-Karte.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Teil 1: Beschaffung der erforderlichen Dateien

1. [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) herunterladen (die `.nds-Datei`)
1. Kopieren Sie `dsbf_dump.nds` in das Stammverzeichnis Ihrer SD-Karte
1. Setzen Sie Ihre SD-Karte wieder in Ihre Flashcard ein

### Teil 2: dsbf_dump
1. Schalte dein Gerät an
1. Starten Sie Ihre Karteikarte
1. Navigieren Sie zum Stammverzeichnis Ihrer SD-Karte und starten Sie dsbf_dump
1. Warten Sie, bis der Vorgang abgeschlossen ist
1. Drücken Sie nach Abschluss des Vorgangs <kbd>START</kbd>, um Ihr Gerät auszuschalten
    - Auf Systemen der 3DS-Familie wird stattdessen "Software geschlossen" angezeigt. Schalten Sie Ihr Gerät von diesem Bildschirm aus
1. Stecken Sie Ihre SD-Karte in Ihren Computer

Alle erforderlichen Dateien befinden sich in einem Ordner, der auf dem oberen Bildschirm Ihres Geräts angegeben ist.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
