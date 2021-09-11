// Write a function that returns all-caps of a string when it is longer
// than 10 characters. Otherwise, return original string.

function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

let overTen = allCaps('hello world');
let underTen = allCaps('goodbye');

console.log(overTen);
console.log(underTen);
