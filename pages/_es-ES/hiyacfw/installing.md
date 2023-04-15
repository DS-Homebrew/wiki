---
lang: es-ES
layout: wiki
section: hiyacfw
title: Instalación
long_title: Instalación de hiyaCFW
description: Cómo instalar hiyaCFW en la Nintendo DSi
tabs:
  - 
    windows: Windows
    macos: macOS
    other: Linux
---

No instales una actualización del sistema después de instalar hiyaCFW. Hacerlo eliminará los parches de hiyaCFW para la tarjeta SD.
{: .alert .alert-danger}

### Requisitos
- Tener [Unlaunch instalado](https://dsi.cfw.guide/installing-unlaunch) en tu consola
- Un respaldo de la NAND hecho con [dumpTool](https://dsi.cfw.guide/dumping-nand)
- Un dispositivo que use Windows, macOS o Linux

### Parte 1: Preparar tu PC para instalar hiyaCFW
{% capture tab-windows %}
El asistente de hiyaCFW puede causar falsos positivos con Windows Defender y algunos otros programas antivirus, por lo que se recomienda que desactives estos programas temporalmente si tienes problemas al descargarlo o ejecutarlo.
{: .alert .alert-info}

1. Descarga e instala la última versión de [7-Zip](https://www.7-zip.org/download.html)
   - Esto no funcionará con cualquier otra herramienta de extracción de archivos, ya que hiyaCFW depende de 7-Zip específicamente, y otros programas, como por ejemplo, WinRAR, no funcionarán
1. Descarga la última versión del [Asistente de hiyaCFW](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extrae el archivo del Asistente en cualquier lugar de tu PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Descarga la última versión para macOS del [Asistente de hiyaCFW](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extrae el archivo del Asistente en cualquier lugar de tu PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Instala Python 3 usando tu gestor de paquetes, si no lo haz hecho aún
1. Descarga la última versión para Python del [Asistente de hiyaCFW](https://github.com/mondul/HiyaCFW-Helper/releases)
1. Extrae el archivo del Asistente en cualquier lugar de tu PC
1. Si no lo tienes ya, instala tkinter usando el siguiente comando para tu distribución:
   - Distribuciones basadas en Debian: `sudo apt-get install python3-tk`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Parte 2: Añadir los archivos de hiyaCFW a tu tarjeta SD
![Captura de pantalla del Asistente de hiyaCFW](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Ejecuta el Asistente de hiyaCFW
  - **Windows:** Ejecuta el archivo `HiyaCFW_Helper.exe` extraído desde el archivo del Asistente de hiyaCFW (es posible que tengas de desactivar tu antivirus temporalmente)
  - **macOS:** Haz clic derecho en el archivo `HiyaCFW_Helper` extraído desde el archivo del Asistente de hiyaCFW y escoge la opción `Abrir`
  - **Linux:** Ejecuta el archivo `HiyaCFW_Helper.py` extraído desde el archivo del Asistente de hiyaCRW
1. Haz clic en el botón `...` en la caja con el texto "NAND file with No$GBA footer"
1. Navega hasta donde esté tu respaldo de la NAND, y selecciona `Abrir`
1. Haz clic en `Start`
1. En la ventana emergente, navega hasta la carpeta raíz de tu tarjeta SD y haz clic en `Aceptar`.
   - Este proceso podría tardar varios minutos
1. Cuando la aplicación muestre el mensaje `Done!`, cierra la ventana del asistente
1. Cierra la ventana del terminal

### Parte 3: Configurar Unlaunch y hiyaCFW
1. Enciende tu consola mientras mantienes pulsados los botones <kbd class="face">A</kbd> y <kbd class="face">B</kbd>
   - Esto debería llevarte al sistema de archivos de Unlaunch
1. Selecciona `OPTIONS`, y luego `NO BUTTON`
1. Selecciona `hiyaCFW` y presiona <kbd class="face">A</kbd>
   - Esto hará que el sistema ejecute hiyaCFW al arrancar
1. Guarda los ajustes y reinicia la consola
1. Mantén pulsado <kbd>SELECT</kbd> mientras enciendes la consola para acceder a los ajustes de hiyaCFW
1. Cambia los ajustes como gustes, y luego presiona <kbd>START</kbd> para continuar

Si muestra el mensaje `Ha ocurrido un error`, por favor mira la página de [preguntas frecuentes](faq?faq=why-do-i-get-an-error-has-occurred-message-when-booting-hiyacfw).
{: .alert .alert-warning}
