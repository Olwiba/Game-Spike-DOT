import test from 'tape'
import Model from '../mvc/model'

test('Random movement of hats', (t) => {
  const model = new Model()
  var myPos = model.hats[0].position
  console.log('this is my pos: ', myPos)
  console.log('this is model: ', model.hats[0].position )
  model.hats[0].moveRandom()

  console.log('newpos: ', model.hats[0].position)
  console.log('mypos: ', myPos)
  t.notDeepEqual(model.hats[0].position, myPos, 'a hat can randomly move its position')
  t.end()
})