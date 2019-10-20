class Wall{
  constructor(){
    this.x = this.getRandomX;
    this.y = this.getRandomY;
    this.width = 30;
    this.height = 30;
  }

  process(){
    
  }

  draw(){
    screen.fillStyle = "#F0F0F0";
    screen.fillRect(this.x, this.y, this.width, this.height);
  }

  getRandomX(){
    return ((Math.floor(((Math.random() * (canvas.width - player.width))/player.speed)))*player.speed)
  }

  getRandomY(){
    return ((Math.floor(((Math.random() * (canvas.height - player.height))/player.speed)))*player.speed)
  }
}
