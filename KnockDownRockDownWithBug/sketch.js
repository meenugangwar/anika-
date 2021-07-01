const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var randval;


var engine ,world



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  

  
  block1 = new Block(400, 200, 100, 100);
  block2 = new Block(200, 200, 100, 100);
  block3 = new Block(100, 200, 100, 100);
}

function draw() {
  background("lavendar");  
  Engine.update(engine);
  
  block1.display();
  block2.display();
  block3.display();
  drawSprites();
}