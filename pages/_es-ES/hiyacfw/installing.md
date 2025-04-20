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
1. Download the latest Windows version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Run the TWLMagician MSI package and extract it to anywhere on your PC
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos %}
1. Download the latest macOS version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
{% endcapture %}
{% assign tab-macos = tab-macos | split: "////////" %}

{% capture tab-other %}
1. Instala Python 3 usando tu gestor de paquetes, si no lo haz hecho aún
1. Download the latest Python version of [TWLMagician](https://github.com/R-YaTian/TWLMagician/releases)
1. Extract the TWLMagician archive anywhere on your PC
1. Si no lo tienes ya, instala tkinter usando el siguiente comando para tu distribución:
    - Debian-based: `sudo apt-get install python3-tk`
    - Arch Linux: `sudo pacman -S tk`
    - Fedora: `sudo dnf install python3-tkinter`
    - CentOS: `sudo yum install python3-tkinter`
1. Install requirements with the following command:
    - `pip3 install -r requirements.txt`
{% endcapture %}
{% assign tab-other = tab-other | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}

### Parte 2: Añadir los archivos de hiyaCFW a tu tarjeta SD
![Screenshot of TWLMagician](https://i.ibb.co/xXr3nd3/336ffe68-abd9-4880-b2ca-5421cbf5958a.png)

1. Launch TWLMagician
    - **Windows:** Launch the `TWLMagician.exe` file extracted from the TWLMagician archive (you may need to temporarily disable your antivirus)
    - **macOS:** Right click the `TWLMagician` file extracted from the TWLMagician archive and choose `Open`
    - **Linux:** Launch the `TWLMagician.py` extracted from the TWLMagician archive
1. Haz clic en el botón `...` en la caja con el texto "NAND file with No$GBA footer"
1. Navega hasta donde esté tu respaldo de la NAND, y selecciona `Abrir`
1. Haz clic en `Start`
1. En la ventana emergente, navega hasta la carpeta raíz de tu tarjeta SD y haz clic en `Aceptar`.
    - Este proceso podría tardar varios minutos
1. When the application says `Done!`, close out of TWLMagician
1. Close the terminal window (optional)

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
