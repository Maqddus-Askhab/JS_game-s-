'use strict';
let againBtn = document.querySelector(".again");
let HighScore = document.querySelector(".highscore");
let score = document.querySelector(".score");
let body = document.querySelector("body");
let message = document.querySelector(".message");
let input = document.querySelector(".guess");
let checkBtn = document.querySelector(".check")
let guessNumber = document.querySelector(".number");
// Random Number Generate 
let rendomNumberGenerator = Math.floor(Math.random()*20)+1;
guessNumber.style.color = "black"
document.body.style.background = "#3AA6B9";
document.body.style.color = "black";

//// Initialize Variables
let scoreCount = 20;
let highScore = 0;
let gameStatus = true;


// Again Button function
let againButton = function()
{
   rendomNumberGenerator = Math.floor(Math.random()*20)+1;
   guessNumber.textContent = "?";
   message.textContent = "Start guessing...";
   message.style.color = "#ffffff";
   scoreCount = 20;
   score.textContent = scoreCount;
   HighScore.textContent = highScore ;
   document.body.style.background = "#3AA6B9";
   input.value="";
   //rendomNumberGenerator =
   input.disabled = false;
   checkBtn.disabled = false;
   
}

// Game Logic function 
let gameLogic = function()
{
    let inputNumber = Number(input.value);

    if(inputNumber  && inputNumber > 0)
    {
        
        if(inputNumber === rendomNumberGenerator)
        {
            message.textContent =  "🎉 Match! You guessed the correct number!";
            message.style.color = "#ffffff";
            document.body.style.backgroundColor = "#2D9596";
            
            guessNumber.textContent = rendomNumberGenerator;
            if( scoreCount > highScore){
            highScore = scoreCount;
            HighScore.textContent = highScore ;
            }
           
           input.disabled = true;
           checkBtn.disabled = true;
        }
        else if(inputNumber < rendomNumberGenerator)
        {
            message.textContent = "📉 Too low! Try again.";
            message.style.color = "red";
            scoreCount--;
            console.log
            score.textContent =  scoreCount;
        }
        else if(inputNumber > rendomNumberGenerator)
        {
            message.textContent = "📈 Too high! Try again.";
            message.style.color = "red";
            scoreCount--;
            score.textContent =  scoreCount;
        }
        
    }
    else {
        //console.log("No match detected.")
        //document.body.style.backgroundColor = "red";
        //input.disabled = true;
       //checkBtn.disabled = true;
       message.textContent = "⚠️ Please enter a number.";
       message.style.color = "orange";
    }

    if (scoreCount <= 0) {
        message.textContent = "You lost the game!";
        message.style.color = "#ffffff";
        document.body.style.backgroundColor = "#FF3632";
        input.disabled = true;
        checkBtn.disabled = true;
        
    }
}

// function call 
checkBtn.addEventListener("click", gameLogic);
againBtn.addEventListener("click" ,againButton );
 