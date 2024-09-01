---
lang: de-DE
layout: wiki
section: nds-bootstrap
title: Glossar
description: Glossar für nds-bootstrap
---

## Einstellungen
Diese können in den Einstellungen von TWiLight Menu++ pro Spiel gefunden werden. Einige dieser Optionen können auch über das Menü von nds-bootstrap im Spiel geändert werden

### SDK-Ver
Die Version des Software Development Kit (SDK), die zum Kompilieren des ROM verwendet wurde.

### Titel-ID
Die ID, die am unteren Rand des Aufklebers der Spielkarte angezeigt wird (z. B. `NTR-ASME-USA`). Sie wird aus dem ROM durch Lesen des Headers abgerufen.

### Speichernummer
Die Speicherdatei für das Spiel hat die Dateierweiterung `.savX`, wobei X die angegebene Speichernummer ist, wenn die Speichernummer nicht 0 ist. Dies ermöglicht bis zu 10 Speicherdateien für ein und dasselbe ROM.

### Ausführen in
Der Modus, in dem das ROM ausgeführt werden soll. Dies betrifft die Optionen ARM9 CPU Speed und VRAM Mode. Die Einstellung auf DSi Mode für ROMs, die dies nicht unterstützen, wird wahrscheinlich keine Auswirkungen haben.

### ARM9-CPU-Geschwindigkeit
Ändert die Geschwindigkeit, mit der die ARM9-CPU läuft. ROMs, die im DS-Modus laufen, verwenden standardmäßig 67 Mhz (NTR). Dies kann auf 133 Mhz (TWL) geändert werden, um Verlangsamungen zu verringern, kann aber auch Probleme verursachen. ROMs, die im DSi-Modus laufen, können nur auf 133 Mhz (TWL) eingestellt werden.

### VRAM-Modus
Ändert den Modus des Video Random Access Memory (VRAM) des Systems. ROMs die im DS Modus laufen, verwenden standardmäßig den DS VRAM Modus. Dies kann in den DSi VRAM Modus geändert werden, tut aber nichts und kann zu visuellen Problemen führen. ROMs die im DSi Modus ausgeführt werden, können nur im DSi VRAM Modus gesetzt werden. Wenn du im DSi Modus einen TWL-Typ (DSi-Enhanced oder DSiWare) ROM spielst, wird der VRAM Modus durch das Spiel selbst eingestellt.

### Karten-Lese-DMA
Ermöglicht die Verwendung von Direct Memory Access (DMA) für Kartenlesungen. Diese Einstellung kann ROMs etwas beschleunigen, kann aber auch Probleme verursachen. Weitere technische Informationen finden Sie im [DS-Index](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### Direktes Booten
Erscheint nur bei Homebrew-ROMs auf Flashcards. Wenn Sie dies auf `Ein` setzen, wird nds-bootstrap beim Starten des ROMs nicht verwendet. Dies ist nützlich für Homebrew-ROMs, die nds-bootstrap nicht benötigen oder damit arbeiten.

### Bootstrap
Ändern Sie, ob das ROM mit dem Release oder Nightly Build von nds-bootstrap ausgeführt werden soll. Informationen zu Nightly Builds finden Sie in der [nds-bootstrap FAQ](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Bildschirmseitenverhältnis
Auf dem 3DS kann das Bildseitenverhältnis von 4:3 (Standard auf DS/DSi) auf 16:10 geändert werden. Funktioniert nur, wenn [das Breitbildformat aktiviert ist](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).
