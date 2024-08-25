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
- Wenn Sie einen DSi oder 3DS benutzen, vergewissern Sie sich, dass Sie zuerst die Netzwerkvereinbarung akzeptiert haben

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
Wenn Sie ein DS-kompatibles Netzwerk einrichten wollen, muss es die folgenden Spezifikationen erfüllen:
- WEP oder Offen (keine) Sicherheit
- WLAN Frequenz 2,4 GHz
- WLAN Modus 802.11b
    - Dies kann als "Legacy-Modus" oder ähnlich aufgeführt sein

### Nintendo DS WFC Wiederherstellung
1. Nintendo Wi-Fi Connection Setup starten
1. Verbinden Sie sich mit Ihrem Access Point
1. Legen Sie Ihren primären DNS-Wert als einen der folgenden Werte fest, je nachdem, welchen Dienst Sie verwenden möchten:
    - **[Wiimmfi](https://wiimmfi.de)** - `178.62.43.212`
    - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([Online-Spielerliste](http://zwei.moe:9001))** - `172.104.88.237`
1. Legen Sie `1.1.1.1` als Ihren sekundären DNS fest
1. Je nach Spiel müssen Sie Ihr Spiel an dieser Stelle möglicherweise mit einem NoSSL-Patch versehen

### Manuelles Patchen der DS-ROMs
Befolgen Sie die nachstehende Anleitung, falls Ihr ISP benutzerdefinierte DNS-Server blockiert, andernfalls wird *dringend* empfohlen, die obige Anleitung zu befolgen.

- Benutzer von GNU/Linux und macOS können sehr ähnliche Anweisungen befolgen, müssen aber Mono verwenden
- WfcPatcher unterstützt derzeit keine DSiWare

1. Lade [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases) herunter
1. Kopieren Sie die ROM des Spiels, das Sie patchen möchten, in denselben Ordner, in dem WfcPatcher gespeichert ist, und öffnen Sie diesen Ordner
1. Erstelle eine Textdatei
1. Geben Sie in die Datei `wfcpatcher.exe %1 --domain wiimmfi.de` ein, speichern Sie die Textdatei unter dem Namen `patch.bat` und schließen Sie das Fenster
    - Sie können wiimmfi.de durch eine andere URL ersetzen, wenn Sie einen anderen Server verwenden möchten
    - Wenn die Datei immer noch ein Textdokument zu sein scheint, [aktivieren Sie die Dateinamenerweiterungen](https://dsi.cfw.guide/file-extensions-%28windows%29) und entfernen Sie `.txt` aus dem Dateinamen
1. Ziehen Sie nun alle ROMs, die Sie patchen möchten, in die Datei patch.bat
1. Fertig! die gepatchten ROMs werden die sein, die auf (wiimmfi) enden

Vergessen Sie nicht, alle DNS zu entfernen, die Sie möglicherweise in Ihren Wi-Fi-Einstellungen gespeichert haben, bevor Sie versuchen, eine Verbindung mit dem gepatchten ROM herzustellen.

### Fehlerbehebung und weiteres Lesen
Wenn du irgendwelche Fehlermeldungen erhältst, kannst du den Fehlercode in Wiimmfis [Fehlersuche](https://wiimmfi.de/error) eingeben, um Lösungen zu finden.

Für eine spezifischere Fehlerbehebung und weitere Informationen, z. B. wie man eine Online-Verbindung über Emulatoren herstellt oder einen Nintendo Wi-Fi USB Connector verwendet, können Sie diesen [Wiimmfi-Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) lesen, der von Mitgliedern des [Mario Kart DS-Netzwerks](https://discord.gg/pa9bea6) geschrieben wurde.
