window.onload = init;

var canvas;
var screen;

function init(){
  canvasAndScreenDifintion()
  loadLevelTest()
  gameLoop()       //игровой цикл
}


function canvasAndScreenDifintion(){
  canvas = document.getElementById("canvas") //конвенция
  screen = canvas.getContext("2d");
}
