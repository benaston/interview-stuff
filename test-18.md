What does the following output to the console?

```javascript
(function (){
  'use strict';
  function Foo() { 
    this.foo = function() { 
      setTimeout(function(){ (function() { console.log(this); }()) }, 0);
    } 
  }
  new Foo().foo();
}())
```

What about this?

```javascript
(function (){
  'use strict';
  function Foo() { 
    this.foo = function() { 
      setTimeout(function(){ (console.log(this); }, 0);
    } 
  }
  new Foo().foo();
}())
```
