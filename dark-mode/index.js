// Récupère l'élément bouton et ajoute un écouteur d'événement
const darkModeToggle = document.querySelector('#dark');
darkModeToggle.addEventListener('click', toggleDarkMode);

// la methode localstorage.getitem()est utilisée pour récupérer une valeur stockée dans le stockage local du navigateur, appelé "localStorage"

//Le stockage local est une fonctionnalité des navigateurs modernes qui permet de stocker des données localement sur l'ordinateur de l'utilisateur, afin de les récupérer ultérieurement. Ces données sont stockées sous forme de paires clé-valeur.

// Vérifie si le mode sombre est activé ou non
const DarkMode = localStorage.getItem('DarkMode') === 'true';
if (DarkMode) {
    enableDarkMode();
}

// Fonction pour activer/désactiver le mode sombre
function toggleDarkMode() {
    if (DarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Fonction pour activer le mode sombre
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('DarkMode', 'true');
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('DarkMode', 'false');
}

//////////////////////////////////////////////////////
//le casse brick 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var interval = setInterval(draw, 10);
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

for (let c = 0; c < brickColumnCount; c++) {
    bricks [c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks [c][r] = { x: 0, y: 0}
    }
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}