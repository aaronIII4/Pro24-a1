//var paperS;
var ldb;
var bdb;
var rdb;
//var ground;
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ldb = createSprite(575,300,20,100);
	bdb = createSprite(600,600,50,20);
	rdb = createSprite(625,300,20,100);



	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.
	//paperS.Bodies(ellipse(56,46,55,55))
	//paperS.class(paper)

	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  if(keyDown(up)) {
	matter.Body.applyForce(paperS.body.paperS.body.position,{x:85,y:-85});
  }
  
  drawSprites();
 
}



