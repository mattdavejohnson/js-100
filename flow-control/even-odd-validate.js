// Improve the implementation of evenOrOdd to add a validation check to
// ensure the argument is an integer. Issue an error and return if it is not.

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Error: Entry is not a number');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(5);
evenOrOdd(6);
evenOrOdd('hello');