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
- <kbd>Up</kbd>/<kbd>Down</kbd>: Select a game/app
- <kbd class="face">A</kbd>: Launch game/app
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
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Arr</kbd> + <kbd class="face">X</kbd> durante 1 segundo: Intercambia las pantallas
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Abj</kbd> + <kbd class="face">A</kbd> durante 3 segundos: Volcar la RAM en `sd:/_nds/nds-bootstrap` como `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Abj</kbd> + <kbd class="face">B</kbd> durante 2 segundos: Volver a TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Abj</kbd> + <kbd>SELECT</kbd>: Abrir menú dentro del juego
   - Visor de RAM
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="face">A</kbd>: Entrar en el editor de RAM
      - <kbd class="face">B</kbd>: Volver al menú
      - <kbd class="face">Y</kbd>: Especificar dirección a la que saltar
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - Editor de RAM
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modificar valor seleccionado
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
         - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Volver al visor de RAM
      - <kbd class="face">Y</kbd>: Especificar dirección a la que saltar
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- The in-game menu is not accessible in DSi Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will instead exit the game
- En modo B4DS solo funciona la combinación para intercambiar las pantallas
- En algunos modelos de O3DS no se puede volver a TWiLight Menu++

#### Atajos al arrancar
Estas combinaciones pueden hacerse en la pantalla de bienvenida de TWiLight Menu++ / justo después de la de Nintendo DSi.

- <kbd>SELECT</kbd>: Abrir los ajustes
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Restablecer los ajustes de TWiLight Menu++
- <kbd class="face">B</kbd>: Lanzar última ROM usada
