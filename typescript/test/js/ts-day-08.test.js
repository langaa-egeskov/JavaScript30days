import { argumentsLength } from '../../src/js/ts-day-08.js';
import * as tap from 'tap';
tap.test('example1', t => {
    t.plan(1);
    const input = [5];
    const expect = 1;
    t.same(argumentsLength(...input), expect);
});
tap.test('example2', t => {
    t.plan(1);
    const input = [{}, null, "3"];
    const expect = 3;
    t.same(argumentsLength(...input), expect);
});
