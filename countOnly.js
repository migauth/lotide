//The countOnly function counts and returns how many of a listed value is included in an array. Will only count if asked to - with boolean value in object, ei { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }.

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;