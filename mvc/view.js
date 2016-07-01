export default class View {

  var canvas = document.getElementById("canvas")
  var ctx = canvas.getContext("2d")

  function clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawPlayer (player) {
    clearCanvas()
    // draw player on canvas
  }


}
