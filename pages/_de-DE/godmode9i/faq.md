---
lang: de-DE
layout: faq
section: godmode9i
title: FAQ & Fehlerbehebung
long_title: GodMode9i FAQ & Fehlerbehebung
description: FAQ & Fehlersuche für GodMode9i
---

#### Wie komme ich beim Starten des Systems an der Anzeige "Laufwerk(e) einbauen" vorbei?
Dies geschieht, wenn Sie GodMode9i von [hiyaCFW](../hiyacfw) aus starten. Sie können <kbd class="face">X</kbd> beim Starten von GodMode9i gedrückt halten, um die NAND-Montage zu überspringen. Alternativ können Sie GodMode9i direkt von Unlaunch aus starten, um den NAND einbinden zu können.

#### Warum kann ich keine Dateien auf dem NAND hinzufügen, entfernen oder bearbeiten?
Das Bearbeiten von Dateien auf dem DSi NAND ist nicht sicher und kann leicht zu einem Brick führen, daher verzichtet GodMode9i absichtlich auf diese Möglichkeit.

#### Warum kann ich die NDS-Dateiinformationen für einige DSiWare nicht anzeigen?
Einige DSiWare, insbesondere diejenigen, die sich im Ordner `0003000f` befinden, enthalten Systemdaten und haben kein gültiges Banner.

#### Soll ich die NDS-Version oder die DSi-Version verwenden? Was ist der Unterschied?
Diese sind funktionell gleich, haben aber einen bestimmten Zweck.
- Wenn Sie GodMode9i mit einer Karteikarte benutzen, verwenden Sie die NDS-Version
- Wenn du GodMode9i auf deinem hiyaCFW SDNAND installierst, verwende die DSi-Version
- Wenn Sie GodMode9i über TWiLight Menu++ starten, werden beide Versionen identisch funktionieren
- Wenn du GodMode9i auf deinem 3DS HOME Menü installierst, verwende die CIA Version

#### Wie kann ich die Sprache ändern?
Du kannst die Sprache von GodMode9i ändern, indem du <kbd>START</kbd> drückst, die letzte Option in diesem Menü auswählst und die gewünschte Sprache wählst.

Beachten Sie, dass dies nur funktioniert, wenn GodMode9i über TWiLight Menu++ ausgeführt wird oder eine Kopie von `GodMode9i.nds/GodMode9i``.dsi` im Stammverzeichnis Ihrer SD-Karte vorhanden ist.

Sie können auch manuell einen Pfad zu einer beliebigen Übersetzungsdatei auf Ihrer SD-Karte in der Konfigurationsdatei `sd:/gm9i/config.ini` mit dem Eintrag `LANGUAGE_INI_PATH` eingeben.

#### Wie kann ich die Schriftart ändern?
Du kannst die Schriftart von GodMode9i ändern, indem du eine `.frf-Schriftartdatei` auswählst und `Schriftart laden` wählst. Um eine andere Schriftart als Standard einzustellen, legen Sie sie entweder unter `sd:/gm9i/font.frf` ab oder bearbeiten Sie die Konfigurationsdatei`(sd:/gm9i/config.ini`), um den `FONT_PATH` auf den Ort zu setzen, an dem sich Ihre Schriftartdatei befindet.

Sie finden einige vorkonvertierte Schriften im [Ressourcen-Ordner](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) des GitHub-Repositorys und können Ihre eigenen aus einem PBM-Bild und einer TXT-Datei mit den Unicode-Zuordnungen mit dem Skript [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) von GodMode9 konvertieren.

#### Wie kann ich DS-Speicher mit GBA-Speicherdaten auslesen?
GodMode9i ist in der Lage, die Speicherdaten von GBA-Cartridges zu verwenden, um die Speicherstände der meisten DS Game Cards zu löschen. ROM-Dateien und Speicherdateien über 1 MiB können auf diese Weise nicht gedumpt werden, da die Dateien unpraktisch groß sind. Dies kann auch mit Haxxstation anstelle einer DS-Flashcard gemacht werden, wenn man eine andere Möglichkeit hat, die GBA-Speicherdateien zu dumpen, die dann auf einem Computer neu kombiniert und dekomprimiert werden können.

1. Lade GodMode9i auf deine Flashcard
1. Sichern Sie Ihre GBA-Speicher!!
   - Alle Speicherdaten, die nicht gesichert wurden, gehen verloren
   - Überprüfen Sie die Dateien und finden Sie die größeren, mit 512 Byte Carts wird nicht viel helfen, während 64 oder 128 KiB speichert die meisten DS speichert in 1 oder 2 Carts passen
1. Drücken Sie im Laufwerksmenü die Tasten <kbd class="r">R</kbd> + <kbd class="face">B</kbd>, um die Speicherkarte auszuhängen
1. Werfen Sie die Flashcard aus, legen Sie eine DS Game Card und eine GBA Cartridge ein
1. Wählen Sie `NDS GAMECARD` und dann `Save`
1. Wenn Sie dazu aufgefordert werden, drücken Sie <kbd class="face">A</kbd>, um die Daten auf den GBA-Wagen zu schreiben
   - Wechseln Sie zu anderen GBA-Kassetten und wiederholen Sie den Vorgang, bis der gesamte Spielstand kopiert ist
1. Starte deinen DS mit der Slot-1-Flashkarte neu und öffne GodMode9i erneut
1. Legen Sie die erste GBA-Kassette ein, die Sie benutzt haben, und wählen Sie `GBA GAMECART`
1. Wählen Sie `DS Save`
1. Tauschen Sie alle Wagen aus, auf die Sie gekippt haben
1. Dein DS-Speicher befindet sich jetzt in `fat:/gm9i/out`, du kannst jetzt deine gesicherten GBA-Speicherdateien auf ihre Original-Cartridges zurückspielen

Wenn du die Speicherdatei wieder auf die Game Card schreiben möchtest, wähle einfach die `.sav-Datei` aus und wähle `Speicher wiederherstellen (Slot-1)`, dann tausche deine Flashcard gegen die DS Game Card, wenn du dazu aufgefordert wirst.
