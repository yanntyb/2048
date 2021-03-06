function Grille (length){
    this.length = length;
    this.tabUsed = [];
}

let tabSlot;
let tabRow;
let slotTab = [];
let nbSlot = 0

Grille.prototype.initTab = function (){
    this.grille = document.createElement("div");
    this.grille.id = "grille";
    tabRow = [];
    for(let row = 0; row < this.length;row++){
        let divRow = document.createElement("div");
        divRow.className = "row";
        divRow.style.height = (100/this.length) + "%";
        divRow.style.width = "100%";
        tabSlot = [];
        for(let slot = 0; slot <this.length; slot++){
            let divSlot = document.createElement("div");
            divSlot.className = "slot " + slot + " " +  row;
            divSlot.style.height = "100%";
            divSlot.style.width = (100/this.length) + "%";
            divRow.append(divSlot);
            tabSlot.push(divSlot);
        }
        this.grille.append(divRow);
        tabRow.push([tabSlot]);
    }
    document.body.append(this.grille);
}

Grille.prototype.initSlot = function (place, pos){
    if(place){
        let selectedSlot = tabRow[pos[0]][0][pos[1]]
        selectedSlot.innerHTML = 2;
        slotTab.push(selectedSlot);
        this.colorUsedSlot(selectedSlot);
        this.tabUsed.push(selectedSlot);
    }
    else{
        let randomSlot = this.randomNumber();
        let randomRow = this.randomNumber();
        while(true){
            let selectedSlot = tabRow[randomRow][0][randomSlot]
            if(slotTab.length > nbSlot -1){
                break;
            }
            else{
                if(selectedSlot.innerHTML === ""){
                    selectedSlot.innerHTML = 2;
                    slotTab.push(selectedSlot);
                    this.colorUsedSlot(selectedSlot);
                    this.tabUsed.push(selectedSlot);
                }
                else{
                    randomSlot = this.randomNumber();
                    randomRow = this.randomNumber();
                }
            }
        }
    }
}

Grille.prototype.moveLeft = function (){
    for(let slot of Array.from(this.tabUsed)){
        console.log("slot",slot)
        let pos = slot.className.split(" ")[1];
        let row = slot.className.split(" ")[2];
        let index = this.tabUsed.indexOf(slot);
        while(pos > 0){
            slot.innerHTML = "";
            resetColor(slot);
            pos--;
            slot.className = "slot " + pos + " " + row;
        }
        nbSlot--;
        this.tabUsed.splice(index,1);
        this.newSlot(true,[row,pos]);
    }
}

Grille.prototype.moveRight = function (){
    for(let slot of Array.from(this.tabUsed)){
        console.log("slot",slot)
        let pos = slot.className.split(" ")[1];
        let row = slot.className.split(" ")[2];
        let index = this.tabUsed.indexOf(slot);
        while(pos < this.length - 1){
            slot.innerHTML = "";
            resetColor(slot);
            pos++;
            slot.className = "slot " + pos + " " + row;
        }
        nbSlot--;
        this.tabUsed.splice(index,1);
        this.newSlot(true,[row,pos]);
    }
}

Grille.prototype.moveUp = function (){
    for(let slot of Array.from(this.tabUsed)){
        console.log("slot",slot)
        let pos = slot.className.split(" ")[1];
        let row = slot.className.split(" ")[2];
        let index = this.tabUsed.indexOf(slot);
        while(row > 0){
            slot.innerHTML = "";
            resetColor(slot);
            row--;
            slot.className = "slot " + pos + " " + row;
        }
        nbSlot--;
        this.tabUsed.splice(index,1);
        this.newSlot(true,[row,pos]);
    }
}

Grille.prototype.moveDown = function (){
    for(let slot of Array.from(this.tabUsed)){
        console.log("slot",slot)
        let pos = slot.className.split(" ")[1];
        let row = slot.className.split(" ")[2];
        let index = this.tabUsed.indexOf(slot);
        while(row < this.length - 1){
            slot.innerHTML = "";
            resetColor(slot);
            row++;
            slot.className = "slot " + pos + " " + row;
        }
        nbSlot--;
        this.tabUsed.splice(index,1);
        this.newSlot(true,[row,pos]);
    }
}

Grille.prototype.randomNumber = function (){
    return Math.trunc(Math.random() * (this.length))
}

Grille.prototype.newSlot = function (place, pos){
    nbSlot++;
    this.initSlot(place, pos);
}

Grille.prototype.move = function (){
    let _this = this
    window.addEventListener("keydown",function(e){
        if(e.key === "ArrowRight"){
            _this.moveRight();
        }
        else if(e.key === "ArrowLeft"){
            _this.moveLeft();
            //_this.newSlot(false);
        }
        else if(e.key === "ArrowUp"){
            _this.moveUp()
        }
        else if(e.key === "ArrowDown"){
            _this.moveDown();
        }
    })
}

Grille.prototype.colorUsedSlot = function (slot){
    slot.style.backgroundColor = "burlywood";
}

function resetColor(div){
    div.style.backgroundColor = "white";
}

export {Grille}