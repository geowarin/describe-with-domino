# describe-with-domino

Wraps mocha's describe function with [domino](https://github.com/fgnass/domino) (a lightweight alternative to JSDom) and cleans up globals afterwards.

Works great with [enzyme](https://github.com/airbnb/enzyme/).

## Usage

```js
"use strict";

const describeWithDomino = require('describe-with-domino');
const expect = require('expect');

describeWithDomino('this test has access to the dom', function() {
  it('should access to the dom', function() {
    expect(document).toExist();

    var div = document.createElement('div');
    div.innerHTML = 'hello';
    document.body.appendChild(div);
    expect(document.querySelector('body').innerHTML).toEqual('<div>hello</div>');
  })
});

```
