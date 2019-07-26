/*
    This scene controls all the functionality for the title
 */
class Title extends Phaser.Scene {
    // Our constructor, set the scene key
    constructor() {
        super({key:"Title"});
    }

    // Preload our assets we use for this scene
    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('star', 'assets/star.png');
    }

    // Create all the assets for this scene as well as add functionality
    create() {
        // Our sky is our background
        this.sky = this.add.image(0, 0, 'sky');
        this.sky.setOrigin(0, 0);

        // Add welcome and continue text
        this.welcome = this.add.text(0,0, "Welcome to some RPG Game!", {font:"40px Impact"});
        this.continue = this.add.text(150,300, "Press Enter or Click Me To Continue", {font:"40px Impact"});

        // This controls the weird movement of the welcome text
        this.tweens.add({
            targets: this.welcome,
            x:200,
            y:250,
            duration:2000,
            ease: "Elastic",
            easeParams: [1.5, 0.5],
            delay: 1000
        }, this);

        // If we press the enter key then start the game (main-game scene)
        this.input.keyboard.on('keyup', function(event) {
            if (event.key === "Enter") {
                this.scene.start("MainGame");
            }
        }, this);

        // Set the continue text to be interactive
        this.continue.setInteractive();
        // If we click the text start the main-game scene
        this.continue.on('pointerdown', () => {
            this.scene.start("MainGame");
        })
    }

    // Check for updates
    update() {
        // If we click anywhere that's not the text create stars cause why not
        if (game.input.mousePointer.isDown) {
            let physicsImage = this.physics.add.image(game.input.mousePointer.x, game.input.mousePointer.y, "star");
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-200, 200), -300);
        }
    }
}