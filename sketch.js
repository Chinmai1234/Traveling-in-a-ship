var ship, ship_moving;
var seaIMG, seaImage;

function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(800,800);

seaIMG=createSprite(200,200,200,200);
seaIMG.addImage(seaImage);
seaIMG.velocityX=-10
  
ship=createSprite(150,220,50,350);
ship.addAnimation("shipmoving",ship_moving);
ship.scale = 0.4
}

function draw() {
  background("blue");

if(seaIMG.x < 0){
  seaIMG.x = seaIMG.width/2;
}

  drawSprites();
 
}