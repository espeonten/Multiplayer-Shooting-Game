//fix direction facing
//put patterns on background and platforms using loop
//add bullets
//add more platforms

var p1, p1I
var p2, p2I
var edges
var platform1, platform2, platform3, platform4, platform5, pGroup

function preload() {
  p1I = loadImage("p1.png")
  p2I = loadImage("p2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  edges = createEdgeSprites()

  p1 = createSprite(width/4, height)
  p1.addImage(p1I)
  p1.scale = 0.3

  p2 = createSprite(width - 300, height)
  p2.addImage(p2I)
  p2.scale = 0.3

  createPlatforms()
}

//runs continuously
function draw() {
  console.log(mouseX, mouseY)
  background("white")

  
  p1.velocityY += 0.2
  p2.velocityY += 0.2

  if(keyDown("a")) {
    p1.x-= 6
  }
  if(keyDown("d")) {
    p1.x+= 6
  }
  if(keyDown("w") && (p1.collide(edges[3]) || p1.collide(pGroup))) {
    p1.velocityY= -13
  }
  

  if(keyDown("left")) {
    p2.x-= 6
  }
  if(keyDown("right")) {
    p2.x+= 6
  }
  if(keyDown("up") && (p2.collide(edges[3]) || p2.collide(pGroup))) {
    p2.velocityY= -13
  }

  collidePlatforms()
  p1.collide(edges)
  p2.collide(edges)
  drawSprites()
}
