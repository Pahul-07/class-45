class Obstacles{
    constructor(y){
       this.x=width-random([200,1000,600,1400]);
       this.width= 20;
       this.body= createSprite(this.x,y);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: this.body.addImage(meteorImg);
              break;
      case 2: this.body.addImage(meteor2Img);
              break;
      case 3: this.body.addImage(meteor3Img);
              break;
      case 4: this.body.addImage(planetImg);
              break;
      default: break;
    }
    this.body.scale= 0.8
}}