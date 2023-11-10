// The findKey function will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  for (const key in object) { //loop through the object
    if (callback(object[key])) { //if the object key is true after running the callback
      return key;
    } 
  }
}

module.exports = findKey;