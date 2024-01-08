---
lang: es-ES
layout: wiki
section: twilightmenu
category: installing
title: Instalación (DSi)
long_title: Instalando TWiLight Menu++ (DSi)
description: Cómo instalar TWiLight Menu++ en la Nintendo DSi
---

Si no tienes ninguna forma de ejecutar homebrew en tu DSi, consulta [dsi.cfw.guide](https://dsi.cfw.guide) para instalar TWiLight Menu++
{:.alert .alert-info}

### Instalación
1. Descarga [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) de la versión más reciente
1. Extrae `TWiLightMenu-DSi.7z`
1. Copia la carpeta `_nds` en la raíz de tu tarjeta SD
1. Copia el archivo `BOOT.NDS` en la raíz de tu tarjeta SD
1. Copia la carpeta `roms` en la raíz de tu tarjeta SD
1. **Usuarios de hiyaCFW:** copia la carpeta `title` en la raíz de tu tarjeta SD

### Inicio automático con Unlaunch
1. Enciende tu DSi mientras pulsas <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
1. En el menú de Unlaunch, ve a `OPTIONS`
1. Selecciona `NO BUTTON` o un botón de tu elección en el `TWiLight Menu++` que ponga `BOOT.NDS` en la pantalla inferior

### Acceder al contenido de las flashcards

Una flashcard es una tarjeta que va en la ranura de los cartuchos, en la que puedes introducir una tarjeta microSD. Si no tienes una flashcard, no es necesario que sigas estos pasos.
{:.alert .alert-warning}

#### Si tienes una R4(i) Ultra

1. Sigue [esta](installing-flashcard)guía desde el punto `Para ejecutar juegos usando el firmware de tu Flashcard`
     - Puedes ignorar las advertencias
1. Abre los ajustes de TWLMenu++
1. Cambia a la pestaña `Otros ajustes`
1. Habilita la opción `Acceso a microSD en Slot-1`
1. Sal de los ajustes de TWLMenu++ pulsando el botón `B`
     - Si te salta el menú Clásico DS, presiona `B` otra vez

#### Si no tienes una R4(i) Ultra

1. Crea un archivo o carpeta con el nombre `primary` in `sd:/_nds/` (en la Flashcard no), para que TWiLight Menu++ lea los parámetros de la tarjeta SD de tu consola antes de que inicie tu Flashcard
1. Sigue [esta](installing-flashcard)guía desde el punto `Iniciar TWiLight Menu++ automáticamente`
1. Copia el archivo `BOOT.NDS` del archivo `TWiLightMenu-Flashcard.7z` a la carpeta raíz de la tarjeta microSD de tu flashcard
1. Abre los ajustes de TWLMenu++
1. Cambia a la pestaña `Otros ajustes`
1. Habilita la opción `Acceso a SCFG en Slot-1` (Ten en cuenta que esta opción toma prioridad sobre `Acceso a SD en Slot-1`)
1. Establece la opción `Slot-1: Configuración Táctil` a `Modo DSi`
1. Habilita la opción `Inicio Automático del Slot-1`
1. Sal de los ajustes de TWLMenu++ pulsando el botón `B`
     - Si te salta el menú Clásico DS, inicia tu flashcard
     - Si te salta cualquier otra cosa, reinicia TWiLight Menu++

#### Cambiar entre el contenido de la tarjeta SD y de la flashcard
- Presiona o bien `Select`+`Arriba` o `Select`+`Abajo` para cambiar entre los contenidos de la tarjeta SD y de la flashcard
     - Si el menú SELECT está habilitado, puedes hacerlo desde allí también
     - Si usas el tema 3DS, toca el icono del cartucho o de la tarjeta SD
     - Si usas el tema R4 Original/GBC, presiona el botón `L`
