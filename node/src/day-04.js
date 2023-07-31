import {strict as assert} from 'node:assert';

function createCounter(init) {
  let current = init
  return {
    increment: function () {
      return ++current
    }, 
    decrement: function () {
      return --current
    }, 
    reset: function () {
      return current = init
    } }
}

// tests for example 1
function tests_1 () {
  try {
    const counter = createCounter(5)
    assert.strictEqual(counter.increment(), 6)
    assert.strictEqual(counter.reset(), 5)
    assert.strictEqual(counter.decrement(), 4)
  } catch (e) {
    console.log('failed first tests')
    console.log('Error: ', e)
    process.exit(1)
  }
  return console.log('passed first tests')
}

// tests for example 2
function tests_2 () {
  try {
    const counter = createCounter(0)
    assert.strictEqual(counter.increment(), 1)
    assert.strictEqual(counter.increment(), 2)
    assert.strictEqual(counter.decrement(), 1)
    assert.strictEqual(counter.reset(), 0)
    assert.strictEqual(counter.reset(), 0)
  } catch(e) {
    console.log('failed second tests')
    console.log('Error: ', e)
    process.exit(1)
  }
  return console.log('passed second tests')
}

tests_1()
tests_2()

