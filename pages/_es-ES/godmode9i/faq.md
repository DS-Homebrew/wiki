---
lang: es-ES
layout: faq
section: godmode9i
title: FAQ y solución de problemas
long_title: 'GodMode9i: preguntas más frecuentes y solución de problemas'
description: Preguntas más frecuentes y solución de problemas para GodMode9i
---

#### ¿Cómo paso la pantalla "mounting drive(s)" al iniciar?
Esto ocurre cuando abres GodMode9i desde [hiyaCFW](../hiyacfw). Puedes presionar <kbd class="face">X</kbd> mientras ejecutas GodMode9i para omitir el montado de la NAND. Otra opción, es lanzar GodMode9i directamente desde Unlaunch para poder montar la NAND.

#### ¿Por qué no puedo agregar, quitar o editar archivos de la NAND?
Editar archivos en la NAND de la DSi no es seguro y puede llevar fácilmente a un brickeo, por lo que GodMode9i intencionalmente carece de esta opción.

#### ¿Por qué no puedo ver info del archivo NDS en algunos DSiWare?
Ciertos archivos DSiWare, específicamente aquellos ubicados en la carpeta `0003000f`, contienen información del sistema y por lo tanto no tienen un banner válido.

#### ¿Debería utilizar la versión NDS o la versión DSi? ¿Cuál es la diferencia?
Ambas versiones son funcionalmente idénticas, pero cada una tiene sus usos específicos.
- Si estás usando GodMode9i en una flashcard, utiliza la versión NDS
- Si estás instalando GodMode9i a tu SDNAND de hiyaCFW, utiliza la versión DSi
- Si estás iniciando GodMode9i desde TWiLight Menu++, ambas versiones funcionarán igual
- Si estás instalando GodMode9i al Menú HOME de tu 3DS, utiliza la versión CIA

#### ¿Cómo cambio el idioma?
Puedes cambiar el idioma de GodMode9i presionando <kbd>START</kbd>, seleccionando la última opción en el menú, y eligiendo el idioma que deseas usar.

Tenga en cuenta que esto sólo funcionará si GodMode9i es ejecutado desde TWiLight Menu++ o si hay una copia de `GodMode9i.nds`/`GodMode9i.dsi` en la raíz de la tarjeta SD.

También puede ingresar manualmente una ruta a cualquier archivo de idioma en su tarjeta SD en el archivo de configuración, `sd:/gm9i/config.ini`, en la línea `LANGUAGE_INI_PATH`.

#### ¿Cómo cambio la fuente?
Puedes cambiar la fuente de GodMode9i seleccionando un archivo de fuente `.frf` y eligiendo `Cargar fuente de letra`. Para establecer una fuente diferente como predeterminada puedes colocarla en `sd:/gm9i/font.frf` o editar el archivo de configuración (`sd:/gm9i/config.ini`) para indicar a `FONT_PATH` dónde está su archivo de fuente.

Puedes encontrar algunas fuentes pre-convertidas en la [carpeta resources](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) del repositorio de GitHub y puedes convertir fuentes propias desde imágenes PBM y archivos TXT que contengan el mapeo Unicode utilizando el script [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) de GodMode9i.
