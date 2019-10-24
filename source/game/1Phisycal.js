class Phisycal{
  constructor(){
    this.x;
    this.y;
    this.width;
    this.height;
  }


  hasTopCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass)
        if(this.hasTopCollisionWithObj(SCENE.objectsGroup[i]))
          return true
    }
  }

  hasTopCollisionWithObj(object){
    if((object.y+30==this.y) & (object.x > this.x - 30) & (object.x < this.x + this.width))
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
    if((object.y==this.y+this.height) & (object.x>this.x-30) & (object.x<this.x+this.width))
      return true
  }




  hasRightCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass){
        if((SCENE.objectsGroup[i].x==PLAYER.x+PLAYER.width) & (SCENE.objectsGroup[i].y>PLAYER.y-30) & (SCENE.objectsGroup[i].y<PLAYER.y+PLAYER.height))
          return true
      }
    }
  }

  hasLeftCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass){
        if((SCENE.objectsGroup[i].x==PLAYER.x-30) & (SCENE.objectsGroup[i].y>PLAYER.y-30) & (SCENE.objectsGroup[i].y<PLAYER.y+PLAYER.height))
          return true
      }
    }
  }



}
