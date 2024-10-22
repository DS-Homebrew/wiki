---
lang: es-ES
layout: faq
section: nds-bootstrap
title: Preguntas frecuentes y solución de problemas
long_title: Preguntas frecuentes y solución de problemas de nds-bootstrap
description: Preguntas frecuentes y solución de problemas de nds-bootstrap
---

#### Tengo problemas con mi(s) ROM(s), ¿qué debo hacer?
- Asegúrate de estar usando la última versión de [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) y si estás usándolo, de [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) (las instrucciones para actualizar están en las páginas de descarga)
- Revisa la [lista de compatibilidad de nds-bootstrap (en inglés)](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) para ver si lo que te pasa es un error conocido en la última versión de nds-bootstrap
- Intenta desactivar todos los trucos para tus juegos, ya que algunos trucos no son compatibles con nds-bootstrap. Presionar <kbd class="l">L</kbd> en el menú de trucos de **TW**i**L**ight Menu++ desactivará todos los trucos activos del juego seleccionado
- Si el juego antes funcionaba correctamente, borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`
- Ejecuta el juego usando configuraciones distintas, como cambiar la velocidad de la CPU ARM9, el Modo DS/DSi, la calidad del sonido, lectura DMA, etc
    - Si usas **TW**i**L**ight Menu++, cambia los ajustes del juego a `Por defecto`
    - Si hay alguna configuración específica que cause problemas, por favor, repórtalo en el [Repositorio de GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- En caso de existir, elimina la base de datos de trucos (`usrcheat.dat`) presente en `sd:/_nds/TWiLightMenu/extras`
- [Vuelve a volcar la ROM](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) para asegurarte de que no está corrupta
- Si has seguido todos los pasos y aún tienes problemas, pide soporte en el [servidor de Discord](https://discord.gg/fCzqcWteC4)
- Si en el servidor te dicen que es un problema con nds-bootstra, revisa si no se ha reportado el problema con el juego en GitHub
    - Revisa los problemas cerrados también, quizás el problema surgía a raíz de alguna otra razón y se cerró para centrarnos en un sólo hilo
    - Si no hay ningún reporte en GitHub sobre el juego, siéntete libre de crear una nueva entrada
- Si llegados a este punto no se ha hallado solución, por favor, actualiza la [lista de compatibilidad (en inglés)](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### ¿Por qué hay problemas con las ROMs, si se ejecutan nativamente?
nds-bootstrap parchea las funciones de la ROM para poder ejecutarse desde una tarjeta SD, ya que estas están pensadas para ejecutarse desde la ranura Slot-1. También hay problemas de sincronización y con las medidas antipiratería (las cuales en su mayoría son eliminadas), y ambas cosas pueden causar que las ROMs no funcionen correctamente.

#### ¿Por qué debería usar nds-bootstrap en vez de una flashcard?
- Ciertas ROMs compatibles se cargan a la RAM, lo que permite tiempos de carga más rápidos que al usar cartuchos
- Puedes expandir el bus de la memoria VRAM a 32-bit
- Usa la velocidad de CPU adicional de la DSi, que permite mejor rendimiento en algunos juegos
- Mejora tu audio a 48 kHz
- Usa el Modo DSi, permitiendo utilizar funciones de DSi
- Se consume menos batería
- Usando ciertos cartuchos, puedes usar comunicación IR en las aplicaciones y juegos que lo admiten
- nds-bootstrap es de código abierto, lo que significa que los desarrolladores pueden actualizarlo para corregir bugs y otras cosas, incluso si se abandona el proyecto
- Se emula el cartucho de expansión de memoria, lo que significa que los juegos que requieren dicho accesorio funcionarán
    - Actualmente, sólo se emula con la aplicación *Nintendo DS Browser*
- Se pueden intercambiar las pantallas, lo que permite una experiencia de juego más cómoda en sistemas con pantallas rotas o removidas
- Puedes tomar capturas de pantalla y editar valores en la memoria RAM a través del menú dentro del juego

#### ¿Por qué debería usar B4DS en una flashcard si uso una DS/DS Lite?
- Ciertas ROMs compatibles se cargan en el cartucho de expansión de memoria (o en flashcards de la ranura Slot-2 que tengan RAM), lo que permite tiempos de carga más rápidos que al usar cartuchos
- 400+ DSiWare titles can be run using built-in patches and a Donor ROM of an SDK5 DS title
    - Ten en cuenta que siempre se usará nds-bootstrap para ejecutar títulos DSiWare, independientemente de si configuraste TWiLight Menu++ para usar el kernel de tu flashcard en lugar de nds-bootstrap en los ajustes
    - Not all DSiWare titles can save, due to the difficulty of adding save support for them, and/or them storing more than one file in the save filesystem
    - Certain DSiWare will require *Lufia: Curse of the Sinistrals* set as a Donor ROM
- Si el kernel de tu flashcard no puede ejecutar alguna ROM, puedes usar nds-bootstrap en su lugar, y esto puedes configurarlo independientemente según cada juego
- Se pueden intercambiar las pantallas, lo que permite una experiencia de juego más cómoda en sistemas con pantallas rotas o removidas
- Puedes tomar capturas de pantalla y editar valores en la memoria RAM a través del menú dentro del juego

#### ¿Qué es una ROM donante?
En nds-bootstrap, cuando un juego no puede iniciarse, se toma prestado el binario ARM7 (y ARM7i, de estar disponible) de otra ROM, en lugar del binario propio de dicho juego.     
Puedes establecer una ROM como donante usando **TW**i**L**ight Menu++.
- **Flashcards in DS mode:** The supported DSi-Exclusive/DSiWare titles will require an SDK5 DS ROM set as a Donor ROM
- **DSiWarehax:** Ya que la tanto los juegos con mejoras DSi como los que son exclusivos o los títulos DSiWare contienen configuraciones distintas de MKB, los juegos con mejoras DSI no podrán iniciar en modo DSi sin una ROM donante. Al establecer como ROM donante un juego exclusivo para DSI o un título DSiWare, los juegos con mejoras DSi podrán ejecutarse con la configuración de MBK establecida por el título DSiWare en el que usa el exploit
    - En una DSi, si if **TW**i**L**ight Menu++ detecta que no se ha establecido una ROM donante, *Nintendo DSi Sound* y/o otro título válido con el que se haya hecho un exploit se establecerá de manera automática
- **CycloDS iEvolution:** Ocurre lo mismo que con DSiWarehax, pero los juegos con mejoras DSi y los títulos DSiWare requerirán un juego con mejoras DSi como ROM donante, y no al revés

#### ¿Cuál es la mejor ROM donante?
No hay una *mejor* que otras. Most ROMs of TWL titles can be set as a Donor ROM.     
On DS flashcards, any SDK5 DS title can be set as a Donor ROM for DSiWare.

Ejemplos:
- **DSiWarehax on DSi:** *Nintendo DSi Sound* o un título válido explotable que hayas lanzado se establecerá automáticamente como ROM donante, si no has establecido alguna previamente.
- **DSiWarehax en 3DS:** Vuelca la ROM de la configuración de WiFi de DS (SDK5.5) usando GodMode9, y establécela como ROM donante.

#### ¿Por qué no puedo establecer una ROM como ROM donante?
Si algún juego requiere una ROM donante, ya la ROM que TWiLight Menu++ recomendó no muestra la opción para establecerla como ROM donante (aún después de desplazarte hacia abajo en las opciones), deberás buscar otra ROM que establecer como donante.

#### ¿Qué es una versión nightly y cómo la consigo?
Una versión nightly es una versión construida con el último cambio en el código fuente. Estas versiones pueden ser inestables, pero tienen las últimas correcciones de errores. Puedes obtener la versión nightly más reciente de nds-bootstrap desde [el repositorio TWLBot/Builds de GitHub](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### ¿Por qué no funcionan mis trucos?
- Algunos trucos requieren pulsar un botón o alguna otra condición para activarse. Revisa la descripción del truco para obtener más información
    - En **TW**i**L**ight Menu++, puedes presionar Y para ver la información de un truco específico, si esta está disponible
- La mayoría de trucos fueron desarrollados con el modo DS en mente, y podrían no funcionar al ejecutar un juego en modo DSi. Si el juego tiene mejoras para DSi, intenta ejecutarlo en modo DS
- Actualmente, la forma en la que los trucos tipo E están implementados en nds-bootsrap está rota, lo que quiere decir su funcionamiento no está garantizado. Tu truco probablemente es de este tipo, y no se sabe cuando se podría resolver este problema

Para más información sobre trucos, revisa la [sección de trucos Action Replay en la página de ROMs comerciales](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### ¿Cómo hago capturas de pantalla?
Puedes hacer capturas de pantalla de la pantalla principal desde el menú dentro del juego. Por defecto, este menú se accede pulsando <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>, ya dentro seleccióna `Captura de pantalla...`, cambia el banco de VRAM si lo necesitas, y luego pulsa <kbd class="face">A</kbd> para guardar la imagen.

Para ver tus capturas en un ordenador, necesitarás extraer el archivo `sd:/_nds/nds-bootstrap/screenshots.tar`, dentro del cual estarán todas tus capturas en formato BMP. También habrán archivos BMP vacíos para rellenar el archivo TAR hasta los 50 elementos. Puedes ignorar o incluso eliminar estos archivos.

nds-bootstrap sólo puede alojar 50 imágenes en el archivo `screenshots.tar`, por lo que al estar cerca de este número, deberías extraer y eliminarlo para que nds-bootstrap pueda generar uno nuevo la próxima vez que inicies un juego.

#### ¿Cuál es la pantalla principal y por qué sólo puedo tomar capturas de ella?
La pantalla "principal" es la que se esté renderizando usando el motor principal, es decir, que físicamente, podría ser cualquiera de las dos. Normalmente, es la pantalla en la que ocurre el gameplay. Si una pantalla está renderizando elementos en 3D, esa es la pantalla principal. Cuando estés en el menú dentro del juego, la pantalla principal siempre aparecerá en la pantalla superior.

Que las capturas sólo pueden realizarse a la pantalla principal se debe a una limitación del hardware de la consola. No tiene un búfer de fotogramas, pero sí una función de captura que permite capturar la imagen de salida del motor principal. Los juegos suelen usar esta función para renderizar 3D a ambas pantallas, pero también puede usarse para realizar capturas de pantalla.

#### ¿Qué es el banco de VRAM que se me pide seleccionar al tomar una captura de pantalla?
Al realizar una captura usando nds-bootstrap, es necesario usar la función de captura de pantalla de la consola para capturar un fotograma renderizado por el motor principal. Sin embargo, esta captura sólo puede escribirse a uno de los cuatro primeros bancos de la VRAM. nds-bootstrap intentará elegir el banco que no esté siendo usado por el motor principal, así que usualmente puedes ignorar esto, sin embargo, en algunos casos los cuatros bancos estarán ocupados por el motor principal, por lo que no será posible hacer una captura de pantalla perfecta, y tendrás que elegir el banco con el que se vea mejor.

#### ¿Puedo jugar juegos en línea con nds-bootstrap?
Jugar en línea con nds-bootstrap funciona exactamente igual que en cartuchos oficiales. Revisa la [página sobre WiFi](../ds-index/wifi) para obtener información sobre cómo conectarte a un servicio online alternativo.
- Si estás jugando a juegos con mejoras DSi en modo DS, estarás limitado a redes con cifrado WEP o sin seguridad

#### ¿Puedo dañar mi consola si juego con la velocidad TWL (133 MHz) activada?
No. Si bien no todos los juegos funcionan correctamente a esta frecuencia de la CPU, tanto la DSi como la 3DS fueron diseñadas para funcionar a esta velocidad.
- Si encuentras problemas con algún juego ejecutándose a 133Mhz, repórtalo como un problema en el [repositorio de GitHub de**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/issues), explicando con detalle los efectos para que pueda ser incluido en la lista de juegos que no deben ejecutarse a esa velocidad

#### ¿Puedo acelerar los juegos con nds-bootstrap?
Si bien la velocidad TWL de la CPU puede reducir el lag, nds-bootstrap no puede ejecutar juegos más rápido que a la velocidad prevista.

#### ¿Puedo cambiar los botones usando nds-bootstrap?
No. Ya que nds-bootstrap ejecuta los juegos de forma nativa, no puede cambiar la funcionalidad de la mayoría de botones. La única forma de hacer esto sería modificar el juego en sí, o usar trucos que lo permitan.

#### ¿Cómo hago para jugar ROMs de Pokémon randomizadas con nds-bootstrap?
Pokémon HeartGold y SoulSilver, Blanco y Negro, y Blanco 2 y Negro 2 tiene medidas antipiratería que deben ser parcheadas manualmente *antes* de randomizar la ROM. Puedes hacer esto con [DS-Scene ROM Tool](https://gbatemp.net/download/35735/).
- Las ROMs randomizadas no pueden ser parcheadas automáticamente como las versiones sin modificar de estos juegos, ya que una ROM randomizada tiene demasiadas checksums distintas posibles como para que estas se incluyan en **TW**i**L**ight Menu++

#### ¿Qué son los binarios de DSi? ¿Cómo los consigo?
Los binarios de DSI son las partes del código de un juego que se usan en las consolas DSi y 3DS para usar las funciones de DSi, como la cámara o la posibilidad de usar redes con cifrados modernos. Los métodos que se usaban anteriormente para volcar los juegos, no podían volcar estos binarios de manera correcta.

- Las ROMs sin binarios de DSi pueden jugarse en cualquier consola en modo DS, pero estas se ejecutarán igual que lo harían al jugarlos desde una Nintendo DS Lite/Phat

Para obtener una ROM que contenga los binarios de DSi, [vuelve a volcar tu cartucho](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games).
