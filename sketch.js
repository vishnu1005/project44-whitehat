let mySound;

var cop,cop_img;; 
var jail ,jail_img;
var thief,thief_img;
var chooseballoon;

function preload() {

  //soundFormats('aac', 'ogg');
  sherlock = loadSound('Sherlock-2.aac');

  cop_img=loadImage("star.png");
  jail_img=loadImage("jail.png");
  thief_img=loadImage("target.png")

}

function setup() {

  let cnv = createCanvas(1200, 1000-200);

  cnv.mousePressed(canvasPressed);

 

//while viewing pls comment next line...
  background(240, 179, 12);

  cop=createSprite(200,200,20,20);
  cop.addImage(cop_img);
  cop.scale=0.2;

  jail=createSprite(1090,110,400,400);
  jail.addImage(jail_img);

  //chooseballoon==randomNumber(1,4);

  thief=createSprite(300,300,20,20);
  thief.addImage(thief_img);
  thief.scale=0.2;
  //thief.velocityY=chooseballoon;
 // thief.velocityX=chooseballoon;


}

function draw()
{
  //while viewing this project pls uncomment next line...
  //background(240, 179, 12);

  if(keyDown(UP_ARROW)) {
    cop.velocityX =0;
    cop.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW)){
    cop.velocityX=0;
    cop.velocityY=5;
  }
  
  if(keyDown(RIGHT_ARROW))
  { 
  cop.velocityX=5;
  cop.velocityY=0;
  }
  
  if(keyDown(LEFT_ARROW))
  {
    cop.velocityX=-5;
    cop.velocityY=0;
  }

  textSize(20);
  text('Hello Player!!', 20, 20);
  text('Tap here to play music', 20, 40);


  drawSprites();
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  sherlock.play();
}