---
lang: it-IT
layout: faq
section: gbarunner2
title: FAQ & Risoluzione dei problemi
long_title: FAQ GBARunner2 & Risoluzione dei problemi
description: FAQ e risoluzione dei problemi per GBARunner2
---

#### Come faccio a creare e ad aggiungere dei bordi personalizzati?
Puoi leggere e seguire [questa guida](https://docs.google.com/document/d/1owjiW-1fHEbokrkK2ZuPFjR2-N9s1dXCCAM3ghWRtxk/edit?usp=sharing) di FrescoASF.

#### I trucchi sono supportati?
Non in questo momento. Tuttavia, è possibile iniettare in modo permanente i codici dei trucchi nella tua ROM GBA con [GBAATM](https://gbatemp.net/threads/gba-auto-trainer-maker-gbaatm.99334/).

#### Quale build di GBARunner2 dovrei utilizzare?
Di solito, le build incluse in TWiLight Menu++ sono sufficienti. Per ulteriori informazioni sulle varie build di GBARunner, consultare la pagina wiki [Build](https://wiki.ds-homebrew.com/gbarunner2/builds).

#### Come posso utilizzare le funzioni di collegamento Wi-Fi?
Avrai bisogno di una build dal ramo [wifi_link](https://github.com/Gericom/GBARunner2/tree/wifi_link) per utilizzare queste funzionalità. Puoi trovare istruzioni dettagliate su come configurare le build sulla pagina della [GBATemp Wiki](https://wiki.gbatemp.net/wiki/GBARunner2/Link).

#### Perché l'OTR (Orologio in tempo reale) non è supportato nelle ROM hack?
Il supporto all'OTR varia da gioco a gioco. È necessario cambiare l'ID del titolo della ROM con quello di un gioco che supporta l'OTR in modo che GBARunner2 lo riconosca. L'elenco degli ID dei titoli supportati è disponibile in [GBARunner2](https://github.com/Gericom/GBARunner2/blob/master/arm9/source/emu/romGpio.vram.cpp#L14-L61).

L'ID del titolo può essere modificato secondo la seguente procedura:
1. <label for="file-input" class="form-label">Seleziona il file ROM GBA:</label> <input id="file-input" class="form-control mb-2" type="file" onchange="loadRom(this.files[0])" />
1. <label for="file-input" class="form-label">Inserisci l'ID del titolo desiderato:</label> <input id="tid-input" class="form-control mb-2" type="text" maxlength="4" onchange="updateTid(this.value)" disabled />
1. <label for="file-input" class="form-label">Salva il file aggiornato:</label> <input id="save" class="btn btn-secondary" type="button" value="Salva" onclick="save()" disabled />

<script src="/assets/js/change-gba-tid.js"></script>

#### Perché una ROM non funziona, anche se la lista di compatibilità dice che funziona?
Le liste di compatibilità di GBARunner2 sono state testate principalmente con il BIOS GBA ufficiale, che migliora la compatibilità. Guardare [Info BIOS GBA](https://wiki.ds-homebrew.com/gbarunner2/bios) per informazioni su come ottenere il BIOS GBA ufficiale.

#### Come si risolvono gli strati duplicati nella parte inferiore dello schermo su 3DS?
Si tratta di un bug di TWLBg che è piuttosto diffuso in GBARunner2. L'unico modo per risolvere temporaneamente il problema è riavviare GBARunner2.
- Se applicabile, potrebbe essere meglio utilizzare altre opzioni per l'esecuzione di ROM GBA su 3DS, come VC inject, open_agb_firm o mGBA sui modelli n3DS
