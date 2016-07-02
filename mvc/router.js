import $ from 'jquery'
import Controller from './controller'

export default class Router {
  constructor() {
    this.controller = new Controller()
  }

  listen() {
    console.log('listening in the router')

    let logicTick;

    // this is where you put your event listeners
    // which call controller actions
    $(() => {
      $(document).on('keydown', (event) => {
        switch(event.which){
          case 37:
            this.controller.rotateLeft()
            break
          case 39:
            this.controller.rotateRight()
            break
          case 80:
            clearInterval(logicTick)
            break
          default:
            console.log(event.which)
        }
      })
    })

    $(document).ready(() => {
      logicTick = setInterval(() => {this.controller.tick()}, 100)
    })
    // var logicTick = window.setInterval(this.controller.tick(), 500)
  }
}