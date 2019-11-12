class Coin extends GameObj{
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

    if(this.hasCollisionWithClassOfObj(Wall)){
      this.spawnCoin()
    }
  }


}
