//The countOnly function counts and returns how many of a listed value is included in an array. Will only count if asked to - with boolean value in object, ei { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }.

const countOnly = function (allItems, itemsToCount) {
  const results = {}; //Empty object for pushing values
  for (const item of allItems) { //Loop though array
    if (itemsToCount[item]) { //If the item is present
      if (results[item]) { 
        results[item] += 1; //If item occurs more than once
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;