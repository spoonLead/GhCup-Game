class Scene{
  constructor(){
    this.objectsGroup = []
  }

  addObject(object){
    this.objectsGroup.push(object)
  }

  draw(){
    for(var i = 0; i < this.objectsGroup.length; i++){
      this.objectsGroup[i].draw()
    }
  }

  process(){
    for(var i = 0; i < this.objectsGroup.length; i++){
      this.objectsGroup[i].process()
    }
  }


}
