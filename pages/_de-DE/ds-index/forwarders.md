---
lang: de-DE
layout: wiki
section: ds-index
category: guides
title: DS Game Forwarders
description: Wie man DS Game-Forwarder auf HiyaCFW oder 3DS HOME Menü nutzt
tabs:
  - 
    3ds-sd-card: 3DS SD-Karte
    dsi-sd-card: DSi SD-Karte
    flashcard: Nur Flashcard
    flashcard-dsi-3ds: Flashcard auf modifiziertem DSi/3DS
---

Forwarder sind Verknüpfungen für Spiele, die Sie in Ihrem HOME-Menü, hiyaCFW-Menü oder Karteikartenmenü installieren können. Sie können DS(i)-Spiele von der SD-Karte (mit nds-bootstrap) oder von einer kompatiblen Flash-Karte (über den entsprechenden Kernel) laden, indem Sie Forwarder im Menü Ihrer Wahl installieren. <!--- I feel like this still needs a bit of work. Still better than what was there before. -->

DS-Spiele müssen in ein digitales `.nds-Format` umgewandelt werden. Du kannst deine DS-Kassetten mit [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge) auf 3DS oder [GodMode9i](https://dsi.cfw.guide/dumping-game-cards) auf DSi entsorgen.
{:.alert .alert-info}

Wenn Sie irgendwelche Probleme haben, lesen Sie die FAQs im [GBAtemp-Thread](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

Wählen Sie eine der folgenden Optionen, um sie dem HOME-Menü hinzuzufügen:

{% capture tab-3ds-sd-card %}

Diese Seite nimmt an, dass Sie eine moderne CFW-Umgebung von [3ds.hacks.guide](https://3ds.hacks.guide) verwenden.
{:.alert .alert-warning}

### Teil 1: Erhalte die erforderlichen Dateien

Wenn Sie bereits Universal Updater auf Ihrer Konsole installiert haben, können Sie Schritt 3 überspringen.
{:.alert .alert-info}

1. Öffne FBI und wähle `Remote-Installation`, dann `QR-Code scannen`
1. Scannen Sie diesen QR-Code, um die neueste Version von [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) zu installieren<br> ![Universal-Updater QR-Code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Öffnen Sie Universal Updater über Ihr HOME-Menü
1. Installiere das NDSForwarder-Paket
1. NDSForwarder und die benötigten Dateien sind nun an den jeweiligen Standorten eingerichtet

### Teil 2: NDSForwarder
1. Öffne den Homebrew Launcher
1. Öffne im Homebrew Launcher `NDS Forwarder Generator`
1. Navigieren Sie zum Ort Ihres Spiels und drücken Sie <kbd class="face">A</kbd>
1. Bestätigen Sie, dass Sie installieren möchten, indem Sie `Ja` wählen
1. Nachdem es installiert ist, erscheint dein Spiel nun als Titel in deinem HOME-Menü
    - Beim Ausführen des Titels wird eine Fehlermeldung mit der Angabe `/_nds/ntr-forwarder/sdcard angezeigt. ds nicht gefunden`, folgen Sie den Schritten 2-3 in Teil 1 der `DSi SD-Karte`

### Teil 3: Abrufen des AP-Fix-Pakets aus TWiLight Menu++

Wenn Sie TWiLight Menu++ bereits installiert haben, sind Sie mit dieser Anleitung fertig.
{:.alert .alert-info}

1. Lade die neueste Version von[`TWiLightMenu-3DS.7z herunter`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Gehen Sie in der `.7z-Datei` in den Ordner `_nds/TWiLightMenu/extras`
1. Ziehen Sie die Datei `apfix.pck` nach `sd:/_nds/ntr-forwarder/`

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}

{% capture tab-dsi-sd-card %}

### Anforderungen

- Ein Nintendo DSi mit [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) und [hiyaCFW](../hiyacfw/installing) installiert
- Die neueste Version von [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.dsi)

### Teil 1: Erste Schritte
1. Kopieren Sie `NDSForwarder.dsi` in das Stammverzeichnis Ihrer SD-Karte
    - Diese kann optional mit [NTM](https://github.com/Epicpkmn11/NTM/releases/download/v0.2.0/NTM.dsi) direkt auf hiyaCFW installiert werden
1. Das [Forwarder-Paket](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.nds-bootstrap.7z) herunterladen
1. Entpacken Sie den Inhalt des `Stammordners für die SD-Karte` in den Stammordner der SD-Karte Ihres DSi

### Teil 2: Abrufen des AP-Fix-Pakets aus TWiLight Menu++

Wenn Sie TWiLight Menu++ bereits installiert haben, fahren Sie mit dem nächsten Teil fort.
{:.alert .alert-info}

1. Lade die neueste Version von [`TWiLightMenu-DSi`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) herunter
1. Gehen Sie in der `.7z-Datei` in den Ordner `_nds/TWiLightMenu/extras`
1. Ziehen Sie die Datei `apfix.pck` nach `sd:/_nds/ntr-forwarder/`

### Teil 3: NDSForwarder-DSi
1. Setzen Sie Ihre SD-Karte wieder in Ihr Gerät ein
1. Halten Sie <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gedrückt und schalten Sie Ihr Gerät ein, um zu Unlaunch zu starten
1. `NDSForwarder.dsi` starten
    - Wenn Sie eine `Fehlermeldung von nitroFSInit()` erhalten, versuchen Sie, TWiLight Menu++ zum Starten zu verwenden, oder legen Sie `NDSForwarder.dsi` im Stammverzeichnis Ihrer SD-Karte ab
1. Drücken Sie <kbd class="face">A</kbd> bei `Installieren`
1. Navigieren Sie zum Ort Ihres Spiels und drücken Sie <kbd class="face">A</kbd>
1. Nach der Installation erscheint dein Spiel als Titel auf deinem hiyaCFW DSi Menü

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Anforderungen

- Ein Nintendo DS, DS Lite, DSi oder 3DS mit einer Flashcard
- Die neueste Version von [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.nds)

### Teil 1: Erste Schritte
1. Kopieren Sie `NDSForwarder.nds` in das Stammverzeichnis Ihrer SD-Karte
1. Das [Forwarder-Paket](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.nds-bootstrap.7z) herunterladen
1. Extrahieren Sie den Inhalt des `Stammordners für die SD-Karte` in den Stammordner der SD-Karte Ihrer Flash-Karte

### Teil 2: Abrufen des AP-Fix-Pakets aus TWiLight Menu++

Wenn Sie TWiLight Menu++ bereits installiert haben oder nur DSiWare verwenden möchten, fahren Sie mit dem nächsten Teil fort.
{:.alert .alert-info}

1. Lade die neueste Version von [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) herunter
1. Gehen Sie in der `.7z-Datei` in den Ordner `_nds/TWiLightMenu/extras`
1. Ziehen Sie die Datei `apfix.pck` nach `sd:/_nds/ntr-forwarder/`

### Teil 3: NDSForwarder-DSi
1. Stecken Sie die SD-Karte wieder in die Speicherkarte und die Speicherkarte in Ihr Gerät
1. Schalten Sie Ihr Gerät ein und starten Sie Ihre Flashcard
1. `NDSForwarder.nds` starten
    - Wenn Sie eine `Fehlermeldung von nitroFSInit()` erhalten, versuchen Sie TWiLight Menu++ zum Starten zu verwenden, oder legen Sie `NDSForwarder.nds` im Stammverzeichnis Ihrer SD-Karte ab
1. Drücken Sie <kbd class="face">A</kbd> bei `Installieren`
1. Navigieren Sie zum Ort Ihres Spiels und drücken Sie <kbd class="face">A</kbd>
1. Nach der Installation erscheint Ihr Spiel in einem Ordner namens `forwarders` auf dem SD-Kartenstamm der Flashkarte

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% capture tab-flashcard-dsi-3ds %}

### Anforderungen

- **DSi-Benutzer:**
    - Ein Nintendo DSi mit [Unlaunch](https://dsi.cfw.guide/installing-unlaunch) und [hiyaCFW](installing) installiert
    - Die neueste Version von [Title Manager für Hiya](https://github.com/JeffRuLz/TMFH/releases)
- **3DS-Benutzer:**
    - Eine Nintendo 3DS-Familienkonsole mit moderner CFW-Umgebung von [3ds.hacks.guide](https://3ds.hacks.guide)

{% capture flashcards %}
Die empfohlenen Karteikarten sind die DSTT und Acekard 2i. Wenn Sie eine perfekte Spielkompatibilität wünschen, erhalten Sie die SuperCard DSTWO/DSTWO PLUS. Der einzige Nachteil ist, dass die Batterie schneller entlastet wird.

Wenn Sie eine Karteikarte haben, die mit dem NTR Launcher von Apache Thunder funktioniert, können Sie sie [im GBAtemp Thread](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/) anfordern. Stellen Sie sicher, dass Sie angeben, welches Build Sie verwenden (Normal oder Alt), und ob `RESETSLOT1` auf `0` oder `1` in `sd:/nds/ntr_launcher gesetzt ist. ni`.

Kompatibel:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (DSi-Enhanced Spiele, einschließlich neuerer NTR-Spiele, funktionieren nicht)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (verwendet < 2 GB microSD-Karte)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (Original Nicht-SDHC-Version, verwendet < 2 GB microSD-Karte)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146)[(www.r4i-sdhc.com)](http://www.r4i-sdhc.com)(normale und RTS-Versionen)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (Lila Karte ist möglicherweise nicht kompatibel)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (normale und Plus-Version)

Ungetestet:
- R4i3D NEW (Verwenden Sie R4iDSN Vorlage und Pack)

Teilweise kompatibel:
- Ace 3DS+ (Spielkompatibilität ist schlecht, so dass das Speichern/Laden einer Speicherdatei zum Absturz führt)
- Gateway Blue Card (Spielkompatibilität ist schlecht, so dass das Speichern/Laden einer Speicherdatei zum Absturz führt)
- EX4DS (Die Spielkompatibilität ist schlecht, so dass das Speichern/Laden einer Speicherdatei zum Absturz führt)
- R4iLS (Spielkompatibilität ist schlecht, so dass das Speichern/Laden einer Speicherdatei zum Absturz führt)
- Karten mit [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (Spielkompatibilität ist schlecht, so dass das Speichern/Laden einer Speicherdatei zum Absturz führt)

Inkompatibel:
- CycloDS (i)Evolution (Kann ROMs autobooten, funktioniert aber anders als andere Flashcards)
- (i)Edge (Unfähig zum automatischen Booten eines .nds ROM)
- R4 Gold Pro[(www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me)](http://www.r4i-gold.me) (YSMenu (nicht der Forwarder-Prozess) (brickt die Karte)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (nicht der Weiterleitungsprozess) brickt die Karte)
{% endcapture %}

<details>
    <summary>Eine unterstützte Karteikarte aus dieser Liste</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

- Ein 64-Bit-Betriebssystem
- [Spediteur3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- [Java 8](https://www.java.com/en/download/)
- **Linux-Benutzer:** JavaFX
    - Debian-basiert: Führen Sie [dieses Skript](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh) aus
    - Arch: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### Teil 1: Erste Schritte
1. Laden Sie eines dieser Pakete herunter:
    - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
    - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
    - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
    - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
    - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
    - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
    - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)
1. Extract the contents of the `for Slot-1 microSD` folder to the root of your flashcard's microSD card, and (if the folder exists) the contents of the `for 3DS SD card` folder to the root of your 3DS's SD card
    - What will be in each pack for loading ROMs:
        - Original R4/M3 Simply - WoodR4 & YSMenu
        - DSTT/R4i Gold/R4i-SDHC/R4 SDHC Dual-Core/R4 SDHC Upgrade/SC DSONE, Acekard 2(i)/M3DS Real/R4i-SDHC 1.4.x - YSMenu
        - Acekard RPG, Ace 3DS+/Gateway Blue Card/R4iLS/R4iTT, R4iDSN/R4i Gold RTS - WoodR4

After you extract the pack for your card, you can edit `sd:/_nds/ntr_forwarder.ini` to change the following settings. This isn't possible for Acekard RPG, R4 DS, and R4i Gold RTS.
    - `NTRCLOCK`: If set to `0` or <kbd class="face">A</kbd> is held, the DSi boot screen will appear instead of the normal DS splash, and TWL clock speed is used, so lags begone
    - `DISABLEANIMATION`: If set to `1` or <kbd class="face">B</kbd> is held, the DS/DSi boot screen is skipped
    - `HEALTHSAFETYMSG`: If set to `1`, the boot screen's health and safety message will appear on the bottom screen, otherwise the bottom screen stays white with no health and safety message

### Part 2: Getting the AP fix files from TWiLight Menu++

If you already have TWiLight Menu++, skip to the next part.
{:.alert .alert-info}

1. Lade die neueste Version von[`TWiLightMenu-3DS.7z herunter`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. In the 7z file, go to the `_nds/TWiLightMenu/extras` folder
1. Drag the `apfix.pck` file to `fat:/_nds/ntr-forwarder/`

### Part 3: Forwarder3-DS
1. Open `Forwarder3DS.jar`
    - **Windows users:** If it doesn't open, download this [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), place it in the same folder as Forwarder3DS.jar, and run it
1. Set your card as the `Target` on the left
    - **NOTE:** If you don't see a list of cards, download [this zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), and put the `forwarders` folder in the same folder as Forwarder3DS.jar, then rename it to `.forwarders`
1. Enable `Automatically set ROM path`
    - **Linux users:** The automatic path is incorrect since it includes the entire path (e.g. `/media/$USER/something/`), please remove that part
    - **MacOS users:** The automatic path is incorrect since it includes `/Volumes/(cardname)/` at the start, please remove that part
1. Click the folder in the top right and select the ROMs you want to make forwarders for or drag and drop them onto the window
    - **NOTE:** The ROMs must already be on your SD card when selecting them, and can't be moved without recreating the forwarders
1. If you're playing a hack/translation of a DSi-Enhanced game that has it's banner/title edited, find the banner for the game from [here](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), right click on the game in Forwarder3-DS, click `Import banner`, and click on the banner to use
1. If using a homebrew ROM, click on it, then clear the `Game title` and type the game's title
1. Click the floppy disk button to generate the forwarders

### Part 4: Installing the forwarder

- If using a 3DS family console:
    1. Copy the CIA(s) to your 3DS's SD card, then install them using FBI
        - If using EmuNAND, install to both SysNAND and EmuNAND
- If using a DSi:
    1. Copy `tmfh.nds` from the TMFH `.zip` file to the root of your SD card
    1. Reinsert your SD card into your DSi
    1. Launch `tmfh.nds` from Unlaunch or TWiLight Menu++
    1. Install the forwarder NDS file using TMFH
{% endcapture %}
{% assign tab-flashcard-dsi-3ds = tab-flashcard-dsi-3ds | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-dsi-sd-card | concat: tab-flashcard | concat: tab-flashcard-dsi-3ds %}
{% include tabs.html index=0 tabs=tabs %}
