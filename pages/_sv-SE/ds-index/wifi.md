---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Information om hur du använder Wi-Fi på Nintendo DS
---

- På Nintendo DS-program kan du bara använda WEP och Open WiFi
- På Nintendo DSi förbättrade/exklusiva applikationer så har du tillgång till WPA och WPA2

Hotspots är användbara, så du behöver inte ändra din router-konfiguration.

### Att skapa en hotspot
Det finns guider för att skapa ett hotspot kompatibelt med DS spel på macOS och Linux-datorer på GBAtemp. Om du är på Windows kan du använda en Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC återställning
1. Starta Nintendo WFC inställningar
1. Anslut till din åtkomstpunkt
1. Ange ditt primära DNS-värde som ett av värdena nedan, beroende på vilken tjänst du vill använda:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` eller `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Ställ in `1.1.1.1` som din sekundära DNS
1. Du kan behöva NoSSL patchad in i ditt spel just nu, beroende på spelet

### Manuellt patcha dina DS ROM
Följ guiden nedan om din ISP blockerar anpassade DNS-servrar, annars rekommenderas det *starkt* att följa guiden ovan.

Obs: Användare av GNU/Linux och macOS kan följa mycket liknande instruktioner, men måste använda mono

1. Ladda ner [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Kopiera ROMen av spelet du vill patcha till samma mapp där WFCPatcher sparas och öppna mappen
1. Skapa en textfil med namnet `patch.bat`
1. I filen, ange `wfcpatcher.exe %1 --domain wiimmfi.de`, spara och stäng sedan (du kan ersätta wiimmfi.de med en annan URL, om du vill använda en annan server)
1. Dra nu alla ROMs du vill patcha på till patch.bat
1. Klart! De patchade ROMen kommer att vara dem som slutar i (wiimmfi)

Glöm inte att ta bort alla DNS som du kanske har sparat på dina Wi-Fi-inställningar innan du försöker ansluta till den patchade ROMen

### Felsökning och vidare läsning
Om du får några fel så kan du ange felkoden i wiimmfi's [troubleshooter](https://wiimmfi.de/error) för att åtgärda det.

För mer specifik felsökning och information, till exempel hur du ansluter till nätet på emulatorer så kan du läsa denna [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) skriven av medlemmar i [Mario Kart DS Network](https://discord.gg/pa9bea6).
