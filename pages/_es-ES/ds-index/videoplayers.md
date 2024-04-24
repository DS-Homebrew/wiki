---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Reproductores de Video
description: Reproductores de Video Homebrew para Nintendo DS(i)
---

# Reproductores de Video Homebrew para Nintendo DS(i)
This page contains a list of working video players for the Nintendo DS and DSi that explains how each works.

| Nombre del reproductor | Codecs y Formatos compatibles | Desventajas                                                              | Tasa de FPS máxima                |
| ---------------------- | ----------------------------- | ------------------------------------------------------------------------ | --------------------------------- |
| FastVideoDS            | `.fv`, FastVideoDS            | Muchos colores moviéndose realentizan los videos con tasas de FPS altas. | 60fps (DSi mode), 30fps (DS mode) |
| Moonshell              | `.dpg`, MPEG1                 | Solo puede alcanzar ciertas tasas de FPS y bits.                         | 24FPS                             |
| Tuna-ViDS              | `.avi`, XVid                  | Solo puede alcanzar ciertas tasas de FPS y bits.                         | 15FPS                             |
| MPEG4Player            | `.mp4`, MPEG-4                | Solo puede reproducir videos cortos.                                     | 24FPS                             |

Notas:
- La tasa de FPS máxima real depende en el contenido y la duración de los videos.
- Moonshell v1.x and beta builds of v2.00 may lock-up later on, if video bitrate is higher than around `192`. It is recommended to use v2.10.

## FastVideoDS

Nora: Si te salta un mensaje diciendo `This encoder requires a cpu with support for AVX2 instructions`, necesitarás instalar un CPU más reciente, o usar un ordenador más moderno.
{: .alert .alert-warning}

### Windows

1. Descarga el [Runtime de .NET](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.12-windows-x64-installer?cid=getdotnetcore) e instálalo
1. Descarga el [Codificador de FastVideoDS](https://mega.nz/file/mYwiBTZA#FX6k-9cclPig4_WutE9IueVR7NN0Kxl-mZvRXyhpQRg)
1. Descarga [FastVideoDS.bat](/assets/files/FastVideoDS.bat) en la misma carpeta y colócalo en la misma carpeta que el archivo `.exe` del Codificador
1. Copia/mueve tu vídeo a la misma ubicación que el archivo `.bat`
1. Arrastra y suelta el vídeo copiado/movido en el archivo `.bat`

Cuando el proceso termine, deberías poder arrastrar el archivo resultante en tu tarjeta SD y soltarlo. Hecho esto, podrás reproducir el video abriéndolo a través de **TW**i**L**ight Menu++.

## Conversión de videos para Moonshell (DPG4x)

1. Descarga [DPG4x](https://www.gamebrew.org/wiki/DPG4X)
1. Abre `dpg4x.7z`
1. Abre `dpg4x-2.3.3.0.zip` (3.0-1 tira error al abrirlo, por alguna razón desconocida)
1. Abre `dpg4x-2.3.3.0_setup.exe`, y procede con la instalación
1. Al terminar, abre DPG4x
1. Haz clic en la pestaña `VIDEO`
1. Marca la casilla `Keep Aspect`
1. Establece la opción `Video Bitrate` a lo que quieras (un número más alto indica una mayor calidad)
1. Haz clic en la pestaña `AUDIO`
1. Marca la casilla `Normalize Volume` si tu video tiene el volumen bajo
1. Haz clic en la pestaña `SUBTITLES`
1. Establece la opción `Subtitles Source` a `Disable Subtitles`, ya que algunas pistas de subtítulos podrían no mostrarse correctamente
1. Haz clic en la pestaña `MAIN`
1. Haz clic en `Add Media` para seleccionar tu(s) archivo(s) de video
1. Establece la opción `DPG Version` a `4` si estás usando Moonsell v2.x, de lo contrario, establécela a `3` o anterior
1. Establece la opción `Quality` a tu preferencia
1. Haz cloc en `Start Encoding` para convertir el/los video(s)

Cuando el proceso termine, deberías poder arrastrar el archivo resultante en tu tarjeta SD y soltarlo. Hecho esto, podrás reproducir el video abriéndolo a través de Moonsell.

## Guía para TunaViDS

### Windows
Escoge el video que quieras convertir. Es recomendable que la relación de aspecto sea 4:3, pero FFmpeg añade barras negras al video automáticamente si el video tiene una relación distinta.

Advertencia: No cambies las opciones de Tuna-ViDS, o no iniciará correctamente. Esta guía asume que tienes instalada la última versión de **TW**i**L**ight Menu++.
{: .alert .alert-warning}

A continuación, descarga FFmpeg desde [este enlace directo](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) y extráelo en C:\ffmpeg o en algún otro lugar al que puedas acceder sin permisos de administrador.

Probablemente debas quedarte en la zona segura al convertir videos (10 a 15FPS), o tu video podría bloquear tu consola. Las escenas con confeti, lluvia o escenas con mucho tráfico de imagen pueden causar realentizaciones.

Para usar FFmpeg en cualquier lado, es necesario que añadas su locaclización a la variable PATH de tu entorno de sistema. Esto podría romper programas que dependen de FFmpeg, así que asegúrate de remover dicha entrada cuando termines el proceso.

Para convertir tus videos, arrástralos a cualquiera de los siguientes archivos batch, uno por uno:
- [xvid-ds.bat](/assets/files/xvid-ds.bat): Convierte los videos con una tasa de 12FPS, óptimos para reproducirse en DS
- [xvid-dsi.bat](/assets/files/xvid-dsi.bat): Convierte los videos con una tasa de 12FPS, óptimos para reproducirse en DSi
- [xvid-ds-vol4.bat](/assets/files/xvid-ds-vol4.bat): Convierte los videos con una tasa de 12FPS, óptimos para DS y con un aumento del 400% del volumen
- [xvid-dsi-vol4.bat](/assets/files/xvid-dsi-vol4.bat): Convierte los videos con una tasa de 12FPS, óptimos para DSi y con un aumento del 400% del volumen

Si quieres, puedes cambiar cualquiera de los siguientes parámetros en los archivos .bat:
- `12` en el parámetro `-r 12` a un valor distinto entre `10` y `15` para una tasa de FPS diferente
- `-2` en el parámetro `scale=256:-2` a la resolución vertical que desees, si el video se muestra distorsionado

Cuando el proceso termine, deberías poder arrastrar el archivo resultante en tu tarjeta SD y soltarlo. Hecho esto, podrás reproducir el video abriéndolo a través de **TW**i**L**ight Menu++.

Saldrás automáticamente al menú cuando el video termine, así que si deseas que el video se reproduzca en bucle, tendrás que pegar el video varias veces en un editor, y luego convertirlo a un video .avi compatible usando este método.

## MPEG4Player

### Windows

El proceso es el mismo que para Tuna-ViDS, pero podrás reproducir videos hasta una tasa de 24FPS.
- [dsmp4-43.bat](/assets/files/dsmp4.bat): Para videos con una resolución de aspecto de 4:3
- [dsmp4.bat](/assets/files/dsmp4.bat): Para videos con una resolución de aspecto de 16:9
