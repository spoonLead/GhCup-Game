class Enemy extends Drawable{
  constructor(){
    super("img/enemy.jpg");
    this.x = PLAYER.x + 12;
    this.y = PLAYER.y + 150;
    this.width = 25;
    this.height = 22;
    
    this.speed = 5; //  PX/Iteration
  }

  follow(){
    if (this.x < PLAYER.x+15){
      this.x += this.speed;
    }
    if (this.x > PLAYER.x+15){
      this.x -= this.speed;
    }
    if (this.y < PLAYER.y+15){
      this.y += this.speed;
    }
    if (this.y > PLAYER.y+15){
      this.y -= this.speed;
    }
    if (this.x<PLAYER.x+PLAYER.width & this.x>PLAYER.x-this.width & this.y < PLAYER.y+PLAYER.height & this.y > PLAYER.y-this.height){PLAYER.score -= 0.05}
  }
}
