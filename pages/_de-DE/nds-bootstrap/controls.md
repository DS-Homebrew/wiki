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
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Oben</kbd> + <kbd class="face">X</kbd> für 1 Sekunde: Tausche die Bildschirme
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Unten</kbd> + <kbd class="face">A</kbd> für 2 Sekunden: Dump RAM auf `sd:/_nds/nds-bootstrap`, als `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Unten</kbd> + <kbd class="face">B</kbd> für 2 Sekunden: Zurück zum Loader
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> für 2 Sekunden: Spiel zurücksetzen
  - Viele Spiele unterstützen standardmäßig das Drücken dieser Tastenkombination, aber dadurch wird sie zwangsweise zurückgesetzt
- <kbd class="l">L</kbd> + <kbd>Unten</kbd> + <kbd>Select</kbd>: Öffnen Sie das Menü im Spiel
   - <kbd class="r">R</kbd>: Um ein Bild vorrücken
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
      - <kbd class="face">Y</kbd>: Geben Sie eine Adresse an, zu der gesprungen werden soll
        - <kbd>Oben</kbd>/<kbd>Unten</kbd>: Erweitern/Verringern des ausgewählten Wertes
        - <kbd>Links</kbd>/<kbd>Rechts</kbd>: Wählen Sie einen Wert
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Zurück zum RAM Viewer/Editor an der angegebenen Adresse
      - <kbd>SELECT</kbd>: Umschalten zwischen [ARM7- und ARM9-Speicherkarten](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
   - RAM Editor
      - <kbd>Oben</kbd>/<kbd>Unten</kbd>/<kbd>Links</kbd>/<kbd>Rechts</kbd>: Wählen Sie einen Wert
      - <kbd class="face">A</kbd>: Ausgewählten Wert ändern
         - <kbd>Oben</kbd>/<kbd>Unten</kbd>: Wert um 1 Stunde erhöhen/verringern
         - <kbd>Links</kbd>/<kbd>Rechts</kbd>: Wert um 10 Stunden erhöhen/verringern
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Ändere den Wert
      - <kbd class="face">B</kbd>: Zurück zum RAM Viewer
      - <kbd class="face">Y</kbd>: Geben Sie eine Adresse an, zu der gesprungen werden soll
        - <kbd>Oben</kbd>/<kbd>Unten</kbd>: Erweitern/Verringern des ausgewählten Wertes
        - <kbd>Links</kbd>/<kbd>Rechts</kbd>: Wählen Sie einen Wert
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Zurück zum RAM Viewer/Editor an der angegebenen Adresse
- Die Rückkehr zum Lader funktioniert möglicherweise bei einigen O3DS-Modellen nicht, und im B4DS-Modus funktioniert sie nicht
- Die Tastenkombination zum Öffnen des Menüs im Spiel kann in den TWiLight Menu++ Einstellungen geändert werden
- Präzise Lautstärkeregelung kann in den TWiLight Menu++ Einstellungen ein- oder ausgeschaltet werden
- Screenshots werden auf `sd:/_nds/nds-bootstrap/screenshots.tar` gespeichert. Diese Datei kann mit einem Archiv-Viewer wie [7-Zip](https://www.7-zip.org/) geöffnet werden
- Screenshots sind im B4DS-Modus derzeit nicht möglich
