function setup() {
    createCanvas(400, 400);
    background("refd");
  }
  
  function draw() {
    stroke("yellow");
    fill("black");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  