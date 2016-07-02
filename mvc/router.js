import $ from 'jquery'
import Controller from './controller'

export default class Router {
  constructor() {
    this.controller = new Controller()
  }

  listen() {
    // need to be able to access this controller inside callback function
    console.log('listening in the router')

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
          default:
        }
      })
    })
    $(document).ready(() => {
      setInterval(this.controller.tick, 500)
    })
    // var logicTick = window.setInterval(this.controller.tick(), 500)
  }
}