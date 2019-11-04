class CoinBlock extends Drawable{
  constructor(){
    super("img/coin.png");
    this.x = 100;
    this.y = 100;
    this.width = 25;
    this.height = 25;
    
    this.status;
  }

  draw(){
      screen.drawImage(this.sprite, 0, 0, 2000, 2100, this.x, this.y, this.width, this.height);
  }

  spawnCoin(){
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = Math.floor(Math.random() * (canvas.height - this.height));
    for (var i = 0; i < SCENE.objectsGroup.length; i++){

      if(SCENE.objectsGroup[i] == wall){
        wall = SCENE.objectsGroup[i]
        if ((this.x < wall.x+30) & (this.x > wall.x-this.width) & (this.y < wall.y+30) & (this.y > wall.y-this.height))
          coin.spawncoin()
      }

    }
  }


}
