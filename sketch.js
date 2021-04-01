var w1,w2;
var g1,g2,g3,g4,g5;
var o1,o2,o3,o4,o5,o6,o7,o8;
var b1,b2,b3,b4,b5,b6,b7;
var l1,l2;
var e1,e2,e3,e4,e5;
var p1,p2,p3,p4,p5,p6,p7,p8;
var t1,t2,t3,t4,t5,t6,t7,t8;
var h1,h2,h3,h4,h5;
var pacmanImg;
var ghost1Img,ghost2Img,ghost3Img,ghost4Img;
var pacman;
var ghost1,ghost2,ghost3,ghost4;
var gameState="serve";

function preload(){
pacmanImg=loadImage("images/pacman.png");
ghost1Img=loadImage("images/ghost1.png");
ghost2Img=loadImage("images/ghost2.png");
ghost3Img=loadImage("images/ghost3.png");
ghost4Img=loadImage("images/ghost4.png");
}


function setup() {
  createCanvas(1000,400);

  w1=createSprite(510,60,850,3);
  w2=createSprite(510,340,850,3);

  g1=createSprite(200,120,100,3);
  g2=createSprite(150,200,3,150);
  g3=createSprite(200,270,100,3);
  g4=createSprite(250,230,3,75);
  g5=createSprite(220,190,50,3);

  o1=createSprite(320,190,70,3);
  o2=createSprite(280,230,3,80);
  o3=createSprite(320,270,70,3);
  o4=createSprite(355,230,3,80);

  o5=createSprite(420,190,70,3);
  o6=createSprite(380,230,3,80);
  o7=createSprite(420,270,70,3);
  o8=createSprite(455,230,3,80);
  
  b1=createSprite(540,160,100,3);
  b2=createSprite(495,200,3,80);
  b3=createSprite(590,200,3,80);
  b4=createSprite(540,240,100,3);

  b5=createSprite(540,270,100,3);
  b6=createSprite(540,290,3,30);
  b7=createSprite(540,130,100,3);

  l1=createSprite(620,230,3,80);
  l2=createSprite(650,270,70,3);

  e1=createSprite(740,200,80,3);
  e2=createSprite(700,230,3,70);
  e3=createSprite(780,210,3,20);
  e4=createSprite(740,220,80,3);
  e5=createSprite(740,270,80,3);

  p1=createSprite(80,100,3,80);
  p2=createSprite(80,300,3,80);
  p3=createSprite(100,140,40,3);
  p4=createSprite(100,260,40,3);
  p5=createSprite(120,160,3,40);
  p6=createSprite(120,240,3,40);
  p7=createSprite(100,180,40,3);
  p8=createSprite(100,220,40,3);

  t1=createSprite(935,300,3,80);
  t2=createSprite(935,100,3,80);
  t3=createSprite(915,140,40,3);
  t4=createSprite(915,260,40,3);
  t5=createSprite(895,160,3,40);
  t6=createSprite(895,240,3,40);
  t7=createSprite(915,180,40,3);
  t8=createSprite(915,220,40,3);

 // h1=createSprite(130,90,3,50); has to be shifted
  h2=createSprite(340,150,120,5);
  h3=createSprite(820,130,5,100);
  h4=createSprite(460,300,50,5);
 // h5=createSprite(160,310,5,50);

  pacman=createSprite(540,320,20,20);
 // pacman.addImage(pacmanImg);
 // pacman.scale=0.5;

 ghost1=createSprite(520,180,20,20);
 ghost2=createSprite(520,220,20,20);
 ghost3=createSprite(560,180,20,20);
 ghost4=createSprite(560,220,20,20);

 for(var i=90;i<940;i=i+10){
   var dots1=createSprite(i,70,5,5);
 }

 for(var i=90;i<940;i=i+10){
  var dots2=createSprite(i,90,5,5);
}
for(var i=90;i<940;i=i+10){
  var dots3=createSprite(i,110,5,5);
}
for(var i=90;i<940;i=i+10){
  var dots4=createSprite(i,330,5,5);
}
for(var i=90;i<940;i=i+10){
  var dots5=createSprite(i,310,5,5);
}
for(var i=90;i<940;i=i+10){
  var dots6=createSprite(i,290,5,5);
}

for(var i=100;i<150;i=i+10){
  var dots7=createSprite(i,130,5,5);
}
for(var i=140;i<280;i=i+10){
  var dots8=createSprite(140,i,5,5);
}

for(var i=90;i<150;i=i+10){
  var dots9=createSprite(i,270,5,5);
}

for(var i=550;i<940;i=i+10){
	var dots10=createSprite(i,290,5,5);
  }

  for(var i=780;i<920;i=i+10){
	var dots11=createSprite(i,270,5,5);
  }

  for(var i=710;i<900;i=i+10){
	var dots12=createSprite(i,250,5,5);
  }

  for(var i=710;i<900;i=i+10){
	var dots13=createSprite(i,230,5,5);
  }

  for(var i=790;i<920;i=i+10){
	var dots14=createSprite(i,210,5,5);
  }

  for(var i=600;i<920;i=i+10){
	var dots15=createSprite(i,190,5,5);
  }

  for(var i=600;i<900;i=i+10){
	var dots16=createSprite(i,170,5,5);
  }

  for(var i=160;i<900;i=i+10){
	var dots17=createSprite(i,150,5,5);
  }

  for(var i=160;i<490;i=i+10){
	var dots18=createSprite(i,130,5,5);
  }

  for(var i=600;i<920;i=i+10){
	var dots18=createSprite(i,130,5,5);
  }

  for(var i=160;i<500;i=i+10){
	var dots19=createSprite(i,170,5,5);
  }

var pp1=createSprite(90,130,10,10);
pp1.shapeColor="white";

var pp2=createSprite(90,270,10,10);
pp2.shapeColor="white";

var pp3=createSprite(920,270,10,10);
pp3.shapeColor="white";

var pp4=createSprite(920,130,10,10);
pp4.shapeColor="white";

}


function draw() {
  background("black"); 
  
  if(keyDown( UP_ARROW)){
    pacman.y=pacman.y-2;
//pacman.x=0;
 }
  if(keyDown( DOWN_ARROW)){
    pacman.y=pacman.y+2;
    //pacman.x=0;
 }
  
  if(keyDown( LEFT_ARROW)){
   pacman.x=pacman.x-2;
 }

  if(keyDown( RIGHT_ARROW)){
    pacman.x=pacman.x+2;
 }
if(gameState==="serve"){
  text("PRESS S TO PLAY",480,30);
 }

if(keyDown("s")){
ghost1.velocityX=0;
ghost1.velocityY=2;

ghost2.velocityX=1;
ghost2.velocityY=0;

ghost3.velocityX=0;
ghost3.velocityY=-2;

ghost4.velocityX=-1
ghost4.velocityY=0;
}
  drawSprites();
}

