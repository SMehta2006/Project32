const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;

var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(500,695,1000,10);

    platform = new Ground(750,500,300,10);

    polygon = new Polygon(400,350,60);

    box1 = new Box(630,497,40,50);
    box2 = new Box(670,497,40,50);
    box3 = new Box(710,497,40,50);
    box4 = new Box(750,497,40,50);
    box5 = new Box(790,497,40,50);
    box6 = new Box(830,497,40,50);
    box7 = new Box(870,497,40,50);

    //level two

    box8 = new Box(669,457,40,50);
    box9 = new Box(709,457,40,50);
    box10 = new Box(749,457,40,50);
    box11 = new Box(789,457,40,50);
    box12 = new Box(829,457,40,50);

    //level three

    box13 = new Box(709,417,40,50);
    box14 = new Box(749,417,40,50);
    box15 = new Box(789,417,40,50);

    //level four

    box16 = new Box(755,377,40,50);

    launcher = new Launcher(polygon.body,{x:400,y:350});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  text("Score: " + score,750,40);

  ground.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  polygon.display();
  launcher.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
    launcher.attach(this.polygon)
  }
}


