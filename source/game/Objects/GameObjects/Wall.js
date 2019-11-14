class Wall extends Drawable{
  constructor(){
    super("img/wall.jpg");
    this.x = this.getRandomX();
    this.y = this.getRandomY();
    this.width = 30;
    this.height = 30;
  }

  getRandomX(){
    return ((Math.floor(((Math.random() * (canvas.width - PLAYER.width))/PLAYER.speed)))*PLAYER.speed)
  }

  getRandomY(){
    return ((Math.floor(((Math.random() * (canvas.height - PLAYER.height))/PLAYER.speed)))*PLAYER.speed)
  }
}
