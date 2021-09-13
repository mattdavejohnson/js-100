// Write a function that computes and returns the factorial of a number
// using a for loop

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));