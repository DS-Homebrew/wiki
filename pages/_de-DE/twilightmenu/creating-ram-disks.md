---
lang: de-DE
layout: wiki
section: twilightmenu
category: other
title: Erstellen von RAM-Disks
description: Wie man RAM-Disks für die Verwendung alter DS-Homebrew mit TWiLight Menu++ erstellt
---

Einige DS-Homebrews sind nicht in der Lage, ordnungsgemäß auf das Dateisystem der SD-Karte zuzugreifen. Aus diesem Grund kann es notwendig sein, ein eigenständiges Dateisystem in den Arbeitsspeicher zu laden, das die notwendigen Dateien für Ihr Homebrew enthält, damit es funktioniert.

Die hier verwendete Software setzt das Betriebssystem Windows voraus.
{:.alert .alert-info}

Wenn Sie eine Flashcard verwenden, müssen Sie dem nicht folgen.
{:.alert .alert-info}

Um eine RAM-Disk zu erstellen, laden Sie [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) herunter (klicken Sie auf `Software herunterladen`) und befolgen Sie die nachstehenden Anweisungen.

Anleitung von Dakkon7, geändert von Rocket Robz:

1. RAMDisk ausführen
1. Klicken Sie auf **Ansicht** -> **Erweitert**
1. Für die **Festplattengröße** geben Sie `12` für DSi oder `28` für 3DS ein, oberhalb von **maximal 1023 MB**
1. Entfernen Sie das Häkchen bei **TEMP-Verzeichnis erstellen**, wenn es bereits markiert ist
1. Klicken Sie auf **Laden/Speichern**
1. Klicken Sie auf `Start RAMDisk`, und es sollte ein neues Fenster für Ihre .img erscheinen
1. Legen Sie dort alle Dateien und/oder Ordner ab, die das Homebrew erwartet, und/oder Dateien, die Sie verwenden möchten
1. Klicken Sie im RAMDisk-Programm auf `Save Disk Image Now`
1. Speichern Sie `romname.img` im Ordner `ramdisks` im Verzeichnis der .nds-Datei. Wenn sie noch nicht existiert, erstellen Sie sie
1. Klicken Sie auf `Stop RAMDisk`, wenn Sie fertig sind
1. Öffnen Sie in TWiLight Menu++ die Einstellungen pro Spiel für Ihr Homebrew
1. RAM-Disk auf 0 setzen
1. Starten Sie Ihr Homebrew, und es sollte Ihre RAM-Disk lesen

Wenn Sie die anderen RAM-Disk-Slots für eine einzelne Homebrew-Anwendung nutzen möchten, verwenden Sie die Erweiterung `.img1` für RAM-Disk-Slot 1 usw.
{:.alert .alert-info}
