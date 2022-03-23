import Phaser from "phaser";
import Basic from "scenes/basic";

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 300 },
			debug: false,
		},
	},
	scene: [Basic],
};

var game = new Phaser.Game(config);

export default game;
