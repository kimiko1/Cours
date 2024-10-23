// On récupère le canvas et son contexte
const canvas = document.querySelector('#canvas');
const context = canvas.getContext("2d");

// La dernière position de la souris
let lastLocation = {x: 0, y: 0};

// Couleur actuelle
let currentColor = 'black';

// Épaisseur actuelle
let currentLineWidth = 1;

// Est-ce que l'on est en train de dessiner ?
// => Est-ce que l'on appuie sur la souris ?
let isDrawing = false;

// On récupère les pastilles de couleurs
const colors = document.querySelectorAll('#colors .color');

// On récupère l'input range qui définit l'épaisseur
const lineWidthInput = document.querySelector('#line-width');

// On récupère le bouton pour effacer
const eraseCanvasButton = document.querySelector('#erase-canvas');

// Comment afficher la couleur (la valeur textuelle) de tous ces éléments ?
for (let color of colors) {
    // Récupération de la propriété directement dans le css
    // console.log(getComputedStyle(color).getPropertyValue('background-color'));
    
    // Récupération de la couleur en passant par la propriété dataset
    // console.log(color.dataset.color);
    
    // Lorsque l'on clique sur la pastille, on récupère la couleur
    color.addEventListener('click', (e) => {
        // On met à jour la couleur actuelle
        currentColor = getComputedStyle(color).getPropertyValue('background-color');
    });
}

// Lorsque l'on change la valeur de notre input
lineWidthInput.addEventListener('change', (e) => {
    // On met à jour l'épaisseur actuelle
    currentLineWidth = lineWidthInput.value;
});

// Lorsque l'on clique sur le bouton on efface tout le canvas
eraseCanvasButton.addEventListener('click', (e) => {
    context.clearRect(0, 0, canvas.width, canvas.height); 
});

// Lorsque l'on se déplace dans le canvas on dessine des lignes
canvas.addEventListener('mousemove', (e) => {
    // On récupère la position de la souris
    const mouseLocation = {x: e.offsetX, y: e.offsetY};
    
    // Si on a le droit de dessiner
    if (isDrawing) {
        // On dessine à partir de la dernière position de la souris jusqu'à la nouvelle position
        drawLine(context, lastLocation, mouseLocation, currentColor, currentLineWidth);
    }
    
    // On stocke la dernière position de la souris
    lastLocation = mouseLocation;
});

// On met en place les événements qui permettent de savoir si l'on peut dessiner ou non
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true; 
});

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false; 
});

canvas.addEventListener('mouseleave', (e) => {
    isDrawing = false;
});

// Fonction de tracé
function drawLine(context, from, to, color, lineWidth) {
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.lineCap = 'round';
    context.stroke();
}