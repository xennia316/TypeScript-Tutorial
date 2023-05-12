// let greeting: Function

// example1
let greeting: (a:string, b:string) => void;

greeting =  (name: string, words: string) => {
    console.log(`${name} says ${words}`);
}

// example2 
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, operation: string): number => {
    if(operation === "add"){
        return (numOne + numTwo)
    }
    else if (operation === "subtract"){
        return numOne - numTwo;
    }
    else if(operation === "multiply"){
        return (numOne * numTwo)
    }
    else if(operation === "divide"){
        return (numOne / numTwo)
    }
    else{
        return 0
    }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
