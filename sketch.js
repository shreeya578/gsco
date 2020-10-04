var car, wall, speed, weight, deformation;
function setup() {
  createCanvas(1600,400);
  speed=random(55,80);
  weight=random(400,1500);
  car=createSprite(200, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1400,200,30,200);
}

function draw() {
  background(0);  
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>180)
      car.shapeColor="red";
    else if (deformation<180&&deformation>80)
      car.shapeColor="yellow";
      else car.shapeColor="green";
  }


  drawSprites();
}