---
lang: de-DE
layout: wiki
section: twilightmenu
category: other
title: Im Breitbildformat spielen
description: Wie man TWiLight Menu++ im Breitbildformat auf dem Nintendo 3DS verwendet
---

Dieser Abschnitt erfordert eine Konsole der 3DS-Familie, auf der eine moderne CFW-Umgebung von [3ds.hacks.guide](https://3ds.hacks.guide)läuft.
{:.alert .alert-info}

Wenn Sie derzeit Luma v13 verwenden, aktualisieren Sie bitte auf v13.0.1, bevor Sie dieser Anleitung folgen.
{:.alert .alert-info}

### Installation
1. Öffne FBI und wähle `Remote-Installation`, dann `QR-Code scannen`
1. Scannen Sie diesen QR-Code, um die neueste Version von [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) zu installieren<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Öffne Universal Updater aus deinem HOME-Menü
1. Installiere das TWPatch-Paket
   - Wenn deine Konsole nicht auf das Internet zugreifen kann, kannst du [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) direkt herunterladen und dann mit FBI installieren
1. Kehren Sie zum HOME-Menü zurück und starten Sie TWPatch
   - Wenn Sie eine Meldung erhalten, die besagt, `/luma/exeTWL.bin kann nicht geöffnet werden`, dann verwenden Sie [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/), um den defekten TWL-Modus zu reparieren
1. Halten Sie <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> gedrückt, um das Patch-Menü zu öffnen und `Widescreen-Patch (384x240 16:10) zu aktivieren`
1. (Optional!) Für einen weniger verpixelten Breitbildschirm aktivieren Sie auch `GPU-Skalierung (unscharf, keine Filter)`
1. Drücke <kbd class="face">B</kbd> um das Patch-Menü zu verlassen
1. Drücke <kbd>START</kbd> um eine `TwlBg.cxi` Datei mit Widescreen zu erzeugen
   - Wenn der obere Bildschirm nicht anzeigt, dass der breite Patch aktiviert ist, beginnen Sie erneut bei Schritt 3
1. Verschiebe `TwlBg.cxi` von `sd:/luma/sysmodules/` zu `sd:/_nds/TWiLightMenu/TwlBg/` (Erstelle den `TwlBg` Ordner, wenn er nicht existiert), und benenne die Datei in `Widescreen.cxi` um
1. Starte deinen 3DS neu, während du <kbd>SELECT</kbd> gedrückt hältst, um die Konfiguration von Luma3DS zu öffnen
1. Aktiviere `external FIRMs and modules`, dann drücke <kbd>START</kbd> um zu speichern und zu beenden
1. Öffnen Sie TWiLight Menu++, drücken Sie <kbd class="face">Y</kbd> auf dem gewünschten Spiel, um die Einstellungen für das jeweilige Spiel aufzurufen, und stellen Sie `Screen Aspect Ratio` auf `16:10`

Alles erledigt! Genieße deine DS Spiele im Breitbildschirm!

**HINWEISE:**
1. Halten Sie beim Starten von TWLMenu++ nicht <kbd>START</kbd> oder <kbd>SELECT</kbd> gedrückt, wenn Sie nicht wollen, dass der Breitbildschirm glitched aussieht
1. Nicht jedes Spiel ist mit dem Breitbildformat kompatibel. [Hier ist eine Liste von Spielen mit Widescreen-Unterstützung](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Wenn Sie im gesamten TWL_FIRM (einschließlich der TWLMenu++-GUI) im Widescreen-Modus feststecken, nachdem Sie diese Anleitung befolgt und ein Widescreen-kompatibles Spiel gestartet haben, löschen Sie `TwlBg.cxi` unter `sd:/luma/sysmodules/`.
   - Wenn das Problem weiterhin besteht, deinstallieren Sie [](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) und [und installieren Sie](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++ erneut und befolgen Sie die obige Anleitung
1. Die meisten Widescreen-Patches passen nur 3D-Elemente an das Breitbildformat an, 2D-Elemente (z. B. Menüs) werden nur gedehnt
1. Luma3DS **muss** von der SD-Karte geladen werden. Wenn der Breitbildschirm nicht funktioniert, stellen Sie sicher, dass Sie `boot.firm` im Stammverzeichnis Ihrer SD-Karte haben
