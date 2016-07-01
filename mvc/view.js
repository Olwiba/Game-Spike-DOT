export default class View {

  static canvas = document.getElementById("canvas");
  static ctx = canvas.getContext("2d");

  clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  drawPlayer (player) {
    clearCanvas()
    // draw player on canvas
  }


}
