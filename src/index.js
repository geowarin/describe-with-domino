var domino = require('./domino');

function describeWithDomino(a, b) {
  describe('(uses domino)', () => {
    var cleanup;
    before(() => cleanup = domino());
    describe(a, b);
    after(() => cleanup());
  });
}

function only(a, b) {
  describe('(uses domino)', () => {
    var cleanup;
    before(() => cleanup = domino());
    describe.only(a, b);
    after(() => cleanup());
  });
}

function skip(a, b) {
  var cleanup;
  before(() => cleanup = domino());
  describe.skip(a, b);
  after(() => cleanup());
}

module.exports = describeWithDomino;
describeWithDomino.only = only;
describeWithDomino.skip = skip;
