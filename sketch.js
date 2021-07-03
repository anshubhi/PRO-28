
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var platform,dust1
var paper,scene1
var SlingShot1


function preload(){
scene1 = loadImage("school.outerarea.jpg")
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	platform = new Ground(width/2,350,1800,20);
	
	dust1 = new Dustbin(1000,350,138,180);
	
	paper= new Paper(100,200,40)

	SlingShot1= new Slingshot(paper.body,{x:200, y:200});
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(scene1);
  
  drawSprites();
  
 
  platform.display();
  
  dust1.display();
  
  paper.display();

  SlingShot1.display()
  
  fill ("black")
  textSize(20);
	text ("DRAG THE PAPER TO THROW IN THE BIN",400,80)
  
 
}

function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}); } }

function mouseDragged (){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased () {
	SlingShot1.fly();
}

