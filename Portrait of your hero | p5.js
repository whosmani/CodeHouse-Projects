// for access copy & paste !! https://openprocessing.org/sketch/2313401
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("rgb(235,160,200)");
  //behind head
  noStroke(0);
  fill("rgb(57,30,17)");
  circle(400,400,700);
  //head
  noStroke();
  fill("rgb(162,86,16)");
  ellipse(400, 320, 340, 440);
  //neck
  rect(310,300,180, 340);
  // ears
	circle(240, 360, 110);
	circle(560, 360, 110);
  //left eye
  fill("rgb(63,43,11)");
  ellipse(300, 300, 40, 80);
  //right eye
  fill("rgb(63,43,11)");
  ellipse(500, 300, 40, 80);
  //nose
  fill("rgb(122,76,40)");
  ellipse(400, 400, 80, 40);
  //ear lines
  //left earline
	strokeWeight(8);
	stroke(238, 47, 65, 100);
	line(210, 350, 230, 375);
	
	//right earline
	strokeWeight(8);
	stroke(238, 47, 65, 100);
	line(590, 350, 570, 375);
  //right front hair

  //mouth
  stroke('rgb(57,30,17)');
  strokeWeight(5);
  line(360, 450, 400, 460);
  line(400, 460, 440, 450);
  //hair
  fill("rgb(57,30,17)");
  
  circle(300,150,150);
  circle(350,200,130);
  circle(400,200,150);
  circle(500,200,150);
  circle(450,150,150);
  circle(420,150,150);
  circle(200,250,150);
  circle(200,550,150);
  //cheeks
  noStroke();
  fill("rgb(190,100,116)")
  ellipse(300, 380,50);
  ellipse(500, 380,50);
  // glasses
fill("black");
  stroke(0);
  strokeWeight(5);
  noFill();
  ellipse(500, 300, 110, 80);
  ellipse(300, 300, 110, 80);
  

  


  
	 
 
}
