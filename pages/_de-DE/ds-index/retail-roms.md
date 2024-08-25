---
lang: de-DE
layout: wiki
section: ds-index
category: reference
title: Einzelhandels-ROMs
description: Informationen zu DS-Spielen für den Einzelhandel
---

### Kopierschutz
AP (Anti-Piracy) ist eine Methode, die von den Entwicklern eingesetzt wird, um legale Käufe zu erzwingen und Raubkopien zu verhindern. Dies kann entweder über den Lader oder das ROM selbst umgangen werden.

- Bei nds-bootstrap kann es eine `.ips-Datei` laden, um die genannten Patches zu umgehen. Diese `.ips-Datei` wird von nds-bootstrap im RAM angewendet, so dass die ROM-Dateien intakt bleiben können. Ein Paket von `.ips-Dateien` ist im Lieferumfang von TWiLight Menu++ enthalten
- Für Wood R4 sind diese Patches in der Software selbst enthalten, Sie müssen das ROM selbst nicht ändern

Wenn es keine `.ips-Datei` für Ihr ROM gibt oder Ihre Software Ihr ROM nicht patcht, können Sie versuchen, das ROM selbst mit dem [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/) direkt zu ändern.

### Cloneboot
Cloneboot ist, wenn ein Spiel seine eigenen geladenen ARM7- und ARM9-Binärdateien an eine andere Konsole sendet. Sie wird von DS Download Play für den Einzelkarten-Mehrspielermodus verwendet. Nicht alle Spiele mit Single-Card-Multiplayer verwenden jedoch Cloneboot.

### Dateien speichern
Nintendo DS-Cartridges haben 4 bekannte Speichertypen:

- EEPROM - Elektrisch löschbarer programmierbarer Nur-Lese-Speicher
- FLASH
- FRAM - Ferroelektrischer Random-Access-Speicher
- NAND - NOT-AND

Es gibt verschiedene Formate, die je nach Ladeprogramm verwendet werden können, aber nds-bootstrap verwendet das Rohformat `.sav`. Wenn Sie eine Datei in einem anderen Format gespeichert haben, können Sie sie auf der folgenden Website konvertieren: http://www.shunyweb.info/convert.php.

### Montage
Assemblersprache ist eine Low-Level-Programmiersprache mit einer engen Verbindung zwischen den Anweisungen der Sprache und den Anweisungen des Prozessors. Auf dem DS liegt der Assemblercode entweder in Form von ARM- oder THUMB-Befehlen vor, wobei die THUMB-Befehle eine Untermenge der ARM-Befehle sind. THUMB ist nützlich, um Speicherbandbreite zu sparen, da es 16-Bit-Befehle anstelle der regulären 32-Bit-Befehle verwendet, die ARM verwendet.

