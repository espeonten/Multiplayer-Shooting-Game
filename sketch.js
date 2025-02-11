var p1, p1I
var p2, p2I

function preload() {
  p1I.loadImage("p1.png")
  p2I.loadImage("p2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");

  p1 = createSprite(width/2, height/2)
  p1.addImage(p1I)

  edges = createEdgeSprites()
  
}

//runs continuously
function draw() {
  console.log(mouseX, mouseY)
  background("white")

  drawSprites()
}