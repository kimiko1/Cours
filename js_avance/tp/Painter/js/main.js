const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let color = 'black';
let lineWidth = 5;
let shape = 'freehand'; // Par défaut, on dessine à la main
let startX, startY;
let savedCanvas; // Pour sauvegarder l'état du canvas

// Événements pour souris
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

// Événements pour tactile (mobile)
canvas.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    startDrawing(touch);
}, false);

canvas.addEventListener('touchend', stopDrawing, false);
canvas.addEventListener('touchmove', function(event) {
    const touch = event.touches[0];
    draw(touch);
}, false);

// Change la forme lorsqu'on choisit dans le sélecteur
document.getElementById('shapeSelector').addEventListener('change', function() {
    shape = this.value;
});

// Change la couleur lorsqu'on clique sur un cercle de couleur
document.querySelectorAll('.color').forEach(colorDiv => {
    colorDiv.addEventListener('click', function() {
        color = this.getAttribute('data-color');
    });
});

// Change l'épaisseur du trait avec le slider
document.getElementById('sizeSlider').addEventListener('input', function() {
    lineWidth = this.value;
});

// Efface le canvas
document.getElementById('clearBtn').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Fonction qui commence le dessin
function startDrawing(event) {
    drawing = true;
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;
    startX = x - canvas.offsetLeft;
    startY = y - canvas.offsetTop;

    // Sauvegarde l'état actuel du canvas avant de commencer à dessiner
    savedCanvas = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); // Commence un nouveau chemin
    ctx.moveTo(startX, startY); // Départ du dessin
}

// Fonction pour dessiner dans le canvas
function draw(event) {
    if (!drawing) return;

    // Restaure l'état sauvegardé du canvas pour ne pas perdre les anciens dessins
    ctx.putImageData(savedCanvas, 0, 0);

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;
    const currentX = x - canvas.offsetLeft;
    const currentY = y - canvas.offsetTop;

    if (shape === 'freehand') {
        // Pour le dessin à main levée, trace simplement une ligne jusqu'à la position actuelle
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    } else {
        ctx.beginPath(); // Commence un nouveau chemin pour les autres formes

        switch (shape) {
            case 'line':
                ctx.moveTo(startX, startY); // Départ de la ligne
                ctx.lineTo(currentX, currentY); // Ligne jusqu'à la position actuelle
                ctx.stroke(); // Dessine la ligne
                break;
            case 'rectangle':
                ctx.strokeRect(startX, startY, currentX - startX, currentY - startY);
                break;
            case 'circle':
                const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
                ctx.beginPath();
                ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
                ctx.stroke();
                break;
        }
    }
}

// Fonction qui arrête le dessin
function stopDrawing() {
    drawing = false;
}

// Sauvegarde le canvas sous forme d'image
document.getElementById('saveBtn').addEventListener('click', function() {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'canvas_dessin.png';
    link.click();
});

// Change le background du canvas avec une image
document.getElementById('backgroundImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        };
        reader.readAsDataURL(file);
    }
});

// Change le background du canvas avec une couleur
document.getElementById('backgroundColor').addEventListener('input', function() {
    const color = this.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});
