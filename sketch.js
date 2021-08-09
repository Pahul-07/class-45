var rocketImg;
var newY=0;
var gap=500;
var gameState="play"

function preload(){
  rocketImg= loadImage("rocket1.png");
  planetImg= loadImage("planet.png");
  meteorImg= loadImage("meteor.png");
  meteor2Img= loadImage("meteor2.png");
  meteor3Img=loadImage("meteor3.png");
  burstImg= loadImage("burst.png");

  blastSound= loadSound("explosion.mp3")
}
function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);

  rocket = new Rocket();
  planetGroup= new Group();
  for(var i=0; i<25; i++){
    obstacle1= new Obstacles(newY);
    newY= newY+obstacle1.width+gap;
    planetGroup.add(obstacle1.body);
  }
}


function draw()
{
  background(0);
  translate(0,-(rocket.body.y/2-300))
  if(gameState==="play"){
    if(keyDown("right")){
      rocket.moveRight();
      //rocket.shoot();
    }
    if(keyDown("left")){
      rocket.moveLeft();
      //rocket.shoot();
    }
    if(keyDown("up")){
      rocket.shoot();
    } 
    if(rocket.body.isTouching(planetGroup)){
      blastSound.play();
      gameState="end"
      
    }
  }
 
  if(gameState==="end"){
     rocket.body.addImage(burstImg);
  }
  drawSprites();
}
