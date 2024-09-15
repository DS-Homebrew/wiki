---
lang: es-ES
layout: wiki
section: ds-index
category: guides
title: Volcar la BIOS/el Firmware
description: Como extraer la BIOS y el Firmware desde una Nintendo DS o DSi
tabs:
  - 
    dsi-sd-card: DSi con Unlaunch
    flashcard: Flashcard
---

Algunos emuladores, como melonDS, requieren la BIOS y el Firmware de los modos DS y DSi, que puedes extraer de tu consola. Hay dos forma distintas de conseguir estos archivos:
- Una DSi con Unlaunch
- Una DS/DS Lite/3DS o una DSi sin Unlaunch, junto con una flashcard compatible con la consola

El método de la DSi con Unlaunch extraerá la BIOS y el Firmware de los modos DS y DSi. El método con la flashcard solo extraerá los archivos del modo DS.

{% capture tab-dsi-sd-card %}

En esta guía suponemos que tu consola está modificada y tienes un entorno de CFW moderno, usando el procedimiento de [dsi.cfw.guide](https://dsi.cfw.guide).
{:.alert .alert-warning}

### Parte 1: Obtener los archivos necesarios

1. Descarga [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)
1. Copia `dsibiosdumper.nds` del archivo `.7z` de dsibiosdumper a la carpeta raíz de tu tarjeta SD
1. Vuelve a insertar tu tarjeta SD en tu consola

### Parte 2: dsibiosdumper
1. Con tu consola apagada, mantén pulsados los botones <kbd class="face">A</kbd> y <kbd class="face">B</kbd>, y sin soltarlos, enciende la consola
1. Deberías estar en el menú de Unlaunch
1. Inicia dsibiosdumper desde la lista de aplicaciones
1. Pulsa <kbd class="face">A</kbd> para volcar todo
1. Espera a que el proceso termine
    - Eso podría tardar un rato
1. Después de que la consola termine, pulsa <kbd>SELECT</kbd> para salir de dsibiosdumper
1. Apaga la consola
1. Inserta la tarjeta SD en tu ordenador

Todos los archivos necesarios estarán en la carpeta `dsidump` en la raíz de tu tarjeta SD.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Parte 1: Obtener los archivos necesarios

1. Descarga [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) (el archivo `.nds`)
1. Copia `dsbf_dump.nds` a la tarjeta raíz de tu tarjeta SD
1. Vuelve a insertar tu tarjeta SD en tu flashcard

### Parte 2: dsbf_dump
1. Enciende tu consola
1. Inicia tu flashcard
1. Navega hasta la carpeta raíz de tu tarjeta SD e inicia dsbf_dump
1. Espera a que el proceso termine
1. Después de que la consola termine, pulsa <kbd>START</kbd> para apagar tu consola
    - En los sistemas de la familia de la 3DS, aparecerá el mensaje "Software cerrado." Apaga tu dispositivo manualmente al llegar a esta pantalla
1. Inserta la tarjeta SD en tu ordenador

Todos los archivos necesarios estarán en una carpeta especificada en la pantalla superior de tu consola.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
