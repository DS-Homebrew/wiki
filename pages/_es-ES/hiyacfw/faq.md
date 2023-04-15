---
lang: es-ES
layout: faq
section: hiyacfw
title: Preguntas frecuentes y soluciones
long_title: Preguntas frecuentes y resolución de problemas de hiyaCFW
description: Preguntas frecuentes y resolución de problemas de hiyaCFW
---

#### ¿Cómo instalo aplicaciones o títulos DSiWare a la SDNAND hiyaCFW?
Necesitas usar [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) para instalar aplicaciones a la SDNAND, pero las aplicaciones Homebrew para DS podrían no ser compatibles.
- Si quieres instalar ROMs volcadas de cartuchos, deberás usar un [redireccionador](../ds-index/forwarders)

#### ¿Por qué aparece el código de error #-2435-8325?
Si tu consola muestra un error en este formato al encender, siendo # un número, significa segunda fase de inicio de la consola piensa que algo va mal con tu SDNAND. Normalmente eso se arregla [reinstalando hiyaCFW](installing).

#### ¿Por qué aparece el mensaje "Ha ocurrido un error" al iniciar hiyaCFW?
Cuando la Nintendo DSi detecta un problema, usualmente muestra este mensaje de error genérico, algunas de las posibles causas son:

##### El bug del espacio libre
El menú de la Nintendo DSi tiene un bug que ocurre al comprobar el espacio libre en dispositivos de almacenamiento grandes. Si bien esto no puede ocurrir en la propia NAND (ya que el chip es de solamente 256 MiB), sí puede pasar al usar una tarjeta SD.

Lo que funciona y lo que no, se ve dictado por cada dos potencias de dos gibibytes. Por ejemplo, tener de 0 a 2 GiB de espacio libre funciona, pero de 2 a 4 GiB no. Lo mismo va para espacios de 4 a 6 GiB frente a espacios de 6 a 8 GiB, y así hasta llegar al tamaño de espacio de almacenamiento de tu tarjeta SD.

La última versión de hiyaCFW puede crear archivos de relleno para evitar este problema, así que asegúrate de descargar la última versión de [hiyaCFW](https://github.com/RocketRobz/hiyaCFW/releases/latest/download/hiyaCFW.7z) y copia `hiya.dsi` desde la carpeta "for SDNAND SD card" a la carpeta raíz de tu tarjeta SD.

##### Más de 39 títulos
El menú de la Nintendo DSi tiene un límite de 39 títulos. Si tienes más títulos que eso, elimina algunas de las carpetas en `sd:/title` o usa [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest) para desinstalar algunos.

##### Mucho espacio usado por títulos DSiWare
También existe un límite de 200 bloques (25MB) para los títulos DSiWare en la carpeta `00030004`. Este error puede evitarse instalando títulos DSiWare como aplicaciones de sistema usando [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest).

##### Título no válido
Hay varias cosas a tener en cuenta al añadir títulos a hiyaCFW:
- No puedes cargar juegos volcados de cartuchos sin usar [redireccionadores](../ds-index/forwarders)
- Las aplicaciones homebrew deben estar hechas con herramientas modernas para poder ejecutarse bien desde el menú de la Nintendo DSi
