// Write a function similar to oddLengths but only use reduce instead of
// map and filter

function oddLengths(array) {
  return array.reduce(function(previous, current) {
    let number = current.length;
    if (number % 2 === 1) {
      previous.push(number);
    }
    return previous;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));