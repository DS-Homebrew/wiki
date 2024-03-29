---
lang: es-ES
layout: wiki
section: nds-bootstrap
title: Glosario
description: Glosario para nds-bootstrap
---

## Ajustes
Estos están en los ajustes por juego a través de TWiLight Menu++. Algunas de estas opciones también pueden cambiarse en el menú de nds-bootstrap dentro del juego

### Versión de SDK
Es la versión del kit de desarrollo de software (SDK por sus siglas en inglés) que se usó para compilar la ROM.

### ID de título
The ID of which would be displayed on the bottom of the game card's sticker (ex. `NTR-ASME-USA`). It is retrieved from the ROM by reading it's header.

### Número de guardado
Es el archivo de guardado para el juego seleccionado. Tendrá la extensión `.savX` donde X es el número especificado en los ajustes si el número no es 0. Esto permite tener hasta 10 archivos de guardado para una misma ROM.

### Iniciar en
El modo en el que se ejecutará la ROM. Esto afecta las opciones Veloc. CPU ARM9 y Modo VRAM. Establecerlo a Modo DSi en ROMs que no lo admitan probablemente no tenga ningún efecto.

### Veloc. CPU ARM9
Cambia la velocidad a la que funciona la CPU ARM9. Las ROMs ejecutadas en modo DS usarán 67MHz (NTR) por defecto. Esto puede cambiarse a 133MHz (TWL) para disminuir ralentizaciones, pero también podría causar problemas. Las ROMs ejecutadas en modo DSi sólo pueden ejecutarse a 133MHz (TWL).

### Modo VRAM
Cambia el modo de la Memoria Gráfica de Acceso Aleatorio (VRAM por sus siglas en inglés) del sistema. Las ROMs ejecutadas en modo DS usarán el modo DS por defecto. Esto puede cambiarse para usar el modo DSI pero no tiene efecto, además de causar problemas visuales en algunas ROMs. Las ROMs ejecutadas en modo DSi sólo pueden ejecutarse en modo DSi. If you're playing a TWL-type (DSi-Enhanced or DSiWare) ROM in DSi Mode, the VRAM Mode is set by the game itself.

### Lectura DMA
Habilita el uso del Acceso Directo de Memoria (DMA por sus siglas en inglés) para la lectura de tarjetas. Having this setting on can speed up ROMs slightly, but may cause issues. Para más información técnica al respecto, revisa la [página del Índice de DS](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### Inicio automático
Appears only for homebrew ROMs on flashcards. Setting this to `On` will not use nds-bootstrap when launching the ROM. Es útil para ROMs homebrew que no necesitan o no funcionan con nds-bootstrap.

### Bootstrap
Cambia entre las versiones estables o Nightly de nds-bootstrap a la hora de ejecutar una ROM. Puedes encontrar información acerca de las versiones Nightly en la página de [preguntas frecuentes de nds-bootstrap](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Relación de Aspecto
Si usas una 3DS, puedes cambiar la relación de aspecto a la que jugar a los juegos de 4:3 (opción por defecto para DS/DSi) a 16:10. Solo funciona si la [pantalla panorámica está activada](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).
