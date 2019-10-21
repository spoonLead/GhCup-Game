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
    // GO UP
    if(LAST_DOWN_KEY == 38 & this.y>0){
      this.y -= this.speed;
      }
      //GO DOWN
    if(LAST_DOWN_KEY == 40 & this.y<(canvas.height - this.height)){
      this.y += this.speed;
    }
    // GO LEFT
    if(LAST_DOWN_KEY == 37 & this.x>0){
      this.x -= this.speed;
    }
    //GO RIGHT
    if(LAST_DOWN_KEY == 39 & this.x<canvas.width - this.width){
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
