class Title extends Phaser.Scene {
    constructor() {
        super({key:"Title"});
    }

    preload() {
        this.load.image('background', 'assets/sky.png');
    }

    create() {
        this.image = this.add.image(400, 300, 'background');
    }
}