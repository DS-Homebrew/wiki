---
lang: es-ES
layout: wiki
section: gbarunner2
title: Volcar la BIOS de GBA
description: Como extraer la BIOS de GBA desde tu consola
tabs:
  - 
    3ds-sd-card: 3DS usando open_agb_firm
    gba-flashcart: GBA/DS/DS Lite con una flashcard de GBA
---

Si bien la mayoría de emuladores de GBA pueden ejecutar juegos de GBA por si mismos, algunos emuladores e hipervisores, como GBARunner2, necesitan una BIOS para ejecutar correctamente algunos títulos.

Hay dos forma distintas de conseguir una BIOS:
- una 3DS con firmware personalizado
- Una GBA/DS/DS Lite con una flashcard de GBA

{% capture tab-3ds-sd-card %}
### Parte 1: Obtener los archivos necesarios
1. Descarga [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) (el archivo `.7z`)
1. Descarga [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Crea una carpeta llamada `payloads` dentro de la carpeta `/luma`, si es que esta no existe
1. Copia `open_agb_firm.firm` desde el archivo `.7z` de open_agb_firm a la carpeta `/luma/payloads`
1. Copia `Bios_Dumper.gba` a la carpeta raíz de tu tarjeta SD
1. Vuelve a insertar tu tarjeta SD en tu consola

### Parte 2: Bios_Dumper
1. Mantén pulsado <kbd>START</kbd>, y sin soltar el botón, enciende la consola
    - Esto iniciará open_agb_firm
    - Si en su lugar inicia `Luma3DS Chainloader`, selecciona `open_agb_firm` desde este menú
    - Si inicia cualquier otra cosa, no copiaste `open_agb_firm.firm` a la carpeta correcta en tu tarjeta SD
1. Desde open_agb_firm, inicia `Bios_Dumper.gba`
1. La pantalla parpadeará en rojo, y luego en verde
1. Espera más o menos cinco segundos
1. Apaga la consola

{% capture upload-bios-text %}
Sube el archivo `/3ds/open_agb_firm/saves/Bios_Dumper.sav` desde tu tarjeta SD aquí:
{% endcapture %}

### Parte 3: Desempaquetar la BIOS desde el archivo de guardado generado
1. Inserta la tarjeta SD en tu ordenador
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### Parte 1: Obtener los archivos necesarios
1. Descarga [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba)
1. Copia el archivo `Bios_Dumper.gba` a la carpeta raíz de la tarjeta SD de tu flashcard
1. Vuelve a insertar tu tarjeta SD en tu flashcard
1. Inserta tu flashcard en tu consola

### Parte 2: Bios_Dumper
1. Inicia la flashcard, y luego inicia `Bios_Dumper.gba`
1. La pantalla parpadeará en rojo, y luego en verde
1. Espera más o menos cinco segundos
1. Apaga la consola

{% capture upload-bios-text %}
Sube el archivo `/3ds/open_agb_firm/saves/Bios_Dumper.sav` desde tu tarjeta SD aquí:
{% endcapture %}

### Parte 3: Desempaquetar la BIOS desde el archivo de guardado generado
1. Inserta la tarjeta SD en tu ordenador
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Se descargará automáticamente un archivo `bios.bin`. Este es el archivo final de la BIOS de GBA.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
