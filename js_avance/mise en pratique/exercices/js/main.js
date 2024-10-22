import { Rectangle } from "./classes/rectangle.js";
import { Circle } from "./classes/circle.js";

// // On crée une instance de Rectangle
// const rectangle = new Rectangle(100, 100, "red", 50, 150);
// console.log(rectangle);

// // On crée une instance de Rectangle
// const circle = new Circle(100, 100, "red", 50);
// console.log(circle);

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const shapes = [
    new Rectangle(50, 50, "blue", 100, 200),
    new Circle(300, 200, "green", 75),
    new Rectangle(400, 100, "purple", 150, 100),
    new Circle(500, 400, "red", 75),
];

// Boucle à travers toutes les formes et dessine-les
for (let shape of shapes) {
    shape.draw(context);
}