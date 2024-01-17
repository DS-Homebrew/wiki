---
lang: de-DE
layout: wiki
section: ds-index
category: reference
title: WLAN
description: Informationen zur Verwendung von WLAN auf dem Nintendo DS
---

- Bei Nintendo DS-Anwendungen können nur die WLAN-Sicherheitseinstellungen WEP und "Offen" verwendet werden
- Bei Nintendo DSi-Enhanced/Exclusive-Anwendungen, die im DSi-Modus laufen, gibt es zusätzlichen Optionen der WPA- und WPA2-Sicherheit
- If you're on DSi or 3DS, ensure you've accepted the network agreement first

Hotspots sind nutzbar, daher musst du deine Router-Konfiguration nicht ändern.

### Einen Hotspot einrichten
Auf GBAtemp gibt es Anleitungen zum Erstellen eines DS-kompatiblen Hotspots auf macOS- und Linux-Computern.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

Ein mobiler Android-Hotspot, der auf offene (keine) Sicherheit eingestellt ist, würde ebenfalls funktionieren.

Windows kann keinen kompatiblen Hotspot erstellen, daher müssen Windows-Benutzer Linux starten, um einen solchen einzurichten.
#### Andere Methoden
Wenn du mit den oben genannten Methoden keinen DS-kompatiblen Hotspot erstellen kannst, kannst du möglicherweise eine andere Methode verwenden.
- Nintendo Wi-Fi USB Connector
    - Auch wenn dieser noch verwendet werden kann, wird es nicht empfohlen, da eine 32-Bit-Version von Windows XP oder Vista benötigt wird
    - Informationen zum Einrichten eines Nintendo Wi-Fi USB Connector findest du in Abschnitt 3 dieser [Wiimmfi-Anleitung](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing), die von Mitgliedern des [Mario Kart DS Network](https://discord.gg/pa9bea6) geschrieben wurde
- Ändern der Router-Einstellungen, um DS-kompatibel zu sein
    - Dies ist nicht empfehlenswert, da es dein Netzwerk für Eindringlinge öffnet, selbst wenn du die WEP-Sicherheit verwendest. Es kann auch zu Problemen für andere Benutzer deines Netzwerks führen. Wenn du dich dafür entscheidest, wird empfohlen, einen zweiten Router oder ein Gastnetzwerk zu verwenden, falls verfügbar
    - Nicht alle Router unterstützen Gastnetzwerke oder das Ausschalten der Sicherheit
- WLAN-Extender

#### Einstellungen
If you are setting up a network to be DS-compatible, it must meet the following specifications:
- WEP oder Offen (keine) Sicherheit
- WLAN Frequenz 2,4 GHz
- WLAN Modus 802.11b
    - Dies kann als "Legacy-Modus" oder ähnlich aufgeführt sein

### Nintendo DS WFC Wiederherstellung
1. Launch Nintendo Wi-Fi Connection Setup
1. Connect to your access point
1. Set your Primary DNS value as one of the values below, depending on which service you want to use:
    - **[Wiimmfi](https://wiimmfi.de)** - `178.62.43.212`
    - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([online player list](http://zwei.moe:9001))** - `172.104.88.237`
1. Set `1.1.1.1` as your secondary DNS
1. You might need to NoSSL patch your game at this point, depending on the game

### Manuelles Patchen der DS-ROMs
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Benutzer von GNU/Linux und macOS können sehr ähnliche Anweisungen befolgen, müssen aber Mono verwenden
- WfcPatcher unterstützt derzeit keine DSiWare

1. Lade [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases) herunter
1. Copy the ROM of the game you want to patch to the same folder where WfcPatcher is saved and open that folder
1. Erstelle eine Textdatei
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save the text file with the name `patch.bat` and close the window
    - You can replace wiimmfi.de with another URL, if you wish to use a different server
    - If the file still appears to be a text document, [enable file name extensions](https://dsi.cfw.guide/file-extensions-%28windows%29) and remove `.txt` from the file name
1. Now drag all the ROMs you wish to patch on to patch.bat
1. Fertig! die gepatchten ROMs werden die sein, die auf (wiimmfi) enden

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Fehlerbehebung und weiteres Lesen
Wenn du irgendwelche Fehlermeldungen erhältst, kannst du den Fehlercode in Wiimmfis [Fehlersuche](https://wiimmfi.de/error) eingeben, um Lösungen zu finden.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
