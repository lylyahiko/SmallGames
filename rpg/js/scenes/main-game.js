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
        this.player = this.physics.add.sprite(config.width / 2, config.height / 2, 'ship');
        // Double the size of the sprite since it's super tiny
        this.player.setScale(2);

        // Prevent player from leaving bounds of screen
        this.player.setCollideWorldBounds(true);

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

        // Lets allow this guy to move around
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    // Update function to execute stuff as the game happens
    update() {
        this.movePlayerManager();
    }


    // Simplified movement manager with a crap ton of if conditions. This will need to be fixed in the future
    movePlayerManager() {
        if (this.cursorKeys.up.isDown && this.cursorKeys.right.isDown) { // If Up AND Right
            this.player.setVelocityY(-gameSettings.playerSpeed);
            this.player.setVelocityX(gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown && this.cursorKeys.right.isDown) { // If Down AND Right
            this.player.setVelocityY(gameSettings.playerSpeed);
            this.player.setVelocityX(gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown && this.cursorKeys.left.isDown) { // If Down AND Left
            this.player.setVelocityY(gameSettings.playerSpeed);
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.up.isDown && this.cursorKeys.left.isDown) { // If Up AND Left
            this.player.setVelocityY(-gameSettings.playerSpeed);
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.left.isDown) { // If Left
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.right.isDown) { // If Right
            this.player.setVelocityX(gameSettings.playerSpeed);
        } else if (this.cursorKeys.up.isDown) { // If Up
            this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown) { // If Down
            this.player.setVelocityY(gameSettings.playerSpeed);
        } else { // Otherwise stop player
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
        }
    }
}