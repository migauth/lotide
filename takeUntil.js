//The takeUntil function takes an array as the first parameter and returns a new array up to where the callback specifies

const takeUntil = function(array, callback){
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break
    }
  }
  return results;
}

module.exports = takeUntil;