import { Shape } from "./Shape.js";

const canvas = document.querySelector('#canvas');
const context = canvas.getContext("2d");

export class Circle extends Shape {
    // Définition des propriétés
    #radius;

    // Constructeur
    constructor(x, y, color, radius) {
        // On appelle le constructeur parent pour initialiser le prénom, nom et âge
        super(x, y, color);

        // Initialisation des propriétés spécifiques à la classe
        this.#radius = radius;
    }

    // Création de getter/setter pour accéder/modifier les propriétés privées
    get radius() {
        return this.#radius;
    }

    set radius(radius) {
        this.#radius = radius;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }
    
}
