---
lang: sv-SE
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS Skins - Custom SFX
description: Hur man använder anpassad bakgrundsmusik och ljudeffekter i DSi och 3DS stilar för TWiLight Menu++
---

TWiLight Menu++ supports custom sound files in themes. Place your sound files under the `sound` subdirectory in your theme folder, for example for the `white` theme, you would place the files at `themes/white/sound/sfx.bin` and `themes/white/sound/bgm.pcm.raw` respectively. Båda filerna är frivilliga, om en saknas kommer standardmusiken att användas. Du bör då också ställa in musikalternativet i inställningarna till "Tema".

Dessa instruktioner förutsätter att du har devkitPro installerat med mmutil. Du kan skaffa devkitPro på [devkitPro-webbplatsen](https://devkitpro.org/wiki/Getting_Started).

## Ljudeffekter
Ljudeffektbanken innehåller ljudeffekter som spelas när du väljer ikoner, etc.

| Fil         | Beskrivning                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| startup.wav | Spelas vid uppstart. Se avsnittet om [Uppstartsljud](#startup-sound) för mer information |
| back.wav    | Tillbaka                                                                                 |
| launch.wav  | Spelas när du startar ett spel                                                           |
| select.wav  | Spelas när du flyttar markören                                                           |
| wrong.wav   | Spelas när du når slutet av sidan                                                        |
| switch.wav  | Spelas vid byte av sidor                                                                 |
| stop.wav    | Spelas på DSi Temat när markören slutar flytta                                           |
| bgm.pcm.raw | Inte en del av ljudbanken. Se avsnittet om [Meny BGM](#menu-bgm) för mer information     |

Du kan sedan köra `make` för att skapa ljudeffektbanken. Alla filer som anges ovan, förutom *bgm.pcm.raw* krävs, men du kan göra dem tysta.

Din resulterande *sfx.bin* **måste vara under 512000B = 512 Kb**. Större filer kommer att resultera i antingen kraschar eller några ljud som inte spelar helt.

### Uppstartsljud
Medan de andra ljudeffekterna kommer att fungera med någon WAV-fil, uppstartsljudet måste vara i ett visst format för att fungera korrekt, annars kommer det att finnas en lucka mellan när uppstartsljudet stannar och bakgrundsmusiken börjar.

Startup.wav filen måste vara **16-bitars 16 kHz**. Du kan använda [Audacity](https://www.audacityteam.org/download/) till exempel för att konvertera till detta format. När filen är laddad i Audacity, ändra **Project Rate (Hz)** till **16000**, tryck sedan på **Shift+M**och ändra **-Format** till **16-bit PCM**.

Om din fil är i Stereo, bör du också gå till **Tracks > Mix > Mix Stereo down to Mono**.

Du måste ange `PlayStartupJingle=1` i ditt `theme.ini` för att uppstartsjingeln att spela.


## Meny BGM
Meny BGM måste vara en **16-bitars 16 kHz Mono** rå PCM-fil. Nedan finns två metoder för att konvertera ljudfiler till det formatet.

Till skillnad från sfx.bin, *bgm.pcm.raw* kan bli godtyckligt stort.

### ffmpeg
Det enklaste sättet att konvertera musik för användning i TWiLight Menu++ är att köra detta [ffmpeg](https://ffmpeg.org) kommando i en terminal:

```bash
ffmpeg -i [inmatningsfil] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Ersätt `[inmatningsfil]` med namnet på filen du vill konvertera. Du kan vanligtvis göra detta genom att helt enkelt dra filen till terminalfönstret med markören på rätt plats.

### Audacity
Om du inte vill använda kommandoraden så kan du också konvertera med [Audacity](https://www.audacityteam.org/download/).

För att konvertera ljudet:
1. Ladda filen i Audacity
1. Om din fil är i stereo, klicka på låten och välj sedan `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Ändra `Project Rate (Hz)` längst ned till vänster till `16000`

För att exportera ljudet till rätt format:
1. Välj `File` > `Export` > `Export Audio...`
1. Ställ in `File Type` till `Other uncompressed files`
1. Ställ in `Header` till `RAW (header-less)`
1. Ställ in `Encoding` till `Signed 16-bit PCM`
1. Ställ in utdatanamnet till `bgm.pcm.raw` och klicka `Save`
1. Klicka på `OK` för att redigera metadata

Nu har du en `bgm.pcm.raw`-fil som kan kopieras till mappen `ljud` i din temamapp.
