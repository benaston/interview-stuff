## Test 6

*Take a look at the following JavaScript:*

```JavaScript

var v = {
    id: 9,
    func: function() {
        console.log(this.id);
    }
}


setTimeout(v.func, 1000);
```

*What is written to the console and why?*
