What does the following output to the console?

    (function (){
      'use strict';
      function Foo() { 
        this.foo = function() { 
          setTimeout(function(){ (function() { console.log(this); }()) }, 0);
        } 
      }
      new Foo().foo();
    }())
    
What about this?


    (function (){
      'use strict';
      function Foo() { 
        this.foo = function() { 
          setTimeout(function(){ (console.log(this); }, 0);
        } 
      }
      new Foo().foo();
    }())
