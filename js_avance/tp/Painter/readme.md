# TP2 : Canvas

## Rendu

Ce projet sera à réaliser en solo. Le rendu peut se faire soit par un dépôt github, soit en le déposant sur l'ide de la 3wa, soit par une archive.

## Objectifs

Réaliser une petite application qui permet de dessiner dans un élément canvas.

## Instructions

### Mise en place du projet

* Créer un fichier *index.html* qui contiendra un élément canvas d'une certaine taille (dans la correction ce sera 800x600)
* Créer un fichier *main.css* dans un sous-dossier *css* et afficher une bordure autour du canvas
* Créer dans le html des éléments arrondis avec différentes couleurs de fond
* Créer un formulaire avec un slider qui permettra de changer la taille du tracé et un bouton "Effacer" qui permettra d'effacer le canvas

### Dessin dans le canvas

Lorsque l'utilisateur déplace sa souris dans le canvas, on commence à effectuer un tracé. Le tracé doit se faire uniquement si l'on maintient le clic gauche de la souris (on arrête de dessiner lorsque l'on lâche le bouton gauche de la souris).

### Changement de la couleur et de l'épaisseur du trait

Lorsque l'on clique sur les cercles de couleur dans le html, cela va changer la couleur du prochain tracé. Lorsque l'on changé la valeur de l'input de type slider, cela change l'épaisseur du prochain tracé.

### Suppression de l'image du canvas

Lorsque l'on clique sur le bouton "Effacer" on supprime tout ce qu'il y a dans le canvas.

### [BONUS] Sauvegarde de l'image

Créer un bouton pour télécharger l'image ou la sauvegarder pour pouvoir continuer le dessin plus tard.

## Liens utiles

* [Canvas](https://developer.mozilla.org/fr/docs/Web/API/Canvas_API)
* [Évenement mousemove](https://developer.mozilla.org/fr/docs/Web/API/Element/mousemove_event)