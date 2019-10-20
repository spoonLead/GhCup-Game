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
    /*screen.fillStyle = "#D82126";
    screen.fillRect(this.x, this.y, this.width, this.height);*/
}

CoinBlock.prototype.process = function(){
  this.takecoin();
}

CoinBlock.prototype.takecoin = function(){
  if ((this.x <= (player.x + player.width))& (this.x >= (player.x - this.width)) & (this.y <= (player.y + player.width)) & (this.y >= (player.y - this.height))){
    player.score += 1;
    coin.spawncoin();
    console.log(coin.x, coin.y, player.score);
  }
}

CoinBlock.prototype.spawncoin = function(){
  this.x = Math.floor(Math.random() * (canvas.width - this.width));
  this.y = Math.floor(Math.random() * (canvas.height - this.height));
  for (var i = 0; i < 10; i++){
    if ((this.x < wallsX[i]+30) & (this.x > wallsX[i]-this.width) &(this.y < wallsY[i]+30) & (this.y > wallsY[i]-this.height)) {console.log("test spawncoin"); coin.spawncoin();}
  }
}
