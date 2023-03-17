---
lang: es-ES
layout: faq
section: godmode9i
title: Preguntas frecuentes y soluciónes
long_title: 'GodMode9i: preguntas más frecuentes y solución de problemas'
description: Preguntas más frecuentes y solución de problemas para GodMode9i
---

#### ¿Cómo paso la pantalla "mounting drive(s)" al iniciar?
Esto ocurre cuando abres GodMode9i desde [hiyaCFW](../hiyacfw). Puedes presionar <kbd class="face">X</kbd> mientras ejecutas GodMode9i para omitir el montaje de la NAND. Otra opción, es lanzar GodMode9i directamente desde Unlaunch para poder montar la NAND.

#### ¿Por qué no puedo agregar, quitar o editar archivos de la NAND?
Editar archivos en la NAND de la DSi no es seguro y puede llevar fácilmente a un bloqueo total, por lo que GodMode9i carece intencionalmente de esta opción.

#### ¿Por qué no puedo ver info del archivo NDS en algunos títulos DSiWare?
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

#### ¿Cómo vuelco archivos de guardado de DS usando datos guardados de GBA?
GodMode9i puede usar datos de guardados de cartuchos de GBA para volcar los datos guardados de la mayoría de cartuchos de juegos de DS. Las ROMs y los archivos de guardado de más de 1MiB no pueden ser volcados así ya que son demasiado grades. También puedes hacer esto usando Haxxstation en vez de una flashcard de DS si tienes otra forma de volcar los archivos de guardado de GBA, luego puedes recombinarlos y descomprimirlos en una computadora.

1. Inicia GodMode9i desde tu flashcard
1. ¡¡Respalda tus archivos de guardado de GBA!!
   - Cualquier archivo que no haya sido respaldado se perderá
   - Comprueba los archivos y encuentra los más grandes. Los archivos de 512 bytes no serán muy útiles, mientras que los de 64 o 128 KiB podrán almacenar la mayoría de archivos de guardado de DS en uno o dos cartuchos
1. En el menú de unidades, presiona <kbd class="r">R</kbd> + <kbd class="face">B</kbd> para desmontar la flashcard
1. Expulsa la flashcard, inserta un cartucho de juegos de DS y un cartucho de juegos de GBA
1. Selecciona la opción `TARJETA DE JUEGO NDS` y luego `Archivo de guardado`
1. Cuando se te pregunte, presiona <kbd class="face">A</kbd> para escribir los datos al cartucho de GBA
   - Cambia de cartucho de GBA y repute hasta que todo el archivo de guardado se copie
1. Reinicia la consola con la flashcard en la ranura Slot-1 y reabre GodMode9i
1. Inserta el primer cartucho de GBA que usaste y selecciona la opción `TARJETA DE JUEGO GBA`
1. Elige la opción `Archivo de Guardado DS`
1. Ve cambiando por los cartuchos que usaste para copiar el archivo de guardado
1. Tu archivo de guardado de DS estará en `fat:/gm9i/out`, y ahora puedes restaurar los archivos de guardado de GBA a sus respectivos cartuchos

Si quieres escribir restaurar el archivo de guardado al cartucho, selecciona el archivo `.sav` y elige la opción `Restaurar archivo de guardado (Slot-1)`, y cambia la flashcard por el cartucho de DS cuando se te pida.
