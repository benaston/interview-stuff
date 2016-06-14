```javascript
function A() {}
A.prototype.foo = function() { console.log('foo'); };

function B() {}
// ?

b.foo(); // 'foo'
b.bar(); // 'bar'
```
