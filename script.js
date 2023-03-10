let myMessage = document.querySelector('.message');
let largeNumber = document.querySelector('.number');
let score = document.querySelector('.score');
let guess = document.querySelector('.guess');
let check = document.querySelector('.check');
let mainBody = document.querySelector('body');
let againButton = document.querySelector('.again');
let highField = document.querySelector('.highscore');


let randomNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

check.addEventListener("click", function () {

    guessNumber = Number(guess.value);

    if (!guessNumber) {

        myMessage.textContent = '⛔️ No number!';

        // When guess is correct
    } else if (guessNumber === randomNumber) {

        myMessage.textContent = '🎉 Correct number!';
        largeNumber.textContent = randomNumber;

        mainBody.style.backgroundColor = '#60b347';
        largeNumber.style.width = '30rem';

        if (currentScore > highScore) {

            highScore = currentScore;
            highField.textContent = highScore;

        }


        // When guess is too high
    } else if (guessNumber > randomNumber) {

        if (currentScore > 1) {

            myMessage.textContent = '⏫ Too high!';
            currentScore--;
            score.textContent = currentScore;

        } else {

            myMessage.textContent = '💥 You lost!';
            score.textContent = currentScore - 1;

        }

        // When guess is too low
    } else if (guessNumber < randomNumber) {

        if (currentScore > 1) {

            myMessage.textContent = '⏬ Too low!';
            currentScore--;
            score.textContent = currentScore;

        } else {

            myMessage.textContent = '💥 You lost!';
            score.textContent = currentScore - 1;

        }

    }

});

againButton.addEventListener("click", function () {

    currentScore = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    myMessage.textContent = "Start guessing...";
    largeNumber.textContent = "?";
    guess.value = "";
    score.textContent = currentScore;

    mainBody.style.backgroundColor = '#222';
    largeNumber.style.width = '15rem';

});