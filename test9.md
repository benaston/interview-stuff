What is printed to the console?

```javascript
var RedObject = {
    color: "red",
    getColor:  function(){
        return 'Color: ' + this.color + '. Ctor: ' + this.constructor.name; + '.';
    }
}

function BlueObject() {
    this.color = "blue";
    this.getColor = RedObject.getColor;
	return this;
}

function foo(){    
   return new BlueObject().getColor();        
}

console.log(foo());

```
	      
Now delete the "new" inside function "foo". What is printed to the console?
