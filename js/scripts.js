function PlayerList() {
    this.players = {};
    this.currentId = 0;
}

PlayerList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

PlayerList.prototype.addPlayer = function (player) {
    player.id = this.assignId();
    this.players[player.id] = player;
}

PlayerList.prototype.findPlayer = function (id) {
    if (this.players[id] !== undefined) {
        return this.players[id];
    }
    return false;
}

//Business logic for Player
function Player(name){
    this.name = name;
    this.points = 0;
}

let player1 = new Player ("Casey");
let player2 = new Player("Lindsay");
let playerList = new PlayerList();
playerList.addPlayer(player1);
playerList.addPlayer(player2);

console.log(playerList.players);










//UI Logic
// function CreatePlayer() {
//    let player = new Player(document.getElementById('playerName').value);
//    document.getElementById('playerName').value = " "; 
// }