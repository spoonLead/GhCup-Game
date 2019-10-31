window.onload = init;

var canvas;
var screen;

var gameFlag = true;
var SCENE;
var PLAYER;
var ENEMY;
var COINBLOCK;

function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");

  SCENE = new Scene();
  SCENE.addObject(PLAYER = new Player());
  SCENE.addObject(COINBLOCK = new CoinBlock());
  SCENE.addObject(ENEMY = new Enemy());
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
  if (gameFlag == true & PLAYER.score > 0){
    SCENE.draw()


    PLAYER.move()
    ENEMY.follow()

    if(hasObjectsCollision(PLAYER, COINBLOCK)){
      PLAYER.score += 1;
      COINBLOCK.spawnCoin();
    }


    scoreDraw();
    PLAYER.score -=0.001
    if (PLAYER.score > PLAYER.maxScore){PLAYER.maxScore = PLAYER.score;}
  }
  else{gameOver(); scoreDraw()}

  requestAnimationFrame(gameLoop);  //ограничивает fps
}


//TODO move to Physical; rename to hasCollisionWith(object)
function hasObjectsCollision(object1, object2){
  if ((object1.x <= (object2.x + object2.width)) & (object1.x >= (object2.x - object1.width)) & (object1.y <= (object2.y + object2.width)) & (object1.y >= (object2.y - object1.height)))
    return true
  else
    return false
}

//TODO make KeyTools.js* and move it to
function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
}

function gameOver(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "50px Verdana";
  screen.fillText("Game Over", 280, 200);
  //screen.fillText("Your score = " + PLAYER.maxScore.toFixed(3), 190, 300);
}

function scoreDraw(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "20px Verdana";
  screen.fillText("Player score: "+ PLAYER.score.toFixed(3) , 10, 20);
}
