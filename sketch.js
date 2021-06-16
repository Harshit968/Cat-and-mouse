var cat,bg;
var mouse;

function preload() {
    
    bg = loadImage("images/garden.png")
    catImg = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png")
    catImg4 = loadImage("images/cat4.png");
      mouseImg  = loadAnimation("images/mouse1.png");
      mouseImg2 = loadAnimation("images/mouse2.png");
      mouseImg3 = loadAnimation("images/mouse3.png");
     
    
     
    
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(870,600);
    cat.addImage("catSleeping",catImg);
    cat.scale = 0.2    

    mouse = createSprite(200,600);                                  
    mouse.addAnimation("mouseStanding",mouseImg);
    mouse.scale = 0.1

    
     


    
}

function draw() {
    background(bg); 

     if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0;
      cat.addAnimation("catSitting",catImg4) ;
      cat.changeAnimation("catSitting");
      mouse.addAnimation("mouseSmiling",mouseImg2);
      mouse.changeAnimation("mouseSmiling");



     }


     
    drawSprites();
    }
function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -2
     cat.addAnimation("catWalking",catImg2,catImg3);
     cat.changeAnimation("catWalking")
     mouse.addAnimation("mouseTeasing",mouseImg3);
     mouse.changeAnimation("mouseTeasing");
     
}
}




