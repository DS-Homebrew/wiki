---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: Hur man får Spelomslag
description: Hur man får Spelomslag i TWiLight Menu++
---

### 3DS
1. Installera [KirovAir's TWiLight Menu++ Updater fork](https://github.com/KirovAir/TWiLightMenu-Updater/releases)
   - Detta kommer att ersätta den vanliga TWiLight Menu++ Updater, så använd Universal-Updater istället för att uppdatera TWiLight Menu++
1. Välj `Extras`, `Boxart`, tryck sedan på <kbd class="face">X</kbd> för att skanna hela SD-kortet eller <kbd class="face">A</kbd> för att välja en mapp att skanna
1. Välj ett storlek för omslagen
1. Välj en kantstil
1. Se till att omslag är inställd att visas i TWiLight Menu++ inställningar

### Windows
1. Ladda ner den senaste versionen av [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrahera `TwilightBoxart-Windows-UX.zip` och kör `TwilightBoxart.exe`
1. Klicka på `Detect SD`
   - Om det inte hittar rätt SD-kort klickar du på `Browse...` och välj kortet
1. Ändra storlek, gräns, etc alternativ som passar dig
1. Klicka på `Start`
1. Se till att omslag är inställd att visas i TWiLight Menu++ inställningar

### macOS / Linux
1. Ladda ner den senaste versionen av [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrahera `.zip` filen
1. Öppna `TwilightBoxart.ini` i den extraherade mappen i en textredigerare
1. Skriv sökvägen till ditt SD-kort efter `SdRoot=`, spara sedan filen
   - På macOS är detta `/Volumes/`, och sedan namnet på ditt SD-kort
1. Öppna terminalen
1. I terminalen, skriv `cd` och dra sedan mappen med `TwilightBoxart.CLI` i den på din terminal
1. Kör `chmod +x TwilightBoxart.CLI`
1. Kör `./TwilightBoxart.CLI`
1. Säg `Ja` om det visar din SD-sökväg korrekt
1. Se till att omslag är inställd att visas i TWiLight Menu++ inställningar

### Manuellt
1. Ladda ner en png box art pack från [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extrahera .png-filerna till `sd:/_nds/TWiLightMenu/boxart`
1. Se till att omslag är inställd att visas i TWiLight Menu++ inställningar

**Lägg till dina egna omslag:** Placera dem i `sd:/_nds/TWiLightMenu/boxart`. Kan antingen ha spelets TID (t.ex. `ASME.png`), eller filnamnet (t.ex. `SM64DS.nds.png`). Dem måste vara i `.png`-format, med den rekommenderade storleken är 128x115 och max 208x143.

Individuella omslag kan också laddas ner från GameTDB under kategorin **S Covers (png)**.
