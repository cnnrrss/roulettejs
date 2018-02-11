// TODO: refactor with jest
import test from 'ava';

import { formatIntegerWithCommas } from './format_int';

test('[int] no commas added', (t) => {
    const expected = '100';
    const actual = formatIntegerWithCommas(100);
    t.is(actual, expected);
});

test('[int] one comma added', (t) => {
    const expected = '1,000';
    const actual = formatIntegerWithCommas(1000);
    t.is(actual, expected);
});

test('[int] two commas added', (t) => {
    const expected = '1,000,000';
    const actual = formatIntegerWithCommas(1000000);
    t.is(actual, expected);
});

test('[string] no comma added', (t) => {
    const expected = '100';
    const actual = formatIntegerWithCommas('100');
    t.is(actual, expected);
});

test('[string] one comma added', (t) => {
    const expected = '1,000';
    const actual = formatIntegerWithCommas('1000');
    t.is(actual, expected);
});

test('[string] two commas added', (t) => {
    const expected = '1,000,000';
    const actual = formatIntegerWithCommas('1000000');
    t.is(actual, expected);
});
