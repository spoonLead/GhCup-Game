class Player extends Drawable{
  constructor(){
    //TODO get player sprite from arguments
    super("img/PLAYER.jpg");
    this.x = 280;
    this.y = 400;
    this.width = 50;
    this.height = 50;

    this.speed = 10;


    this.maxScore = 1;
    this.score = 1;
  }

  move(){
    // GO UP
    if(getLastDownedKey() == 38 & this.y>0)
      if(! this.hasTopCollisionWithClassOfObj(Wall))
        this.y -= this.speed;

      //GO DOWN
    if(getLastDownedKey() == 40 & this.y<(canvas.height - this.height))
      if(! this.hasDownCollisionWithClassOfObj(Wall))
        this.y += this.speed;

    // GO LEFT
    if(getLastDownedKey() == 37 & this.x>0)
      if(! this.hasLeftCollisionWithClassOfObj(Wall))
        this.x -= this.speed;

    //GO RIGHT
    if(getLastDownedKey() == 39 & this.x<canvas.width - this.width)
      if(! this.hasRightCollisionWithClassOfObj(Wall))
      this.x += this.speed;
  }

  incrementScore(count){
       this.score += count;
 }

  decrementScore(count){
      this.score -= count;
 }

}
