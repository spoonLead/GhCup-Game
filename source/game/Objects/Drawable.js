
class Drawable extends Phisycal{
  constructor(imagePath){
    super()
    this.sprite = new Image();
    this.sprite.src = imagePath;
  }

  draw(x = this.x, y = this.y, width = this.width, height = this.height){
    screen.drawImage(this.sprite, 0, 0, this.sprite.width, this.sprite.height, x, y, width, height);
  }
}
