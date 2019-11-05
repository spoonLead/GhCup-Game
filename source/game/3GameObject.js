class GameObj extends Drawable{
  constructor(imagePath){
    super(imagePath)
  }



  getRandXResponseSize(){
    var maxX = this.getMaxX()
    return getRandomIntForMax(maxX)
  }

  getMaxX(){
    return canvas.width - this.width
  }



  getRandYResponseSize(){
    var maxY = this.getMaxY()
    return getRandomIntForMax(maxY)
  }

  getMaxY(){
    return canvas.height - this.height
  }
}
