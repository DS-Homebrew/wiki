---
lang: de-DE
layout: faq
section: hiyacfw
title: FAQ & Fehlerbehebung
long_title: hiyaCFW FAQ & Fehlerbehebung
description: FAQ & Fehlersuche für hiyaCFW
---

#### Wie installiere ich Anwendungen oder DSiWare auf dem SDNAND des hiyaCFW?
Sie müssen [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) verwenden, um Anwendungen auf dem SDNAND zu installieren, aber ältere DS Homebrew ist möglicherweise nicht kompatibel.
- Wenn Sie Game Card Dumps installieren möchten, sollten Sie einen [Forwarder](../ds-index/forwarders) verwenden

#### Warum erhalte ich den Fehlercode #-2435-8325?
Wenn Ihr Nintendo DSi beim Booten einen Fehler in diesem Format anzeigt, wobei das # eine Zahl ist, bedeutet das, dass Bootstage 2 denkt, dass etwas mit Ihrem SDNAND nicht stimmt. Dies wird normalerweise durch eine [Neuinstallation von hiyaCFW](installing) behoben.

#### Warum erhalte ich beim Booten von hiyaCFW die Meldung "Ein Fehler ist aufgetreten"?
Wenn das Nintendo DSi-Menü ein Problem feststellt, wird normalerweise diese allgemeine Fehlermeldung angezeigt, einige der Ursachen sind:

##### Der Fehler mit dem freien Speicherplatz
Das Nintendo DSi-Menü hat einen Fehler bei der Überprüfung des freien Speicherplatzes auf großen Speichergeräten. Während dies auf dem eigentlichen NAND nicht passieren kann (da der Chip nur 256 MiB groß ist), kann es bei der Verwendung einer SD-Karte passieren.

Was funktioniert und was nicht, geht durch jeden anderen Bereich von zwei Gibibytes. Zum Beispiel funktioniert ein freier Speicherplatz von 0-2 GiB, aber 2-4 GiB funktionieren nicht. Das Gleiche gilt für 4-6 GiB gegenüber 6-8 GiB, bis Sie die Größe Ihrer SD-Karte erreichen.

Die neueste hiyaCFW-Version kann Dummy-Dateien erstellen, um dieses Problem zu umgehen. Stellen Sie also sicher, dass Sie die neueste Version von [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) herunterladen und `hiya.dsi` aus "for SDNAND SD card" in das Stammverzeichnis Ihrer SD-Karte kopieren.

##### Über 39 Titel
Das Nintendo DSi-Menü hat ein Limit von 39 Titeln. Wenn Sie mehr als das haben, löschen Sie einige aus den Ordnern in `sd:/title` oder verwenden Sie [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest), um sie zu deinstallieren.

##### Zu viel Speicherplatz durch DSiWare belegt
Es gibt auch ein Limit von 200 Blöcken (25 MB) für DSiWare im Ordner `00030004`. Dies kann umgangen werden, indem DSiWare mit [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) als Systemanwendungen installiert wird.

##### Ungültiger Titel
Beim Hinzufügen von Titeln zu hiyaCFW sind mehrere Dinge zu beachten:
- Spielkarten-Dumps können nicht ausgeführt werden, ohne dass ein [Forwarder](../ds-index/forwarders) verwendet wird
- Homebrew muss mit modernen Tools korrekt erstellt werden, damit es über das Nintendo DSi-Menü funktioniert
