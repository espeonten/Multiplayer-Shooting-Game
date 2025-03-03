function createPlatforms() {
    platform1 = createSprite(width/2, height / 4, 400, 50)
    platform2 = createSprite(width/3, height / 2.5, 400, 50)
    platform3 = createSprite(width/ 1.5, height / 2.5, 400, 50)
    platform4 = createSprite(width - 200, height / 1.5, 400, 50)
    platform5 = createSprite(width - 1600, height / 1.5, 400, 50)

    pGroup = new Group()
    pGroup.add(platform1)
    pGroup.add(platform2)
    pGroup.add(platform3)
    pGroup.add(platform4)
    pGroup.add(platform5)
}

function collidePlatforms() {
    p1.collide(pGroup)
    p2.collide(pGroup)
}