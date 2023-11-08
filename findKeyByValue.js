// The findKeyByValue function will scan the object and return the value of the key that matches. If no key is found, then it should return undefined.

const findKeyByValue = function (obj, val) {
  for (const key in obj) {
    if (val === obj[key]) {
      return key;
    }
  }
}

module.exports = findKeyByValue;