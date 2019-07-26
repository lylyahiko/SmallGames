class MainGame extends Phaser.Scene {
    constructor() {
        super({key:"MainGame"});
    }

    preload() {

    }

    create() {
        this.text = this.add.text(0,0, "Build some gameplay!!", {font:"40px Impact"});
    }
}