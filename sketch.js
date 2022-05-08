
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var ground;
var leftwall, rightwall;
var leftwall2, rightwall2, ground2;
var roof;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  ball = new Ball(200,350,30,30);
  blower = new Blower(200,380,400,20);
  blowerMouth = new BlowerMouth(150,150,100,100);
  button = createButton("Clique para Assoprar");
  button.position(width / 3, height - 100);
  button.class("blowButton");
  button.mouseClicked(blow)


 

var groundopcions ={
  isStatic: true
}
ground = Bodies.rectangle(200,400,400,20,groundopcions)
World.add(world,ground)
leftwall = Bodies.rectangle(0,10,10,1200,groundopcions);  
rightwall = Bodies.rectangle(400,10,10,1200,groundopcions);
World.add(world,leftwall)
World.add(world,rightwall)
roof = Bodies.rectangle(200,-100,400,20,groundopcions)
World.add(world,roof)
//cesta de basquete
ground2 = Bodies.rectangle(160,200,100,10,groundopcions)
World.add(world,ground2)
leftwall2 = Bodies.rectangle(100,160,10,100,groundopcions);  
rightwall2 = Bodies.rectangle(200,160,10,100,groundopcions);
World.add(world,leftwall2)
World.add(world,rightwall2)


}


function draw() 
{
  background(51);
  Engine.update(engine);
  blower.show();
  ball.show();
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  blowerMouth.show();
}
function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.005});
}

