---
lang: sv-SE
layout: wiki
section: twilightmenu
category: customization
title: Anpassade typsnitt
description: Hur du använder dina egna typsnitt med TWiLight Meny++
---

TWiLight Menu++ kan använda anpassade typsnitt i formatet NFTR (Nitro FonT Resource). They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### Mappstruktur
Anpassade typsnitt laddas från `sd:/_nds/TWiLightMenu/extras/fonts/[typsnittsnamn]/[typsnittsfil].ftr`, där `[typsnittsnamn]` är det namn du vill ha och `[typsnittsfil].ftr` är en av följande:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. Ladda en NFTR-fil i nftr-editor
1. Skriv in namnen på de typsnitt du vill använda från högsta till lägsta prioritet i textrutan `Input font` kommaseparerad
    - Du kan se en förhandsvisning av inmatningsformaten i den övre rutan till vänster och den nuvarande NFTR i den nedre rutan
1. Klicka på `Generate from font`, tryck på `OK` för att regenerera befintliga tecken eller `Avbryt` för att regenerera specialknapptecken (t. ex. &#xE000;)
1. Klicka på `Save` och upprepa sedan för andra storlekar
