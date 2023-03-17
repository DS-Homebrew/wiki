---
lang: es-ES
layout: wiki
section: hiyacfw
title: Pantallas de Inicio personalizadas
description: Como usar pantallas de inicio personalizadas en hiyaCFW
---

Con hiyaCFW puedes usar pantallas de inicio personalizadas en formato `.bmp` o `.gif`. Deben estar en la carpeta `sd:/hiya` y nombrados `splashtop` para la imágen de la pantalla superior y `splashbottom` para la pantalla inferior, con las extensiones apropiadas. Asegúrate también de que la opción pertinente esté habilitada en los ajustes. No hace falta que las imágenes estén en el mismo formato, es decir, una puede ser un archivo BMP y otra un GIF. Estos últimos toman prioridad sobre los primeros. Debajo hay más detalles acerca de los requisitos para que tus imágenes funcionen:

### BMP
- 16 bits (sea RGBA 1555, RGB 1555 o RGB 565)
- 256 píxeles de ancho x 192 píxeles de largo o menor

### GIF
- Básicamente, cualquier gif de 256x192 o menor servirá
- Pueden ser gifs animados, pero deberían ser más pequeños de 1MiB para un rendimiento perfecto, y de usarse dos, entre ellos deben tener un tamaño menor a 10MiB
- Si los dos se repiten infinitamente, solo se mostrarán por 3 segundos. De lo contrario, se mostrarán hasta que los dos hayan terminado
- Si hay un frame con la flag de interacción, se esperará hasta que pase el tiempo de espera o se pulse un botón, lo que pase primero
- Los fotogramas entrelazados o de texto ***no*** están admitidos
- Se admiten las tablas de color propias, pero reemplazarán a la paleta de colores entra, incluyendo píxeles residuales de frames anteriores, así que las imágenes que los usen probablemente tendrán problemas con los colores
