---
lang: es-ES
layout: wiki
section: twilightmenu
category: updating
title: Actualización (3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
---

Si estás actualizando desde una versión anterior a v16.4.0, mueve los archivos `.sav` de los juegos de DS, que se encuentran en la misma carpeta que tus ROMs, a una nueva llamada `saves` también en la carpeta de las ROMs.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Abre Universal-Updater
   - Si no lo tienes, sigue las instrucciones de [instalación](installing-3ds)
1. Busca TWiLight Menu++ en la lista de apps, puedes buscarlo en la 3a opción de la columna lateral si no consigues encontrarlo
1. Presiona <kbd class="face">A</kbd> o toca el icono de descarga en el lateral y selecciona `TWiLight Menu++` para instalarlo
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Actualización

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### Más pasos desde la flashcard

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
