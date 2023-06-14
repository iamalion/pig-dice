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
Objects
- Player
    - player1 = name
    - player2 = name
- Dice

function Player(name, points) {
    this.name = name
    this.points = 0
}

Function
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