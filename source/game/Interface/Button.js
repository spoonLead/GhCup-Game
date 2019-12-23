class ButtonRestart extends Drawable{
     constructor(x, y, width, height, sprite){
          super(sprite)
          this.x = x
          this.y = y
          this.width = width
          this.height = height

          this.pressedX = x - 4
          this.pressedY = y - 1
          this.pressedWidth = width + 8
          this.pressedHeight = height + 2

          this.uppedX = x
          this.uppedY = y
          this.uppedWidth = width
          this.uppedHeight = height

          this.state = {
               pressed: false,
               upped: false
          }

     }

     processing(){
          this.calcPressed()
          this.calcUpped()
          if(this.isPressed()){
               this.x = this.pressedX
               this.y = this.pressedY
               this.width = this.pressedWidth
               this.height = this.pressedHeight
          }
          if(this.isUpped()){
               this.x = this.uppedX
               this.y = this.uppedY
               this.width = this.uppedWidth
               this.height = this.uppedHeight
          }
     }

     calcPressed(){
          if(this.hasCollisionWithCoord(getMouseX(), getMouseY()) & isMouseDown() == true)
               this.state.pressed = true
     }

     calcUpped(){
          if(this.state.pressed & isMouseUp() == true){
               this.state.pressed = false
               this.state.upped = true
          }
          else
               this.state.upped = false
     }

     isPressed(){
          return this.state.pressed
     }

     isUpped(){
          return this.state.upped
     }

}
