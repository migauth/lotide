// The findKeyByValue function will scan the object and return the value of the key that matches. If no key is found, then it should return undefined.

const findKeyByValue = function (obj, val) {
  for (const key in obj) { //Loop through each key in the object
    if (val === obj[key]) { //If the given value matches the key value in object return it
      return key;
    }
  }
}

module.exports = findKeyByValue;