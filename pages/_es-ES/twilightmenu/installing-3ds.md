---
lang: es-ES
layout: wiki
section: twilightmenu
category: installing
title: Instalación (3DS)
long_title: Instalar TWiLight Menu++ (3DS)
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

### Acceder al contenido de las flashcards

Una flashcard es una tarjeta que va en la ranura de los cartuchos, en la que puedes introducir una tarjeta microSD. Si no tienes una flashcard, no es necesario que sigas estos pasos.
{:.alert .alert-warning}

#### Si tienes una R4(i) Ultra

1. Sigue [esta](installing-flashcard)guía desde el punto `Para ejecutar juegos usando el firmware de tu Flashcard`
     - Puedes ignorar las advertencias
1. Abre los ajustes de TWLMenu++
1. Cambia a la pestaña `Otros ajustes`
1. Habilita la opción `Acceso a microSD en Slot-1`
1. Sal de los ajustes de TWLMenu++ pulsando el botón `B`
     - Si te salta el menú Clásico DS, presiona `B` otra vez

#### Si no tienes una R4(i) Ultra

1. Crea un archivo llamado `primary` en `sd:/_nds/` (no en la SD de la flashcard), para que TWiLight Menu++ lea las configuraciones de la tarjeta SD de la consola después de iniciar tu flashcard
1. Sigue [esta](installing-flashcard)guía desde el punto `Iniciar TWiLight Menu++ automáticamente`
1. Copia el archivo `BOOT.NDS` del archivo `TWiLightMenu-Flashcard.7z` a la carpeta raíz de la tarjeta microSD de tu flashcard
1. Abre los ajustes de TWLMenu++
1. Cambia a la pestaña `Otros ajustes`
1. Habilita la opción `Acceso a SCFG en Slot-1` (Ten en cuenta que esta opción toma prioridad sobre `Acceso a SD en Slot-1`)
1. Establece la opción `Slot-1: Configuración Táctil` a `Modo DSi`
1. Habilita la opción `Inicio Automático del Slot-1`
1. Sal de los ajustes de TWLMenu++ pulsando el botón `B`
     - Si te salta el menú Clásico DS, inicia tu flashcard
     - Si te salta cualquier otra cosa, reinicia TWiLight Menu++

#### Cambiar entre el contenido de la tarjeta SD y de la flashcard
- Presiona o bien `Select`+`Arriba` o `Select`+`Abajo` para cambiar entre los contenidos de la tarjeta SD y de la flashcard
     - Si el menú SELECT está habilitado, puedes hacerlo desde allí también
     - Si usas el tema 3DS, toca el icono del cartucho o de la tarjeta SD
     - Si usas el tema R4 Original/GBC, presiona el botón `L`
