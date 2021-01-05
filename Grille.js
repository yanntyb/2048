function Grille (length){
    this.length = length;
    this.tabUsed = [];
}

let tabSlot;
let tabRow;
let slot = [];
let nbSlot = -1;

Grille.prototype.initTab = function (){
    let grille = document.createElement("div");
    grille.id = "grille";
    tabRow = []
    for(let row = 0; row < this.length;row++){
        let divRow = document.createElement("div");
        divRow.className = "row";
        divRow.style.height = (100/this.length) + "%";
        divRow.style.width = "100%";
        tabSlot = [];
        for(let slot = 0; slot <this.length; slot++){
            let divSlot = document.createElement("div");
            divSlot.className = "slot";
            divSlot.style.height = "100%";
            divSlot.style.width = (100/this.length) + "%";
            divRow.append(divSlot);
            tabSlot.push(divSlot);
        }
        grille.append(divRow);
        tabRow.push([tabSlot]);
    }
    document.body.append(grille);
}

Grille.prototype.initSlot = function (){
    let randomSlot = this.randomNumber();
    let randomRow = this.randomNumber();
    nbSlot++;
    while(true){
        let selectedSlot = tabRow[randomRow][0][randomSlot]
        if(slot.length > nbSlot){
            break;
        }
        else{
            if(selectedSlot.innerHTML === ""){
                selectedSlot.innerHTML = 2;
                console.log(selectedSlot);
                slot.push(selectedSlot);
                this.colorUsedSlot(selectedSlot)

            }
            else{
                randomSlot = this.randomNumber();
                randomRow = this.randomNumber();
            }
        }
    }
}



Grille.prototype.randomNumber = function (){
    let random = Math.trunc(Math.random() * (this.length-1));
    return random
}

Grille.prototype.newSlot = function (){
    let _this = this
    document.addEventListener("click",_this.initSlot());
}

Grille.prototype.colorUsedSlot = function (slot){
    slot.style.backgroundColor = "burlywood";
}

export {Grille}