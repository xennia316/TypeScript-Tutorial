var myName = 'Sonia the great';
console.log("This is who I am: ", myName);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log("I am ", input.innerHTML, "and my class name is", input.className);
});
