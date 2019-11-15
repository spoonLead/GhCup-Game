function gameLoop(){
  this.render()
  this.gameLogic()
  this.frameLimiter(gameLoop)
}


function frameLimiter(gameLoop){
  requestAnimationFrame(gameLoop);  //ограничивает fps
}
