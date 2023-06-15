function PlayerList() {
    this.players = {};
    this.currentId = 0;
};

PlayerList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

PlayerList.prototype.addPlayer = function (player) {
    player.id = this.assignId();
    this.players[player.id] = player;
};

PlayerList.prototype.findPlayer = function (id) {
    if (this.players[id] !== undefined) {
        return this.players[id];
    }
    return false;
};

PlayerList.prototype.startGame(); {
    this.players[0].currentTurn = true;
    this.players[1].currentTurn = false;
};

PlayerList.prototype.holdRoll = function(){
    if ((this.players[0].currentTurn = true) && (this.players[1].currentTurn = false)) {
        this.players[0].currentTurn = false;
        this.players[1].currentTurn = true;
    } else if ((this.players[0].currentTurn = false) && (this.players[1].currentTurn = true)) {
        this.players[0].currentTurn = true;
        this.players[1].currentTurn = false;
    }
};

//Business logic for Player
function Player(name){
    this.name = name;
    this.points = [];
    // this.currentTurn = true;
};

Player.prototype.diceRoll = function (prevScore = 0){
    const numbers = [1,2,3,4,5,6];
    let number = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(number);
    let talliedNumbers = this.points;
    talliedNumbers.push(number);
    console.log(talliedNumbers);
    let newTotal = 0;
    for (let i = 0; i < talliedNumbers.length; i++){
        newTotal += talliedNumbers[i];
    }
    return newTotal;
};


//UI Logic
function handleFormSubmission(event){
event.preventDefault();
}

window.addEventListener("load", function(){
    document.querySelector("form#name-form").addEventListener("submit", handleFormSubmission);
    document.querySelector("button#roll-button").addEventListener("click", diceRoll);
    // document.querySelector("span#roll-result").innerHTML = newTotal;
})









//UI Logic
// function CreatePlayer() {
//    let player = new Player(document.getElementById('playerName').value);
//    document.getElementById('playerName').value = " "; 
// }