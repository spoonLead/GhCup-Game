function getLastDownedKey(){
  this.lastDownedKey;
  window.onkeydown = function(e){
      this.lastDownedKey = e.keyCode
  }
  return this.lastDownedKey
}
