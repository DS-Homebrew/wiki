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
- <kbd>Izq</kbd> / <kbd>Der</kbd>: Seleccionar juego / app
- <kbd class="face">A</kbd> / <kbd>START</kbd>: Abrir juego / app
- <kbd class="l">L</kbd> / <kbd class="r">R</kbd> o <kbd>SELECT</kbd> + <kbd>Izq</kbd> / <kbd>Der</kbd>: Cambiar de página
- (DSi / Saturn / HBL theme) <kbd>SELECT</kbd> + <kbd>Up</kbd> / <kbd>Down</kbd> & release <kbd>SELECT</kbd>: Switch between the SD card and flashcard
- <kbd class="face">Y</kbd>: Ajustes del juego
   - <kbd class="face">X</kbd>: Trucos
      - <kbd class="face">A</kbd>: Activar truco
      - <kbd class="face">B</kbd>: Salir del menú de trucos
      - <kbd class="face">X</kbd>: Guardar y salir del menú de trucos
      - <kbd class="face">Y</kbd>: Mostrar descripción del truco
      - <kbd class="l">L</kbd>: Desactivar todos los trucos
- <kbd class="face">X</kbd>: Borrar/ocultar juego
- (DSi / Saturn / HBL theme) <kbd>SELECT</kbd>: SELECT menu or DS Classic Menu (Where system menu, TWiLight Menu++ Settings, and GBA Mode can be accessed)

#### Tema R4
- <kbd>Arr</kbd> / <kbd>Abj</kbd>: Seleccionar juego / app
- <kbd class="face">A</kbd>: Abrir juego / app
- <kbd class="l">L</kbd>: Cambiar entre la tarjeta SD y la flashcard
- <kbd class="face">Y</kbd>: Ajustes del juego
   - <kbd class="face">X</kbd>: Trucos
      - <kbd class="face">A</kbd>: Activar truco
      - <kbd class="face">B</kbd>: Salir del menú de trucos
      - <kbd class="face">X</kbd>: Guardar y salir del menú de trucos
      - <kbd class="face">Y</kbd>: Mostrar descripción del truco
      - <kbd class="l">L</kbd>: Desactivar todos los trucos

#### ROMs de DS (usando nds-bootstrap)
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Arr</kbd> + <kbd class="face">X</kbd> durante 1 segundo: Intercambia las pantallas
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Abj</kbd> + <kbd class="face">A</kbd> durante 3 segundos: Volcar la RAM en `sd:/_nds/nds-bootstrap` como `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd>Abj</kbd> + <kbd>SELECT</kbd>: Abrir menú dentro del juego
   - Visor de RAM
      - <kbd>Arr</kbd> / <kbd>Abj</kbd>: Desplazarse
      - <kbd>Izq</kbd> / <kbd>Der</kbd>: Desplazamiento rápido
      - <kbd class="face">A</kbd>: Entrar en el editor de RAM
      - <kbd class="face">B</kbd>: Volver al menú
      - <kbd class="face">Y</kbd>: Especificar dirección a la que saltar
        - <kbd>Arr</kbd> / <kbd>Abj</kbd>: Incrementar / Decrementar valor seleccionado
        - <kbd>Izq</kbd> / <kbd>Der</kbd>: Seleccionar valor
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Volver al visor/editor de RAM en una dirección concreta
   - Editor de RAM
      - <kbd>Arr</kbd> / <kbd>Abj</kbd> / <kbd>Izq</kbd> / <kbd>Der</kbd>: Seleccionar valor
      - <kbd class="face">A</kbd>: Modificar valor seleccionado
         - <kbd>Arr</kbd> / <kbd>Abj</kbd>: Incrementar / Decrementar valor en 1
         - <kbd>Izq</kbd> / <kbd>Der</kbd>: Incrementar / Decrementar valor en 10
         - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Dejar de modificar valor
      - <kbd class="face">B</kbd>: Volver al visor de RAM
      - <kbd class="face">Y</kbd>: Especificar dirección a la que saltar
        - <kbd>Arr</kbd> / <kbd>Abj</kbd>: Incrementar / Decrementar valor seleccionado
        - <kbd>Izq</kbd> / <kbd>Der</kbd>: Seleccionar valor
        - <kbd class="face">A</kbd> / <kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
 - The in-game menu is not accessible in DSi Mode, so attempting to use the button combo in DSi Mode will instead exit the game.

#### Atajos al arrancar
Estos comandos pueden hacerse en la pantalla de bienvenida de TWiLight Menu++ / justo después de la de Nintendo DSi.

- <kbd>SELECT</kbd>: Abrir los ajustes
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Restablecer los ajustes de TWiLight Menu++
- <kbd class="face">B</kbd>: Boot the last ran ROM
