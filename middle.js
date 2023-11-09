// The middle function returns the middle value in an array. Will return the middle value of an odd array, and 2 middle values in an even array.

const middle = function (arr) {
  const copyArr = [...arr];
  const newArr = [];
  const mid = (Math.floor(copyArr.length / 2))
  for (let i = 0; i < copyArr.length; i++) {
    const element = arr[i];
    if (copyArr.length <= 2) {
      return newArr;
    }
    if (i === mid && (copyArr.length % 2 === 0)) {
      newArr.push(element - 1, element)
    } else if (i === mid) {
      newArr.push(element);
    }
  }
  return newArr;
}

module.exports = middle;