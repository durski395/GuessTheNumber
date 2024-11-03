'use strict';

let randNum = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randNum;
let score = 20;
let highscore = 0;
function displayScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}
function displayMsg(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guessVal = Number(document.querySelector('.guess').value);
  console.log(guessVal);

  if (score > 1) {
    if (!guessVal) {
      displayMsg('Guess between numbers 1 - 20');
    } else if (guessVal === randNum) {
      displayMsg('You Guessed it!');
      changeBgColor('green');
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.getElementById('checkbtn').disabled = true;
    } else if (guessVal > randNum) {
      displayScore();
      displayMsg('Too high! Guess again...');
    } else if (guessVal < randNum) {
      displayScore();
      displayMsg('Too low! Guess again...');
    }
  } else {
    displayScore();
    displayMsg('You Lost!');
    changeBgColor('red');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  randNum = Math.floor(Math.random() * 20) + 1;
  displayMsg('Start guessing...');
  changeBgColor('#222');
  document.getElementById('checkbtn').disabled = false;
  document.querySelector('.number').textContent = randNum;
});

// var x = 20;
// ( x == 20 ) ? (console.log("x is 20")) : (console.log("x is not 20"))

//Execute multiple functions in a ternary operator
// var functionOne   = function() { console.log(1); }
// var functionTwo   = function() { console.log(2); }
// var functionThree = function() { console.log(3); }
// var isTrue = true;

// isTrue ? (functionOne(), functionTwo()) : functionThree();
// 1
// 2

// isTrue = false;
// isTrue ? (functionOne(), functionTwo()) : functionThree();
// 3
