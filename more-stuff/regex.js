// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument.

function allMatches(strings, regex) {
  let matches = strings.filter(function(string) {
    return regex.test(string);
  });

  return matches;
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));