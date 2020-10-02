
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy, boyimg;
var stone;
var tree;
var mango1,mango2,mango3,mango4,mango5;
var mangoimg;
var mangolook1,mangolook2,mangolook3,mangolook4,mangolook5;
var string;

function preload()
{
	boyimg=loadImage("boy.png");
	mangoimg=loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(200,540,10,10);
	boy.addImage(boyimg);
	boy.scale=0.09;

	tree = new Tree(600,410,10,10);

	mango1 = new Mango(500,350,10,10);
	mangolook1 = createSprite(200,200,10,10);
	mangolook1.addImage(mangoimg);
	mangolook1.scale=0.07
	mango2 = new Mango(600,350,10,10);
	mangolook2 = createSprite(200,200,10,10);
	mangolook2.addImage(mangoimg);
	mangolook2.scale=0.06;
	mango3 = new Mango(700,370,10,10);
	mangolook3 = createSprite(200,200,10,10);
	mangolook3.addImage(mangoimg);
	mangolook3.scale=0.05;
	mango4 = new Mango(550,300,10,10);
	mangolook4 = createSprite(200,200,10,10);
	mangolook4.addImage(mangoimg);
	mangolook4.scale=0.09;
	mango5 = new Mango(720,300,10,10);
	mangolook5 = createSprite(200,200,10,10);
	mangolook5.addImage(mangoimg);
	mangolook5.scale=0.06;
	

	stone = new Stone(155,490,40,40);
	string = new String(stone.body,{x:155, y:490});
	

	ground = new Ground(400,600,800,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  mangolook1.x=mango1.body.position.x;
  mangolook1.y=mango1.body.position.y;
  mangolook2.x=mango2.body.position.x;
  mangolook2.y=mango2.body.position.y;
  mangolook3.x=mango3.body.position.x;
  mangolook3.y=mango3.body.position.y;
  mangolook4.x=mango4.body.position.x;
  mangolook4.y=mango4.body.position.y;
  mangolook5.x=mango5.body.position.x;
  mangolook5.y=mango5.body.position.y;

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

  ground.display();
  tree.display();
  stone.display();
  string.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	string.fly();
}



function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		string.attach(stone.body);
	}

}