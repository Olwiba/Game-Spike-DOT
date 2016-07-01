export default class View {
  constructor() {
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
    // create player image element
    this.playerImg = new Image()
    this.playerImg.src = '/images/player.jpeg'
  }

  clearCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  startView (model) {
    //draw all the things in their starting positions
    this.playerImg.addEventListener('load', () => {
      this.drawPlayer(model.player)
      console.log('view started')
    })
  }

  drawPlayer (player) {
    console.log('draw player', Date.now(), 'angle:', player.angle)
    this.clearCanvas()

    player = this.normalisePosition(player)
    this.prepareRotation(player)
    this.ctx.drawImage(this.playerImg, player.position.x, player.position.y, player.size.width, player.size.height)
    // this.endRotation(player)
  }
  /* @param {Object: x,y} positionObj */
  normalisePosition (model) {
    // clone model
    var model = Object.create(model)

    // var model = JSON.parse(JSON.stringify(model))
    var x = model.position.x
    var y = model.position.y

    // Add on half the canvas size
    x += this.canvas.width / 2
    y += this.canvas.height / 2

    // Take away half the size of the object begin rendered
    x -= model.size.width / 2
    y -= model.size.height / 2

    // update object position
    model.position = {x: x, y: y}
    return model
  }

  prepareRotation (model) {
    // translate canvas to model's center
    console.log('translate positively:', model.position)
    this.ctx.translate(model.position.x + model.size.width/2, model.position.y + model.size.height/2)
    this.ctx.rotate(model.angle * Math.PI / 180)
    // this.ctx.restore()
    this.ctx.translate(-(model.position.x + model.size.width/2), -(model.position.y + model.size.height/2))
  }

  endRotation (model) {
    // translate canvas back to where it started
    console.log('translate negatively:', model.position)

    this.ctx.rotate(-model.angle * Math.PI / 180)
  }
}
