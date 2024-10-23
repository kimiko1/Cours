import Drawing from './classes/Drawing.js';
import EventHandler from './classes/EventHandlers.js';

// On récupère le canvas et son contexte
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// On initialise un nouvel objet Drawing
const drawing = new Drawing();

// Initialiser la gestion des événements
const eventHandler = new EventHandler(drawing, canvas, context);
