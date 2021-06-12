class snow{
    constructor(x,y,r){
    var options ={
        friction : 0.01,
        density :0.03
    }
    this.r = r;
    this.image = loadImage("snow5.webp");
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    image(this.image,0,0,this.r*2,this.r*2);
    pop();
    }
}