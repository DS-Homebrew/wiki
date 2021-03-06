---
lang: es-ES
layout: wiki
section: ds-index
category: guides
title: Accesos directos a juegos de DS (3DS)
description: Cómo crear accesos directos CIA para tener tus juegos de DS en el menú principal de 3DS
---

Si tienes algún problema, echa un vistazo al [hilo de GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### Requisitos

3DS:
- [Luma3DS](https://github.com/lumateam/luma3ds/releases)o cualquier CFW que parchee la TWL_NAND
- [FBI](https://github.com/Steveice10/FBI/releases) para instalar los archivos CIA
- (Opcional) Una flashcard de DS compatible

{% capture flashcards %}
Las flashcards recomendadas son las DSTT y Acekard 2i. Si quieres una compatibilidad perfecta, obtén la SuperCard DSTWO / DSTWO PLUS. El único inconveniente es que consume mucha batería.

Si tienes una flashcard que funciona con Apache Thunder's NTR Launcher, pídelo [en el hilo de GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Asegúrate de especificar qué versión/build estás usando (Normal o Alt) y si `RESETSLOT1` está a `0` o a `1` en `sd:/nds/ntr_launcher.ini`.

Compatibles:
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (los juegos DSi-Enhanced, incluyendo los NTR más recientes, no funcionan.)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (usa una microSD de <2GB)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (versión original Non-SDHC, usa una microSD de <2GB)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (versiones Normal y RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (el cartucho morado puede no ser compatible)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (versiones Normal y Plus)

No probadas:
- R4i3D NEW (usa la plantilla y el pack R4iDSN)

Compatibles parcialmente:
- Ace 3DS+ (La compatibilidad es mala, por lo que guardar o cargar partidas crashea.)
- Gateway Blue Card (La compatibilidad es mala, por lo que guardar o cargar partidas crashea.)
- EX4DS (La compatibilidad es mala, por lo que guardar o cargar partidas crashea.)
- R4iLS (La compatibilidad es mala, por lo que guardar o cargar partidas crashea.)
- Cartuchos con [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (La compatibilidad es mala, por lo que guardar o cargar partidas crashea.)

Incompatibles:
- CycloDS (i)Evolution (Puede lanzar ROMs directamente, pero funciona de forma distinta que otras flashcards.)
- (i)Edge (No puede lanzar directamente ROMs .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com)/[www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (no el fordwarder) brickea el cartucho)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (no el fordwarder) brickea el cartucho)
{% endcapture %}

<details>
    <summary>Flashcards soportadas</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

PC:
- Un SO de 64 bits
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Java 8 Update 251
- **Linux users:** JavaFX. On Debian based systems run [this](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh), or if you're on Arch run: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`.

### Parte 1: Preparación
{% capture tab-sd-card %}
1. Descarga el [pack de forwarders de la tarjeta SD](https://www.dropbox.com/s/k5uaa4jzbtkgm0z/DS%20Game%20Forwarder%20pack%20%283DS%20SD%20Card%29.7z?dl=0)
1. Extrae el contenido de la carpeta `for SD card root` en la raíz de la SD de tu 3DS

Tras extraer el pack, puedes editar `sd:/_nds/nds-bootstrap.ini` y cambiar la configuración:
- `BOOST_CPU`: Puesto a 1, se usa la velocidad de reloj de TWL, por lo que el lag desaparece
- `SOUND_FREQ`: Puesto a 1, el sonido estará a 48khz en vez de a 32khz
{% endcapture%}

{% capture tab-flashcard %}
1. Descarga uno de estos packs:
   - [Original R4/M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i)/M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+/Gateway Blue Card/R4iLS/R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. Extrae el contenido de la carpeta `for Slot-1 microSD` en la raíz de la tarjeta microSD de tu flashcard, y (si existe la carpeta) el contenido de la carpeta `for 3DS SD card` en la raíz de la SD de tu 3DS.

Tras extraer el pack para tu tarjeta, puedes editar `sd:/_nds/nds-bootstrap.ini` y cambiar la configuración. Esto no es posible para Acekard RPG, R4 DS, y R4i Gold RTS.
- `NTRCLOCK`: Puesto a `0` o manteniendo <kbd class="face">A</kbd>, la pantalla inicial de DSi aparecerá en vez de la de DS y se usará la velocidad de reloj de TWL, por lo que el lag desaparece
- `DISABLEANIMATION`: Puesto a `1` o manteniendo <kbd class="face">B</kbd>, se salta la pantalla de inicio de DS / DSi
- `HEALTHSAFETYMSG`: Puesto a `1`, El mensaje sobre Salud y Seguridad de la pantalla de inicio aparecerá en la pantalla inferior, y en caso contrario la pantalla estará en blanco
{% endcapture %}

<div class="tab-container">
    <div class="pb-3">
        <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-sd-card" onclick="openTab(event, event.currentTarget)" data-tab-name="sd-card">Tarjeta SD</a>
        <a class="tab-link btn btn-outline-secondary" href="#tab-flashcard" onclick="openTab(event, event.currentTarget)" data-tab-name="flashcard">Flashcard</a>
    </div>
    <div id="tab-sd-card">
        <noscript><h4>Tarjeta SD</h4></noscript>
        {{ tab-sd-card | markdownify }}
    </div>
    <div id="tab-flashcard">
        <noscript><h4>Flashcard</h4></noscript>
        {{ tab-flashcard | markdownify }}
    </div>
</div>

### Parte 2: Obtener los archivos AP de TWiLight Menu++
Si ya tienes el TWiLight Menu++, salta a la siguiente sección.
1. Descarga la última versión de `TWiLightMenu-3DS.7z` desde la [página de lanzamientos](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. En el archivo 7z, ve a `_nds/TWiLightMenu/`
1. Copia la carpeta `apfix` a `sd:/_nds/ntr-forwarder/` en la tarjeta SD de la 3DS

### Parte 3: Forwarder3-DS
1. Abre `Forwarder3DS.jar`
   - Si no se abre, crea un nuevo fichero de texto en la misma carpeta que Forwarder3DS.jar que contenga `java -jar Forwarder3DS.jar`, guárdalo como `Forwarder3DS.bat` y ejecútalo (asegúrate de que no ponga `.txt` al final)
1. Elige tu tarjeta como `Target` en la izquierda
   - **NOTA:** Si no ves una lista de tarjetas, descarga [este zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip) y pon la carpeta `forwarders` en la misma que Forwarder3DS.jar, después renómbrala a `.forwarders`
1. Activa `Automatically set ROM path`
   - **Usuarios de Linux:** La ruta automática es incorrecta ya que incluye toda la ruta (p.ej. `/media/$USER/algo/`), quita esa parte
   - **Usuarios de macOS:** La ruta automática es incorrecta ya que incluye `/Volumes/(nombre tarjeta)/` al principio, quita esa parte
1. Pincha la carpeta en la parte superior derecha y selecciona las ROMs de las que quieres crear accesos directos o arrástralas a la ventana
   - **NOTA:** Las ROMs deben encontrarse en la tarjeta SD cuando las selecciones, y no podrán moverse sin tener que volver a hacer los accesos directos
   - **Usuarios tarjetas SD:** Si el archivo de guardado se encuentra en la misma carpeta que la ROM, muévela a una nueva llamada `saves` en la misma carpeta que las ROMs
1. Si estás jugando un hack / traducción de un juego DSi-Enhanced que tiene editado su banner / título, busca su banner [aquí](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), haz click derecho al juego en Forwarder3-DS, pincha `Import banner` y selecciona el banner a usar
1. Si se trata de una ROM homebrew, pincha en ella, borra el `Game title` y escribe el nombre del juego
1. Pincha en el botón del disquete para generar los CIAs
1. Copia los CIAs en la SD de la 3DS e instálalos con FBI
   - Si estás usando EmuNAND, instálalos en ambas SysNAND y EmuNAND
