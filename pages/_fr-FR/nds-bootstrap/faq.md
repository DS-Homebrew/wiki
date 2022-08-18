---
lang: fr-FR
layout: faq
section: nds-bootstrap
title: FAQ et dépannage
long_title: FAQ et dépannage de nds-bootstrap
description: FAQ et dépannage pour nds-bootstrap
---

#### J'ai des problèmes avec ma/mes ROM(s), que dois-je faire ?
- Assurez-vous que vous êtes sur la dernière version de [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) et de [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) si vous l'utilisez (les instructions de mise à jour sont fournies sur la page de chaque version)
- Vérifiez [la liste de compatibilité de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) pour savoir s'il s'agit d'un problème connu sur la dernière version de nds-bootstrap
- Essayez avec tous les codes de triche désactivés pour ce jeu car certains codes ne sont pas compatibles avec nds-bootstrap pour le moment. Appuyer sur <kbd class="l">L</kbd> dans le menu des codes de triche du jeu sur **TW**i**L**ight Menu++ désactivera tous les codes pour ce jeu
- Si cela fonctionnait auparavant, supprimez les dossiers `fatTable` et `patchOffsetCache` dans `sd:/_nds/nds-bootstrap/`
- Lancez le jeu avec différents paramètres, notamment la vitesse du processeur ARM9, la lecture asynchrone de la carte, le mode DS/DSi, la qualité du son, la lecture du DMA de la carte, etc.
    - En utilisant **TW**i**L**ight Menu++, changez tous les paramètres par jeu en `Défaut`
    - Si un paramètre spécifique par jeu est à l'origine de votre problème, veuillez le signaler sur le [dépôt GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- Si elle est présente, supprimer la base de données de codes de triche (`usrcheat.dat`) dans `sd:/_nds/TWiLightMenu/extras`
