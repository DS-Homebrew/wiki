---
lang: de-DE
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Informationen über Homebrew auf dem Nintendo DS
---

### Entwicklung
Für die Entwicklung von Nintendo DS Homebrew werden üblicherweise devkitPro-Tools wie devkitARM, libnds und libfat verwendet. Es besteht jedoch die Möglichkeit, auf andere Software auszuweichen und diese zu verwenden:

- **SD-Karten-Bibliotheken:** [libfat](https://github.com/devkitPro/libfat) ist in libnds enthalten und wird im Allgemeinen empfohlen, [libslim](https://github.com/DS-Homebrew/libslim/) kann manchmal besser funktionieren, ist aber manchmal instabil
- **Grafikbibliotheken:** [easyGL2D](http://rel.phatcode.net/junk.php?id=117), das mit libnds ausgeliefert wird, wird empfohlen, aber [NightFox Lib](https://github.com/knightfox75/nds_nflib) kann stattdessen verwendet werden
- **Ganze Toolchains:** [devkitARM](https://devkitpro.org/wiki/Getting_Started) und [libnds](https://libnds.devkitpro.org/) werden empfohlen, da sie DSi-Kompatibilität beinhalten und ein größeres Ökosystem haben, aber [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) ist eine Option für Flashcard-exklusive Entwicklung

Für den Anfang bietet [dieser GBAtemp-Thread](https://gbatemp.net/threads/useful-resources-to-help-you-out-with-starting-to-make-nds-homebrew.580507/#post-9322674) eine Menge guter Ressourcen für Anfänger. Weitere technische Informationen über den DS(i) finden Sie unter [GBATEK](https://problemkaputt.de/gbatek-contents.htm).

### Flashcards
DS-Modus-Flashcards sind eine Slot-1-Methode zum Ausführen von Nintendo DS-Anwendungen. Flashcards haben den Vorteil, dass Konsolendateien und tragbare Dateien getrennt bleiben, dass sie ohne Modifikation des Systems verwendet werden können und dass sie auf DS Phat/Lite-Konsolen verwendet werden können. Anders als beim Modifizieren der eigentlichen Konsole gibt es jedoch mehrere Flashcards auf dem Markt, die jeweils unterschiedliche Kernelanforderungen haben. Der von Ihnen verwendete Kernel ist der wichtigste.

### DLDI
Verschiedene SD-Kartensteckplätze haben unterschiedliche Hardware (meistens) und Code, der für eine Karte geschrieben wurde, funktioniert nicht unbedingt für eine andere Karte. DLDI (kurz für Dynamically Linked Device Interface) versucht, dieses Problem zu lösen, indem der Code für die Handhabung von SD-Karten extern eingepflegt wird. Loader wie YSMenu, Wood R4 und TWiLight Menu++ können einen Homebrew automatisch DLDI-patchen, aber wenn Sie ihn manuell einpatchen müssen, können Sie einen [DLDI-Patcher](https://www.chishm.com/DLDI#tools) auf einem Computer verwenden.

### Zeitbombe
In einige Flashcard-Kernel wird von den Kernel-Entwicklern ein beliebiges Verfallsdatum (besser bekannt als Zeitbombe) einkodiert, um die Verbraucher zum Kauf ihres neuesten Produkts zu bewegen. Die Vorgehensweise ist wie folgt:

1. Die Flashcard wird gebootet und lädt die Kernel-Datei von der SD-Karte, ohne zu prüfen, ob es sich um den von den Entwicklern vorgesehenen Kernel handelt
1. Jedes Mal, wenn die Kernel-Datei von der SD-Karte geladen wird, wird geprüft, ob das Systemdatum nach einem bestimmten Datum liegt

Fällt der zweite Test positiv aus, verweigert der Kernel den Start. Sie können dies testen, indem Sie Ihr Datum auf den letztmöglichen Wert einstellen. Die Sicherheit ist jedoch schwach und die Ergebnisse werden nicht zwischengespeichert, so dass es Möglichkeiten gibt, das Problem zu umgehen:

Wenn Sie den von den Kartenherstellern vorgesehenen Standard-Kernel verwenden möchten, können Sie die Systemuhr in den Systemeinstellungen des Geräts zurückstellen. Beachten Sie jedoch, dass dadurch Spiele, die auf die Systemuhr angewiesen sind (z. B. Animal Crossing: Wild World), möglicherweise nicht mehr funktionieren.

Die Kernel, die mit diesen Karten geliefert werden, sind jedoch von Grund auf fehlerhaft, und es ist besser, sie komplett zu ersetzen. Zum Glück haben Drittentwickler Alternativen entwickelt, die Sie verwenden können:

- [YSmenu - Menü + Game Loader](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) - Obwohl es nicht den Vorteil eines anpassbaren All-in-One-Menüs hat, bietet der Game Loader eine weitaus bessere Kompatibilität mit Unterstützung für Action-Replay-Cheats
- [TWiLight Menu++ mit nds-bootstrap](../twilightmenu/installing-flashcard) - Verfügt über ein anpassbares All-in-One-Menü und unterstützt Cheats, aber sein B4DS-Modus (der Modus, der verwendet wird, wenn er nicht über die Fähigkeiten des DSi verfügt) hat eine schwache Kompatibilität, einige Spiele erfordern sogar das Memory Expansion Pak
- [TWiLight Menu++ mit YSmenu](../twilightmenu/installing-flashcard) - Anpassbares All-in-One-Menü mit hoher Kompatibilität, aber ohne Cheat-Unterstützung

### ARGV-Unterstützung
ARGV ist ein Informationsübermittler zwischen zwei selbstentwickelten Nintendo DS-Anwendungen. Es kann für Spediteure oder alternative Menüs verwendet werden.

- Die Homebrew muss programmiert werden, um die Vorteile dieser Funktion zu nutzen. Zum Beispiel haben GBARunner2, NesDS und GameYob alle ARGV-Unterstützung
- Es muss auch eine Möglichkeit geben, die ARGV-Variablen zu setzen. TWiLight Menu++ und HBMenu erlauben das Setzen von ARGV-Argumenten
