function render(){
  this.clearCanvas()
  SCENE.draw()
}

function clearCanvas(){
  screen.clearRect(0, 0, canvas.width, canvas.height)
}
