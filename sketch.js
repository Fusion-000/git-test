var bullet, wall;
var speed,weight,thickness;
var deformation;




function setup(){
  createCanvas(1600,400);
  

  thickness = random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  bullet = createSprite(50,200,20,10);
 
  wall = createSprite(1500,200,thickness,thickness/2)
  bullet.velocityX = speed;
}



function draw() {
  var x;
  text("a change",200,200)
  if (bullet.velocityX > 0) {
    background(255, 255, 255);
    text("bullet.x:" + bullet.x, 200, 150);
    text("wall.x:" + wall.x, 200, 180);
    text("Deformation:" + deformation, 200, 200)
    x = bullet.collide(wall);
    text("x = " + x, 200, 165);
    
    if (x) {

      if (deformation < 10) {
        bullet.shapeColor = "green";
      }
      
      if (deformation >10) {
        bullet.shapeColor = "red";
      }
      bullet.velocityX = 0;
    }
  }
  drawSprites();
}

