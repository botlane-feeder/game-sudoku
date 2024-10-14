# Sudoku

Ce projet a pour objectif de faire un interface graphique permettant de jouer à un Sudoku.
Ce projet contient aussi une documentation pour appréhender SvelteJS.

## Le jeu - Sudoku

Le sudoku est le nom japonais d'un jeu américain inspiré du carré latin, où le joueur doit résoudre une grille.
Cette grille est composée de 9 carrés et dans chacun de ces carrés, on retrouve une grille de 9 cases remplies par des chiffres entre 1 et 9.
Le but du jeu est de remplir les grilles de chaque carré avec le bon chiffre sans enfreindre les contraintes.
Les contraintes sont, **il ne doit jamais y avoir de doublons de chiffres dans** :
- une même grille de 9 cases
- pour chaque ligne
- pour chaque colonne

L'application génère une grille de sudoku à remplir et met en rouge lorsqu'il y a incohérence

### Fonctionnalités

- Une interface graphique qui construit la grille complète du sudoku soit : 
  - un carré de 9 cases accueillant un chiffre de 1 à 9
  - une grille/sudoku de 9 carrés
- un contrôle en carré, colonne et ligne
- un contrôle total du sudoku pour valider la grille
- un affichage des chiffres en conflits
  - mise en place d'options
    - facile : affichage automatique validation ou erreur
    - moyen : demande de vérification
    - difficile : pas de vérification
- figer les cases initiales (à la configuration)
  - cases figées grises
  - cases remplies en bleus


- Pouvoir revenir plusieurs coups en arrière
- Mettre des notes dans les cases


### TODO

- Mettre un accès par niveau
  - facile et guidé
  - moyen avec vérification
  - dur sans guidage ni vérification


## Apprendre SvelteJS

Pour le tout début de Svelet, il est recommandé de suivre une formation Svelte sur le site officiel, ou bien sur le dépot Tryingtech-Svelte de botlane-feeder.
Par ce projet, on considère la base de Svelte acquise et on s'appuiera sur la base pour construire le projet Sudoku.

### Conception de l'interface avec SvelteJS

### Les composants Sveltes

### La logique entre les composants

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).
