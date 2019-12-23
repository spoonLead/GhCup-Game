class ButtonRestart extends Drawable{
     constructor(x, y, width, height){
          super("img/button_restart.png")
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

          this.pressed = false
     }

     processing(){
          console.log("processing " + this.x + " " + this.y + " " + this.width +" "+ this.height)
          this.calcPressed()
          this.calcUpped()
          if(this.isPressed()){
               console.log("ispressed")
               this.x = this.pressedX
               this.y = this.pressedY
               this.width = this.pressedWidth
               this.height = this.pressedHeight
          }
          if(this.isUpped()){
               console.log("is upped" + this.x + " " + this.y + " " + this.width +" "+ this.height)
               this.x = this.uppedX
               this.y = this.uppedY
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
