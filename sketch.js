var movingrect,fixedrect;
var rect1,rect2;
var rect3,rect4;


function setup() {

  createCanvas(800,400);
  movingrect=createSprite(200, 200, 50, 50);
  movingrect.shapeColor="green";
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="yellow";
  rect1=createSprite(50,50,40,60);
  rect1.shapeColor="pink";
  rect2=createSprite(50,350,40,60);
  rect2.shapeColor="purple";
//rect1.velocityX=2;
//rect2.velocityX=-2;
rect1.velocityY=2;
rect2.velocityY=-2;
rect3=createSprite(100,200,40,60);
  rect3.shapeColor="pink";
  rect4=createSprite(300,200,40,60);
  rect4.shapeColor="purple";
}

function draw() {
  background("red");
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  bounceOff(rect1,rect2);

if(isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
}
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="yellow";
}
if(isTouching(movingrect,rect3)){
  movingrect.shapeColor="blue";
  rect3.shapeColor="blue";
}
else{
  movingrect.shapeColor="green";
  rect3.shapeColor="pink";
}

if(isTouching(movingrect,rect4)){
  movingrect.shapeColor="blue";
  rect4.shapeColor="blue";
}
else{
  movingrect.shapeColor="green";
  rect4.shapeColor="purple";
}

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2 +object1.width/2 &&
    object2.x-object1.x<object2.width/2 +object1.width/2 &&
    object1.y-object2.y<object2.height/2 +object1.height/2 &&
    object2.y-object1.y<object2.height/2 +object1.height/2){
    return true;
  }
  else{
   
return false;
  }
}

function bounceOff(rect1,rect2){
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && 
    rect2.x-rect1.x<rect1.width/2+rect2.width/2) {
      rect1.velocityX=rect1.velocityX * (-1);
      rect2.velocityX=rect2.velocityX * (-1);
    }
  
    if(rect1.y-rect2.y<rect1.height/2+rect2.height/2 && 
      rect2.y-rect1.y<rect1.height/2+rect2.height/2) {
        rect1.velocityY=rect1.velocityY * (-1);
        rect2.velocityY=rect2.velocityY * (-1);
      }
}

















































