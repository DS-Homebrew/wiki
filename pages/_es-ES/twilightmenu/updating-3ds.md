---
lang: es-ES
layout: wiki
section: twilightmenu
category: updating
title: Actualizar (3DS)
long_title: Actualizar TWiLight Menu++ (3DS)
description: Cómo actualizar TWiLight Menu++ en la Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manual
---

Si estás actualizando desde una versión anterior a v6.8.3, mueve tus archivos `.sav` (de juegos de DS) a una nueva carpeta llamada `saves`, la cual debe estar presente dentro de la misma carpeta que las ROMs de DS.
{:.alert .alert-info}

Si estás actualizando desde una versión anterior a la 21.0.0, mueve tus archivos `.pub` y/o `.prv` de títulos DSiWare a una nueva carpeta llamada `saves`, la cual debe estar presente dentro de la misma carpeta que las ROMS de los títulos DSiWare.
{:.alert .alert-info}

If updating from a version older than v25.7.0, it is recommended to delete the `TWiLight Menu++ Game Booter` title from the title list, using FBI
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Abre Universal-Updater
   - Si no lo tienes, sigue las instrucciones de [instalación](installing-3ds)
1. Busca TWiLight Menu++ en la lista de aplicaciones, puedes buscarlo en la tercera opción de la columna lateral si tienes problemas encontrándolo
1. Presiona <kbd class="face">A</kbd> o toca el icono de descarga en el lateral y selecciona `TWiLight Menu++` para instalarlo
   - Esto tardará un rato
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Descarga la versión más reciente de [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Extrae `TWiLightMenu-3DS.7z`
1. Copia la carpeta `_nds` a la carpeta raíz de tu tarjeta SD, y reemplaza los archivos existentes
   - Si usas macOS, asegurate de **copiar** y `unificar`, no `reemplazar`
1. Copia el archivo `BOOT.NDS` a la carpeta raíz de tu tarjeta SD, y reemplaza cualquier archivo existente
1. Copia el archivo `.cia` a la raíz de tu tarjeta SD, y reemplaza cualquier archivo existente.
1. En tu consola, instala el CIA usando FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Actualización

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
