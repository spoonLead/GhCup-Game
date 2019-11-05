class GameObj extends Drawable{
  constructor(imagePath){
    super(imagePath);
  }

  getRandXResponseSize(){
    return Math.floor(Math.random() * (canvas.width - this.width));
  }

  getRandYResponseSize(){
    return Math.floor(Math.random() * (canvas.height - this.height));
  }
}
