---
lang: es-ES
layout: wiki
section: twilightmenu
category: installing
title: Instalación (3DS)
description: Cómo instalar TWiLight Menu++ en la Nintendo 3DS
---

Primero necesitas tener un Custom Firmware en la 3DS, consulta [3ds.hacks.guide](https://3ds.hacks.guide) para instalarlo
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Abre FBI y selecciona `Remote Install`, después `Scan QR Code`
1. Escanea el código QR para instalar la última versión de [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Código QR de Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Cierra FBI e inicia Universal-Updater
   - Si no aparece en el Menú HOME, reinicia la 3DS
1. Busca TWiLight Menu++ en la lista de apps, puedes buscarlo en la 3a opción de la columna lateral si no consigues encontrarlo
   - Tiene este icono: ![Icono de TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Presiona <kbd class="face">A</kbd> o toca el icono de descarga en el lateral y selecciona `TWiLight Menu++` para instalarlo
   - Esto llevará un tiempo
{% endcapture %}

{% capture tab-non-working-camera %}
1. Descargar el archivo `Universal-Updater.cia` desde la [página de lanzamientos de Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases)
1. Coloca el archivo `Universal-Updater.cia` en cualquier sitio de tu tarjeta SD
1. Abre FBI en la Nintendo 3DS
1. En FBI, localiza el archivo `Universal-Updater.cia`
1. Selecciona el archivo `Universal-Updater.cia` y pulsa "Install & Delete"
1. Cierra FBI e inicia Universal-Updater
   - Si no aparece en el Menú HOME, reinicia la 3DS
1. Busca TWiLight Menu++ en la lista de apps, puedes buscarlo en la 3a opción de la columna lateral si no consigues encontrarlo
   - Tiene este icono: ![Icono de TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Presiona <kbd class="face">A</kbd> o toca el icono de descarga en el lateral y selecciona `TWiLight Menu++` para instalarlo
   - Esto llevará un tiempo
{% endcapture %}

{% capture tab-manual %}
1. Descarga la última versión de `TWiLightMenu-3DS.7z` desde la [página de lanzamientos](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extrae `TWiLightMenu-3DS.7z`
1. Copia la carpeta `_nds` en la raíz de tu tarjeta SD
1. Copia el archivo `BOOT.NDS` en la raíz de tu tarjeta SD
1. Copia la carpeta `roms` en la raíz de tu tarjeta SD
1. Copia los dos archivos `.cia` en la raíz de tu tarjeta SD
1. Desde la 3DS, instala los dos CIAs con FBI
{% endcapture %}

### Instalación

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Con cámara</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Sin cámara</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Con cámara</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Sin cámara</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
