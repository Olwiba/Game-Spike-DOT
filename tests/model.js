import test from 'tape'
import Model from '../mvc/model'

test('Random movement is working properly', (t) => {
  const model = new Model()
  const myPos = {
    x: model.hat.position.x,
    y: model.hat.position.y
  }
  model.hat.moveRandom()
  t.notDeepEqual(myPos, model.hat.position, 'The position has changed..')
  t.ok(true, 'this is ok')
  t.end()
})