class Phisycal{
  constructor(){
    this.x;
    this.y;
    this.width;
    this.height;
  }


  hasTopCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasTopCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasTopCollisionWithObj(object){
    if((object.y+object.height==this.y) & (object.x > this.x - object.width) & (object.x < this.x + this.width))
      return true
  }




  hasDownCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasDownCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasDownCollisionWithObj(object){
    if((object.y==this.y+this.height) & (object.x>this.x-object.width) & (object.x<this.x+this.width))
      return true
  }




  hasRightCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasRightCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasRightCollisionWithObj(object){
    if((object.x==this.x+this.width) & (object.y>this.y-object.height) & (object.y<this.y+this.height))
      return true
  }




  hasLeftCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasLeftCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasLeftCollisionWithObj(object){
    if((object.x==this.x-object.width) & (object.y>this.y-object.height) & (object.y<this.y+this.height))
      return true
  }

}

function CoinBlock(){
  this.x = 100;
  this.y = 100;
  this.width = 25;
  this.height = 25;
  this.sprite = new Image();
  this.sprite.src = "img/coin.png";

  this.status;
}

CoinBlock.prototype.draw = function(){
    screen.drawImage(this.sprite, 0, 0, 2000, 2100, this.x, this.y, this.width, this.height);
}

CoinBlock.prototype.process = function(){
  this.takecoin();
}

CoinBlock.prototype.takecoin = function(){
  if ((this.x <= (PLAYER.x + PLAYER.width)) & (this.x >= (PLAYER.x - this.width)) & (this.y <= (PLAYER.y + PLAYER.width)) & (this.y >= (PLAYER.y - this.height))){
    PLAYER.score += 1;
    this.spawnCoin();
  }
}

CoinBlock.prototype.spawnCoin = function(){
  this.x = Math.floor(Math.random() * (canvas.width - this.width));
  this.y = Math.floor(Math.random() * (canvas.height - this.height));
  for (var i = 0; i < SCENE.objectsGroup.length; i++){
    if(SCENE.objectsGroup[i] == wall){
      wall = SCENE.objectsGroup[i]
      if ((this.x < wall.x+30) & (this.x > wall.x-this.width) & (this.y < wall.y+30) & (this.y > wall.y-this.height)) {console.log("test spawncoin"); coin.spawncoin();}
    }
  }
}


class Drawable extends Phisycal{
  constructor(imagePath){
    super()
    this.sprite = new Image();
    this.sprite.src = imagePath;
  }

  draw(x, y, width, height){
    screen.drawImage(this.sprite, 0, 0, 50, 50, x, y, width, height);
  }
}

class Enemy extends Drawable{
  constructor(){
    super("img/enemy.jpg");
    this.x = PLAYER.x + 12;
    this.y = PLAYER.y + 150;
    this.width = 25;
    this.height = 22;

    this.collision = false;
    this.collisionRate = 0;

    this.speed = 5; //  PX/Iteration
  }


  process(){
    this.follow()
  }

  follow(){
    if (this.x < PLAYER.x+15){
      this.x += this.speed;
    }
    if (this.x > PLAYER.x+15){
      this.x -= this.speed;
    }
    if (this.y < PLAYER.y+15){
      this.y += this.speed;
    }
    if (this.y > PLAYER.y+15){
      this.y -= this.speed;
    }
    if (this.x<PLAYER.x+PLAYER.width & this.x>PLAYER.x-this.width & this.y < PLAYER.y+PLAYER.height & this.y > PLAYER.y-this.height){PLAYER.score -= 0.05}
  }


  draw(){
    screen.drawImage(this.sprite, 0, 0, 25, 25, this.x, this.y, this.width, this.height);
  }
}

window.onload = init;

var canvas;
var screen;
var up,down,left,right, wallsHW;   //flags for control
var gameFlag = true;
var LAST_DOWN_KEY = 30;
var SCENE;
var PLAYER;

function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");

  SCENE = new Scene();
  SCENE.addObject(PLAYER = new Player());
  SCENE.addObject(coinBlock = new CoinBlock());
  SCENE.addObject(enemy = new Enemy());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());


  gameLoop();       //игровой цикл
}

