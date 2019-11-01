
class Drawable extends Phisycal{
  constructor(imagePath){
    super()
    this.sprite = new Image();
    this.sprite.src = imagePath;
  }

  draw(x, y, width, height){
    screen.drawImage(this.sprite, 0, 0, 50, 50, x, y, width, height);
  }
}
