// Imports eqArrays
const eqArrays = require('./eqArrays')

// Compares two objects. Will return true if they are the same, and false if they are not.

const eqObjects = function (object1, object2) {
  const oneKeyArray = Object.keys(object1); //Keys of object1
  const twoKeyArray = Object.keys(object2); //Keys of object2

  if (oneKeyArray.length !== twoKeyArray.length) { //If the lengths don't match return false
    return false;
  }

  for (let key of oneKeyArray) { //Loop though object1 keys
    if (object1[key] !== object2[key]) { //If the keys don't match
      if (Array.isArray(object1[key])) { //Check if the object1 key is an array
        if (!eqArrays(object1[key], object2[key])) {  //Check the arrays in each obj key
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