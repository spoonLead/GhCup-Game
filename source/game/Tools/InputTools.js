function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
}



//--------MOUSE-EVENTS-------
var mouseDown = false;
var mouseUp = false;
var mouseX = 0;
var mouseY = 0;
document.addEventListener('mousedown', mouseEventLister);
document.addEventListener('mouseup', mouseEventLister);
document.addEventListener('mousemove', mouseEventLister)
function mouseEventLister(e){
     if(event.type == 'mousedown'){
          mouseDown = true
          mouseUp = false
     }
     if(event.type == 'mouseup'){
          mouseUp = true
          mouseDown = false
     }
     if(event.type == 'mousemove' & event.target == canvas){
          mouseX = event.clientX - event.target.offsetLeft
          mouseY = event.clientY - event.target.offsetTop;
     }
}


function isMouseDown(){
     return mouseDown
}


function isMouseUp(){
     return mouseUp
}

function getMouseX(){
     return mouseX
}

function getMouseY(){
     return mouseY
}
