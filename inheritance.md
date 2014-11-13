#Inheritance in JS

function A() {}

function B() {}

##Basic 1

    B.prototype = new A(); 

This works, but has the limitation that the constructor of the base is invoked before instanitation of the child.

##Basic 2

    B.prototype = A.prototype; 
  

