import {reduce} from '../src/day-07.js'
import tap from 'tap'

tap.test('example 1', t => {
  t.plan(1)
  const nums = [1, 2, 3, 4]
  const fn = function sum (accum, curr) {
    return accum + curr
  }
  const init = 0
  t.equal(reduce(nums, fn, init), 10)
})

tap.test('example 2', t => {
  t.plan(1)
  const nums = [1, 2, 3, 4]
  const fn = function sum (accum, curr) {
    return accum + curr * curr
  }
  const init = 100
  t.equal(reduce(nums, fn, init), 130)
})

tap.test('example 3', t => {
  t.plan(1)
  const nums = []
  const fn = function sum (accum, curr) {
    return 0
  }
  const init = 25
  t.equal(reduce(nums, fn, init), 25)
})

tap.test('example 4', t => {
  t.plan(1)
  const nums = [1, 2, 3, 4]
  const fn = function sum (accum, curr) {
    return accum + curr
  }
  t.equal(reduce(nums, fn), 10)
})