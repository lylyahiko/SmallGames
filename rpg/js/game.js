let gameSettings = {
    playerSpeed: 200,
};

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    scene: [ Title, MainGame ]
};

let game = new Phaser.Game(config);