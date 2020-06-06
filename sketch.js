const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var ground1;
var pig1;;
var log1;
var log3;
var log4;
var log2;
var pig2;
var box5;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(710,300,50,50);
    box2=new Box(890,300,50,50)
    box3=new Box(720,150,50,50)
    box4=new Box (880,150,50,50)
    pig1=new Pig(800,300,50,50)
    pig2=new Pig (800,150,30,30)
    ground=new Ground(600,390,1200,10)
    log1=new Log(800,200,240,PI/2)
    log2=new Log (800,100,240,PI/2)
    log3=new Log (800,100,240,-PI/7)
    log4=new Log (800,100,240,PI/7)
    box5=new Box (800,50,50,50)
  bird1=new Bird(100,100,20,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
   ground.display();
   pig1.display();
   pig2.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   box5.display();
   bird1.display();
}