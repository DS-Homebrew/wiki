---
lang: de-DE
layout: wiki
section: twilightmenu
category: customization
title: Eigene Boot-Splashes
description: So verwenden Sie benutzerdefinierte Splash-Screens für TWiLight Menu++
---

Sie können benutzerdefinierte GIF-Dateien verwenden, um benutzerdefinierte Splash-Screens beim Booten von TWiLight Menu++ zu erstellen. Sie müssen `splashtop.gif` und `splashbottom.gif` heißen und sich in `sd:/_nds/TWiLightMenu/extras`befinden, dann setzen Sie `DSi Splash Screen` auf `Custom` in TWiLight Menu++ Einstellungen.

Die meisten GIF-Dateien bis zu einer Größe von 256x192 sollten funktionieren, mit ein paar Ausnahmen:
- GIF-Dateien mit mehr als 1 MiB (DSi-Modus) oder 256 KiB (DS-Modus) werden möglicherweise nicht mit voller Geschwindigkeit abgespielt, da sie während der Wiedergabe dekomprimiert werden
- Zwischen den beiden müssen die GIFs weniger als 10 MB (DSi-Modus) oder etwa 2 MB (DS-Modus) groß sein
- Wenn beide GIFs so eingestellt sind, dass sie in einer Endlosschleife angezeigt werden, werden sie 3 Sekunden lang angezeigt, also stellen Sie bei mindestens einem eine Schleifenanzahl ein, um die Zeit zu kontrollieren
- Die Benutzereingabe Flagge wird unterstützt, so setzen Sie es und eine lange Verzögerung auf einem Frame, wenn Sie ein Splash zeigen und warten wie die Standardeinstellungen wollen
   - Nur das GIF, das auf eine Eingabe wartet, wird angehalten, so dass das andere weiter animiert werden kann
- Bei Verwendung von lokalen Farbtabellen muss der gesamte Rahmen überschrieben werden, da die Palette des gesamten Bildschirms ersetzt wird, nicht nur der aktuelle Rahmen
- Zeilensprung- und Textrahmen werden nicht funktionieren
