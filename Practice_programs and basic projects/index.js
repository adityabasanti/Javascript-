// Counter program in  javascript
/*
let count = 0;
document.getElementById("decreaseBtn").onclick=function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;

}

document.getElementById("resetBtn").onclick=function(){
    count =0;
    document.getElementById("countLabel").innerHTML=count;
    
}

document.getElementById("increaseBtn").onclick=function(){
    count +=1;
    document.getElementById("countLabel").innerHTML=count;
    
}

*/

// Rolling up 3 dices
/*
let x;
let y;
let z;


console.log(x);
console.log(y);
console.log(z);

document.getElementById("rollButton").onclick = function () {
     x = Math.floor(Math.random() * 6) + 1;
     y = Math.floor(Math.random() * 6) + 1;
     z = Math.floor(Math.random() * 6) + 1;

     document.getElementById("xLabel").innerHTML=x;
     document.getElementById("yLabel").innerHTML=y;
     document.getElementById("zLabel").innerHTML=z;

}
*/



// NUMBER GUESSING GAME
/*
const answer = Math.floor(Math.random() * 10 +1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses +=1

    if(guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses`);

    }
    else if(guess<answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
}

*/

// PRACTICE PROGRAM to convert temperatures
/*

document.getElementById("submitButton").onclick= function(){

    let temp;
    if(document.getElementById("cButton").checked){
        temp= document.getElementById("textBox").value;
        temp  =Number(temp);
        temp = toCelcius(temp);
        document.getElementById("tempLabel").innerHTML= temp + "°C";
        
    }
    else if(document.getElementById("fButton").checked){
        temp= document.getElementById("textBox").value;
        temp  =Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML= temp + "°F";


    }
    else{
        document.getElementById("tempLabel").innerHTML= "Select a unit"
    }
}
*/

// let temp = 32;
//  temp = toCelcius(temp);
// temp = toFahrenheit(temp);
// console.log(temp);

/*
function toCelcius(temp){
    return (temp-32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9/5 + 32
}
*/


// Practice program to create a CLOCK

/*
const mylabel = document.getElementById("myLabel");
update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    mylabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm  = hours>=12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);
        hours = formatZeros(hours);

        return `${hours}: ${minutes}: ${seconds} ${amOrPm}` ;
    }
    function formatZeros(time){
        time = time.toString();
        return time.length <2 ? "0" + time : time;

    }
}

*/

// Interactive STOP WATCH using js

/*

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let IntervalId;
let hrs=0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click",() =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime //now() method will give current date and time
        IntervalId = setInterval(updateTime, 75);
    }
});

pauseBtn.addEventListener("click",() =>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;// this will save how much time passed in millisec
        clearInterval(IntervalId);
    }
});

resetBtn.addEventListener("click",() =>{
    paused = true;
    clearInterval(IntervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs=0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00"
});

function updateTime(){
    elapsedTime = Date.now()- startTime; // it will display in ms so we have to round off

    secs = Math.floor((elapsedTime/1000 )% 60);
    mins = Math.floor((elapsedTime/(1000 *60))%60);
    hrs = Math.floor((elapsedTime/(1000 *60 *60))%60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0")+ unit).length >2? unit : "0" + unit;
    }
}
*/

// ROCK PAPER SCISSOR using js
/*

const playerText = document.querySelector("#playerText");
const compText = document.querySelector("#compText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    compText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){

        case 1:
            computer ="ROCK";
            break;
        case 2:
            computer ="PAPER";
            break;
        case 3:
            computer ="SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player==computer){
        return "DRAW!!";
    }
    else if(computer=="ROCK"){
        return (player=="PAPER") ? "YOU WIN!" : "YOU LOSE!!"
    }
    else if(computer=="PAPER"){
        return (player=="SCISSORS") ? "YOU WIN!" : "YOU LOSE!!"
    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK") ? "YOU WIN!" : "YOU LOSE!!"

    }
}
*/

// TIC TAC TOE using js

