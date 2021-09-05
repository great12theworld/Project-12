
var path, pathImg;
var runner, running;


function preload(){
  //pre-load images
  running.loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg.loadImage("path.png")
}

function setup(){
  path = createSprite(200, 200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2
  runner = createSprite(200, 350)
  runner.addAnimation("running", running)
  runner.scale = 0.2
}

function draw() {
  background(200);
  if (path.y > 400){
    path.y = height/2;
  }
  drawsprites();
  if(keyDown("left")){
   runner.x = runner.x - 100
  }
  if(keyDown("right")){
    runner.x = runner.x + 100
   }
}
