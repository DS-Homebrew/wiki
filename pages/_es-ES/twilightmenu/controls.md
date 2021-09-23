---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Controles
long_title: Controles de TWiLight Menu++
description: Controles para usar TWiLight Menu++
---

#### Temas de Nintendo DSi, Nintendo 3DS, SEGA Saturn y Homebrew Launcher
- <kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Seleccionar juego o aplicación.
- <kbd class="face">A</kbd>/<kbd>START</kbd>: Iniciar juego o aplicación
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Cambiar páginas
- (Tema DSi/Saturn/HBL) <kbd>SELECT</kbd> + <kbd>Arriba</kbd>/<kbd>Abajo</kbd> y luego soltar <kbd>SELECT</kbd>: Cambiar entre contenidos de la tarjeta SD y la flashcard
- <kbd class="face">Y</kbd>: Ajustes del juego
   - <kbd class="face">X</kbd>: Trucos
      - <kbd class="face">A</kbd>: Activar truco
      - <kbd class="face">B</kbd>: Salir del menú de trucos
      - <kbd class="face">X</kbd>: Guardar y salir del menú de trucos
      - <kbd class="face">Y</kbd>: Mostrar descripción del truco
      - <kbd class="l">L</kbd>: Desactivar todos los trucos
- <kbd class="face">X</kbd>: Borrar/ocultar juego
- (Tema DSi/Saturn/HBL) <kbd>SELECT</kbd>: Menú SELECT, o Menú Clásico de DS (donde se pueden acceder al menú del sistema, la configuración de TWiLight Menu++ y el modo GBA)

#### Tema R4
- <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Seleccionar juego o aplicación
- <kbd class="face">A</kbd>: Iniciar juego o aplicación
- <kbd class="l">L</kbd>: Cambiar entre la tarjeta SD y la flashcard
- <kbd class="face">Y</kbd>: Ajustes del juego
   - <kbd class="face">X</kbd>: Trucos
      - <kbd class="face">A</kbd>: Activar truco
      - <kbd class="face">B</kbd>: Salir del menú de trucos
      - <kbd class="face">X</kbd>: Guardar y salir del menú de trucos
      - <kbd class="face">Y</kbd>: Mostrar descripción del truco
      - <kbd class="l">L</kbd>: Desactivar todos los trucos

#### ROMs de DS(i) (usando nds-bootstrap)
No se aplica a DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Arriba</kbd> + <kbd class="face">X</kbd> durante 1 segundo: Intercambia las pantallas
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Abajo</kbd> + <kbd class="face">A</kbd> durante 2 segundos: Volcar la RAM en `sd:/_nds/nds-bootstrap` como `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Abajo</kbd> + <kbd class="face">B</kbd> durante 2 segundos: Volver a TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Abajo</kbd> + <kbd>SELECT</kbd>: Abrir menú dentro del juego
   - <kbd class="r">R</kbd>: Avanzar un fotograma
   - Captura de pantalla
      - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>/<kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Cambiar banco VRAM
      - <kbd class="face">A</kbd>: Guardar captura de pantalla
      - <kbd class="face">B</kbd>: Regresar al menú dentro del juego
   - Visor de la RAM
      - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Navegar
      - <kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Navegar rápido
      - <kbd class="r">R</kbd> + <kbd>Abajo</kbd>/<kbd>Arriba</kbd>: Navegar aún más rápido
      - <kbd class="r">R</kbd> + <kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Navegar lo más rápido
      - <kbd class="face">A</kbd>: Entrar al editor de la RAM
      - <kbd class="face">B</kbd>: Regresar al menú dentro del juego
      - <kbd class="face">Y</kbd>: Especificar una dirección a la que saltar
        - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Incrementar/Disminuir valor seleccionado
        - <kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Seleccionar un valor
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Volver al visor/editor de la RAM en la dirección especificada
   - Editor de la RAM
      - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>/<kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Seleccionar un valor
      - <kbd class="face">A</kbd>: Modificar valor seleccionado
         - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Incrementar/Disminuir valor por 1h
         - <kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Incrementar/Disminuir valor por 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Terminar de modificar el valor
      - <kbd class="face">B</kbd>: Volver al visor de RAM
      - <kbd class="face">Y</kbd>: Especificar dirección a la que saltar
        - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Incrementar/Disminuir valor seleccionado
        - <kbd>Izquierda</kbd>/<kbd>Derecha</kbd>: Seleccionar un valor
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Volver al visor/editor de la RAM en la dirección especificada
- En algunos modelos de 3DS original no se puede volver a TWiLight Menu++
- La combinación de botónes para abrir el menú de nds-bootstrap dentro del juego puede cambiarse en la configuración de TWiLight Menu++
- Las capturas de pantalla se guardan en el archivo `sd:/_nds/nds-bootstrap/screenshots.tar`. Este archivo puede abrirse usando un visor de archivos como [7-zip](https://www.7-zip.org/)
- El volcado de la memoria RAM y la realización de capturas de pantalla no son posibles actualmente en el modo B4DS

#### Atajos al arrancar
Estas combinaciones pueden hacerse en la pantalla de bienvenida de TWiLight Menu++ / justo después de la de Nintendo DSi.

- <kbd>SELECT</kbd>: Abrir los ajustes
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Restablecer los ajustes de TWiLight Menu++
- <kbd class="face">B</kbd>: Lanzar última ROM usada
