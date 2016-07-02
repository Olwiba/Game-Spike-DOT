import test from 'tape'
import Model from '../mvc/model'

test('Random movement of hats', (t) => {
  const model = new Model()
  // clone the position object
  const startPos = JSON.parse(JSON.stringify(model.hats[0].position))
  console.log('this is my pos: ', startPos)
  console.log('this is model: ', model.hats[0].position )
  model.hats[0].moveRandom()

  console.log('newpos: ', model.hats[0].position)
  console.log('startPos: ', startPos)
  t.notEqual(model.hats[0].position.x, startPos.x, 'a hat can randomly move along the x axis')
  t.notEqual(model.hats[0].position.y, startPos.y, 'a hat can randomly move along the y axis')
  t.end()
})