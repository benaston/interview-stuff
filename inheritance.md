```javascript
function A() {}
A.prototype.foo = function() { console.log('foo'); };

function B() {}
B.prototype = new A();

b.foo(); // 'foo'
b.bar(); // 'bar'
```
