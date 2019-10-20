class Enemy{

  constructor(){
    this.x = PLAYER.x + 12;
    this.y = PLAYER.y + 150;
    this.width = 25;
    this.height = 25;

    this.collision = false;
    this.collisionRate = 0;

    this.sprite = new Image();
    this.sprite.src = "img/enemy.jpg";

    this.speed = 5; //  PX/Iteration
  }


  process(){
    this.follow()
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


  draw(){
    screen.drawImage(this.sprite, 0, 0, 25, 25, this.x, this.y, this.width, this.height);
  }
}
