---
lang: it-IT
layout: wiki
section: hiyacfw
title: Disinstallazione
long_title: Disinstallazione di hiyaCFW
description: Come disinstallare hiyaCFW da Nintendo DSi
---

hiyaCFW è presente solo sulla scheda SD e non è presente sulla tua NAND. Prima di procedere, assicurati di eseguire il backup dei dati di salvataggio che desideri mantenere dalla tua SDNAND. You can learn how to do that by following [dsi.cfw.guide](https://dsi.cfw.guide)'s [DSiWare Backups](https://dsi.cfw.guide/dsiware-backups.html) guide.

### Disinstallazione
1. Elimina `hiya.dsi` dalla root della scheda SD
1. Elimina la cartella `hiya`
1. Elimina le cartelle `import`, `photo`, `progress`, `shared1`, `shared2`, `sys`, `title`, `ticket` e `tmp`

### Modifica delle impostazioni di Unlaunch

Se avevi impostato Unlaunch per l'avvio automatico di hiyaCFW, potresti voler cambiare queste impostazioni ora che non lo usi più.

1. Inserisci la scheda SD nel tuo Nintendo DSi e avvia la console tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
    - Questo aprirà il menu di Unlaunch
1. Vai a `OPTIONS`, e imposta `NO BUTTON` all'applicazione desiderata
    - Se vuoi avviare automaticamente la NAND di sistema, impostalo sull'applicazione chiamata `Launcher`
    - Se vuoi avviare automaticamente TWiLight Menu, scegli il file chiamato `BOOT.NDS`
1. Scegli `SAVE & EXIT`
