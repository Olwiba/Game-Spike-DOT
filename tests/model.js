import test from 'tape'
import Model from '../mvc/model'

test('Random movement of hats', (t) => {
  const model = new Model()
  
  let attempts = 0
  while (attempts < 100) {
    // clone the position object
    const startPos = JSON.parse(JSON.stringify(model.hats[0].position))

    model.hats[0].moveRandom()

    if (model.hats[0].position.x !== startPos.x && model.hats[0].position.y !== startPos.y) {
      t.pass('a hat randomly moved along both the x and y axis')
      t.end()
      return
    } else if (model.hats[0].position.y !== startPos.y) {
      t.pass('a hat randomly moved along the y axis')
    } else if (model.hats[0].position.x !== startPos.x) {
      t.pass('a hat randomly moved along the x axis')
    }
    attempts++
  }
  
  t.fail('hats do not randomly move along both the x and y axis')

})