---
lang: es-ES
layout: wiki
section: twilightmenu
category: updating
title: Actualización (3DS)
long_title: Actualizando TWiLight Menu++ (3DS)
description: Cómo actualizar TWiLight Menu++ en la Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manual
---

Si estás actualizando desde una versión anterior a v16.4.0, mueve los archivos `.sav` de los juegos de DS, que se encuentran en la misma carpeta que tus ROMs, a una nueva llamada `saves` también en la carpeta de las ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare roms.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Abre Universal-Updater
   - Si no lo tienes, sigue las instrucciones de [instalación](installing-3ds)
1. Busca TWiLight Menu++ en la lista de apps, puedes buscarlo en la 3a opción de la columna lateral si no consigues encontrarlo
1. Presiona <kbd class="face">A</kbd> o toca el icono de descarga en el lateral y selecciona `TWiLight Menu++` para instalarlo
   - Esto llevará un tiempo
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Descarga [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) de la versión más reciente
1. Extrae `TWiLightMenu-3DS.7z`
1. Copia la carpeta `_nds` en la raíz de tu tarjeta SD
1. Copia el archivo `BOOT.NDS` en la raíz de tu tarjeta SD
1. Copia los dos archivos `.cia` en la raíz de tu tarjeta SD
1. Desde la 3DS, instala los dos CIAs con FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Actualización

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Más pasos desde la flashcard

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Ve a los ajustes de TWLMenu++
1. Selecciona `Update TWiLight Menu++`
1. Selecciona `Console (micro)SD > Slot-1 microSD`
