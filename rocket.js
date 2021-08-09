class Rocket{
    constructor(){
        this.body = createSprite(width/2,height-50);
        this.body.addImage(rocketImg);
       // this.body.velocityY=-2;
        //this.angle=0
    }
    moveRight(){
        this.body.x+=5;
        //this.body.rotation+=1;
        //this.angle-=0.02
    }
    moveLeft(){
        this.body.x-=5;
        //this.body.rotation-=1;
        //this.angle+=0.02;
    }

    shoot(){
        this.body.y-=5
    }
}