const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer , rubber, iron1 , stone1 , stone2 , stone3 , stone4 , stone5 , stone6 , stone7 , stone8 , stone9 , stone10;
var stone11 , stone12 , stone13 , stone14 , stone15 ;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(900,400,70);
   iron1 = new Iron(300,300,100,50);
   iron2 = new Iron(700,300,80,80);
   stone1 = new Stone(500,400,10);
   stone2 = new Stone(490,400,10);
   stone3 = new Stone(480,400,10);
   stone4 = new Stone(470,400,10);
   stone5 = new Stone(460,400,10);
   stone6 = new Stone(450,400,10);
   stone7 = new Stone(455,400,10);
   stone8 = new Stone(475,400,10);
   stone9 = new Stone(485,400,10);
   stone10 = new Stone(465,400,10);
   stone11 = new Stone(460,400,10);
   stone12 = new Stone(450,400,10);
   stone13 = new Stone(455,400,10);
   stone14 = new Stone(475,400,10);
   stone15 = new Stone(485,400,10);
   

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron1.display();
    iron2.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
    stone9.display();
    stone11.display();
    stone12.display();
    stone13.display();
    stone14.display();
    stone15.display();
    
}