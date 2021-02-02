
var ball,ballImg;



function preload(){

ballImg = loadImage("cloun.png");

}


function setup() {
  createCanvas(500,500);
  ball = createSprite(300, 300, 5000, 5000);
  ball.addImage(ballImg);
}

function draw() {
  background(0);  
  drawSprites();
}