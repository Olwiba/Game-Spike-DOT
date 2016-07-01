import $ from 'jquery'
import Controller from './controller'

export default class Router {
  constructor() {
    this.controller = new Controller()
  }

  listen() {
    console.log('listening in the router')

    // this is where you put your event listeners
    // which call controller actions
    $(() => {
      $(document).on('keydown', (event) => {
        switch(event.which){
          case 37:
            console.log('got left')
            this.controller.left()
            break
          case 39:
            console.log('got right')
            this.controller.right()
            break
          default:
        }
      })
    })
  }
}