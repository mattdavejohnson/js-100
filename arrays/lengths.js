// Use map and filter to determine the lengths of all elements in array of
// strings, then discard the even values

function oddLengths(array) {
  let odds = array.map(function(element) {
    return element.length;
  });

  return odds.filter(function(element) {
    return element % 2 === 1;
  });
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));