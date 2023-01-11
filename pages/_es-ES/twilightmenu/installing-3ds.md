---
lang: es-ES
layout: wiki
section: twilightmenu
category: installing
title: Instalación (3DS)
long_title: Instalando TWiLight Menu++ (3DS)
description: Cómo instalar TWiLight Menu++ en la Nintendo 3DS
tabs:
  - 
    working-camera: Con cámara
    non-working-camera: Sin cámara
    manual: Manual
---

Primero necesitaras tener un firmware personalizado en tu consola. Sigue la guía de [3ds.hacks.guide](https://3ds.hacks.guide) para instalarlo.
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Abre FBI y selecciona `Remote Install`, después `Scan QR Code`
1. Escanea el código QR para instalar la última versión de [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Código QR de Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Cierra FBI e inicia Universal-Updater
   - Si no aparece en el Menú HOME, reinicia la 3DS
1. Busca TWiLight Menu++ en la lista de apps, puedes buscarlo en la 3a opción de la columna lateral si no consigues encontrarlo
   - Tiene este icono: ![Icono de TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Presiona <kbd class="face">A</kbd> o toca el icono de descarga en el lateral y selecciona `TWiLight Menu++` para instalarlo
   - Esto llevará un tiempo
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Descarga [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia) de la versión más reciente
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
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Descarga [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) de la versión más reciente
1. Extrae `TWiLightMenu-3DS.7z`
1. Copia la carpeta `_nds` en la raíz de tu tarjeta SD
1. Copia el archivo `BOOT.NDS` en la raíz de tu tarjeta SD
1. Copia la carpeta `roms` en la raíz de tu tarjeta SD
1. Copia el archivo `.cia` a la raíz de tu tarjeta SD
1. En tu 3DS, instala la CIA con FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Instalación

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
     - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, launch your flashcard
     - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
     - If the SELECT menu is enabled, you can do so there as well
     - If you use the 3DS theme, touch the Game Card/SD Card icon
     - If you use the R4/GBC theme, press `L` button
