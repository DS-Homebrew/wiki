---
lang: es-ES
layout: wiki
section: twilightmenu
category: updating
title: Actualización (DSi)
long_title: Actualizando TWiLight Menu++ (DSi)
description: Cómo actualizar TWiLight Menu++ en la Nintendo DSi
---

Si está actualizando de una versión inferior a v6.8.3, mueva sus archivos `.sav` (de juegos de DS) a una nueva carpeta llamada `saves`, la cual debe estar presente dentro de la misma carpeta que las ROMs de DS.
{:.alert .alert-info}

Si estás intentando actualizar desde una versión anterior a la 21.0.0, por favor, mueve tus archivos `.pub` y/o `.prv` de títulos DSiWare a una nueva carpeta llamada `saves`, que se encuentra dentro de la misma carpeta que las roms de DSiWare.
{:.alert .alert-info}

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

### Actualización
1. Descarga [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) de la versión más reciente
1. Extrae `TWiLightMenu-DSi.7z`
1. Copia la carpeta `_nds` a la carpeta raíz de tu tarjeta SD, y reemplaza los archivos existentes
   - Si usas macOS, asegurate de **copiar** y `unificar`, no `reemplazar`
1. Copia el archivo `BOOT.NDS` a la carpeta raíz de tu tarjeta SD, y reemplaza cualquier archivo existente
1. **Usuarios de hiyaCFW:** Copia la carpeta `title` a la carpeta raíz de tu tarjeta SD, y reemplaza cualquier archivo existente
   - Si usas macOS, asegurate de **copiar** y `unificar`, no `reemplazar`
