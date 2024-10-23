export default class Drawing {
    constructor() {
        this.color = 'black';
        this.lineWidth = 1;
        this.isDrawing = false;
        this.lastLocation = { x: 0, y: 0 };

        // On récupère les pastilles de couleurs, l'input pour l'épaisseur et le bouton d'effacement
        this.colors = document.querySelectorAll('#colors .color');
        this.lineWidthInput = document.querySelector('#line-width');
        this.eraseCanvasButton = document.querySelector('#erase-canvas');
    }

    // Méthode pour dessiner une ligne
    drawLine(context, from, to) {
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.lineCap = 'round';
        context.stroke();
    }

    // Méthode pour effacer le canvas
    erase(context, canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}
