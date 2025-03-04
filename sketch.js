//add bullets
//add lives

var p1, p1I, p12I
var p2, p2I, p22I
var bullet
var ableToShoot = true
var edges
var platform1, platform2, platform3, platform4, platform5, pGroup
var p1facing = "right"
var p2facing = "left"
var p1healthGreenHealthBar, p1healthRedHealthBar 
var p1healthRedHealthBarWidth = 1
var p2healthGreenHealthBar, p2healthRedHealthBar
var p2healthRedHealthBarWidth = 1
var bGroup
var p1Score = 1
var p2Score = 1

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

  p1healthGreenHealthBar = createSprite(p1.x, p1.y - 150, 120, 20)
  p1healthGreenHealthBar.shapeColor = "green"

  p1healthRedHealthBar = createSprite(p1.x, p1.y - 150, p1healthRedHealthBarWidth, 20)
  p1healthRedHealthBar.shapeColor = "red"


  p2healthGreenHealthBar = createSprite(p2.x -30, p2.y - 150, 120, 20)
  p2healthGreenHealthBar.shapeColor = "green"

  p2healthRedHealthBar = createSprite(p2.x -30, p2.y - 150, p2healthRedHealthBarWidth, 20)
  p2healthRedHealthBar.shapeColor = "red"

  bGroup = new Group()

  createPlatforms()
}

//runs continuously
function draw() {
  console.log(mouseX, mouseY)
  background("white")

  p1healthGreenHealthBar.x = p1.x
  p1healthGreenHealthBar.y = p1.y - 100
  p1healthRedHealthBar.x = p1.x
  p1healthRedHealthBar.y = p1.y - 100

  p2healthGreenHealthBar.x = p2.x
  p2healthGreenHealthBar.y = p2.y - 100
  p2healthRedHealthBar.x = p2.x
  p2healthRedHealthBar.y = p2.y - 100

  p1healthRedHealthBar.width = p1Score
  p2healthRedHealthBar.width = p2Score

  if(keyDown("a")) {
    p1.x-= 6
    p1.changeAnimation("p1 left")
    p1facing = "left"
  }
  if(keyDown("d")) {
    p1.x+= 6
    p1.changeAnimation("p1 right")
    p1facing = "right"
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
    p2facing = "left"
  }
  if(keyDown("right")) {
    p2.x+= 6
    p2.changeAnimation("p2 right")
    p2facing = "right"
  }

  if(frameCount % 10 == 0) {
    ableToShoot=true
  }
  else {
    ableToShoot=false
  }

  if(p1Score == 120) {
    background("green")
    fill("red")
    textSize(75)
    text("Orange Player WINS!", width/2 - 250, height/2)
    pGroup.destroyEach()
    p1.destroy()
    p2.destroy()
    p1healthRedHealthBar.destroy()
    p1healthGreenHealthBar.destroy()
    p2healthRedHealthBar.destroy()
    p2healthGreenHealthBar.destroy()
  }
  if(p2Score == 120) {
    background("green")
    fill("red")
    textSize(75)
    text("Green Player WINS!", width/2 - 250, height/2)
    pGroup.destroyEach()
    p1.destroy()
    p2.destroy()
    p2healthRedHealthBar.destroy()
    p2healthGreenHealthBar.destroy()
    p1healthRedHealthBar.destroy()
    p1healthGreenHealthBar.destroy()
  }
  
  collidePlatforms()
  p1.collide(edges)
  p2.collide(edges)
  p1.velocityY += 0.2
  p2.velocityY += 0.2
  shootBullet()
  if(p1.isTouching(bGroup)) {
    p1Score += 0.5
  }
  if(p2.isTouching(bGroup)) {
    p2Score += 0.5
  }
  drawSprites()
}

function shootBullet() {
  if(keyDown("s") && ableToShoot == true && p1Score < 120 && p2Score < 120) {
    if(p1facing == "right") {
      bullet = createSprite(width/2,height/2, 20, 10)
      bullet.x = p1.x + 100
      bullet.y = p1.y
      bullet.velocityX = 30
      bGroup.add(bullet)
    }
    else if(p1facing == "left") {
      bullet = createSprite(width/2,height/2, 20, 10)
      bullet.x = p1.x - 100
      bullet.y = p1.y
      bullet.velocityX = -30
      bGroup.add(bullet)
    }
  }
  if(keyDown("down") && ableToShoot == true && p2Score < 120 && p1Score < 120) {
    if(p2facing == "right") {
      bullet = createSprite(width/2,height/2, 20, 10)
      bullet.x = p2.x + 100
      bullet.y = p2.y
      bullet.velocityX = 30
      bGroup.add(bullet)
    }
    else if(p2facing == "left") {
      bullet = createSprite(width/2,height/2, 20, 10)
      bullet.x = p2.x - 100
      bullet.y = p2.y
      bullet.velocityX = -30
      bGroup.add(bullet)
    }
  }
}
