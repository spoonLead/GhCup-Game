class Phisycal{
  constructor(){
    this.x;
    this.y;
    this.width;
    this.height;
  }

  hasTopCollisionWithTypeOfGameObj(objType){
    for(var i = 0; i < SCENE.objectsGroup.length; i++){
      if(SCENE.objectsGroup[i] == objType)
        console.log(SCENE.objectsGroup[i])
    }
    //if((wallsY[i]+30==PLAYER.y) & (wallsX[i]>PLAYER.x-30) & (wallsX[i]<PLAYER.x+PLAYER.width)){
  //    up = false;
  //  }
  }
}
