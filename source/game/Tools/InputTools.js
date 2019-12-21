function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
}

function isMouseDown(){
     this.mouseDown
     this.onmousedown = function(e){
          this.mouseDown = true;
     }
     this.onmouseup = function(e){
          this.mouseDown = false;
     }
     return this.mouseDown;
}


function isMouseUp(){
     this.mouseUp;
     this.onmouseup = function(e){
          this.mouseUp= true;
     }
     this.onmousedown = function(e){
          this.mouseUp = false;
     }
     return this.mouseUp;
}

function getMouseX(){
     this.mouseX;
     this.onmousemove = function(e){
          this.mouseX = e.clientX;
     }
     return this.mouseX;
}



function getMouseY(){
     this.mouseY;
     this.onmousemove = function(e){
          this.mouseY = e.clientY;
     }
     return this.mouseY;
}
