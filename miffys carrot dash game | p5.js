// copy & paste for better viewing https://editor.p5js.org/whosmani/sketches/dMog8PUdb
var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
// character
var miffy;
// object
var carrot;
// background 
var bg;



function preload(){
  bg = loadImage('tree.jpg')
  miffy = loadImage('mii.png')
  carrot = loadImage('rotten.png')
 
}

function setup() {
  createCanvas(800, 500);
  
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
   background('rgb(255,194,81)');
  fill('white')
  textSize(50)
  textAlign(CENTER);
  text('Miffys Carrot Dash', 400, 200);
  textFont('Courier New');
text('click to start', 400, 300);
reset();
}
function gameOn(){
	 image(bg, 10, 1);
    stroke("black");
	textSize(36);

  text("score = " + score, 100, 90);
  image(carrot,x,y,20,20)
  //imageMode(CENTER)
  image(miffy, mouseX,height-10, 70, 30, 30, 60);
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}
function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
		background('rgb(235,192,230)')
		textAlign(CENTER);
		text('GAME OVER', 400, 200)
  	//text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click to play again', 400, 300);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
