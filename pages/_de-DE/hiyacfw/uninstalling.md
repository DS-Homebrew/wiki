---
lang: de-DE
layout: wiki
section: hiyacfw
title: Deinstallieren
long_title: Deinstallation von hiyaCFW
description: Wie man hiyaCFW von Nintendo DSi deinstalliert
---

hiyaCFW ist nur auf der SD-Karte vorhanden und nicht auf Ihrem NAND. Bevor Sie fortfahren, sollten Sie alle Daten auf Ihrem SDNAND sichern, die Sie behalten möchten. Sie können lernen, wie Sie das tun, indem Sie Abschnitt III des [dsi.cfw.guide](https://dsi.cfw.guide)'s [DSiWare Backups](https://dsi.cfw.guide/dsiware-backups.html#section-iii---extracting-the-save-file-optional) Anleitung.

### Deinstallieren
1. Lösche `hiya.dsi` vom Stammverzeichnis der SD-Karte
1. Lösche den `hiya` Ordner
1. Löschen den `Import`, `Foto`, `Fortschritt`, `geteil1`, `geteilt2`, `sys`, `title`, `Ticket`und `tmp` Ordner

### Unstart-Einstellungen ändern

Wenn Sie Unlaunch so eingestellt hatten, dass hiyaCFW automatisch gebootet wird, sollten Sie diese Einstellungen ändern, da Sie es jetzt nicht mehr verwenden.

1. Legen Sie Ihre SD-Karte in Ihren Nintendo DSi ein und starten Sie die Konsole, während Sie <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt halten
   - Dies öffnet das Unlaunch Datei-Menü
1. Gehen Sie zu `OPTIONEN` und setzen Sie `NO BUTTON` auf Ihre gewünschte Anwendung
   - Wenn Sie das System-NAND automatisch booten möchten, setzen Sie es auf die Anwendung `Launcher`
   - Wenn Sie TWiLight Menu++ automatisch booten möchten, wählen Sie die Datei `BOOT.NDS`
1. Wählen Sie `SAVE & EXIT`
