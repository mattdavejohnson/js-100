// Write a multiply function to multiply two numbers from the user
// and return the result

let rlSync = require('readline-sync');

function multiply(num1, num2) {
  return num1 * num2;
}

function getNumber(text) {
  let number = Number(rlSync.question(text));
  return number;
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

