import Model from './model'
import View from './view'

export default class Controller {
  constructor() {
    this.model = new Model('testName')
    //view is only created in the browser
    this.view = new View()
    this.view.startView(this.model)
  }

  tick() {
    // the game logic ticks many times per second
    // hat positions are updated, the player is checked for collisions
    this.model.tick()
    this.view.update(this.model)
  }

  rotateLeft() {
    this.model.player.rotateLeft()
    this.view.update(this.model)
  }

  rotateRight() {
    this.model.player.rotateRight()
    this.view.update(this.model)
  }

}
