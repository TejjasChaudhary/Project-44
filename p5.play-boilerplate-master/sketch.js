
function preload() {

 path=loadImage("../pink-path1.png");


}


function setup() {
  createCanvas(800,600);

  floor1=createSprite(400, 500, 800, 30);
  //floor1.shapeColor = "pink"
  floor1.addImage(path)

  mario=createSprite(400, 520, 30, 30);
  edges = createEdgeSprites()

}

function draw() {
  background(0,0,0);
  
 if(keyDown("RIGHT_ARROW")){
 
    //mario.velocityX = 10; 
    mario.x += 10;

  }
    if(edges[0].isTouching(mario)){

      mario.velocityX = 0;
      mario.x = 20;
      
   }

   if(edges[1].isTouching(mario)){

    mario.velocityX = 0;
    mario.x = 780;
    
 }
    
   if(keyDown("LEFT_ARROW")){
 
    //mario.velocityX = 10; 
    mario.x -= 10;

  }

  drawSprites();
}