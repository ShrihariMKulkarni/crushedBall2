const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var flag;
var ball;
var wall1 , wall2 , wall3;
var ground , chain;


function preload(){

	binImg = loadImage("images/dustbingreen.png")
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(windowWidth/2,windowHeight-35,windowWidth,20)
    World.add(world,ground);
	
	wall1 = new Bin(windowWidth/1.11,windowHeight-145,20,200)
	wall2 = new Bin(windowWidth/1.29,windowHeight-145,20,200)
	wall3 = new Bin(windowWidth/1.192,windowHeight-55,200,20)
 
	ball = new Paper(windowWidth/5,windowHeight/1.1,25,25);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  
ground.display();
wall1.display();
wall2.display();
wall3.display();
ball.display();
//chain.display();

imageMode(CENTER)
image(binImg, windowWidth/1.192,windowHeight-155,255,230)

drawSprite();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:135,y:-155});
	}
}