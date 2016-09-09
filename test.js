let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0), '0 раз');
assert.equal(plural(1), '1 раз');
assert.equal(plural(2), '2 раза');
assert.equal(plural(13), '13 раз');
assert.equal(plural(15), '15 раз');
assert.equal(plural(100), '100 раз');
