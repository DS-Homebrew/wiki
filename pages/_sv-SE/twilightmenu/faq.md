---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: FAQ & Felsökning
long_title: TWiLight Meny++ FAQ & Felsökning
description: Vanliga frågor och felsökning för TWiLight Menu++
---

För fler FAQs, besök [GBAtemp tråden](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Varför fastnar min 3DS / 2DS på svarta skärmar, kraschar, stängs av osv. när TWiLight Menu++ startas upp?
TWL_FIRM kan på något sätt bli skadad. Följ denna guide för att åtgärda problemet: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### Jag får en vit skärm medan jag startar upp TWiLight Menu++. Hur fixar jag det?
- Försök först att sätta konsolen i viloläge (t.ex. stänga konsolens lock, eller trycka på sovknappen på O2DS), sedan väcker du upp konsolen
- Om det inte fungerar, formatera ditt SD-kort till FAT32 med 32 KB kluster/allokeringsstorlek
- Om det inte heller fungerar, prova ett annat SD-kort

#### TWiLight Menu++ startas om eller ger ett Guru Meditation Error när jag startar ett spel. Hur fixar jag detta?
Gå in i TWLMenu++'s inställningar, och inaktivera `Uppdatera 'nyligen spelat' listan`.

#### Varför får jag en vit skärm när jag försöker ladda ett spel från SD-kort?
- Kontrollera först [kompatibilitetslistan nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) och se till att ditt spel är kompatibelt
- Prova med alla fusk inaktiverade för det spelet eftersom vissa fusk inte är kompatibla med nds-bootstrap just nu, du kan använda <kbd class="l">L</kbd> för att inaktivera alla fusk för ett spel
- Om spelet du försöker starta är ett DSi Enhanced spel, se då till att TWiLight Menu++ är inställd till att använda `DS Mode`
- Om det fungerade tidigare tar du bort `fatTable` och `patchOffsetCache` i `sd:/_nds/nds-bootstrap/`

#### Hur använder jag fusk?
Du måste ha en fusk DB i form av en `usrcheat.dat` fil i mappen `sd:/_nds/TWiLightMenu/extras/`. Den mest uppdaterade fuskdatabasen är [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- På 3DS finns denna databas tillgänglig i appen Universal Updater som "NDS Cheat Databases". Detta kommer automatiskt att installera den till önskad plats.

Alternativt kan du använda [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) för att skapa din egna fusk DB.

#### Hur visar jag en anpassad bild på den översta skärmen i DSi temat?
En slumpmässig `.png` bild i `sd:/_nds/TWiLightMenu/dsimenu/photos/` visas varje gång menyn laddas.

- Bilderna får inte vara större än 208x156
- Om du har fel är det sannolikt ett fel med bildstorleken. Använd [tinypng](https://tinypng.com) för att minska storleken

#### Hur får jag spel?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). För att få dumpar av dina retail spel:
- På DS kan du använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) för att dumpa dina GBA-spel och, om du har ett Slot-2 minneskort, DS spel
- På DSi kan du använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) för att dumpa dina DS spel och DSiWare
- På 3DS kan du använda [GodMode9](https://github.com/d0k3/GodMode9/releases) för att dumpa dina DS-spel, DSiWare och Virtual Console-titlar

#### Kan jag få sparfiler från mina spelkort på mitt SD-kort eller tvärtom?
Ja, du kan använda [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) på DSi och 3DS eller [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) på 3DS.

#### Hur ändrar jag TWiLight Menu++'s språk?
1. Öppna TWiLight Menu++ inställningar, du kan göra detta genom att hålla ner <kbd>SELECT</kbd> medan du laddar TWiLight Menu++
1. Tryck <kbd class="l">L</kbd> eller <kbd class="face">Y</kbd> en gång (på minneskort / 3DS) eller två gånger (på DSi)
1. Ändra det första alternativet tills du ser vilket språk du vill ha, avsluta sedan inställningarna
   - Du kanske också vill ändra de kommande två alternativen eftersom dom kontrollerar språket i DS spel och deras titlar i TWiLight Menu++

#### Är detta en DS(i) emulator?
Nej, detta är inte en emulator. Menyn och DS spelen (laddade via nds-bootstrap) körs direkt i konsolens DS/DSi läge. De enda konsoler som emuleras är de tidigare konsolerna, men delvis för GBA (efter vissa eller alla delar som grafik körs direkt).

#### Vilka system stöder TWiLight Menu++?

| Format                    | Laddare                                             | Filändelse                             | Sparfil                            |
| ------------------------- | --------------------------------------------------- | -------------------------------------- | ---------------------------------- |
| ARGV[^1]                  | Infött                                              | `.argv`                                |                                    |
| Atari 2600                | [StellaDS][stellads]                                | `.a26`                                 |                                    |
| Atari 5200                | [A5200DS][a5200ds]                                  | `.a52`                                 |                                    |
| Atari 7800                | [A7800DS][a7800ds]                                  | `.a78`                                 |                                    |
| Atari XEGS                | [XEGS-DS][xegs-ds]                                  | `.xex`, `.atr`                         |                                    |
| DS                        | [nds-bootstrap][ndsbs], minneskortets kärna, infött | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom namn].sav`[^2]         |
| DSiWare                   | [Unlaunch][unlaunch]                                | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom namn].pub`, `[rom namn].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                                  | `.plg`                                 |                                    |
| Game Boy (Color)          | [GameYob][gameyob]                                  | `.gb`, `.sgb`, `.gbc`                  | `[rom namn].sav`                   |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], infött[^5]            | `.agb`, `.gba`, `.mb`                  | `[rom namn].sav`                   |
| Game Gear                 | [S8DS][s8ds]                                        | `.gg`                                  | `[rom namn].gg.sav`                |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]         | `.gen`                                 | `[rom namn].srm`[^6]               |
| Master System             | [S8DS][s8ds]                                        | `.sms`                                 | `[rom namn].sms.sav`               |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                         | `.mp4`                                 |                                    |
| NES / Famicom             | [nesDS][nesds]                                      | `.nes`, `.fds`                         | `[rom namn].sav`                   |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                            | `.pce`                                 |                                    |
| RVID Video                | [Rocket Video Player][rvidplayer]                   | `.rvid`                                |                                    |
| SNES[^7]                  | [SNEmulDS][snemulds]                                | `.smc`, `.sfc`                         | `[rom namn].srm`[^8]               |
{:.table}

- Footnotes -
{:footnotes}

#### Varför fungerar inte touchstyrning på sudokuhax?
Beroende på sudokuhax's sparfil, kanske fungerar inte touchstyrning.

#### Kan The Biggest Loser starta upp TWiLight Meny++?
Nej. Eftersom The Biggest Loser är ett Slot-1 spel, och inte ett DSiWare-spel, SD-åtkomst inaktiveras när du kör Slot-1 kort.

[^1]: Textfiler som innehåller sökvägen till en DS homebrew-app och argument för att starta den med, läs [nds-hb-menu's README](https://github. com/devkitPro/nds-hb-menu#passing-arguments) för mer info
[^2]: Endast för retail ROMer, homebrew har inte specifika sparfiler
[^3]: Fungerar endast från ett SuperCard DSTWO minneskort eftersom det har ytterligare processorkraft och RAM inuti spelkortet
[^4]: När du kör i DSi läge så kan det använda DSP för bättre ljud
[^5]: Kräver ett kortplats för Slot-2 och fungerar därmed bara på DS Phat och DS Lite
[^6]: jEnesis kan bara spara när du kör från ett minneskort, men PicoDriveTWL kan spara från både SD och minneskort
[^7]: Visas endast när du använder ett minneskort, 3DS:ets inbyggda SD-kort eller DSi med Unlaunch installerat
[^8]: Kan bara spara när du kör från ett minneskort

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
