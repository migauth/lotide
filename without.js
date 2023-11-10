// The without function takes an array as the first parameter and returns a new array without the specified value in the second parameter

const without = function (source, itemsToRemove) {
  let newSource = [...source]; //create copy of array
  let newArr = []; //empty array
  for (let i = 0; i < itemsToRemove.length; i++) { //loop for the length of itemsToRemove
    let sourceLength = source.length;
    for (let j = 0; j < sourceLength; j++) {
      if (itemsToRemove[i] === source[j]) {
        newArr = newSource.slice(0, j).concat(newSource.slice(j + 1, sourceLength));
      }
    }
  }
  return newArr;
}

module.exports = without;