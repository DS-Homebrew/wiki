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
   - **Usuarios de DSi/3DS:** Abrir TWiLight Menu++ desde la tarjeta SD de la consola, abrir los ajustes de TWiLight Menu, ir a la página `Otros Ajustes`, acticar la opción `Acceso SCFG en Slot-1` y cambiar `Slot-1: Configuración Táctil` a `Modo DSi`
      - Esto permitirá usar la velocidad de reloj TWL y/o acelerar la VRAM en los juegos de la flashcard, así como acceder a la SD de la consola y lanzar juegos DSi-Enhanced/DSi-Exclusive/DSiWare en Modo DSi desde la flashcard
      - Con esta opción habilitada, podrás usar <kbd>SELECT</kbd> + <kbd>Arriba</kbd>/<kbd>Abajo</kbd> para cambiar entre los contenidos de tu tarjeta SD y la tarjeta microSD de la flashcart
      - Para usar las características mencioandas arriba, tendrás que iniciar la flashcard a través de TWiLight Menu++ en lugar de desde el menú del sistema

### Iniciar automáticamente TWiLight Menu++
1. Extrae el contenido de la carpeta `Autoboot/(tu flashcart)` a la carpeta raíz de tu tarjeta microSD
   - Si tu flashcart no aparece en el nombre de ninguna carpeta, puedes saltarte este paso
1. ...
   - **Usuarios de DS Phat/Lite:** Ve a los ajustes de tu consola, y activa el iniciar los juegos al encender la consola, para que así tu flashcart inicie automáticamente
   - **Usuatios de DSi/3DS:** Abrir TWLMenu++ desde la tarjeta SD de la consola, abrir los ajustes de TWLMEnu++, cambiar a la página `Otros Ajustes` y activar la opción `Inicio automático del Slot-1`

### Para ejecutar los juegos usando el firmware de tu flashcart

Ten en cuenta que esto sólo funciona si tu flashcard está preparada para iniciar TWiLight Menu++ automáticamente. Para configurar esto, ve la sección de arriba.
{:.alert .alert-warning}

Ten en cuenta que no todas las flashcart tienen soporte para esta función. Si los pasos de abajo no aplican para tu flashcart, sáltate esta sección.
{:.alert .alert-warning}

1. Extrae el contenido de la carpeta `Flashcart Loader/(tu flashcard)` a la carpeta raíz de tu tarjeta micro SD
   - Existe un archivo README.txt en la carpeta `Flashcart Loader` (en inglés), para ayudarte a encontrar los archivos apropiados para tu flashcard.
   - Si ya lo haz hecho, continúa al paso 3. Si no, sigue los siguientes pasos para las siguientes flashcards

1. Para las siguientes flashcarts:
   - R4i-SDHC (r4i-sdhc.com)
   - Flashcards r4isdhc.com con etiqueta de 2014 a 2022(que **no** terminen en .hk o .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC y DSONEi (los modelos que no admiten tarjetas SDHC ***no*** funcionan)
   - M3 DS Real
   - M3i Zero (excepto el modelo GMP-Z003)
   - iTouchDS y iTouch2 (usa los archivos de YSMenu de M3Real_M3iZero)
   - R4(i)RTS (r4rts.com) (usa los archivos de YSMenu de M3Real_M3iZero YSMenu)
   - R4 SDHC RTS (cartucho negro) (r4isdhc.com) (usa los archivos de YSMenu de M3Real_M3iZero)

   Instala [YSMenu de RetroGameFan](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Asegúrate de que tienes el archivo `YSMenu.nds` (o renombra el archivo `TTMenu.dat`, si no existe) y la carpeta `TTMenu` en la carpeta raíz de tu tarjeta microSD
1. Abre los ajustes de TWLMenu++, cambia la página `Ajustes de nds-bootstrap`, y cambia la opción `Usar nds-bootstrap` a `No`, para que el firmware de tu flashcard sea usado en su lugar
