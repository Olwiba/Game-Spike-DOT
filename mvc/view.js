export default class View {
  constructor() {
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
  }

  // create player image element
  this.player = document.createElement('img')

  clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  drawPlayer (player) {
    clearCanvas()
    // draw player on canvas

  }
}
