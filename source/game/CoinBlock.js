class CoinBlock extends GameObj{
  constructor(){
    super("img/coin.png")
    this.x = 100
    this.y = 100
    this.width = 25
    this.height = 25
  }

  // spawnCoin(){
  //   this.x = this.getRandXResponseSize()
  //   this.y = this.getRandYResponseSize()
  //   for (var i = 0; i < SCENE.objectsGroup.length; i++){
  //
  //     if(SCENE.objectsGroup[i] == wall){
  //       wall = SCENE.objectsGroup[i]
  //       if ((this.x < wall.x+30) & (this.x > wall.x-this.width) & (this.y < wall.y+30) & (this.y > wall.y-this.height))
  //         this.spawnCoin()
  //     }
  //
  //   }
  // }


  spawnCoin(){
    this.x = this.getRandXResponseSize()
    this.y = this.getRandYResponseSize()

    if(this.hasCoinCoollWithWalls())
      this.spawnCoin()
    }

  hasCoinCoollWithWalls(){
    for (var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] == wall){
        wall = SCENE.objectsGroup[i]
        if ((this.x < wall.x+30) & (this.x > wall.x-this.width) & (this.y < wall.y+30) & (this.y > wall.y-this.height))
          return true
      }
    }
  }




}
