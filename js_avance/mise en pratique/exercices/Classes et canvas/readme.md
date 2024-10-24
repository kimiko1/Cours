# Mise en pratique

## Instructions partie 1

### Mise en place des fichiers

* Créer un fichier *index.html*
* Créer un fichier *main.js*
* Créer un sous-dossier *classes* dans lequel seront créées les classes

### Création des classes

* Créer une classe *Shape* avec les propriétés suivantes : x, y, color
* Créer une classe *Rectangle* qui hérite de Shape et qui a les propriétés suivantes : width, height
* Créer une classe *Circle* qui hérite de Shape et qui a les propriétés suivantes : radius

### Instantiation des classes

* Dans le fichier *main.js*, créer une instance de *Rectangle* et une instance de *Circle*
```javascript
const rectangle = new Rectangle(100, 100, 50, 150, "red");
console.log(rectangle);
```

### Divers

* Le script doit être chargé en type module (attention il faut lancer le projet avec un serveur pour ne pas avoir d'erreurs)
* Il faut bien créer dans chaque classe un constructeur et des getter/setter

## Instructions partie 2

### Méthode draw

* Créer une méthode *draw* dans les classes *Rectangle* et *Circle*
* Cette méthode prend en paramètre le contexte du canvas et dessine la forme en fonction des propriétés de cette dernière

### Liste de formes

* Dans le fichier *main.js*, créer un tableau *shapes* qui contiendra plusieurs instances de *Rectangle* et *Circle*
* Dessiner dans le canvas toutes les formes stockées dans ce tableau

```javascript
const shapes = [
    new Rectangle(...),
    new Circle(...),
    new Rectangle(...),
    [...]
];

/* TODO : Dessiner toutes les formes du tableau shapes */