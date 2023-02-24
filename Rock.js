const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `${player}`;
    computerText.textContent =`${computer}`;
    resultText.textContent = checkWinner();
}));

console.log(resultText.textContent)



function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) +1;

    switch(randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;            
    }

}

function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}

/// Opening and closing game 

let RockBtn2 = document.getElementById('RockBtn2');
let RockBtn = document.getElementById('Game')
let RockGame = document.getElementById('RockGame')


RockBtn.addEventListener('click', () => {
    if(RockGame.style.display === "none"){
        RockGame.style.display = "block";
    }else {
        RockGame.style.display = "block";
    }
})

RockBtn2.addEventListener('click', () => {
    if(RockGame.style.display === "none"){
        RockGame.style.display = "block";
    }else {
        RockGame.style.display = 'none';
    }

})