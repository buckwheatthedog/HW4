//var x1, y1, vx1, vy1;
//var x2, y2, vx2, vy2;

var x = [];
var y = [];
var vx = [];
var vy = [];

var numCircles = 20;

function setup() {
  createCanvas(600, 600);


  for (var i = 0; i < numCircles; i = i + 1) {

    x.push(random(width));
    y.push(50+random(-20,20));
    vx.push(random(2));
    vy.push(random(-3,3));

    }
}


    //   // initialize circle 1
    //   x1 = random(width);
    //   y1 = 50;
    //   vx1 = random(2);
    //   vy1 = 0;

    //   // initialize circle 2
    //   x2 = random(width);
    //   y2 = 50;
    //   vx2 = random(2);
    //   vy2 = 0;
    // }


    function draw() {
      background(255);
      for (var i = 0; i < numCircles; i = i + 1) {

        // draw circle 1
        ellipse(x[i], y[i], 20, 20);

        // draw circle 2
//        ellipse(x[i], y[i], 20, 20);

        x[i] = x[i] + vx[i];
        y[i] += vy[i];

        // // move circle 1
        // x1 += vx1; // equivalent to x1 = x1 + vx1;
        // y1 += vy1;

        // // move circle 2
        // x2 += vx2;
        // y2 += vy2;

        vy[i] += .5;
        // gravity circle 1
//       vy1 += 0.5;

        // gravity circle 2
//        vy2 += 0.5;


        // bounce circle 1
        if (x[i] + 10 >= width) {
          vx[i] = -abs(vx[i]);
        }
        if (x[i] - 10 <= 0) {
          vx[i] = abs(vx[i]);
        }
        if (y[i] + 10 >= height) {
          vy[i] = -abs(vy[i]);
          vy[i] = vy[i] * 0.75; // dampen -- lose some speed on every bounce!
        }
        if (y[i] - 10 <= 0) {
          vy[i] = abs(vy[i]);
        }

        // bounce circle 2
        if (x[i] + 10 >= width) {
          vx[i] = -abs(vx[i]);
        }
        if (x[i] - 10 <= 0) {
          vx[i] = abs(vx[i]);
        }
        if (y[i] + 10 >= height) {
          vy[i] = -abs(vy[i]);
          vy[i] = vy[i] * 0.75; // dampen -- lose some speed on every bounce!
        }
        if (y[i] - 10 <= 0) {
          vy[i] = abs(vy[i]);
        }
      }
    }
