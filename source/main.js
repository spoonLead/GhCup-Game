function CoinBlock(){
  this.x = 100;
  this.y = 100;
  this.width = 25;
  this.height = 25;

  this.status;
}

CoinBlock.prototype.draw = function(){
    screen.drawImage(coinSp, 0, 0, 2000, 2100, this.x, this.y, this.width, this.height);
    /*screen.fillStyle = "#D82126";
    screen.fillRect(this.x, this.y, this.width, this.height);*/
}

CoinBlock.prototype.takecoin = function(){
  if ((this.x <= (player.x + player.width))& (this.x >= (player.x - this.width)) & (this.y <= (player.y + player.width)) & (this.y >= (player.y - this.height))){
    player.score += 1;
    coin.spawncoin();
    console.log(coin.x, coin.y, player.score);
  }
}

CoinBlock.prototype.spawncoin = function(){
  this.x = Math.floor(Math.random() * (canvas.width - this.width));
  this.y = Math.floor(Math.random() * (canvas.height - this.height));
  for (var i = 0; i < 10; i++){
    if ((this.x < wallsX[i]+30) & (this.x > wallsX[i]-this.width) &(this.y < wallsY[i]+30) & (this.y > wallsY[i]-this.height)) {console.log("test spawncoin"); coin.spawncoin();}
  }
}

function Enemy(){
  this.x = player.x + 12;
  this.y = player.y + 150;
  this.width = 25;
  this.height = 25;
  this.collision = false;
  this.collisionRate = 0;

  this.speed = 5; //  PX/Iteration
}

Enemy.prototype.draw = function(){
  screen.drawImage(enemySp, 0, 0, 25, 25, this.x, this.y, this.width, this.height);
  /*screen.fillStyle = "#83DFD4";
  screen.fillRect(this.x, this.y, this.width, this.height);*/
}

Enemy.prototype.follow = function(){
  if (this.x < player.x+15){
    this.x += this.speed;
  }
  if (this.x > player.x+15){
    this.x -= this.speed;
  }
  if (this.y < player.y+15){
    this.y += this.speed;
  }
  if (this.y > player.y+15){
    this.y -= this.speed;
  }
  if (this.x<player.x+player.width & this.x>player.x-this.width & this.y < player.y+player.height & this.y > player.y-this.height){player.score -= 0.05}
}

Enemy.prototype.collision = function() {
}

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

function Player(){
  this.x = 280;
  this.y = 400;
  this.width = 50;
  this.height = 50;
  this.speed = 10;
  this.toWalls = false;

  this.maxScore = 1;
  this.score = 1;
}

Player.prototype.move = function(){
  if(up == true & this.y>0){
    this.y -= this.speed;
    }
  if(down == true & this.y<(canvas.height - this.height)){
    this.y += this.speed;
  }
  if(left == true & this.x>0){
    this.x -= this.speed;
  }
  if(right == true & this.x<canvas.width - this.width){
    this.x += this.speed;
  }
}

Player.prototype.draw = function(){

  screen.drawImage(playerSp, 0, 0, 50, 50, this.x, this.y, this.width, this.height);
  /*screen.fillStyle = "#E4E4E4";
  screen.fillRect(this.x, this.y, this.width, this.height);*/
}

