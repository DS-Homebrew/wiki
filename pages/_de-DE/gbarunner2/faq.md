---
lang: de-DE
layout: faq
section: gbarunner2
title: FAQ & Fehlerbehebung
long_title: GBARunner2 FAQ & Fehlerbehebung
description: FAQs und Fehlersuche für GBARunner2
---

#### Wie kann ich benutzerdefinierte Rahmen erstellen und hinzufügen?
Sie können [diesen Leitfaden](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) von FrescoASF lesen und befolgen.

#### Werden Cheats unterstützt?
Im Moment nicht. Stattdessen können Sie mit [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/) dauerhaft Cheat-Codes in Ihr GBA-ROM einfügen.

#### Welche Version von GBARunner2 sollte ich verwenden?
Normalerweise sind die in TWiLight Menu++ enthaltenen Builds ausreichend. Weitere Informationen zu den verschiedenen Builds von GBARunner finden Sie auf der [Wiki-Seite Builds](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Wie verwende ich die Wi-Fi-Link-Funktionen?
Sie benötigen einen Build aus dem [wifi_link-Zweig](https://github.com/Gericom/GBARunner2/tree/wifi_link), um die Funktionen zu nutzen. Eine ausführliche Anleitung zur Einrichtung der Builds finden Sie auf der [WikiTemp-Seite](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Warum wird RTC (Real Time Clock) in einem ROM-Hack nicht unterstützt?
RTC wird pro Spiel unterstützt. Sie müssen die Titel-ID des ROMs in die eines Spiels ändern, das RTC unterstützt, damit GBARunner2 es erkennt. Eine Liste der unterstützten Titel-IDs finden Sie im [Code von GBARunner2](https://github.com/Gericom/GBARunner2/blob/master/arm9/source/emu/romGpio.vram.cpp#L14-L61).

Sie können die Titel-ID wie folgt ändern:
1. <label for="file-input" class="form-label">Wählen Sie die GBA-ROM-Datei:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Geben Sie die gewünschte Titel-ID ein:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Speichern Sie die aktualisierte Datei:</label> <input id="save" class="btn btn-secondary" type="button" value="Speichern" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Warum funktioniert ein ROM nicht, obwohl es laut Kompatibilitätsliste funktioniert?
Die GBARunner2-Kompatibilitätslisten werden hauptsächlich mit dem offiziellen GBA-BIOS getestet, was die Kompatibilität verbessert. Unter [GBA BIOS Info](https://wiki.ds-homebrew.com/gbarunner2/bios) finden Sie Informationen zum Erhalt des offiziellen GBA BIOS.

#### Wie behebe ich doppelte Ebenen am unteren Rand des Bildschirms auf dem 3DS?
Dies ist ein Fehler in TWLBg, der in GBARunner2 weit verbreitet ist. Die einzige Möglichkeit, dieses Problem vorübergehend zu beheben, ist ein Neustart von GBARunner2.
- Falls zutreffend, ist es besser, andere Optionen zum Ausführen von GBA-ROMs auf dem 3DS zu verwenden, wie VC injects, open_agb_firm oder mGBA auf n3DS-Modellen
