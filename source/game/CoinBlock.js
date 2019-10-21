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
