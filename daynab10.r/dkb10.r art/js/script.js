console.log("Loaded!");

let sliderR, sliderG, sliderB;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.id("p5-canvas");
  background("CornflowerBlue");

  sliderR = document.getElementById('slider-r');
  sliderG = document.getElementById('slider-g');
  sliderB = document.getElementById('slider-b');
}

function draw() {
  let r = sliderR.value;
  let g = sliderG.value;
  let b = sliderB.value;

background("CornflowerBlue");

//sun
  push();
  translate(0,0);
  fill("Yellow");
  circle(0,0,300);
  pop();

//flower
  push();
  translate(width/2,height/2);
  //stem
  stroke("Green");
  strokeWeight(20);
  line(120,80,150,300);
  //flower center
  noStroke();
  fill("LightSalmon")
  circle(120,80,220);
  fill("DarkOrange");
  stroke("DarkOrange");
  strokeWeight(5);
  circle(120,80,50);
  pop();

//flower petals
  push();
  translate(width/2,height/2);
  fill(r, g, b);
  noStroke();
  circle(42,80,100); //petal 1
  circle(120,158,100); //petal 2
  circle(120,1,100); //petal 3
  circle(200,80,100); //petal 4
  pop();

//Bee
  drawBody(mouseX,mouseY);
  drawWings(mouseX,mouseY);
}

function drawBody(x,y) {
//Bee Body
  push();
  translate(x,y);
  rotate(PI * 1.60);
  fill("Yellow");
  ellipse(-50,0,125,110);
  fill("Black");
  ellipse(20,10,70,80);
  strokeWeight(20);
  fill("Black");
  line(-70,-43,-80,40);
  strokeWeight(25);
  line(-30,-40,-40,40);
  strokeWeight(5);
  line(30,30,80,80);
  line(0,0,100,-40)
  fill("Black");
  triangle(-110,-15,-110,10,-150,-5); //stinger
  pop();
}

function drawWings(x,y) {
  push();
  translate(x,y);
  fill(100);
  ellipse(-70,50,70); //lower left wing
  ellipse(-40,-40,60,140); //upper left wing
  ellipse(30,90,70)
  rotate(PI*0.25);
  ellipse(60,-50,60,140); //upper right wing
  pop();
}

function drawCircle() {
  let dia = random(10, 150);
  ellipse(random(width), random(height), dia);
}
