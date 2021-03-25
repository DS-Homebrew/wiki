---
lang: es-ES
layout: wiki
section: other
title: hiyaCFW
description: Acerca de hiyaCFW
---

Información sobre [hiyaCFW](https://github.com/RocketRobz/hiyaCFW), el primer CFW para DSi.

### Pantallas de inicio personalizadas
Con hiyaCFW puedes usar imágenes personalizadas en formato `.bmp` o `.gif`. Tienen que estar en la carpeta `sd:/hiya` y llamarse `splashtop` para la pantalla superior y `splashbottom` para la inferior con la extensión de archivo apropiada, y asegúrate de que la pantalla de inicio está activada en la configuración. Las imágenes no tienen por qué ser del mismo formato, una puede ser BMP y la otra un GIF, aunque los GIF tienen prioridad sobre los BMPs. Estos son algunos detalles para que las imágenes funcionen:

#### BMP
- 16-bit (RGBA 1555, RGB 1555 o RGB 565)
- 256 x 192 o menor

#### GIF
- Respuesta sencilla: la mayoría de GIFS de tamaño 256 x 192 o menor funcionarán
- Pueden estar animados, pero deben pesar menos de 1 MiB para un rendimiento perfecto y menos de 10 MiB entre los dos
- Si ambos son bucles infinitos se mostrarán durante 3 segundos, en caso contrario pararán cuando ambos terminen un ciclo
- Si un fotograma tiene un input flag parará hasta que se pase el tiempo de espera o se pulse algún botón, dependiendo de cual se haga primero
- ***No*** están soportados fotogramas entrelazados o de texto
- Se pueden usar tablas de color propias pero reemplazarán la paleta entera, incluyendo imágenes residuales de fotogramas anteriores, lo que puede causar problemas en las paletas
