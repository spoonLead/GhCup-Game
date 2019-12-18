function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
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
