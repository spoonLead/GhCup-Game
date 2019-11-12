class CoinBlock extends GameObj{
  constructor(){
    super("img/coin.png")
    this.x = 100
    this.y = 100
    this.width = 25
    this.height = 25
  }



  spawnCoin(){
    this.x = this.getRandXResponseSize()
    this.y = this.getRandYResponseSize()

    if(this.hasCoinCoollionsWithWalls())
      this.spawnCoin()
    }

  hasCoinCoollionsWithWalls(){
    for (var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] == wall)
        if (this.hasCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }


}
