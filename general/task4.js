const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = (num) => {
  if (num % 2 == 0) {
    return num;
  }
};

function filterArray(arr, callback) {
  return arr.filter(callback);
}

console.log(filterArray(mixedArray, isEven));
