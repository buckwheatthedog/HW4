var x = [];
var y = [];
var vx = [];
var vy = [];
var dx = [];
var dy = [];
var c = [];


function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < 10; i++){
  x.push(random(600));
  y.push(random(600))
  vx.push(random(2));
  vy.push(random(2));
  dx.push(0);
  dy.push(0);
  c.push(random(360));

}
}

//   x = width/2;
//   y = height/2;
//   vx = 0;
//   vy = 0;
// }

function draw() {
  background(255);

  for (var i = 0; i < 10; i++) {
    colorMode(HSB,100,100);
    fill(c[i],100,100);
    noStroke();
    ellipse(x[i], y[i], 40, 40);

    x[i] = x[i] + vx[i];
    y[i] = y[i] + vy[i];

    // var d = dist(x, y, mouseX, mouseY) / 10; // turns out this line is optional! 

    dx[i] = mouseX - x[i];
    dy[i] = mouseY - y[i];

    vx[i] = dx[i] / 10;
    vy[i] = dy[i] / 10;
  }
}
