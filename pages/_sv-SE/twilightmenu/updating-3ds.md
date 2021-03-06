---
lang: sv-SE
layout: wiki
section: twilightmenu
category: updating
title: Uppdatering (3DS)
description: Hur man uppdaterar TWiLight Menu+ + på Nintendo 3DS
---

Om du uppdaterar från en version äldre än v16.4.0, vänligen flytta dina `.sav` filer för DS spel till en ny mapp som heter `saves`. Se till att `saves` mappen är på samma plats som DS roms.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Öppna Universal-Updater
   - Om du inte har det, följ [dessa installations instruktioner](installing-3ds)
1. Hitta TWiLight Menu++ i apprutnätet. Du kan söka med den tredje fliken i sidofältet om du har problem med att hitta appen
1. Tryck på <kbd class="face">A</kbd> eller tryck på nedladdningsikonen i sidofältet och välj `TWiLight Menu++` för att installera den
   - Det kommer att ta ett tag
{% endcapture %}

{% capture tab-manual %}
1. Ladda ner den senaste versionen av `TWiLightMenu-3DS.7z` från [releases sidan](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extrahera `TWiLightMenu-3DS.7z`
1. Kopiera mappen `_nds` till ditt SD-korts rot
1. Kopiera filen `BOOT.NDS` till din SD-korts rot
1. Kopiera de två `.cia` filerna till ditt SD-korts rot
1. På din 3DS, installera de två CIA filerna med FBI
{% endcapture %}

### Uppdatering

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manuellt</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manuellt</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### Fler steg för minneskort

Om du kan växla mellan innehållet av SD och minneskort i TWLMenu++, och om minneskortets TWLMenu++ är på v16.3.0 eller senare, följ dessa steg.

1. Gå till TWLMenu++ inställningar
1. Välj `Uppdatera TWiLight Menu++`
1. Välj `Konsolens (micro)SD > Slot-1 microSD`
