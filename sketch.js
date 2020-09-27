
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	box1=createSprite(450,485,200,15);
	box2=createSprite(550,440,15,100);
	box3=createSprite(355,440,15,100);
	
 
	//Create the Bodies Here.
   ground=new Ground(400,height,1000,20);
   paper=new Paper(200,480);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  drawSprites();
 
}

function keypressed(){
	if(keycode===UP_ARROW){
		Matter.paper.applyForce(paper.Body,paper.Body.position,{x:85,y:-85});
	}
}

