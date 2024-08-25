---
lang: de-DE
layout: wiki
section: gbarunner2
title: GBARunner2 Builds
description: Informationen über die verschiedenen GBARunner2-Builds und ihre Verwendung
---


Es gibt eine Reihe von verschiedenen GBARunner2-Versionen, oder "Builds", die man verwenden kann. Sie stammen aus verschiedenen Zweigen und Abzweigungen von GBARunner2 und haben unterschiedliche Funktionen, die entweder auf verschiedene GBA-Spiele oder einige andere Funktionen abzielen. **Für die meisten Benutzer** ist es ausreichend, die mit TWiLightMenu++ gelieferte Version zu verwenden.

## DS vs DSi vs 3DS Builds

GBARunner2 hat Builds erstellt, die die zusätzliche Hardware des DSi und 3DS nutzen. Natürlich funktionieren diese DSi- und 3DS-spezifischen Builds nicht auf einem DS. Sie funktionieren jedoch auch nicht, wenn Sie GBARunner2 von einer Flashcard auf einem der Systeme, einschließlich DSi und 3DS, ausführen. Die Einzelheiten dazu werden hier nicht behandelt.

Das bedeutet, dass Sie Builds für den DS sowohl auf dem DSi als auch auf dem 3DS verwenden können, aber nicht umgekehrt.

## Gemeinsame Builds für DS, DSi und 3DS

Dies sind die Builds, die für alle drei Systemlinien vorhanden sind.

### [Master](https://github.com/Gericom/GBARunner2/releases)

Die Master-Builds oder "Haupt"-Builds sind die eigentlichen Versionen von GBARunner2. Dies sollte im Allgemeinen der stabilste Build sein. Alle anderen Zweige gelten als experimentell und nicht stabil genug, um in den Master aufgenommen zu werden. Die Master-Builds sind in verschiedene Builds für den DS, DSi und 3DS unterteilt. Sie haben jeweils den Namen des entsprechenden Systems am Ende des Dateinamens angehängt.

### [Wi-Fi-Link](https://github.com/Gericom/GBARunner2/releases/tag/v20200217-194452_0b8bbe3)

