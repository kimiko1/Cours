export class Shape {

    // Définition des propriétés
    #x;
    #y;
    #color;

    // Constructeur
    constructor(x, y, color) {
        this.#x = x;
        this.#y = y;
        this.#color = color;
    }

    // Création de getter/setter pour accéder/modifier les propriétés privées
    get x() {
        return this.#x;
    }
    
    set x(x) {
        this.#x = x;
    }
    
    get y() {
        return this.#y;
    }
    
    set y(y) {
        this.#y = y;
    }
    
    get color() {
        return this.#color;
    }
    
    set color(color) {
        this.#color = color;
    }
}