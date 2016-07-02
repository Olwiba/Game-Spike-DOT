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
      this.update(model)
    })
  }

  update (model) {
    this.clearCanvas()

    // display player
    const player = model.player
    this.ctx.save()
    this.normalisePosition(player)
    this.rotate(player)
    this.ctx.drawImage(this.playerImg, -(player.size.width / 2), -(player.size.height / 2), player.size.width, player.size.height)
    this.ctx.restore()

    // display hats
    model.hats.forEach((hat) => {
      this.ctx.save()
      this.normalisePosition(hat)
      this.ctx.strokeRect(hat.position.x, hat.position.x, hat.size.width, hat.size.width)
      this.ctx.restore()
    })
  }
  /* @param {Object: x,y} positionObj */
  normalisePosition (modelEntity) {
    var x = modelEntity.position.x
    var y = modelEntity.position.y

    // Add on half the canvas size
    x += this.canvas.width / 2
    y += this.canvas.height / 2

    this.ctx.translate(x, y);
  }

  rotate (modelEntity) {
    this.ctx.rotate(modelEntity.angle * Math.PI / 180)
  }
}
