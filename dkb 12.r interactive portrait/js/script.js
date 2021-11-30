let cam;
let img;

function setup() {
  createCanvas(640, 480);
  background(220);

  cam = createCapture(VIDEO); // 640 * 480
  cam.hide();
  img = createImage(width, height); // a blank image
}

function draw() {
  cam.loadPixels();
  img.loadPixels();
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let index = (x + y * cam.width) * 4;
      // cam
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let avg = (r + g + b) / 3;
      // img
      if (avg > 80) {
        // white!
        img.pixels[index + 0] = r;
        img.pixels[index + 1] = g;
        img.pixels[index + 2] = b;
        img.pixels[index + 3] = 255;
      } if (avg < 200) {
        img.pixels[index + 2] = r;
        img.pixels[index + 4] = g;
        img.pixels[index + 6] = b;
        img.pixels[index + 8] = 255;
      } else {
        // black!
        img.pixels[index + 0] = 0;
        img.pixels[index + 1] = 0;
        img.pixels[index + 2] = 0;
        img.pixels[index + 3] = 255;
      }
    }
  }
  img.updatePixels();

  image(img, 0, 0);
}
