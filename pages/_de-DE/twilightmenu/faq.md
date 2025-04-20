---
lang: de-DE
layout: faq
section: twilightmenu
title: FAQ & Fehlerbehebung
long_title: TWiLight Menu++ FAQ & Fehlerbehebung
description: FAQs und Fehlersuche für TWiLight Menu++
---

Für weitere FAQs besuchen Sie bitte den [GBAtemp-Thread](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Warum bleibt mein 3DS bei schwarzen Bildschirmen hängen, stürzt ab, schaltet sich aus usw., wenn ich TWiLight Menu++ starte?
TWL_FIRM könnte irgendwie beschädigt worden sein. Folgen Sie dieser Anleitung, um das Problem zu beheben: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Wie behebe ich das Behalten eines weißen Bildschirms beim Booten des TWiLight Menü++?
- Konsole neu starten
- Wenn das nicht funktioniert, formatieren Sie Ihre SD-Karte auf FAT32 mit 32 KB Cluster/Zuweisungsgröße
    - Siehe [dsi.cfw.guide's Seite](https://dsi.cfw.guide/sd-card-setup.html) für die empfohlenen Werkzeuge
- Wenn das auch nicht funktioniert, versuche eine andere SD-Karte

#### Wie behebe ich den Touchscreen, der nach dem Start eines Spiels nicht funktioniert?
- Wenn Sie eine Kassette starten, stellen Sie sicher, dass die `Slot-1 Touch Mode` Einstellung auf `DS Modus` gesetzt ist
- Wenn das Problem weiterhin besteht oder wenn Sie stattdessen eine ROM verwenden, folgen Sie dieser Anleitung: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### Wie kann ich TWiLight Menu++ beim Starten eines Spiels neu starten oder einen Guru Meditationsfehler geben?
Gehen Sie in die TWLMenu++ Einstellungen und deaktivieren Sie `Update kürzlich gespielte Liste`.

#### Warum bekomme ich einen weißen Bildschirm, wenn ich versuche, ein DS von der SD-Karte zu laden?
Siehe [Ich habe Probleme mit meinen ROM(s), was soll ich tun?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) auf der nds-bootstrap FAQ-Seite.

#### Wie verwende ich Cheats?
Sie müssen einen Cheat DB in Form einer `usrcheat.dat` Datei im Ordner `sd:/_nds/TWiLightMenu/extras/` haben. Die aktuellste Cheat-Datenbank ist [DeadSkullzJr's NDS(i) Cheat Datenbanken](https://gbatemp.net/threads/488711/).
- Auf dem 3DS ist diese Datenbank in der Universal-Updater-App als "NDS(i) Cheat-Datenbanken" verfügbar. Dadurch wird es automatisch an dem gewünschten Ort installiert.

Alternatively, you can use [r4cce](https://web.archive.org/web/20241130133125/http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

Sobald Sie einen Cheat-DB haben, können Sie Cheats aktivieren, indem Sie in TWiLight Menu++ <kbd class="face">Y</kbd> drücken, wenn sich der Cursor auf dem Spiel befindet, um die Einstellungen pro Spiel zu öffnen, und dann <kbd class="face">X</kbd>, um das Cheats-Menü zu öffnen.

#### Wie kann ich ein benutzerdefiniertes Bild auf dem oberen Bildschirm des DSi-Themas anzeigen? Kann ich es stattdessen ausblenden?
Ein zufälliges `.png-Bild` in `sd:/_nds/TWiLightMenu/dsimenu/photos/` wird jedes Mal angezeigt, wenn das Menü geladen wird. Wenn keine entsprechenden Bilder vorhanden sind, werden stattdessen die von nds-bootstrap erstellten Screenshots verwendet.

- Die Bilder dürfen nicht größer als 208x156 sein
- Wenn Sie Fehler haben, liegt das höchstwahrscheinlich an der Bildgröße. Bitte verwenden Sie [tinypng](https://tinypng.com), um die Größe zu reduzieren

As for hiding the picture, you need to edit the `theme.ini` file found in `sd:/_nds/TWiLightMenu/dsimenu/themes/[theme folder]/`. Öffnen Sie die Datei mit einem Texteditor, ändern Sie die Zeile `RenderPhoto` von `1` auf `0`, und speichern Sie die Datei.

#### Wie bekomme ich Spiele?
Sie können Homebrew-Spiele von [Universal-DB](https://db.universal-team.net/ds) und [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games) herunterladen. Um offiziell freigegebene Spiele zu erhalten, müssen Sie diese als Dumps erhalten, entweder von Ihren physischen Cartridges oder von einer vorhandenen Konsole:
- Auf dem DS kannst du [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) verwenden, um deine GBA-Spiele und, wenn du eine Slot-2-Flashcart hast, DS-Spiele zu dumpen. Wenn Sie nur eine Slot-1-Flashkarte haben und ein DS-Spiel dumpen möchten, können Sie [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/) verwenden, das eine Wi-Fi-Verbindung benötigt, die mit dem DS kompatibel ist, sowie einen FTP-Client auf einem separaten Gerät, um das ROM zu empfangen
- Auf dem DSi kannst du [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) verwenden, um deine DS-Spiele und DSiWare zu dumpen
- Auf dem 3DS kannst du [GodMode9](https://github.com/d0k3/GodMode9/releases) verwenden, um deine DS-Spiele, DSiWare und Virtual Console-Titel zu dumpen

#### Kann ich die Speicherdateien von meinen Game Cards auf meine SD-Karte übertragen oder umgekehrt?
Ja. Du kannst [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) auf 3DS oder [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) auf DSi / 3DS verwenden.

#### Wie kann ich die Sprache von TWiLight Menu++ ändern?
1. Öffnen Sie die TWiLight Menu++ Einstellungen, indem Sie <kbd>SELECT</kbd> gedrückt halten, während Sie TWiLight Menu++ laden
1. Ändern Sie die erste Option, bis die gewünschte Sprache angezeigt wird, und beenden Sie dann die Einstellungen
    - Möglicherweise möchten Sie auch die ersten drei Optionen auf der nds-bootstrap-Einstellungsseite ändern, da sie die Sprache und Region der DS-Spiele und ihrer Titel in TWiLight Menu++ steuern

#### Ist dies ein DS(i)-Emulator?
Nein, es handelt sich nicht um einen Emulator. Das Menü und die DS-Spiele (geladen über nds-bootstrap) werden nativ im DS/DSi-Modus der Konsole ausgeführt. Die einzigen Konsolen, die emuliert werden, sind die früheren Konsolen, aber teilweise für den GBA (da einige oder alle Teile wie die Grafik nativ ausgeführt werden).

#### Welche Systeme werden von TWiLight Menu++ unterstützt?
Siehe [Liste der von TWiLight Menu++ unterstützten Systeme](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Können Exploits von Slot-1-Spielen TWiLight Menu++ booten?
Nein. Der Zugriff auf die SD-Karte ist nur für DSiWare-Anwendungen möglich, d. h. Slot-1-Spiele können TWiLight Menu++ nicht starten (oder sogar darauf zugreifen).

#### Warum kann ich meine Spiele nicht finden/sehen?
Es gibt eine Reihe von Gründen, warum Sie sie nicht finden können.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (themes, configuration, images, emulators and more). Wenn Sie Ihre Titel hier platziert haben, verschieben Sie sie bitte an einen anderen Ort.
- Wenn Sie mehr als 39 Einträge in einem Ordner haben und alle Plätze im Menü belegt sind, befinden sich Ihre Spiele möglicherweise auf der nächsten Seite. Verwenden Sie <kbd class="r">L/R</kbd> oder <kbd>SELECT</kbd> + <kbd>Links/Rechts</kbd>, um die Seiten zu wechseln
- Wenn Ihr Spiel oder Ihr Ordner versteckt ist, müssen Sie möglicherweise versteckte Dateien über die GUI-Einstellungen von TWiLight Menu++ anzeigen
- Wenn Ihr Spiel in einem Archiv`(zip`, `rar`, `7z`, etc.) vorliegt, kann es von TWiLight Menu++ nicht verwendet werden. Entpacken Sie das Spiel aus dem Archiv, um es zu verwenden
- Wenn Ihr Spiel keine der [unterstützten Erweiterungen](../ds-index/emulators#list-of-systems-supported-by-twilight-menu) verwendet, müssen Sie möglicherweise die Erweiterung ändern, indem Sie die Datei umbenennen

#### Wie kann ich auf die TWiLight Menu++ Einstellungen zugreifen?
Die Art und Weise, wie Sie auf die TWiLight Menu++ Einstellungen zugreifen können, hängt von Ihrer Konfiguration ab.
- **DS Klassisches Menü:** Tippen Sie auf das DS-Symbol am unteren Rand des unteren Bildschirms
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher-Themen: mit SELECT Menu:** Drücken Sie <kbd>SELECT</kbd> und starten Sie dann das Einstellungs-Applet (verwenden Sie das D-PAD, um Optionen zu markieren)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher-Themen, die das SELECT-Menü nicht verwenden:** Wenn Sie <kbd>SELECT</kbd> drücken, gelangen Sie zum DS Classic-Menü
- **Nintendo 3DS-Thema:** Tippen Sie auf das Schraubenschlüssel-Symbol auf dem unteren Bildschirm
- **R4 Originalthema:** Klicken Sie auf <kbd>START</kbd> (wenn Sie sich im Dateibrowser befinden) und dann auf <kbd>SELECT</kbd>
- **Holz-UI-Thema:** Wenn Sie <kbd>START</kbd> drücken, gelangen Sie zum klassischen DS-Menü

Sie können auch <kbd>SELECT</kbd> gedrückt halten, während Sie TWiLight Menu++ starten, um direkt auf die Einstellungen zuzugreifen.

#### Wie kann ich benutzerdefinierte Symbole/Banner für Spiele verwenden?
Sie können ein benutzerdefiniertes Banner entweder im PNG- oder DS banner.bin-Format verwenden, indem Sie es im Ordner `sd:/_nds/TWiLightMenu/icons` mit dem Namen des ROM (einschließlich der Erweiterung) oder des Ordners + `.png` oder `.bin` ablegen.

Für PNG-Banner benötigen Sie einfach eine PNG-Datei mit 15 Farben oder weniger und einer maximalen Auflösung von 32x32. Volle Transparenz funktioniert und zählt nicht zu den 15 Farben, aber Semitransparenz funktioniert nicht.

banner des Typs banner.bin können animiert werden und ermöglichen es Ihnen, den Titel, der in TWiLight Menu++ angezeigt wird, zu ersetzen. Sie können mit dem [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases) erstellt werden.

Pre-made banners can be found in the [icons section of the TWiLight Menu++ themes site](https://skins.ds-homebrew.com/icon/) and if you make any they can be shared there as well.

#### Wie kann ich benutzerdefinierte Themen für TWiLight Menu++ installieren?
Custom themes can be acquired from [the official themes site](https://skins.ds-homebrew.com/), which houses serveral community-made themes ready to apply. You can also make a custom theme for the Nintendo 3DS and Nintendo DSi UIs on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-themes). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** UIs are _**not**_ customizable.

Once you have acquired a custom theme, you can install it by placing its folder on the appropiate path, which depends on what UI the theme is made for.
- Themes for the Nintendo DSi UI go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Themes for the Nintendo 3DS UI go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Themes for the R4 Original UI go in `sd:\_nds\TWiLightMenu\r4menu\themes\`
- Themes for the Wood UI go in `sd:\_nds\TWiLightMenu\akmenu\themes\`

If you are using a 3DS family console, you can install custom themes using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Themes`.

Um ein benutzerdefiniertes Thema anzuwenden, müssen Sie auf TWiLight Menu++ Einstellungen zugreifen.
1. On the `GUI Settings` page, go to the `User Interface` option and choose the UI using the right and left buttons on the D-Pad.
1. Once the target UI is selected, go to the `Custom Theme` option and press the A button to choose between the themes you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired theme, then press A to select it.
1. Übernehmen Sie die Einstellungen, indem Sie B drücken, um zum TWiLight Menü++ zurückzukehren.

TWiLight Menu++ should now have a customized look (and music, if the selected theme supports it and is enabled on the settings).

#### Gibt es einen 3DS-Emulator für DS(i)?
Nein, das gibt es nicht. Es ist nicht möglich, den 3DS auf dem DS(i) zu emulieren, da der 3DS eine neuere Hardware verwendet.
