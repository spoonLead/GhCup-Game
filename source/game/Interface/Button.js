class ButtonRestart extends Drawable{
     constructor(x, y, width, height){
          super("img/button_restart.png")
          this.x = x
          this.y = y
          this.width = width
          this.height = height


          this.pressedWidth = width + 10
          this.pressedHeight = height + 10
          this.uppedWidth = width
          this.uppedHeight = height
     }

     processing(){
          if(this.isPressed()){
               console.log("ispressed")
               this.width = this.pressedWidth
               this.height = this.pressedHeight
          }
          if(this.isUpped()){
               console.log("is upped")
               this.width = this.uppedWidth
               this.height = this.uppedHeight
          }
     }

     isPressed(){
          if(this.hasCollisionWithCoord(getMouseX(), getMouseY()) & isMouseDown() == true)
               return true
          else
               return false
     }

     isUpped(){
          if(this.hasCollisionWithCoord(getMouseX(), getMouseY()) & isMouseUp() == true)
               return true
          else
               return false
     }

}
