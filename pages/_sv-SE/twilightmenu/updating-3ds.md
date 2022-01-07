---
lang: sv-SE
layout: wiki
section: twilightmenu
category: updating
title: Uppdatering (3DS)
long_title: Uppdatera TWiLight Meny++ (3DS)
description: Hur man uppdaterar TWiLight Menu+ + på Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manuell
---

If updating from a version older than v6.8.3, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Öppna Universal-Updater
   - Om du inte har det, följ [dessa installations instruktioner](installing-3ds)
1. Hitta TWiLight Menu++ i apprutnätet. Du kan söka med den tredje fliken i sidofältet om du har problem med att hitta appen
1. Tryck på <kbd class="face">A</kbd> eller tryck på nedladdningsikonen i sidofältet och välj `TWiLight Menu++` för att installera den
   - Det kommer att ta ett tag
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Download the latest [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Extrahera `TWiLightMenu-3DS.7z`
1. Kopiera mappen `_nds` till ditt SD-korts rot
1. Kopiera filen `BOOT.NDS` till din SD-korts rot
1. Kopiera de två `.cia` filerna till ditt SD-korts rot
1. På din 3DS, installera de två CIA filerna med FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Uppdatering

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Fler steg för minneskort

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Gå till TWLMenu++ inställningar
1. Välj `Uppdatera TWiLight Menu++`
1. Välj `Konsolens (micro)SD > Slot-1 microSD`
