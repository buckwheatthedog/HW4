var lengths = [];

function setup() {
  createCanvas(200, 200);

  stroke(0);
  for (var y = 0; y < height; y = y + 1) {
    lengths.push(random(width));


  }
}


function draw() {

  background(255);
  
  stroke(0);
  for (var y = 0; y < height; y = y + 1) {
    line(0, y, lengths[y/2], y);
    ellipse(mouseX, mouseY, 40, 40);

  }
}

  //  ellipse(mouseX, mouseY, 40, 40);


  // noStroke();
  // ellipse(mouseX,mouseY,40,40):

