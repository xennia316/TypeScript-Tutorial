var names = ['Amehmbo', 'Ngewung', 'Sonia'];
names.unshift("Aya");
// names.push(2);
//  Error message for the above line: Argument of type 'number' is not assignable to parameter of type 'string'. 5 names.push(2);
console.log(names);
var fruits = {
    best: "mango",
    common: "pineapple",
    cheap: 100
};
// fruits = {
//     best: "mango",
//     common: "papaya"
// }
// fruits = {
//     best: "mango",
//     mostCommon: "pineapple",
//     cheap: 100
// }
// Arrays
// let firstArray: string[];
// firstArray.push('no');
// console.log(firstArray)
var sampleArray = [];
sampleArray.push('yes');
console.log(sampleArray);
// Union types
var mixedArrays = [];
mixedArrays.push("Heyyyy");
mixedArrays.push(12);
// mixedArrays.push(false)
// Different ways to declare the object type: 
// You can use the direct declaration method like this:
var ninja1 = {};
// Or explicitly
var ninja2;
// Type any 
var age = 1;
age = "Hello";
console.log("My age is ", age);
age = true;
console.log(age);
