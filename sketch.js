var moveobject,fixobject

function setup() {
  createCanvas(400,400);
  moveobject = createSprite(50, 200, 50, 50);
  moveobject.shapeColor = "green";
  moveobject.velocityX=2;
  moveobject.velocityY=10;


  fixobject = createSprite(200, 200, 50, 50);
  fixobject.shapeColor = "green";
  fixobject.velocityX=-2;
  fixobject.velocityY=-10;

}

function draw() {
  background("Yellow");  
 // moveobject.y=World.mouseY;
  //moveobject.x=World.mouseX;
  if(moveobject.x - fixobject.x < fixobject.width/2 + moveobject.width/2 && 
    fixobject.x - moveobject.x < fixobject.width/2 + moveobject.width/2 ){

      moveobject.velocityX=moveobject.velocityX * (-1);
      fixobject.velocityX=moveobject.velocityX * (-1);

  }
   
   if(moveobject.y - fixobject.y < fixobject.width/2 + moveobject.width/2 &&
    fixobject.y - moveobject.y < fixobject.width/2 + moveobject.width/2){

      moveobject.velocityY=moveobject.velocityY * (-1);
      fixobject.velocityY=moveobject.velocityY * (-1);
      // moveobject.shapeColor = "red";
    //fixobject.shapeColor = "red";
    
  }
  else{
    moveobject.shapeColor = "green";
    fixobject.shapeColor = "green";
  }
     drawSprites();
}