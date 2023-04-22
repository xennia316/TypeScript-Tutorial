"use strict";
let greet;
greet = () => {
    console.log("Hello my neighbors");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log("Can you see me? ", c);
};
add(4, 8, '9');
const minus = (a, b) => {
    let c = a - b;
    console.log(c);
    return (c);
};
minus(10, 2);
