const
  accentColor = 'rgb(233, 30, 99)',
  calcColor1 = 'rgba(76, 175, 80, 0.8)',
  calcColor2 = 'rgba(33, 150, 243, 0.8)';
let
  calc = 2,
  ht1 = 1,
  ht2 = 1;
let history = [];

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240);
  frameRate(60);
  translate(0, height / 2);

  showBars();
  showCalc();
}

function showCalc() {
  push();

  let over = "";
  let under1 = "";
  let under2 = "";
  history.forEach(item => {
    over += item.toString() + " ";
    under1 += (item - 1).toString() + " ";
    under2 += (item + 1).toString() + " ";
  });

  textFont('Courier New');
  textStyle(BOLD);
  textSize(40);
  textAlign(LEFT);

  fill(calcColor1);
  text(ht1.toFixed(15), 0, (-ht1) - 10);
  fill(calcColor2);
  text(ht2.toFixed(15), (round(ht1).toString().length - 1) * 23, (ht2 * 1000) + 35);

  textSize(20);
  textAlign(LEFT);

  stroke(calcColor1);
  fill(calcColor1);
  strokeWeight(3);
  line(0, -height / 2.2 + 10, width, -height / 2.2 + 10);
  strokeWeight(0);
  text(over, 0, -height / 2.2);
  text(under1, 0, (-height / 2.2) + 35);

  stroke(calcColor2);
  fill(calcColor2);
  strokeWeight(3);
  line(0, -height / 3.2 + 10, width, -height / 3.2 + 10);
  strokeWeight(0);
  text(over, 0, -height / 3.2);
  text(under2, 0, (-height / 3.2) + 35);


  textSize(40);
  textAlign(CENTER);

  fill(calcColor1);
  text(ht1.toFixed(8), width / 4.15, height / 3);
  fill(calcColor2);
  text(ht2.toFixed(8), width / 2, height / 3);

  fill(50);
  text('⋅', width / 2.67, height / 3);
  text('=', width / 1.59, height / 3);
  text('⋅', width / 2.67, height / 2.4);
  text('=', width / 1.59, height / 2.4);
  text('2', width / 2, height / 2.4);

  fill(accentColor);
  text((ht1 * ht2).toFixed(8), width / 1.34, height / 3);
  text((ht1 * ht2).toFixed(8), width / 4.15, height / 2.4);
  text(((ht1 * ht2) * 2).toFixed(8), width / 1.34, height / 2.4);

  pop();
}

function showBars() {
  push();
  strokeWeight(0);

  let x = (frameCount % (width - 50));
  if (history.length > 9) {
    history.splice(0, 1);
  }
  history.push(calc);
  ht1 = ht1 * (calc / (calc - 1));
  ht2 = ht2 * (calc / (calc + 1));
  calc += 2;

  fill(calcColor1);
  rect(0, 0, width, -ht1);
  fill(calcColor2);
  rect(0, 0, width, ht2 * 1000);

  pop();
}