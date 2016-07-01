import Model from './model'
import View from './view'

export default class Controller {
  constructor() {
    this.model = new Model('testName')
    this.view = new View()
  }

  left() {
    console.log('controller got left')
    this.model.Player.rotateLeft()
    this.view.render(this.model)
  }

  right() {
    console.log('controller got right')
    this.model.Player.rotateRight()
    this.view.render(this.model)
  }

}