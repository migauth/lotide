//Imports eqArrays
const eqArrays = require('./eqArrays')

//Compares two objects. Will return true if they are the same, and false if they are not.
const eqObjects = function (object1, object2) {
  const oneKeyArray = Object.keys(object1);
  const twoKeyArray = Object.keys(object2);

  if (oneKeyArray.length !== twoKeyArray.length) {
    return false;
  }

  for (let key of oneKeyArray) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
 return true;
}

module.exports = eqObjects;