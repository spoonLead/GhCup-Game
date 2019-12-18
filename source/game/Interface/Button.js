class Button extends Drawable{
     constructor(x, y, width, height, text){
          super("")
          this.x = x
          this.y = y
          this.width = width
          this.height = height
     }

     getState(){
          if(this.hasCollisionWithCoord(this.getMouseX(), this.getMouseY()))
               return true
          else
               return false
     }

}
