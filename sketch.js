var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a=createSprite(100,100,50,50);
  b=createSprite(200,100,50,50);
  c=createSprite(300,100,50,50);
  d=createSprite(400,100,50,50);
  a.shapeColor = "green";
  b.shapeColor = "green"; 
  c.shapeColor = "green";
  d.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,a)){
  movingRect.shapeColor = "red";
  a.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  a.shapeColor = "green";
}
  drawSprites();
}
