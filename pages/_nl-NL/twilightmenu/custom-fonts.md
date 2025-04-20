---
lang: nl-NL
layout: wiki
section: twilightmenu
category: customization
title: Aangepaste Lettertypen
description: Hoe gebruik je aangepaste lettertypen met TWiLight Menu++
---

TWiLight Menu++ kan aangepaste lettertypes in NFTR-formaat (Nitro FonT Resource) gebruiken. They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### Mapstructuur
Aangepaste lettertypen worden geladen van `sd:/_nds/TWiLightMenu/extras/fonts/[lettertypenaam]/[lettertypebestand].nftr` waar `[lettertypenaam]` de gewenste naam is en `[lettertypebestand].nftr` een van de volgende is:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Aangepaste lettertypes genereren
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). Om één van de bestaande lettertypen van TWiLight Menu++ te regenereren:
1. Laad een NFTR-bestand in nftr-editor
1. Typ de namen van de lettertypen die je wilt gebruiken van de hoogste naar de laagste prioriteit in het tekstvak `Input font`, komma gescheiden
    - Je kunt een voorbeeld zien van de invoerlettertypen in het bovenste vak links en de huidige NFTR in het onderste vak
1. Klik op `Generate from font`, en `OK` om bestaande tekens te regenereren en `Cancel` om de speciale knoptekens te regenereren (bijv. &#xE000;)
1. Klik op `Save`, en herhaal dit voor de andere maten
