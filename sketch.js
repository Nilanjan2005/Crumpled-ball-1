
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PaperObject;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   PaperObject = new Paper (250,300,20);
   ground = new Ground (450,550,1850,10);
   dustbin1 = new Dustbin(590,515,10,60);
   dustbin3 = new Dustbin(680,515,10,60);
   dustbin2 = new Dustbin(640,540,90,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



PaperObject.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:12.0,y:-12.5});
  }
}


