const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder_1,thunder_2,thunder_3,thunder_4;
var bruce;
var drop = [];
var maxDrops = 100;

function preload(){
    thunder_1 = loadImage("1.png");
    thunder_2 = loadImage("2.png");
    thunder_3 = loadImage("3.png");
    thunder_4 = loadImage("4.png");
}

function setup(){
   createCanvas(480,600);

   engine = Engine.create();
   world = engine.world;

   //bruce = new Umbrella(460,200,100,100); 

   if(frameCount % 150 === 0){
    for(var i=0; i<100; i++){
        drop.push(new Drop(random(0,400), random(0,400)));
    }
    }
}

function draw(){
    background("black");

    Engine.update(engine);

    for(var i = 0; i<100; i++){
        drop[i].updateY();   
    }

    drawSprites();
}   

