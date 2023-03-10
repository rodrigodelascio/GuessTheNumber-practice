let myMessage = document.querySelector('.message');
let largeNumber = document.querySelector('.number');
let score = document.querySelector('.score');
let guess = document.querySelector('.guess');
let check = document.querySelector('.check');

const randomNumber = Math.trunc(Math.random() * 20) + 1;
largeNumber.textContent = randomNumber;
let currentScore = 20;

check.addEventListener('click', function () {

    guessNumber = Number(guess.value);

    if (!guessNumber) {
        myMessage.textContent = '⛔️ No number!';
    } else if (guessNumber === randomNumber) {
        myMessage.textContent = '🎉 Correct number!';
    } else if (guessNumber > randomNumber) {
        myMessage.textContent = '⏫ Too high!';
        currentScore--;
        score.textContent = currentScore;
    } else if (guessNumber < randomNumber) {
        myMessage.textContent = '⏬ Too low!';
        currentScore--;
        score.textContent = currentScore;
    }

});