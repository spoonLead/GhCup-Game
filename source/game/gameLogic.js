function gameLogic(){
  if (gameFlag == true & PLAYER.currentScore > 0){
    PLAYER.move()
    ENEMY.follow()


    // Player take coin
    if(PLAYER.hasCollisionWithObj(COINBLOCK)){
      PLAYER.incrementScore(1);
      COINBLOCK.spawnCoin();
    }


    // Enemy caught up the player
    if(ENEMY.hasCollisionWithObj(PLAYER)){
         PLAYER.decrementScore(0.05);
    }

    // Permanent decrease of current score
    PLAYER.decrementScore(0.001)


    PLAYER.updateMaxScore()

     scoreDraw()
  }
  else{gameOver();}

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
  screen.fillText("Player score: "+ PLAYER.currentScore.toFixed(3) , 10, 20);
}
