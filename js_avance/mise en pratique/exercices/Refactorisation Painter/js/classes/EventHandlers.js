export default class EventHandler {
    constructor(drawing, canvas, context) {
        this.drawing = drawing;
        this.canvas = canvas;
        this.context = context;

        // Appeler les méthodes pour attacher les événements
        this.setupCanvasEvents();
        this.setupUIEvents();
    }

    // Méthode pour gérer les événements du canvas
    setupCanvasEvents() {
        this.canvas.addEventListener('mousemove', (e) => {
            const mouseLocation = { x: e.offsetX, y: e.offsetY };

            if (this.drawing.isDrawing) {
                this.drawing.drawLine(this.context, this.drawing.lastLocation, mouseLocation);
            }

            this.drawing.lastLocation = mouseLocation;
        });

        this.canvas.addEventListener('mousedown', () => {
            this.drawing.isDrawing = true;
        });

        this.canvas.addEventListener('mouseup', () => {
            this.drawing.isDrawing = false;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.drawing.isDrawing = false;
        });
    }

    // Méthode pour gérer les événements de l'interface utilisateur
    setupUIEvents() {
        // Mise à jour de la couleur en fonction de la pastille sélectionnée
        this.drawing.colors.forEach((color) => {
            color.addEventListener('click', () => {
                this.drawing.color = getComputedStyle(color).getPropertyValue('background-color');
            });
        });

        // Mise à jour de l'épaisseur de ligne
        this.drawing.lineWidthInput.addEventListener('change', () => {
            this.drawing.lineWidth = this.drawing.lineWidthInput.value;
        });

        // Effacer le canvas
        this.drawing.eraseCanvasButton.addEventListener('click', () => {
            this.drawing.erase(this.context, this.canvas);
        });
    }
}