Der Wi-Fi-Link-Zweig bietet die Möglichkeit, zwei Systeme drahtlos miteinander zu verbinden. Beachten Sie, dass dies nicht über das Internet geht und aufgrund der Latenzzeit auch nie möglich sein wird. Das einzige Spiel, das mit Sicherheit eine stabile Verbindung aufrechterhalten kann, ist Advance Guardian Heroes, vorausgesetzt, Sie befolgen ganz bestimmte Anweisungen. Es erübrigt sich zu erwähnen, dass dieser Zweig in seiner jetzigen Form eine Neuheit und ein Proof of Concept ist, und nicht etwas, das man tatsächlich benutzen sollte. Einige andere Spiele können zwar eine Verbindung herstellen, aber sie sind sehr abhängig von externen Faktoren wie Störungen durch andere Wi-Fi-Signale und viele andere Dinge. Um eine Wi-Fi-Verbindung einzurichten, lesen Sie bitte die [WikiTemp-Seite](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

## DS-spezifische Builds

### ARM7DLDI vs. ARM9DLDI

**Normalerweise verwenden Sie den ARM9DLDI**, und wenn das nicht funktioniert, versuchen Sie den ARM7DLDI. Einige flashcards benötigen entweder den ARM7DLDI oder den ARM9DLDI, und einige können mit beiden funktionieren. Es gibt keine Liste, welche Flashcards mit welchen Builds funktionieren, aber wenn Sie Probleme haben, GBARunner2 zum Laufen zu bringen, sollten Sie vielleicht die andere Version ausprobieren.

Wenn Sie **TWiLight**Menu++ auf Ihrer Flashcard verwenden, können Sie in den **TWiLight**Menu++ Einstellungen zwischen ARM7DLDI und ARM9DLDI umschalten.

Es gibt keine Funktions- oder Leistungsunterschiede zwischen den beiden, sodass es sinnlos ist, beide zu testen, um zu sehen, ob ein Spiel auf dem anderen besser läuft oder weniger Probleme hat.

Weiter unten finden Sie heraus, welchen Build Sie derzeit verwenden.

### [rom3M](https://github.com/Gericom/GBARunner2/releases/tag/v20190911-201047_371815e)

Diese Verzweigung könnte hilfreich sein, wenn man versucht, ROMs, die etwas größer sind, auf dem DS auszuführen, aber es gibt eine Grenze aufgrund der begrenzten Menge an RAM, die im DS vorhanden ist. Dies ist im Grunde der Pokémon-Smaragd-Ableger für den DS.

Void Star hat [einen Fork von GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) gemacht, der den rom3M-Zweig in den neuesten Master mit einigen anderen netten Features einbindet, und dies ist der Build, der mit **TWiLight**Menu++ kommt, wenn du einen DS benutzt.

## DSi- und 3DS-spezifische Builds

Der DSi und der 3DS können in der Regel die gleichen Builds ausführen, aber aufgrund der unterschiedlichen Größe des Arbeitsspeichers zwischen dem DSi und dem 3DS kann die Kompatibilität für Spiele unterschiedlich sein. Das bedeutet, dass der DSi Probleme mit der Ausführung größerer ROMs haben könnte, die der 3DS problemlos ausführen kann.

Der 3DS hat auch einen Beschleunigungssensor-Chip für die Gyrosteuerung eingebaut, der in einem 3DS-spezifischen Build verwendet werden kann.

### [DSP](https://github.com/Gericom/GBARunner2/releases/tag/v20200809-113646_551ae99_dsp-audio)

Wenn Sie **TWiLight**Menu++ verwenden, dann nutzen Sie diese Funktion bereits in der mitgelieferten GBARunner2-Version.

Die DSP-Builds nutzen den digitalen Soundprozessor, der sowohl im DSi als auch im 3DS vorhanden ist. Dies trägt zu einem viel besseren Klang und einer besseren Leistung bei. Es gibt einige Rückschritte, wie z. B. ein paar ROMs, die in diesem Zweig nicht funktionieren.

### [Hybrider Hicode](https://github.com/Gericom/GBARunner2/releases/tag/v20200812-130512_d5dc8d8)

Wenn Sie **TWiLight**Menu++ verwenden, dann nutzen Sie diese Funktion bereits in der mitgelieferten GBARunner2-Version.

Der Hybrid-Hicode-Zweig befasst sich mit ROMs, die groß sind und auf dem Master-Zweig nicht laufen. Dies ist ein sehr nützlicher Zweig für den DSi, da er das Problem des geringeren Arbeitsspeichers im Vergleich zum 3DS weitgehend löst.

### [Hicode/DSP-Zusammenführung](https://github.com/therealteamplayer/GBARunner2/releases/tag/v20210911-merges-and-tweaks)

Dieser Fork von therealteamplayer fasst die Hicode- und DSP-Zweige in einem Build zusammen, zusammen mit einigen anderen Änderungen, die in den Release Notes aufgeführt sind. Dieses Build wird derzeit von **TWiLight**Menu++ für die DSi/3DS SD-Karte verwendet.

### 3DS-spezifisch: [Gyro](https://github.com/Gericom/GBARunner2/releases/tag/v20191228-021638_ee7f6a0)

Dieser Zweig nutzt den internen Beschleunigungssensor des 3DS, damit GBA-Spiele, die diese Funktion hatten, richtig gespielt werden können. Damit das funktioniert, sind mehrere Schritte erforderlich. Da die 3DS-Systeme unterschiedliche Beschleunigungssensor-Chips haben, funktioniert dies nicht auf allen 3DS-Systemen, da nicht alle Chips einen entsprechenden Code haben.

Es gibt keine einheitliche Regelung, welcher 3DS-Typ mit welchem Chip ausgestattet ist, zumindest so weit man weiß.

## Auffinden der Build-Informationen

GBARunner2 verfügt über ein Menü, das Sie durch Berühren des Touchscreens und Drücken der rechten Schultertaste öffnen können. Darin finden Sie das Menü "Über", in dem Sie erfahren, auf welchem Build Sie sich befinden. Die Builds, die derzeit mit **TWiLight**Menu++ ausgeliefert werden, geben jedoch keine Build-Version an, da sie auf Forks von anderen Personen beruhen. Das bedeutet, dass Sie höchstwahrscheinlich eine dieser Seiten verwenden, wenn Ihre Info-Seite für den Aufbau leer ist.

Auf der "Über"-Seite erfahren Sie auch, ob Sie ein ARM7DLDI- oder ARM9DLDI-Build verwenden.

Wenn Sie wissen, welches Build Sie verwenden müssen, ist es hilfreich, die offizielle Kompatibilitätsliste zu prüfen, falls Sie Probleme mit einem Spiel haben.

Die Release-ID kann auf der Release-Seite des GBARunner2-Github-Repositorys eingesehen werden, wobei die letzten sieben alphanumerischen Zeichen die Version darstellen. Die aktuellste Master-Version ist beispielsweise "v20200812-131430_6e4ce45", und "6e4ce45" wird als Versionsangabe verwendet.
