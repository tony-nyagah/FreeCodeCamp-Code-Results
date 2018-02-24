/*
Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument).
*/

function findElement(arr, func) {
    return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], function(num) { return num % 2 === 0; })); // 2
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // undefined
