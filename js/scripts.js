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

//Business logic for Player
function Player(name){
    this.name = name;
    this.points = 0;
}










//UI Logic
// function CreatePlayer() {
//    let player = new Player(document.getElementById('playerName').value);
//    document.getElementById('playerName').value = " "; 
// }