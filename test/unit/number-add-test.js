const assert = require('assert');
require('babel-register');
describe('function add  test ', () => {
    it('entry', () => {
        const add = require('../../src/index');
        assert.equal(add.default('1', '2'), '3');
        assert.equal(add.default('2', '3'), '5');
    });
})