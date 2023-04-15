---
lang: es-ES
layout: wiki
section: nds-bootstrap
title: Controles
long_title: Controles de nds-bootstrap
description: Guía de botones y comandos para nds-bootstrap
---

Estos no aplican para juegos y aplicaciones homebrew.
- <kbd>SELECT</kbd> + <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Control de volumen preciso
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Arriba</kbd> + <kbd class="face">X</kbd> por 1 segundo: Intercambiar las pantallas
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Abajo</kbd> + <kbd class="face">A</kbd> por 2 segundos: Volcar RAM a `sd:/_nds/nds-bootstrap`, con el nombre de `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Abajo</kbd> + <kbd class="face">B</kbd> por 2 segundos: Volver a la pantalla de inicio
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> por 2 segundos: Reiniciar el juego
  - Muchos juegos permiten esta función de forma nativa, pero nds-bootstrap forzará el reinicio, así el juego no lo admita
- <kbd class="l">L</kbd> + <kbd>Abajo</kbd> + <kbd>SELECT</kbd>: Abrir el menú dentro del juego
   - <kbd class="r">R</kbd>: Avanzar un fotograma
   - Captura de pantalla
      - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>/<kbd>Izq.</kbd>/<kbd>Der.</kbd>: Cambiar banco de VRAM
      - <kbd class="face">A</kbd>: Guardar captura de pantalla
      - <kbd class="face">B</kbd>: Regresar al menú anterior
   - Visor de RAM
      - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Desplazarse
      - <kbd>Izq.</kbd>/<kbd>Der.</kbd>: Desplazarse rápido
      - <kbd class="r">R</kbd> + <kbd>Abajo</kbd>/<kbd>Arriba</kbd>: Desplazarse aún más rápidamente
      - <kbd class="r">R</kbd> + <kbd>Izq.</kbd>/<kbd>Der.</kbd>: Desplazarse lo más rápido posible
      - <kbd class="face">A</kbd>: Editar valor
      - <kbd class="face">B</kbd>: Regresar al menú anterior
      - <kbd class="face">Y</kbd>: Saltar a dirección exacta
        - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Aumentar/Disminuir valor seleccionado
        - <kbd>Izq.</kbd>/<kbd>Der.</kbd>: Seleccionar valor
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Aplicar y saltar a dirección
      - <kbd>SELECT</kbd>: Cambiar entre los [mapas de memoria de los procesadores ARM7 y ARM9](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
   - Editor de RAM
      - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>/<kbd>Izq.</kbd>/<kbd>Der.</kbd>: Seleccionar valor
      - <kbd class="face">A</kbd>: Modificar valor seleccionado
         - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Incrementar/Disminuir valor por 1 (hexadecimal)
         - <kbd>Izq.</kbd>/<kbd>Der.</kbd>: Incrementar/Disminuir valor por 10 (hexadecimal)
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Terminar de editar valor y guardar
      - <kbd class="face">B</kbd>: Salir del modo de edición
      - <kbd class="face">Y</kbd>: Saltar a dirección exacta
        - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Aumentar/Disminuir valor seleccionado
        - <kbd>Izq.</kbd>/<kbd>Der.</kbd>: Seleccionar valor
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Aplicar y saltar a dirección
- El comando para volver a la pantalla de inicio podría no funcionar correctamente en algunos modelos de 3DS y no funciona para nada en modo B4DS (nds-bootstrap en flashcards)
- El comando para abrir el menú dentro del juego puede cambiarse en los ajustes de TWiLight Menu++
- El control de volumen preciso puede desactivarse en los ajustes de TWiLight Menu++
- Las capturas de pantalla se guardan en el archivo `sd:/_nds/nds-bootstrap/screenshots.tar`. Puedes abrir este archivo usando un programa que gestione archivos comprimidos [7-Zip](https://www.7-zip.org/)
- Actualmente, no es posible hacer capturas de pantalla en modo B4DS (nds-bootstrap en flashcards)
