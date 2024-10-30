const ball = document.getElementById('ball');
const gameBoard = document.querySelector('.container');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('gameOver');
const newGameElement = document.querySelector('#gameOver button');

let score = 0;
let isGameOver = false;
let speed = 2;
let position = {
    x: 0,
    y: 0
};

function resetPosition() {
    position.x = Math.random() * (gameBoard.offsetWidth - ball.offsetWidth);
    position.y = -ball.offsetHeight;

    ball.style.left = position.x + 'px';
    ball.style.top = position.y + 'px';
}

function moveBall() {
    if (isGameOver) return;

    position.y += speed;
    ball.style.top = position.y + 'px';

    if (position.y > gameBoard.offsetHeight) {
        gameOver();
    }

    requestAnimationFrame(moveBall);
}

function gameOver(){
    isGameOver = true;
    gameOverElement.style.display = 'flex';
}

// klikanie na granát
ball.addEventListener('click', ()=> {
    if (!isGameOver)
    score += 1;
    scoreElement.textContent = 'Score: ' + score;
    speed += 0.2;
    resetPosition();
})

newGameElement.addEventListener('click', ()=> {
    isGameOver = false;
    score = 0;
    speed = 2;
    scoreElement.textContent = 'Score: 0';
    gameOverElement.style.display = 'none';
    resetPosition();
    moveBall();
})


//------------------------
//-------Hlavný kód-------
//------------------------



resetPosition();
moveBall();