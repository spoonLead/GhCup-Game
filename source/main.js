window.onload = init;

var canvas;
var screen;

var SCENE;
var PLAYER;
var ENEMY;
var COINBLOCK;

var gameFlag = true;



function init(){
  canvasAndScreenDifintion()
  loadStartLevel()
  gameLoop()       //игровой цикл
}



function canvasAndScreenDifintion(){
  canvas = document.getElementById("canvas") //конвенция
  screen = canvas.getContext("2d");
}




function loadStartLevel(){
  this.loadLevelTest()
}




function gameLoop(){
  this.render()
  this.gameLogic()
  this.frameLimiter(gameLoop)
}

function frameLimiter(gameLoop){
  requestAnimationFrame(gameLoop);  //ограничивает fps
}

//TODO make getObjectID()?

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

}

function render(){
  this.clearCanvas()
  SCENE.draw()
}

function clearCanvas(){
  screen.clearRect(0, 0, canvas.width, canvas.height)
}

function gameLogic(){
  if (gameFlag == true & PLAYER.score > 0){
    PLAYER.move()
    ENEMY.follow()


    if(PLAYER.hasCollisionWithObj(COINBLOCK)){
      PLAYER.score += 1;
      COINBLOCK.spawnCoin();
    }

    scoreDraw();
    PLAYER.score -=0.001
    if (PLAYER.score > PLAYER.maxScore){PLAYER.maxScore = PLAYER.score;}
  }
  else{gameOver(); scoreDraw()}

}


function gameOver(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "50px Verdana";
  screen.fillText("Game Over", 280, 200);
  screen.fillText("Your score = " + PLAYER.maxScore.toFixed(3), 190, 300);
}


function scoreDraw(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "20px Verdana";
  screen.fillText("Player score: "+ PLAYER.score.toFixed(3) , 10, 20);
}

SCENE = new Scene()

function loadLevelTest(){
  SCENE.addObject(PLAYER = new Player());
  SCENE.addObject(COINBLOCK = new Coin());
  SCENE.addObject(ENEMY = new Enemy());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
}

//TODO make if smaller
class Phisycal{
  constructor(){
    this.x;
    this.y;
    this.width;
    this.height;
  }





  hasCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
         if(this.hasCollisionWithObj(SCENE.objectsGroup[i]))
           return true
    }
  }






  hasCollisionWithObj(object){
    if ((this.x <= (object.x + object.width)) & (this.x >= (object.x - this.width)) & (this.y <= (object.y + object.width)) & (this.y >= (object.y - this.height)))
      return true
    else
      return false
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


class Drawable extends Phisycal{
  constructor(imagePath){
    super()
    this.sprite = new Image();
    this.sprite.src = imagePath;
  }

  draw(x, y, width, height){
    screen.drawImage(this.sprite, 0, 0, this.sprite.width, this.sprite.width, x, y, width, height);
  }
}

class GameObj extends Drawable{
  constructor(imagePath){
    super(imagePath)
  }



  getRandXResponseSize(){
    var maxX = this.getMaxX()
    return getRandomIntForMax(maxX)
  }

  getMaxX(){
    return canvas.width - this.width
  }



  getRandYResponseSize(){
    var maxY = this.getMaxY()
    return getRandomIntForMax(maxY)
  }

  getMaxY(){
    return canvas.height - this.height
  }
}

class Coin extends GameObj{
  constructor(){
    super("img/coin.png")

    this.x = 100
    this.y = 100
    this.width = 25
    this.height = 25
  }



  spawnCoin(){
    this.x = this.getRandXResponseSize()
    this.y = this.getRandYResponseSize()

    if(this.hasCollisionWithClassOfObj(Wall)){
      this.spawnCoin()
    }
  }
}

class Enemy extends Drawable{
  constructor(){
    super("img/enemy.jpg");
    this.x = PLAYER.x + 12;
    this.y = PLAYER.y + 150;
    this.width = 25;
    this.height = 22;
    
    this.speed = 5; //  PX/Iteration
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
}

class Player extends Drawable{
  constructor(){
    //TODO get player sprite from arguments
    super("img/PLAYER.jpg");
    this.x = 280;
    this.y = 400;
    this.width = 50;
    this.height = 50;

    this.speed = 10;


    this.maxScore = 1;
    this.score = 1;
  }

  move(){
    // GO UP
    if(getLastDownedKey() == 38 & this.y>0)
      if(! this.hasTopCollisionWithClassOfObj(Wall))
        this.y -= this.speed;

      //GO DOWN
    if(getLastDownedKey() == 40 & this.y<(canvas.height - this.height))
      if(! this.hasDownCollisionWithClassOfObj(Wall))
        this.y += this.speed;

    // GO LEFT
    if(getLastDownedKey() == 37 & this.x>0)
      if(! this.hasLeftCollisionWithClassOfObj(Wall))
        this.x -= this.speed;

    //GO RIGHT
    if(getLastDownedKey() == 39 & this.x<canvas.width - this.width)
      if(! this.hasRightCollisionWithClassOfObj(Wall))
      this.x += this.speed;
  }

}

class Wall extends Drawable{
  constructor(){
    super("img/wall.jpg");
    this.x = this.getRandomX();
    this.y = this.getRandomY();
    this.width = 30;
    this.height = 30;
  }

  getRandomX(){
    return ((Math.floor(((Math.random() * (canvas.width - PLAYER.width))/PLAYER.speed)))*PLAYER.speed)
  }

  getRandomY(){
    return ((Math.floor(((Math.random() * (canvas.height - PLAYER.height))/PLAYER.speed)))*PLAYER.speed)
  }
}

function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
}

function getRandomIntForMax(max){
    return Math.floor(Math.random() * max)
}

