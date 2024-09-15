---
lang: es-ES
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: Cómo hacer hardmod a una Nintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Hardmodding can easily damage your DSi. If you're trying to unbrick your DSi, then you should try [ntrboot](ntrboot) first.
{:.alert .alert-danger}

El hardmodding consiste en soldar un adaptador de tarjetas SD directamente a la placa base de la DSi para poder leerla en un ordenador. Es bastante útil para restaurar copias de seguridad de la NAND, ver la NAND en tu PC, etc...

### Nintendo DS
[![Placa base de la DS original con los puntos de contacto marcados](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

Para modificar por hardware una consola Nintendo DSi/DSi XL (LL), necesitarás:
    - [Un soldador con punta de lápiz](https://www.amazon.com/dp/B01N4571Q6)
    - [Hilo muy fino](https://www.amazon.com/dp/B01MXGNTA4), 28AWG o más pequeño, preferiblemente 30AWG+
    - Adaptador SD a microSD
    - Un lector de tarjetas SD capaz de leer chips eMMC en "single data-line mode". [Esta es una que funciona](https://www.amazon.com/dp/B006T9B6R2)
    - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) y [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) si estás en Windows
    - Una copia de seguridad válida de la NAND de la DSi a la que estás haciendo hardmod
    - Estar cómodo con soldar en puntos de hasta 0.5mm de diámetro

#### Pines en la cara A de la DSi
[![Pines en la cara A de la DSi](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### Pines en la cara B de la DSi
[![Pines en la cara B de la DSi](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### Pines en la cara B de la DSi XL
[![Pines en la cara B de la DSi XL](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Necesitas soldar estos puntos de la placa base con el adaptador de microSD
    - CMD con pin 2
    - GND con pines 3 y 6
    - CLK con pin 5
    - DAT0 con pin 7

#### Ejemplo de adaptador de microSD soldado
[![Ejemplo de microSD](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Inserta el adaptador de microSD en tu ordenador
    - **CUIDADO** - Windows preguntará si quieres formatearlo: **NO LO HAGAS** - puede causar daños irreversibles

#### Quitar el footer de no$gba
Primero tienes que quitar el footer de NOCASH de la copia de seguridad que estás flasheando en la DSi. Esto se puede hacer utilizando [hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Descarga la versión correspondiente a tu sistema operativo
1. Ejecuta el script seleccionando la copia de la NAND que quieres flashear en la DSi
1. Cambia al Modo NAND con el botón a la izquierda de la ruta del archivo
1. Pincha `Start` para hacer la copia de la NAND sin el footer de no$gba

- Cuando haya terminado, debería haber un archivo con un nombre largo que acaba en `-no-footer.bin` en la carpeta que tienes el terminal abierto
    - Usa este archivo como la imagen NAND a flashear en la DSi

{% capture tab-windows %}
1. Abre Win32DiskImager
1. Pincha en el icono de la carpeta y busca tu escritorio. En el cuadro de texto, escribe `NAND_0.bin`. Escoge `All types *.*` como extensión
1. Elige el dispositivo que sea la DSi y pincha leer
1. Cuando haya terminado, pincha en el icono de la carpeta, cambia el nombre a `NAND_1.bin` y vuelve a leer
1. Abre HxD y arrastra ambos archivos al editor. Ve a la barra superior, pincha "Analysis", pincha "File compare" en el menú desplegable y pincha en "Compare".
1. Elige comparar los archivos y pincha OK cuando termine
    - Si dice "The chosen files are identical.", ve a la siguiente sección
    - Si no lo dice, y ambas NANDs no tienen alrededor de 240 MB, vuelca NAND_1/NAND_0 nuevamente
1. Abre Win32DiskImager, pincha en el icono de la carpeta y selecciona la copia de la NAND que has creado antes
1. Flashéala con el botón `Write`
1. Extrae el adaptador de tarjetas SD y prueba a encender la DSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Busca dónde está montada la tarjeta SD
    - Linux:
        1. Extrae el adaptador de tarjetas SD
        1. Corre `lsblk` en un terminal
        1. Conecta el adaptador de tarjetas SD
        1. Corre `lsblk` de nuevo
        1. This time a new device should appear
            - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

    - macOS:
        1. Extrae el adaptador de tarjetas SD
        1. Ejecuta `df` en un terminal
        1. Conecta el adaptador de tarjetas SD
        1. Ejecuta `df` de nuevo
        1. A new device should appear in the list
            - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* computer

1. Vuelca la NAND
    - Ejecuta el siguiente comando en un terminal:
        - `cat {device-name} > nand0.bin`
        - Reemplaza `{device-name}` con la ubicación de montaje de la SD
        - P. ej. `cat /dev/sdb > nand0.bin`
        - Ejecuta `cat {device-name} > nand1.bin`


1. Compara los volcados de NAND
    1. Ejecuta:
        - Linux: `md5sum nand0.bin nand1.bin`
        - macOS: `md5 -r nand0.bin nand1.bin`
    1. Comprueba que los hashes generados coinciden
    1. Si no, vuelve a volcar la NAND, reajustando el cableado si es necesario
    1. Sigue volcando la NAND hasta que los hashes coincidan

1. Flashear la NAND
    1. Localiza la copia de la NAND que has creado antes en la consola
    1. Ejecuta:
        - `cat {existing-nand-backup} > {device-name}`
        - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
        - Replace `{device-name}` with the mount point of the SD card

Ya puedes extraer el adaptador de tarjetas SD y encender la consola. Si todo ha ido bien, la DSi debería encenderse en el mismo estado que cuando hiciste la copia.
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flashear la copia de la NAND
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
