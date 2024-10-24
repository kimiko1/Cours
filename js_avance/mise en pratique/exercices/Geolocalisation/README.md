# Mise en pratique promesses

## Objectifs

Récupérer une adresse postale en fonction de coordonnées GPS (qui seront récupérées grâce à la géolocalisation). Pour ce faire on utilisera l'api [adresse](https://adresse.data.gouv.fr/api-doc/adresse).

Le but est de manipuler les promesses et de gérer les erreurs.

## Instructions

### Page web

Créer une page web avec un bouton "Me géolocaliser", un champ texte qui contiendra l'adresse (qui est vide au départ tant que l'adresse n'a pas été récupérée) et un champ text qui contiendra un message d'erreur si une erreur survient.

```
<button id="geolocation-btn">Me géolocaliser</button>

<p id="error-text" hidden></p>

<p id="address-text"></p>
```

### Création des fonctions

* Dans un fichier *geolocation.js*, créer la fonction *getCoords* qui renvoie les coordonnées GPS de l'utilisateur
* Dans un fichier *addressApi.js*, créer la fonction *getAddressFromCoords* qui renvoie l'adresse correspondant à une latitude et une longitude
* Dans un fichier *utils.js*, créer la fonction *waitFor* qui exécute un traitement au bout de x secondes (x étant fourni en paramètre de cette fonction)

### Gestion des erreurs

Il faudra gérer les différents types d'erreurs : les erreurs lorsqu'il y a un problème avec la géolocalisation et lorsque l'adresse n'est pas trouvée.

### Aperçu du code final

Dans le fichier *main.js*, le code doit ressembler à cela :

```javascript
geolocationBtn.addEventListener('click', () => {
    getCoords().then(coords => getAddressFromCoords(coords)).then(address => {
        addressText.textContent = address; 
    }).catch(error => {
        // Si une erreur survient on affiche le champ d'erreur
        errorText.removeAttribute('hidden');
        errorText.textContent = error.message;
        
        // Au bout de 5 secondes on cache de nouveau le message d'erreur
        waitFor(5).then(() => {
            errorText.setAttribute('hidden', true); 
        });
    });
});
```

### Divers

* Pour créer la fonction *waitFor* vous allez avoir besoin d'utiliser la fonction *setTimeout*
* L'endpoint à utiliser est */reverse* dans l'api
* L'adresse se trouve dans la propriété *features* dans la réponse de l'api