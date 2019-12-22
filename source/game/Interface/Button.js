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

          this.pressed
     }

     processing(){
          this.calcPressed()
          this.calcUpped()
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

     calcPressed(){
          if(this.hasCollisionWithCoord(getMouseX(), getMouseY()) & isMouseDown() == true){
               this.pressed = true
          }
     }

     calcUpped(){
          if(this.pressed & isMouseUp() == true){
               this.pressed = false
               this.upped = true
          }
          else if (this.pressed == false)
               this.upped = false
     }

     isPressed(){
          return this.pressed
     }

     isUpped(){
          return this.upped
     }

}
