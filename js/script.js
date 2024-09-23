console.log("Starting the number guessing game...");


const messageLabel = document.querySelector(".message");
const numberLabel = document.querySelector(".number");
const scoreLabel = document.querySelector(".score");
const guessInput = document.querySelector(".guess");
const resetButton = document.querySelector(".again");
const guessButton = document.querySelector(".check");
const highScoreLabel = document.querySelector(".highscore");


let randomNumber = 0;
let highScore = 0;
const MAX_VALUE = 20;
const MIN_VALUE = 1;
let currentScore = 20;


function generateRandomNumber() {
    randomNumber = Math.trunc(Math.random() * MAX_VALUE) + 1;
    numberLabel.textContent = "?";
    scoreLabel.textContent = 20;
    currentScore = 20;
    messageLabel.textContent = "Start guessing...";
    document.body.style.backgroundColor = "#222";
    guessInput.value = "";
}


function validateGuessRange() {
    const guess = Number(guessInput.value);
    if (guess > MAX_VALUE) {
        messageLabel.textContent = "Guess cannot be higher than 20!";
        return false;
    } else if (guess < MIN_VALUE) {
        messageLabel.textContent = "Guess cannot be lower than 1!";
        return false;
    }
    return true;
}


function checkUserGuess() {
    const guess = Number(guessInput.value);
    if (!validateGuessRange()) {
        return;
    }

    if (guess < randomNumber) {
        messageLabel.textContent = "Your guess is too low!";
        document.body.style.backgroundColor = "#C62828";
    } else if (guess > randomNumber) {
        messageLabel.textContent = "Your guess is too high!";
        document.body.style.backgroundColor = "#C62828";
    } else {
        messageLabel.textContent = "Correct guess!";
        document.body.style.backgroundColor = "#388E3C";
        numberLabel.textContent = randomNumber;
        updateHighScore(currentScore);
    }
}


function updateScoreAfterGuess() {
    const guess = Number(guessInput.value);
    if (!validateGuessRange()) {
        return;
    }

    if (guess !== randomNumber) {
        currentScore--;
        scoreLabel.textContent = currentScore;
        if (currentScore === 0) {
            messageLabel.textContent = "Game over! You ran out of guesses.";
            document.body.style.backgroundColor = "#FF6F61";
        }
    }
}


function updateHighScore(currentScore) {
    highScore = Number(highScoreLabel.textContent);
    if (currentScore > highScore) {
        highScoreLabel.textContent = currentScore;
    }
}


guessButton.addEventListener("click", function () {
    checkUserGuess();
    updateScoreAfterGuess();
});
resetButton.addEventListener("click", generateRandomNumber);


generateRandomNumber();
