function Enemy(){
  this.x = player.x + 12;
  this.y = player.y + 150;
  this.width = 25;
  this.height = 25;
  this.collision = false;
  this.collisionRate = 0;

  this.speed = 5; //  PX/Iteration
}

Enemy.prototype.draw = function(){
  screen.drawImage(enemySp, 0, 0, 25, 25, this.x, this.y, this.width, this.height);
  /*screen.fillStyle = "#83DFD4";
  screen.fillRect(this.x, this.y, this.width, this.height);*/
}

Enemy.prototype.follow = function(){
  if (this.x < player.x+15){
    this.x += this.speed;
  }
  if (this.x > player.x+15){
    this.x -= this.speed;
  }
  if (this.y < player.y+15){
    this.y += this.speed;
  }
  if (this.y > player.y+15){
    this.y -= this.speed;
  }
  if (this.x<player.x+player.width & this.x>player.x-this.width & this.y < player.y+player.height & this.y > player.y-this.height){player.score -= 0.05}
}

Enemy.prototype.collision = function() {
}
