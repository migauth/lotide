//The takeUntil function takes an array as the first parameter and returns a new array up to where the callback specifies

const takeUntil = function(array, callback){
  const results = [];
  for (const item of array) { //loop through the array
    if (!callback(item)) { //filter through the array to find false value
      results.push(item); //add values up to that value's index
    } else {
      break //stop the loop
    }
  }
  return results;
}

module.exports = takeUntil;