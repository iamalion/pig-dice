# PIG DICE

#### By _Casey Hill & Lindsay Warr_

#### _Pig is a simple dice game where players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Git_
* _GitHub_

## Description
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

This application required the following:
Objects
- Player List: an object to hold multiple players
- Player(s): an object to hold different player values and methods

Prototypes for PlayerList:
- 

Prototypes for Player:
- diceRoll: Returns a random number every time it's invoked and pushes the value to an empty array on the Player object. It then adds each index of the array together to return a total. 

Function
- Start 
- Roll
- Hold
- Start Over
- Point Tally

## Tests
### Describe: Create Player

Test 1: It should assign a player name that is the same as the inputted name.
Code: const name = (Lindsay)
Expected Output: Player {name: Lindsay}

<!--
function Player(name) {
    this.name = name
}
let player1 = new Player("Casey")
'Casey'
-->

Test 2: It will assign points and an ID to a player.
Code: const name = "Lindsay"
Expected Output: expected output = Player{name: Lindsay, points: 0, id: 1}

<!--
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
-->

### Describe: DiceRoll()

Test 1: It should roll a random number between 1 and 6 (inclusive)
Code: 
Expected Output:
<!--
function DiceRoll() {
    this.numbers = [1, 2, 3, 4, 5, 6];
};

DiceRoll.prototype.roll = function () {
    return this.numbers[Math.floor(Math.random() * this.numbers.length)];
}; 
-->

Test: It will add the points after each roll.
Code:
Expected Output:

#### Describe startGame()
Test: "It will set Player 1 as the first player to roll."
Code:
Expected Output:

#### Describe holdRoll()
Test: It will hold the tallied points and switch between players.
Code: 
Expected Output: 

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_