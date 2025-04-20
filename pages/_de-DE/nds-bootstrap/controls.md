---
lang: de-DE
layout: wiki
section: nds-bootstrap
title: Steuerung
long_title: nds-bootstrap Steuerung
description: Tastensteuerung für nds-bootstrap
---

Diese gelten nicht für Homebrew.
- <kbd>SELECT</kbd> + <kbd>Oben</kbd>/<kbd>Unten</kbd>: Präzise Lautstärkeregelung
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 2 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">B</kbd> for 2 seconds: Return to loader
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> für 2 Sekunden: Spiel zurücksetzen
    - Viele Spiele unterstützen standardmäßig das Drücken dieser Tastenkombination, aber dadurch wird sie zwangsweise zurückgesetzt
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd>Unten</kbd> + <kbd>Select</kbd>: Öffnen Sie das Menü im Spiel
    - Screenshot
        - <kbd>Oben</kbd>/<kbd>Unten</kbd>/<kbd>Links</kbd>/<kbd>Rechts</kbd>: VRAM-Bank ändern
        - <kbd class="face">A</kbd>: Screenshot speichern
        - <kbd class="face">B</kbd>: Zurück ins Spielmenü
    - RAM Viewer
        - <kbd>Oben</kbd>/<kbd>Unten</kbd>: Scrollen
        - <kbd>Links</kbd>/<kbd>Rechts</kbd>: Schnelles Scrollen
        - <kbd class="r">R</kbd> + <kbd>Unten</kbd>/<kbd>Oben</kbd>: Schnelleres Scrollen
        - <kbd class="r">R</kbd> + <kbd>Unten</kbd>/<kbd>Oben</kbd>: Schnelleres Scrollen
        - <kbd class="face">A</kbd>: RAM-Editor aufrufen
        - <kbd class="face">B</kbd>: Zurück ins Spielmenü
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
        - <kbd>SELECT</kbd>: Switch between [ARM7 and ARM9 memory maps](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
    - RAM Editor
        - <kbd>Oben</kbd>/<kbd>Unten</kbd>/<kbd>Links</kbd>/<kbd>Rechts</kbd>: Wählen Sie einen Wert
        - <kbd class="face">A</kbd>: Ausgewählten Wert ändern
            - <kbd>Oben</kbd>/<kbd>Unten</kbd>: Wert um 1 Stunde erhöhen/verringern
            - <kbd>Links</kbd>/<kbd>Rechts</kbd>: Wert um 10 Stunden erhöhen/verringern
            - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Ändere den Wert
        - <kbd class="face">B</kbd>: Zurück zum RAM Viewer
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- Returning to loader may not work on some O3DS models, and does not work in B4DS mode when running DSiWare
- Die Tastenkombination zum Öffnen des Menüs im Spiel kann in den TWiLight Menu++ Einstellungen geändert werden
- Präzise Lautstärkeregelung kann in den TWiLight Menu++ Einstellungen ein- oder ausgeschaltet werden
- Screenshots werden auf `sd:/_nds/nds-bootstrap/screenshots.tar` gespeichert. Diese Datei kann mit einem Archiv-Viewer wie [7-Zip](https://www.7-zip.org/) geöffnet werden
