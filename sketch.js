function setup() {
 
  createCanvas(500, 500);
  
  // How many times draw runs every second
  frameRate(60);

  // elements of background
  background ("#56493c");

  //rect
  noStroke;
  fill("#eec245");
  rect(0, 0, width/2, height/2);

  noStroke;
  fill("#3e75b3");
  rect(width/2, 0, width/2, height/2);

  noStroke;
  fill("#622e17");
  rect(width/2, height/2, width/2, height/2);

  //line
  stroke("white");
  strokeWeight(10);
  line (250, 0, 250, 500);

  stroke("#952c1f");
  strokeWeight(10);
  line (250, 250, 250, 500);

  stroke("#5b8836");
  strokeWeight(10);
  line (0, 250, 500, 250);

  //circle
  stroke("black");
  strokeWeight(20);
  fill("white");
  circle(width/2, height/2, 300);
 }
 

 function draw() {

  // move to the center
  translate(width / 2, height / 2);

  // Every frame, it makes a scale of 0.02
  scale(frameCount * 0.02);
 
  //circle
  stroke("#ca9241");
  strokeWeight (3);
  noFill();
  circle(0, 0, 300)

  // Condition of draw function stop
  if (frameCount == 50) {
    noLoop();
    
  //out circle
  stroke("black");
  strokeWeight(20);
  noFill();
  circle(0, 0, 300);
  }
 }