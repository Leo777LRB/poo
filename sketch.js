var box1, box2;
var ground

function setup() 
{

  createCanvas(400, 400);
  box1=new Box(200,100,70,70);
  box2=new Box(100,200,70,70);
  ground=new Ground();
}

function draw() 
{
  background(220);
 box1.display();
 box2.display();
 ground.display();
}







