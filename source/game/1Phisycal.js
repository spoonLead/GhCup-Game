class Phisycal{
  constructor(){
    this.x;
    this.y;
    this.width;
    this.height;
  }


  hasObjectsCollision(object1, object2){
    if ((object1.x <= (object2.x + object2.width)) & (object1.x >= (object2.x - object1.width)) & (object1.y <= (object2.y + object2.width)) & (object1.y >= (object2.y - object1.height)))
      return true
    else
      return false
  }


  hasTopCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasTopCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasTopCollisionWithObj(object){
    if((object.y+object.height==this.y) & (object.x > this.x - object.width) & (object.x < this.x + this.width))
      return true
  }




  hasDownCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasDownCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasDownCollisionWithObj(object){
    if((object.y==this.y+this.height) & (object.x>this.x-object.width) & (object.x<this.x+this.width))
      return true
  }




  hasRightCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasRightCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasRightCollisionWithObj(object){
    if((object.x==this.x+this.width) & (object.y>this.y-object.height) & (object.y<this.y+this.height))
      return true
  }




  hasLeftCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasLeftCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasLeftCollisionWithObj(object){
    if((object.x==this.x-object.width) & (object.y>this.y-object.height) & (object.y<this.y+this.height))
      return true
  }

}