/*
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true; // to keep track that our game is running
initializeGame();

function initializeGame() {
    cells.forEach(cell =>
        cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if (!options.includes("")) {
        statusText.textContent = `Draw!!!!!`;
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

*/

// SNAKE GAME using js
/*
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "darkgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();


function gameStart() {
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();

}

function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameover();
            nextTick();
        }, 100);
    }
    else {
        displayGameover();
    }
}

function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
    console.log(foodX);
}

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    };

    snake.unshift(head);
    //if food is eaten
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1;
        scoreText.textContent = score;
        createFood();

    }
    else {
        snake.pop();
    }

}
function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
}
function changeDirection(event) {
    const keyPressed = event.keyCode;
    // console.log(keyPressed);
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);

    switch (true) {
        case (keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;

    }



}
function checkGameover() {
    switch (true) {
        case (snake[0].x < 0): //left border
            running = false;
            break;
        case (snake[0].x >= gameWidth): //right border
            running = false;
            break;
        case (snake[0].y < 0): // top border
            running = false;
            break;
        case (snake[0].y >= gameHeight): // bottom border
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }
    }

}
function displayGameover() {
    ctx.font = "50px MV boli";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!!" ,gameWidth/2, gameHeight/2);
    running = false;

}
function resetGame() {
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }
    ];
    gameStart();

}
*/

// PONG GAME using js
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetbtn = document.querySelector("#resetbtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen"
const paddle1Color = "blue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 14.5;
const paddleSpeed = 50;
let intervalId;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
}

let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
}

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();


function gameStart() {
    createBall();
    nextTick();

}
function nextTick() {
    intervalId = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10)
}
function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}
function drawPaddles() {
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
}

function drawBall(ballX, ballY) {
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = ballBorderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}
function createBall() {
    ballSpeed = 1;
    if (Math.round(Math.random()) == 1) {
        ballXDirection = 1;
    }
    else {
        ballXDirection = -1;
    }
    if (Math.round(Math.random()) == 1) {
        ballYDirection = 1;
    }
    else {
        ballYDirection = -1;
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);
}
function moveBall() {
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);
}
function checkCollision() {
    if (ballY <= 0 + ballRadius) {
        ballYDirection *= -1
    }
    if (ballY >= gameHeight - ballRadius) {
        ballYDirection *= -1
    }
    if (ballX <= 0) {
        player2Score += 1;
        updateScore();
        createBall();
        return;
    }
    if (ballX >= gameWidth) {
        player1Score += 1;
        updateScore();
        createBall();
        return;
    }
    if (ballX <= (paddle1.x + paddle1.width + ballRadius)) {
        if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
            ballX = (paddle1.x + paddle1.width) + ballRadius; // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
    if (ballX >= (paddle2.x - ballRadius)) {
        if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
            ballX = paddle2.x - ballRadius; // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    // console.log(keyPressed);
    const paddle1Up = 87; //w key
    const paddle1down = 83;//s key
    const paddle2Up = 38; //up key 
    const paddle2down = 40; // down key

    switch (keyPressed) {
        case (paddle1Up):
            if (paddle1.y > 0) {
                paddle1.y -= paddleSpeed;
            }
            break;
        case (paddle1down):
            if (paddle1.y < gameHeight - paddle1.height) {
                paddle1.y += paddleSpeed;
            }
            break;

        case (paddle2Up):
            if (paddle2.y > 0) {
                paddle2.y -= paddleSpeed;
            }
            break;
        case (paddle2down):
            if (paddle2.y < gameHeight - paddle2.height) {
                paddle2.y += paddleSpeed;
            }
            break;
    }


}
function updateScore() {
    scoreText.textContent = `${player1Score} : ${player2Score}`
}
function resetGame() {
    player1Score = 0;
    player2Score = 0;

    paddle1 = {
        width: 25,
        height: 100,
        x: 0,
        y: 0
    }

    paddle2 = {
        width: 25,
        height: 100,
        x: gameWidth - 25,
        y: gameHeight - 100
    }
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervalId);
    gameStart();
}




