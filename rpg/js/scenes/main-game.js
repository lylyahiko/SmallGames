/*
    This scene controls all the functionality for the main game
 */
class MainGame extends Phaser.Scene {
    // Our constructor, set the scene key
    constructor() {
        super({key:"MainGame"});
    }

    // Preload our assets we use for this scene
    preload() {
        // Preload the player (ship)
        this.load.spritesheet('ship',
            'assets/ship.png',
            { frameWidth: 16, frameHeight: 16 }
        );
        // Preload the expolosion for dead player (ship)
        this.load.spritesheet('explosion',
            'assets/explosion.png',
            { frameWidth: 16, frameHeight: 16 }
        );
    }

    // Create all the assets for this scene as well as add functionality
    create() {
        // Create the player, place in dead center
        this.player = this.add.sprite(config.width / 2, config.height / 2, 'ship');
        // Double the size of the sprite since it's super tiny
        this.player.setScale(2);

        // Create the animation for the ship idling
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers('ship'),
            frameRate: 20,
            repeat: -1
        });

        // Play the idle animation
        this.player.play('idle');

        // Create the animation for the ship exploding
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers('explosion'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
    }
}