//var ball;
var soundbase;
var score=0;
//var time=60;
function preload(){
  basei= loadImage("base-removebg-preview.png")
  backimg=loadImage("back2.jpeg");
  ballimg=loadImage("ball-removebg-preview.png");
 // soundbase=loadSound("mixkit-elevator-tone-2863.mp3");
}

function setup() {
	canvas = createCanvas(windowWidth - 10, windowHeight - 30);
this.Instructions=createButton("Instructions:Read Before Playing or you'll Loss");
this.Instructions.position(height/35 +30, width/19);
wall= createSprite(430,200,50,10);
wall.shapeColor = color(rgb(255,23,234));
//this.wall.position(width / 10 + 80, height / 40);
//this.wall.style('width', '150px');
//this.wall.style('height', '20px');
//this.wall.position()
base= createSprite(500,600,10,10);
base.addImage(basei);
base.scale=0.5;
wall3= createSprite(375,200,50,10);
wall3.shapeColor= color(rgb(155,330,355));
wall2= createSprite(320,200,50,10);
wall2.shapeColor = color(rgb(255,23,234));
wall4=createSprite(265,200,50,10);

wall5= createSprite(485,200,50,10);
wall5.shapeColor=(rgb(123,222,0));


wall6= createSprite(240,240,10,50);
wall6.shapeColor=(rgb(255,255,255));
player= createSprite(410,580,20,20);
player.addImage(ballimg);
player.scale=0.1;
score=0;

wall7=createSprite(280,270,50,10);
wall8= createSprite(338,270,50,10);
wall8.shapeColor=(rgb(155,330,355));

wall9=createSprite(395,270,50,10);
wall9.shapeColor=(rgb(155,330,355));

wall10=createSprite(450,270,50,10);
wall10.shapeColor=(rgb(245, 10, 244));
//form= new Form();
//  form.display();

//controllerleft= createSprite(50,600,20,20);

	
	//Create the Bodies Here.



}


function draw() {
  rectMode(CENTER);
  background(rgb(229, 242, 50));
  image(backimg,0,height*0,width/1,height*1)
  edges=createEdgeSprites();
  textSize(25);
  fill(0, 199, 255);
  text("Demolishing Score: "+ score, 500,50);
  //text("Time:" +time, 900,50)
 
 //
 player.bounceOff(edges[1]);
 player.bounceOff(edges[2]);
 if(score>20){
   player.scale=0.2;
 }
 
 //player.bounceOff(edges[3]);
if(this.Instructions.mousePressed(()=>{
  player.remove();
  base.remove();
  wall.remove();
  wall2.remove();
  wall3.remove();
  wall4.remove();
  wall5.remove();
  wall6.remove();
  wall7.remove();
  wall8.remove();
  wall9.remove();
  this.Instructions.hide();
}))
 player.bounceOff(edges[0]);
 player.bounceOff(base);
  //ball.bounce(edge);
 base.x=mouseX;
 //ball.x=base.x;

 if(mousePressedOver(player)){
 //time=time-1;
  player.velocityY=-12;
 }
 
 
 if(player.isTouching(wall)){
   //wall.visible=false;
   score=score+5;
  // time=time-1;
wall.remove();
player.velocityX=10;
 }
 if(player.isTouching(wall3)){
   wall3.remove();
   //time=time-1;
   player.velocityX=3;
   score=score+2;
 }
 if(player.isTouching(wall2)){
   wall2.remove();
   score=score+5;
   player.velocityX=6;
   //time=time-1;
 }
 if(player.isTouching(wall10)){
  wall10.remove();
  score=score+5;
  player.velocityY=14;
  //time=time-1;
}
if(player.isTouching(wall4)){
  wall4.remove();
  score=score+10;
  player.velocityY=-12;
 // time=time-1;
}

if(player.isTouching(wall5)){
  wall5.remove();
  score=score+15;
  player.velocityX=9;
//time=time-1;
}

if(player.isTouching(wall9)){
  wall9.remove();
  player.velocityY=-12;
  score=score+2;
  //time=time-1;
}
if(player.isTouching(wall6)){
  wall6.remove();
  score=score+6;
  player.velocityX=5;
  //time=time-1;
}
if(player.isTouching(wall7)){
  wall7.remove();
  score=score+10;
  player.velocityY=-12;
  //time=time-1;
}

if(player.isTouching(wall8)){
  wall8.remove();
  player.velocityX=3;
  score=score+2;
  //time-time-1;
}
  drawSprites();
 
}



