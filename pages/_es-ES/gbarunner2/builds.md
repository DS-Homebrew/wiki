---
lang: es-ES
layout: wiki
section: gbarunner2
title: Versiones de GBARunner2
description: Información sobre las diferentes versiones de GBARunner2 y sus usos
---


Hay varias versiones distintas de GBARunner2 que uno podría usar. Cada versión proviene de diferentes ramas y forks de GBARunner2 que tienen características diseñadas para diferentes juegos de GBA u otras funciones. **Para la mayoría de usuarios**, usar la versión que viene con **TW**i**L**ight Menu++ es suficiente.

## Versiones de DS, DSi y 3DS

Hay versiones de GBARunner2 pueden aprovechar el hardware adicional que se encuentra en la DSi y en la 3DS. Obviamente, estas versiones son específicas para ser usadas en estas consolas, y no funcionan en una DS Phat/Lite. Además, estas versiones tampoco funcionarán si estás ejecutando GBARunner2 desde una flashcard en cualquiera de los sistemas, DSi y 3DS incluidos. No explicaremos los detalles en esta página.

Esto significa que puedes utilizar versiones para DS en consolas DSi y 3DS, pero no viceversa.

## Versiones compartidas entre DS, DSi y 3DS

Estas versiones pueden ser usadas por las tres familias de consolas.

### [Master](https://github.com/Gericom/GBARunner2/releases)

Las versiones Master son básicamente las versiones principales de GBARunner2. Esto quiere decir que, generalmente, son las versiones más estables. El resto de ramas son consideradas experimentales y no son lo suficientemente estables para ser incluidas dentro de la rama Master. Las versiones Master están divididas entre DS, DSi y 3DS. Cada una indica su sistema correspondiente al final del nombre del archivo.

### [Wi-Fi-Link](https://github.com/Gericom/GBARunner2/releases/tag/v20200217-194452_0b8bbe3)

La rama Wi-Fi-Link permite la posibilidad de conectar dos sistemas inalámbricamente. Importante notar que esto sólo sirve de manera local, y no por internet, ya que esto no sería posible debido a la latencia. Tu experiencia usándola puede variar, pero generalmente el único juego que se sabe que mantiene una conexión estable es Advance Guardian Heroes, y esto teniendo en cuenta que hay que seguir instrucciones bastante específicas. No hace falta aclarar que esta rama se considera, en su estado actual, como una novedad y una prueba de concepto, no es realmente algo que quieras usar de manera principal. Es posible conectar otros juegos, pero depende mucho de factores externos tales como interferencia de otras señales Wi-Fi, entre otras cosas. To setup Wi-Fi linking, please see the [WikiTemp page](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

## Versiones sólo para DS

### ARM7DLDI vs ARM9DLDI

**Se recomienda utilizar la versión ARM9DLDI**, y si esta no funciona entonces intentar con la versión ARM7DLDI. Algunas flashcards necesitan la versión ARM7DLDI o la ARM9DLDI, y otras pueden funcionar con ambas. No existe una lista de qué flashcards funcionan con qué versiones, pero si estás teniendo problemas ejecutando GBARunner2, intenta cambiar de versión.

Si estás usando **TW**i**L**ight Menu++ en tu flashcard, puedes cambiar entre ARM7DLDI y ARM9DLDI en los ajustes de **TW**i**L**ight Menu++.

No hay funciones especiales o diferencias de rendimiento entre las dos versiones, así que no hace falta comprobar si un juego va mejor o tiene menos en una versión y la otra.

Si quieres saber qué versión es la que estás usando actualmente, sigue leyendo.

### [rom3M](https://github.com/Gericom/GBARunner2/releases/tag/v20190911-201047_371815e)

Esta rama es útil si estás intentando ejecutar ROMS un poco más grandes en la DS, pero hay un límite por la cantidad de memoria RAM disponible en la consola. Esta es básicamente la rama para Pokémon Esmeralda en la DS.

Void Star creó un [fork de GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) que unifica la rama rom3M con la rama Master, junto con otras funciones interesantes. Esta es la versión que viene con **TW**i**L**ight Menu++ para flashcards.

## Versiones solo para DSi y 3DS

La DSi y la 3DS generalmente usan las mismas versiones, pero debido a la diferencia de memoria RAM entre ambas consolas la compatibilidad en juegos puede diferir. Esto significa que la DSi puede tener problemas ejecutando ROMs más grandes que la 3DS puede ejecutar sin problemas.

La 3DS también tiene un acelerómetro para usar controles giroscópicos, del que se puede aprovechar la versión de GBARunner2 para 3DS.

### [DSP](https://github.com/Gericom/GBARunner2/releases/tag/v20200809-113646_551ae99_dsp-audio)

Si estás usando **TW**i**L**ight Menu++, entonces ya estás usando esta función, ya que viene incorporada con la versión de GBARunner2 que se usa.

La versión DSP usa el procesador de sonido digital presente tanto en la DSi como en la 3DS. Esto ayuda a producir sonido de mayor calidad y un mejor rendimiento. Hay algunas regresiones, como por ejemplo, hay algunas ROMs que no funcionan con esta rama.

### [Híbrido HiCode](https://github.com/Gericom/GBARunner2/releases/tag/v20200812-130512_d5dc8d8)

Si estás usando **TW**i**L**ight Menu++, entonces ya estás usando esta función, ya que viene incorporada con la versión de GBARunner2 que se usa.

La rama Híbrido HiCode se ocupa de las ROMs grandes que tienen problemas al ejecutarse en la rama Master. Es una rama muy útil para la DSi ya que en gran medida resuelve el problema que es tener menos memoria RAM que la 3DS.

### [Fusión HiCode/DSP](https://github.com/therealteamplayer/GBARunner2/releases/tag/v20210911-merges-and-tweaks)

Este fork, creado por therealteamplayer, fusiona las ramas HiCode y DSP en una sola versión, junto con algún otro retoque, listados en las notas de la versión. Esta es la versión usada por **TW**i**L**ight Menu++ en su versión para la DSi y la 3DS desde la tarjeta SD.

### Solo para 3DS: [Gyro](https://github.com/Gericom/GBARunner2/releases/tag/v20191228-021638_ee7f6a0)

Esta rama usa el acelerómetro interno en la 3DS para que los juegos de GBA que tenían esta funcionalidad la puedan usar correctamente. Se requieren varios pasos para que esto funcione. Cabe aclarar que, ya que hay distintos acelerómetros entre las consolas 3DS, esto no funcionará en todos los modelos, ya que no existe un código que soporte todos los chips disponibles.

No hay forma consistente de determinar qué 3DS tiene qué chip, al menos hasta donde se sabe.

## Encontrar información de la versión

GBARunner2 tiene un menú al que puedes acceder tocando la pantalla táctil y presionando el botón R. Aquí puedes encontrar la sección About, que te muestra la versión que estás usando. Sin embargo, las versiones que vienen con **TW**i**L**ight Menu++ no muestran un número de versión ya que están basadas en forks hechos por otras personas. Esto quiere decir que si tu sección About muestra el campo "Build" en blanco, muy probablemente estés usando una de estas versiones.

La sección About también te indica si estás usando una versión ARM7DLDI o ARM9DLDI.

Saber qué versión usar es útil si quieres revisar la lista oficial de compatibilidad, en caso de que se te estén presentando fallas al ejecutar un juego.

Puedes ver la ID de la versión en la página de Releases de GBARunner2 en GitHub, representado por los últimos 7 dígitos alfanuméricos presentes en la versión. Por ejemplo, la última versión Master es la "v20200812-131430_6e4ce45", y se usa "6e4ce45" para representar esta versión.
