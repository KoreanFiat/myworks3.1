var colorArray = new Array(9);
var bgColorArray = new Array(9);

function preload () {
    img = loadImage("girl.png");
}

function setup() {
  if (windowWidth / windowHeight > img.width / img.height) {
    createCanvas(windowHeight * img.width / img.height, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth * img.height / img.width);
  }

  img.filter(POSTERIZE, 2);
  
  noStroke();
  cursor(HAND);
  noLoop();
}

function draw() {
  background(255);

  for (var i = 0; i < colorArray.length; i++) {
    bgColorArray[i] = color(random(255), random(255), random(255));
    colorArray[i] = color(random(255), random(255), random(255), random(127.5, 255));
  }

  for (var y = 0; y < 3; y++)
    for (var x = 0; x < 3; x++) {
      var i = 3 * y + x;

      fill(bgColorArray[i]);
      rect(x * width / 3, y * height / 3, width / 3, height / 3);

      tint(colorArray[i]);
      image(img, x * width / 3, y * height / 3, width / 3, height / 3);
    }
}

function mousePressed() {
  draw();
}

function keyTyped() {
  if (key === 'a')
   image(img,0,0);
  if (key ==='b')
   image(img, 100,0);
  if(key ==='c')
   image(img,200,0);
   if(key==='d')
   image(img,300,0);
   if(key==='f')
   image(img,400,0);
   if(key==='z')
   image(img,0,100);
   if(key==='x')
   image(img,100,200);
   if(key==='c')
   image(img,200,300);
   if(key==='v')
   image(img,300,400);
}