var bullet, wall, speed, weight, deformation;
function setup() {
  createCanvas(1600,400);
  speed=random(55,80);
  weight=random(400,1500);
  bullet=createSprite(200, 200, 50, 50);
  bullet.velocityX=speed;
  wall=createSprite(1400,200,30,200);
}

function draw() {
  background(0);  
  if(wall.x-bullet.x<(wall.width+bullet.width)/2){
    bullet.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>180)
      bullet.shapeColor="red";
    else if (deformation<180&&deformation>80)
      bullet.shapeColor="yellow";
      else bullet.shapeColor="green";
  }


  drawSprites();
}
