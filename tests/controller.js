import test from 'tape'
import Controller from '../mvc/controller'

test('Controller is created with a model', (t) => {
  const controller = new Controller()
  t.equal(typeof controller.model, 'object', 'controller has model of type object')
  t.end()
})

test('Controller.left() is called with no issues', (t) => {
  const controller = new Controller()
  controller.left()
  t.ok(true, 'controller.left() was called')
  t.end()
})

test('Controller.right() is called with no issues', (t) => {
  const controller = new Controller()
  controller.right()
  t.ok(true, 'controller.right() was called')
  t.end()
})