function sum(a) {
    return function(b) {
        return a + n;
    };
}

let f = sum(2);
console.log( f(0), f(1), f(2) );

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );