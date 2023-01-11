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

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
     - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, launch your flashcard
     - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
     - If the SELECT menu is enabled, you can do so there as well
     - If you use the 3DS theme, touch the Game Card/SD Card icon
     - If you use the R4/GBC theme, press `L` button
