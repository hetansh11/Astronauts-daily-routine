var brushing 
var bg

function preload() {
sleep=loadimage("images/sleep.png")
bg=loadimage("images/iss.png")
brush=loadimage("images/brush.png")
bath=loadAnimation("images/bath1.png"/"images/bath2.png")
eat=loadAnimation("images/eat1.png","images/eat2.png")
drink=loadimage("images/sleep.png")
move=loadAnimation("images/move.png","move1.png")
gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
}


function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  astronut=createSprite(300,230);
  astronut.addanimation('sleeping',sleep);
  if (keydown("UP_ARROW")){
    astronut.addAnimation("brushing",brush)
    astronut.y=350
    astronut.velocityX=0;
    astronut.velocityX=0;
    }
}