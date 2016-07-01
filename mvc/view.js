export default class View {
  constructor() {
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
    // create player image element
    this.playerImg = new Image()
    this.playerImg.src = '/images/player.jpeg'
  }

  clearCanvas () {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  startView (model) {
    //draw all the things in their starting positions
    this.playerImg.addEventListener('load', () => {
      this.drawPlayer(model.player)
    })
    console.log('view started')
  }

  drawPlayer (player) {
    console.log('draw player', Date.now())
    this.clearCanvas()
    // this.ctx.fillRect(10,10,200,200)
    this.ctx.drawImage(this.playerImg, player.position.x, player.position.y, player.size.width, player.size.height)
  }

}
