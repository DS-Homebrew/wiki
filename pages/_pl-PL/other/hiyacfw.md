---
lang: pl-PL
layout: wiki
section: other
title: hiyaCFW
description: Informacje na temat hiyaCFW
---

Informacje o [hiyaCFW](https://github.com/RocketRobz/hiyaCFW), pierwszego na świecie CFW dla DSi.

### Niestandardowe ekrany powitalne
Dzięki hiyaCFW możesz używać niestandardowych splashy w formatach `.bmp` lub `.gif`. Muszą one się znaleźć w folderze `sd:/hiya` i muszą mieć nazwy `splashtop` dla górnego ekranu i `splashbottom` dla dolnego, z odpowiednim rozszerzeniem pliku, a następnie upewnij się, że splash screen jest włączony w konfiguracji. Obrazy nie muszą być w tym samym formacie, więc jeden może być BMP a drugi GIF, GIFy mają pierwszeństwo. Poniżej znajduje się kilka szczegółów dotyczących wymagań, jakie muszą spełniać Twoje zdjęcia, aby działały:

#### BMP
- 16-bitowe (RGBA 1555, RGB 1555, lub RGB 565)
- 256 x 192 lub mniejsze

#### GIFy
- Prosta odpowiedź: większość GIFów 256 x 192 lub mniejszych będzie działać
- Mogą być animowane, ale powinny pozostać poniżej 1 MiB dla idealnej wydajności i nie mogą warzyć więcej niż 10 MiB
- Jeśli obie zapętlają się w nieskończoność, to będą pokazywane przez 3 sekundy, w przeciwnym razie będą pokazywane do momentu, aż zostaną zakończone
- Jeśli ramka ma ustawione wprowadzanie danych przez użytkownika, będzie czekać aż zostanie naciśnięty dowolny przycisk
- Ramki z przeplotem i zwykłe ramki tekstowe ***nie są*** obsługiwane
- Lokalne tablice kolorów są obsługiwane, ale zastąpią całą paletę, łącznie z obrazem szczątkowym z poprzednich klatek, więc obrazy używające ich prawdopodobnie będą miały problemy z paletą
