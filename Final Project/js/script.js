let bg;
let txts = [];
let button1; //Granny's review
let button2; //girl's review
let button3; //grandpa's review
let button4; //mom's review
let button5; //frog
let button6; //bird
let button7; //cat
let button8; //rat

function preload() {
  bg = loadImage('assets/cclab background image.png');
}

function setup() {
  createCanvas(3900, 1500);
  background(bg);
}


function draw() {
  displayText();
  //Granny's review
  button1 = createButton("What's Granny's Review?");
  button1.position(400, 1150);
  button1.mousePressed(granny);
  //Girl's Review
  button2 = createButton("What's Lily's Review?");
  button2.position(2050, 1070);
  button2.mousePressed(lily);
  //Grandpa's Review
  button3 = createButton("What's Grandpa's Review?");
  button3.position(2980, 980);
  button3.mousePressed(grandpa);
  //Mom's Review
  button4 = createButton("What's Mom's Review?");
  button4.position(3600, 850);
  button4.mousePressed(mom);
  //frog
  button5 = createButton("Ribbit");
  button5.position(1330, 1500);
  button5.mousePressed(frog);
  //bird
  button6 = createButton("Tweet Tweet");
  button6.position(1530, 870);
  button6.mousePressed(bird);
  //cat
  button7 = createButton("MEOW");
  button7.position(2300, 410);
  button7.mousePressed(cat);
  //rat
  button8 = createButton("squeakkk");
  button8.position(3700, 500);
  button8.mousePressed(rat);
}
function granny() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(600, 990, 325, 210, 20);
  pop();
  let r1=' “Oh, Gosh, I tell you. I do love this here book of poetry by Shel Silverstein so much. It’s called Where the Sidewalk Ends. I like to read it to my granddaughter and we both get a chuckle out of how cute, funny, wholesome the poems are!” ';
  fill("SaddleBrown");
  textWrap(WORD);
  textSize(20);
  text(r1, 610, 1000, 300);
}

function lily() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(1890, 610, 460, 210, 20);
  pop();
  let r2=' “The Truth About Animals by Lucy Cooke is my favorite book EVER. I learned so much fun animal trivia while reading it. Did you know that scientists used to think that Geese were born from barnacles on boats? Or that even today nobody knows how Eels procreate!? My mom says that if I keep learning the animals facts from this book that I could be a Zoologist one day! WOW!” ';
  fill("SaddleBrown");
  textWrap(WORD);
  textSize(20);
  text(r2, 1900, 620, 450);
}
function grandpa() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(2790, 560, 400, 160, 20);
  pop();
  let r3=' “Ho Ho! What adventure lies beneath the cover of this book, if you enjoy sweeping sagas, magic, and tragedy, like a Shakespeare play mixed with Lord of the Rings, try picking up The Name if the Wind by Patrick Rothfuss!” ';
  fill('SaddleBrown');
  textWrap(WORD);
  textSize(20);
  text(r3, 2800, 570, 400);
}
function mom() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(3390, 410, 450, 165, 20);
  pop();
  let r4=' "I really enjoyed the Harry Potter books, but I wanted to read something more intense, more scary, more…. DEADLY! If you are interested in the same thing, then add A Deadly Education by Naomi Novik to your reading list. Plus, the main character is very unique and relatable." "';
  fill('SaddleBrown');
  textWrap(WORD);
  textSize(20);
  text(r4, 3400, 420, 450);
}
function frog() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(1140, 1170, 320, 90, 20);
  pop();
  let r5=' "RIBBIT RIBBIT The Princess and the Frog RIBBIT ribbit croaaak ribbit" ';
  fill('SaddleBrown');
  textWrap(WORD);
  textSize(20);
  text(r5, 1150, 1180, 300);
}
function bird() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(1350, 550, 410, 65, 20);
  pop();
  let r6=' "tweeet tweeeeet Harry Potter tweet tweet TWEET" ';
  fill('SaddleBrown');
  textWrap(WORD);
  textSize(20);
  text(r6, 1360, 560, 400);
}
function cat() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(2140, 90, 280, 65, 20);
  pop();
  let r7=' "Prrrrrr, The Lion King meow meow meow" ';
  fill('SaddleBrown');
  textWrap(WORD);
  textSize(20);
  text(r7, 2150, 100, 300);
}
function rat() {
  push();
  strokeWeight(3);
  stroke("SaddleBrown");
  fill("BlanchedAlmond");
  rect(3570, 110, 300, 135, 20);
  pop();
  let r8=' "The answer to life, the universe, and everything is . . . 42. . . . Read The Hitchhikers Guide to the Galaxy by Douglas Adams" ';
  fill('SaddleBrown');
  textSize(20);
  textWrap(WORD);
  text(r8, 3580, 120, 300);
}


function displayText() {
  let distance = dist(pmouseX, pmouseY, mouseX, mouseY);
  if (distance > 120) { // move fast
    // trigger sound
    // snd.play();
    // generate moving text
    let txt = "";
    let scl = random(0.80, 1.0);
    if (random() < 0.9) {
      txt = "Shhhhh.....";
    } else {
      txt = "HUSH!";
      scl = scl * 10;
    }
    txts.push(new MovingText(mouseX, mouseY, txt, scl));
  } else {
    // move slow
  }
  // update and display the objects
  for (let i = txts.length - 1; i >= 0; i--) {
    let t = txts[i];
    t.update();
    t.display();
    // control the number of objects based in its "isDone" value
    if (t.isDone == true) {
      txts.splice(i, 1); // (index, quantity)
    }
  }
}

class MovingText {
  constructor(x, y, txt, scl) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.scl = scl;
    this.xSpd = random(-0.1, 0.1);
    this.ySpd = random(-0.1, 0.1);
    this.isDone = false; // ***
    this.lifespan = 1.0;
    this.lifeReduction = random(0.01, 0.03);
  }
  update() {
    this.move();
    this.age();
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  age() {
    if (this.lifespan > 0) {
      this.lifespan -= this.lifeReduction;
    } else {
      this.lifespan = 0;
      this.isDone = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    scale(this.scl * this.lifespan);
    textAlign(CENTER);
    textSize(20);
    text(this.txt, 0, 0);
    pop();
  }
}
