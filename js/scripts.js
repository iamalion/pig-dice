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

//Business logic for Player
function Player(name){
    this.name = name;
    this.points = 0;
};

//Business logic for DiceRoll

function DiceRoll() {
    this.numbers = [1, 2, 3, 4, 5, 6];
};

DiceRoll.prototype.roll = function () {
    return this.numbers[Math.floor(Math.random() * this.numbers.length)];
};

// const diceRoll = new DiceRoll();
// const result = diceRoll.roll();
// console.log(result);

//Business logic for PointTally

function PointTally () {
    this.points = 0
}

PointTally.prototype.tallyPoints = function () {
    let diceRoll = new DiceRoll();
    let point = diceRoll.roll();
    this.points += point;
    return this.points;
};

const pointTally = new PointTally()
const result = pointTally.tallyPoints();
console.log(result);









//UI Logic
// function CreatePlayer() {
//    let player = new Player(document.getElementById('playerName').value);
//    document.getElementById('playerName').value = " "; 
// }