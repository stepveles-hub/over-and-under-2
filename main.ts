scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    truck.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.gameOver(false)
})
let truck: Sprite = null
truck = sprites.create(assets.image`truck1`, SpriteKind.Player)
animation.runImageAnimation(
truck,
assets.animation`truck1 animated`,
100,
true
)
truck.ay = 500
truck.vx = 100
scene.cameraFollowSprite(truck)
