
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;	
var world,render,dustBinImg,dustbin;

function preload(){
	dustBinImg=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new trashBin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,30);
	//Create a Ground
	dustbin=createSprite(1250,620);
	dustbin.addImage("dustbin",dustBinImg);
	dustbin.scale=0.3;

	 render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0,89,189);
	
  
  //dustbinObj.display();
  
  groundObject.display();
  drawSprites();
  paperObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





