// Create an array from the keys of the object with all keys converted
// to uppercase and without mutating the object

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);

let upperKeys = objKeys.map(function(key) {
  return key.toUpperCase();
});

console.log(upperKeys);