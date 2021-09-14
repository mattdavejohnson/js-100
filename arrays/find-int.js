// Write a findIntegers function that takes an array argument and returns
// an array containing only integers from the input array

function findIntegers(array) {
  return array.filter(int => Number.isInteger(int));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);