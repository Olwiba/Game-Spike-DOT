export default class View {
  constructor() {
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
    // create player image element
    this.playerImg = document.createElement('img')
    this.playerImg.src = 'images/player.jpeg'
  }

  clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  startView (model) {
    //draw all the things in their starting positions
    drawPlayer(model.player)
  }

  drawPlayer (player) {
    clearCanvas()
    ctx.drawImage(this.playerImg, player.POSITION.x, player.POSITION.y, player.SIZE.width, player.SIZE.height)
  }

}
