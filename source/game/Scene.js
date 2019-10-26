class Scene{
  constructor(){
    this.objectsGroup = []
  }

  addObject(object){
    this.objectsGroup.push(object)
  }

  draw(){
    for(var i = 0; i < this.objectsGroup.length; i++){
      var obj = this.objectsGroup[i];
      obj.draw(obj.x, obj.y, obj.width, obj.height)
    }
  }

}
