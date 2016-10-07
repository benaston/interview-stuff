function add(...args) {       
    var tmp = add.bind(null, ...args);
    tmp.value = () => sum(...args);
    return tmp;
}

function add(...args) {       
    var tmp = partial(add, ...args);
    tmp.value = () => sum(...args);
    return tmp;
}

function partial(fn, ...args) {
    return function(...innerArgs) {
         return fn.apply(this, args.concat(innerArgs));
    }
}

function sum(...args) {
    return args.reduce(function(p,c) {
      return p+=c;
    }, 0);
}

console.assert(add(1, 2)(3)(4).value(), '1+2+3+4 should be 10');

function add(...args) {
    var tmp = add.bind(null, ...args);
    tmp.value = () => args.reduce((p,c) => p+c, 0);
    return tmp;
}

// function add(a, b) {
//     var input = [];
//     var args = input.slice.call(arguments);
//     var count = 0;
//     for (var i = 0; i < args.length; i++) {
//         count += args[i];
//     }
//     return {
//         value: function() {
//             return count
//         }
//     };
// }

// console.assert(add(1, 2) === 3, '1+2 should be 3', 'foo');
// console.assert(add(1, 2, 3) === 6, '1+2+3 should be 6');
// console.assert(add(1, 2, 3, 4) === 10, '1+2+3+4 should be 10');
// console.assert(add(1, 2, 3, 4, 5) === 15, '1+2+3+4+5 should be 15');

// console.assert(add(1, 2, 3).value() === 6, '1+2+3 should be 6');
// console.assert(add(1, 2, 3).add(4).value() === 10, '1+2+3+4 should be 10');
// console.assert(add(1, 2, 3).add(4).add(5).value() === 15, '1+2+3+4+5 should be 15');

// console.assert(add(1, 2).isPositive(), '1+2 should be positive');
// console.assert(!(add(1, -3).add(1).isPositive()), '1-2 should be negative');

// console.assert(add(1, 2)(3)(4).value(), '1+2+3+4 should be 10');

// Now change the code so that the addition of any of the same arguments are performed only once


var sumPair = memoize(function(a, b) {
    return a+b;
});

// function add(...args) {
//     var tmp = add.bind(null, ...args);
//     tmp.value = () => args.reduce((p,c) => p+c, 0);
//     return tmp;
// }

var add = memoize(function(...args) {
    var tmp = add.bind(null, ...args);
    tmp.value = () => sum(...args);
    return tmp;
});

function sum(...args) {
    return args.reduce((p,c) => p + c, 0);
}

function memoize(fn) {
    var map = {};
    return function inner() {
        console.trace('inner', arguments)
        var key = toKey(...arguments);
        var value = map[key];
        if(value != null) {
            console.trace('using memoized value for', key, value);
            return value;
        }
        
        var result = fn.apply(this, arguments);
        map[key] = result;
        return result;
    }
}

function toKey(...args) {
    return args.toString();
}

console.assert(add(1, 2)(1, 2).value(), '1+2+3+4 should be 10');
console.assert(add(1, 2)(1, 2).value(), '1+2+3+4 should be 10');
