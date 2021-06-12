const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowFall;
var maxSnow = 100;
var snowArray = [];
var rand;
function preload(){
  bg = loadImage("snow1.jpg");

}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  //var snowFall = new snow(700,700,20,20);
  
}

function draw() {
  Engine.update(engine);
  background(bg);
  rand = Math.round(random(1,5))
  if(frameCount%5===0) { 
  snowArray.push(new snow(random(0, 800), 30, 30)) 
} 
for(var j = 0; j<snowArray.length; j++) { 
  snowArray[j].display() 
}
  //snowFall.display();  
  drawSprites();
}