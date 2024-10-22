import { Rectangle } from "./classes/Rectangle.js";
import { Circle } from "./classes/Circle.js";

// On crée une instance de Rectangle
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const shapes = [
    new Rectangle(50, 50, "blue", 100, 200),
    new Circle(300, 200, "green", 75),
    new Rectangle(400, 100, "purple", 150, 100),
    new Rectangle(200, 300, "purple", 150, 100),
    new Rectangle(600, 400, "purple", 150, 100),
];

// Boucle à travers toutes les formes et dessine-les
for (let shape of shapes) {
    shape.draw(context);
}