
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var dustbinSide1; 
//dustbinSide2, dustbinSide3;
var ground;


function setup() {
	createCanvas(1800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  ground = new Ground();
    ball = new Paper(200,200,20);
    dustbinSide1 = new Dustbin(1250,300,200,200);
	  dustbinSide2 = new Dustbin(1140,345,20,90);
    dustbinSide3 = new Dustbin(1360,345,20,90);
   
   

	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  ground.display();
  dustbinSide1.display();
  
  

  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-100});
  }
}



