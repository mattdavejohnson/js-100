// Write a function that determines whether its argument is an even number
// and then logs 'even' or 'odd'

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(5);
evenOrOdd(6);