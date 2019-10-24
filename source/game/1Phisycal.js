class Phisycal{
  constructor(){
    this.x;
    this.y;
    this.width;
    this.height;
  }

  hasTopCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass){
        if((SCENE.objectsGroup[i].y+30==this.y) & (SCENE.objectsGroup[i].x > this.x - 30) & (SCENE.objectsGroup[i].x < this.x + this.width))
          return true
      }
    }
  }

  hasDownCollisionWithClassOfObj(objClass){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] instanceof objClass){
        if((SCENE.objectsGroup[i].y==PLAYER.y+PLAYER.height) & (SCENE.objectsGroup[i].x>PLAYER.x-30) & (SCENE.objectsGroup[i].x<PLAYER.x+PLAYER.width))
          return true
      }
    }
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