Weitere Informationen zur Montageanleitung sowie viele weitere technische Informationen zum DS und DSi finden Sie auf [GBATEK](https://problemkaputt.de/gbatek.htm).

### Karte lesen DMA
DMA (Direct Memory Access) ist eine effizientere Methode zum Lesen von Daten als die Verwendung der CPU. Während der Datenübertragung kann der Code noch ausgeführt werden, weshalb dies die bevorzugte Art des Datenzugriffs ist.

Sie können ein Spiel, das DMA verwendet, auf$gba erkennen, indem Sie das DMA-Protokoll auf ARM9 aktivieren. Ein DMA-Zugriff auf die Karte verwendet AF000001 als dritten Parameter.
- Zum Beispiel: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay Cheats
Action Replay Cheat-Codes sind Codes, die es Ihnen ermöglichen, niedrig programmierbare Änderungen im Speicherbereich Ihres Lieblingsspiels vorzunehmen. Diese Änderungen reichen von einfachen Wertänderungen bis hin zu extrem fortgeschrittenen ASM-Änderungen, die beide das Spielerlebnis völlig verändern können.

Flashcards können die Vorteile von Cheat-Codes nutzen, indem sie Cheat-Datenbanken verwenden. Die Cheat-Funktionalität ist jeweils in den Karteikartenkern integriert. Die folgenden Kernel können Cheats verwenden:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/Digital-basierte Lösungen können ebenfalls die Vorteile der Cheat-Datenbanken nutzen, die derzeit verfügbare Software kann Folgendes verwenden:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - Mit NitroHax können Sie Cheats mit echten Game Cards von einer Flashcard verwenden. Die hier verwendete Engine lädt die gesamte cheats.xml-Datenbank in den begrenzten Arbeitsspeicher des Nintendo DS und versucht, die Dinge von dort aus zu verwalten. Dies stellt eine ernsthafte Einschränkung für die Anzahl der Cheats dar, da NitroHax keine Cheats.xml-Datei über 2,4 MB laden wird
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` oder `usrcheat.dat`)
   - NitroHax3DS ist eine Version von NitroHax, die von der SD-Karte des Systems auf DSi oder 3DS läuft. Die Originalversion verwendet cheats.xml mit der gleichen Begrenzung von 2,4 MB wie das ursprüngliche NitroHax, aber es gibt auch einen Fork, der Cheats aus einer usrcheat.dat-Datenbank ohne Größenbegrenzung lädt
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ liest die `usrcheat.dat` und sendet die aktivierten Cheat-Werte an eine andere Datei, die von nds-bootstrap abgeholt wird
   - Die in nds-bootstrap verwendete Cheat-Engine basiert auf der in NitroHax verwendeten. Da die Cheat-Datei jedoch nur aktivierte Cheats für den jeweiligen Titel enthält, gibt es nur eine Begrenzung für die Anzahl der aktivierbaren Cheats, nicht für die Größe der Datenbank

Für die vollständigste Cheat-Datenbank wird die [NDS Cheat Database von DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711) empfohlen.

Cheat-Codes haben im Allgemeinen die Typen 0 bis F, und hier ist eine (unfertige) Beschreibung von ihnen:

- Der Codetyp 0xE ist ein 32-Bit-Codetyp, der es ermöglicht, mehrere Schreibvorgänge an mehreren aufeinanderfolgenden Adressen auf einmal durchzuführen. Im Wesentlichen handelt es sich dabei um den grundlegenden 32-Bit-RAM-Schreibcode-Typ (0x0), nur dass hier keine Adressen neben den zu schreibenden Werten aufgeführt sind. Stattdessen ist der Codetyp 0xE so programmiert, dass er automatisch von einer Startadresse aus verzweigt und dann die Adressen bestimmt, an die geschrieben werden soll. Von dort aus müssen Sie nur noch den Betrag eingeben, auf den geschrieben werden soll, damit er seine Aufgabe erfüllt
  - Es ist bekannt, dass Cheat-Codes dieser Art normalerweise nicht mit nds-bootstrap funktionieren
- DeadSkullzJr arbeitet an einer umfassenderen Liste von Cheat-Code-Beschreibungen, die hier verlinkt wird, sobald sie fertig ist

### Demonstrations- und Vertriebstitel:
Demonstrationstitel (Demos) unterscheiden sich in vielerlei Hinsicht von ihren Pendants im Einzelhandel. Der offensichtliche Indikator dafür ist, dass es sich bei dem vorliegenden Titel um eine Demo der Verkaufsversion handelt, also um einen Vorgeschmack auf das, was in der Zukunft auf uns zukommt, wenn die vollständige Verkaufsversion erscheint. Im Falle der Nintendo DS-Reihe sind diese Titel oft mit dem Hinweis "Not for Resale" (nicht für den Wiederverkauf) auf den Titelaufklebern gekennzeichnet. Jede Demo hat außerdem eine andere Titel-ID als ihre Pendants im Einzelhandel, und auf der Rückseite der Kassette des Titels befindet sich ebenfalls ein "Not for Resale"-Aufkleber. Bei diesen Titeln handelt es sich in der Regel nur um Kiosk-Demos an Werbeplätzen in Geschäften und dergleichen.

Bei Vertriebstiteln ist die Situation in den meisten Fällen etwas anders, aber auch Demos können für einige Titel in der Bibliothek als Vertriebstitel gelten. In den meisten Fällen handelt es sich bei den Vertriebstiteln nur um Einzelhandelsversionen, die nur zur Schau gestellt werden oder aus einer Werbeverpackung stammen. Wie bei den Demonstrationstiteln ist auch bei diesen Titeln der Hinweis "Not for Resale" angebracht. Diese können manchmal auch in Kiosken verwendet werden, damit andere Spieler den Titel testen können. Da diese jedoch in den meisten Fällen mit ihren Pendants aus dem Einzelhandel identisch sind, weisen sie in der Regel eine zusätzliche Kennung in der Titel-ID auf dem Etikett auf.

Beispiel-ID: `DIS-NTR-NTRJ-JPN`

`DIS` - Vertrieb


### Titelbezeichnungen
Am unteren Rand des Titellabels wird die Titel-ID zusammen mit anderen Informationen angezeigt; für dieses Beispiel wird die folgende ID verwendet:

- **NTR-NTRJ-XXX**

**XXX** steht für Folgendes:

- AUS - Australien
- CHN - China
- DEN - Dänemark
- EUR - Europa (mehrsprachig)
- EUU - Europa (nur Niederländisch oder Italienisch)
- FRA - Frankreich
- GER - Deutschland
- HOL - Niederlande
- ITA - Italienisch
- JPN - Japan
- KOR - Korea
- NOE - Europa (nur Deutsch)
- NOR - Norwegen
- RUS - Russland
- SPA - Spanien
- UKV - Vereinigtes Königreich
- USA - Vereinigte Staaten

Der letzte Buchstabe der Titel-ID selbst steht für die Sprache des Titels. Unter Verwendung der Titel-ID des letzten Beispiels:

- **NTR-NTRX-JPN**

**X** steht für das Folgende:

- A - Welt (zählt nicht, da nur eine Sache sie benutzt hat)
- C - Chinesisch (vereinfacht)
- D - Deutsch
- E - Amerikanisches Englisch
- F - Französisch
- G - Griechisch
- H - Niederländisch
- I - Italienisch
- J - Japanisch
- K - Koreanisch
- M - Schwedisch
- N - Norwegisch
- O - Englisch (DSi Enhanced)
- P - Europäisch Mehrsprachig
- Q - Dänisch
- R - Russisch
- S - Spanisch
- T - Englisch (DSi Enhanced)
- U - Australisches Englisch
- V - Britisches Englisch
- W - Andere Sprachen (variabel)
- X - Andere Sprachen (variabel)
- Y - Andere Sprachen (variabel)
- Z - Andere Sprachen (variabel)

In Bezug auf die Systemidentifikatoren:

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### DSi Enhanced:

Spiele mit "DSi Enhanced"-Funktionalität sind Spiele, die einen bestimmten Aspekt der DSi-Hardware ausnutzen, aber dennoch mit dem DS Phat/Lite kompatibel sind. Diese Spiele sind als `TWL` gekennzeichnet, aber es steht immer noch "Nintendo DS" anstelle von "Nintendo DSi" auf dem Etikett.
