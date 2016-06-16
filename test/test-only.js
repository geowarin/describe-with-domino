"use strict";

const describeWithDomino = require('../src/index');
const expect = require('expect');

describe('describeWithDomino - only', function() {

  describeWithDomino.only('only', function() {
    it('This should run', function() {
      expect(true).toBe(true);
    });
  });

  describe('only', function() {
    it('This should run', function() {
      expect(false).toBe(true);
    });
  });

});
