---
lang: de-DE
layout: faq
section: nds-bootstrap
title: FAQ & Fehlerbehebung
long_title: nds-bootstrap FAQ & Fehlerbehebung
description: FAQ & Fehlersuche für nds-bootstrap
---

#### Ich habe Probleme mit meinen ROMs, was soll ich tun?
- Stellen Sie sicher, dass Sie auf der neuesten Version von [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) und [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) sind, wenn Sie es verwenden (Updateanweisungen werden in jeder Release-Seite bereitgestellt)
- Überprüfen Sie [die nds-bootstrap Kompatibilitätsliste](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) um zu sehen, ob dies ein bekanntes Problem auf der neuesten Version von nds-bootstrap ist
- Versuche mit allen Cheats für dieses Spiel deaktiviert, da einige Cheats im Moment nicht mit nds-bootstrap kompatibel sind Drücken von <kbd class="l">L</kbd> im Cheats Menü des Spiels auf **TW**i**L**ight Menu++ wird alle Cheats dafür deaktivieren
- Wenn es vorher funktioniert hat, löschen Sie die `fatTable` und `PatchOffsetCache` Ordner in `sd:/_nds/nds-bootstrap/`
- Führen Sie das Spiel mit verschiedenen Einstellungen aus, z. B. ARM9-CPU-Geschwindigkeit, Async-Kartenlesung, DS/DSi-Modus, Klangqualität, Kartenlese-DMA usw.
    - Mit **TW**i**L**ight Menu++, ändern Sie alle Einstellungen pro Spiel auf `Standard`
    - Wenn es eine bestimmte Einstellung pro Spiel gibt, die Ihr Problem verursacht, melden Sie dies bitte im [GitHub Repository](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- Wenn vorhanden, löschen Sie die Cheat-Datenbank (`usrcheat.dat`) in `sd:/_nds/TWiLightMenu/Extras`
- [Führen Sie einen erneuten Dump des ROM durch](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games), um sicherzustellen, dass es nicht beschädigt ist
- Wenn Sie alle oben genannten Schritte befolgt haben, fragen Sie auf dem [Discord-Server](https://discord.gg/fCzqcWteC4) nach
- Wenn der Server sagt, dass es sich um ein nds-bootstrap-Problem handelt, überprüfen Sie, ob das Spiel noch nicht auf GitHub gemeldet wurde
    - Überprüfen Sie auch die geschlossenen Probleme, falls bereits ein anderes Problem geschlossen wurde
    - Wenn kein GitHub-Problem damit verknüpft ist, erstellen Sie einfach ein neues
- Wenn bis zu diesem Zeitpunkt keine Lösung gefunden wurde, aktualisieren Sie bitte die [Kompatibilitätsliste](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Warum gibt es Probleme beim Laden von ROMs, obwohl sie nativ ausgeführt werden?
nds-bootstrap patcht die ROM-Funktionen so, dass sie von einer SD-Karte aus laufen, da die ROMs fest codiert sind, um von Slot-1 zu lesen. Es gibt auch zeitliche Probleme und AP-Maßnahmen (die meisten bereits beseitigt sind), die beide dazu führen werden, dass die ROMs nicht richtig funktionieren.

#### Warum nds-bootstrap über eine normale Flashkarte verwenden?
- Bestimmte kompatible ROMs werden in RAM geladen, so dass die Ladezeiten schneller als normale Game Cards sein können
- Sie können den VRAM Speicherbus auf 32-Bit erweitern
- Verwende die zusätzliche CPU-Geschwindigkeit der DSi, was eine bessere Leistung in einigen Spielen ermöglicht
- Verbessern Sie Ihre Audio mit 48 kHz
- DSi Modus verwenden und DSi Funktionen erlauben
- Es wird weniger Batteriestrom verbraucht
- Mit bestimmten Spielkarten können Sie IR in Ihrer Anwendung verwenden
- nds-bootstrap ist Open Source, was bedeutet, dass Entwickler es immer aktualisieren können, um Fehler und andere Dinge zu beheben, auch wenn das Projekt eingestellt wird
- Der DS Memory Expansion Pak ist emuliert und das bedeutet, dass Spiele, die Zubehör benötigen, funktionieren
    - Derzeit wird er nur vom *Nintendo DS Browser* emuliert
- Tausche die oberen und unteren Bildschirme in kompatiblen Spielen für komfortablere Spiele, oder auf Systemen mit kaputtem oder entferntem Bildschirm
- Screenshots aufnehmen und Werte im RAM im Ingame-Menü bearbeiten

#### DS/DS Lite: Warum nds-bootstrap auf einer DS-Flashkarte verwenden?
- Bestimmte kompatible ROMs werden in den Memory Expansion Pak (oder Slot-2 Flashkarten mit RAM) geladen sodass Ladezeiten schneller als normale Spielkarten sein können
- 400+ DSiWare-Titel können über integrierte Patches und eine Spender-ROM eines SDK5 DS Titels ausgeführt werden
    - Beachten Sie, dass nds-bootstrap immer für DSiWare verwendet wird, unabhängig von der `Game Loader` Einstellung in TWLMenu++ Einstellungen
    - Nicht alle DSiWare-Titel können speichern, da es schwierig ist, Speicherunterstützung für diese hinzuzufügen und/oder sie speichern mehr als eine Datei im Speicher-Dateisystem
    - Bestimmte DSiWare benötigt *Lufia: Curse of the Sinistrals* als Spender-ROM gesetzt
- Wenn Ihr Flashcard-Kernel einen bestimmten ROM nicht ausführen kann, kann nds-bootstrap stattdessen verwendet werden und kann pro Spiel eingestellt werden
- Tausche die oberen und unteren Bildschirme in kompatiblen Spielen für komfortablere Spiele, oder auf Systemen mit kaputtem oder entferntem Bildschirm
- Screenshots aufnehmen und Werte im RAM im Ingame-Menü bearbeiten

#### Was ist ein Donor-ROM?
Im nds-bootstrap, wenn ein Spiel nicht bootet, wird eine andere ROM verwendet, um ARM7 (und ARM7i, Wenn verfügbar) Binärprogramm für das zu laufende Spiel anstelle des eigenen besagten Binärprogramms.     
Eine Spender-ROM kann mit **TW**i**L**ight menu++ gesetzt werden.
- **Flashcards im DS-Modus:** Die unterstützten DSi-Exclusive/DSiWare Titel erfordern ein SDK5 DS ROM als Donor-ROM gesetzt
- **DSiWarehax:** Da sowohl DSi-Enhanced Spiele als auch (meist) DSi-Exclusive/DSiWare Spiele unterschiedliche MBK-Einstellungen enthalten DSi-Enhanced Spiele werden nicht im DSi Modus booten ohne einem Donor-ROM. Durch Setzen eines DSi-Exclusive/DSiWare-Titels als Spender ROM, DSi-Enhanced Spiele können in den MBK-Einstellungen des DSiWare-Titels ausgeführt werden, auf dem der Exploit verwendet wird
    - Auf DSi, wenn **TW**i**L**Nacht Menu++ erkennt, dass kein Spender-ROM gesetzt ist *Nintendo DSi Sound* und/oder ein gültiger von dir gestarteter Titel werden automatisch als Donor-ROMs gesetzt
- **CycloDS iEvolution:** Gleicher Fall mit DSiWarehax, aber DSi-Exclusive/DSiWare-Titel erfordern ein DSi-Enhanced Spiel als Donor ROM statt umgekehrt

#### Was ist die beste Donor-ROM?
Es gibt keine *beste* Lösung. Die meisten ROMs von TWL-Titeln können als Donor-ROM eingestellt werden.     
Auf DS-Flashcards kann jeder SDK5 DS-Titel als Donor-ROM für DSiWare eingestellt werden.

Beispiele:
- **DSiWarehax auf DSi:** *Nintendo DSi Sound* und/oder ein gültiger ausgenutzter Titel werden automatisch als Donor ROMs, wenn einer noch nicht gesetzt wurde.
- **DSiWarehax auf 3DS:** Dump die DS WiFi Settings ROM (SDK5.5) mit GodMode9, und setzen Sie es als Donor-ROM.

#### Warum kann ich keinen Donor-ROM einstellen?
Wenn ein Titel eine Donor-ROM erfordert, und das ROM TWLMenu++ wird angegeben, um zu finden, zeigt nicht die Option, es als eine Option zu setzen (vorausgesetzt, du bist nach unten gescrollt), dann finden Sie eine andere ROM als Spender.

#### Was ist ein Nightly und wo bekomme ich ihn?
Ein Nightly-Build wird für den letzten Commit erstellt. Nightly-Builds können instabil sein, haben aber die neuesten Fehlerbehebungen enthalten. Sie können nächtliche Builds für nds-bootstrap [aus dem TWLBot/Builds GitHub-Repository](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z) beziehen.

#### Warum funktionieren meine Cheats nicht?
- Einige Cheats haben möglicherweise Tastenaktivierer oder andere Bedingungen, die erfüllt werden müssen. Überprüfe die Beschreibung des Cheats für weitere Informationen
    - Im **TW**i**L**ight Menu++ können Sie Y drücken, um die Informationen eines Cheats anzuzeigen, falls verfügbar
- Die meisten Cheats wurden für den Einsatz im DS Modus entwickelt und funktionieren möglicherweise nicht korrekt, wenn sie im DSi Modus ausgeführt werden. Wenn das Spiel DSi-Enhanced ist, versuche es so einzustellen, dass es im DS Modus läuft
- Die Art und Weise, wie E-Cheats in nds-bootstrap implementiert werden, ist derzeit defekt, was bedeutet, dass sie möglicherweise nicht funktionieren. Dein Cheat benutzt diesen Typ, und es ist nicht bekannt, wann dieses Problem behoben wird

Weitere Informationen zu Cheats finden Sie im Bereich [Action Replay Cheats auf der Retail ROMs Seite](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Wie kann ich Screenshots machen?
Du kannst Screenshots vom Hauptbildschirm aus im Spielmenü machen. Standardmäßig wird das in-game Menü durch Drücken von <kbd class="l">L</kbd> + <kbd>Unten</kbd> + <kbd>SELECT</kbd>, dann wählen Sie `Screenshot.`, ändern Sie bei Bedarf die VRAM Bank und drücken Sie <kbd class="face">A</kbd>, um den Screenshot zu speichern.

Um Ihre Screenshots auf Ihrem PC anzeigen zu können, müssen Sie `sd:/_nds/nds-bootstrap/screenshots extrahieren. ar`, innen werden alle Ihre Screenshots im BMP-Format. Es wird auch zusätzliche leere BMP-Dateien geben, um die TAR-Datei auf 50 zu laden, diese können einfach ignoriert oder gelöscht werden.

nds-bootstrap kann nur 50 Screenshots in den `Screenshots passen. ar`, also sollten Sie sie entpacken und den ZAR löschen, sobald Sie in der Nähe sind. nds-bootstrap wird dann beim nächsten Laden eines Spiels ein neues TAR generieren.

#### Was ist der Hauptbildschirm und warum kann er nur Screenshots haben?
Der "Hauptbildschirm" ist welcher Bildschirm mit der Haupt-Engine gezeichnet wird, die entweder physikalischen Bildschirm sein kann. Normalerweise ist es der Bildschirm, auf dem das Hauptspiel stattfindet, und wenn ein Bildschirm über 3D verfügt, dann ist das immer der Hauptbildschirm. Es wird immer der obere Bildschirm sein, wenn im Spiel Menü.

Der Grund, warum Screenshots nur vom Hauptbildschirm gemacht werden können, ist eine Hardwarebeschränkung des Nintendo DS, Es hat keinen Framebuffer, aber es hat eine Display-Capture-Funktion, die es erlaubt, die Ausgabe des Hauptmotors zu erfassen. Dies wird meist von Spielen verwendet, um 3D auf beide Bildschirme zu rendern, sondern kann auch verwendet werden, um Screenshots zu machen.

#### Was ist die "VRAM bank", die ich bei der Aufnahme eines Screenshots zu wählen?
Wenn ein Screenshot mit nds-bootstrap gemacht wird, muss es die DS-Aufnahmefunktion nutzen, um einen Frame von der Haupt-Engine zu erfassen Allerdings kann diese Display-Aufnahme nur auf VRAM geschrieben werden und erfordert eine der ersten vier Banken. nds-bootstrap wird versuchen, eine Bank auszuwählen, die nicht für die Haupt-Engine verwendet wird, daher können Sie dies normalerweise einfach ignorieren aber in manchen Fällen werden alle vier möglichen VRAM-Banken für die Haupt-Engine verwendet und daher ist es nicht möglich, einen perfekten Screenshot zu machen und Sie müssen die Bank auswählen, die Sie am besten finden.

#### Kann ich mit nds-bootstrap online Spiele spielen?
Spiele online mit nds-bootstrap zu spielen wird genauso funktionieren wie mit echten Game Cards. Auf der [Wi-Fi-](../ds-index/wifi) Seite finden Sie Informationen zum Verbinden mit einem alternativen Online-Service.
- Wenn du ein DSi-Enhanced Spiel im DS-Modus spielst, bist du auf ungesicherte oder WEP-Netzwerkverbindungen beschränkt

#### Kann ein Spiel so eingestellt werden, dass 133 MHz (TWL) CPU-Geschwindigkeit meine Konsole beschädigt wird?
Nein. Obwohl nicht alle Spiele unter dieser Einstellung korrekt funktionieren, wurden DSi und 3DS entwickelt, um diese CPU-Geschwindigkeit zu erreichen.
- Wenn du ein Problem mit einem Spiel mit 133 MHz (TWL) CPU-Geschwindigkeit findest, erstellen Sie ein Problem auf der [**TW**i**L**ight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues) detailliert die Effekte, so dass es nicht mit dieser CPU-Geschwindigkeit gestartet werden kann

#### Kann ich Spiele mit nds-bootstrap beschleunigen?
Während die TWL-CPU-Geschwindigkeit die Verzögerung verringern kann, kann nds-bootstrap Spiele nicht mit schnelleren Geschwindigkeiten ausführen.

#### Kann ich Tasteneingaben mit nds-bootstrap neu zuordnen?
Nein. Da nds-bootstrap nativ Spiele ausführt, kann es die Funktion der meisten Tasten nicht ändern. Die einzige Möglichkeit wäre, das Spiel selbst zu modifizieren oder Cheat-Codes zu verwenden.

#### Wie spiele ich randomisierte Pokémon-ROMs mit nds-bootstrap?
Pokémon HeartGold/SoulSilver, Black/White und Black 2/White 2 haben Maßnahmen gegen Piraterie, die manuell aktiviert werden müssen, *bevor* die ROM randomisiert wird. Sie können dies mit dem [DS-Scene ROM Tool](https://gbatemp.net/download/35735/) tun.
- Zufallsgenerierte ROMs können nicht wie die Vanilla-Versionen dieser Spiele on-the-fly mit AP gepatcht werden, da die Zufallsgenerierung eines ROMs viel zu viele einzigartige mögliche Ausgaben hat, als dass man sie mit **TW**i**L**ight Menu++ sinnvoll integrieren könnte

#### Was sind DSi-Binärdateien? Wie bekomme ich sie?
DSi Binärdateien sind die Teile des Spielcodes für DSi (und 3DS) Systeme für die Verwendung der DSi-Funktionen, B. Kameras und verbesserte Wi-Fi-Funktionen. Ältere Dumpingmethoden haben diese möglicherweise nicht richtig gekippt.

- ROMs ohne die DSi Binärdateien können immer noch auf jeder Konsole im DS Modus gespielt werden, in dem es ausgeführt wird, als ob das Spiel auf einem Nintendo DS Phat/Lite gespielt würde

Um eine ROM zu erhalten, die die DSi Binärdateien enthält, dump [erneut deine Spielkarte](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games).
