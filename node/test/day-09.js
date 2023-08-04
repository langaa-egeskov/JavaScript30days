// test
import {once} from '../src/day-09.js'
import tap from 'tap'

tap.test('example 1', t => {
    t.plan(2)
    const fn = (a, b, c) =>  (a + b + c)
    const calls = [[1,2,3], [2,3,6]]
    const onceFn = once(fn)
    t.same(onceFn(...calls[0]), 6, 'first call')
    t.same(onceFn(...calls[1]), undefined, 'second call')
})

tap.test('example 2', t => {
    t.plan(3)
    const fn = (a, b, c) => (a * b * c)
    const calls = [[5, 7, 4], [2, 3, 6], [4, 6, 8]]
    const onceFn = once(fn)
    t.same(onceFn(...calls[0]), 140, 'first call')
    t.same(onceFn(...calls[1]), undefined, 'second call')
    t.same(onceFn(...calls[2]), undefined, 'third call')
})