var car; 
var wall ;
var weight;
var speed;



function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);


  car =createSprite(50, 200, 50, 50);
  car.shapeColor=color(225);
  car.velocityX=speed;


  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0
  }
  var deformation=(0.5*speed*weight)/2250;

  if(deformation<100){
    car.shapeColor=color(0,250,0)
  }
  if(deformation1>100 && deformation<180){
    car.shapeColor=color(230,230,0)
  }
  if(deformation>180){
    car.shapeColor=color(250,0,0)
  }
  
  drawSprites();
}