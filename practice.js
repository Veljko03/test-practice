function upper(someString) {
  let fLetter = someString.charAt(0);
  let rest = someString.substring(1);
  return fLetter.toUpperCase() + rest;
}

function reverse(someString) {
  return someString.split("").reverse().join("");
}

function analyzeArray(arr) {
  return {
    avrage: getAvrage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getAvrage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

module.exports = { upper, reverse, analyzeArray };
