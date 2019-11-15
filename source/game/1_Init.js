window.onload = init;

var canvas;
var screen;

var SCENE = new Scene();
var PLAYER;
var ENEMY;
var COINBLOCK;

var gameFlag = true;



function init(){
  canvasAndScreenDifintion()
  loadLevelTest()
  gameLoop()       //игровой цикл
}


function canvasAndScreenDifintion(){
  canvas = document.getElementById("canvas") //конвенция
  screen = canvas.getContext("2d");
}
