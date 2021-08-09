var rocketImg;
var newY=0;
var gap=500;

function preload(){
  rocketImg= loadImage("rocket1.png");
  planetImg= loadImage("planet.png");
  meteorImg= loadImage("meteor.png");
  meteor2Img= loadImage("meteor2.png");
  meteor3Img=loadImage("meteor3.png");
}
function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);

  rocket = new Rocket();

  for(var i=0; i<25; i++){
    obstacle1= new Obstacles(newY);
    newY= newY+obstacle1.width+gap;
  }
}


function draw()
{
  background(0);
  
  if(keyDown("right")){
    rocket.moveRight();
    //rocket.shoot();
  }
  if(keyDown("left")){
    rocket.moveLeft();
    //rocket.shoot();
  }

  drawSprites();
}
