class GameObj extends Drawable{
  constructor(imagePath){
    super(imagePath)
  }



  getRandXResponseSize(){
    maxX = getMaxX()
    return getRandomIntForMax(maxX)
  }

  getMaxX(){
    return canvas.width - this.width
  }



  getRandYResponseSize(){
    maxY = getMaxY()
    return getRandomIntForMax(maxY)
  }

  getMaxY(){
    return canvas.height - this.height
  }
}
