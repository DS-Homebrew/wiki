---
lang: pl-PL
layout: wiki
section: hiyacfw
title: Forwardery
category: other
description: Jak używać forwarderów nds-bootstrap z hiyaCFW
---

### Wymagania
- Nintendo DSi z zainstalowanym [Unlaunch](https://dsi.cfw.guide/installing-unlaunch), [hiyaCFW](installing) i [TWiLight Menu++](/twilightmenu/installing-dsi)
- Najnowsza wersja [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)

### Instrukcje
1. Wyodrębnij *zawartość* `MakeForwarder.zip` do katalogu głównego karty SD
1. Uruchom TWiLight Menu++
1. Uruchom ROM Nintendo DS, dla którego chcesz utworzyć forwarder
1. Gdy ROM się uruchomi, wyłącz konsolę
   - Jeśli to nie zadziała, postępuj zgodnie z przewodnikiem rozwiązywania problemów z nds-bootstrap
1. Uruchom hiyaCFW
1. Po wejściu do menu Nintendo DSi, rozpakuj i uruchom "Forwarder Maker"
1. Ustaw swój docelowy bootstrap w zależności od tego, czym jest twoja aplikacja:
   - **ROM Retail:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Wybierz `utwórz forwarder` i przejdź do lokalizacji ROMu

Powtarzaj kroki 7 i 8 aż do utworzenia wszystkich żądanych forwarderów.
- Nie trzeba resetować docelowego bootstrapu, jeśli używa się tego samego typu ROM

Po zainstalowaniu forwarderów dla wszystkich twoich ROM uruchom ponownie system i uruchom hiyaCFW. Powinny pojawić się teraz jako prezenty.
