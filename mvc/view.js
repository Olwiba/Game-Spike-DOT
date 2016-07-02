export default class View {
  constructor() {
    this.canvas = document.getElementById("canvas")
    this.ctx = canvas.getContext("2d")
    // create player image element
    this.playerImg = new Image()
    this.playerImg.src = '/images/player.jpeg'
    // create a hat image element
    this.hatImg = new Image()
    this.hatImg.src = '/images/hat1.png'
    // create an array of hat images
    this.hatImgs = new Array(4)
    this.hatImgs.fill(undefined) // for .map to work, array elements must contain something
    this.hatImgs = this.hatImgs.map(() => {return new Image()})
    this.hatImgs = this.hatImgs.map((img, index) => {
      img.src = '/images/hat' + (index + 1) + '.png'
      return img
    })
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
      this.ctx.drawImage(this.hatImgs[Math.floor(Math.random()*4)], hat.position.x, hat.position.x, hat.size.width, hat.size.width)
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
