---
lang: de-DE
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Informationen über den Nintendo DSi und den TWL_FIRM des Nintendo 3DS
---

### CFW einrichten
Der Hauptvorteil des Modifizierens von DSi- und 3DS-Systemen besteht darin, dass du mehr Möglichkeiten mit deinen Konsolen freischalten kannst. Die Installation einer benutzerdefinierten Firmware ist recht einfach, und in den meisten Fällen benötigen Sie nur eine (Mikro-)SD-Karte. Hier finden Sie die besten Leitfäden mit Schritt-für-Schritt-Anleitungen, die Sie befolgen können:

- [3DS-Hacking-Anleitung](https://3ds.hacks.guide)
   - Blitz-Befehl: `mod 3ds`
   - TWLHelper-Befehl: `guide 3ds`
   - Kurisu-Befehl: `guide 3ds`
- [DSi-Hacking-Anleitung](https://dsi.cfw.guide)
   - Blitz-Befehl: `mod dsi`
   - TWLHelper-Befehl: `guide dsi`
   - Kurisu-Befehl: `guide dsi`

### CPU-Geschwindigkeiten
Der Nintendo DS wurde 2004 mit einem 67-MHz-Prozessor ausgeliefert, und der Nintendo DSi kam fünf Jahre später mit einem 133-MHz-Prozessor auf den Markt. Die meisten Spiele der Nintendo DS-Bibliothek wurden vor dem Erscheinen des Nintendo DSi entwickelt, und daher stand ihnen nur ein 67-MHz-Prozessor zur Verfügung. Einige Anwendungen sind an diese Taktfrequenz gebunden und funktionieren daher nicht gut mit einer höheren Taktfrequenz. Die meisten Spiele übertreffen jedoch das Original mit einer höheren Taktrate.

nds-bootstrap hat TWL Clock Speed als Option, aber es wird nicht versuchen, das ROM so anzupassen, dass es mit der höheren Taktrate richtig funktioniert. Das liegt an der Anwendung selbst, und dass Anwendungen mit einer höheren Taktfrequenz nicht funktionieren, ist KEIN Fehler auf Seiten von nds-bootstrap.

### Nintendo DSi Menü
In Version 1.4.0 werden RSA-Signaturen in der DS Game Card Whitelist nicht verifiziert. Diese Sicherheitslücke kann ausgenutzt werden und ermöglicht den Zugriff auf den ARM9-Prozessor. Es erfordert die Version 1.4.0 (sie wurde in späteren Versionen gepatcht und existierte in früheren Versionen nicht) und eine Flashcard mit einem modifizierten ROM.

Es gibt auch einen bekannten Fehler in der Art und Weise, wie das Nintendo DSi-Menü den freien Speicherplatz berechnet, der zu einem Fehler führen kann, wenn das Menü nicht vom Original-NAND stammt. Weitere Informationen finden Sie unter [hiyaCFW FAQ & Fehlerbehebung](../hiyacfw/faq#the-free-space-bug).

### Nintendo DSi Slot-1 Zugang & blockout
Der Zugriff auf Slot-1 wird beim Starten von Anwendungen aus dem Systemmenü blockiert, es sei denn, es handelt sich um den Slot-1 Launcher selbst oder die Systemeinstellungen. Um normalerweise nicht entladbare Slot-1-Kassetten zu starten, müssen Sie entweder einen Exploit in den Systemeinstellungen vornehmen oder Unlaunch installieren. Ohne diese beiden Komponenten können Sie keine nicht kopierbaren Flashcards starten und keine ROMs auf Ihre SD-Karte übertragen.

Vor Version 1.4.0 enthielt die Whitelist nur zwei Abschnitte. In Version 1.4.0 wurde ein dritter Abschnitt eingeführt, der dazu diente, Lernkarten zu blockieren, die die ersten beiden Abschnitte umgingen. Der dritte Abschnitt lädt bis zu acht verschiedene Abschnitte des ROMs und überprüft sie mit einem Hash, um festzustellen, ob das ROM manipuliert wurde. Da es jedoch keine Sicherheitsüberprüfung gibt, kann diese Adresse bei einem ausreichend großen Wert in den Ausnahmevektor/die Unterbrechungsadresse überlaufen. Das Beste daran ist, dass es auf dem ARM7 (dem Sicherheitsprozessor) läuft und somit der erste Exploit für den ARM7-Prozessor ist. Da dies vor dem Lockout der SCFG-Register geschieht, können fortgeschrittene Eigenentwicklungen (wie Slot-1-Dumper) ausgeführt werden.

Leider sind die Anforderungen sehr hoch. Es erfordert die Version 1.4.0 und eine Flashkarte mit einem modifizierten ROM. Der Exploit wurde nie offiziell veröffentlicht, da Unlaunch viel einfacher zu installieren ist und weniger Anforderungen stellt (nur ein Weg, um in Homebrew zu gelangen), aber die gleichen Vorteile bietet.

### Nintendo DSi Kamera
Mit der Nintendo DSi-Kamera-Anwendung können Sie Bilder im JPEG-Format aufnehmen und sie entweder im Systemspeicher oder auf der SD-Karte speichern. Die Art und Weise, wie es geladen wird, schränkt es auf DSi-Bilder ein, da der richtige HMAC, der in einem benutzerdefinierten EXIF-Tag gespeichert ist, fehlt. Alle benutzerdefinierten Bilder sind auf dem DSi nicht lesbar, unabhängig davon, ob sie am PC aufgenommen oder am PC bearbeitet wurden, sofern sie nicht ordnungsgemäß gespeichert wurden.

Zum Laden von Bildern wird eine `pit.bin-Datei` verwendet. Die Header-Größe an Offset 0x16 ist jedoch ungeprüft, so dass ein ausreichend großer Wert für die Header-Größe die Grenzen überschreiten und dazu führen kann, dass der Puffer überschrieben wird und zu unsigniertem Code springt. So wird Memory Pit mit Strom versorgt.

### Nintendo DSi bootstage 2
Die zweite Bootphase des Nintendo DSi lädt die "title.tmd" des Launchers in den Speicher. Sie geben jedoch keine Überprüfung der Dateigröße an, d. h. die ersten 80k Bytes werden in den RAM geladen, der Rest kann eine benutzerdefinierte Nutzlast sein. Dies ist die Grundlage des Unlaunch-Exploits.

### RTCom
RTCom ist die Verwendung der RTC des 3DS, damit die ARM7- und ARM11-CPUs miteinander kommunizieren können, auch wenn sie sich im TWL_FIRM befinden. Dadurch können die 3DS-Funktionen auch im DS(i)-Modus genutzt werden. Dazu gehören die analoge Eingabe des Circle Pads, die Aktivierung des Breitbildschirms und die Unterstützung von Gyros. Derzeit sind die einzigen öffentlichen DS-Homebrews, die RTCom nutzen, bestimmte Builds von GBARunner2, die die Gyro-Funktion des 3DS unterstützen. Um RTCom zu aktivieren, müssen Sie [TWPatch](https://gbatemp.net/threads/542694/) verwenden.
