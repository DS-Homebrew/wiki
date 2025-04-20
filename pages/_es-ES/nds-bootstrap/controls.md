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
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 2 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">B</kbd> for 2 seconds: Return to loader
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> por 2 segundos: Reiniciar el juego
    - Muchos juegos permiten esta función de forma nativa, pero nds-bootstrap forzará el reinicio, así el juego no lo admita
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd>Abajo</kbd> + <kbd>SELECT</kbd>: Abrir el menú dentro del juego
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
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
        - <kbd>SELECT</kbd>: Switch between [ARM7 and ARM9 memory maps](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
    - Editor de RAM
        - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>/<kbd>Izq.</kbd>/<kbd>Der.</kbd>: Seleccionar valor
        - <kbd class="face">A</kbd>: Modificar valor seleccionado
            - <kbd>Arriba</kbd>/<kbd>Abajo</kbd>: Incrementar/Disminuir valor por 1 (hexadecimal)
            - <kbd>Izq.</kbd>/<kbd>Der.</kbd>: Incrementar/Disminuir valor por 10 (hexadecimal)
            - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Terminar de editar valor y guardar
        - <kbd class="face">B</kbd>: Salir del modo de edición
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- Returning to loader may not work on some O3DS models, and does not work in B4DS mode when running DSiWare
- El comando para abrir el menú dentro del juego puede cambiarse en los ajustes de TWiLight Menu++
- El control de volumen preciso puede desactivarse en los ajustes de TWiLight Menu++
- Las capturas de pantalla se guardan en el archivo `sd:/_nds/nds-bootstrap/screenshots.tar`. Puedes abrir este archivo usando un programa que gestione archivos comprimidos [7-Zip](https://www.7-zip.org/)
