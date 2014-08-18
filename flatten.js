##Flatten

Given the following code, write the recursive function flatten.

```javascript
var a = [0,1,2,3,[4,5]];

flatten(a); //returns [0,1,2,3,4,5]
```

```javascript
var result = [];
function flatten(a) {
  for(var x = 0; x < a.length; x++) {
  	//base case (i.e. needs no recursion)
    if(!(a[x] instanceof Array)) {  //base case
      result.push(parseInt(a[x]));
      continue;
    }  

    //recursive step
    flatten(a[x]);
    continue;
  }
}
```
