
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stoneObject;
var slingshot1;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	

	mango1=new mango(1200,150,30);
	mango2=new mango(1000,200,17);
	mango3=new mango(1150,220,28);
	mango4=new mango(1000,100,22);
	mango5=new mango(1100,70,30);
	mango6=new mango(900,170,30);
	mango7=new mango(1100,150,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObject=new stone(1000,200,30);
  slingshot1 = new SlingShot(stoneObject.body,{x:230,y:410});
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine)
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();
  stoneObject.display();

 slingshot1.display();

 detectCollision(stoneObject,mango1);
detectCollision(stoneObject,mango2);
detectCollision(stoneObject,mango3);
detectCollision(stoneObject,mango4);
detectCollision(stoneObject,mango5);
detectCollision(stoneObject,mango6);
detectCollision(stoneObject,mango7);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}


function keyPressed(){
   if (keyCode==32){
   
	slingshot1.attach(stoneObject.body);
	Matter.body.setPosition(stoneObject.body,{x:235,y:420});
   }
}