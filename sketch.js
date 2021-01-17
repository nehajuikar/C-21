var fixedRect, movingRect;

function setup() {
   createCanvas(800,400);
    fixedRect=createSprite(200, 200, 40, 80); 
    movingRect=createSprite(400, 200, 100, 30); 
  } 
  function draw() 
  { background(0); 
    movingRect.x=mouseX;
     movingRect.y=mouseY; 
    console.log(movingRect.x-fixedRect.x);
     if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
       fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
      movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 && 
        fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
        fixedRect.shapeColor="red";
         movingRect.shapeColor="red"; 
        }
         else{ fixedRect.shapeColor="green";
          movingRect.shapeColor="green"; }
           drawSprites(); }