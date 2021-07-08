---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Acerca del homebrew en la Nintendo DS
---

### Desarrollo

A la hora de desarrollar homebrew para Nintendo DS, normalmente se usan las herramientas de devkitPro, como devkitARM, libnds y libfat. Sin embargo, se puede usar software alternativo:

- **Librerías para la tarjeta SD:** [DevkitPro](https://devkitpro.org/) recomienda [libfat](https://github.com/devkitPro/libfat). En cambio, nosotros recomendamos [libslim](https://github.com/DS-Homebrew/libslim/), ya que permite el uso de diferentes particiones, mayor velocidad y evitar bloqueos
- **Librerías gráficas:** Recomendamos el uso de [easyGL2D](http://rel.phatcode.net/junk.php?id=117), que viene incluído en libnds. Sin embargo, puedes usar [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Estaciones de trabajo:** Recomendamos [devkitARM](https://devkitpro.org/wiki/Getting_Started) y [libnds](https://libnds.devkitpro.org/), ya que tiene compatibilidad con DSi y un ecosistema más amplio. Sin embargo, si lo que te interesa son las flashcards de Nintendo DS, puedes usar [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Flashcards

Las flashcards en Modo DS son un método para lanzar aplicaciones de Nintendo DS a través del Slot-1. Tienen la ventaja de mantener los archivos de la consola y los portátiles por separado, poder usarlas sin tener que modificar el sistema y son compatibles con las DS Phat/Lite. Sin embargo, al contrario de modear la propia consola, hay muchos modelos distintos en el mercado, cada una con con un kernel con requerimientos distintos. El kernel que usas es lo más importante.

[Hay un índice de flashcards **aún en desarrollo**](https://nightyoshi370.github.io/mm-github-pages-starter/) que contiene kernels, firmware, reseñas y links de compra.

### DLDI

Las diversas ranuras para tarjetas SD tienen hardware distinto (la mayoría de las veces) y el código escrito para una tarjeta no tiene por qué funcionar para otra. DLDI (abreviatura de Dynamically Linked Device Interface) intenta arreglar esto teniendo el código que maneja la tarjeta SD parcheado de forma externa. Loaders como YSMenu, Wood R4 y TWiLight Menu++pueden parchear con DLDI un homebrew, pero si quieres parchearlo manualmente, puedes hacerlo con [DLDI Patcher](https://www.chishm.com/DLDI#tools) dependiendo de tu dispositivo.

### Time bomb

In some flashcard kernels, an arbitrary expiration date (more commonly known as a time bomb) is coded in by the kernel developers as a way to get consumers to buy their latest product. The procedure for how this works is the following:

1. The flashcard is booted into and loads up the kernel file from the SD card without checking if it's the kernel intended by the developers
1. Each time the kernel file from the SD card is loaded, it checks if the system date is past a certain date

If the second test comes out positive, the kernel will refuse to boot. This can be tested by setting your date to the latest value possible. However, the security is weak and the results aren't cached, meaning that there are ways to work around it:

If you want to use the default kernel that the flashcard manufacturers intended, the system clock can be set back in the device's System Settings application. Keep in mind, though, that this may break any game that relies on the system clock (such as Animal Crossing: Wild World).

However, the kernels that come with these cards are fundamentally flawed and it is preferable to outright replace them. Thankfully, 3rd party developers have made alternatives you can use:

- [YSmenu - menu + game loader](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Although it does not have the advantage of a customizable all-in-one menu, the game loader has far better compatibility with support for action-replay cheats
- [TWiLight Menu++ with nds-bootstrap](/twilightmenu/installing-flashcard) - Has a customizable all-in-one menu and supports cheats, but its B4DS mode (the mode used when it doesn't have the DSi's capabilities) has weak compatibility, some games even requiring the Memory Expansion Pak
- [TWiLight Menu++ with YSmenu](/twilightmenu/installing-flashcard) - Customizable all-in-one menu with high compatibility, but lacks cheat support

### Soporte ARGV
ARGV is an information transmitter between two homebrew Nintendo DS applications. It can be used for forwarders or alternative menus.

- El homebrew tiene que ser programado para poder sacarle provecho. Por ejemplo, GBARunner2, NesDS y GameYob tienen ARGV implementado
- También tiene que haber alguna forma de cambiar las variables de ARGV. TWiLight Menu++ y HBMenu permiten configurar los argumentos de ARGV