- [Re-dumpez la ROM](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) pour vous assurer qu'elle n'est pas corrompue
- Si vous avez suivi toutes les étapes ci-dessus, demandez dans le [serveur Discord](https://discord.gg/yD3spjv)
- Si le serveur dit qu'il s'agit d'un problème avec nds-bootstrap, vérifiez si le jeu n'a pas déjà été signalé sur GitHub
    - Vérifiez également les problèmes fermés au cas où un problème aurait déjà été fermé de préférence à un autre
    - Si aucun problème GitHub n'y est associé, créez-en un nouveau
- Si aucune solution n'a été trouvée à ce stade, veuillez mettre à jour la [liste de compatibilité](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Pourquoi y a-t-il des problèmes avec le chargement des ROMs, même si elles sont exécutées en mode natif ?
nds-bootstrap patche les fonctions de la ROM pour qu'elle fonctionne depuis une carte SD, car les ROMs sont codées en dur pour être lues depuis le Slot-1. Il y a aussi des problèmes de timing et des mesures AP (dont la plupart sont déjà supprimées) qui feront que les ROMs ne fonctionneront pas correctement.

#### Pourquoi utiliser nds-bootstrap plutôt qu'un linker ordinaire ?
- Certaines ROMs compatibles sont chargées dans la RAM, ce qui permet des temps de chargement plus rapides que les cartes de jeu normales
- Vous pouvez étendre le bus mémoire VRAM à 32 bits
- Utilisez la vitesse supplémentaire du processeur de la DSi afin d'obtenir de meilleures performances dans certains jeux
- Améliorez votre son avec 48 kHz
- Utilisez le mode DSi afin de bénéficier des fonctionnalités de la DSi
- En utilisant certaines cartes de jeu, vous pouvez utiliser l'infrarouge dans votre application
- nds-bootstrap est open source, ce qui signifie que les développeurs peuvent toujours le mettre à jour pour corriger les bogues et autres choses, même si le projet est abandonné
- Le Memory Expansion Pak DS est émulé, ce qui signifie que les jeux nécessitant cet accessoire fonctionneront
- Intervertissez les écrans supérieur et inférieur dans les jeux compatibles pour un meilleur confort de jeu, ou sur les systèmes dont l'écran est cassé ou retiré
- Faites des captures d'écran et modifiez les valeurs de la RAM à l'aide du menu en jeu

#### DS/DS Lite : Pourquoi utiliser nds-bootstrap sur un linker DS ?
- Certaines ROMs compatibles sont chargées dans le Memory Expansion Pak (ou dans les linkers Slot-2 contenant de la RAM), ce qui permet des temps de chargement plus rapides que les cartes de jeu normales
- Un nombre limité de DSiWare peut être exécuté à l'aide de patchs intégrés et d'une ROM donatrice d'un titre optimisé DSi
     - Gardez à l'esprit que nds-bootstrap sera toujours utilisé pour les DSiWare, indépendamment du paramètre `Utiliser nds-bootstrap` dans les paramètres de TWLMenu++
- Si le kernel de votre linker ne peut pas exécuter une certaine ROM, nds-bootstrap peut être utilisé à la place, et peut être réglé par jeu
- Intervertissez les écrans supérieur et inférieur dans les jeux compatibles pour un meilleur confort de jeu, ou sur les systèmes dont l'écran est cassé ou retiré
- Modifier les valeurs dans la RAM en utilisant le menu en jeu

#### Qu'est-ce qu'une ROM donatrice ?
Dans nds-bootstrap, lorsqu'un jeu ne démarre pas, une autre ROM est utilisée pour « donner » son binaire ARM7 (et ARM7i, si disponible) au jeu configuré pour s'exécuter, à la place dudit binaire du jeu.     
Une ROM donatrice peut être définie en utilisant **TW**i**L**ight Menu++.
- **Linkers en mode DS :** Les quelques titres exclusifs DSi/DSiWare pris en charge nécessiteront une ROM exclusif DSi définie en tant que ROM donatrice
- **DSiWarehax :** Comme les jeux optimisés DSi et (la plupart) des jeux exclusifs DSi/DSiWare contiennent des paramètres MBK différents les uns des autres, les jeux optimisés DSi ne pourront pas démarrer en mode DSi sans une ROM donatrice. En définissant un titre exclusif DSi/DSiWare en tant que ROM donatrice, les jeux optimisés DSi pourront fonctionner avec les paramètres MBK définis par le titre DSiWare sur lequel l'exploit est utilisé
- **CycloDS iEvolution :** Même cas avec DSiWarehax, mais les titres exclusifs DSi/DSiWare nécessiteront un jeu optimisé DSi défini en tant que ROM donatrice, au lieu de l'inverse

#### Quelle est la meilleure ROM donatrice ?
Il n'y a pas de *meilleure* à utiliser.     
Si vous êtes un utilisateur de DSiWarehax, il est préférable de définir une ROM SDK5 contenant une sous-version supérieure à 0. Cependant, si vous n'avez pas de ROM DSiWare existante, vous pouvez dumper une ROM du *studio son Nintendo DSi* (SDK5.0) en utilisant GodMode9**i**, et défininissez le studio son DSi en tant que ROM donatrice.     
Si vous possédez une console 3DS cependant, il est préférable de dumper la ROM Paramètres Wi-Fi DS (SDK5.5) en utilisant GodMode9, et à la place, de définir Paramètres Wi-Fi DS en tant que ROM donatrice, car en faisant cela, le mode veille est activé dans DSiWare sans attendre 9 secondes.

#### Pourquoi ne puis-je pas définir une ROM donatrice ?
Si un titre nécessite une ROM donatrice, et que la ROM que TWLMenu++ a déclaré trouver ne montre pas l'option pour la définir comme telle (à condition que vous ayez fait défiler la page), trouvez une autre ROM à définir comme donatrice.

#### Qu'est-ce qu'un nightly et où puis-je l'obtenir ?
Un build nightly est compilé pour le dernier commit. Les builds nightly peuvent être instables, mais les dernières corrections de bogues ont été ajoutées. Vous pouvez obtenir des builds nightly pour nds-bootstrap [ici](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Pourquoi mes codes de triche ne fonctionnent pas ?
- Certains codes de triche peuvent comporter des boutons d'activation ou d'autres conditions à remplir. Consultez la description du code de triche pour plus d'informations
  - Dans **TW**i**L**ight Menu++, vous pouvez appuyer sur Y pour afficher les informations d'un code de triche spécifique, lorsqu'elles sont disponibles
- La plupart des codes de triche ont été développés pour être utilisés en mode DS et peuvent ne pas fonctionner correctement en mode DSi. Si le jeu est optimisé DSi, essayez de le configurer pour qu'il fonctionne en mode DS
- La façon dont les codes de triche de type E sont implémentés dans nds-bootstrap est actuellement défectueuse, ce qui signifie qu'ils peuvent ou non fonctionner. Votre code de triche utilise probablement ce type, et il est impossible de savoir quand ce problème sera résolu

Pour plus d'infos sur les codes de triche, consultez la section [Codes de triche Action Replay de la page ROMs commerciales](https://wiki.ds-homebrew.com/fr-FR/ds-index/retail-roms#codes-de-triche-action-replay).

#### Comment faire des captures d'écran ?
Vous pouvez prendre des captures de l'écran principal à partir du menu en jeu. Par défaut, le menu en jeu s'ouvre en appuyant sur <kbd class="l">L</kbd> <kbd>Down</kbd> + <kbd>SELECT</kbd>, puis sélectionnez `Capture d'écran…`, modifiez la banque VRAM si nécessaire, et appuyez sur <kbd class="face">A</kbd> pour enregistrer la capture d'écran.

Pour visualiser vos captures d'écran sur votre PC, vous devrez extraire `sd:/_nds/nds-bootstrap/screenshots.tar`, à l'intérieur se trouveront toutes vos captures d'écran au format BMP. Il y aura également des fichiers BMP vides supplémentaires pour remplir le fichier TAR jusqu'à 50, ceux-ci peuvent simplement être ignorés ou supprimés.

nds-bootstrap ne peut contenir que 50 captures d'écran dans le fichier `screenshots.tar`, donc une fois que vous êtes proche, vous devriez les extraire et supprimer le TAR, nds-bootstrap générera alors un nouveau TAR la prochaine fois que vous chargerez un jeu.

#### Qu'est-ce que l'écran principal et pourquoi lui seul peut avoir des captures d'écran ?
L'écran « principal » est celui qui est affiché à l'aide du moteur principal, qui peut être n'importe quel écran physique. En général, c'est l'écran où se déroule le jeu principal et si un écran est en 3D, c'est toujours l'écran principal. Il sera toujours en haut de l'écran lorsque vous serez dans le menu en jeu.

La raison pour laquelle les captures d'écran ne peuvent être réalisées qu'à partir de l'écran principal est une limitation matérielle de la Nintendo DS, qui ne dispose pas d'un framebuffer mais d'une fonction de capture d'écran qui permet de capturer la sortie du moteur principal. Cette fonction est le plus souvent utilisée par les jeux pour rendre la 3D sur les deux écrans, mais elle peut aussi être utilisée pour prendre des captures d'écran.

#### Qu’est-ce que la « banque VRAM » que l’on me demande de sélectionner lors d’une capture d’écran ?
Lors d'une capture d'écran avec nds-bootstrap, il est nécessaire d'utiliser la fonction de capture d'écran de la DS pour capturer une image du moteur principal, mais cette capture d'écran ne peut écrire que dans la VRAM et nécessite l'une des quatre premières banques. nds-bootstrap essaiera de sélectionner une banque qui n'est pas utilisée pour le moteur principal, donc en général vous pouvez simplement l'ignorer. Cependant, dans certains cas, les quatre banques VRAM possibles seront utilisées pour le moteur principal, il n'est donc pas possible de prendre une capture d'écran parfaite et vous devrez sélectionner la banque qui vous semble la meilleure.

#### Puis-je jouer à des jeux en ligne en utilisant nds-bootstrap ?
Jouer à des jeux en ligne avec nds-bootstrap fonctionnera exactement comme avec de vraies cartes de jeu. Consultez la page [Wi-Fi](../ds-index/wifi) pour obtenir des informations sur la connexion à un service en ligne alternatif.
- Si vous jouez à un jeu optimisé DSi en mode DS, vous êtes limité aux connexions réseau non sécurisées ou WEP

#### Le fait de configurer un jeu pour qu'il utilise une vitesse de CPU de 133 MHz (TWL) peut-il endommager ma console ?
Non. Bien que tous les jeux ne fonctionnent pas correctement avec ce paramètre, la DSi et la 3DS ont été conçues pour pouvoir atteindre cette vitesse de processeur.
- Si vous rencontrez un problème avec un jeu lorsqu'il est exécuté à la vitesse du CPU de 133 MHz (TWL), créez un problème sur le [dépôt GitHub de **TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/issues) en détaillant les effets afin qu'il puisse être mis sur liste noire pour ne pas être lancé à cette vitesse de CPU

#### Puis-je accélérer les jeux en utilisant nds-bootstrap ?
Bien que la vitesse du processeur TWL puisse réduire les décalages, nds-bootstrap ne peut pas exécuter les jeux à des vitesses plus élevées que prévu.

#### Puis-je remapper les entrées des boutons en utilisant nds-bootstrap ?
Non. Étant donné que nds-bootstrap exécute les jeux en mode natif, il ne peut pas modifier la fonction de la plupart des boutons. La seule façon de le faire serait de modifier le jeu lui-même, ou d'utiliser des codes de triche.

#### Comment puis-je jouer à des ROMs Pokémon randomisées avec nds-bootstrap ?
Pokémon Or HeartGold/Argent SoulSilver, Noir/Blanc, et Noir 2/Blanc 2 ont des mesures anti-piratage qui doivent être manuellement patchées *avant* de randomiser la ROM. Vous pouvez le faire avec [DS-Scene ROM Tool](https://gbatemp.net/download/35735/).
- Les ROMs aléatoires ne peuvent pas être patchées à la volée de l'anti-piratage comme le sont les versions originales de ces jeux, car l'aléatoire d'une ROM a beaucoup trop de sorties uniques possibles pour être raisonnablement inclus avec **TW**i**L**ight Menu++

#### Que sont les binaires DSi ? Comment puis-je les obtenir ?
Les binaires DSi sont les parties du code d'un jeu à utiliser sur les systèmes DSi (ainsi que 3DS) pour utiliser les fonctionnalités de la DSi, telles que les appareils photo et les capacités Wi-Fi améliorées. Les anciennes méthodes de dumping n'ont peut-être pas permis de les dumper correctement.

- Les ROMs sans les binaires DSi peuvent toujours être jouées sur n'importe quelle console grâce au mode DS, dans lequel le jeu fonctionnera comme s'il était joué sur une Nintendo DS Tank/Lite

Pour obtenir une ROM contenant les binaires DSi, [re-dumpez votre carte de jeu](https://wiki.ds-homebrew.com/fr-FR/twilightmenu/faq?faq=comment-obtenir-des-jeux-).
