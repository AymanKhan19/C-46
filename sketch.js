
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pc

function preload()
{
	bg = loadImage('images/bg.png');
	pcImg = loadImage('images/pc0.png');
	npcImg = loadImage('images/npc1.png');

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	pc = createSprite(400, 400, 10, 10);
	pc.addImage('scientist', pcImg);

	npc = createSprite(200, 200, 10, 10);
	npc.addImage('npc', npcImg);
	npc.scale = 1.5

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(bg, width/2, height/2, width*3, height);

  if(keyDown(RIGHT_ARROW)){

	pc.x = pc.x+10
  }
  if(keyDown(LEFT_ARROW)){

	pc.x = pc.x-10
  }
  camera.position.x = pc.x

  drawSprites();
 
}



