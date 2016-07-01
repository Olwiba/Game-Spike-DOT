export default class View {
  constructor() {
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
    // create player image element
    this.playerImg = document.createElement('img')
    console.log(this.playerImg)
    this.playerImg.src = '/images/player.jpeg'
    console.log(this.playerImg)
  }

  clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  drawPlayer (player) {
    clearCanvas()
    ctx.drawImage(this.playerImg, player.POSITION.x, player.POSITION.y, player.SIZE.width, player.SIZE.height)
  }

}
