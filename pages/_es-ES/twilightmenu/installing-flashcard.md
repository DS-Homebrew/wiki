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
    - Si no se descarga, visita la <0>página de descargas</0>
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Si ya tienes archivos de guardado, mueve los archivos `.sav`, que se encuentran en la misma carpeta que tus ROMs de DS, a una nueva llamada `saves` también en la carpeta de las ROMs
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

### Iniciar automáticamente TWiLight Menu++
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
    - Si tu flashcart no aparece en el nombre de ninguna carpeta, puedes saltarte este paso
1. **Usuarios de DS Phat/Lite:** Ve a los ajustes de tu consola, y activa el inicio automático, para que así tu flashcard inicie automáticamente

### Para ejecutar los juegos usando el firmware de tu flashcart

Ten en cuenta que esto sólo funciona si tu flashcard está preparada para iniciar TWiLight Menu++ automáticamente. Para configurar esto, ve la sección de arriba.
{:.alert .alert-warning}

Ten en cuenta que no todas las flashcart tienen soporte para esta función. Si los pasos de abajo no aplican para tu flashcart, sáltate esta sección.
{:.alert .alert-warning}

Ten en cuenta que perderás la posibilidad de usar cheats cuando ejecutes juegos de esta manera. Si quieres seguir usando cheats, sáltate esta parte.
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
    - Existe un archivo README.txt en la carpeta `Flashcart Loader` (en inglés), para ayudarte a encontrar los archivos apropiados para tu flashcard.
    - Si ya lo haz hecho, continúa al paso 3. Si no, sigue los siguientes pasos para las siguientes flashcards

1. Para las siguientes flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014-2024 cards (**not** .hk or .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC y DSONEi (los modelos que no admiten tarjetas SDHC ***no*** funcionan)
    - M3 DS Real
    - M3i Zero (excepto el modelo GMP-Z003)
    - iTouchDS y iTouch2 (usa los archivos de YSMenu de M3Real_M3iZero)
    - R4(i)RTS (r4rts.com) (usa los archivos de YSMenu de M3Real_M3iZero YSMenu)
    - R4 SDHC RTS (cartucho negro) (r4isdhc.com) (usa los archivos de YSMenu de M3Real_M3iZero)

    Instala [YSMenu de RetroGameFan](https://gbatemp.net/download/35737/).
        - Asegúrate de que tienes el archivo `YSMenu.nds` (o renombra el archivo `TTMenu.dat`, si no existe) y la carpeta `TTMenu` en la carpeta raíz de tu tarjeta microSD
        - No copies `TTMenu.dat` directamente; esto romperá el inicio automático y el reinicio rápido de YSMenu
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
