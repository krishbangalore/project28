
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,200,30);
	mango2=new mango(1100,50,30);
	mango3=new mango(1150,200,30);
	mango4=new mango(1050,50,30);
	mango5=new mango(1000,200,30);



	treeObj=new tree(1050,580);
	//stoneObj
	stoneObj = new Stone(180,335,20);
	groundObject=new ground(width/2,600,width,20);
	slingShot = new SlingShot(stoneObj.body,{x:240,y:400});
	//launcherObject = new SlingShot(stoneObj.body,{x:240,y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  //Engine.update(engine);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 stoneObj.display();
  groundObject.display();
  slingShot.display();  
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  
}
function mouseDragged(){
    //alert(stoneObj.position.x + '-' + stoneObj.position.y) 
	Matter.Body.setPosition(
		
		stoneObj.body,{x:mouseX,y:mouseY}
	)
	}
	function mouseReleased (){
		Body.setAngularVelocity( stoneObj, 30);
		//stoneObj.velocity.y = -10;
		slingShot.fly();
		
	}

	function keyPressed()
	{
		if (keyCode === 32)
		{
			 alert('test');
			//Matter.Body.setPosition(stoneObj.Body,{x:240,y:400});
		} 
	}

	function detectCollision(lstone, lmango)
	{
       mangoPosition = lmango.body.position;
	   stonePosition = lstone.body.position;
	   var distance = dist(mangoPosition.x,mangoPosition.y,stonePosition.x,stonePosition.y);
	   
	   if (distance <= lmango.r + lstone.r)
	   {
		//alert(distance);
		//alert(lmango.r + lstone.r);
		    Matter.Body.setStatic(lmango.body,false)
	   }
	 } 
	

	