function gameLoop(){
  screen.clearRect(0, 0, canvas.width, canvas.height);
  console.log(getLastDownedKey());
  //move();
  if (gameFlag == true /*& PLAYER.score > 0*/){
    SCENE.draw()
    SCENE.process()

    scoreDraw();
    PLAYER.score -=0.001
    if (PLAYER.score > PLAYER.maxScore){PLAYER.maxScore = PLAYER.score;}
  }
  else{gameOver();}

  requestAnimationFrame(gameLoop);  //ограничивает fps
}

function getPLAYERIdFromSCENE(){
  return SCENE.objectsGroup.indexOf(PLAYER)
}

function gameOver(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "50px Verdana";
  screen.fillText("Game Over", 280, 200);
  //screen.fillText("Your score = " + PLAYER.maxScore.toFixed(3), 190, 300);
}


//collision
function move(){
  for(var i=0; i<10; i++){
    if((up == true) & (wallsY[i]+30==PLAYER.y) & (wallsX[i]>PLAYER.x-30) & (wallsX[i]<PLAYER.x+PLAYER.width)){
      up = false;
    }
    if((down == true) & (wallsY[i]==PLAYER.y+PLAYER.height) & (wallsX[i]>PLAYER.x-30) & (wallsX[i]<PLAYER.x+PLAYER.width)){
      down = false;
    }
    if((right == true) & (wallsX[i]==PLAYER.x+PLAYER.width) & (wallsY[i]>PLAYER.y-30) & (wallsY[i]<PLAYER.y+PLAYER.height)){
      right = false;
    }
    if((left == true) & (wallsX[i]==PLAYER.x-30) & (wallsY[i]>PLAYER.y-30) & (wallsY[i]<PLAYER.y+PLAYER.height)){
      left = false;
    }
  }
  PLAYER.move();
}


function scoreDraw(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "20px Verdana";
  screen.fillText("Player score: "+ PLAYER.score.toFixed(3) , 10, 20);
}

function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
}

class Player extends Drawable{
  constructor(){
    super("img/PLAYER.jpg");
    this.x = 280;
    this.y = 400;
    this.width = 50;
    this.height = 50;

    this.speed = 10;
    this.toWalls = false;


    this.maxScore = 1;
    this.score = 1;
  }

  process(){
    //if(this.hasTopCollisionWithClassOfObj(Wall)) console.log('top')
    //if(this.hasDownCollisionWithClassOfObj(Wall)) console.log('down')
    //if(this.hasRightCollisionWithClassOfObj(Wall)) console.log('right')
    //if(this.hasLeftCollisionWithClassOfObj(Wall)) console.log('left')
    this.move();
  }

  move(){
    // GO UP
    if(getLastDownedKey() == 38 & this.y>0){
      this.y -= this.speed;
      }
      //GO DOWN
    if(getLastDownedKey() == 40 & this.y<(canvas.height - this.height)){
      this.y += this.speed;
    }
    // GO LEFT
    if(getLastDownedKey() == 37 & this.x>0){
      this.x -= this.speed;
    }
    //GO RIGHT
    if(getLastDownedKey() == 39 & this.x<canvas.width - this.width){
      this.x += this.speed;
    }
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }
}

class Scene{
  constructor(){
    this.objectsGroup = []
  }

  addObject(object){
    this.objectsGroup.push(object)
  }

  draw(){
    for(var i = 0; i < this.objectsGroup.length; i++){
      var obj = this.objectsGroup[i];
      obj.draw(obj.x, obj.y, obj.width, obj.height)
    }
  }

  process(){
    for(var i = 0; i < this.objectsGroup.length; i++){
      this.objectsGroup[i].process()
    }
  }
}

class Wall{
  constructor(){
    this.x = this.getRandomX();
    this.y = this.getRandomY();
    this.width = 30;
    this.height = 30;
  }

  process(){

  }

  draw(){
    screen.fillStyle = "#F0F0F0";
    screen.fillRect(this.x, this.y, this.width, this.height);
  }

  getRandomX(){
    return ((Math.floor(((Math.random() * (canvas.width - PLAYER.width))/PLAYER.speed)))*PLAYER.speed)
  }

  getRandomY(){
    return ((Math.floor(((Math.random() * (canvas.height - PLAYER.height))/PLAYER.speed)))*PLAYER.speed)
  }
}

