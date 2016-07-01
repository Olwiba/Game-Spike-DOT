import test from 'tape'
import Model from '../mvc/model'

test('Random movement is working properly', (t) => {
  const model = new Model()
  var myPos = model.hat.position
  console.log('this is my pos: ', myPos)
  console.log('this is model: ', model.hat.position )
  model.hat.moveRandom()

  console.log('newpos: ', model.hat.position)
  console.log('mypos: ', myPos)
  t.notDeepEqual(myPos, myPos, 'The position has changed..')
  t.ok(true, 'this is ok')
  t.end()
})