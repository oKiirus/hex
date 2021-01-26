
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
var dustbinObj,groundObject	
var world;

function preload(){

	
	
	


}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(240, 450, 120)

	
	mango1 = new Mango(600, 650)
	mango2 = new Mango(650, 650)
	mango3 = new Mango(700, 650)
	mango4 = new Mango(750, 650)
	mango5 = new Mango(800, 650)
	mango6 = new Mango(650, 600)
	mango7 = new Mango(700, 600)
  mango8 = new Mango(750, 600)
  mango9 = new Mango(700, 550)

  mango10 = new Mango(1150, 390)
  mango11 = new Mango(1200, 390)
  mango12 = new Mango(1250, 390)
  mango13 = new Mango(1300, 390)
  mango14 = new Mango(1350, 390)
  mango15 = new Mango(1400, 390)
  mango16 = new Mango(1450, 390)

  mango17 = new Mango(1200, 340)
  mango18 = new Mango(1250, 340)
  mango19 = new Mango(1300, 340)
  mango20 = new Mango(1350, 340)
  mango21 = new Mango(1400, 340)

  mango22 = new Mango(1250, 290)
  mango23 = new Mango(1300, 290)
  mango24 = new Mango(1350, 290)

  mango25 = new Mango(1300, 240)

	sling = new Slingshot(paper.body, {x : 240, y : 450})
	
  groundObject=new ground(width/2,670,width,20);
  groundObject2=new ground(1300,400,400,10);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


 
  imageMode(CENTER)


  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()

  mango10.display()
  mango11.display()
  mango12.display()
  mango13.display()
  mango14.display()
  mango15.display()
  mango16.display()

  mango17.display()
  mango18.display()
  mango19.display()
  mango20.display()
  mango21.display()
  mango22.display()
  mango23.display()
  mango24.display()
  mango25.display()

  sling.display()
  

  groundObject.display();
  groundObject2.display()
  
  paper.display()
  



	
}

function mouseDragged(){

	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
	sling.fly()
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(paper.body)
  }
}