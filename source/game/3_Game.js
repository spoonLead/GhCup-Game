var gameFlag = true;
var SCENE = new Scene();

function gameLoop(){
  screen.clearRect(0, 0, canvas.width, canvas.height);
  if (gameFlag == true & PLAYER.score > 0){
    SCENE.draw()


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

  requestAnimationFrame(gameLoop);  //ограничивает fps
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
