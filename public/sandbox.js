"use strict";
// let greeting: Function
// example1
let greeting;
greeting = (name, words) => {
    console.log(`${name} says ${words}`);
};
// example2 
let calc;
calc = (numOne, numTwo, operation) => {
    if (operation === "add") {
        return (numOne + numTwo);
    }
    else if (operation === "subtract") {
        return numOne - numTwo;
    }
    else if (operation === "multiply") {
        return (numOne * numTwo);
    }
    else if (operation === "divide") {
        return (numOne / numTwo);
    }
    else {
        return 0;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
