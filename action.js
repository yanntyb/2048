import {Grille} from "./Grille.js";

let grille = new Grille(5);

grille.initTab();
grille.newSlot(true,[1,1]);
grille.newSlot(true,[2,2]);
grille.move();
