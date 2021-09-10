// Write a program that asks for a name input and then outputs that name

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
console.log(`Hello, ${name}`);