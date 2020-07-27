
var car,wall,wall2;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1350,200,20,400);
  wall2 = createSprite(800, 100, 1600, 20);
  wall2.shapeColor = "white";
  wall3 = createSprite(800, 200, 1600, 20);
  wall3.shapeColor = "white";
  wall4 = createSprite(800, 300, 1600, 20);
  wall4.shapeColor = "white";

  car = createSprite(20,50,30,30);
  car.shapeColor = "white";
  car2 = createSprite(20,150,30,30);
  car2.shapeColor = "yellow";
  car3 = createSprite(20,250,30,30);
  car3.shapeColor = "purple";
  car4 = createSprite(20,350,30,30);
  car4.shapeColor = "blue";

  speed = random(55,90);
  weight = random(400,1500)
}


function draw() {
  background(0);  

  car.velocityX = speed; 
  
  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < wall.width/2 + car.width/2 ){
  car.velocityX = 0;
  var deformation = 0.5 * weight  * speed * speed/ 22509;
  if (deformation > 180){
    car.shapeColor = color(255,0,0);
  }
  if (deformation < 180 && deformation>100){
    car.shapeColor = color(230,230,0);
  }
  if ( deformation<100){
    car.shapeColor = color(0,255,0);
  }
  }


  car2.velocityX = speed; 
  
  if(car2.x - wall.x < car2.width/2 + wall.width/2 && wall.x - car2.x < wall.width/2 + car2.width/2 ){
  car2.velocityX = 0;
  var deformation = 0.5 * weight  * speed * speed/ 22509;
  if (deformation > 180){
    car2.shapeColor = color(255,0,0);
  }
  if (deformation < 180 && deformation>100){
    car2.shapeColor = color(230,230,0);
  }
  if ( deformation<100){
    car2.shapeColor = color(0,255,0);
  }
  }

  car3.velocityX = speed; 
  
  if(car3.x - wall.x < car3.width/2 + wall.width/2 && wall.x - car3.x < wall.width/2 + car3.width/2 ){
  car3.velocityX = 0;
  var deformation = 0.5 * weight  * speed * speed/ 22509;

  if (deformation > 180){
    car3.shapeColor = color(255,0,0);
  }
  if (deformation < 180 && deformation>100){
    car3.shapeColor = color(230,230,0);
  }
  if ( deformation<100){
    car3.shapeColor = color(0,255,0);
  }
  }

  car3.velocityX = speed; 
  
  if(car3.x - wall.x < car3.width/2 + wall.width/2 && wall.x - car3.x < wall.width/2 + car3.width/2 ){
  car3.velocityX = 0;
  var deformation = 0.5 * weight  * speed * speed/ 22509;
  if (deformation > 180){
    car3.shapeColor = color(255,0,0);
  }
  if (deformation < 180 && deformation>100){
    car3.shapeColor = color(230,230,0);
  }
  if ( deformation<100){
    car3.shapeColor = color(0,255,0);
  }
  }


  car4.velocityX = speed; 
  
  if(car4.x - wall.x < car4.width/2 + wall.width/2 && wall.x - car4.x < wall.width/2 + car4.width/2 ){
  car4.velocityX = 0;
  var deformation = 0.5 * weight  * speed * speed/ 22509;
  if (deformation > 180){
    car4.shapeColor = color(255,0,0);
  }
  if (deformation < 180 && deformation>100){
    car4.shapeColor = color(230,230,0);
  }
  if ( deformation<100){
    car4.shapeColor = color(0,255,0);
  }
  }


  
  drawSprites();
}