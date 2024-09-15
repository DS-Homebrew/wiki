---
lang: es-ES
layout: wiki
section: godmode9i
title: GodMode9i
description: Acerca de GodMode9i
---

[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/) es un explorador de archivos de código abierto para el ecosistema Nintendo DS, inspirado en GodMode9 para Nintendo 3DS. GodMode9i puede volcar juegos, gestionar archivos de la tarjeta SD, navegar el sistema de archivos NitroFS, calcular el código SHA1 (hash) de archivos, editar archivos binarios con su editor hexadecimal, y más.

## Función de volcado

Para volcar juegos, selecciona la unidad en la lista de unidades y sigue las indicaciones en pantalla.
- En Nintendo DS y DS Lite, GodMode9i puede volcar los cartuchos de la ranura Slot-2 si se ejecuta desde una flashcard de la ranura Slot-1, y cartuchos de la ranura Slot-1 si se ejecuta desde una flashcard de la ranura Slot-2
    - También puedes volcar archivos de guardado usando cartuchos de GBA, revisa la página de [Preguntas Frecuentes](faq?faq=how-do-i-dump-ds-saves-using-gba-save-data) para más información
- En la familia de sistemas Nintendo DSi, se requiere Unlaunch para volcar juegos de la ranura Slot-1 a la tarjeta SD
    - Sigue [la guía en dsi.cfw.guide](https://dsi.cfw.guide/) para instrucciones sobre cómo instalar Unlaunch
- En la familia de sistemas Nintendo 3DS, se requiere un entorno moderno de CFW para abrir GodMode9i
    - Sigue [la guía en 3ds.hacks.guide](https://3ds.hacks.guide/) para instrucciones sobre cómo instalar Luma3DS y boot9strap

### Restaurar archivos de guardado
GodMode9i también puede restaurar archivos de guardado a cartuchos de DS y de GBA. Esto se hace seleccionando el archivo `.sav` en su tarjeta SD mientras el cartucho está insertado y seleccionando `Restaurar archivo de guardado`.
