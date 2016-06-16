"use strict";

const describeWithDomino = require('../src/index');
const expect = require('expect');

describe('describeWithDomino', function() {

  describeWithDomino('describeWithDomino - default', function() {
    it('should access to the dom', function() {
      expect(document).toExist();

      var div = document.createElement('div');
      div.innerHTML = 'hello';
      document.body.appendChild(div);
      expect(document.querySelector('body').innerHTML).toEqual('<div>hello</div>');
    })
  });

  describeWithDomino.skip('describeWithDomino - skip', function() {
    it('should not be called', function() {
      expect(false).toBe(true);
    })
  });
});
