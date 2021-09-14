// Use reduce to compute the sum of the squares of all numbers in an array

function sumOfSquares(array) {
  return array.reduce(function(previous, current) {
    return (previous) + (current * current);
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));