function setup() {
  createCanvas(800,400);
  redsprite=createSprite(400, 200, 50, 50);
  bluesprite=createSprite(100,200,50,50)
  bluesprite.shapeColor="blue"
  redsprite.shapeColor="red"
  bluesprite.velocityX=5
  redsprite.velocityX=-5
}


function draw() {
  background(255,255,255);  
  drawSprites();
  bounce(redsprite,bluesprite);


}
    