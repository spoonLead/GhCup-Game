var LAST_DOWN_KEY

function keyListener(){
  window.onkeydown = function(e){
    LAST_DOWN_KEY = e.keyCode;
  }
}
