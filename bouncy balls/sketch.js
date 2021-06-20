var a,b,c,d;
var ball;
var pad1,pad2,pad3,pad4;
var edges;
function preload() {
    // a = loadSound("1.mp3");
    // b = loadSound("2.mp3");
    // c = loadSound("3.mp3");
    // d = loadSound("4.mp3");
}

function setup(){
    //edges=createEdgeSprites();
    createCanvas(600,600);
    //create tom and jerry sprites here
    var r=Math.round(random(100,500))
    ball=createSprite(r,400,20,20);
    ball.shapeColor = "#000000";

    ball.velocityX=-1-1;
    ball.velocityY=Math.round(random(1,20));

    pad1=createSprite(100,600,150,20);
    pad1.shapeColor = "#0000ff";

    pad2=createSprite(250,600,150,20);
    pad2.shapeColor = "#00ff00";

    pad3=createSprite(400,600,150,20);
    pad3.shapeColor = "#ff0000";

    pad4=createSprite(550,600,150,20);
    pad4.shapeColor = "#0f00f0";


}

function draw() {
 background("#ffffff")
 edges=createEdgeSprites();
  ball.bounceOff(edges);
   if(pad1.isTouching(ball) && ball.bounceOff(pad1)){
        ball.shapeColor = "#0000ff";
         //a.play();
         }
         if(pad2.isTouching(ball) && ball.bounceOff(pad2)){
            ball.shapeColor = "#00ff00";
             //b.play();
             }
             if(pad3.isTouching(ball) && ball.bounceOff(pad3)){
                ball.shapeColor = "#ff0000";
                 //c.play();
             }if
             (pad4.isTouching(ball) && ball.bounceOff(pad4)){
                    ball.shapeColor = "#0f00f0";
                     //d.play();
                     }
    // if (isTouching(ball,pad1)){
    //     ball.shapeColor="#0000ff";
    // }else  if (isTouching(ball,pad2)){
    //     ball.shapeColor="#00ff00";
    // }else  if (isTouching(ball,pad3)){
    //     ball.shapeColor="#ff0000";
    // }else  if (isTouching(ball,pad4)){
    //     ball.shapeColor="#0f00f0";
    // }

        // bounceOff(ball,edges);
        // bounceOff(ball,pad1);
        // bounceOff(ball,pad2);
        // bounceOff(ball,pad3);
        // bounceOff(ball,pad4);
    //Write condition here to evalute if tom and jerry collide
        
//&&(o2.x-o1.x<o1.width/2+o2.width/2)
//&&(o1.y-o2.y<o1.height/2+o2.height/2)
drawSprites();
}

function isTouching (o1,o2){
    if((o1.x-o2.x<o1.width/2+o2.width/2)&&(o2.y-o1.y<o1.height/2+o2.height/2)&&(o2.x-o1.x<o2.width/2+o1.width/2)&&(o1.y-o2.y<o2.height/2+o1.height/2)){
        return true;
    } else {
        return false;
    }
}

function bounceOff(o1,o2){
    if ((o1.x-o2.x<o1.width/2+o2.width/2)||(o2.x-o1.x<o2.width/2+o1.width/2)){
        o1.velocityX=(-1)*o1.velocityX;
        
    }
    if ((o2.y-o1.y<o1.height/2+o2.height/2)||(o1.y-o2.y<o2.height/2+o1.height/2)){
        o1.velocityY=(-1)*o1.velocityY;

    }
}