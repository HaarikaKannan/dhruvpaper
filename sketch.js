
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground (width/2,680,width,20);
paper=new Paper (200,650,50);
box1=new Box (600,650,200,20);
box2=new Box (500,600,20,100);
box3=new Box (700,600,20,100);
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);




  ground.display();
  paper.display();
  box1.display()
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
    console.log("hi")
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



