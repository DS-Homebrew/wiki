---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Acerca del homebrew en la Nintendo DS
---

### Desarrollo

A la hora de desarrollar homebrew para Nintendo DS, normalmente se usan las herramientas de devkitPro, como devkitARM, libnds y libfat. Sin embargo, se puede usar software alternativo:

- **Librerías para la tarjeta SD:** [DevkitPro](https://devkitpro.org/) recomienda [libfat](https://github.com/devkitPro/libfat). En cambio, nosotros recomendamos [libslim](https://github.com/DS-Homebrew/libslim/), ya que permite el uso de diferentes particiones, mayor velocidad y evitar bloqueos
- **Librerías gráficas:** Recomendamos el uso de [easyGL2D](http://rel.phatcode.net/junk.php?id=117), que viene incluído en libnds. Sin embargo, puedes usar [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Estaciones de trabajo:** Recomendamos [devkitARM](https://devkitpro.org/wiki/Getting_Started) y [libnds](https://libnds.devkitpro.org/), ya que tiene compatibilidad con DSi y un ecosistema más amplio. Sin embargo, si lo que te interesa son las flashcards de Nintendo DS, puedes usar [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Flashcards

Las flashcards en Modo DS son un método para lanzar aplicaciones de Nintendo DS a través del Slot-1. Tienen la ventaja de mantener los archivos de la consola y los portátiles por separado, poder usarlas sin tener que modificar el sistema y son compatibles con las DS Phat/Lite. Sin embargo, al contrario de modear la propia consola, hay muchos modelos distintos en el mercado, cada una con con un kernel con requerimientos distintos. El kernel que usas es lo más importante.

[Hay un índice de flashcards **aún en desarrollo**](https://nightyoshi370.github.io/mm-github-pages-starter/) que contiene kernels, firmware, reseñas y links de compra.

### DLDI

Las diversas ranuras para tarjetas SD tienen hardware distinto (la mayoría de las veces) y el código escrito para una tarjeta no tiene por qué funcionar para otra. DLDI (abreviatura de Dynamically Linked Device Interface) intenta arreglar esto teniendo el código que maneja la tarjeta SD parcheado de forma externa. Loaders como YSMenu, Wood R4 y TWiLight Menu++pueden parchear con DLDI un homebrew, pero si quieres parchearlo manualmente, puedes hacerlo con [DLDI Patcher](https://www.chishm.com/DLDI#tools) dependiendo de tu dispositivo.

### Time bomb

Una time bomb (bomba de relojería) es una "fecha de caducidad" que los distribuidores meten en el kernel para forzar a los usuarios a comprar una tarjeta nueva. Una vez que el reloj de tu sistema pasa por una fecha concreta, el kernel dejará de arrancar. Por suerte, una flag no se activa en cualquier sitio y esto lo maneja el firmware de la flashcard, así que tenemos dos opciones:

- Como depende del reloj del sistema, puedes simplemente retrasar la fecha. Esto romperá cualquier juego que use el reloj, pero te permitirá usar el kernel de base.
- Como depende del kernel y no del firmware, puedes cambiar a un kernel alternativo. Hay dos opciones disponibles:
   - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- El menú es algo feo y solo muestra archivos `.nds` pero tiene una mayor compatibilidad con juegos, se pueden usar trucos y no se necesita un memory pak
   - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) -- Es bastante útil si quieres tener las ROMs de consolas distintas en un mismo menú. Hay dos formas de abrir juegos con TWiLight Menu++:
      - Con B4DS: Necesitas un Memory Expansion Pak para tener mayor compatibilidad con los juegos pero no soporta trucos. Sin embargo, funciona en las mismas flashcards que TWiLight Menu++
      - Con YSMenu: Tienes todos los beneficios de YSMenu junto al menú de TWiLight Menu++, pero los trucos aún no están disponibles

Personalmente, recomendamos YSMenu (con TWiLight Menu++ si lo prefieres), gracias a la alta compatibilidad y no necesitar un Memory Expansion Pak. Si quieres instalar YSMenu, DeadSkullzJr ha creado un [repositorio en Dropbox](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) con todos los kernels primarios ya preparados para tu flashcard. Solo necesitas arrastarlo a la raíz de tu tarjeta SD y habrás terminado. Tienes instrucciones de cómo instalar TWiLight Menu++ [en la página de instalación para flashcards](../twilightmenu/installing-flashcard).

Para saber si tu flashcard tiene una time bomb, pon la fecha de la consola al máximo y lanza la flashcard.

### Soporte ARGV
El ARGV es un transmisor de información entre dos aplicaciones homebrew de Nintendo DS. Puede usarse con forwarders o menús alternativos.

- El homebrew tiene que ser programado para poder sacarle provecho. Por ejemplo, GBARunner2, NesDS y GameYob tienen ARGV implementado
- También tiene que haber alguna forma de cambiar las variables de ARGV. TWiLight Menu++ y HBMenu permiten configurar los argumentos de ARGV
