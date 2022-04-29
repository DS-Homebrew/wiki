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

Si está actualizando de una versión inferior a v6.8.3, mueva sus archivos `.sav` (de juegos de DS) a una nueva carpeta llamada `saves`, la cual debe estar presente dentro de la misma carpeta que las ROMs de DS.
{:.alert .alert-info}

Si estás intentando actualizar desde una versión anterior a la 21.0.0, por favor, mueve tus archivos `.pub` y/o `.prv` de títulos DSiWare a una nueva carpeta llamada `saves`, que se encuentra dentro de la misma carpeta que las roms de DSiWare.
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
1. Copia la carpeta `_nds` a la carpeta raíz de tu tarjeta SD, y reemplaza los archivos existentes
   - Si usas macOS, asegurate de **copiar** y `unificar`, no `reemplazar`
1. Copia el archivo `BOOT.NDS` a la carpeta raíz de tu tarjeta SD, y reemplaza cualquier archivo existente
1. Copia los dos archivos de extensión `.cia` a la carpeta raíz de tu tarjeta SD, y reemplaza los archivos existentes
1. En la 3DS, instala los dos CIAs con FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Actualización

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Más pasos desde la flashcard

Si puedes cambiar entre los contenidos de la tarjeta SD y la flashcard desde TWiLight Menu++, y la versión de TWiLight Menu++ de la flashcard es 16.3.0 o anterior, por favor, sigue estos pasos.

1. Ve a los ajustes de TWLMenu++
1. Selecciona `Actualizar TWiLight Menu++`
1. Selecciona `(micro)SD de la consola>microSD de la Slot-1`
