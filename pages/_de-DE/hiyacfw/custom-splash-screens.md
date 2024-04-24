---
lang: de-DE
layout: wiki
section: hiyacfw
title: Benutzerdefinierte Splashes
description: Wie man mit hiyaCFW benutzerdefinierte Startbildschirme verwendet
---

Mit hiyaCFW kannst du eigene Splashes entweder im `.bmp` oder `.gif`-Format erstellen. Diese müssen in den `sd:/hiya`-Ordner mit dem Namen `splashtop` für den Topscreen und `splashbottom` für den Touchscreen mit der geeigneten Dateierweiterung. Stelle sicher, dass Splashes in den Hiya-CFW-Einstellungen aktiviert sind. Die Bilder müssen nicht dasselbe Format haben, sodass eines ein BMP und das andere ein GIF ist, jedoch haben GIFs Vorrang gegenüber BMPs. Hier sind einige Details über die Anforderungen, sodass die Bilder funktionieren:

### BMP
- 16-bit (RGBA 1555, RGB 1555 oder RGB 565)
- 256 x 192 oder kleiner

### GIF
- Die meisten GIFs, kleiner oder gleich 256 x 192 funktionieren
- Diese können animiert werden, sollten aber unter 1 MiB (für ideale Performance) und unter 10MiB (maximal) groß sein
- Wenn beide GIFs unendlich lang sind, werden sie 3 Sekunden lang gezeigt, ansonsten werden sie so lange gezeigt, bis sie fertig abgespielt wurden
- Wenn ein Einzelbild die Benutzereingaben-Flagge markiert hat, wird das GIF so lange pausiert, bis die Verzögerung zu Ende läuft, oder ein Knopf gedrückt wird
- Verschachtelter und Klartext werden ***nicht*** unterstützt
- Lokale Farbtabellen werden unterstützt, ersetzen aber nicht die ganze Palette, sodass Bilder wahrscheinlich Farbpalettenprobleme bekommen werden
