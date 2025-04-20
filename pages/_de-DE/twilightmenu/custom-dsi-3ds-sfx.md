---
lang: de-DE
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS Themes - Custom SFX
description: How to use custom background music and sound effects in DSi and 3DS themes for TWiLight Menu++
---

TWiLight Menu++ unterstützt benutzerdefinierte Sounddateien in Themen. Legen Sie Ihre Sounddateien im `Sound-Unterverzeichnis` in Ihrem Themenordner ab. Für das `weiße` Thema beispielsweise würden Sie die Dateien unter `themes/white/sound/sfx.bin` bzw. `themes/white/sound/bgm.pcm.raw` ablegen. Beide Dateien sind optional, wenn `bmg.pcm.raw` fehlt, wird die Standardmusik verwendet. Das Gleiche würde mit den Soundeffekten passieren, wenn die `Datei sfx.bin` ebenfalls fehlt.

Diese Anleitung geht davon aus, dass Sie devkitPro mit mmutil installiert haben. Sie können devkitPro über die [devkitPro-Website](https://devkitpro.org/wiki/Getting_Started) beziehen.

## Sound-Effekt-Bank
Die Soundeffekt-Bank`(sfx.bin`) enthält Soundeffekte wie z. B. den Sound für die Symbolauswahl usw.

| Datei       | Beschreibung                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| startup.wav | Wird beim Starten abgespielt. Weitere Einzelheiten finden Sie im Abschnitt über den [Startsound](#startup-sound) |
| back.wav    | Zurück                                                                                                           |
| launch.wav  | Wird beim Starten eines Spiels abgespielt                                                                        |
| select.wav  | Wird abgespielt, wenn der Cursor im Menü "Einstellungen pro Spiel" und "Auswahl" bewegt wird                     |
| wrong.wav   | Wird abgespielt, wenn das Ende der Seite erreicht wird                                                           |
| switch.wav  | Wird beim Seitenwechsel abgespielt                                                                               |
| stop.wav    | Wird auf dem DSi Theme abgespielt, wenn sich der Auswahlcursor nicht mehr bewegt                                 |

Alle oben aufgeführten Dateien sind erforderlich, um eine benutzerdefinierte Soundeffektbank zu erstellen. Wenn Sie möchten, dass ein Ton stummgeschaltet wird, können Sie eine stumme Audiodatei verwenden. Das `.wav-Format` ist obligatorisch und die Kodierung *muss* PCM sein.

[Diese Datei](/assets/files/sfx-example.zip) enthält die Sounds, die in den Standard-DSi- und 3DS-Themen verwendet werden, zusammen mit dem Makefile, das verwendet wird, um sie in eine gültige sfx.bin-Datei zu erstellen. Sie können die Sounddateien nach Belieben bearbeiten und ändern, um eine eigene Sound-Effekt-Bank zu erstellen.

Um Ihre benutzerdefinierte Soundeffekt-Bank zu erstellen, öffnen Sie Ihr Terminal (oder die Befehlszeile, wenn Sie Windows verwenden), wechseln Sie in das aktuelle Verzeichnis`(cd`), in dem sich `Makefile` befindet, und führen Sie dann den Befehl `make` aus. Sie erhalten eine `sfx.bin-Datei`, die Sie in den `Sound-Unterordner` in Ihrem Themenordner kopieren können. **Diese Datei muss kleiner als 512000B = 512 kB sein**. Jede Datei, die größer ist als diese, führt entweder zu Abstürzen oder dazu, dass einige Sounds nicht vollständig abgespielt werden.

### Startsound
Während die anderen Soundeffekte mit jeder WAV-Datei mit PCM-Kodierung funktionieren, muss der Startsound in einem bestimmten Format vorliegen, um richtig zu funktionieren, da sonst eine Lücke entsteht, wenn der Startsound aufhört und die Hintergrundmusik beginnt.

Die Datei startup.wav muss **16 Bit und 16 kHz** haben. Sie können z. B. [Audacity](https://github.com/audacity/audacity/releases/latest) verwenden, um in dieses Format zu konvertieren. Sobald die Datei in Audacity geladen ist, ändern Sie die **Projektrate (Hz)** auf **16000**, drücken Sie dann **Umschalt+M** und ändern Sie das **Format** auf **16-Bit-PCM**.

Wenn Ihre Datei in Stereo ist, sollten Sie auch zu **Tracks > Mix > Mix Stereo down to Mono** gehen.

Sie müssen `PlayStartupJingle=1` in Ihrer `theme.ini` einstellen, damit der Start-Jingle abgespielt wird.


## Menü BGM
Menü BGM muss eine **16-Bit Mono** `.wav` Datei sein. Nachfolgend finden Sie die Methode zur Konvertierung von Audiodateien in dieses Format.

Im Gegensatz zu `sfx.bin` kann `bgm.wav` beliebig groß sein.

Bitte beachten Sie, dass Sie, wenn Ihre Audiodatei bereits als `.wav-Datei` vorliegt, trotzdem die unten beschriebene Methode anwenden müssen, da TWLMenu++ bestimmte Anforderungen stellt.

### Audacity
Laden Sie [die neueste Version von Audacity](https://github.com/audacity/audacity/releases/latest) herunter, um loszulegen.

Zum Konvertieren des Tons:
1. Laden Sie die Datei in Audacity
1. Wenn Ihre Datei in Stereo ist, klicken Sie auf den Song und wählen Sie `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Gehen Sie zu `Audio Setup` > `Audio Settings...`, und vergewissern Sie sich, dass die `Projekt-Samplerate` nicht auf über `48000 Hz` eingestellt ist (das ist die Grenze)

Um im richtigen Format zu exportieren:
1. Wählen Sie `Datei` > `Exportieren` > `Audio exportieren...`
1. `Speichern als Typ` auf `WAV (Microsoft)` setzen
1. `Kodierung` auf `Signed 16-bit PCM` einstellen
1. Legen Sie den Ausgabenamen `bgm.wav` fest und klicken Sie auf `Speichern`
1. Klicken Sie auf `Löschen` und dann auf `OK`, um die Metadaten zu bearbeiten

Jetzt haben Sie eine `bgm.wav-Datei`, die Sie in den `Sound-Unterordner` in Ihrem Themenordner kopieren können.

Sie sollten dann die `DSi/3DS-Theme-Musik-Option` in den TWiLight Menu++-Einstellungen auf "Theme" setzen, damit Ihre benutzerdefinierte BGM im Menü abgespielt wird.
