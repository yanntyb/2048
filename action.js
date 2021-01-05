import {Grille} from "./Grille.js";

let grille = new Grille(5);

grille.initTab();
grille.newSlot();
grille.newSlot();
console.log(grille.tabUsed)
grille.move();
