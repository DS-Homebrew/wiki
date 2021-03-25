---
lang: es-ES
layout: wiki
section: twilightmenu
category: updating
title: Actualización (3DS)
description: Cómo actualizar TWiLight Menu++ en la Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manual
---

Si estás actualizando desde una versión anterior a v16.4.0, mueve los archivos `.sav` de los juegos de DS, que se encuentran en la misma carpeta que tus ROMs, a una nueva llamada `saves` también en la carpeta de las ROMs.
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
1. Descarga la última versión de `TWiLightMenu-3DS.7z` desde la [página de lanzamientos](https://github.com/DS-Homebrew/TWiLightMenu/releases)
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

Si puedes cambiar entre el contenido de la SD y la flashcard en TWLMenu++ y el TWLMenu++ de la flashcard está en la versión v16.3.0 o superior, sigue estos pasos.

1. Ve a los ajustes de TWLMenu++
1. Selecciona `Update TWiLight Menu++`
1. Selecciona `Console (micro)SD > Slot-1 microSD`
