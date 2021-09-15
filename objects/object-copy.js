// Create a function that creates and returns a copy of an object. Do not
// mutate the original object.


// copyObj should take two args: the object to copy and an array of the
// keys you want to copy. If you omit the keys arg, copy all keys in object.
function copyObj(obj, array) {

  if (!array) {
    return Object.assign({}, obj);
  }

  let returnObj = {};
  let objKeys = Object.keys(obj);

  objKeys.forEach(function(element) {
    if (array.includes(element)) {
      returnObj[element] = obj[element];
    }
  });

  return returnObj;
}


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);