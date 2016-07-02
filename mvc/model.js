export default class Model {
	constructor(name) {
		this.player = new Player(name)
		this.hats = []
	}

	createRandomHat() {
		console.log('new hat')
		this.hats.push(new Hat())
	}

	tick() {
		if (Math.random() < 0.03) {
			this.createRandomHat()
		}
		this.hats.forEach((hat) => {
			hat.moveRandom()
		})
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
		if (Math.random() > 0.3) {
			// 70%
			switch (this.position) {
				case (this.position.x > 0):
					this.position.x -= 10
					break;
				case (this.position.x < 0):
					this.position.x += 10
					break;
				}

			switch (this.position) {
				case (this.position.y > 0):
					this.position.y -= 10
					break;
				case (this.position.y < 0):
					this.position.y += 10
					break; 
				}

		} else {

			if (Math.random() > 0.5) {

				switch (this.position) {
					case (this.position.y > 0):
						this.position.y -= 10
						break;
					case (this.position.y < 0):
						this.position.y += 10
						break; 
					}

			} else {

				switch (this.position) {
					case (this.position.x > 0):
						this.position.x -= 10
						break;
					case (this.position.x < 0):
						this.position.x += 10
						break;
				}

			}
		}
	}
}