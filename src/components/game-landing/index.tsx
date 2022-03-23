import phaserGame from "config/phaser";
import Basic from "scenes/basic";

const GameLanding = () => {
	const handleClick = () => {
		const scene = phaserGame.scene.keys.basic as Basic;
		scene.create();
	};

	return (
		<>
			<button className={"relative"} onClick={handleClick}>
				Click me
			</button>
		</>
	);
};

export default GameLanding;
