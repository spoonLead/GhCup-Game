class Player extends Drawable{
  constructor(){
    super("img/PLAYER.jpg");
    this.x = 280;
    this.y = 400;
    this.width = 50;
    this.height = 50;

    this.speed = 10;
    this.toWalls = false;


    this.maxScore = 1;
    this.score = 1;
  }

  process(){
    this.move();
  }

  move(){
    // GO UP
    if(getLastDownedKey() == 38 & this.y>0){
      this.y -= this.speed;
      }
      //GO DOWN
    if(getLastDownedKey() == 40 & this.y<(canvas.height - this.height)){
      this.y += this.speed;
    }
    // GO LEFT
    if(getLastDownedKey() == 37 & this.x>0){
      this.x -= this.speed;
    }
    //GO RIGHT
    if(getLastDownedKey() == 39 & this.x<canvas.width - this.width){
      this.x += this.speed;
    }
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }
}
