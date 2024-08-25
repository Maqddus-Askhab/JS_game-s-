
'use strict';

let diceRoll = document.querySelector(".btn--roll");
let diceImage = document.querySelector(".dice");
let holdBtn = document.querySelector(".btn--hold");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let restartBtn = document.querySelector(".btn--new");

let currentScoreElements = [
    document.querySelector("#current--0"),
    document.querySelector("#current--1")
];
let totalScoreElements = [
    document.querySelector("#score--0"),
    document.querySelector("#score--1")
];
for (let i = 0; i < 2; i++) {
    totalScoreElements[i].textContent = "0";
}

diceImage.classList.add("hidden");

// Function to generate random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}





// Variables
let currentValue = 0;
let activePlayer = 0;
let totalScores = [0, 0];

// Rolling the dice
diceRoll.addEventListener("click", function () {
    diceImage.classList.remove("hidden");

    let rolledValue = generateRandomNumber();
    console.log(rolledValue);
    diceImage.src = `dice-${rolledValue}.png`;

    if (rolledValue === 1) {
        switchPlayer();
    } else {
        currentValue += rolledValue;
        currentScoreElements[activePlayer].textContent = currentValue;
    }
});

// Switch player function
const switchPlayer = function () {
    currentScoreElements[activePlayer].textContent = 0;
    currentValue = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}

// hold score
holdBtn.addEventListener("click", function () {
    totalScores[activePlayer] += currentValue;
    totalScoreElements[activePlayer].textContent = totalScores[activePlayer];

    if (totalScores[activePlayer] >= 30) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        diceRoll.disabled = true;
        holdBtn.disabled = true;
        diceImage.classList.add("hidden");
        currentValue = 0;

    } else {
        switchPlayer();
    }
});

// Restart btnm

restartBtn.addEventListener("click", function () {
    currentValue = 0;
    activePlayer = 0;
    totalScores = [0, 0];

    for (let i = 0; i < 2; i++) {
        totalScoreElements[i].textContent = "0";
        currentScoreElements[i].textContent = "0";
    }
    document.querySelector(`.player--0`).classList.remove("player--winner");
    document.querySelector(`.player--1`).classList.remove("player--winner");

    diceImage.classList.add("hidden");

    diceRoll.disabled = false;
    holdBtn.disabled = false;
});

