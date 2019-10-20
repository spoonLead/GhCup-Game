class Player{
  constructor(){
    this.x = 280;
    this.y = 400;
    this.width = 50;
    this.height = 50;

    this.speed = 10;
    this.toWalls = false;

    this.sprite = new Image();
    this.sprite.src = "img/PLAYER.jpg";

    this.maxScore = 1;
    this.score = 1;
  }

  process(){
    this.move();
  }

  move(){
    if(up == true & this.y>0){
      this.y -= this.speed;
      }
    if(down == true & this.y<(canvas.height - this.height)){
      this.y += this.speed;
    }
    if(left == true & this.x>0){
      this.x -= this.speed;
    }
    if(right == true & this.x<canvas.width - this.width){
      this.x += this.speed;
    }
  }


  draw(){
      screen.drawImage(this.sprite, 0, 0, 50, 50, this.x, this.y, this.width, this.height);
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }
}
