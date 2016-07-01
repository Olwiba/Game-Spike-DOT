export default class Model {
	constructor() {
		this.player = new Player
	}
}

class Player {
	constructor(name) {
		this.playerName = name,
		this.angle = 0,
		this.position = {x: 0, y: 0},
		this.size = {width: 100, height: 100},
		this.isAlive = true
	}

	rotateLeft() {
		this.angle = (this.angle - 10) % 360
	}

	rotateRight() {
		this.angle = (this.angle + 10) % 360
	}

} 