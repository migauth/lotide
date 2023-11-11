// The map function takes an array as the first parameter and returns a new array based on the second callback parameter

const map = function(array, callback) { 
  const results = []; //Empty array for pushing values
  for (const item of array) { //Loop through array
    results.push(callback(item)) //Add values to new array based on callback
  }
  return results;
}

module.exports = map;
