---
lang: es-ES
layout: wiki
section: twilightmenu
category: updating
title: Actualización (3DS)
description: Cómo actualizar TWiLight Menu++ en la Nintendo 3DS
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

{% capture tab-manual %}
1. Descarga la última versión de `TWiLightMenu-3DS.7z` desde la [página de lanzamientos](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extrae `TWiLightMenu-3DS.7z`
1. Copia la carpeta `_nds` en la raíz de tu tarjeta SD
1. Copia el archivo `BOOT.NDS` en la raíz de tu tarjeta SD
1. Copia los dos archivos `.cia` en la raíz de tu tarjeta SD
1. Desde la 3DS, instala los dos CIAs con FBI
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

Si puedes cambiar entre los contenidos de la SD y la flashcard en TWLMenu++ y el TWLMenu++ de la flashcard está en la versión v16.3.0 o superior, sigue estos pasos.

1. Ve a los ajustes de TWLMenu++
1. Selecciona `Update TWiLight Menu++`
1. Selecciona `Console (micro)SD > Slot-1 microSD`
