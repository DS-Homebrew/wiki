---
lang: es-ES
layout: wiki
section: twilightmenu
category: installing
title: Instalación (Flashcard)
description: Cómo instalar TWiLight Menu++ en una flashcard de Nintendo DS
---

### Instalación
1. Descarga la última versión de `TWiLightMenu-Flashcard.7z` desde la [página de lanzamientos](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extrae `TWiLightMenu-Flashcard.7z`
1. Copia la carpeta `_nds` en la raíz de la microSD de tu flashcard
1. Copia el archivo `BOOT.NDS` en la raíz de la microSD de tu flashcard
1. Copia la carpeta `roms` en la raíz de la microSD de tu flashcard
1. Si ya tienes archivos de guardado, mueve los archivos `.sav`, que se encuentran en la misma carpeta que tus ROMs de DS, a una nueva llamada `saves` también en la carpeta de las ROMs
1. ...
   - **DS Phat / Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1`
      - Esto te permitirá usar la velocidad de reloj de TWL y/o la aceleración VRAM en los juegos de la flashcard, así como acceder a la SD de la consola

### Iniciar los juegos con el firmware de la flashcard
1. Extrae el contenido de `Flashcart Loader/(tu flashcard)` en la raíz de la microSD de tu flashcard
   - Si ya lo has hecho, ve al paso 3. Si no, sigue los pasos debajo de la lista de flashcards

1. Para estas flashcards:
   - R4i-SDHC
   - Cartuchos r4isdhc.com
   - Cartuchos r4isdhc.hk
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   Instala YSMenu [aquí](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Comprueba que tienes `YSMenu.nds` (renombrado de `TTMenu.dat` si no existe) y la carpeta `TTMenu` en la raíz de la microSD de tu flashcard
1. Pon `Use nds-bootstrap (B4DS)` a `No`, para usar el firmware de la flashcard en vez de nds-bootstrap

### Iniciar automáticamente TWiLight Menu++
1. Extrae el contenido de `Autoboot/(tu flashcard)` en la raíz de la microSD de tu flashcard
   - Si no ves tu flashcard sáltate esto
1. ...
   - **DS Phat / DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
