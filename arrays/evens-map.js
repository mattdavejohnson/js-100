// Use map function to create a new array that contains the string 'even'
// or 'odd' in place of the original array values

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0,];

let newArray = myArray.map(function(element) {
  if (element % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArray);