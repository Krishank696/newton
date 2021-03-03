
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Bob1, Bob2, Bob3, Bob4, Bob5:

Bob1 = new Bob(100, 100);
Bob2 = new Bob(300, 300);
Bob3 = new Bob(500,500);
Bob4 = new Bob(700, 700);
Bob5 = new Bob(900, 900);
function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



