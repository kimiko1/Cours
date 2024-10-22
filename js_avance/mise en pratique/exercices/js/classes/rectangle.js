import { Shape } from "./Shape.js";

export class Rectangle extends Shape{
    // Définition des propriétés
    #width;
    #height;

    // Constructeur
    constructor(x, y, color, width, height) {
        // On appelle le constructeur parent pour initialiser le prénom, nom et âge
        super(x, y, color);

        // Initialisation des propriétés spécifiques à la classe
        this.#width = width;
        this.#height = height;
    }

        // Création de getter/setter pour accéder/modifier les propriétés privées
    get width() {
            return this.#width;
        }
    
    set width(width) {
            this.#width = width;
        }
    
    get height() {
            return this.#height;
        }
    
    set height(height) {
            this.#height = height;
        }
}