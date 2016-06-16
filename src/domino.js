function createDomino() {
  if (typeof document !== 'undefined') {
    return global.document.destroy;
  }

  var domino = require('domino');
  global.window = domino.createWindow('');
  global.document = global.window.document;
  global.navigator = { userAgent: 'domino' };
  var keys = ['window', 'document', 'navigator'];

  Object.keys(global.window).forEach(function (key) {
    keys.push(key);
    global[key] = window[key];
  })

  document.destroy = cleanup;

  function cleanup () {
    keys.forEach(function (key) { delete global[key] });
  }

  return cleanup;
}

module.exports = createDomino;
