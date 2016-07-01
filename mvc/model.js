export default class Model {
	constructor(name) {
		this.player = new Player(name)
		this.hat = new Hat()
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

	shoot() {

	}

}

class Sock {
	constructor(angle) {
		this.angle = angle,
		this.position = {x: 0, y: 0},
		this.size = {width: 50, height: 50},
		this.isAlive = true
	}

	fired() {

	}
}


class Hat {
	constructor() {
		this.angle = 0,
		this.position = {x: Math.floor((Math.random() - 0.5) * 100), y: Math.floor((Math.random() - 0.5) * 100)},
		this.size = {width: 50, height: 50},
		this.isAlive = true
	}

	moveRandom() {
		const diceRoll = Math.random()
		const xSign = Math.sign(this.position.x)
		const ySign = Math.sign(this.position.y)
		if (diceRoll > 0.3) {
			this.position.x = (Math.abs(this.position.x) - 10) * xSign
			this.position.y = (Math.abs(this.position.y) - 10) * ySign
		} else {
			this.position.x = (Math.abs(this.position.x) - 10) * xSign
			this.position.y = (Math.abs(this.position.y) - 10) * ySign
		}
	}
}