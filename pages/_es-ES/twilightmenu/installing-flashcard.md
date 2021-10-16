---
lang: es-ES
layout: wiki
section: twilightmenu
category: installing
title: Instalación (Flashcard)
long_title: Instalando TWiLight Menu++ (Flashcard)
description: Cómo instalar TWiLight Menu++ en una flashcard de Nintendo DS
---

### Instalación
1. Descarga [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) de la versión más reciente
1. Extrae `TWiLightMenu-Flashcard.7z`
1. Copia la carpeta `_nds` en la raíz de la microSD de tu flashcard
1. Copia el archivo `BOOT.NDS` en la raíz de la microSD de tu flashcard
1. Copia la carpeta `roms` en la raíz de la microSD de tu flashcard
1. Si ya tienes archivos de guardado, mueve los archivos `.sav`, que se encuentran en la misma carpeta que tus ROMs de DS, a una nueva llamada `saves` también en la carpeta de las ROMs
1. ...
   - **Usuarios de DS Phat/Lite:** Si al iniciar `BOOT.NDS` la consola crashea con una pantalla blanca, inserta un DS Memory Expansion Pak y prueba de nuevo
   - **Usuarios de DSi/3DS:** Abre TWLMenu++ desde la SD de la consola, activa `Acceso a SCFG en Slot-1` y configura la opción `Slot-1: Configuración Táctil` a `Modo DSi`
      - Esto permitirá usar la velocidad de reloj TWL y/o acelerar la VRAM en los juegos de la flashcard, así como acceder a la SD de la consola y lanzar juegos DSi-Enhanced/DSi-Exclusive/DSiWare en Modo DSi desde la flashcard

### Iniciar los juegos con el firmware de la flashcard
1. Extrae el contenido de `Flashcart Loader/(tu flashcard)` en la raíz de la microSD de tu flashcard
   - Si ya lo has hecho, ve al paso 3. Si no, sigue los pasos debajo de la lista de flashcards

1. Para estas flashcards:
   - R4i-SDHC
   - Cartuchos de r4isdhc.com
   - Cartuchos de r4isdhc.hk
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - DSONE SDHC & DSONEi

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. Pon `Use nds-bootstrap` a `No` para usar el firmware de la flashcard en vez de nds-bootstrap

### Iniciar automáticamente TWiLight Menu++
1. Extrae el contenido de `Autoboot/(tu flashcard)` en la raíz de la microSD de tu flashcard
   - Si no ves tu flashcard sáltate esto
1. ...
   - **Usuarios de DS Phat/Lite:** Ve a los ajustes en el menú de DS y pon el modo de inicio en Automático
   - **Usuarios de DSi/3DS:** Inicia TWLMenu++ en la tarjeta SD de la consola y activa `Auto-start Slot-1`
