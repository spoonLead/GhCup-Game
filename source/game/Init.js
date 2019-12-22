window.onload = init;

var canvas;
var screen;

var SCENE;
var PLAYER;
var ENEMY;
var COINBLOCK;
var BUTTON_RESTART;

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
