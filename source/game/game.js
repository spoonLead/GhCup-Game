window.onload = init;

var canvas;
var screen;

var gameFlag = true;
var SCENE;
var PLAYER;
var COINBLOCK;

function init(){
  canvas = document.getElementById("canvas"); //конвенция
  screen = canvas.getContext("2d");

  SCENE = new Scene();
  SCENE.addObject(PLAYER = new Player());
  SCENE.addObject(COINBLOCK = new CoinBlock());
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
  if (gameFlag == true & PLAYER.score > 0){
    SCENE.draw()

    if(hasObjectsCollision(PLAYER, COINBLOCK){
      PLAYER.score += 1;
      COINBLOCK.spawnCoin();
    }


    SCENE.processAI()

    scoreDraw();
    PLAYER.score -=0.001
    if (PLAYER.score > PLAYER.maxScore){PLAYER.maxScore = PLAYER.score;}
  }
  else{gameOver(); scoreDraw()}

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

function scoreDraw(){
  screen.fillStyle = "#F0F0F0";
  screen.font = "20px Verdana";
  screen.fillText("Player score: "+ PLAYER.score.toFixed(3) , 10, 20);
}
