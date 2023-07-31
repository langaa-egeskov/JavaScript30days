import assert from 'node:assert/strict'

const map = function (arr, fn) {
  let returnedArray = []
  for (let i=0; i<arr.length; ++i) {
    returnedArray[i] = fn(arr[i], i)
  }
  // console.log(`${returnedArray}`)
  return returnedArray
}

// tests
function test_01 () {
  function plusone(n) {
    return n+1
  }
  const arr = [1, 2, 3]
  const newArray = map(arr, plusone)
  try {
    // console.log(`newArray: ${newArray}`)
    assert.deepStrictEqual(newArray, [2,3,4])
  } catch(e) {

    console.log('test 1 failed')
    return console.log(`${e}`)
  }
  // return console.log('test 1 passed')
}

function test_02 () {
  function plusI(n, i) {
    return n + i
  }
  const arr = [1, 2, 3]
  const newArray = map(arr, plusI)
  try {
    // console.log(`newArray: ${newArray}`)
    assert.deepStrictEqual(newArray, [1,3,5])
  } catch(e) {
    console.log('test 2 failed')
    return console.log(`${e}`)
  }
  // return console.log('test 2 passed')
}

function test_03 () {
  function constant() {
    return 42
  }
  const arr = [10, 20, 30]
  const newArray = map(arr, constant)
  try {
    // console.log(`newArray: ${newArray}`)
    assert.deepStrictEqual(newArray, [42, 42, 42])
  } catch(e) {
    console.log('test 3 failed')
    return console.log(`${e}`)
  }
  // return console.log('test 3 passed')
}

test_01()
test_02()
test_03()