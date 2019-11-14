var SCENE;
var PLAYER;
var ENEMY;
var COINBLOCK;


function loadLevelTest(){
  SCENE = new Scene();
  SCENE.addObject(PLAYER = new Player());
  SCENE.addObject(COINBLOCK = new Coin());
  SCENE.addObject(ENEMY = new Enemy());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
  SCENE.addObject(wall = new Wall());
}
