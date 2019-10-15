window.onload = init;

var canvas;
var screen;
var up,down,left,right, wallsHW;   //flags for control
var gameFlag = true;

var player; var playerSp = new Image(); playerSp.src = "img/player.jpg";
var coin; var coinSp = new Image(); coinSp.src = "img/coin.png";
var enemy; var enemySp = new Image(); enemySp.src = "img/enemy.jpg";

var wallsX = [];
var wallsY = [];

function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");
  player = new Player();
  coin= new CoinBlock();
  enemy = new Enemy();
  wallsHW = 30;    //ширина, высота стен

  lvlSpawn(10);
  console.log(wallsX);

  tick();       //игровой цикл

}
function tick(){
  screen.clearRect(0, 0, canvas.width, canvas.height);
  keyListener();
  move();

  if (gameFlag == true & player.score > 0){
    lvlDraw(10);
    coin.draw();
    enemy.draw();
    player.draw();

    enemy.follow();
    coin.takecoin();
    scoreDraw();
    player.score -=0.001
    if (player.score > player.maxScore){player.maxScore = player.score;}
  }
  else{gameOver();}

  requestAnimationFrame(tick);  //ограничивает fps
}

function keyListener(){
  window.onkeydown = function(e){
    switch(e.keyCode){
      case 37:
        left = true;
        right = down = up = false;
      break;
      case 38:
        up = true;
        right = left = down = false;
      break;
      case 39:
        right = true;
        left = up = down = false;
      break;
      case 40:
        down = true;
        left = right = up = false;
      break;
    }
  }
}

function gameOver(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "50px Verdana";
  screen.fillText("Game Over", 280, 200);
  screen.fillText("Your score = " + player.maxScore.toFixed(3), 190, 300);
}


function lvlSpawn(walls){
  this.Walls = walls;
  for (var i = 0; i < walls;i++){
    wallsX[i] = (Math.floor(((Math.random() * (canvas.width - player.width))/player.speed)))*player.speed;
    wallsY[i] = (Math.floor(((Math.random() * (canvas.height - player.height))/player.speed)))*player.speed;
  }
}

function lvlDraw(walls){
  screen.fillStyle = "#F0F0F0";
  for(var i = 0; i < walls; i++){
    screen.fillRect(wallsX[i], wallsY[i], 30, 30);
  }
}

function move(){
  for(var i=0; i<10; i++){
    if((up == true) & (wallsY[i]+30==player.y) & (wallsX[i]>player.x-30) & (wallsX[i]<player.x+player.width)){
      up = false;
    }
    if((down == true) & (wallsY[i]==player.y+player.height) & (wallsX[i]>player.x-30) & (wallsX[i]<player.x+player.width)){
      down = false;
    }
    if((right == true) & (wallsX[i]==player.x+player.width) & (wallsY[i]>player.y-30) & (wallsY[i]<player.y+player.height)){
      right = false;
    }
    if((left == true) & (wallsX[i]==player.x-30) & (wallsY[i]>player.y-30) & (wallsY[i]<player.y+player.height)){
      left = false;
    }
  }
  player.move();
}


function scoreDraw(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "20px Verdana";
  screen.fillText("Player score: "+ player.score.toFixed(3) , 10, 20);
}
