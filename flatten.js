// The flatten function will take an array with nested arrays (one level deep) and flatten them into a single array with one layer.

const flatten = (arr) => {
  const copyArr = [...arr]; //Creates a copy of the argument array
  const newArr = []; //Creates an empty array

  for (const element of copyArr) { //Loops through each element of argument array
    if (Array.isArray(element)) { //Checks to see if the element is an array
      for (const nested of element) {
        newArr.push(nested); //Adds element to new array unnested
      }
    } else {
      newArr.push(element); //Adds the remining elements of argument array
    }
  }
  return newArr;
};

module.exports = flatten;