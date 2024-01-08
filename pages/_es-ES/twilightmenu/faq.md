---
lang: es-ES
layout: faq
section: twilightmenu
title: Preguntas frecuentes y solución de problemas
long_title: Preguntas frecuentes y solución de problemas para TWiLight Menu++
description: Preguntas frecuentes y solución de problemas para TWiLight Menu++
---

Si tienes más preguntas, visita el [hilo de GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### ¿Por qué mi 3DS se atasca en pantalla negra, se apaga, etc al iniciar TWiLight Menu++?
TWL_FIRM podría haberse corrompido de alguna forma. Sigue esta guía para solucionarlo: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### ¿Cómo soluciono que la pantalla se quede en blanco al abrir TWiLight Menu++?
- Reinicia la consola
- Si no funciona, formatea tu tarjeta SD a FAT32 con tamaño de asignación de 32 KB
   - Para saber como, sigue las [recomendaciones de la guía](https://dsi.cfw.guide/sd-card-setup.html)
- Si aún no funciona, prueba con otra tarjeta SD

#### La pantalla táctil no funciona al iniciar un juego, ¿cómo lo soluciono?
- Si estás iniciando un cartucho, asegúrate de que la opción `Slot-1: Configuración Táctiol` esté establecida en `Modo DS`
- Si el problema persiste, o si estás usando una ROM, entonces sigue esta guía (en inglés): https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### ¿Qué pasó con el tema Acekard/Wood UI?
El tema Acekard (también llamado Wood UI) fue removido debido a su comportamiento errático y reportes de corrupción en algunas tarjetas SD. Aún no hemos solucionado estos detalles. Puedes ver el progreso realizado en [esta pull request](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109) en el repositorio de github.

#### ¿Cómo evito que TWiLight Menu++ se reinicie o lance Guru Meditation Error cuando inicio un juego?
Ve a los ajustes de TWLMenu++ y desactiva la opción `Act. lista de juegos recientes`.

#### ¿Por qué se queda atascado en una pantalla blanca cuando intento iniciar un juego desde la tarjeta SD?
Echa un vistazo a la pregunta [Tengo problemas con mis ROMs, ¿qué debo hacer?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) en la página preguntas frecuentes de nds-bootstrap.

#### ¿Cómo puedo usar trucos?
Necesitar tener una base de datos de trucos con nombre y formato `usrcheat.dat` en la carpeta `sd:/_nds/TWiLightMenu/extras/`. La base de datos de trucos más actualizada es la [Base de datos de trucos para NDS(i) de DeadSkullzJr](https://gbatemp.net/threads/488711/).
- En Nintendo 3DS, esta base de datos está disponible en Universal-Updater bajo el nombre "NDS(i) Cheat Databases". Te la instalará en la ubicación correcta.

Alternativamente, puedes usar [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) para crear tu propia base de datos.

Una vez que tengas una base de datos, puedes activar trucos presionando <kbd class="face">Y</kbd> en TWiLight Menu++ al tener el cursor sobre un juego para abrir la configuración por juego, y luego presionar <kbd class="face">X</kbd> para abrir el menú de trucos.

#### ¿Cómo muestro una imagen personalizada en la pantalla de arriba usando el tema DSi? ¿La puedo ocultar?
Se mostrará una una imagen aleatoria en formato `.png` encontrada en `sd:/_nds/TWiLightMenu/dsimenu/photos/` cada vez que cargues el menú. Si no hay imágenes validas en ese directorio, se usarán screenshots tomadas con nds-bootstrap en su lugar.

- La resolución de las la(s) imagen(es) debe ser 208x156 o menor
- Si ocurre algún error, probablemente sea por el tamaño de la imagen. Por favor, usa [tinypng](https://tinypng.com) para reducir el tamaño

Si quieres ocultar la imagen, debes editar el archivo `theme.ini` hallado en `sd:/_nds/TWiLightMenu/dsimenu/themes/[skin folder]/`. Ábrelo con un editor de texto y cambia el parámetro de la línea `RenderPhoto` de `1` a `0`. y guarda el archivo.

#### ¿Cómo consigo juegos?
Puedes descargar juegos homebrew desde [Universal-DB](https://db.universal-team.net/ds) y [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get officially released games, you need to get those as dumps, either from your physical cartridges, or from an existing console:
- Desde una Nintendo DS puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) para volcar tus juegos de GBA, y si tienes una flashcard para la ranura Slot-2, juegos de DS. Si solo tienes una flashcard para la ranura Slot-1 y te gustaría volcar un juego de DS, puedes usar[Wooddumer](https://digiex.net/attachments/wooddumper_r89-zip.14735/), que requiere una conexión Wi-Fi compatible con DS, y también un cliente FTP en un dispositivo aparte para recibir la ROM
- En una DSi puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) para volcar tus cartuchos de juegos DS y tus títulos DSiWare
- En una 3DS puedes usar [GodMode9](https://github.com/d0k3/GodMode9/releases) para volcar tus juegos de DS, títulos DSiWare y títulos de la Consola Virtual

#### ¿Puedo transferir las partidas guardadas de mis cartuchos a la tarjeta SD o viceversa?
Sí. Para esto, puedes usar [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) en una 3DS, o [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) en una DSi o en una 3DS.

#### ¿Cómo cambio el idioma de TWiLight Menu++?
1. Abre los ajustes de TWiLight Menu++ manteniendo <kbd>SELECT</kbd> mientras se inicia la aplicación
1. Cambia la primera opción hasta que veas el lenguaje al que quieres establecer la aplicación, luego, sal de los ajustes
   - Es posible que también quieras cambiar las primeras tres opciones en la pestaña de ajustes de nds-bootstrap, ya que estas controla el lenguaje y región de los juegos de DS, y sus títulos en TWiLight Menu++

#### ¿Esto es un emulador de DS(i)?
No, esto no es un emulador. El menú y los juegos de DS (que se ejecutan a través de nds-bootstrap) se ejecutan nativamente en el modo DS/DSi de la consola. Las únicas consolas emuladas son las consolas antiguas, y además parcialmente la GBA (ya que algunas partes, como los gráficos, son ejecutados nativamente).

#### ¿Qué sistemas son compatibles con TWiLight Menu++?
Echa un vistazo a la lista de [sistemas compatibles con TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### ¿Puedo iniciar TWiLight Manu++ a través de un exploit de un juego a través de la ranura Slot-1?
No. Solo las aplicaciones DSiWare tienen acceso a la tarjeta SD, por lo que los juegos ejecutados a través de la ranura Slot-1 no pueden lanzar (o si quiera acceder) a TWiLight Menu++.

#### ¿Por qué no encuentro mis juegos?
Hay distintas razones por las que podrías no encontrarlos.
- La carpeta `_nds` en la carpeta raíz de tu tarjeta SD no es una que deberías usar para almacenar aplicaciones a las que quieras acceder usando TWiLight Menu++, ya que está reservada para archivos más funcionales (skins, ajustes, imágenes, emuladores, etc.). Si colocaste aquí tus títulos, por favor, muévelos a otro sitio.
- Si tienes más de 39 títulos en una carpeta y todos los huevos del menú están ocupados, tus juegos podrían estar en la siguiente página. Usa <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd>SELECT</kbd> + <kbd>Izq.</kbd>/<kbd>Der.</kbd> para cambiar de página
- Si tus juegos o carpetas están ocultas, deberás establecer que los archivos ocultos se muestren en los ajustes de interfaz de TWiLight Menu++
- Si tu juego está comprimido en un archivo (`zip`, `rar`, `7z`, etc.), no puede ser leído por TWiLight Menu++. Extrae el juego del archivo para poder usarlo
- Si tu juego no usa una de las [extensiones soportadas](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), tendrás que cambiar la extensión a una válida renombrando el archivo

#### ¿Cómo puedo acceder a los ajustes de TWiLight Menu++?
La forma de acceder a los ajustes de TWiLight Menu++ varía según tu configuración.
- **Menú Clásico DS**: Toca el icono que muestra una DS en la parte inferior céntrica de la pantalla
- **Temas Nintendo DSi/SEGA Saturn/Homebrew Launcher usando el menú SELECT:** Presiona <kbd>SELECT</kbd>, luego inicia la aplicación de Ajustes (usando la cruceta para resaltar las opciones)
- **Temas Nintendo DSi/SEGA Saturn/Homebrew Launcher sin usar el menú SELECT:** Presionar <kbd>SELECT</kbd> te llevará al Menú Clásico DS
- **Tema Nintendo 3DS:** Toca el icono de la parte superior izquierda de la pantalla inferior
- **Tema R4 Original:** Presiona <kbd>START</kbd> (si estás en el selector de archivos), luego presiona <kbd>SELECT</kbd>

También puedes mantener presionado <kbd>SELECT</kbd> al iniciar TWiLight Menu++ para acceder directamente a los ajustes.

#### ¿Cómo uso iconos y banners personalizados para juegos?
Puedes usar iconos personalizados usando archivos .PNG o .BIN colocándolos en la carpeta `sd:/_nds/TWiLightMenu/icons` con el nombre de la ROM (incluyendo la extensión) o el nombre de la carpeta, acabando en `.png` o `.bin`.

Si usas archivos PNG, necesitarás que su tamaño sea máximo 32x32 píxeles, y que no usen más de 15 colores. La transparencia absoluta funciona y no cuenta para el límite de colores, pero la transparencia parcial no funciona.

Los banners de tipo .BIN soportan animaciones y te permiten reemplazar los títulos que se mostrarán en TWiLight Menu++. Puedes crearlos usando [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases).

Existen banners ya hechos en la [sección de iconos del sitio de skins para TWiLight Menu++](https://skins.ds-homebrew.com/icon/), y si haces uno lo podrías compartir aquí también.

#### ¿Cómo instalo temas personalizados para TWiLight Menu++?
Puedes obtener skins personalizadas para los distintos temas en [el sitio oficial para skins](https://skins.ds-homebrew.com/), que almacena varias skins hechas por la comunidad listas para aplicar. También puedes crear una skins personalizada para los temas Nintendo DSi y Nintendo 3DS por tu cuenta siguiendo [esta guía](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins). Los temas **Homebrew Launcher**, **Sega Saturn** y **Game Boy Color** _**no**_ son personalizables.

Una vez tengas una skin personalizada, puedes instalarla colocando su carpeta en el directorio adecuado, que depende del tema para el que fue hecha la skin.
- Las skins para el tema Nintendo DSi van en `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Las skins para el tema Nintendo 3DS van en `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Las skins para el tema R4 Original van en `sd:\_nds\TWiLightMenu\r4menu\themes\`

Si estás usando una consola de la familia de la 3DS, puedes instalar skins personalizadas usando [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Ve a los ajustes de Universal-Updater, luego a `Seleccionar Unistore`, `+`, `TWiLight Menu Skins`.

Para aplicar una skin personalizada debes acceder a los ajustes de TWiLight Menu++.
1. En la pestaña `Ajustes de la GUI`, ve a la opción `Tema` y elige el tema que quieras usar utilizando los botones de izquierda y derecha en la cruceta.
1. Una vez el tema esté seleccionado, presiona el botón A para elegir entre las skins que tengas instaladas.
1. Usando los botones arriba y abajo en la cruceta, resalta la skin deseada y luego pulsa A para seleccionarla.
1. Guarda los ajustes presionando el botón B para volver a TWiLight Menu++.

TWiLight Menu++ debería ahora tener el aspecto de la skin personalizada (y la música, si la skin seleccionada tiene música personalizada y esta está habilitada en los ajustes).

#### ¿Existe un emulador de 3DS para la DS(i)?
No, no existe ninguno. No es posible emular la 3DS en una DS(i) ya que la 3DS usa hardware más reciente.
