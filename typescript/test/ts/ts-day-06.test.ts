import {filter} from '../../src/js/ts-day-06.js'
import * as tap from 'tap'

tap.test("example 1", t => {
  t.plan(1)
  const arr = [0, 10, 20, 30]
  const fn = function greaterThan10(n: number) {
    return n> 10
  }
  const newArray = filter(arr, fn)
  t.strictSame(newArray, [20, 30])
})

tap.test("example 2", t => {
  t.plan(1)
  const arr = [1, 2, 3]
  const fn = function firstIndex(n: number, i:number) {
    return i === 0
  }
  const newArray = filter(arr, fn)
  console.log(`Example 2 newArray = [${newArray}]`)
  t.strictSame(newArray, [1])
})

tap.test("example 3", t => {
  t.plan(1)
  const arr = [-2, -1, 0, 1, 2]
  const fn = function plusOne(n: number) {
    return n + 1
  }
  const newArray = filter(arr, fn)
  t.strictSame(newArray, [-2, 0, 1, 2])
})

tap.test("sparse array", t => {
  t.plan(1)
  const arr = new Array(50)
  arr[10] = 10
  arr[20] = 20
  arr[30] = 30
  const fn = function returnValue(n:number ) {
    return n
  }
  const newArray = filter(arr, fn)
  console.log(`${newArray}`)
  t.strictSame(newArray, [10, 20, 30])

})

