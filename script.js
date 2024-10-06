let score = 0;
let timeLeft = 10;
let timerId;

const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = `Оставшееся время: ${timeLeft}`;
    
    startButton.disabled = true;
    
    timerId = setInterval(countdown, 1000);
    
    document.addEventListener('click', increaseScore);
}

function increaseScore() {
    score++;
    scoreDisplay.textContent = score;
}

function countdown() {
    timeLeft--;
    timerDisplay.textContent = `Оставшееся время: ${timeLeft}`;
    
    if (timeLeft === 0) {
        clearInterval(timerId);
        document.removeEventListener('click', increaseScore);
        startButton.disabled = false;
        alert(`Игра окончена! Ваш счет: ${score}`);
    }
}
