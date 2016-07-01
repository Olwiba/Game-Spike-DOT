class Player {
	constructor() {
		this.name = "Player 1"
	}

	sayHello() {
		console.log("Hello, My name is ", this.name)
	}
}

const myPlayer = new Player()

myPlayer.sayHello()