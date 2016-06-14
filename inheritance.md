```javascript
function A() {}
A.prototype.foo = function() { console.log('foo'); };

function B() {}
B.prototype.bar = function() { console.log('bar'); };
// ?

var b = new B();
b.foo(); // 'foo'
b.bar(); // 'bar'
```
