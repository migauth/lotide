// The map function takes an array as the first parameter and returns a new array based on the second callback parameter

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item))
  }
  return results;
}

module.exports = map;
