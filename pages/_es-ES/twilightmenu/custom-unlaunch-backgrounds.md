---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Fondos de Unlaunch personalizados
description: Cómo hacer fondos para Unlaunch personalizados e instalarlos con TWiLight Menu++
---

Con TWiLight Menu++ puedes parchear el instalador de Unlaunch para tener una imagen de fondo personalizada. Tiene que ser un GIF de 256x192, con algunas restricciones:
- Solo se puede mostrar el primer frame, no fondos animados
- El archivo debe tener un tamaño máximo de 15,472 bytes
- GIFs con más de 31 colores necesitan paletas especiales para evitar romper el texto

### Instalación
1. Copia el GIF a `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Descarga el último [instalador de Unlaunch](https://problemkaputt.de/unlaunch.zip) y extrae `UNLAUNCH.DSI` en la tarjeta SD
1. Abre los ajustes de TWiLight Menu++, cambia a la página de `Unlaunch settings`, toca en `Background` y elige el que quieras
1. Sal de los ajustes y abre `Unlaunch DSi Installer`
   - Debería usar tu imagen, si no es el caso apaga la consola y asegúrate de que el GIF cumple los requisitos antes mencionados
1. Selecciona `Install Now`

### Usar GIFs con más de 31 colores
Al cargarse la paleta del GIF en el mismo sitio de la VRAM que la paleta de los textos la sobreescribirá si es muy grande, pero se puede ajustar para incluir la paleta de los textos en la del propio GIF. Usando esto con otros colores también te permitirá tener distintos colores para los textos, si es lo que quieres. Estas instrucciones son para [GIMP](https://gimp.org), pero cualquier editor de imágenes capaz de reorganizar la paleta de una imagen también servirá.
1. Abre la imagen en GIMP y asegúrate que es de 256x192 píxeles
1. En la barra superior del menú, selecciona `Image` -> `Mode` -> `Indexed...`
1. Selecciona `Generate optimum palette` y pon como colores máximos cualquier cantidad hasta 226
1. Elige un patrón de dithering en el desplegable de `Color dithering`
   - Las imágenes sin dithering suelen comprimirse mejor, pero se ven mejor si se usa, así que prueba y elige la que más te guste
1. Pincha en `Convert`
1. En la barra superior del menú, selecciona `File` -> `Export As...`, dale un nombre con extensión `.gif`, y pincha `Export`
   - Si salta alguna advertencia, pincha en Aceptar
1. En la siguiente ventana, desactiva `GIF comment` y pincha en `Export`
1. Comprueba el tamaño del archivo exportado, si tiene 15,472 bytes o menos salta al paso 13
1. Si el GIF es demasiado grande, usa [gifsicle](http://www.lcdf.org/gifsicle/) o [ezgif.com](https://ezgif.com/optimize) para optimizarlo
   - Estas instrucciones son para ezgif al ser una página web y más simple
1. Abre https://ezgif.com/optimize y sube tu GIF
1. Try different compression levels until you find the best one under 15,472 bytes (15.11 KiB), ideally a bit under as GIMP may increase the size a bit
1. Guarda el GIF optimizado y ábrelo en GIMP
1. En la barra superior del menú, selecciona `Windows` -> `Dockable Dialogs` -> `Colormap`
1. Cambia `Foreground color` a #080808 y añade 14 colores nuevos con el botón `+`
    - Si la imagen no tiene como mínimo 133 tendrás que añadir colores de relleno para poner los colores de los textos en sus posiciones correctas
1. Haz click derecho en Colormap y selecciona `Rearrange Colormap...`
1. Organiza los nuevos colores para que cuadren con estos: (la segunda y tercera columna a partir del índice 49)<br> ![Paleta con los colores correctos de los textos](https://cdn.discordapp.com/attachments/614278143527878658/770777177904906240/unlaunch-palette.png)
1. Usa el selector de colores para hacer que los nuevos cuadren con los de la imagen de arriba
1. En la barra superior del menú, selecciona `File` -> `Export As...`, dale un nombre con extensión `.gif`, y pincha `Export`
1. En la siguiente ventana, comprueba que `GIF comment` está desactivado y pincha en `Export`
1. Comprueba que la imagen está por debajo de 15,472 bytes, si es demasiado grande repite el proceso a partir del paso 10 con un nivel de compresión mayor
1. ¡Hecho! ¡Sigue la sección de [Instalación](#installing) para usar tu imagen!
