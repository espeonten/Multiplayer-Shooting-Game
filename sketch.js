//fix direction facing
//put patterns on background and platforms using loop
//add bullets

var p1, p1I, p12I
var p2, p2I, p22I
var edges
var platform1, platform2, platform3, platform4, platform5, pGroup

function preload() {
  p1I = loadAnimation("p1.png")
  p2I = loadAnimation("p2.png")
  p12I = loadAnimation("p1_2.png")
  p22I = loadAnimation("p2_2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  edges = createEdgeSprites()

  p1 = createSprite(width/4, height)
  p1.addAnimation("p1 right", p1I)
  p1.addAnimation("p1 left", p12I)
  p1.scale = 0.3

  p2 = createSprite(width - 300, height)
  p2.addAnimation("p2 left", p2I)
  p2.addAnimation("p2 right", p22I)
  p2.scale = 0.3

  createPlatforms()
}

//runs continuously
function draw() {
  console.log(mouseX, mouseY)
  background("white")


  if(keyDown("a")) {
    p1.x-= 6
    p1.changeAnimation("p1 left")
  }
  if(keyDown("d")) {
    p1.x+= 6
    p1.changeAnimation("p1 right")
  }
  if(keyDown("w") && (p1.collide(edges[3]) || p1.collide(pGroup))) {
    p1.velocityY= -13
  }
  

  
  if(keyDown("up") && (p2.collide(edges[3]) || p2.collide(pGroup))) {
    p2.velocityY= -13
  }
  if(keyDown("left")) {
    p2.x-= 6
    p2.changeAnimation("p2 left")
  }
  if(keyDown("right")) {
    p2.x+= 6
    p2.changeAnimation("p2 right")
  }

  collidePlatforms()
  if(p1.isTouching(edges)) {
    p1.velocityY = 0
    p1.velocityX = 0
  }
  //p1.collide(edges)
  p2.collide(edges)
  p1.velocityY += 0.2
  p2.velocityY += 0.2
  drawSprites()
}
