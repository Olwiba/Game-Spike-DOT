import Model from './model'
import View from './view'

export default class Controller {
  constructor() {
    this.model = new Model('testName')
    //view is only created in the browser
    this.view = new View()
    this.view.startView(this.model)
  }

  left() {
    console.log('controller got left')
    this.model.player.rotateLeft()
    this.view.drawPlayer(this.model.player)
  }

  right() {
    console.log('controller got right')
    this.model.player.rotateRight()
    this.view.drawPlayer(this.model.player)
  }

}
