// The middle function returns the middle value in an array. Will return the middle value of an odd array, and 2 middle values in an even array.

const middle = function (arr) {
  const copyArr = [...arr]; //Create a copy of the given array
  const newArr = []; //Emtpy array for pushing values into
  const mid = (Math.floor(copyArr.length / 2)) //Find the center of array
  for (let i = 0; i < copyArr.length; i++) { //Loop through array
    const element = arr[i]; 
    if (copyArr.length <= 2) { //If the array has only 2 values return it
      return newArr;
    }
    if (i === mid && (copyArr.length % 2 === 0)) { //If the array is even...
      newArr.push(element - 1, element); //Push the 2 center values
    } else if (i === mid) { //If array is odd
      newArr.push(element); //Push center value
    }
  }
  return newArr;
}

module.exports = middle;