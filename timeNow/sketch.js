let state = 2;

function preload() {
  now = loadSound("now.mp3");
  then = loadSound("then.mp3");
}

function setup() {
  createCanvas(600, 500);

  let n = createButton("NOW");
  let t = createButton("THEN");

  //n.color("yellow");
  n.size(200, 130);
  n.position(325, 100);
  t.position(150, 100);

  n.mousePressed(nowSound);
  t.mousePressed(thenSound);
}

function draw() {
  background("teal");
  if (state == 1) {
    let h = hour();
    let m = minute();
    let s = second();

    textSize(100);
    textFont("Helvetica");
    //text(h + ":" + m + ":" + s, 150, height / 2);
    text(s, 150, height / 2);
  }

  if (state == 2) {
  }
}

function nowSound() {
  if (state == 1) {
    state = 2;
  } else {
    state = 1;
  }
  now.play();
  then.stop();
}

function thenSound() {
  if (state == 2) {
    state = 1;
  } else {
    state = 2;
  }

  then.loop();
  now.stop();
}
