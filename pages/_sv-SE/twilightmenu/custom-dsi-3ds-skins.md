---
lang: sv-SE
layout: wiki
section: twilightmenu
category: customization
title: How to Create DSi/3DS Skins
description: Hur man gör anpassade DSi och 3DS utseenden för TWiLight Menu++
---

Det enklaste sättet att anpassa ett tema är genom att redigera png texturerna i ett temas `ui`m `battery`, och/eller `volume` mappar. Dessa filer kan vara vilken png som helst med en mindre varning i att endast pixlar som är 100% transparenta kommer att göras transparent, någon annan opacitet kommer att dras som helt ogenomskinlig. Även vilken del som helst som är transparent i en uppsättning (ex. alla batteriikoner) bör vara transparent i alla eftersom transparenta pixlar helt enkelt hoppas över i stället för att återgå till bakgrunden, Så vilken del som helst som är transparent i bara vissa bör ha bakgrundstextur snarare än genomskinlighet. Dessa texturer är tillåtna att variera i storlek, men kan kräva tweaking av temakonfigurationen för att renderas korrekt (se nedan).

Förändringar i paletterade texturer är mer involverade. Inom temarnas mappar `grit` och `background_grit` kan de olika bildfilerna redigeras. Du kommer också att behöva [devkitPros toolchains](https://devkitpro.org) med GRIT installerat. När du har redigerat dina filer måste du köra
```bash
make
```
för att sammanställa dina teman till Grit RIFF Format. Detta kommer att sammanställa dina palettade texturer till **.grf**-format i mappen `grf`. Gör inte ändringar i `.grit` filerna förrän du har läst avsnittet [Avancerat tema](#advanced-theming) nedan.

Var medveten att paletterade texturer kommer med fler restriktioner än BMP-texturer, det primära är ett absolut maximum av 16 färger per textur. Dock kan vissa texturer ha ännu hårdare palett begränsningar, som kan modifieras med risk för att få slut på palettminne (se nedan).

Exempelteman finns i [`romsel_dsimenutheme/resources/dsimenu_theme_examples` mappen](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) i TWiLight Menu++'s arkiv. För att ladda ner dem, [ladda ner utvecklingskatalogen](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) eller klona den med git, sedan hitta den mappen.

## Filbeskrivningar

`volume` och `battery` texturer är självförklarande.

### Bakgrundstexturer (`background_grit` mapp)

| Textur             | Beskrivning                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------- |
| bottom             | Den nedre bakgrundstexturen när du inte svävar över en ikon                              |
| bottom_bubble      | Den nedre bakgrundstexturen när du svävar över en ikon                                   |
| bottom_ds          | För 3DS temat, den nedre bakgrundstexturen när du inte svävar över en ikon på en DS lite |
| bottom_bubble_ds | För 3DS temat, den nedre bakgrundstexturen när du svävar över en ikon på en DS lite      |
| top                | Den övre bakgrunden                                                                      |

### Paletterade texturer (`grit` mapp)

| Textur        | Beskrivning                                                                                 | Palettbegränsningar (om mindre än 16)                      |
| ------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| bips          | Plupparna som visas på botten av rullningsfältet (DSi Temat)                                |                                                            |
| box           | Lådtexturen, som innehåller både fullständiga och tomma texturer (DSi Temat)                |                                                            |
| box_empty     | Texturen som visas för en tom låda (3DS Temat)                                              | På 3DS temat är den transparenta färgen vanligen `#E0DAD9` |
| box_full      | Texturen som visas för en låda med en ikon (3DS Temat)                                      | På 3DS temat är den transparenta färgen vanligen `#E0DAD9` |
| brace         | Texturen som visas före den första och sista ikonen (DSi Temat)                             | 4 Färger                                                   |
| bubble        | Den nedre delen av bubblan som drar över startgränsen eller ikonrutan                       | 8 Färger                                                   |
| button_arrow  | Strukturerna för pilarna på vardera sida av nedre rullningsfältet (DSi Temat)               |                                                            |
| cornerbutton  | Knapparna som visas på SELECT menyn (DSi Temat) (Namnet är baserat på en gammal användning) |                                                            |
| cursor        | Gränsen med animationsramar som indikerar den valda ikonen (3DS Temat)                      |                                                            |
| dialogbox     | Bakgrunden till dialogrutan som glider ner                                                  |                                                            |
| folder        | Ikonen för mappar                                                                           |                                                            |
| icon_gb       | Ikonen för Game Boy spel                                                                    |                                                            |
| icon_gba      | Ikonen för GBA-spel (Alla teman) och toppikonen för att starta GBARunner2 (3DS Temat)       | Standard transparent färg är `#00FF00`                     |
| icon_gbamode  | Ikonen för inbyggt GBA-läge                                                                 |                                                            |
| icon_gg       | Ikonen för Game Gear spel                                                                   |                                                            |
| icon_manual   | Ikonen för manualen                                                                         |                                                            |
| icon_md       | Ikonen för Mega Drive-spel                                                                  |                                                            |
| icon_nes      | Ikonen för NES-spel                                                                         |                                                            |
| icon_plg      | Ikonen för DSTWO plugin                                                                     |                                                            |
| icon_settings | Ikonen för Nintendo DSi inställningar                                                       |                                                            |
| icon_sms      | Ikonen för Sega Master System spel                                                          |                                                            |
| icon_snes     | Ikonen för SNES-spel                                                                        |                                                            |
| icon_unk      | Ikonen som visas när ett spel saknar en ikon                                                |                                                            |
| launch_dot    | Punkterna som visas när ett spel startas (DSi Temat)                                        |                                                            |
| moving_arrow  | Pilen som visas när ett spel flyttas (DSi Temat)                                            |                                                            |
| progress      | Laddningsanimationen med 8 frames                                                           | 9 Färger                                                   |
| scroll_window | Den del av rullningsfältet som visar de ikoner som är i sikte                               | 7 Färger                                                   |
| small_cart    | Ikonerna som visas längs toppen (3DS Temat) och i SELECT menyn (DSi Temat)                  |                                                            |
| start_border  | Gränsen med animationer som indikerar den valda ikonen (3DS Temat)                          |                                                            |
| start_text    | Texten som visas på starten (DSi Temat)                                                     | 4 Färger                                                   |
| wirelessicons | Ikonerna som visas för att indikera ett spel har trådlöst stöd                              | 7 Färger                                                   |

### UI texturer (`ui` mapp)

| Textur           | Beskrivning                                                   |
| ---------------- | ------------------------------------------------------------- |
| date_time_font | Teckensnittet för att visa datum och tid                      |
| Lshoulder        | Den vänstra axeln                                             |
| Lshoulder_greyed | Den vänstra axeln när det inte finns några sidor till vänster |
| Rshoulder        | Den högra axeln                                               |
| Rshoulder_greyed | Den högra axeln när det inte finns några sidor till vänster   |

### Video texturer (`video` mapp)

`3dsRotatingCubes.rvid` är en Rocket Video-fil. För mer information om att konvertera videor till rvid, läs [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) på Vid2RVID wiki. Om du inte vill ha med det så kan du bara ta bort den.

## Temakonfiguration

Du kan konfigurera olika alternativ för hur temat renderas i `theme.ini` för att rymma större sprites eller texturer.

| Värde                    | Beskrivning                                                                                           | Standard (3DS) | Standard (DSi) |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | -------------- | -------------- |
| `StartBorderRenderY`     | Den ursprungliga Y-positionen för startgränsen                                                        | 92             | 81             |
| `StartBorderSpriteW`     | Bredden på startgränsen sprite. Observera att startgränsen textur är exakt hälften av hela gränsen.   | 32             | 32             |
| `StartBorderSpriteH`     | Höjden på startgränsen sprite                                                                         | 64             | 80             |
| `TitleboxRenderY`        | Den ursprungliga Y-positionen för titeltexten                                                         | 96             | 85             |
| `BubbleTipRenderY`       | Y-positionen på spetsen av bubblan som dras över startgränsen                                         | 98             | 80             |
| `BubbleTipRenderX`       | X-positionen på spetsen av bubblan som dras över startgränsen                                         | 125            | 22             |
| `BubbleTipSpriteH`       | Höjden på bubbelspetsens sprite                                                                       | 7              | 8              |
| `BubbleTipSpriteW`       | Bredden på bubbelspetsens sprite                                                                      | 7              | 11             |
| `RotatingCubesRenderY`   | Y-positionen på den övre skärmen för att rendera roterande kuber                                      | 78             | N/A            |
| `ShoulderLRenderY`       | Y-positionen på den övre skärmen för att rendera den vänstra axeln                                    | 172            | 172            |
| `ShoulderLRenderX`       | X-positionen på den övre skärmen för att rendera den vänstra axeln                                    | 0              | 0              |
| `ShoulderRRenderY`       | Y-positionen på den övre skärmen för att rendera den högra axeln                                      | 172            | 172            |
| `ShoulderRRenderX`       | X-positionen på den övre skärmen för att rendera den högra axeln                                      | 178            | 178            |
| `VolumeRenderX`          | X-positionen på den övre skärmen för att rendera volymikonen                                          | 4              | 4              |
| `VolumeRenderY`          | Y-positionen på den övre skärmen för att rendera volymikonen                                          | 16             | 16             |
| `BatteryRenderY`         | Y-positionen på den övre skärmen för att rendera batteriikonen                                        | 5              | 5              |
| `BatteryRenderX`         | X-positionen på den övre skärmen för att rendera batteriikonen                                        | 235            | 235            |
| `RenderPhoto`            | Bestämmer om du vill visa en bild på den översta skärmen                                              | 0              | 1              |
| `StartTextUserPalette`   | Bestämmer om du vill använda DS:ens Profilfärg för paletten i starttexten                             | N/A            | 1              |
| `StartBorderUserPalette` | Bestämmer om du vill använda DS:ens Profilfärg för paletten av startgränsen                           | N/A            | 1              |
| `ButtonArrowUserPalette` | Bestämmer om du vill använda DS:ens Profilfärg för paletten på pilknapparna längst ner på skärmen     | N/A            | 1              |
| `MovingArrowUserPalette` | Bestämmer om du vill använda DS:ens Profilfärg för paletten på pilarna som syns när du flyttar ikoner | N/A            | 1              |
| `LaunchDotsUserPalette`  | Bestämmer om du vill använda DS:ens Profilfärg för paletten för punkterna vid uppstart                | N/A            | 1              |
| `DialogBoxUserPalette`   | Bestämmer om du vill använda DS:ens Profilfärg för paletten i dialogrutan                             | N/A            | 1              |

## Avancerat tema

Ibland kan du kräva mer än standardantalet färger för vissa palettade texturer. I sådana fall kan du ändra `.grit` kompileringsfilen för att texturen ska öka storleken på paletten.

Till exempel, i `scroll_window.grit`kan du redigera `-pn7` och ändra `7` till `16` för 16 färger. Var medveten om att om du tar bort hela `-pn` raden, kan du stöta på oväntade resultat.

Observera också att den absoluta maximala 16 färger per textur är påtvingad i kod och kan inte ändras. Även om du ökar antalet färger i paletten till över 16, inte mer än 16 färger av palettdata kommer att laddas. Med mängden texturer inladdade så kan det inte finnas tillräckligt med palettminne för att hålla 16 färger i paletten för varje textur. Tänk på detta när du justerar palettstorlekar.

Dessutom måste palettade texturer ha dimensioner som är en multipel av 2. Palettade texturers storlek kan inte ändras förutom `bubble` och `start_border`, som kan ha konfigurerbara sprite dimensioner i `theme.ini`. Observera dock att det kan få oväntade konsekvenser.

Paletterade texturer kontrolleras inte för giltighet. En ogiltig textur bör vara sällsynt om den skapas med den medföljande make-filen, men i vissa fall en skadad textur kommer orsaka att menyn inte laddas in alls.

## Anpassad bakgrundsmusik och ljudeffekter

DSi Menyn och 3DS teman stöder också anpassad musik. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
