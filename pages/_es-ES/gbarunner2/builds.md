---
lang: es-ES
layout: wiki
section: gbarunner2
title: Versiones de GBARunner2
description: Información sobre las diferentes versiones de GBARunner2 y sus usos
---


Existe un número de diferentes versiones de GBARunner2 que pueden ser utilizadas. Provienen de diferentes ramas y forks de GBARunner2 que tienen características diseñadas para diferentes juegos de GBA u otras funciones. **Para la mayoría de usuarios** utilizar la versión incluida en TWiLight Menu++ es suficiente.

## Versiones de DS, DSi y 3DS

GBARunner2 ha tenido versiones que hacen uso del hardware extra disponible en las consolas DSi y 3DS. Naturalmente, estas versiones específicas para DSi y 3DS no funcionan en consolas DS. Sin embargo, estas versiones tampoco funcionarán si estás ejecutando GBARunner2 desde una flashcard en cualquiera de los sistemas, DSi y 3DS incluidos. Detalles sobre esto no serán explicados aquí.

Esto significa que puedes utilizar versiones para DS en consolas DSi y 3DS, pero no viceversa.

## Versiones compartidas entre DS, DSi y 3DS

Estas son versiones que están presentes para las tres líneas de sistemas.

### Master

Las versiones Master son las versiones principales de GBARunner2. Éstas deberían ser generalmente las versiones más estables. El resto de ramas son consideradas experimentales y no son lo suficientemente estables para ser incluidas dentro de Master. Las versiones Master están divididas entre DS, DSi y 3DS. Cada una indica su sistema correspondiente al final del nombre del archivo.

### Wi-Fi-Link

La rama Wi-Fi-Link permite la posibilidad de conectar dos sistemas inalámbricamente. Vale aclarar que esta característica no funciona a través de internet, y jamás será posible. Actualmente su experiencia puede variar, y el único juego que llega a mantener una conexión estable es Advance Guardian Heroes, teniendo en cuenta que debe seguir una serie de instrucciones. No hace falta aclarar que esta rama se considera, en su estado actual, como una novedad y una prueba de concepto, no algo realmente para usar. Es posible conectar otros juegos, pero depende mucho de factores externos tales como interferencia de otras señales Wi-Fi, entre otras cosas.

## Versiones sólo para DS

### ARM7DLDI vs ARM9DLDI

**Se recomienda utilizar la versión ARM9DLDI**, y si esta no funciona entonces intentar con la versión ARM7DLDI. Algunas flashcards necesitan la versión ARM7DLDI o la ARM9DLDI, y otras pueden funcionar con ambas. No existe una lista de qué flashcards funcionan con cuáles versiones, pero si está teniendo problemas ejecutando GBARunner2 podría intentar cambiando la versión.

No hay diferencias de rendimiento o de características entre ambas versiones, por lo tanto no es necesario testear ambas para ver si un juego corre mejor o tiene menos problemas que en la otra versión.

Vea más abajo para descubrir qué versión está utilizando actualmente.

### ROM3M

Si está utilizando TWiLight Menu++, entonces ya está utilizando esta característica en la versión de GBARunner2 que viene incluida.

Esta rama puede ayudar si intenta correr ROMs un poco más grandes en la DS, aunque hay un límite debido a la limitada cantidad de RAM presente en la consola. Esta es básicamente la rama Pokémon Esmeralda para la DS.

Void Star hizo [un fork de GBARunner2](https://github.com/unresolvedsymbol/GBARunner2-DSL-Enhanced/releases) que combina la rama ROM3M con otras interesantes funciones, y esta es la versión que viene con TWiLight Menu++ si está utilizando una DS.

## Versiones para DSi y 3DS

La DSi y la 3DS generalmente corren las mismas versiones, pero debido a la diferencia de memoria RAM entre ambas consolas la compatibilidad en juegos puede diferir. Esto significa que la DSi puede tener problemas corriendo ROMs más grandes, mientras que la 3DS las puede ejecutar correctamente.

La 3DS también tiene un chip acelerómetro con un giroscopio, y esto puede ser utilizado en una versión de GBARunner2 específica para 3DS.

### DSP

Las versiones DSP hacen uso de un procesador extra presente en consolas DSi y 3DS. Esto ayuda a generar un sonido de mejor calidad y ofrecer un mejor rendimiento. Hay ciertas regresiones como un par de ROMs que no funcionan en esta rama.

### Hybrid Hicode

La rama Hybrid Hicode se ocupa de las ROMs grandes que tienen problemas corriendo en la rama Master. Esta es una rama bastante útil para la DSi dado que soluciona bastante el problema de tener menos RAM que la 3DS.

### Sólo para 3DS: Giroscopio

Esta rama hace uso del acelerómetro interno en la 3DS, así los juegos de GBA que tenían esta funcionalidad pueden ser jugados correctamente. Se necesita seguir varios pasos para que funcione. Tenga en cuenta que existen diferentes chips acelerómetros en los sistemas 3DS, por lo que probablemente no funcione en todas las 3DS debido a que no todos los chips tienen código que los soporten.

No existe información consistente sobre qué chip lleva cada tipo de 3DS, hasta donde se sabe.

## Encontrar información de la versión

GBARunner2 has an menu you can open by touching the touch screen and pressing the right shoulder button. Within this you can find the about menu which tells you what build you are on. However, the builds that come with TWiLightMenu++ do not report a build version because they are based on forks by other people. This means that if your About page shows blank for build, you are most likely using one of these.

This tells you if you are using an ARM7DLDI or ARM9DLDI build

Knowing what build to use is useful when checking the official compatibility list in case you are having issues with running a game.

The release ID can be seen on the release page of the GBARunner2's github repository, where the last seven alphanumeric symbols represent the version. For example, the current latest Master release is "v20200812-131430_6e4ce45" and "6e4ce45" is used to represent its version.
