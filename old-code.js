//Business logic for PointTally

// function PointTally () {
//     this.points = 0
// }


// PointTally.prototype.tallyPoints = function (rolls) {
//     let diceRoll = new DiceRoll();
//     for (let i = 0; i < rolls; i++) {
//       let point = diceRoll.roll();
//       this.points += point;
//     }
//     return this.points;
//   };

// const pointTally = new PointTally()
// const result = pointTally.tallyPoints();
// console.log(result);

function rollTheDice() {
    let result = diceRoll();
    totalPoints += result
    return totalPoints;
}

//Business logic for DiceRoll

// function DiceRoll() {
//     DiceRoll.prototype.roll = function (prevScore = 0) {
//         const numbers = [1,2,3,4,5,6];
//          let number = numbers[Math.floor(Math.random() * numbers.length)];
//          let newTotal = prevScore + number;
//          return newTotal;
//     };
// };

PlayerList.prototype.holdRoll = function(){
    if ((this.players[0].currentTurn = true) && (this.players[1].currentTurn = false)) {
        this.players[0].currentTurn = false;
        this.players[1].currentTurn = true;
    } else if ((this.players[0].currentTurn = false) && (this.players[1].currentTurn = true)) {
        this.players[0].currentTurn = true;
        this.players[1].currentTurn = false;
    }
};
