class Title extends Phaser.Scene {
    constructor() {
        super({key:"Title"});
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('star', 'assets/star.png');
    }

    create() {
        this.sky = this.add.image(400, 300, 'sky');

        this.welcome = this.add.text(0,0, "Welcome to some RPG Game!", {font:"40px Impact"});
        this.continue = this.add.text(200,300, "Press Enter To Continue", {font:"40px Impact"});

        this.tweens.add({
            targets: this.welcome,
            x:200,
            y:250,
            duration:2000,
            ease: "Elastic",
            easeParams: [1.5, 0.5],
            delay: 1000
        }, this);

        this.input.keyboard.on('keyup', function(event) {
            if (event.key === "Enter") {
                this.scene.start("MainGame");
            }
        }, this);
    }

    update() {
        if (game.input.mousePointer.isDown) {
            let physicsImage = this.physics.add.image(game.input.mousePointer.x, game.input.mousePointer.y, "star");
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-200, 200), -300);
        }
    }
}