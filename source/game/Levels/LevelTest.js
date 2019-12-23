SCENE = new Scene()

function loadLevelTest(){
     BUTTON_RESTART = new ButtonRestart(304, 350, 192, 48, "img/button_restart.png")

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
