/// <reference path="../typings/index.d.ts"/>
(<any>window).PIXI = require('phaser/build/custom/pixi') as any;
(<any>window).p2 = require('phaser/build/custom/p2') as any;
(<any>window).Phaser = require('phaser/build/custom/phaser-split') as any;

class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'phaser.png');
    }

    create() {

        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.2, 0.2);
        this.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
    }

}

window.onload = () => {

    var game = new SimpleGame();

};