---
lang: nl-NL
layout: wiki
section: twilightmenu
category: updating
title: Bijwerken (Flashkaart)
long_title: TWiLight Menu++ Bijwerken (Flashkaart)
description: Hoe kan ik TWiLight Menu++ bijwerken op een Nintendo DS-flashkaart
---

Als je bijwerkt vanaf een versie ouder dan v16.4.0, verplaats dan je `.sav`-bestanden voor DS-games naar een nieuwe map genaamd `saves`, waarbij de map `saves` op dezelfde plaats staat als de DS-ROM's.
{:.alert .alert-info}

Als je bijwerkt vanaf een versie ouder dan v21.0.0, verplaats dan je `.pub`- en/of `.prv`-bestanden voor DSiWare-titels naar een nieuwe map genaamd `saves`, waarbij de map `saves` op dezelfde plaats staat als de DSiWare-ROM's.
{:.alert .alert-info}

### Bijwerken
1. Download de meest recente versie van [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Pak `TWiLightMenu-Flashcard.7z` uit
1. Kopieer de map `_nds` naar de root van de micro-SD-kaart van je flashkaart, alle bestaande bestanden zullen worden vervangen
   - Als je macOS gebruikt, zorg er dan voor dat je **kopieert** en `Samenvoegt`, en niet `Vervangt`
1. Kopieer het bestand `BOOT.NDS` naar de root van de micro-SD-kaart van je flashkaart, alle bestaande bestanden zullen worden vervangen
1. Als TWLMenu++ niet opstart na het bijwerken, werk dan ook de autoboot bestanden bij

### Meer stappen voor de DSi-/3DS-SD-kaart

Als je in TWLMenu++ kan schakelen tussen de inhoud van de SD- en flashkaart, en als de flashkaart TWLMenu++ op v16.3.0 of later staat, volg dan deze stappen.

1. Ga naar TWLMenu++-instellingen
1. Kies `Update TWiLight Menu++`
1. Kies `Slot-1 microSD > Console (micro)SD`
